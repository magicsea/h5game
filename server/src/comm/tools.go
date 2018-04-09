package comm

import (
	"encoding/json"
	"fmt"
	"time"
)

type TimeTaskFunc func()

func StartLoopTask(t time.Duration, fun TimeTaskFunc) chan byte {
	var closeSign chan byte
	closeSign = make(chan byte, 1)
	timeTicker := time.NewTicker(t)
	go func() {
		var closed bool
		for !closed {
			select {
			case <-closeSign:
				timeTicker.Stop()
				closed = true
				fmt.Println("timer stop")
			case <-timeTicker.C:
				fun()
			}
		}
		fmt.Println("timer func end")
	}()

	return closeSign
}

func CrashNow() {
	a := 0
	b := 1 / a
	_ = b
}

var testLastTime time.Time

func BeginTimeTest() {
	testLastTime = time.Now()
}

func EndTimeTest() time.Duration {
	return time.Now().Sub(testLastTime)
}

func CheckInSliceI(v int, slice []int) bool {
	for _, vitem := range slice {
		if v == vitem {
			return true
		}
	}
	return false
}

func CheckInSliceI32(v int32, slice []int32) bool {
	for _, vitem := range slice {
		if v == vitem {
			return true
		}
	}
	return false
}

//"A",1,"B",2 =>
//{"A":1,"B":3}
func MakeDictJson(a ...interface{}) string {
	var m = make(map[string]interface{})
	for i := 0; i < len(a)/2; i++ {
		m[a[i*2].(string)] = a[i*2+1]
	}
	var s, _ = json.Marshal(m)
	return string(s)
}
