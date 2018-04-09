package game

import (
	"Server/db"
	"encoding/json"
	"fmt"
	"gameproto"
	"gameproto/msgs"
	"github.com/magicsea/ganet/log"
)

func init() {
	RegistCmd("s_requestBattle", requestBattle)
	RegistCmd("s_balance", onBalance)
}

//参加战斗
func requestBattle(context IPlayerMsgContext) {
	var msg = &gameproto.S_RequestBattle{}
	context.UnmarshalMsg(msg)
	log.Info("requestBattle:%+v", msg)
	if int32(gameproto.PVE) == msg.BattleType {
		startPVE(context, msg)
	} else {
		startPVP(context, msg)
	}
}

func startPVE(context IPlayerMsgContext, msg *gameproto.S_RequestBattle) {
	uid := context.GetPlayerID()
	var rpcmsg = &msgs.GetBattleServer{Uid: uid, Rtype: int32(gameproto.PVE), Boss: msg.StageId, SelfPID: context.GetPID()}
	result := AskLobby(rpcmsg)
	if result == nil {
		context.Write("requestBattle", &gameproto.C_RequestBattle{ErrCode: 1})
		return
	}
	context.Write("requestBattle", &gameproto.C_RequestBattle{ErrCode: 0, StageId: msg.StageId, BattleType: msg.BattleType})

	//直接开始战斗
	//var rmsg = result.(*msgs.GetBattleServerResult)
	//db.SavePlayerFightInfo(uid, msg.BattleType, rmsg.RoomId, rmsg.BattlePID.Address, BattlePID.Id)
	//context.Write("startBattle", &gameproto.C_StartBattle{RoomId: rmsg.RoomId, StageId: msg.StageId, BattleType: msg.BattleType})
}
func startPVP(context IPlayerMsgContext, msg *gameproto.S_RequestBattle) {
	uid := context.GetPlayerID()
	var rpcmsg = &msgs.JoinBattleQueue{Uid: uid, Rtype: int32(gameproto.PVP), Sender: context.GetPID()}
	result := AskLobby(rpcmsg)
	if result == nil {
		context.Write("requestBattle", &gameproto.C_RequestBattle{ErrCode: 1})
		return
	}
	//save
	db.SetPlayerBattleState(uid, int32(db.BattleStateQueue))
	rmsg := result.(*msgs.JoinBattleQueueResult)
	context.Write("requestBattle", &gameproto.C_RequestBattle{ErrCode: int32(rmsg.Result), StageId: msg.StageId, BattleType: msg.BattleType})
}

//领取战斗奖励
func onBalance(context IPlayerMsgContext) {
	uid := context.GetPlayerID()
	gamedb := db.GetRedisGame()
	key := fmt.Sprintf("PlayerFinishList:%d", uid)
	list, err := gamedb.LRange(key, 0, -1).Result()
	if err != nil {
		log.Error("%v", err)
		return
	}
	if list == nil || len(list) < 1 {
		return
	}

	//给奖励
	for _, v := range list {

		var endInfo db.BattleEndInfo
		json.Unmarshal([]byte(v), &endInfo)
		var blinfo = gameproto.C_Balance{StageId: endInfo.StageId, BattleType: endInfo.BattleType}
		log.Info("奖励:uid=%d,room=%v", uid, endInfo.RoomId)
		context.Write("balance", &blinfo)
	}
	gamedb.Del(key)
}
