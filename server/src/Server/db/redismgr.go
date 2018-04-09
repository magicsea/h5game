package db

import (
	"github.com/magicsea/ganet/log"
	"Server/config"
	"time"

	"github.com/go-redis/redis"
)

//redis db用途
type RedisDBUse int

const (
	RedisDBUseGame       RedisDBUse = iota //游戏角色相关数据 0
	RedisDBUseBattleLoad                   //战场负载数据 1
	RedisDBUseBattleInfo                   //战斗相关数据 2
	RedisDBFriend                          //好友相关数据 3
	RedisDBGuild                           //公会相关数据 4
	RedisDBConfig        = 10              //一些及时配置
	RedisDBUseMax
)

type RedisMgr struct {
	clients map[RedisDBUse]*redis.Client
}

func NewRedisMgr() *RedisMgr {
	r := new(RedisMgr)
	r.clients = make(map[RedisDBUse]*redis.Client)
	redisMgr = r
	return r
}

func (mgr *RedisMgr) OnInit() bool {
	if config.GetAppConf().Redis != nil {
		for _, v := range config.GetAppConf().Redis.DBs {
			if !mgr.NewRedisClient(v, config.GetAppConf().Redis.Addr, config.GetAppConf().Redis.PoolSize, config.GetAppConf().Redis.Password) {
				return false
			}
		}
	}

	return true
}

func (mgr *RedisMgr) NewRedisClient(dbIndex int, addr string, poolsize int, passsword string) bool {
	redclient := redis.NewClient(&redis.Options{
		Addr:         addr, //":6379",
		DialTimeout:  10 * time.Second,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		PoolSize:     poolsize, //10,
		Password:     passsword,
		PoolTimeout:  30 * time.Second,
		DB:           dbIndex,
	})
	_, err := redclient.Set("test____", 1, time.Second*10).Result()
	//log.Info("redis test:", dbIndex, " result:", r, " err:", err)
	if err != nil {
		log.Error("%v", err)
		return false
	}
	mgr.clients[RedisDBUse(dbIndex)] = redclient
	return true
}

func (mgr *RedisMgr) Run() {

}

func (mgr *RedisMgr) OnDestroy() {
}

var redisMgr *RedisMgr

func GetRedisDB(dbIndex RedisDBUse) *redis.Client {
	if client, b := redisMgr.clients[dbIndex]; b {
		return client
	}
	log.Error("GetRedisDB no exist:%v", dbIndex)
	return nil
}

func GetRedisGame() *redis.Client {
	return GetRedisDB(RedisDBUseGame)
}

func GetRedisBattleLoad() *redis.Client {
	return GetRedisDB(RedisDBUseBattleLoad)
}

func GetRedisBattle() *redis.Client {
	return GetRedisDB(RedisDBUseBattleInfo)
}

func GetRedisFriend() *redis.Client {
	return GetRedisDB(RedisDBFriend)
}

func GetRedisGuild() *redis.Client {
	return GetRedisDB(RedisDBGuild)
}
func GetRedisConfig() *redis.Client {
	return GetRedisDB(RedisDBConfig)
}
