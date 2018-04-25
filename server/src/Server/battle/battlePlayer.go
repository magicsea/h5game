package battle

import (
	"gameproto/msgs"

	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/gogo/protobuf/proto"
	"github.com/magicsea/ganet/config"
	"github.com/magicsea/ganet/log"
	gp "github.com/magicsea/ganet/proto"
)

type Player struct {
	createInfo *msgs.CreateBattlePlayer
	agentPID   *actor.PID
	fighter    *Fighter
	room       *Room
	isReady    bool
	isLeave    bool
}

func NewPlayer(createInfo *msgs.CreateBattlePlayer, room *Room) *Player {
	p := &Player{createInfo: createInfo, agentPID: createInfo.AgentPID, room: room, isReady: false, isLeave: false}
	return p
}

func (p *Player) GetID() uint64 {
	return p.createInfo.Uid
}

func (p *Player) GetName() string {
	return p.createInfo.Name
}

func (p *Player) Recover(newAgent *actor.PID) {
	p.agentPID = newAgent
}

func (p *Player) Leave() {
	p.agentPID = nil
}

func (p *Player) SendRaw(msgId interface{}, rawdata []byte) {
	if p.agentPID == nil {
		return
	}
	if config.IsJsonProto() {
		frame := &msgs.FrameMsgJson{MsgId: msgId.(string), RawData: rawdata}
		p.agentPID.Tell(frame)
	} else {
		frame := &msgs.FrameMsg{MsgId: uint32(msgId.(int64)), RawData: rawdata}
		p.agentPID.Tell(frame)
	}
}

func (p *Player) SendMsg(msgId interface{}, msg proto.Message) {
	data, err := gp.Marshal(msg)
	if err != nil {
		log.Error("SendMsg.Marshal error:%v", err)
		return
	}
	p.SendRaw(msgId, data)
}

func (p *Player) OnClientMsg(msgId interface{}, data []byte, context actor.Context) bool {
	//log.Info("##battle player.OnClientMsg:%v", msgId)
	sid := msgId.(string)
	switch sid {
	case "b_ready":
		p.agentPID = context.Sender()
		p.isReady = true
		log.Info("room.player ready:%v,%+v", p.GetID(), p.agentPID)
		p.room.CheckReady()
		return true
	case "b_chat":
		p.room.SendRaw(msgId, data)
		return true
	case "b_quit":
		p.room.gl.close("quit")
		return true
	}
	return false
}

func (p *Player) CheckReady() bool {
	return p.isReady
}
func (p *Player) CheckLeave() bool {
	return p.agentPID == nil
}
