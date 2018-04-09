package main

import (
	"flag"
	"fmt"
)

var acc = flag.String("u", "magicse_1", "acc default")

func main() {
	flag.Parse()
	fmt.Println("start...", *acc)
	r := NewRobot(*acc, "111")
	r.Start()
	fmt.Println("end")
}
