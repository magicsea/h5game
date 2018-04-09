package game

import (
	_ "fmt"
	"gameproto"
	"gameproto/msgs"
)

type PlayerShopModule struct {
	PlayerModuleBase
	testv int
}

//=================接口实现======================
func (m *PlayerShopModule) OnInit() {
	//m.RegistCmd(uint32(msgs.C2S_ShopBuy), m.ShopBuy)
	//m.RegistCmd(uint32(msgs.C2S_ShopSell), m.ShopSell)
	m.player.RegistCmd(gameproto.C2S_Test, m.ShopBuy)
}

func (m *PlayerShopModule) OnStart() {}
func (m *PlayerShopModule) OnLoad()  {}
func (m *PlayerShopModule) OnTick()  {}
func (m *PlayerShopModule) OnSave() {
	if !m.isDataDirty {
		return
	}
	//save action here...

}
func (m *PlayerShopModule) OnDestory() {}

//===============feature functions====================
func (m *PlayerShopModule) ShopBuy(data []byte) msgs.GAErrorCode {
	//var msg gameproto.S2C_SHOP_CARD_INFO
	//proto.Unmarshal(data, &msg)
	//m.SendClientMsg(msgs.S2C_ShopBuy, &msgs.S2C_ShopBuyMsg{ItemId: msg.ItemId, Result: msgs.OK})
	m.player.SendGameMsg(gameproto.S2C_Test, &gameproto.S2C_TestMsg{Id: 10})
	//m.testv++
	//log.Println("test buy something:", msg, m.testv)
	//if m.testv == 10 {
	//	m.player.ActiveLive()
	//}
	return msgs.OK
}

func (m *PlayerShopModule) ShopSell(data []byte) {

}

//发送shop消息到客户端
//func (m *PlayerShopModule) SendClientMsg(msgId msgs.ShopMsgType, msg proto.Message) {
//	m.player.SendClientMsg(msgs.Shop, byte(msgId), msg)
//}
