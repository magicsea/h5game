package game

import (
	"strconv"
	"strings"
	"github.com/magicsea/ganet/log"
	"gameproto/msgs"
	"gameproto"
	"Server/db"
)

func init()  {
	RegistCmd("privatechat",PrivateChat)
	RegistCmd("s_chat",WorldChat)
}

func  PrivateChat(context IPlayerMsgContext) {
	var msg gameproto.C2S_PrivateChatMsg
	context.UnmarshalMsg(&msg)
	result := AskSession(&msgs.GetSessionInfoByName{msg.TargetName})
	if result != nil {
		log.Info("AskSession PrivateChat ok:", result)
		ssInfo := result.(*msgs.GetSessionInfoResult)
		if ssInfo.Result == msgs.OK && ssInfo.AgentPID != nil {
			//找到玩家agent地址
			SendPlayerClientMsg(ssInfo.AgentPID,"privatechat",&gameproto.S2C_PrivateOtherChatMsg{SendName: "", Msg: msg.Msg})

			//通知自己
			context.Write("privatechat_rep",&gameproto.S2C_PrivateChatMsg{TargetName:"", Msg: msg.Msg, Result: int32(msgs.OK)})
			log.Info("send PrivateChat:", msg)
		} else {
			//没找到玩家
			context.Write("privatechat",&gameproto.S2C_PrivateChatMsg{Result: int32(msgs.NoFoundTarget)})
			log.Info("send PrivateChat,no found:%v,%v", ssInfo.Result, msg)

		}
	}
}

func WorldChat(context IPlayerMsgContext) {
	var msg gameproto.C2S_WorldChatMsg
	context.UnmarshalMsg(&msg)
	if strings.HasPrefix(msg.Data,"/") {
		OnGMCmd(msg.Data,context)
		return
	}

	SendWorldMsg("chat",&gameproto.S2C_WorldChatMsg{Name:context.GetPlayerName(), Data: msg.Data})

	context.Write("notice",&gameproto.S2C_WorldChatMsg{Name:context.GetPlayerName(), Data:"你好hello world[笑]"})
}

func OnGMCmd(data string,context IPlayerMsgContext)  {
	log.Info("$$$$$$GM$$$$$$:%s",data)
	data = strings.TrimPrefix(data,"/")
	hd := strings.Split(data," ")
	if len(hd)<2 {
		return
	}

	gamedb := db.GetRedisGame()
	player := &db.Player{}
	id := context.GetPlayerID()

	cmd := hd[0]
	args := hd[1]
	switch cmd {
	case "addgold":
		num,_ := strconv.Atoi(args)
		val,_:= db.IncreRedisObjectField(player,id,gamedb,"Gold",int64(num))
		updatePlayerInfo("gold",val,context)
	case "addrmb":
		num,_ := strconv.Atoi(args)
		val,_:=db.IncreRedisObjectField(player,id,gamedb,"Rmb",int64(num))
		updatePlayerInfo("diamond",val,context)
	case "setlv":
		num,_ := strconv.Atoi(args)
		db.SetRedisObjectField(player,id,gamedb,"Lv",int64(num))
		updatePlayerInfo("level",int64(num),context)
	}
}

func updatePlayerInfo(key string,val int64,context IPlayerMsgContext)  {
	context.Write("updateAttr",
		&gameproto.C_UpateAttr{
			Key:key,
			Val:val,
		})
}