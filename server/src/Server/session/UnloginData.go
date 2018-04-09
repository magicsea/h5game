package session

import (
	"github.com/magicsea/ganet/data-structures/queue"
	"time"
)

type UnloginData struct {
	uid      uint64
	key      string
	deadline time.Time
	userdata interface{}
}

type UnloginDataMgr struct {
	dataMap  map[uint64]*UnloginData
	q        *queue.Queue
	deadTime time.Duration
}

func NewUnloginDataMgr(deadtime time.Duration) *UnloginDataMgr {
	mgr := &UnloginDataMgr{}
	mgr.dataMap = make(map[uint64]*UnloginData)
	mgr.q = queue.New()
	mgr.deadTime = deadtime
	return mgr
}

func (mgr *UnloginDataMgr) Push(uid uint64, key string, userdata interface{}) {
	data := &UnloginData{uid: uid, key: key, deadline: time.Now().Add(mgr.deadTime), userdata: userdata}
	mgr.q.Push(data)
	mgr.dataMap[uid] = data
}

func (mgr *UnloginDataMgr) Tick(now time.Time) {

	for {
		if mgr.q.Len() < 1 {
			break
		}
		head := mgr.q.Peek().(*UnloginData)
		if now.After(head.deadline) {
			mgr.q.Pop()
			delete(mgr.dataMap, head.uid)
		} else {
			break
		}
	}
}

func (mgr *UnloginDataMgr) Get(uid uint64) *UnloginData {
	return mgr.dataMap[uid]
}

func (mgr *UnloginDataMgr) Remove(data *UnloginData) {
	delete(mgr.dataMap, data.uid)
	f := func(o interface{}) bool {
		return o.(*UnloginData).uid == data.uid
	}
	mgr.q.PopRule(f)
}
