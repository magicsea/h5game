package cluster

import (
	"log"
	"time"
	//"gameproto/msgs"
	//"github.com/magicsea/ganet/app"

	"github.com/AsynkronIT/protoactor-go/actor"
	//"github.com/AsynkronIT/protoactor-go/remote"
	"sync"
)

type RemoteClient struct {
	pid   *actor.PID
	usage string
	mutex sync.Mutex
}

//通知一条消息，立刻返回
func (client *RemoteClient) Tell(args interface{}) {
	client.pid.Tell(args)
}

//通知一条消息，阻塞等待结果
func (client *RemoteClient) Ask(args interface{}) (interface{}, error) {

	result, err := client.pid.RequestFuture(args, 3*time.Second).Result()
	if err != nil {
		log.Println("rpc ask fail:", err, " message:", args, " to ", client.usage)
	}
	return result, err
}

//通知一条信息，立刻返回，结果会放回recv通道
func (client *RemoteClient) AskCB(args interface{}, respTo *actor.PID) {
	client.pid.Request(args, respTo)
}

func (client *RemoteClient) GetActorPID() *actor.PID {
	return client.pid
}
