package lobby_test

import (
	"fmt"

	"github.com/AsynkronIT/protoactor-go/actor"

	"testing"
	"time"
)

func TestGoFunc(t *testing.T) {
	GoFunc(nil, "hello", 3, func(o interface{}, err error) {
		fmt.Println("get :", o, err)
	})
}

func GoFunc(pid *actor.PID, message interface{}, times int32, callback func(interface{}, error)) {
	go func() {
		o, err := pid.RequestFuture(message, time.Second).Result()
		callback(o, err)
	}()
}
