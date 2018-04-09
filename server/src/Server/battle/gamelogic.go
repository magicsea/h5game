package battle

import (
	"encoding/json"

	"gameproto"
	"github.com/magicsea/ganet/log"

	"time"

	c "comm"
	"gameproto/msgs"
	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/gogo/protobuf/proto"
	"math/rand"
)

const (
	FRAME_TIME = 20
)

type ClientMsg struct {
	msgId   interface{}
	rawData []byte
	uid     uint64
}

type OutMsg struct {
	msgId interface{}
	data  proto.Message
	uid   uint64
}

type RoomEnd struct {
}

type GameLogic struct {
	roomId         string
	fighters       map[int32]*Fighter  //战斗单位
	playerfighters map[uint64]*Fighter //战斗单位
	roomPID        *actor.PID

	closeSign     chan byte      //关闭通道
	clientMsgChan chan ClientMsg //客户端消息通道

	timer     int
	idCreator int32
	mapRect   *c.Rect //地图范围

	entitys   map[int32]IEntity //地图对象
	startTime time.Time         //开始时间
	stage     int32             //关卡
}

func (gl *GameLogic) init(roomId string, infos []*msgs.CreateBattlePlayer, w, h float32) {
	gl.roomId = roomId
	gl.closeSign = make(chan byte, 1)
	gl.clientMsgChan = make(chan ClientMsg, 100)
	gl.fighters = make(map[int32]*Fighter)
	gl.playerfighters = make(map[uint64]*Fighter)
	gl.mapRect = c.NewRect(c.NewVector2D(-w/2, -h/2), w, h)
	gl.entitys = make(map[int32]IEntity)
	for _, info := range infos {
		f := NewFighter(0, &c.Vector2D{1, 1}, gl, true)
		gl.addFighter(f)
		gl.playerfighters[info.Uid] = f
	}
	gl.timer = 1
	gl.stage = 1
	gl.startTime = time.Now()
}

func (gl *GameLogic) GenID() int32 {
	gl.idCreator++
	return gl.idCreator
}

//开始一个逻辑线程
func (gl *GameLogic) start() {
	timeTicker := time.NewTicker(time.Millisecond * FRAME_TIME)
	go func() {
		gl.battleStart()
		var closed bool
		for !closed {
			select {
			case <-gl.closeSign:
				timeTicker.Stop()
				closed = true
				log.Info("room closeSign")
			case <-timeTicker.C:
				gl.update()
			case msg := <-gl.clientMsgChan:
				gl.onClientMsg(msg)
			}
		}
		log.Info("room frame stop")
		gl.onClosed()
	}()

}

func (gl *GameLogic) battleStart() {
	log.Info("battleStart")
	//刷怪
	gl.spawnFighters()

	//发送开始消息
	infos := gl.GetFightersInfo()
	for uid, f := range gl.playerfighters {
		gl.sendPlayer(uid, "battleStart", &gameproto.BattleStart{Self: f.GetFighterInfo(), Fighters: infos})
	}
}

//一帧
func (gl *GameLogic) update() {
	dtime := float32(FRAME_TIME) / float32(1000)
	for _, f := range gl.fighters {
		f.update(dtime)
	}

	for _, e := range gl.entitys {
		e.Update(dtime)
	}

	gl.timer++
	if gl.timer%1 == 0 { //todo:通常gl.timer%5足够，因为客户端没做平滑，先这样
		gl.updateSnap()
	}

	//10秒一刷一波
	if gl.timer%500 == 0 {
		gl.stage++
		gl.spawnFighters()
		gl.send("newStage", &gameproto.NewStage{Stage: gl.stage, Fighters: gl.GetFightersInfo()})
	}
}

//更新位置
func (gl *GameLogic) updateSnap() {
	snap := &gameproto.Snap{}
	for _, fighter := range gl.fighters {
		info := &gameproto.FighterSnapInfo{
			Id:  fighter.id,
			Pos: fighter.pos.ToFVector(),
			Vel: fighter.GetVel().ToFVector()}
		snap.Infos = append(snap.Infos, info)
	}

	gl.send("snap", snap)
}

//主动结束
func (gl *GameLogic) close(reason string) {
	gl.closeSign <- 1
	log.Info("room close:%v,%v", gl.roomId, reason)
}

//结束时机
func (gl *GameLogic) onClosed() {
	log.Info("gamelogic close:%v", gl.roomId)
	gl.roomPID.Tell(&RoomEnd{})
}

//发送到场景
func (gl *GameLogic) send(msgId interface{}, data proto.Message) {
	msg := &OutMsg{msgId: msgId, data: data}
	gl.roomPID.Tell(msg)
}
func (gl *GameLogic) sendPlayer(uid uint64, msgId interface{}, data proto.Message) {
	msg := &OutMsg{msgId: msgId, data: data, uid: uid}
	gl.roomPID.Tell(msg)
}
func (gl *GameLogic) getFighter(id int32) *Fighter {
	if f, ok := gl.fighters[id]; ok {
		return f
	}
	return nil
}

func (gl *GameLogic) addFighter(f *Fighter) int32 {
	id := gl.GenID()
	f.id = id
	gl.fighters[id] = f
	return id
}

func (gl *GameLogic) removeFighter(id int32) {
	f := gl.getFighter(id)
	if f != nil {
		delete(gl.fighters, id)
	}

}

func (gl *GameLogic) getFighterByPlayerId(uid uint64) *Fighter {
	if f, ok := gl.playerfighters[uid]; ok {
		return f
	}
	return nil
}

func (gl *GameLogic) GetFightersInfo() []*gameproto.FighterInfo {
	var list []*gameproto.FighterInfo
	for _, f := range gl.fighters {
		info := f.GetFighterInfo()
		list = append(list, info)
	}
	return list
}

//客户端输入
func (gl *GameLogic) onClientMsg(cmsg ClientMsg) {
	msgId := cmsg.msgId.(string)
	fighter := gl.getFighterByPlayerId(cmsg.uid)
	if fighter == nil {
		return
	}
	switch msgId {
	case "b_move":
		msg := &gameproto.Move{}
		json.Unmarshal(cmsg.rawData, msg)
		fighter.Move(msg.Angle)
	case "b_shot":
		fighter.Shot()
		log.Info("shot")
	}
}

func (gl *GameLogic) spawnFighters() {

	pos, w, h := gl.mapRect.GetRect()
	for index := 0; index < int(gl.stage)*2; index++ {
		newpos := pos.Add(c.Vector2D{rand.Float32() * w, rand.Float32() * h})
		f := NewFighter(0, &newpos, gl, false)
		gl.addFighter(f)
	}

	//start
	for _, f := range gl.fighters {
		f.OnStart()
	}
}

func (gl *GameLogic) addEntity(e IEntity) {
	id := e.GetID()
	gl.entitys[id] = e
	gl.send("addEntity", e.GetInfo())
}

func (gl *GameLogic) removeEntity(e IEntity) {
	id := e.GetID()
	delete(gl.entitys, id)
	gl.send("removeEntity", &gameproto.RemoveEntity{Id: id})
}
