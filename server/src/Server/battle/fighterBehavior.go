package battle

import (
	b3core "github.com/magicsea/behavior3go/core"
	"math/rand"
)

type FighterBehavior struct {
	fighter *Fighter
	gl      *GameLogic
	bb      *b3core.Blackboard //记录行为状态
}

func NewFighterBehavior(f *Fighter, gl *GameLogic) *FighterBehavior {
	return &FighterBehavior{fighter: f, gl: gl, bb: b3core.NewBlackboard()}
}

func (ai *FighterBehavior) Start() {

}

func (ai *FighterBehavior) Update(dtime float32) {

	//更新行为树
	tree := GetBevTree()
	tree.Tick(ai.fighter, ai.bb)

	//计算边界保护
	f := ai.fighter
	v := f.GetVel().Multiply(dtime)
	newpos := f.pos.Add(v)
	if !f.gl.mapRect.PointInRange(newpos) {
		ai.fighter.Move(rand.Float32() * 360)
	}
}
