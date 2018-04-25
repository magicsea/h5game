package battle

import (
	"gameproto/msgs"
	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/gogo/protobuf/proto"
	"github.com/magicsea/ganet/log"
	gp "github.com/magicsea/ganet/proto"
	"github.com/magicsea/ganet/service"
	"github.com/magicsea/ganet/util"
	"time"
)

type BATTLE_STATE int32

const (
	BATTLE_STAGE_WAIT BATTLE_STATE = 0
	BATTLE_STAGE_Game BATTLE_STATE = 1
	BATTLE_STAGE_END  BATTLE_STATE = 2
)

type Room struct {
	parentPID   *actor.PID
	selfPID     *actor.PID
	roomId      string                     //战场唯一id
	roomType    int32                      //战场类型
	stageId     int32                      //关卡id
	playerInfos []*msgs.CreateBattlePlayer //玩家相关信息

	gl *GameLogic //逻辑循环线程
	//延时事件
	invokeTimerState *time.Timer //状态切换计时
	invokeTimerLeave *time.Timer //玩家离开计时

	players map[uint64]*Player //玩家

	startTime int64
	winner    uint64

	stageTime int64

	maxFighterId int32

	state BATTLE_STATE
}

func NewRoom(msg *msgs.CreateBattle, context service.Context) (*actor.PID, error) {
	p := &Room{roomId: msg.RoomId, roomType: msg.Rtype, stageId: msg.StageId, playerInfos: msg.Players}
	p.Init(context.Self())
	props := actor.FromInstance(p)
	pid := context.Spawn(props)
	p.selfPID = pid

	log.Info("NewRoom:%v", p.roomId)
	return pid, nil
}

//初始化
func (room *Room) Init(parent *actor.PID) {
	room.parentPID = parent
	room.state = BATTLE_STAGE_WAIT
	room.stageTime = time.Now().Unix()
	room.maxFighterId = 1
	room.players = make(map[uint64]*Player)
	for _, p := range room.playerInfos {
		player := NewPlayer(p, room)
		room.players[p.GetUid()] = player
	}

}

func (room *Room) Receive(context actor.Context) {

	defer util.PrintPanicStack()
	switch msg := context.Message().(type) {
	case *actor.Terminated:

	case *msgs.UserLeave:
		log.Info("room user leave:%v,%v", msg.Uid, msg.Reason)
		p := room.GetPlayer(msg.Uid)
		if p != nil {
			p.Leave()
			room.CheckLeave()
		}

	case *actor.Started:
		//fmt.Println("BattleManager start,%v", msg)
		room.selfPID = context.Self()
		room.Prepare(context)

		break
	case *msgs.FrameMsg: //客户端消息
	case *msgs.FrameMsgJson:
		if msg.MsgId != "b_move" {
			log.Info("room recv:%+v", msg)
		}

		p := room.GetPlayer(msg.Uid)
		if p != nil {
			if !p.OnClientMsg(msg.MsgId, msg.RawData, context) {
				cmsg := ClientMsg{msgId: msg.MsgId, uid: msg.Uid}
				cmsg.rawData = append(cmsg.rawData, msg.RawData...)
				room.gl.clientMsgChan <- cmsg
			}
		} else {
			log.Error("room recv: have not player:%v", msg.Uid)
			room.PrintPlayers()
		}
	case *InvokeEvent: //延时事件
		msg.fun()
	case *msgs.RecoverBattle: //玩家恢复战场
		room.recoverBattle(msg.Uid, msg.AgentPID)
	case *OutMsg: //发给客户端
		room.SendMsg(msg.msgId, msg.data)
	case *RoomEnd: //战场结束
		room.OnEnd()
	}

}

//延时事件
type InvokeEvent struct {
	fun func()
}

func (room *Room) InvokeState(usetime int64, fun func()) {
	room.invokeTimerState = time.AfterFunc(time.Second*time.Duration(usetime), func() {
		room.selfPID.Tell(&InvokeEvent{fun})
	})
}
func (room *Room) InvokeLeave(usetime int64, fun func()) {
	room.invokeTimerLeave = time.AfterFunc(time.Second*time.Duration(usetime), func() {
		room.selfPID.Tell(&InvokeEvent{fun})
	})
}

func (room *Room) Prepare(context actor.Context) {
	log.Info("Prepare %v", room.roomId)
	room.startTime = time.Now().Unix()
	room.gl = &GameLogic{roomPID: room.selfPID}
	room.gl.init(room.roomId, room.playerInfos, 1100, 600)
	//超时自动开始
	room.InvokeState(20, room.StartGame)
}

func (room *Room) CheckReady() bool {
	for _, pl := range room.players {
		if !pl.CheckReady() {
			return false
		}
	}

	room.StartGame()
	return true
}

//###开始阶段###
func (room *Room) StartGame() {
	if room.state != BATTLE_STAGE_WAIT {
		return
	}
	if room.invokeTimerState != nil {
		room.invokeTimerState.Stop()
	}

	room.state = BATTLE_STAGE_Game
	log.Info("StartGame %v", room.roomId)
	room.gl.start()

	room.CheckLeave() //防止loading期间都掉线了
}

//所有人离线检查
func (room *Room) CheckLeave() {
	if room.state != BATTLE_STAGE_Game {
		return
	}

	for _, pl := range room.players {
		if !pl.CheckLeave() {
			return
		}
	}

	room.InvokeLeave(10, func() {
		room.gl.close("all leave!")
	})

}

func (room *Room) SendMsg(msgId interface{}, msg proto.Message) {
	data, err := gp.Marshal(msg)
	if err != nil {
		log.Error("SendMsg.Marshal error:%v", err)
		return
	}
	for _, p := range room.players {
		p.SendRaw(msgId, data)
	}

}
func (room *Room) SendRaw(msgId interface{}, data []byte) {

	for _, p := range room.players {
		p.SendRaw(msgId, data)
	}

}

func (room *Room) GetPlayer(uid uint64) *Player {

	if p, ok := room.players[uid]; ok {
		return p
	}
	return nil
}

func (room *Room) PrintPlayers() {
	log.Info("############room player count:%v", len(room.players))
	for _, p := range room.players {
		log.Info("player:%v,%v", p.GetID(), p.GetName())
	}
}
func (room *Room) recoverBattle(uid uint64, newAgent *actor.PID) msgs.GAErrorCode {
	p, found := room.players[uid]
	if !found {
		return msgs.NoFoundTarget
	}
	p.Recover(newAgent)

	if room.state == BATTLE_STAGE_Game {
		room.invokeTimerLeave.Stop()
	}
	return msgs.OK
}

func (room *Room) OnEnd() {
	log.Info("room.end %v", room.roomId)
}
