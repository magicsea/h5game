package game

import (
	"Server/cluster"
	"gameproto/msgs"
	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/service"
	"github.com/magicsea/ganet/util"
	"reflect"
	"time"

	"github.com/AsynkronIT/protoactor-go/actor"
	_ "github.com/AsynkronIT/protoactor-go/actor"
)

type GameService struct {
	service.ServiceData
}

type PlayerInitEnd struct {
	Result    msgs.GAErrorCode
	BaseInfo  *msgs.UserBaseInfo
	TransData *msgs.CreatePlayer
	Sender    *actor.PID
	RoomPID   *actor.PID
}

//Service 获取服务对象
func Service() service.IService {
	return new(GameService)
}

func Type() string {
	return "game"
}

//以下为接口函数
func (s *GameService) OnReceive(context service.Context) {
	log.Debug("game.OnReceive:", context.Message())

}

func (s *GameService) OnInit() {

}

func (s *GameService) OnStart(as *service.ActorService) {
	as.RegisterMsg(reflect.TypeOf(&msgs.CreatePlayer{}), s.OnCreatePlayer) //登录
	as.RegisterMsg(reflect.TypeOf(&msgs.Tick{}), s.OnTick)                 //定时任务
	as.RegisterMsg(reflect.TypeOf(&PlayerInitEnd{}), s.OnPlayerInitEnd)    //玩家初始化完成

}

func (s *GameService) OnRun() {
	//注册到center
	cluster.RegServerWork(&s.ServiceData, nil)
	//定时任务
	util.StartLoopTask(time.Second*5, func() {
		s.Pid.Tell(&msgs.Tick{}) //转主线程执行
	})
}

func (s *GameService) OnTick(context service.Context) {
	load := len(context.Children())
	cluster.UpdateServiceLoad(s.Name, uint32(load), msgs.ServiceStateFree)
}

//请求创建玩家
func (s *GameService) OnCreatePlayer(context service.Context) {
	log.Info("GameService.OnCreatePlayer:%v\n%v", context.Message(), context.Sender())
	msg := context.Message().(*msgs.CreatePlayer)

	//todo:从db里load基本数据（比如player表）...
	//baseInfo := &msgs.UserBaseInfo{Uid: msg.Uid, Name: "玩家" + strconv.Itoa(int(msg.Uid))}
	//创建玩家对象actor(异步)
	NewPlayer(msg.Uid, msg.AgentPID, msg, context) //异步载入完成才发回
	//player, err := NewPlayer(msg.Uid, msg.AgentPID, context)
	//player.baseInfo = baseInfo
	//errCode := msgs.OK
	//if err != nil {
	//	log.Error("NewPlayer error:%v,%v", msg.Uid, err)
	//	errCode = msgs.Error
	//}
	//result := &msgs.CreatePlayerResult{Result: errCode, BaseInfo: baseInfo, PlayerPID: player.selfPID, TransData: msg}
	//context.Tell(context.Sender(), result)

	log.Info("GameService.OnCreatePlayer now:", msg.Uid)
}

//玩家数据载入完成
func (s *GameService) OnPlayerInitEnd(context service.Context) {
	msg := context.Message().(*PlayerInitEnd)
	result := &msgs.CreatePlayerResult{
		Result:    msg.Result,
		BaseInfo:  msg.BaseInfo,
		PlayerPID: msg.Sender,
		RoomPID:   msg.RoomPID,
		TransData: msg.TransData}

	ss := cluster.GetServicePID("session")
	context.Tell(ss.GetActorPID(), result)
	log.Info("GameService.OnCreatePlayer  ok:", msg.BaseInfo.Uid, msg.Sender)
}
