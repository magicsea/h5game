package comm

import (
	"fmt"
	"gameproto"
	"math"
)

type Vector2D struct {
	X float32
	Y float32
}

func NewVector2D(x, y float32) Vector2D {
	return Vector2D{x, y}
}

func FromScalar(v float32) Vector2D {
	return Vector2D{v, v}
}

func FromRadians(r float32) Vector2D {
	return Vector2D{float32(math.Cos(float64(r))), float32(math.Sin(float64(r)))}
}

func Vector2DZero() Vector2D {
	return Vector2D{0, 0}
}

func Vector2DUnit() Vector2D {
	return Vector2D{1, 1}
}

func (v Vector2D) ToFVector() *gameproto.FVector {
	return &gameproto.FVector{v.X, v.Y}
}

func (v Vector2D) Copy() Vector2D {
	return Vector2D{v.X, v.Y}
}

//模
func (v Vector2D) Magnitude() float32 {
	f64 := float64(v.SqrMagnitude())
	r := math.Sqrt(f64)
	return float32(r)
}

//模平方
func (v Vector2D) SqrMagnitude() float32 {
	return v.X*v.X + v.Y*v.Y
}

func (v Vector2D) Add(v2 Vector2D) Vector2D {
	return Vector2D{v.X + v2.X, v.Y + v2.Y}
}

func (v Vector2D) Sub(v2 Vector2D) Vector2D {
	return Vector2D{v.X - v2.X, v.Y - v2.Y}
}

func (v Vector2D) MultiplyVector(v2 Vector2D) Vector2D {
	return Vector2D{v.X * v2.X, v.Y * v2.Y}
}

func (v Vector2D) DivideVector(v2 Vector2D) Vector2D {
	return Vector2D{v.X / v2.X, v.Y / v2.Y}
}

func (v Vector2D) Multiply(s float32) Vector2D {
	return Vector2D{v.X * s, v.Y * s}
}

func (v Vector2D) Divide(s float32) Vector2D {
	return Vector2D{v.X / s, v.Y / s}
}

//距离
func (v Vector2D) Distance(v2 Vector2D) float32 {
	x := v.X - v2.X
	y := v.Y - v2.Y
	r := x*x + y*y
	return float32(math.Sqrt(float64(r)))
}

//距离的平方
func (v Vector2D) SqrDistance(v2 Vector2D) float32 {
	x := v.X - v2.X
	y := v.Y - v2.Y
	r := x*x + y*y
	return r
}

//是否在规定距离以内
func (v Vector2D) WithInDistance(v2 Vector2D, dis float32) bool {
	return v.SqrDistance(v2) < dis*dis
}

func (v Vector2D) Dot(v2 Vector2D) float32 {
	return v.X*v2.X + v.Y*v2.Y
}

func (v Vector2D) Reflect(normal Vector2D) Vector2D {
	dotProduct := v.Dot(normal)
	return Vector2D{v.X - (2 * dotProduct * normal.X), v.Y - (2 * dotProduct * normal.Y)}
}

func (v Vector2D) Normalize() Vector2D {
	mag := v.Magnitude()
	if mag == 0 || mag == 1 {
		return v.Copy()
	}
	return v.Divide(mag)
}

func (v Vector2D) Limit(max float32) Vector2D {
	magSq := v.Magnitude()
	if magSq <= max*max {
		return v.Copy()
	}
	return v.Normalize().Multiply(max)
}

func (v Vector2D) Angle() float32 {
	f := -1 * math.Atan2(float64(v.Y*-1), float64(v.X))
	return float32(f)
}

//UP为0顺时针(angle=[0,2*PI)
func (v Vector2D) AngleY() float32 {
	f := math.Pi/2 + math.Atan2(float64(v.Y*-1), float64(v.X))
	if f < 0 {
		f += math.Pi * 2
	}
	return float32(f)
}
func (v Vector2D) Rotate(angle float32) Vector2D {
	return Vector2D{
		v.X*float32(math.Cos(float64(angle))) - v.Y*float32(math.Sin(float64(angle))),
		v.X*float32(math.Sin(float64(angle))) - v.Y*float32(math.Cos(float64(angle))),
	}
}

func (v Vector2D) LinearInterpolateToVector(v2 Vector2D, amount float32) Vector2D {
	return Vector2D{
		linearInterpolate(v.X, v2.X, amount),
		linearInterpolate(v.Y, v2.Y, amount),
	}
}

func (v Vector2D) MapToScalars(oldMin, oldMax, newMin, newMax float32) Vector2D {
	return Vector2D{
		mapFloat(v.X, oldMin, oldMax, newMin, newMax),
		mapFloat(v.Y, oldMin, oldMax, newMin, newMax),
	}
}

func (v Vector2D) MapToVectors(oldMinV, oldMaxV, newMinV, newMaxV Vector2D) Vector2D {
	return Vector2D{
		mapFloat(v.X, oldMinV.X, oldMaxV.X, newMinV.X, newMaxV.X),
		mapFloat(v.Y, oldMinV.Y, oldMaxV.Y, newMinV.Y, newMaxV.Y),
	}
}

func (v Vector2D) AngleBetween(v2 Vector2D) float32 {
	//angle := v.Dot(v2) / v.Magnitude() * v2.Magnitude()
	// switch {
	// case angle <= -1:
	// 	return math.Pi
	// case angle >= 0:
	// 	return 0
	// }
	a1 := math.Atan2(float64(v.Y), float64(v.X))
	a2 := math.Atan2(float64(v2.Y), float64(v2.X))
	return float32(a1 - a2)
}

func (v Vector2D) ClampToScalars(min, max float32) Vector2D {
	return Vector2D{
		clampFloat(v.X, min, max),
		clampFloat(v.Y, min, max),
	}
}

func (v Vector2D) ClampToVectors(minV, maxV Vector2D) Vector2D {
	return Vector2D{
		clampFloat(v.X, minV.X, maxV.X),
		clampFloat(v.Y, minV.Y, maxV.Y),
	}
}

func (v Vector2D) Floor() Vector2D {
	return Vector2D{
		float32(math.Floor(float64(v.X))),
		float32(math.Floor(float64(v.Y))),
	}
}

func (v Vector2D) Negate() Vector2D {
	return v.Multiply(-1)
}

func (v Vector2D) String() string {
	return fmt.Sprintf("{x=%v,y=%v}", v.X, v.Y)
}

func linearInterpolate(start, end, amount float32) float32 {
	return start + (end-start)*amount
}

func mapFloat(value, oldMin, oldMax, newMin, newMax float32) float32 {
	return newMin + (newMax-newMin)*((value-oldMin)/(oldMax-oldMin))
}

func clampFloat(value, min, max float32) float32 {
	switch {
	case value <= min:
		return min
	case value >= max:
		return max
	}
	return value
}
