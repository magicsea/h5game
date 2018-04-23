package battle

import (
	c "comm"
	"gameproto"
)

type EntityType int

const (
	EBullet    EntityType = 0
	EItemHP    EntityType = 1
	EItemPower EntityType = 2
)

type IEntity interface {
	GetID() int32
	Start()
	Update(dtime float32)
	GetInfo() *gameproto.AddEntity
	GetPos() *c.Vector2D
	GetEType() EntityType
}

type EntityData struct {
	id    int32
	etype EntityType
	pos   *c.Vector2D
	vel   *c.Vector2D
	gl    *GameLogic
}

func (en *EntityData) GetID() int32 {
	return en.id
}
func (en *EntityData) GetPos() *c.Vector2D {
	return en.pos
}
func (en *EntityData) GetEType() EntityType {
	return en.etype
}

//=================Item==================
type Item struct {
	EntityData

	timer float32
}

func NewItem(gl *GameLogic, pos *c.Vector2D, t EntityType) *Item {
	data := EntityData{id: gl.GenID(), pos: pos, gl: gl, etype: t}
	bl := &Item{EntityData: data}
	bl.Start()
	return bl
}

func (bl *Item) Start() {

}

func (bl *Item) Update(dtime float32) {

	//碰撞
	for _, f := range bl.gl.fighters {
		if f.box != nil && f.box.PointInRange(*bl.pos) {
			f.OnFeed(bl.etype)
			bl.destory()
			return
		}
	}
}

func (bl *Item) destory() {
	bl.gl.removeEntity(bl)
}

func (bl *Item) GetInfo() *gameproto.AddEntity {
	return &gameproto.AddEntity{Id: bl.id, Pos: bl.pos.ToFVector(), Etype: int32(bl.etype)}
}

//=================Bullet==================
type Bullet struct {
	EntityData
	timer  float32
	hoster *Fighter
}

func NewBullet(gl *GameLogic, pos *c.Vector2D, vel *c.Vector2D, hoster *Fighter) *Bullet {
	data := EntityData{id: gl.GenID(), pos: pos, vel: vel, gl: gl}
	bl := &Bullet{EntityData: data, timer: 10, hoster: hoster}
	bl.Start()
	return bl
}

func (bl *Bullet) Start() {

}

func (bl *Bullet) Update(dtime float32) {
	bl.timer -= dtime
	if bl.timer < 0 {
		bl.destory()
		return
	}

	//move
	if bl.vel != nil {
		v := bl.vel.Multiply(dtime)
		newpos := bl.pos.Add(v)
		bl.pos = &newpos
	}

	//碰撞
	for _, f := range bl.gl.fighters {
		if f.group != bl.hoster.group {
			if f.box != nil && f.box.PointInRange(*bl.pos) {
				f.BeHit(bl, bl.hoster)
				bl.destory()
				return
			}

		}
	}

}

func (bl *Bullet) destory() {
	bl.gl.removeEntity(bl)
}

func (bl *Bullet) GetInfo() *gameproto.AddEntity {
	return &gameproto.AddEntity{Id: bl.id, Pos: bl.pos.ToFVector(), Vel: bl.vel.ToFVector(), Etype: int32(EBullet)}
}
