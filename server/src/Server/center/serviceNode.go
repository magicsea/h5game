package center

import (
	"gameproto/msgs"

	"github.com/AsynkronIT/protoactor-go/actor"
)

//单个服务
type ServiceNode struct {
	pid         *actor.PID
	serviceName string
	serviceType string
	load        uint32 //负载
	tmpload     uint32 //临时负载(本地增加，防止同时大量请求导致都在一个服的问题)
	state       msgs.ServiceState
	//data        map[string]interface{}
	values []*msgs.ServiceValue //自定义属性
}

//更新服务
func (node *ServiceNode) UpdateService(up msgs.UploadService) {
	node.load = up.Load
	node.state = up.State
	node.tmpload = 0
}
func (node *ServiceNode) GetServiceLoad() uint32 {
	return node.load + node.tmpload
}

//-----------------------------------------------------------------------------------
//一组类型服务
type ServiceGroup struct {
	services map[string]*ServiceNode
}

//获取最优服务
func (sg *ServiceGroup) GetBestService() *ServiceNode {
	var best *ServiceNode
	for _, v := range sg.services {
		if best == nil || v.GetServiceLoad() < best.GetServiceLoad() {
			best = v
		}
	}
	return best
}

//添加服务
func (sg *ServiceGroup) AddService(node *ServiceNode) {
	sg.services[node.serviceName] = node
}

//删除服务
func (sg *ServiceGroup) RemoveService(serviceName string) {
	delete(sg.services, serviceName)
}
