package db

/*************注册数据库表结构**************/
//user
type User struct {
	Id             int64  `orm:"column(uid)",auto`
	Account        string `orm:"column(account)"`
	Password       string `orm:"column(password)"`
	RegisterTime   int64  `orm:"column(registerTime)"`
	LastLoginTime  int64  `orm:"column(lastLoginTime)"`
	LastLogoutTime int64  `orm:"column(lastLogoutTime)"`
	BlackTime      int64  `orm:"column(blackTime)"`
	DeviceId       string `orm:"column(deviceId)"`
	LoginDays      int64  `orm:"column(loginDays)"`
	//`uid` int(11) NOT NULL AUTO_INCREMENT,
	//`platformId` varchar(255) CHARACTER SET utf8 NOT NULL,
	//`registerTime` int(15) NOT NULL DEFAULT '0',
	//`lastLoginTime` int(15) NOT NULL,
	//`lastLogoutTime` int(15) NOT NULL,
	//`blackTime` int(15) NOT NULL DEFAULT '0',
	//`deviceId` varchar(50) DEFAULT NULL,
	//`loginDays` int(5) NOT NULL DEFAULT '0',
}

//player
type Player struct {
	Id      uint64 `orm:"column(uid)",auto`
	Name    string `orm:"column(username)"`
	Cgid    int    `orm:"column(cgId)"`
	Lv      int    `orm:"column(lv)"`
	Exp     int    `orm:"column(exp)"`
	Exptime int64  `orm:"column(expTime)"`
	Rmb     int32  `orm:"column(rmb)"`
	Gold    int32  `orm:"column(gold)"`
	Ticket  int32  `orm:"column(ticket)"`
}

//bag
type Bag struct {
	Id      uint64 `orm:"column(uid)",auto`
	ItemId  int64  `orm:"column(itemId)"`
	ItemNum int64  `orm:"column(itemNum)"`
}

//ownCard
type OwnCard struct {
	Id       uint64 `orm:"column(uid)",auto`
	Cardid   int64  `orm:"column(cardId)"`
	Cardnum  int64  `orm:"column(cardNum)"`
	Gaintime int64  `orm:"column(gainTime)"`
}

//groupCard
type GroupCard struct {
	Id        uint64 `orm:"column(uid)",auto`
	Cardindex int64  `orm:"column(cardIndex)"`
	Jobid     int16  `orm:"column(jobId)"`
	Cardname  string `orm:"column(CardName)"`
	Cardlist  string `orm:"column(cardList)"`
	Equiplist string `orm:"column(equipList)"`
}

//Hero
type Favor struct {
	Id           uint64 `orm:"column(uid)",auto`
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

//Draw
type Draw struct {
	Id             uint64 `orm:"column(uid)",auto`
	Drawid         int32  `orm:"column(drawId)"`
	Drawnum        string `orm:"column(drawNum)"`
	Drawtime       int32  `orm:"column(drawTime)"`
	Tendrawtime    int32  `orm:"column(tenDrawTime)"`
	Nextbetterdraw int32  `orm:"column(nextBetterDraw)"`
	Drawcount      int32  `orm:"column(drawCount)"`
	Tenrdawcount   int32  `orm:"column(tenDrawCount)"`
}

//MainQuest
type Mainquset struct {
	Id       uint64 `orm:"column(uid)",auto`
	GroupId  int32  `orm:"column(GroupId)"`
	GroupNum int32  `orm:"column(GroupNumber)"`
	Num      int32  `orm:"column(num)"`
}

//人物战斗信息
type PlayerBattleInfo struct {
	RoomType     int32
	RoomKey      string
	BattleAddr   string
	BattleAddrID string
	RoomInfo     string
	BattleState  int32 //BattleState
}

//个人战斗结果
type BattleEndInfo struct {
	RoomId     string
	BattleType int32
	StageId    int32
	Score      int32
	Win        int32
}
