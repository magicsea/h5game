package game

import (
	"fmt"
	"github.com/magicsea/ganet/db"
	"github.com/magicsea/ganet/log"
	"github.com/magicsea/ganet/messages"
	"testing"

	"github.com/astaxie/beego/orm"

	"github.com/gogo/protobuf/proto"
)

type TestModule struct {
	PlayerModuleBase
	testv int
}

/*************注册数据库表结构**************/

//bag
type Bag struct {
	Id      int64 `orm:"column(uid)",auto`
	ItemId  int64
	ItemNum int64
}

//ownCard
type OwnCard struct {
	Id       int64 `orm:"column(uid)",auto`
	Cardid   int64
	Cardnum  int64
	Gaintime int64
}

//groupCard
type GroupCard struct {
	Id        int64 `orm:"column(uid)",auto`
	Cardindex int64
	Jobid     int16
	Cardname  string
	Cardlist  string
	Equiplist string
}

//Hero
type Favor struct {
	Id           int64  `orm:"column(uid)",auto`
	Heroid       int32  `orm:"column(heroId)"`
	Lv           int16  `orm:"column(lv)"`
	Exp          int32  `orm:"column(exp)"`
	Usecount     int32  `orm:"column(useCount)"`
	Stairwin     int32  `orm:"column(stairWin)"`
	Arenawin     int32  `orm:"column(arenaWin)"`
	Usecard      int32  `orm:"column(useCars)"`
	Battleindex  int32  `orm:"column(battleIndex)"`
	Usedcardlist string `orm:"column(usedCarsList)"`
	Lasttime     int32  `orm:"column(lastTime)"`
}

//=================接口实现======================
func (m *TestModule) OnInit() {
}

func (m *TestModule) OnStart() {}
func (m *TestModule) OnLoad()  {}
func (m *TestModule) OnTick()  {}
func (m *TestModule) OnSave() {
	if !m.isDataDirty {
		return
	}
	//save action here...

}
func (m *TestModule) OnDestory() {}

//===============feature functions====================
func (m *TestModule) ShopBuy(data []byte) messages.GAErrorCode {
	return messages.OK
}

func (m *TestModule) ShopSell(data []byte) {
	db.ConnectDB
}

//发送shop消息到客户端
func (m *TestModule) SendClientMsg(msgId messages.ShopMsgType, msg proto.Message) {
	m.player.SendClientMsg(messages.Shop, byte(msgId), msg)
}

func Test(t *testing.T) {
	orm.RegisterModel(new(Favor))
	//连接数据库
	client, err := db.ConnectDB("root:tcg123456@tcp(192.168.3.194:3306)/tcg_new", "default")
	if err != nil {
		t.Error(err)
		return
	}
	m := new(PlayerHeroModule)
	m.OnInit()
	uid := 100024
	//私人卡组
	var favor []Favor
	sql := fmt.Sprintf("select * from favor where uid = ?")
	_, err1 := client.Raw(sql, uid).QueryRows(&favor)
	if err1 != nil {
		log.Error("Select favor err :", err1)
	} else {
		fmt.Printf("alldata is :%v\n", favor)
		for _, v := range favor {
			var hero Hero
			var herousecount HeroUseCount
			var herousecard HeroUseCard
			heroid := v.Heroid
			fmt.Printf("heroid is :%d\n", heroid)
			hero.lv = v.Lv
			hero.exp = v.Exp
			m._hero[heroid] = hero
			herousecount.usecount = v.Usecount
			herousecount.stairwin = v.Stairwin
			herousecount.arenawin = v.Arenawin
			herousecount.usecard = v.Usecard
			herousecount.battleindex = v.Battleindex
			m._heroUseCount[heroid] = herousecount
			herousecard.lasttime = v.Lasttime
			herousecard.usecardlist = String2map(v.Usedcardlist)
			m._heroUseCard[heroid] = herousecard
		}
		fmt.Printf("hero is:%v\n", m._hero)
		fmt.Printf("herocard is:%v\n", m._heroUseCard)
		fmt.Printf("herocount is:%v\n", m._heroUseCount)
	}
}
