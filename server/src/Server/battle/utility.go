package battle

import (
	"math/rand"
	"time"
)

func PassDayZero(clock int32, newClock int32) bool {
	if clock < newClock {
		if time.Unix(int64(clock), 0).Format("200601") != time.Unix(int64(newClock), 0).Format("200601") {
			return true
		}
	}
	return false
}

func PassDay(clock int32, newClock int32, timeIndex int32) bool {
	clock -= timeIndex * 1800
	newClock -= timeIndex * 1800
	return PassDayZero(clock, newClock)
}

func BMoney(key int32) bool {
	if key == 1 || key == 2 || key == 3 {
		return true
	}
	return false
}

type Tempstruct struct {
	itemId int32
	weight int32
}

type Temp1 struct {
	key    int32
	itemId int32
	weight int32
}

func getIndex(n int32, ret []Temp1) int32 {
	for _, v := range ret {
		if v.key < n {
			n += v.weight
		}
	}
	return n
}

func GetRand(num int32) int32 {
	return int32(rand.Intn(int(num)))
}

func bPassDay(clock, newClock int64) bool {
	//var timeIndex = int64(PASS_DAY_TIME_INDEX)
	var timeIndex = int64(0)
	clock -= timeIndex * 1800
	newClock -= timeIndex * 1800
	return bPassDayZero(clock, newClock)
}

func bPassDayZero(clock, newClock int64) bool {
	//一天=86400s
	_, timezone := time.Now().Zone()
	//fmt.Println(newClock/86400, clock/86400, timezone)
	//fmt.Println((newClock-int64(timezone))/86400, (clock-int64(timezone))/86400)
	//return (newClock+int64(timezone))/86400 > (clock)/86400
	return (newClock - clock) >= (86400 - (clock+int64(timezone))%86400)
}

//1970 to now,seconds
func GetNowTimeSecond() int64 {
	return time.Now().Unix()
}

//下一个 间隔时间===========================================================================
func SharpMinute(c, now int64) int64 {
	return (now + c*60) / 60 * 60
}
func SharpHour(c, now int64) int64 {
	return (now + c*3600) / 3600 * 3600
}
func SharpDayT(c, now int64) int64 {
	tt := time.Unix(now, 0)
	y := tt.Year()
	m := tt.Month()
	d := tt.Day()
	t1 := time.Date(y, m, d, 0, 0, 0, 0, time.Local)
	return t1.Unix() + c*24*60*60
}
func SharpWeek(c, now int64) int64 {
	tt := time.Unix(now, 0)
	week := tt.Weekday()
	if week == 0 {
		week = 7
	}
	now = now + (7*c+1-int64(week))*86400
	return SharpDayT(0, now)
}
func SharpMonth(c, now int64) int64 {
	tt := time.Unix(now, 0)
	m := tt.Month()
	y := tt.Year() + int(m/12)
	m = m % 12
	t1 := time.Date(y, m, 1, 0, 0, 0, 0, time.Local)
	return t1.Unix()
}
func SharpYear(c, now int64) int64 {
	tt := time.Unix(now, 0)
	y := tt.Year() + int(c)
	t1 := time.Date(y, 0, 1, 0, 0, 0, 0, time.Local)
	return t1.Unix()
}

func Bool2I32(b bool) int32 {
	if b {
		return 1
	}
	return 0
}
