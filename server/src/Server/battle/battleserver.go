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

}

func (s *BattleService) OnStart(as *service.ActorService) {
	//as.RegisterMsg(reflect.TypeOf(&msgs.GetBattleServer{}), s.OnGetBestBattleServer)
	as.RegisterMsg(reflect.TypeOf(&msgs.Kick{}), s.OnKick) //踢人
	as.RegisterMsg(reflect.TypeOf(&msgs.Tick{}), s.OnTick) //定时任务

}

func (s *BattleService) OnRun() {
	//注册到center
	cluster.RegServerWork(&s.ServiceData, nil)
	//定时任务
	util.StartLoopTask(time.Second*5, func() {
		s.Pid.Tell(&msgs.Tick{}) //转主线程执行
	})
}

func (s *BattleService) OnTick(context service.Context) {
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
