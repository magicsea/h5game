package cluster

import (
	_ "encoding/json"
	"gameproto/msgs"
	"github.com/magicsea/ganet/log"
)

//注册到center
//func RegServerToCenter(s *service.ServiceData, values []*msgs.ServiceValue) bool {
//	log.Info("%v reg to center...", s.Name)
//
//	msg := msgs.AddService{
//		ServiceName: s.Name,
//		ServiceType: s.TypeName,
//		Pid:         s.GetPID(),
//		Values:      values}
//	pid := GetServicePID("center")
//	_, err := pid.Ask(&msg)
//	if err != nil {
//		log.Error("%v reg to center fail:%v  pid=%v", s.Name, err, pid.pid.String())
//		// if err.Error() == "future: timeout" {
//		// 	DisconnectService("center")
//		// }
//		//重连
//		return false
//	}
//	log.Info("%v reg to center OK!", s.Name)
//	return true
//}

// func RegServerWork(s *service.ServiceData, values []*msgs.ServiceValue) {
// 	go func() {
// 		for {
// 			if RegServerToCenter(s, values) {
// 				break
// 			}
// 		}
// 	}()

// }

func UpdateServiceLoad(serviceName string, load uint32, state msgs.ServiceState) {
	log.Debug("%v UpdateServiceLoad %v-%v", serviceName, load, state)

	msg := msgs.UploadService{
		ServiceName: serviceName,
		Load:        load,
		State:       state}
	GetServicePID("center").Tell(&msg)
}
