package gate

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/gogo/protobuf/proto"
	//"github.com/magicsea/ganet/config"
	//"github.com/magicsea/ganet/gateframework"
	"github.com/magicsea/ganet/log"
	"reflect"
	"strings"
)

//标志位
const (
	NetPackFLag_Encode   byte = 1
	NetPackFLag_Compress byte = 2
)

//消息主类型
//用处区分系统协议和路由规则
type ChannelType int32

const (
	ChannelNone      ChannelType = 0
	ChannelHeartbeat             = 1 //心跳包
	ChannelLogin                 = 2 //登录包

	ChannelGame   = 100 //发到gameserver的包
	ChannelBattle = 200 //发到battle的包
)

type NetPack interface {
	MarshalObj(obj interface{}) ([]byte, error)
	UnmarshalObj(data []byte, obj interface{}) error
	//解包.返回id,rawdata,error
	Unmarshal(data []byte) (interface{}, []byte, error)
	//打包.
	Marshal(msgID interface{}, rawmsg []byte) ([]byte, error)

	GetChannelType(msgID interface{}) ChannelType
}

type NetPackBytes struct {
	//channel msgs.ChannelType //主消息通道
	//msgID   byte             //消息id
	//cno     byte             //客户端请求号
	//flag    byte             //压缩，加密等表示

	//rawData []byte //数据段
}

func (p *NetPackBytes) Unmarshal(data []byte) (interface{}, []byte, error) {
	if len(data) < 3 {
		return nil, nil, errors.New("invalid  data:" + string(data))
	}

	//pk.channel = msgs.GameServer
	//pk.msgID = p[0]
	//pk.cno = p[1]
	//pk.flag = p[2]
	//pk.rawData = p[3:]
	return data[0], data[3:], nil
}
func (p *NetPackBytes) MarshalObj(obj interface{}) ([]byte, error) {
	pbobj, b := obj.(proto.Message)
	if !b {
		return nil, errors.New(fmt.Sprintf("UnmarshalObj not proto type:%v", reflect.TypeOf(obj)))
	}
	return proto.Marshal(pbobj)
}

func (p *NetPackBytes) UnmarshalObj(data []byte, obj interface{}) error {
	pbobj, b := obj.(proto.Message)
	if !b {
		return errors.New(fmt.Sprintf("UnmarshalObj not proto type:%v", reflect.TypeOf(obj)))
	}
	return proto.Unmarshal(data, pbobj)
}
func (p *NetPackBytes) GetChannelType(msgID interface{}) ChannelType {
	var iid = int32(msgID.(byte))

	switch iid {
	case 0:
		return ChannelLogin
	case 1:
		return ChannelHeartbeat
	}

	if iid > 50 {
		return ChannelBattle
	}
	return ChannelGame
}

func (pk *NetPackBytes) Marshal(msgID interface{}, rawmsg []byte) ([]byte, error) {
	data := []byte{msgID.(byte), 0, 0}
	data = append(data, rawmsg...)
	return data, nil
}

//加密
//func (pk *NetPackBytes) IsEncode() bool {
//	return (pk.flag & NetPackFLag_Encode) > 0
//}

//加密
//func (pk *NetPackBytes) IsCompress() bool {
//	return (pk.flag & NetPackFLag_Compress) > 0
//}

//===========================json==========================

type JsData struct {
	Id  string `json:Id`
	Msg string `json:Msg`
}
type NetPackJson struct {
	//channel msgs.ChannelType //主消息通道
	//msgID   string             //消息id
}

//(data)id,obj,error
func (p *NetPackJson) Unmarshal(data []byte) (interface{}, []byte, error) {
	//log.Info("Unmarshal raw:%s",string(data))

	//var m map[string]json.RawMessage
	jsdata := JsData{}
	err := json.Unmarshal(data, &jsdata)
	if err != nil {
		return nil, nil, err
	}
	return jsdata.Id, []byte(jsdata.Msg), nil
	//if len(m) != 2 ||m[JsonIdName]==nil|| m[JsonMsgName]==nil{
	//	return nil,nil, errors.New("invalid json data:"+string(data))
	//}

	//return string(m[JsonIdName]),m[JsonMsgName],nil
}
func (p *NetPackJson) UnmarshalObj(data []byte, obj interface{}) error {

	return json.Unmarshal(data, obj)
}

func (p *NetPackJson) MarshalObj(obj interface{}) ([]byte, error) {
	return json.Marshal(obj)
}

func (p *NetPackJson) Marshal(msgID interface{}, rawmsg []byte) ([]byte, error) {
	var jd = JsData{Id: msgID.(string), Msg: string(rawmsg)}
	//m := map[string]interface{}{JsonIdName: msgID,JsonMsgName:rawmsg}
	data, err := json.Marshal(jd)
	return data, err
}

func (p *NetPackJson) GetChannelType(msgID interface{}) ChannelType {
	//c2s_xxx:gameserver
	//c2b_xxx:battleserver
	var sid = msgID.(string)

	switch sid {
	case "login":
		return ChannelLogin
	case "heartbeat":
		return ChannelHeartbeat
	}

	ids := strings.Split(sid, "_")
	if len(ids) < 2 {
		log.Error("unknow msgid:%s", sid)
		return ChannelNone
	}
	prefix := ids[0]
	if prefix == "b" {
		return ChannelBattle
	}
	return ChannelGame
}

//====================包类型选择==========================
var netPackBytes NetPackBytes
var netPackJson NetPackJson

// func GetNetPack(t gateframework.NetType) NetPack {
// 	if t == gateframework.TCP {
// 		return &netPackBytes
// 	} else {
// 		return &netPackJson
// 	}
// }

func GetNetPackByConf() NetPack {
	return &netPackJson
	// if config.IsJsonProto() {
	// 	return &netPackJson

	// }
	// return &netPackBytes
}
