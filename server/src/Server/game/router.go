package game

import (
	"gameproto/msgs"
	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/gogo/protobuf/proto"
	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/network"
)

func init() {

}

type IPlayerMsgContext interface {
	Write(msgID interface{}, msg proto.Message)
	GetPlayerID() uint64
	GetPlayerName() string
	GetPID() *actor.PID
	UnmarshalMsg(m proto.Message) error
}

type PlayerMsgContext struct {
	player *Player
	rawMsg []byte
}

func (c *PlayerMsgContext) Write(msgId interface{}, msg proto.Message) {
	c.player.SendGameMsg(msgId, msg)
}

func (c *PlayerMsgContext) GetPlayerID() uint64 {
	return c.player.GetID()
}

func (c *PlayerMsgContext) UnmarshalMsg(m proto.Message) error {
	return network.Unmarshal(c.rawMsg, m)
}
func (c *PlayerMsgContext) GetPlayerName() string {
	name := c.player.ReadName()
	return name
}
func (c *PlayerMsgContext) GetPID() *actor.PID {
	return c.player.selfPID
}

var msgHandler = make(map[interface{}]MessageFunc)

//MessageFunc 消息绑定函数
type MessageFunc func(context IPlayerMsgContext)

//type MessageReqFunc func(data []byte) msgs.GAErrorCode
//RegistCmd 注册game处理消息
func RegistCmd(msgId interface{}, fun MessageFunc) {
	msgHandler[msgId] = fun
}

//路由玩家消息
func Rounter(p *Player, msgId interface{}, raw []byte) {
	err := msgs.UNKNOWN_ERROR
	if fun, ok := msgHandler[msgId]; ok {
		var con IPlayerMsgContext = &PlayerMsgContext{player: p, rawMsg: raw}
		fun(con)
	} else {
		log.Error("player recv unknow channel:id=%v,code=%v", p.GetID(), msgId)
	}
	_ = err
	//context.Respond(&msgs.FrameMsgRep{ErrCode: err})
}
