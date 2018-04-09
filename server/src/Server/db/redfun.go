package db

import "github.com/magicsea/ganet/log"

type BattleState int32

const (
	BattleStateFree  BattleState = 0
	BattleStateQueue BattleState = 1
	BattleStateFight BattleState = 2
	BattleStateEnd   BattleState = 3
)

//获取玩家战斗信息
func GetPlayerBattleInfo(id uint64) *PlayerBattleInfo {
	info := &PlayerBattleInfo{}
	if b, _ := GetRedisObject(info, id, GetRedisBattle()); b {
		return info
	}
	return nil
}

//设置玩家战斗信息
func SetPlayerBattleInfo(id uint64, info *PlayerBattleInfo) {
	SetRedisObject(info, id, GetRedisBattle())
}

//设置玩家战斗结束
func SetPlayerBattleState(id uint64, state int32) {
	info := &PlayerBattleInfo{BattleState: state}
	UpdateRedisObjectFields(info, id, GetRedisBattle(), "BattleState")
}

//设置玩家战斗结束
func SetPlayerBattleFinish(id uint64) {
	info := &PlayerBattleInfo{BattleState: int32(BattleStateEnd)}
	UpdateRedisObjectFields(info, id, GetRedisBattle(), "BattleState")
}

//单独设置roominfo
func SetPlayerRoomInfo(id uint64, romminfo string) {
	info := &PlayerBattleInfo{RoomInfo: romminfo}
	UpdateRedisObjectFields(info, id, GetRedisBattle(), "RoomInfo")
}

func SavePlayerFightInfo(uid uint64, roomType int32, roomKey, addr, addrId string) {
	log.Info("SavePlayerInfo :uid=%v,roomType=%v,roomkey=%v", uid, roomType, roomKey)
	SetPlayerBattleInfo(uid,
		&PlayerBattleInfo{
			RoomType:     roomType,
			RoomKey:      roomKey,
			BattleAddr:   addr,
			BattleAddrID: addrId,
			//RoomInfo:   string(romminfo),
			BattleState: int32(BattleStateFight),
		})
}

//删除战斗信息
func ClearPlayerBattleInfo(id uint64, info *PlayerBattleInfo) {
	var roomType int32
	var roomKey string
	if info != nil {
		roomType = info.RoomType
		roomKey = info.RoomKey
	}
	log.Info("ClearPlayerBattleInfo :uid=%v,roomType=%v,roomkey=%v", id, roomType, roomKey)
	DeleteRedisObject(info, id, GetRedisBattle())
}

type MsgBattleRoomInfo struct {
	Uid        uint64  `json:"uid"`
	RoomType   int32   `json:"rtype"`
	Hero       int32   `json:"hero"`
	CardList   []int32 `json:"card"`
	EquipList  []int32 `json:"equip"`
	Name       string  `json:"name"`
	Level      int32   `json:"lv"`
	Stair      int32   `json:"stair"`
	Score      int32   `json:"score"`
	StairScore int32   `json:"stairScore"`
	AI         int32   `json:"ai"`
	Time       int64   `json:"time"`
	Boss       int32   `json:"boss"`
	Key        string
}

func CheckWhiteIP(ip string) (bool, error) {
	whiteopen, errwh := GetRedisConfig().Get("whiteip").Result()
	log.Info("login client addr:%s    whiteopen:%s", ip, whiteopen, errwh)

	if whiteopen == "true" {
		s, err := GetRedisConfig().HGet("whiteips", ip).Result()
		if err != nil || s != "true" {
			return false, err
		}
	}

	return true, nil
}
