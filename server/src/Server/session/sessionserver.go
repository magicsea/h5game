package session

import (
	"Server/cluster"
	"fmt"
	"gameproto"
	"gameproto/msgs"
	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/service"
	"reflect"
	"time"
)

type SessionService struct {
	service.ServiceData
	unlogiinDataMgr *UnloginDataMgr
	sessionMgr      *SessionManager
}

//Service 获取服务对象
func Service() service.IService {
	return new(SessionService)
}

func Type() string {
	return "session"
}

//以下为接口函数
func (s *SessionService) OnReceive(context service.Context) {
	fmt.Println("session.OnReceive:", context.Message())
}

func (s *SessionService) OnInit() {
	s.sessionMgr = NewSessionManager()
	s.unlogiinDataMgr = NewUnloginDataMgr(time.Second * 3)
}

func (s *SessionService) OnStart(as *service.ActorService) {
	as.RegisterMsg(reflect.TypeOf(&msgs.UserLogin{}), s.OnUserLogin)                     //注册登录
	as.RegisterMsg(reflect.TypeOf(&msgs.ServerCheckLogin{}), s.OnUserCheckLogin)         //二次验证
	as.RegisterMsg(reflect.TypeOf(&msgs.CreatePlayerResult{}), s.OnUserCheckLoginGsBack) //二次验证gs返回
	as.RegisterMsg(reflect.TypeOf(&msgs.GetSessionInfo{}), s.GetSessionInfo)             //查询玩家信息
	as.RegisterMsg(reflect.TypeOf(&msgs.GetSessionInfoByName{}), s.GetSessionInfoByName) //查询玩家信息通过名字
	as.RegisterMsg(reflect.TypeOf(&msgs.UserLeave{}), s.OnUserLeave)                     //玩家掉线

}

//查询玩家信息
func (s *SessionService) GetSessionInfo(context service.Context) {
	fmt.Println("SessionService.GetSessionInfo:", context.Message())
	msg := context.Message().(*msgs.GetSessionInfo)
	ss := s.sessionMgr.GetSession(msg.Uid)
	if ss != nil {
		context.Tell(context.Sender(), &msgs.GetSessionInfoResult{Result: msgs.OK, UserInfo: ss.userInfo, AgentPID: ss.agentPid})
	} else {
		context.Tell(context.Sender(), &msgs.GetSessionInfoResult{Result: msgs.Fail})
	}
}

//查询玩家信息 by name
func (s *SessionService) GetSessionInfoByName(context service.Context) {
	fmt.Println("SessionService.GetSessionInfoByName:", context.Message())
	msg := context.Message().(*msgs.GetSessionInfoByName)
	ss := s.sessionMgr.GetSessionByName(msg.Name)
	if ss != nil {
		context.Tell(context.Sender(), &msgs.GetSessionInfoResult{Result: msgs.OK, UserInfo: ss.userInfo, AgentPID: ss.agentPid})
	} else {
		context.Tell(context.Sender(), &msgs.GetSessionInfoResult{Result: msgs.Fail})
	}
	fmt.Println("GetSessionInfoByName end")
}

//玩家登陆
func (s *SessionService) OnUserLogin(context service.Context) {
	fmt.Println("SessionService.OnUserLogin:", context.Message())
	msg := context.Message().(*msgs.UserLogin)

	//踢掉老玩家
	oldSession := s.sessionMgr.GetSession(msg.Uid)
	if oldSession != nil {
		oldSession.Kick("try kick same", msgs.ST_NONE)
		s.sessionMgr.RemoveSession(msg.Uid)
	}

	//查看是否多次验证
	oldCheck := s.unlogiinDataMgr.Get(msg.Uid)
	if oldCheck != nil {
		s.unlogiinDataMgr.Remove(oldCheck)
	}

	//请求gate
	result, err := cluster.GetServicePID("center").Ask(&msgs.ApplyService{"gate"})
	if err != nil {
		log.Error("get gate server,%v", err)
		context.Tell(context.Sender(), &gameproto.UserLoginResult{Result: int32(msgs.Error)})
		return
	}

	sr := result.(*msgs.ApplyServiceResult)
	if sr.Result != msgs.OK {
		context.Tell(context.Sender(), &gameproto.UserLoginResult{Result: int32(sr.Result)})
		return
	}

	//加入数据
	key := "1111"
	//uInfo := &msgs.UserBaseInfo{msg.Account, "玩家" + strconv.Itoa(int(msg.Uid)), msg.Uid}
	//ss := &PlayerSession{userInfo: uInfo, gatePid: sr.Pid, key: "1111"}
	//s.sessionMgr.AddSession(ss)
	s.unlogiinDataMgr.Push(msg.Uid, key, nil)

	gateAddr := GetServiceValue("TcpAddr", sr.Values)
	gateWsAddr := GetServiceValue("WsAddr", sr.Values)
	context.Tell(context.Sender(), &gameproto.UserLoginResult{Uid: uint32(msg.Uid), GateTcpAddr: gateAddr, GateWsAddr: gateWsAddr, Key: key, Result: int32(msgs.OK)})
}

func GetServiceValue(key string, values []*msgs.ServiceValue) string {
	for _, v := range values {
		if v.Key == key {
			return v.Value
		}
	}
	return ""
}

//玩家验证
func (s *SessionService) OnUserCheckLogin(context service.Context) {
	fmt.Println("SessionService.OnUserCheckLogin:", context.Message())
	msg := context.Message().(*msgs.ServerCheckLogin)

	checkData := s.unlogiinDataMgr.Get(msg.Uid)
	//人不在
	if checkData == nil {
		log.Error("OnUserCheckLogin,no found player,id=%v,count=%d", msg.Uid, len(s.unlogiinDataMgr.dataMap))
		context.Tell(context.Sender(), &msgs.CheckLoginResult{Result: msgs.Fail})
		return
	}
	s.unlogiinDataMgr.Remove(checkData)
	//密码错
	if checkData.key != msg.Key {
		log.Error("OnUserCheckLogin,key error,id=%v,key=%v:%v", msg.Uid, checkData.key, msg.Key)
		context.Tell(context.Sender(), &msgs.CheckLoginResult{Result: msgs.KeyError})
		return
	}
	//请求gameserver
	result, err := cluster.GetServicePID("center").Ask(&msgs.ApplyService{"game"})
	if err != nil {
		log.Error("get gameserver error:%v", err)
		context.Tell(context.Sender(), &msgs.CheckLoginResult{Result: msgs.Error})
		return
	}

	sr := result.(*msgs.ApplyServiceResult)
	if sr.Result != msgs.OK {
		context.Tell(context.Sender(), &msgs.CheckLoginResult{Result: sr.Result})
		return
	}
	gsPid := sr.Pid
	context.Request(gsPid, &msgs.CreatePlayer{Uid: msg.Uid, AgentPID: msg.AgentPID, Sender: context.Sender(),
		GatePID: nil, Key: "1111"})
	log.Info("SessionService.OnUserCheckLogin pre:", msg.Uid)
	/*
		//安装
		//todo:这里可能比较耗时，以后改成异步
		gsPid := sr.Pid
		r, err := context.RequestFuture(gsPid, &msgs.CreatePlayer{msg.Uid, msg.AgentPID}, time.Second*3).Result()
		if err != nil {
			log.Error("OnUserCheckLogin,create player error,id=%v,%v", msg.Uid, err)
			context.Tell(context.Sender(), &msgs.CheckLoginResult{Result: msgs.Error})
			return
		}
		cresult, _ := r.(*msgs.CreatePlayerResult)
		if cresult.Result != msgs.OK {
			log.Error("OnUserCheckLogin,create player fail,id=%v,%v", msg.Uid, cresult.Result)
			context.Tell(context.Sender(), &msgs.CheckLoginResult{Result: msgs.Error})
			return
		}
		//完成

		//uInfo := &msgs.UserBaseInfo{"", "玩家" + strconv.Itoa(int(msg.Uid)), msg.Uid}
		ss := &PlayerSession{userInfo: cresult.BaseInfo, gatePid: sr.Pid, key: "1111"}
		s.sessionMgr.AddSession(ss)
		ss.agentPid = msg.AgentPID
		ss.gamePlayerPid = cresult.PlayerPID

		//发送消息
		gsValue := msgs.UserBindServer{msgs.GameServer, cresult.GetPlayerPID()}
		context.Tell(context.Sender(), &msgs.CheckLoginResult{
			Result:      msgs.OK,
			BaseInfo:    ss.userInfo,
			BindServers: []*msgs.UserBindServer{&gsValue}})

		log.Info("SessionService.OnUserCheckLogin ok:", msg.Uid)
	*/
}

func (s *SessionService) OnUserCheckLoginGsBack(context service.Context) {
	fmt.Println("SessionService.OnUserCheckLogin:", context.Message())
	cresult := context.Message().(*msgs.CreatePlayerResult)

	id := cresult.TransData.Uid
	sender := cresult.TransData.Sender
	if cresult.Result != msgs.OK {
		log.Error("OnUserCheckLogin,create player fail,id=%v,%v", id, cresult.Result)
		context.Tell(sender, &msgs.CheckLoginResult{Result: msgs.Error})
		return
	}
	//完成

	//uInfo := &msgs.UserBaseInfo{"", "玩家" + strconv.Itoa(int(msg.Uid)), msg.Uid}
	ss := &PlayerSession{userInfo: cresult.BaseInfo, gatePid: cresult.TransData.GatePID, key: cresult.TransData.Key}
	s.sessionMgr.AddSession(ss)
	ss.agentPid = cresult.TransData.AgentPID
	ss.gamePlayerPid = cresult.PlayerPID

	//发送消息
	gsValue := msgs.UserBindServer{msgs.GameServer, cresult.GetPlayerPID()}
	bsValue := msgs.UserBindServer{msgs.BattleServer, cresult.GetRoomPID()}
	context.Tell(sender, &msgs.CheckLoginResult{
		Result:      msgs.OK,
		BaseInfo:    ss.userInfo,
		BindServers: []*msgs.UserBindServer{&gsValue, &bsValue}})

	log.Info("SessionService.OnUserCheckLogin ok:", id)
}

//离线
func (s *SessionService) OnUserLeave(context service.Context) {
	fmt.Println("SessionService.OnUserLeave:", context.Message())
	msg := context.Message().(*msgs.UserLeave)
	//内存移除
	ss := s.sessionMgr.RemoveSession(msg.Uid)
	//踢人
	if ss != nil {
		ss.Kick(msg.Reason, msg.From)
	}
}
