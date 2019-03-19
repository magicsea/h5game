package game

import (
	"Server/cluster"
	"Server/db"
	"fmt"
	"github.com/magicsea/ganet/log"

	"github.com/magicsea/ganet/service"
	"github.com/magicsea/ganet/util"

	"gameproto"
	"gameproto/msgs"

	"time"

	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/gogo/protobuf/proto"
	"github.com/magicsea/ganet/config"
	gp "github.com/magicsea/ganet/proto"
)

type Player struct {
	UID uint64
	//baseInfo    *msgs.UserBaseInfo                 //基础信息
	selfPID   *actor.PID //本地地址
	agentPID  *actor.PID //gate的agent地址
	parentPID *actor.PID //管理
	//modules     []IPlayerModule                    //所有player模块
	//rounter     map[msgs.ChannelType]IPlayerModule //消息路由到模块
	//msgHandler  map[uint32]MessageReqFunc
	timer *time.Ticker
	//isDataDirty bool

	//_transData *msgs.CreatePlayer
}

func NewPlayer(uid uint64, agentpid *actor.PID, trans *msgs.CreatePlayer, context service.Context) (*Player, error) {
	p := &Player{UID: uid, agentPID: agentpid}
	//p.msgHandler = make(map[uint32]MessageReqFunc)
	//p.rounter = make(map[msgs.ChannelType]IPlayerModule)
	p.parentPID = context.Self()
	props := actor.PropsFromProducer(func() actor.Actor {return p})
	pid := context.Spawn(props)
	pid.Tell(trans)
	//pid, err := actor.SpawnWithParent(props, parent)
	//if err != nil {
	//	return nil, err
	//}
	//p.selfPID = pid

	log.Info("NewPlayer:%v, pid=%v", p.GetID(), pid)
	return p, nil
}

func (p *Player) Receive(context actor.Context) {
	switch msg := context.Message().(type) {
	case *actor.Started:
		log.Info("player Started, initialize actor here")
	case *msgs.CreatePlayer:
		log.Info("player CreatePlayer:%v", p.UID)
		p.selfPID = context.Self()
		result := p.Start()
		p.OnLoginOK(context, msg, result)
	case *actor.Stopping:
		fmt.Println("Stopping, actor is about shut down", msg)
		p.OnDestory()
		//case *actor.Stopped:
		//	fmt.Println("Stopped, actor and its children are stopped")
	case *msgs.Tick:
		p.OnTick()
	case *msgs.Kick:
		p.OnOutline(msg.Reason)
		context.Self().Stop() //kill!
	case *msgs.FrameMsg: //客户端消息
	case *msgs.FrameMsgJson:
		Rounter(p, msg.MsgId, msg.RawData)
	case *msgs.MatchBattle: //lobby消息
		p.OnMatchEnd(msg)
	}
}

//GetID 获取uid
func (p *Player) GetID() uint64 {
	return p.UID
}

//GetLevel 获取玩家等级
// func (p *Player) GetLevel() uint64 {
// 	return p.baseInfo.Lv
// }

//GetName 获取名字
func (p *Player) ReadName() string {
	gamedb := db.GetRedisGame()
	//player := &db.Player{}
	s, _ := db.GetRedisObjectFieldByKey("Player", p.GetID(), gamedb, "Name")
	return s
}

func (p *Player) ReadPlayerInfo() *db.Player {
	gamedb := db.GetRedisGame()
	player := &db.Player{}
	db.GetRedisObject(player, p.GetID(), gamedb)
	return player
}

func (p *Player) String() string {
	return fmt.Sprintf("player%v:", p.GetID())
}

func (p *Player) Start() msgs.GAErrorCode {
	defer util.PrintPanicStack()

	//p.InitModules()
	isFirst := p.InitTable()

	p.LoadData(isFirst)

	p.StartTimer()

	log.Info("player.start...")
	// for _, mod := range p.modules {
	// 	mod.OnStart()
	// }

	player := p.ReadPlayerInfo()

	//登录完成
	p.SendGameMsg("logininfo",
		&gameproto.LoginInfo{
			Id:       int64(p.UID),
			Level:    int32(player.Lv),
			Exp:      int64(player.Exp),
			Nickname: player.Name,
			HeadId:   int32(player.Cgid),
			Gold:     player.Gold,
			Diamond:  player.Rmb,
		})
	return msgs.OK

}

func (p *Player) OnLoginOK(context actor.Context, tmsg *msgs.CreatePlayer, errCode msgs.GAErrorCode) {

	roomPID := p.recoverBattle()

	id := p.UID
	sender := tmsg.Sender
	if errCode != msgs.OK {
		log.Error("OnLoginOK,create player fail,id=%v,%v", id, errCode)
		context.Send(sender, &msgs.CheckLoginResult{Result: msgs.Error})
		return
	}

	inf := &msgs.UserBaseInfo{Uid: id}
	result := &msgs.CreatePlayerResult{
		Result:    msgs.OK,
		BaseInfo:  inf,
		PlayerPID: context.Self(),
		RoomPID:   roomPID,
		TransData: tmsg}

	//send sesson
	ss := cluster.GetServicePID("session")
	context.Send(ss.GetActorPID(), result)

	//send client
	gsValue := msgs.UserBindServer{msgs.GameServer, p.selfPID}
	bsValue := msgs.UserBindServer{msgs.BattleServer, roomPID}
	context.Send(sender, &msgs.CheckLoginResult{
		Result:      msgs.OK,
		BaseInfo:    inf,
		BindServers: []*msgs.UserBindServer{&gsValue, &bsValue}})

	log.Info("player.OnLoginOK  ok:%v", p.UID)

}

//回到战场
func (p *Player) recoverBattle() *actor.PID {
	info := db.GetPlayerBattleInfo(p.GetID())
	if info == nil {
		return nil
	}
	if len(info.BattleAddr) < 1 {
		return nil
	}
	pid := actor.NewPID(info.BattleAddr, info.BattleAddrID)
	if pid == nil {
		return nil
	}
	rep, err := pid.RequestFuture(msgs.RecoverBattle{Uid: p.GetID(), AgentPID: p.agentPID}, time.Second).Result()
	if err != nil {
		log.Error("recoverBattle ask error:%v", err)
		return nil
	}
	rmsg := rep.(*msgs.RecoverBattleRep)
	if rmsg.Result != msgs.OK {
		log.Error("recoverBattle fail:%v", rmsg.Result)
		return nil
	}
	return rmsg.RoomPID
}

//匹配成功
func (p *Player) OnMatchEnd(msg *msgs.MatchBattle) {
	//PlayerBattle BattleState
	//info := &db.PlayerBattleInfo{}
	//db.ClearPlayerBattleInfo(p.GetID(), info)
	p.agentPID.Tell(&msgs.AttachBattle{RoomPID: msg.RoomPID})
	p.SendGameMsg("readyBattle", &gameproto.C_StartBattle{RoomId: msg.RoomId})
}

func (p *Player) isNeedCreate() bool {
	//client := db.GetGameDB()
	//var temp db.Player
	//temp.Id = p.GetID()
	//norow, _ := client.Read(&temp)
	//return norow
	gamedb := db.GetRedisGame()
	player := &db.Player{}
	found, _ := db.GetRedisObject(player, p.GetID(), gamedb)
	return !found
}

// 尝试InitTable第一次插入数据
func (p *Player) InitTable() bool {
	defer util.PrintPanicStack()

	if p.isNeedCreate() {
		log.Info("create new player:%v", p.GetID())
		gamedb := db.GetRedisGame()
		player := &db.Player{Id: p.GetID(), Name: "", Lv: 1, Gold: 500}
		db.SetRedisObject(player, p.GetID(), gamedb)
		log.Info("create new player:%v  end#", p.GetID())
		return true
	}
	return false
}

//StartTimer 计时器(new goroutine!)
func (p *Player) StartTimer() {
	p.timer = util.StartLoopTask(time.Minute, func() {
		p.selfPID.Tell(&msgs.Tick{}) //转主线程执行
	})

}

//OnTick 定时帧
func (p *Player) OnTick() {
	// p.AutoSave()
	// for _, mod := range p.modules {
	// 	mod.OnTick()
	// }

}

//LoadData 从db加载数据，长时阻塞操作
func (p *Player) LoadData(isFisrt bool) {
	//p.baseInfo = &msgs.UserBaseInfo{Uid: p.UID, Name: "玩家" + strconv.Itoa(int(p.UID))}
	log.Info("player loaddata:", p.UID)
	//无状态就不要预载了
	// for _, mod := range p.modules {
	// 	mod.OnLoad()
	// }

}

//主动离开
func (p *Player) ActiveLeave() {
	//上报
	ss := cluster.GetServicePID("session")
	msg := &msgs.UserLeave{Uid: p.GetID(), From: msgs.ST_GameServer, Reason: "gameserver acive leave"}
	ss.Tell(msg)
	//保存
	p.OnOutline(msg.Reason)
	p.selfPID.Stop() //kill!
}

func (p *Player) OnOutline(reason string) {
	log.Info("player outline,%v,=> %v", p.String(), reason)

	//更新离开时间
	// now := time.Now().Unix()
	// user := &db.User{Id: int64(p.GetID()), LastLogoutTime: now}
	// db.GetGameDB().Update(user, "LastLogoutTime")

	info := db.GetPlayerBattleInfo(p.GetID())
	if info != nil {
		if len(info.BattleAddr) >= 1 {
			pid := actor.NewPID(info.BattleAddr, info.BattleAddrID)
			if pid != nil {
				pid.Tell(&msgs.UserLeave{Uid: p.GetID(), Reason: "leave"})
			}
		}
	}

}

func (p *Player) OnDestory() {
	p.timer.Stop()
	//p.AutoSave()
	// for _, mod := range p.modules {
	// 	mod.OnDestory()
	// }
}

//game协议发送到客户端
func (p *Player) SendGameMsg(msgId interface{}, msg proto.Message) {
	data, err := gp.Marshal(msg)
	if err != nil {
		log.Error("SendGameMsg.Marshal error:%v", err)
	}
	if config.IsJsonProto() {
		frame := &msgs.FrameMsgJson{MsgId: msgId.(string), RawData: data}
		p.agentPID.Tell(frame)
	} else {
		frame := &msgs.FrameMsg{MsgId: uint32(msgId.(int64)), RawData: data}
		p.agentPID.Tell(frame)
	}
	log.Info("====>s2c:%v,%+v", msgId, msg)
}

//发送到其他玩家
func SendPlayerClientMsg(gatePID *actor.PID, msgId interface{}, msg proto.Message) {
	data, err := gp.Marshal(msg)
	if err != nil {
		log.Error("SendPlayerClientMsg.Marshal error:%v", err)
	}

	if config.IsJsonProto() {
		frame := &msgs.FrameMsgJson{MsgId: msgId.(string), RawData: data}
		gatePID.Tell(frame)
	} else {
		frame := &msgs.FrameMsg{MsgId: uint32(msgId.(int64)), RawData: data}
		gatePID.Tell(frame)
	}
}

//发送到其他玩家
func SendWorldMsg(msgId interface{}, msg proto.Message) {
	data, err := gp.Marshal(msg)
	if err != nil {
		log.Error("SendPlayerClientMsg.Marshal error:%v", err)
	}
	if config.IsJsonProto() {
		frame := &msgs.FrameMsgJson{MsgId: msgId.(string), RawData: data}

		result := AskCenter(&msgs.GetTypeServices{ServiceType: "gate"})
		if result != nil {
			resultIns := result.(*msgs.GetTypeServicesResult)
			if resultIns.Pids != nil {
				for _, pid := range resultIns.Pids {
					pid.Tell(&msgs.BroadcastFrameMsgJson{FrameMsg: frame})
				}
			}
		}
	} else {
		frame := &msgs.FrameMsg{MsgId: uint32(msgId.(int64)), RawData: data}

		result := AskCenter(&msgs.GetTypeServices{ServiceType: "gate"})
		if result != nil {
			resultIns := result.(*msgs.GetTypeServicesResult)
			if resultIns.Pids != nil {
				for _, pid := range resultIns.Pids {
					pid.Tell(&msgs.BroadcastFrameMsg{FrameMsg: frame})
				}
			}

		}
	}

}

func AskSession(msg proto.Message) interface{} {
	ss := cluster.GetServicePID("session")
	result, err := ss.Ask(msg)
	if err != nil {
		log.Error("player.AskSession error:%v", err)
	}
	return result
}

func AskCenter(msg proto.Message) interface{} {
	ss := cluster.GetServicePID("center")
	result, err := ss.Ask(msg)
	if err != nil {
		log.Error("player.AskCenter error:%v", err)
	}
	return result
}

func AskLobby(msg proto.Message) interface{} {
	ss := cluster.GetServicePID("lobby")
	result, err := ss.Ask(msg)
	if err != nil {
		log.Error("player.AskLobby error:%v", err)
	}
	return result
}
