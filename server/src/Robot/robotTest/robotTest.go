package main

import (
	"flag"
	"fmt"
	gp "github.com/magicsea/ganet/proto"
)

var acc = flag.String("u", "magicse_1", "account")
var host = flag.String("host", "http://127.0.0.1:9900", "login url")
var nettype = flag.String("net", "ws", "net type:tcp or ws")
var prototype = flag.String("proto", "json", "proto type:json or pb")

func main() {
	flag.Parse()
	fmt.Println("start...", *acc, *host, *nettype, *prototype)
	gp.SetProtoType(*prototype)
	r := NewRobot(*acc, "111")
	r.Start()
	fmt.Println("end")
}
