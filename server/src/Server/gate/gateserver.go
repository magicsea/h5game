package gate

import (
	"Server/cluster"
	"gameproto/msgs"
	"github.com/magicsea/ganet/config"
	gfw "github.com/magicsea/ganet/gateframework"
	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/service"
	"github.com/magicsea/ganet/util"

	"reflect"
	"time"

	"github.com/AsynkronIT/protoactor-go/actor"
)

type GateService struct {
	service.ServiceData
	agents    map[uint64]*actor.PID
	actorchan chan *AgentActor //传说创建actor
	isReg     bool
}

//Service 获取服务对象
func Service() service.IService {
	return new(GateService)
}

func Type() string {
	return "gate"
}

type NewAagentActorMsg struct {
	Agent gfw.Agent
}
type NewAagentActorResultMsg struct {
	Pid *actor.PID
}

//以下为接口函数
func (s *GateService) OnReceive(context service.Context) {
	log.Debug("GateService.OnReceive:", context.Message())
	switch msg := context.Message().(type) {

	case *msgs.AddAgentToParent:
		log.Info("msgs.AddAgentToParent%v", msg.Uid)
		//子对象注册
		s.agents[msg.Uid] = msg.Sender
	case *msgs.RemoveAgentFromParent:
		log.Info("msgs.RemoveAgentFromParent%v", msg.Uid)
		delete(s.agents, msg.Uid)
	case *NewAagentActorMsg:
		ab := NewAgentActor(context, msg.Agent)
		pid := context.Spawn(actor.FromInstance(ab))
		ab.pid = pid
		ab.parentPid = context.Self()
		context.Respond(&NewAagentActorResultMsg{Pid: pid})
	// case *msgs.NewChild:
	// 	//创建子节点
	// 	ab := NewAgentActor(context)
	// 	pid := context.Spawn(actor.FromInstance(ab))
	// 	ab.pid = pid
	// 	ab.parentPid = context.Self()
	// 	//context.Sender().Tell(&msgs.NewChildResult{Pid: pid})
	// 	s.actorchan <- ab
	case *msgs.UnicastFrameMsg:
		//单todo:...
		log.Info("gate.UnicastFrameMsg:", msg)

	case *msgs.MulticastFrameMsg:
		//组todo:...
		log.Info("gate.UnicastFrameMsg:", msg)

	case *msgs.BroadcastFrameMsg:
	case *msgs.BroadcastFrameMsgJson:
		//广播
		log.Info("gate.BroadcastFrameMsg:", msg, " child:", len(s.agents))
		//children := context.Children()
		for _, child := range s.agents {
			log.Info("send agent:", child)
			child.Tell(msg.FrameMsg)
		}
	}
}
func (s *GateService) OnInit() {
	s.agents = make(map[uint64]*actor.PID)
	s.actorchan = make(chan *AgentActor)
}

func (s *GateService) OnStart(as *service.ActorService) {
	//as.RegisterMsg(reflect.TypeOf(&msgs.UserLogin{}), s.OnUserLogin) //注册登录
	as.RegisterMsg(reflect.TypeOf(&msgs.Tick{}), s.OnTick)                    //定时任务
	as.RegisterMsg(reflect.TypeOf(&msgs.Kick{}), s.OnKick)                    //踢人
	as.RegisterMsg(reflect.TypeOf(&msgs.AddServiceRep{}), s.OnRegOK)          //注册完成
	as.RegisterMsg(reflect.TypeOf(&actor.Terminated{}), s.OnDisconnectCenter) //被动断开服务器

	log.Info("gate start")
	gate := &gfw.Gate{
		MaxConnNum:      config.GetServiceConfigInt(s.Name, "MaxConnNum"),
		PendingWriteNum: 1024,
		MaxMsgLen:       65535,
		WSAddr:          config.GetServiceConfigString(s.Name, "WsAddr"),
		CertFile:        "",
		KeyFile:         "",
		TCPAddr:         config.GetServiceConfigString(s.Name, "TcpAddr"),
		LenMsgLen:       2,
		LittleEndian:    true,
		Processor:       nil, //msg.Processor,
		//AgentChanRPC:    nil, //game.ChanRPC,
	}

	gate.Run(s)

}

func (s *GateService) OnRun() {
	//注册
	s.RegToCenter()
	//定时任务
	util.StartLoopTask(time.Second*5, func() {
		s.Pid.Tell(&msgs.Tick{}) //转主线程执行
	})
}

//注册到中心服务器
func (s *GateService) RegToCenter() {
	//注册到center
	valtcp := &msgs.ServiceValue{"TcpAddr", config.GetServiceConfigString(s.Name, "TcpAddrOut")}
	valws := &msgs.ServiceValue{"WsAddr", config.GetServiceConfigString(s.Name, "WsAddrOut")}
	//cluster.RegServerWork(&s.ServiceData, []*msgs.ServiceValue{valtcp, valws})
	r := cluster.GetServicePID("center")
	msg := msgs.AddService{
		ServiceName: s.Name,
		ServiceType: s.TypeName,
		Pid:         s.GetPID(),
		Values:      []*msgs.ServiceValue{valtcp, valws}}
	r.GetActorPID().Request(&msg, s.Pid)
	log.Info("GateService RegToCenter !!!")
}

//注册成功
func (s *GateService) OnRegOK(context service.Context) {
	s.isReg = true
	log.Info("GateService reg ok!!!")
	context.Watch(context.Sender())
}

//从中心断开
func (s *GateService) OnDisconnectCenter(context service.Context) {
	s.isReg = false
	log.Info("GateService OnDisconnectCenter !!!")
}

func (s *GateService) OnTick(context service.Context) {
	if !s.isReg {
		s.RegToCenter()
		return
	}
	load := len(s.agents)
	cluster.UpdateServiceLoad(s.Name, uint32(load), msgs.ServiceStateFree)
}

func (s *GateService) OnKick(context service.Context) {
	msg := context.Message().(*msgs.Kick)
	log.Info("GateService.OnKick:%v", msg)
	if agent, ok := s.agents[msg.Uid]; ok {
		agent.Tell(&msgs.Kick{Uid: msg.Uid})
	}
}

func (s *GateService) OnDestory() {

}

//创建agentactor,外部线程调用
func (s *GateService) GetAgentActor(a gfw.Agent) (*actor.PID, error) {
	log.Info("new connect.....")
	// s.Pid.Tell(new(msgs.NewChild)) //请求一个actor
	// agentActor := <-s.actorchan
	// agentActor.bindAgent = a

	// return agentActor.pid

	r, err := s.Pid.RequestFuture(&NewAagentActorMsg{a}, time.Second).Result()
	if err != nil {
		return nil, err
	}

	return r.(*NewAagentActorResultMsg).Pid, nil
}
