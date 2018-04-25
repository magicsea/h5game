package gate

import (
	"Server/cluster"
	"errors"
	"gameproto"
	"gameproto/msgs"
	"github.com/magicsea/ganet/gateframework"
	"github.com/magicsea/ganet/log"

	"time"

	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/gogo/protobuf/proto"
	"github.com/magicsea/ganet/config"
	gp "github.com/magicsea/ganet/proto"
	"github.com/magicsea/ganet/service"
)

type AgentActor struct {
	key         string
	verified    bool
	bindAgent   gateframework.Agent
	pid         *actor.PID
	parentPid   *actor.PID
	baseInfo    *msgs.UserBaseInfo
	bindServers map[int]*actor.PID
	wantDead    bool
}

func NewAgentActor(context service.Context, agent gateframework.Agent) *AgentActor {
	//创建actor
	//r, err := parentPid.RequestFuture(&msgs.NewChild{}, 3*time.Second).Result()
	ab := &AgentActor{verified: false, bindAgent: agent}
	pid := context.Spawn(actor.FromInstance(ab))
	ab.pid = pid
	ab.parentPid = context.Self()
	ab.bindServers = make(map[int]*actor.PID)
	return ab
}

func (ab *AgentActor) getNetType() gateframework.NetType {
	return ab.bindAgent.GetNetType()
}

//外部调用tell
func (ab *AgentActor) Tell(msg proto.Message) {

}

//收到后端消息
func (ab *AgentActor) Receive(context actor.Context) {
	//log.Info("agent.ReceviceServerMsg:", reflect.TypeOf(context.Message()))
	switch msg := context.Message().(type) {
	case *msgs.Kick:
		ab.OnStop()
		//todo:not safe
		ab.bindAgent.SetDead() //被动死亡，防止二次关闭
		ab.bindAgent.Close()   //关闭连接
	case *msgs.ClientDisconnect:
		//上报
		if ab.baseInfo != nil {
			ss := cluster.GetServicePID("session")
			ss.Tell(&msgs.UserLeave{Uid: ab.baseInfo.Uid, From: msgs.ST_GateServer, Reason: "client disconnect"})
		}
		ab.OnStop()
		context.Self().Stop()
	case *msgs.ReceviceClientMsg:
		//收到客户端消息
		ab.ReceviceClientMsg(msg.Rawdata)
	case *msgs.FrameMsg:
		ab.SendClientPack(msg.MsgId, msg.RawData)
	case *msgs.FrameMsgJson:
		ab.SendClientPack(msg.MsgId, msg.RawData)
	case *msgs.AttachBattle:
		ab.bindServers[int(msgs.BattleServer)] = msg.RoomPID
	case *msgs.DetachBattle:
		delete(ab.bindServers, int(msgs.BattleServer))
	}
}

func (ab *AgentActor) GetChannelServer(channel int) *actor.PID {
	c := msgs.ChannelType(channel / 100 * 100) //简单对应
	//log.Info("GetChannelServer,%v,%v", channel, c)
	if ab.bindServers == nil {
		return nil
	}
	if pid, ok := ab.bindServers[int(c)]; ok {
		return pid
	}
	return nil
}
func (ab *AgentActor) GetNetPack() NetPack {
	return GetNetPackByConf()
}

//收到前端消息
func (ab *AgentActor) ReceviceClientMsg(data []byte) error {
	//log.Info("ReceviceClientMsg:", len(data), data)
	pack := ab.GetNetPack()
	msgId, rawdata, err := pack.Unmarshal(data)
	if msgId != "b_move" {
		log.Info("recv:%v", msgId)
	}

	if err != nil {
		log.Error("pack.Unmarshal error:%v,%v", data, err)
		return errors.New("AgentActor recv too short")
	}
	//心跳包
	channel := pack.GetChannelType(msgId)
	if channel == ChannelHeartbeat {
		ab.SendClientPack(msgId, rawdata)
		return nil
	}

	//认证
	if !ab.verified {
		return ab.CheckLogin(msgId, rawdata)
	}

	//转发
	return ab.forward(msgId, rawdata, channel)
}

//验证消息
func (ab *AgentActor) CheckLogin(msgId interface{}, rawdata []byte) error {
	log.Info("checklogin:%s", string(rawdata))
	msg := gameproto.PlatformUser{}
	err := gp.Unmarshal(rawdata, &msg)
	if err != nil {
		log.Error("CheckLogin fail:%v,msgid:%v", err, msgId)
		return err
	}
	pretime := time.Now()

	// smsg := &msgs.ServerCheckLogin{Uid: uint64(msg.PlatformUid), Key: msg.Key, AgentPID: ab.pid}
	// result, err := cluster.GetServicePID("session").Ask(smsg)
	// if err == nil {
	// 	checkResult := result.(*msgs.CheckLoginResult)
	// 	if checkResult.Result == msgs.OK {
	// 		//登录成功
	// 		usetime := time.Now().Sub(pretime)
	// 		log.Info("CheckLogin success:%v,time:%v", checkResult, usetime.Seconds())
	// 		ab.baseInfo = checkResult.BaseInfo
	// 		for _, s := range checkResult.BindServers {
	// 			if s.Pid != nil {
	// 				ab.bindServers[int(s.Channel)] = s.Pid
	// 			}
	// 		}
	// 		ab.verified = true
	// 		ab.parentPid.Tell(&msgs.AddAgentToParent{Uid: checkResult.BaseInfo.Uid, Sender: ab.pid})
	// 	} else {
	// 		log.Info("###CheckLogin fail:", checkResult)
	// 	}

	// 	ret := &gameproto.LoginReturn{ErrCode: int32(checkResult.Result), ServerTime: int32(time.Now().Unix())}
	// 	ab.SendClient(msgId, ret)

	// } else {
	// 	log.Error("CheckLogin error :" + err.Error())
	// }
	spid, code := GetBestGameserver()
	if code != msgs.OK {
		log.Error("GetBestGameserver error:%v", code)
		return errors.New("GetBestGameserver error")
	}
	smsg := &msgs.ServerCheckLogin{Uid: uint64(msg.PlatformUid), Key: msg.Key, AgentPID: ab.pid}
	result, err := spid.RequestFuture(smsg, time.Second*3).Result()
	if err == nil {
		//登录成功
		checkResult := result.(*msgs.CheckLoginResult)
		if checkResult.Result == msgs.OK {
			//登录成功
			usetime := time.Now().Sub(pretime)
			log.Info("CheckLogin success:%v,time:%v", checkResult, usetime.Seconds())
			ab.baseInfo = checkResult.BaseInfo
			for _, s := range checkResult.BindServers {
				if s.Pid != nil {
					ab.bindServers[int(s.Channel)] = s.Pid
				}
			}
			ab.verified = true
			ab.parentPid.Tell(&msgs.AddAgentToParent{Uid: checkResult.BaseInfo.Uid, Sender: ab.pid})

			ret := &gameproto.LoginReturn{ErrCode: int32(checkResult.Result), ServerTime: int32(time.Now().Unix())}
			ab.SendClient(msgId, ret)

		} else {
			log.Info("###CheckLogin fail:", checkResult)
		}
	} else {
		log.Error("CheckLogin error :" + err.Error())
	}
	return nil
}

//均衡负载选择服务器
func GetBestGameserver() (*actor.PID, msgs.GAErrorCode) {
	//请求gameserver
	result, err := cluster.GetServicePID("center").Ask(&msgs.ApplyService{"game"})
	if err != nil {
		log.Error("get gameserver error:%v", err)
		return nil, msgs.Error
	}
	sr := result.(*msgs.ApplyServiceResult)
	return sr.Pid, msgs.OK
}

//发送消息到客户端
func (ab *AgentActor) SendClient(msgId interface{}, msg proto.Message) {
	mdata, err := gp.Marshal(msg)
	if err != nil {
		log.Error("SendClient marshal error:%v", err)
		return
	}
	//log.Info("sendclient:msg%v,data:%d=>%v", pack.msgID, len(pack.rawData), pack.rawData)
	ab.SendClientPack(msgId, mdata)
}

//func (ab *AgentActor) SendClientRaw(c msgs.ChannelType, msgId byte, mdata []byte) {
//	data := []byte{byte(c), msgId}
//	data = append(data, mdata...)
//	ab.bindAgent.WriteMsg(data)
//}

func (ab *AgentActor) SendClientPack(msgId interface{}, rawdata []byte) {
	//data := pack.Write()
	var pack = ab.GetNetPack()
	data, err := pack.Marshal(msgId, rawdata)
	if err != nil {
		log.Error("SendClientPack marshal error:id=%v,%s", msgId, err.Error())
		return
	}
	// if msgId != "snap" {
	// 	log.Info("send:%s,id=%s,r=%s", string(data), msgId, string(rawdata))
	// }
	ab.bindAgent.WriteMsg(data)
}

//转发
func (ab *AgentActor) forward(msgId interface{}, rawdata []byte, channel ChannelType) error {
	//test gate
	//if channel == byte(msgs.Shop) {
	//	ab.SendClient(msgs.Shop, byte(msgs.S2C_ShopBuy), &msgs.S2C_ShopBuyMsg{ItemId: 1, Result: msgs.OK})
	//	return nil
	//}
	if msgId != "b_move" {
		log.Info("=========>forward msg:%v", msgId)
	}

	pid := ab.GetChannelServer(int(channel))
	if pid == nil {
		log.Error("forward server nil:%+v,c=%v,m=%v", pid, channel, msgId)
		return nil
	}
	if config.IsJsonProto() {
		frame := &msgs.FrameMsgJson{MsgId: msgId.(string), RawData: rawdata, Uid: ab.baseInfo.Uid}
		pid.Request(frame, ab.pid)
	} else {
		frame := &msgs.FrameMsg{MsgId: uint32(msgId.(byte)), RawData: rawdata, Uid: ab.baseInfo.Uid}
		pid.Request(frame, ab.pid)
	}

	//r, e := pid.RequestFuture(frame, time.Second*3).Result()
	//if e != nil {
	//	log.Error("forward error:id=%v, err=%v", ab.baseInfo.Uid, e)
	//}

	//rep := r.(*msgs.FrameMsgRep)
	//repMsg := &gameproto.S2C_ConfirmInfo{MsgHead: int32(msgid), Code: int32(rep.ErrCode)}
	//ab.SendClient(msgs.GameServer, byte(gameproto.S2C_CONFIRM), repMsg)
	return nil
}

func (ab *AgentActor) OnStop() {
	if ab.verified && ab.baseInfo != nil {
		ab.parentPid.Tell(&msgs.RemoveAgentFromParent{Uid: ab.baseInfo.Uid})
	}
}
