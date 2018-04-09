package battle

import "Server/db"
import "gameproto/msgs"
import "github.com/AsynkronIT/protoactor-go/actor"

type MsgStartGame struct {
	PlayerInfo *db.MsgBattleRoomInfo
	SelfPID    *actor.PID
}

type MsgStartGameResult struct {
	RoomPID *actor.PID
	Result  msgs.GAErrorCode
}
