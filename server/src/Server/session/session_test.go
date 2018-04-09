package session

import (
	"fmt"
	"testing"
	"time"
)

func TestUnloginData(t *testing.T) {
	mgr := NewUnloginDataMgr(time.Second * 3)
	mgr.Push(1, "1")
	time.Sleep(time.Second)
	mgr.Push(2, "2")
	time.Sleep(time.Second)
	mgr.Push(3, "3")
	mgr.Push(4, "4")
	for index := 0; index < 5; index++ {
		mgr.Tick(time.Now())
		time.Sleep(time.Second)
		fmt.Printf("run %d,len=%d\n", index, mgr.q.Len())
	}
}
