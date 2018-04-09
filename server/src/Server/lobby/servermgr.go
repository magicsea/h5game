package lobby

import (
	_ "Server/config"
	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/magicsea/ganet/log"
	_ "time"

	"Server/cluster"
	"Server/db"
	"gameproto/msgs"
	"strconv"
)

//var redclient *redis.Client

//服务器承载
const ServerFullNum = 1000

/*
func Init() bool {

	redclient = redis.NewClient(&redis.Options{
		Addr:         config.GetAppConf().Redis.Addr, //":6379",
		DialTimeout:  10 * time.Second,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		PoolSize:     config.GetAppConf().Redis.PoolSize, //10,
		PoolTimeout:  30 * time.Second,
		DB:           1,
	})
	//redclient.Set("key", "v111", 0)
	return true
}
*/

func CheckBattleServer() bool {
	allkeys, err := db.GetRedisBattleLoad().Keys("*").Result()
	if err != nil {
		log.Error("CheckBattleServer error:%v", err)
		return false
	}

	if len(allkeys) < 1 {
		return false
	}

	for _, key := range allkeys {
		res, err := db.GetRedisBattleLoad().Get(key).Result()
		//log.Info("readkey:%v,%v", key, res)
		if err != nil {
			log.Error("CheckBattleServer error:%v", err)
			return false
		}
		count, _ := strconv.Atoi(res)
		if count < ServerFullNum {
			return true
		}
	}

	return false
}
func GetBattleServers() (map[string]int32, error) {
	return nil, nil
}

//todo:get 次数太多，需要优化
func GetBestServer() (pid *actor.PID, errorCode msgs.GAErrorCode) {

	result, err := cluster.GetServicePID("center").Ask(&msgs.ApplyService{"battle"})
	if err != nil {
		log.Error("get battle server error:%v", err)
		return nil, msgs.Error
	}
	sr := result.(*msgs.ApplyServiceResult)
	if sr.Result != msgs.OK {
		log.Error("get battle server fail:%v", sr.Result)
		return nil, msgs.Error
	}

	return sr.GetPid(), msgs.OK
}
