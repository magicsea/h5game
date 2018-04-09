package game

import (
	"fmt"
	"github.com/magicsea/ganet/log"
	"gameproto"
	"Server/db"
)

func init()  {
	RegistCmd("s_reviseUserInfo",ReviseUserInfo)
}

//个人信息修改
func ReviseUserInfo(context IPlayerMsgContext) {
	var msg gameproto.S_ReviseUserInfo
	context.UnmarshalMsg(&msg)
	log.Info("reviseUserInfo:%+v",msg)
	if len(msg.Nickname)<1||len(msg.Nickname)>20 {
		context.Write("reviseUserInfo",&gameproto.C_Response{ErrCode: 1, Msg:fmt.Sprintf("名字长度不合法,长度%d",len(msg.Nickname))})
		return;
	}

	oldname := context.GetPlayerName()
	gamedb := db.GetRedisGame()
	key := "Player:nameindex:"+msg.Nickname
	oldkey := "Player:nameindex:"+context.GetPlayerName()
	r := gamedb.Get(key).Val()
	if oldname!=msg.Nickname {
		if len(r)>0 {
			context.Write("reviseUserInfo",&gameproto.C_Response{ErrCode: 2, Msg:"重复的名字"})
			return;
		}
	}

	//save
	player := &db.Player{}
	m := map[string]interface{}{"Cgid":msg.HeadId,"Name":msg.Nickname}
	db.SetRedisObjectFields(player,context.GetPlayerID(),gamedb,m)
	if oldname!=msg.Nickname {
		gamedb.Set(key,context.GetPlayerID(),0)
		log.Info("reviseUserInfo delete old name:%s",oldkey)
		gamedb.Del(oldkey)
	}

	//send
	context.Write("reviseUserInfo",&gameproto.C_Response{ErrCode: 0, Msg:"OK"})
	log.Info("reviseUserInfo end:%d,%+v",context.GetPlayerID(),msg)
}