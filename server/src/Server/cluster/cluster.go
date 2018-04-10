package cluster

import (
	//"fmt"
	"github.com/magicsea/ganet/config"
	"sync"

	"github.com/AsynkronIT/protoactor-go/actor"
	"github.com/magicsea/ganet/log"
)

//全局
var (
	remoteClients map[string]*RemoteClient //配置点
	mutex         sync.Mutex
)

type Clustermgr struct {
}

func New() *Clustermgr {
	return new(Clustermgr)
}
func (mgr *Clustermgr) OnInit() bool {
	//remoteClients = make(map[string]*RemoteClient)

	// if config.GetGlobleConfig().RemoteAddrs != nil {
	// 	fmt.Println("remote:", config.GetGlobleConfig().RemoteAddrs)
	// 	for serviceName, addr := range config.GetGlobleConfig().RemoteAddrs {
	// 		createClient(addr, serviceName)
	// 	}
	// }
	return true
}
func (mgr *Clustermgr) Run() {

}

func (mgr *Clustermgr) OnDestroy() {
}

func GetServicePID(serviceName string) *RemoteClient {
	//todo:unsafe 频繁请求,可能有竞态，正式环境静态点要标明remote
	//if client := remoteClients[serviceName]; client != nil {
	//	return client
	//} else {
	addr := config.GetServiceAddress(serviceName)
	return createClient(addr, serviceName)
	//}

}

func createClient(addr string, serviceName string) *RemoteClient {
	//mutex.Lock()
	//defer mutex.Unlock()
	//log.Info("createClient:%v,%v", serviceName, addr)
	r := &RemoteClient{}
	if addr != "" {
		r.pid = actor.NewPID(addr, serviceName)
	} else {
		r.pid = actor.NewLocalPID(serviceName)
	}
	//remoteClients[serviceName] = r
	return r
}

func DisconnectService(serviceName string) {
	mutex.Lock()
	defer mutex.Unlock()
	log.Info("DisconnectService:%v", serviceName)
	if client := remoteClients[serviceName]; client != nil {
		delete(remoteClients, serviceName)
	}
}
