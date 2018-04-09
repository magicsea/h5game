package comm

import (
	"reflect"
)

//事件系统
type proxyFunc func([]interface{})
type ProxyManager struct {
	__proxyListenerDict map[string][]proxyFunc
}

func NewProxyManager() *ProxyManager {
	var p = new(ProxyManager)
	p.__proxyListenerDict = make(map[string][]proxyFunc)
	return p
}

func (px *ProxyManager) AddListener(eventId string, function proxyFunc) {
	//log.Info("AddListener %v %v", eventId, reflect.ValueOf(function))
	if evs, o := px.__proxyListenerDict[eventId]; o {
		px.__proxyListenerDict[eventId] = append(evs, function)
	} else {
		px.__proxyListenerDict[eventId] = []proxyFunc{function}
	}
}

func (px *ProxyManager) RemoveListener(eventId string, function proxyFunc) bool {
	if evs, b := px.__proxyListenerDict[eventId]; b {
		for i := 0; i < len(evs); i++ {
			o := evs[i]
			if reflect.ValueOf(o) == reflect.ValueOf(function) {
				px.__proxyListenerDict[eventId] = append(evs[:i], evs[i+1:]...)
				//fmt.Println("len=", len(px.__proxyListenerDict[eventId]))
				return true
			}
		}
	}
	return false
}
func (px *ProxyManager) Notify(eventId string, args ...interface{}) {
	if evs, b := px.__proxyListenerDict[eventId]; b {
		for _, f := range evs {
			f(args)
		}
	}
}
