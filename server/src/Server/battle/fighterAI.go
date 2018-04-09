package battle

import (
	"math/rand"
)

type FighterAI struct {
	fighter   *Fighter
	gl        *GameLogic
	timer     float32
	timerShot float32
}

func NewFighterAI(f *Fighter, gl *GameLogic) *FighterAI {
	return &FighterAI{fighter: f, gl: gl, timer: 0, timerShot: 0}
}

func (ai *FighterAI) Start() {
	ai.RandTurn()
	ai.timerShot = 4 + rand.Float32()*4 //8秒内随机一次
}

func (ai *FighterAI) Update(dtime float32) {

	//shot
	ai.timerShot -= dtime
	if ai.timerShot < 0 {
		ai.timerShot += rand.Float32() * 8 //8秒内随机一次
		ai.fighter.Shot()
	}

	//turn
	ai.timer -= dtime
	if ai.timer < 0 {
		ai.RandTurn()
	}

	//计算边界
	f := ai.fighter
	v := f.GetVel().Multiply(dtime)
	newpos := f.pos.Add(v)
	if !f.gl.mapRect.PointInRange(newpos) {
		ai.RandTurn()
	}
}

func (ai *FighterAI) RandTurn() {
	ai.timer += rand.Float32() * 10 //10秒内随机一次
	ai.fighter.Move(rand.Float32() * 360)

}
