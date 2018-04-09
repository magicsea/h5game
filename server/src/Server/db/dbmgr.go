package db

import (
	"Server/config"
	"github.com/magicsea/ganet/log"
	gdb "github.com/magicsea/ganet/mysqldb"
)

var gameDB *gdb.DBClient

type DBMgr struct {
}

func NewMgr() *DBMgr {
	return new(DBMgr)
}
func (mgr *DBMgr) OnInit() bool {
	//注册表结构
	gdb.RegDBModule(new(User))
	//gdb.RegDBModule(new(Player))

	//初始化连接
	if v, ok := config.GetAppConf().DB["game"]; ok {
		g, err := gdb.ConnectDB(v, "default")
		if err != nil {
			log.Error("load gamedb error:%v", err)
			return false
		}
		gameDB = g
		log.Info("load gamedb ok!")
	}
	//Testdb()
	return true
}

func Testdb() {
	p := Player{Id: 16, Name: "wwwggg", Exp: 1}
	_, err := GetGameDB().Insert(&p)
	if err != nil {
		log.Error("Insert err:%v", err.Error())
	}
}

func (mgr *DBMgr) Run() {

}

func (mgr *DBMgr) OnDestroy() {
}

func GetGameDB() *gdb.DBClient {
	return gameDB
}
