package battle

import (
	c "comm"
	"gameproto"
	"github.com/magicsea/ganet/log"
	"math"
	"time"
)

type GroupType int

const (
	PlayerGroup  GroupType = 0
	MonsterGroup GroupType = 1
)

type Fighter struct {
	id          int32
	pos         *c.Vector2D
	angel       float32
	targetAngel float32
	speed       float32 //弧度
	angelSpeed  float32
	gl          *GameLogic
	ai          *FighterAI
	group       GroupType

	box  c.Shape
	hp   int32
	kill int32
}

const (
	tankSize float32 = 30
)

func NewFighter(id int32, pos *c.Vector2D, gl *GameLogic, isPlayer bool) *Fighter {

	box := c.NewCircle(*pos, tankSize)
	f := &Fighter{id: id, pos: pos, angel: 0, speed: 40, angelSpeed: 200 * math.Pi / 180, gl: gl, hp: 4, box: box}
	if !isPlayer {
		ai := NewFighterAI(f, gl)
		f.ai = ai
		f.group = MonsterGroup
	} else {
		f.group = PlayerGroup
	}

	return f
}

func (f *Fighter) OnStart() {
	log.Info("fighter OnStart:%v", f.id)
	if f.ai != nil {
		f.ai.Start()
	}

}
func (f *Fighter) update(dtime float32) {
	if f.ai != nil {
		f.ai.Update(dtime)
	}

	//计算方向   向上为angel=0
	// if f.targetAngel-f.angel > dtime*f.angelSpeed {
	// 	var dir float32 = 1
	// 	if f.targetAngel < f.angel {
	// 		dir = -1
	// 	}
	// 	f.angel += dir * f.angelSpeed * dtime
	// 	log.Info("turn %d:%v", f.id, f.angel)
	// }

	//计算位置
	v := f.GetVel().Multiply(dtime)
	newpos := f.pos.Add(v)
	//log.Info("add %+v=>%+v", v, newpos)
	if f.gl.mapRect.PointInRange(newpos) {
		f.pos = &newpos
		f.box.SetPos(newpos)
	}

}

//速度
func (f *Fighter) GetVel() *c.Vector2D {
	vr := c.FromRadians(math.Pi/2 - f.angel) //换算成x方向
	nv := vr.Normalize()
	v := nv.Multiply(f.speed)
	return &v
}

func (f *Fighter) GetFighterInfo() *gameproto.FighterInfo {
	info := &gameproto.FighterInfo{Id: f.id, Pos: f.pos.ToFVector(), Vel: f.GetVel().ToFVector(), Hp: f.hp}
	return info
}
func (f *Fighter) Move(angle float32) {
	//log.Info("Move %d:%v", f.id, angle)
	f.targetAngel = angle * math.Pi / 180
	f.angel = f.targetAngel
}

func (f *Fighter) Shot() {

	f.gl.send("shot", &gameproto.Shot{Id: f.id, BulletId: 0, Pos: f.pos.ToFVector(), Angel: f.angel})
	var bspeed float32 = 200 //子弹速度
	svel := f.GetVel()
	nvel := svel.Normalize()
	a := nvel.Multiply(bspeed)
	bl := NewBullet(f.gl, f.pos, &a, f)
	f.gl.addEntity(bl)
}

func (f *Fighter) BeHit(bullet *Bullet, enemy *Fighter) {
	f.hp--

	f.gl.send("hit", &gameproto.Hit{BulletId: bullet.id, TargetId: f.id, LoseHP: 1})

	if f.hp <= 0 {
		f.Dead(enemy)
	}
}

func (f *Fighter) Dead(enemy *Fighter) {

	f.gl.send("dead", &gameproto.Dead{Id: f.id, EnemyId: enemy.id})

	if f.group == PlayerGroup {
		t := time.Now().Sub(f.gl.startTime).Seconds()
		f.gl.send("gameover", &gameproto.GameOver{Winner: 0, Time: int32(t), Stage: f.gl.stage, Kill: f.kill})
		f.gl.close("over")
		return
	}

	f.gl.removeFighter(f.id)
	enemy.kill++
}
