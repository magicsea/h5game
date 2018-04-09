package game

import (
	"gameproto/msgs"
)

type IPlayerModule interface {
	//初始化
	OnInit()
	//载入数据
	OnLoad()
	//开始
	OnStart()
	//tick
	OnTick()
	//保存数据
	OnSave()
	//销毁
	OnDestory()

	//路由消息
	route(msg *msgs.FrameMsg) bool

	//初始化data
	initData(*Player)
}

type PlayerModuleBase struct {
	player      *Player
	msgHandler  map[uint32]MessageFunc
	isDataDirty bool
}

func (m *PlayerModuleBase) initData(p *Player) {
	m.msgHandler = make(map[uint32]MessageFunc)
	m.player = p
}

//RegistCmd 注册消息
func (m *PlayerModuleBase) RegistCmd(opcode uint32, fun MessageFunc) {
	m.msgHandler[opcode] = fun
}

//设置脏数据,等待异步写
func (m *PlayerModuleBase) SetDataDirty() {
	m.isDataDirty = true
	m.player.SetDataDirty()
}

//接口函数
func (m *PlayerModuleBase) route(msg *msgs.FrameMsg) bool {
	if fun, ok := m.msgHandler[msg.MsgId]; ok {
		fun(msg.RawData)
		return true
	}
	return false
}

func (m *PlayerModuleBase) OnInit()    {}
func (m *PlayerModuleBase) OnStart()   {}
func (m *PlayerModuleBase) OnLoad()    {}
func (m *PlayerModuleBase) OnTick()    {}
func (m *PlayerModuleBase) OnSave()    {}
func (m *PlayerModuleBase) OnDestory() {}
