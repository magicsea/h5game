package battle

import (
	"Server/cluster"
	"gameproto/msgs"
	"github.com/AsynkronIT/protoactor-go/actor"

	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/service"
	"github.com/magicsea/ganet/util"
	"reflect"
	"time"
)

type BattleService struct {
	service.ServiceData
	agents       map[uint64]*actor.PID
	battleMgrPID *actor.PID
	isReg        bool
}

//Service 获取服务对象
func Service() service.IService {
	return new(BattleService)
}

func Type() string {
	return "battle"
}

//以下为接口函数
func (s *BattleService) OnReceive(context service.Context) {
	log.Debug("BattleService.OnReceive:%v", context.Message())
	defer util.PrintPanicStack()
	switch msg := context.Message().(type) {
	case *msgs.CreateBattle: //创建战场
		s.CreateRoom(msg, context)
	case *msgs.JoinBattle: //加入已有战场
		s.JoinRoom(msg, context)
	}
}

func (s *BattleService) OnInit() {
	InitBev()
}

func (s *BattleService) OnStart(as *service.ActorService) {
	//as.RegisterMsg(reflect.TypeOf(&msgs.GetBattleServer{}), s.OnGetBestBattleServer)
	as.RegisterMsg(reflect.TypeOf(&msgs.Kick{}), s.OnKick)                    //踢人
	as.RegisterMsg(reflect.TypeOf(&msgs.Tick{}), s.OnTick)                    //定时任务
	as.RegisterMsg(reflect.TypeOf(&msgs.AddServiceRep{}), s.OnRegOK)          //注册完成
	as.RegisterMsg(reflect.TypeOf(&actor.Terminated{}), s.OnDisconnectCenter)  //被动断开服务器
	log.Debug("battle OnStart ok!!")
}

func (s *BattleService) OnRun() {
	//注册到center
	s.RegToCenter()
	//cluster.RegServerWork(&s.ServiceData, nil)
	//定时任务
	util.StartLoopTask(time.Second*5, func() {
		s.Pid.Tell(&msgs.Tick{}) //转主线程执行
	})
}

//注册到中心服务器
func (s *BattleService) RegToCenter() {
	//注册到center
	//valtcp := &msgs.ServiceValue{"TcpAddr", config.GetServiceConfigString(s.Name, "TcpAddrOut")}
	//valws := &msgs.ServiceValue{"WsAddr", config.GetServiceConfigString(s.Name, "WsAddrOut")}
	//cluster.RegServerWork(&s.ServiceData, []*msgs.ServiceValue{valtcp, valws})
	r := cluster.GetServicePID("center")
	msg := msgs.AddService{
		ServiceName: s.Name,
		ServiceType: s.TypeName,
		Pid:         s.GetPID(),
		Values:      nil}

	//context := actor.EmptyRootContext
	//context.Request(r.GetActorPID(),&msg)
	r.GetActorPID().Request(&msg, s.Pid)
	log.Info("BattleService RegToCenter !!!")
}

//注册成功
func (s *BattleService) OnRegOK(context service.Context) {
	s.isReg = true
	log.Info("BattleService reg ok!!!")
	context.Watch(context.Sender())
}

//从中心断开
func (s *BattleService) OnDisconnectCenter(context service.Context) {
	s.isReg = false
	log.Info("BattleService OnDisconnectCenter !!!")
}

func (s *BattleService) OnTick(context service.Context) {
	if !s.isReg {
		s.RegToCenter()
		return
	}

	load := len(context.Children())
	cluster.UpdateServiceLoad(s.Name, uint32(load), msgs.ServiceStateFree)
}

func (s *BattleService) OnKick(context service.Context) {
	msg := context.Message().(*msgs.Kick)
	log.Info("BattleService.OnKick:%v", msg)
	if agent, ok := s.agents[msg.Uid]; ok {
		agent.Tell(&msgs.Kick{Uid: msg.Uid})
	}
}

func (s *BattleService) CreateRoom(msg *msgs.CreateBattle, context service.Context) {
	pid, _ := NewRoom(msg, context)
	context.Respond(&msgs.CreateBattleRep{Result: msgs.OK, RoomPID: pid})
}

func (s *BattleService) JoinRoom(msg *msgs.JoinBattle, context service.Context) {
	//NewRoom(msg, context)

}
