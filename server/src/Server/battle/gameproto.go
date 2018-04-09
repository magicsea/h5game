package battle

import (
	"gameproto/msgs"
)

//标志位
const (
	NetPackFLag_Encode   byte = 1
	NetPackFLag_Compress byte = 2
)

type NetPack struct {
	channel msgs.ChannelType //主消息通道
	msgID   byte             //消息id
	cno     byte             //客户端请求号
	flag    byte             //压缩，加密等表示

	rawData []byte //数据段
}

func (pk *NetPack) Read(p []byte) bool {
	if len(p) < 3 {
		return false
	}
	pk.channel = msgs.GameServer
	pk.msgID = p[0]
	pk.cno = p[1]
	pk.flag = p[2]
	pk.rawData = p[3:]
	return true
}

func (pk *NetPack) Write() []byte {
	data := []byte{pk.msgID, pk.cno, pk.flag}
	data = append(data, pk.rawData...)
	return data
}

//加密
func (pk *NetPack) IsEncode() bool {
	return (pk.flag & NetPackFLag_Encode) > 0
}

//加密
func (pk *NetPack) IsCompress() bool {
	return (pk.flag & NetPackFLag_Compress) > 0
}
