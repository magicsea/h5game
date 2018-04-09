package lobby

import (
	//"Server/GDataManager"
	"Server/db"
	"encoding/json"
	"gameproto/msgs"
	list "github.com/magicsea/ganet/data-structures/list"
	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/util"
)

var (
	PVP_WAIT_TIME         int32 = 20
	PVP_STAIR_MATCH       int32 = 10
	PVP_STAIR_MATCH_SCORE int32 = 10
	PVP_ARENA_MATCH_SCORE int32 = 10
	PVP_AI_MAX            int32
)

//战斗类型
const (
	BATTLE_PVE    = 0
	BATTLE_PVP    = 1
	BATTLE_ARENA  = 2
	BATTLE_FRIEND = 3
	BATTLE_TEAM   = 4
	BATTLE_FREE   = 5
	BATTLE_GUILD  = 6
)

type MatchFinishFunc func(battleType int32, p1, p2 *QueuePlayer)
type QueueMgr struct {
	queues      map[int32]*list.List    //[BATTLE_TYPE]队列
	waitPlayers map[uint64]*QueuePlayer //[uid]*QueuePlayer
	finishFunc  MatchFinishFunc
}

type QueuePlayer struct {
	*msgs.JoinBattleQueue
	battleInfo *db.MsgBattleRoomInfo
	matchNum   int32
}

func NewQueueMgr(fin MatchFinishFunc) *QueueMgr {
	q := &QueueMgr{make(map[int32]*list.List), make(map[uint64]*QueuePlayer), fin}
	q.Init()
	return q
}

func (q *QueueMgr) Init() {
	//PVP_WAIT_TIME = 1
	log.Info("PVP_STAIR_MATCH_SCORE:%d PVP_STAIR_MATCH:%d PVP_WAIT_TIME:%d",
		PVP_STAIR_MATCH_SCORE, PVP_STAIR_MATCH, PVP_WAIT_TIME)
}
func (q *QueueMgr) Add(player *QueuePlayer) bool {
	defer util.PrintPanicStack()

	player.battleInfo = new(db.MsgBattleRoomInfo)
	json.Unmarshal(player.RoomInfo, player.battleInfo)

	if _, ok := q.waitPlayers[player.Uid]; ok {
		return false
	}
	q.waitPlayers[player.Uid] = player
	queue := q.GetQueue(player.Rtype)
	queue.Append(player)
	return true
}

func (q *QueueMgr) GetQueue(battletype int32) *list.List {
	var queue *list.List
	if ql, ok := q.queues[battletype]; !ok {
		queue = list.New()
		q.queues[battletype] = queue
	} else {
		queue = ql
	}
	return queue
}

func (q *QueueMgr) Remove(uid uint64) {
	if p, ok := q.waitPlayers[uid]; ok {
		delete(q.waitPlayers, uid)
		list := q.GetQueue(p.Rtype)
		list.RemoveRule(func(o interface{}) bool {
			return o.(*QueuePlayer).Uid == uid
		})
	}
}

func (q *QueueMgr) Match() {
	if len(q.waitPlayers) < 1 {
		return
	}

	if !CheckBattleServer() {
		log.Error("Match没有可用battleServer")
		return
	}
	for k, list := range q.queues {
		q.MatchQueue(k, list)
	}
}

type ReadyPair struct {
	player *QueuePlayer
}

func (q *QueueMgr) MatchQueue(battleType int32, l *list.List) {
	log.Info("match%d:%d", battleType, l.Count())

	plist := l.MatchPairList(func(o1, o2 interface{}) bool {
		//if battleType == BATTLE_PVP {
		if q.matchFuncStair(o1.(*QueuePlayer), o2.(*QueuePlayer)) {
			return true
		}
		// } else if battleType == BATTLE_ARENA {
		// 	if q.matchFuncArena(o1.(*QueuePlayer), o2.(*QueuePlayer)) {
		// 		return true
		// 	}
		// }

		return false
	})
	if len(plist) > 0 {
		for _, pair := range plist {
			//匹配一对
			q.finishFunc(battleType, pair.I1.(*QueuePlayer), pair.I2.(*QueuePlayer))
			//移除一对
			l.RemoveEquel(pair.I1)
			l.RemoveEquel(pair.I2)
			delete(q.waitPlayers, pair.I1.(*QueuePlayer).Uid)
			delete(q.waitPlayers, pair.I2.(*QueuePlayer).Uid)
			log.Info("match ok,%d:%v", pair.I1.(*QueuePlayer).Uid, pair.I2.(*QueuePlayer).Uid)
		}
	}

	//>>>>>>>>>>>>>>>超时匹配AI<<<<<<<<<<<<<<<<
	if battleType != BATTLE_ARENA {
		var tmpl []*QueuePlayer
		l.Each(func(node interface{}) {
			q := node.(*QueuePlayer)
			//info := GDataManager.StairPlayerMap[q.battleInfo.Stair] //表里有的才给机器人
			log.Info("-----uid:%v, aiNum:%v,maxNum:%v", q.Uid, q.JoinBattleQueue.AiNum, PVP_AI_MAX)
			// if info != nil {
			// 	if q.matchNum > info.WaitTime/PVP_WAIT_TIME {
			// 		//准备匹配ai
			// 		tmpl = append(tmpl, q)
			// 		//log.Info(" uid:%v, PvpMatchNum:%v, stair:%v, targetNum:%v", q.Uid, q.matchNum, q.battleInfo.Stair, info.WaitTime/PVP_WAIT_TIME)
			// 	} else {
			// 		//增加计数
			// 		q.matchNum++
			// 		if q.matchNum > PVP_STAIR_MATCH {
			// 			q.matchNum = PVP_STAIR_MATCH
			// 		}
			// 	}
			// }
		})

		for _, p := range tmpl {
			log.Info("pvp vs ai:", p.Uid)
			//匹配一对,机器人数据到battle创建
			q.finishFunc(battleType, p, nil)
			//清理
			l.RemoveRule(func(o interface{}) bool {
				return o == p
			})
			delete(q.waitPlayers, p.Uid)
		}

	} else {
		//增加计数
		l.Each(func(node interface{}) {
			q := node.(*QueuePlayer)
			q.matchNum++
		})
	}

}

//匹配规则
func (q *QueueMgr) matchFuncStair(p1, p2 *QueuePlayer) bool {
	// if needAI != 0 and NEED_AI:
	// continue
	// if not IS_MEET_DEBUG and (self.lastStairOppUid.get(uid, 0) == oppUid or self.lastStairOppUid.get(oppUid, 0) == uid):
	// continue

	//var winScore int32
	//var oppWinScore int32
	//_ = winScore
	//_ = oppWinScore\

	offset := util.Abs32(p1.battleInfo.Score - p2.battleInfo.Score)
	if p1.battleInfo.StairScore != 0 {
		if p1.matchNum <= 60/PVP_WAIT_TIME {
			if p2.battleInfo.StairScore == 0 {
				return false
			}
		}

		score := util.I32Max(util.I32Max(p1.battleInfo.StairScore, p2.battleInfo.StairScore)/10, 200) * p1.matchNum

		if p1.matchNum <= 40/PVP_WAIT_TIME {
			if offset > score {
				return false
			}
		}

		if p1.matchNum > 60/PVP_WAIT_TIME {
			if p2.battleInfo.StairScore == 0 && offset > p1.matchNum*PVP_STAIR_MATCH_SCORE {
				return false
			}
		}

		//匹配成功
		// fscore := float64(p1.battleInfo.StairScore)
		// tscore := float64(p2.battleInfo.StairScore)
		// if p2.battleInfo.StairScore == 0 {
		// 	a := ((1000-fscore)*0.5)/math.Max(1000+fscore, 2000) + 0.5
		// 	winScore = 8 + int32(a*14)
		// } else {
		// 	a := (tscore-fscore)*0.5/math.Max(tscore+fscore, 2000) + 0.5
		// 	b := (fscore-tscore)*0.5/math.Max(tscore+fscore, 2000) + 0.5
		// 	winScore = 8 + int32(a*14)
		// 	oppWinScore = 8 + int32(b*14)
		// }

	} else {
		//使用净胜场匹配
		if p2.battleInfo.StairScore != 0 {
			return false
		}

		if offset > p1.matchNum*PVP_STAIR_MATCH_SCORE {
			return false
		}
	}
	return true
}
func (q *QueueMgr) matchFuncArena(p1, p2 *QueuePlayer) bool {

	offset := util.Abs32(p1.battleInfo.Score - p2.battleInfo.Score)
	log.Info("matchFuncArena:id=%d,score=%d,ts=%d,num=%d", p1.Uid, p1.battleInfo.Score, p2.battleInfo.Score, p1.matchNum)
	if offset > p1.matchNum*PVP_ARENA_MATCH_SCORE {
		return false
	}

	return true
}
