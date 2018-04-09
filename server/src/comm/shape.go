package comm

//======================Shape===============================
type Shape interface {
	PointInRange(d Vector2D) bool
	SetPos(d Vector2D)
}

//======================Rect===============================
type Rect struct {
	basePos Vector2D //左下角原点
	w       float32
	h       float32
}

func NewRect(point Vector2D, w, h float32) *Rect {
	r := &Rect{point, w, h}
	return r
}

//点是否在范围内
func (re *Rect) PointInRange(d Vector2D) bool {
	if d.X < re.basePos.X || d.Y < re.basePos.Y {
		return false
	}

	if d.X > re.basePos.X+re.w || d.Y > re.basePos.Y+re.h {
		return false
	}
	return true
}

func (re *Rect) SetPos(d Vector2D) {
	re.basePos = d
}

func (re *Rect) GetRect() (Vector2D, float32, float32) {
	return re.basePos, re.w, re.h
}

//==========================Circle================================
type Circle struct {
	basePos Vector2D //圆心
	r       float32  //半径
}

func NewCircle(point Vector2D, r float32) *Circle {
	c := &Circle{point, r}
	return c
}

func (c *Circle) PointInRange(d Vector2D) bool {
	sd := c.basePos.SqrDistance(d)
	if sd > c.r*c.r {
		return false
	}
	return true
}

func (c *Circle) SetPos(d Vector2D) {
	c.basePos = d
}
