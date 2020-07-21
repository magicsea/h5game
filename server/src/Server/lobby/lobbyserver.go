package lobby

import (
	"Server/db"
	"gameproto"
	"gameproto/msgs"
	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/service"
	"github.com/magicsea/ganet/util"
	"reflect"
	"time"
)

type LobbyService struct {
	service.ServiceData
	queueMgr *QueueMgr
	//queuePid2Player map[string]uint64
}

//Service 获取服务对象
func Service() service.IService {
	return new(LobbyService)
}

func Type() string {
	return "lobby"
}

//以下为接口函数
func (s *LobbyService) OnReceive(context service.Context) {
	log.Debug("LobbyService.OnReceive:%v", context.Message())

}

func (s *LobbyService) OnInit() {
	//Init()
	s.queueMgr = NewQueueMgr(s.OnMatchOK)
	//s.queuePid2Player = make(map[string]uint64)
	log.Info("LobbyService init:%v  ", s.queueMgr)

	//清空redis
	db.GetRedisBattleLoad().FlushDB()
	db.GetRedisBattle().FlushDB()
}

func (s *LobbyService) OnStart(as *service.ActorService) {
	as.RegisterMsg(reflect.TypeOf(&msgs.GetBattleServer{}), s.OnGetBestBattleServer)
	as.RegisterMsg(reflect.TypeOf(&msgs.JoinBattleQueue{}), s.OnJoinBattleQueue)
	//as.RegisterMsg(reflect.TypeOf(&actor.Terminated{}), s.OnPlayerTerminated) //玩家掉线
	as.RegisterMsg(reflect.TypeOf(&msgs.LeaveBattleQueue{}), s.OnLeaveQueue)
	as.RegisterMsg(reflect.TypeOf(&msgs.GetLobbyInfo{}), s.GetLobbyInfo)
	as.RegisterMsg(reflect.TypeOf(&msgs.Tick{}), s.OnTick)

	util.StartLoopTask(time.Second*time.Duration(PVP_WAIT_TIME), s.Tick)
}

func (s *LobbyService) Tick() {
	s.Pid.Tell(&msgs.Tick{})
}

func (s *LobbyService) OnTick(context service.Context) {
	//log.Info("LobbyService tick")

	s.queueMgr.Match()
}

//获取lobyy状态
func (s *LobbyService) GetLobbyInfo(context service.Context) {
	log.Info("LobbyService.GetLobbyInfo:%v", context.Message())
	result := &msgs.GetLobbyInfoResult{}
	for t, list := range s.queueMgr.queues {
		data := msgs.LobbyQueueData{t, int32(list.Count())}
		result.Queuedata = append(result.Queuedata, &data)
	}
	serverlist, _ := GetBattleServers()
	for addr, num := range serverlist {
		data := msgs.BattleServerData{addr, num, 0}
		result.BattleServerData = append(result.BattleServerData, &data)
	}
	context.Respond(result)
}

//获取最佳battle服务器pve,pvp-ai
func (s *LobbyService) OnGetBestBattleServer(context service.Context) {
	log.Info("LobbyService.GetBattleServer:%v", context.Message())
	msg := context.Message().(*msgs.GetBattleServer)
	bserverPid, errcode := GetBestServer()
	result := &msgs.GetBattleServerResult{}
	if errcode != msgs.OK {
		result.Result = errcode
		context.Respond(result)
		log.Info("battle服务器已满,battle serverfull:%v", errcode)
		return
	}

	//db.SavePlayerInfo(msg.Uid, msg.Rtype, rid, addr, msg.RoomInfo)
	//rid := util.GetGUID()
	//result.RoomId = rid
	result.Result = msgs.OK
	context.Respond(result)

	//直接开始
	var players = []*msgs.CreateBattlePlayer{
		&msgs.CreateBattlePlayer{Uid: msg.Uid, PlayerPID: msg.SelfPID},
	}
	s.AsynCreateBattle(players, msg.Boss, int32(gameproto.PVE), bserverPid)
}

func (s *LobbyService) OnLeaveQueue(context service.Context) {
	log.Info("center.OnLeaveQueue:%v", context.Message())
	msg := context.Message().(*msgs.LeaveBattleQueue)
	s.queueMgr.Remove(msg.Uid)
}

//排队
func (s *LobbyService) OnJoinBattleQueue(context service.Context) {
	msg := context.Message().(*msgs.JoinBattleQueue)
	log.Info("center.JoinBattleQueue:%v", msg)
	q := &QueuePlayer{msg, nil, 0}
	//log.Info("jq:%v,%v", q, s.queueMgr)
	ok := s.queueMgr.Add(q)

	err := msgs.OK
	if !ok {
		err = msgs.Error
		log.Error("join battle again:%d", msg.Uid)
	} else {
		//监听断开
		//s.queuePid2Player[msg.Sender.String()] = msg.Uid
		//context.Watch(msg.Sender)
	}
	context.Respond(&msgs.JoinBattleQueueResult{Waittime: 0, Result: err})
}

//匹配完成一组 p2==nil就是AI
func (s *LobbyService) OnMatchOK(battleType int32, p1, p2 *QueuePlayer) {
	log.Info("OnMatchOK")

	//s.ReleaseWatchPlayer(p1.Sender, false)
	//s.ReleaseWatchPlayer(p2.Sender, false)
	bserverPid, errcode := GetBestServer()
	result := &msgs.MatchBattle{}
	if errcode != msgs.OK {
		result.Result = errcode
		p1.Sender.Tell(result)
		if p2 != nil {
			p2.Sender.Tell(result)
		}
		log.Info("OnMatchOK battle服务器已满:%v", errcode)
		return
	}

	var players = []*msgs.CreateBattlePlayer{
		&msgs.CreateBattlePlayer{Uid: p1.Uid, PlayerPID: p1.Sender},
		&msgs.CreateBattlePlayer{Uid: p2.Uid, PlayerPID: p2.Sender},
	}
	s.AsynCreateBattle(players, 0, int32(gameproto.PVP), bserverPid)
}

//异步创建房间
func (s *LobbyService) AsynCreateBattle(players []*msgs.CreateBattlePlayer, stageId int32, rtype int32, battlePID *actor.PID) {
	log.Info("AsynCreateBattle: rtype=%d,battle=%+v", rtype, battlePID)
	go func() {
		rid := util.GetGUID()
		msg := &msgs.CreateBattle{RoomId: rid, StageId: stageId, Rtype: rtype, Players: players}
		r, err := battlePID.RequestFuture(msg, time.Second*3).Result()
		if err != nil {
			log.Error("CreateBattle error:%v", err)
			return
		}

		rep := r.(*msgs.CreateBattleRep)
		// if rep.Result != msgs.OK {
		// 	log.Error("CreateBattle fail:%v", rep.Result)
		// 	return
		// }

		roompid := rep.RoomPID
		for _, p := range players {
			log.Info("send MatchBattle:%v", p.Uid)
			db.SavePlayerFightInfo(p.Uid, rtype, rid, roompid.Address, roompid.Id)
			result := &msgs.MatchBattle{RoomId: rid, Rtype: rtype, Result: rep.Result, RoomPID: roompid}
			p.PlayerPID.Tell(result)
		}

		log.Info("CreateBattle{ stage:%v,roompid:%v roomid:%v,player:%+v }", stageId, roompid.String(), rid, players)
	}()
}
