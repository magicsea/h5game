package battle

import (
	c "comm"
	"math"
	//"fmt"

	"testing"
)

func TestVec(T *testing.T) {
	v := c.NewVector2D(0, 1)

	v2 := c.NewVector2D(0, 1)
	//angle := v.Dot(v2) / v.Magnitude() * v2.Magnitude()
	//ac := math.Acos(float64(angle))
	a := v2.AngleY() * 180 / math.Pi

	T.Errorf("v:%v,a:%v  a2:", v, a)

}
