package db

import (
	"encoding/json"
	"fmt"
	"github.com/go-redis/redis/v7"
	"github.com/magicsea/ganet/util"
	"reflect"
	"strings"
	"github.com/magicsea/ganet/log"
	"time"
)

/*
//穿透获取对象,先那redis，没有再拿mysql
//必须结构里赋值id，通过传入id相通
func XRead(o interface{}, id interface{}, redclient *redis.Client, dbclient *gdb.DBClient) (bool, error) {
	//hashName := MakeHashKey(o, id)
	//emp =redclient.HGet(hashName, "_empty_").Int64() if emp>0 return true,nil
	//get redis
	found, _ := GetRedisObject(o, id, redclient)
	if found {
		return false, nil
	}
	//get db
	norow, err := dbclient.Read(o)
	if err != nil {
		return norow, err
	}
	if norow {
		//todo:这里可能db没有数据的时候反复读
		//redclient.HSet(hashName, "_empty_", 1)
		return norow, nil
	}
	//写回redis
	SetRedisObject(o, id, redclient)
	return true, nil
}

//更新多个字段
func XUpdate(o interface{}, id interface{}, redclient *redis.Client, dbclient *gdb.DBClient, colNames ...string) {
	//update redis
	UpdateRedisObjectFields(o, id, redclient, colNames...)
	//udpate db
	dbclient.Update(o, colNames...)
	//redclient.HSet(hashName, "_empty_", 0)
}

//插入
func XInsert(o interface{}, redclient *redis.Client, dbclient *gdb.DBClient) (int64, error) {
	//udpate db
	id, err := dbclient.Insert(o)
	if err != nil {
		log.Error("XInsert error:", err)
		return 0, err
	}
	//update redis
	SetRedisObject(o, id, redclient)
	//redclient.HSet(hashName, "_empty_", 0)
	return id, nil
}

//删除
//必须结构里赋值id，通过传入id相通
//todo:只支持主键删除
func XDelete(o interface{}, id interface{}, redclient *redis.Client, dbclient *gdb.DBClient) (int64, error) {
	//udpate db
	ok, err := dbclient.Delete(o)
	if err != nil {
		log.Error("XDelete error:", err)
		return 0, err
	}
	//update redis
	DeleteRedisObject(o, id, redclient)
	return ok, nil
}
*/
//---------------------------------------redis jobs----------------------------------------
//删除一个hash对象
func DeleteRedisObject(o interface{}, id interface{}, redclient *redis.Client) {
	hashName := MakeHashKey(o, id)
	redclient.Del(hashName)
	log.Info("DeleteRedisObject:%v", hashName)
}

//更新多个字段，不指定colNames就更新所有
func UpdateRedisObjectFields(o interface{}, id interface{}, redclient *redis.Client, colNames ...string) {
	if len(colNames) < 1 {
		//不指定就更新所有
		SetRedisObject(o, id, redclient)
	} else {
		//更新指定列
		hashName := MakeHashKey(o, id)
		v := reflect.ValueOf(o).Elem()
		//t := reflect.TypeOf(o).Elem()

		hash := make(map[string]interface{})
		for _, col := range colNames {
			hash[col] = v.FieldByName(col).Interface()
		}
		redclient.HMSet(hashName, hash)
	}
}

//增加一个字段数据
func IncreRedisObjectField(o interface{}, id interface{}, redclient *redis.Client, col string, incre int64) (int64, error) {
	hashName := MakeHashKey(o, id)
	return redclient.HIncrBy(hashName, col, incre).Result()
}

//获取一个字段
func GetRedisObjectField(o interface{}, id interface{}, redclient *redis.Client, col string) (string, error) {
	hashName := MakeHashKey(o, id)
	return redclient.HGet(hashName, col).Result()
}

//通过前置名获取一个字段
func GetRedisObjectFieldByKey(prename string, id interface{}, redclient *redis.Client, col string) (string, error) {
	hashName := MakeStringHashKey(prename, id)
	return redclient.HGet(hashName, col).Result()
}

//直接从redis拿，
//返回:是否查找到
func GetRedisObject(o interface{}, id interface{}, redclient *redis.Client) (bool, error) {
	hashName := MakeHashKey(o, id)
	b, err := GetRedisObjectByKey(o, hashName, redclient)
	return b, err
}

//直接从redis拿,通过redis key
// func GetRedisObjectByKey(o interface{}, hashName string, redclient *redis.Client) (bool, error) {

// 	v := reflect.ValueOf(o).Elem()
// 	//get redis
// 	m, err := redclient.HGetAll(hashName).Result()
// 	//fmt.Println("hash ", m)
// 	if err == nil {
// 		if len(m) > 0 {
// 			for name, val := range m {
// 				err := util.SetValueFromStr(v.FieldByName(name), val)
// 				if err != nil {
// 					log.Error("GetRedisObjectByKey:%v,error field:%v", err, name)
// 					return false, err
// 				}
// 			}
// 			//fmt.Println("get", len(m))
// 			return true, nil
// 		}
// 	} else {
// 		log.Error("GetRedisObject error:%v, %v", err, hashName)
// 	}

// 	return false, nil
// }

//直接从redis拿1
//支持类型：各基础类型,[]byte,[]int32,map[string]intface{}
func GetRedisObjectByKey(o interface{}, hashName string, redclient *redis.Client) (bool, error) {
	v := reflect.ValueOf(o).Elem()
	//get redis
	m, err := redclient.HGetAll(hashName).Result()
	//fmt.Println("hash ", m)
	if err == nil && len(m) > 0 {
		for name, val := range m {
			var fv = v.FieldByName(name)
			if !fv.IsValid() { //过滤不包含的字段
				continue
			}
			if err := util.SetValueFromStr(fv, val); err != nil {
				if util.IsStructType(fv.Kind()) {
					var jsval = reflect.New(fv.Type().Elem()).Interface()

					var errj = json.Unmarshal([]byte(val), jsval)
					//log.Info("jsval:%+v,%v,%v", jsval, reflect.TypeOf(jsval), fv.Type())
					if errj != nil {
						log.Error("GetRedisObjectByKey:%v,str:%s,error field:%v", errj, val, name)
						return false, errj
					}
					fv.Set(reflect.ValueOf(jsval))
				} else {
					return false, err
				}
			}

		}
		//fmt.Println("get", len(m))
		return true, nil
	}
	if err != nil {
		log.Error("GetRedisObject error:%v, %v", err, hashName)
	}

	return false, err
}

//设置一个对象的多条属性
func SetRedisObjectFields(o interface{}, id interface{}, redclient *redis.Client, m map[string]interface{}) error {
	hashName := MakeHashKey(o, id)
	return redclient.HMSet(hashName, m).Err()
}

//设置一个对象的一条属性
func SetRedisObjectField(o interface{}, id interface{}, redclient *redis.Client, k string, v interface{}) error {
	hashName := MakeHashKey(o, id)
	m := map[string]interface{}{k: v}
	return redclient.HMSet(hashName, m).Err()
}

//保存一个对象到redis
func SetRedisObject(o interface{}, id interface{}, redclient *redis.Client) error {
	hashName := MakeHashKey(o, id)
	v := reflect.ValueOf(o).Elem()
	t := reflect.TypeOf(o).Elem()
	//fmt.Println(v, t)
	hash := make(map[string]interface{})
	for index := 0; index < v.NumField(); index++ {
		//fmt.Println(v.Field(index).Type(), t.Field(index).Name,
		//	"=>", v.Field(index).Interface())
		var fv = v.Field(index)
		var f = fv.Interface()
		var isRed = false
		switch f.(type) {
		case []byte:
			isRed = true
		}
		if util.IsStructType(fv.Kind()) && !isRed {
			var js, e = json.Marshal(f)
			if e != nil {
				log.Error("SetRedisObject:%v", e)
				return e
			}
			f = string(js)
		}
		hash[t.Field(index).Name] = f
		//fmt.Println(index, v.NumField())

	}

	var err = redclient.HMSet(hashName, hash).Err()
	log.Debug("SetRedisObject:%v=>%v", hashName, hash)
	if err != nil {
		log.Error("SetRedisObject:%v=>%v  fail:%v", hashName, hash, err)
		return err
	}
	return nil
}

func SetRedisObjectExpire(o interface{}, id interface{}, redclient *redis.Client, extime time.Duration) error {
	hashName := MakeHashKey(o, id)
	var e = SetRedisObject(o, id, redclient)
	if e != nil {
		return e
	}
	redclient.Expire(hashName, extime)
	return nil
}

//Set 集合
func Sadd(o interface{}, id interface{}, redclient *redis.Client, values interface{}) {
	Name := MakeHashKey(o, id)
	redclient.SAdd(Name, values)
}

//获取集合长度
func GetSetNum(o interface{}, id interface{}, redclient *redis.Client) int32 {
	Name := MakeHashKey(o, id)
	num := redclient.SCard(Name).Val()
	return int32(num)
}

//获取集合全部元素
func GetSetAll(o interface{}, id interface{}, redclient *redis.Client) []string {
	Name := MakeHashKey(o, id)
	AllSets := redclient.SMembers(Name).Val()
	return AllSets
}

//删除集合元素
func DelSetObject(o interface{}, id interface{}, redclient *redis.Client, values interface{}) {
	Name := MakeHashKey(o, id)
	redclient.SRem(Name, values)
}

//检查集合中是否有该元素
func Sismember(o interface{}, id interface{}, redclient *redis.Client, values interface{}) bool {
	Name := MakeHashKey(o, id)
	return redclient.SIsMember(Name, values).Val()
}

//List 增加多个元素
func Rpush(o interface{}, id interface{}, redclient *redis.Client, values interface{}) {
	ListName := MakeHashKey(o, id)
	redclient.RPush(ListName, values)
}

//做一个key
func MakeHashKey(o interface{}, id interface{}) string {
	hashName := fmt.Sprintf("%v:%v", reflect.TypeOf(o), id)
	splstr := strings.Split(hashName, ".")
	if len(splstr) > 1 {
		hashName = splstr[1]
	}
	return hashName
}

func MakeStringHashKey(objtype string, id interface{}) string {
	hashName := fmt.Sprintf("%v:%v", objtype, id)
	return hashName
}

//获取 List长度
func GetListNum(o interface{}, id interface{}, redclient *redis.Client) int32 {
	ListName := MakeHashKey(o, id)
	num := redclient.LLen(ListName).Val()
	return int32(num)
}

//获取List最后一个元素
func GetLastIndex(o interface{}, id interface{}, redclient *redis.Client) string {
	ListName := MakeHashKey(o, id)
	return redclient.LIndex(ListName, -1).Val()
}

//批量删除List 元素
func Ldels(o interface{}, id interface{}, redclient *redis.Client, values ...interface{}) {
	ListName := MakeHashKey(o, id)
	for _, v := range values {
		redclient.LRem(ListName, 1, v)
	}
}

//删除List 某个元素
func Ldel(o interface{}, id interface{}, redclient *redis.Client, value interface{}) {
	ListName := MakeHashKey(o, id)
	redclient.LRem(ListName, 1, value)
}

//获取List全部元素
func GetAllListInfo(o interface{}, id interface{}, redclient *redis.Client) []string {
	nums := GetListNum(o, id, redclient)
	ListName := MakeHashKey(o, id)
	allList := []string{}
	for k := 1; k <= int(nums); k++ {
		allList = append(allList, redclient.LIndex(ListName, int64(k)).Val())
	}
	return allList
}

//检测key是否存在
func Exists(o interface{}, id interface{}, redclient *redis.Client) bool {
	KeyName := MakeHashKey(o, id)
	exists := redclient.Exists(KeyName).Val()
	if exists == 1 {
		return true
	}
	return false
}

//检测key是否存在
func ExistsByKey(KeyName string, redclient *redis.Client) bool {
	exists := redclient.Exists(KeyName).Val()
	if exists == 1 {
		return true
	}
	return false
}

//keys 检测某种key是否存在
func Keys(o interface{}, id interface{}, redclient *redis.Client, last string) []string {
	KeyName := MakeHashKey(o, id)
	//fmt.Println("____", KeyName+"_*")
	return redclient.Keys(KeyName + last).Val()
}

//keys1 检测某种key是否存在
func KeysBykey(key string, redclient *redis.Client) []string {
	return redclient.Keys(key).Val()
}

//删除某个key
func Del(key string, redclient *redis.Client) {
	redclient.Del(key)
}

//有序集合添加
func Zadd(keyName string, redclient *redis.Client, score float64, value interface{}) {
	a := &redis.Z{}
	a.Score = score
	a.Member = value
	redclient.ZAdd(keyName, a)
}

//有序集合删除元素
func Zrem(keyName string, redclient *redis.Client, value interface{}) {
	redclient.ZRem(keyName, value)
}

//获取集合全部元素 (积分 由高到底)
func Zrevrange(keyName string, redclient *redis.Client, num int64) []string {
	return redclient.ZRevRange(keyName, 0, num).Val()
}

func HSet(tableName, id string, redclient *redis.Client) int64 {
	return redclient.HSet(tableName, id, 1).Val()
}

func HSetByValue(tableName, id string, value interface{}, redclient *redis.Client) int64 {
	return redclient.HSet(tableName, id, value).Val()
}

func HGet(tableName, id string, redclient *redis.Client) string {
	return redclient.HGet(tableName, id).Val()
}

func HKeys(tableName string, redclient *redis.Client) []string {
	return redclient.HKeys(tableName).Val()
}

func HDel(tableName, id string, redclient *redis.Client) int64 {
	return redclient.HDel(tableName, id).Val()
}

func HGetAll(tableName string, redclient *redis.Client) map[string]string {
	return redclient.HGetAll(tableName).Val()
}

//批量获取
func MGet(redclient *redis.Client, keys ...string) []interface{} {
	fmt.Println("------", reflect.TypeOf(keys), len(keys))
	return redclient.MGet(keys...).Val()
}
