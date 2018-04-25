package main

import (
	"Server/battle"
	"Server/center"
	"Server/cluster"
	"Server/config"
	"Server/db"
	"Server/game"
	"Server/gate"
	"Server/lobby"
	"Server/login"
	"Server/session"
	"flag"
	"github.com/magicsea/ganet/app"
	"log"
	//gp "github.com/magicsea/ganet/proto"
)

var (
	confPath = flag.String("config", "config.json", "配置文件")
)

func main() {
	flag.Parse()
	conf, err := config.LoadConfig(*confPath)
	if err != nil {
		log.Println("load config err:", err)
		return
	}
	logo := `
	██████╗  █████╗ ███╗   ██╗███████╗████████╗
	██╔════╝ ██╔══██╗████╗  ██║██╔════╝╚══██╔══╝
	██║  ███╗███████║██╔██╗ ██║█████╗     ██║   
	██║   ██║██╔══██║██║╚██╗██║██╔══╝     ██║   
	╚██████╔╝██║  ██║██║ ╚████║███████╗   ██║   
	 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   
												
	`
	log.Println(logo + "ver." + conf.Ver)
	//gp.SetProtoType("pb")
	app.RegisterService(center.Type(), center.Service)
	app.RegisterService(session.Type(), session.Service)
	app.RegisterService(login.Type(), login.Service)
	app.RegisterService(gate.Type(), gate.Service)
	app.RegisterService(game.Type(), game.Service)
	app.RegisterService(lobby.Type(), lobby.Service)
	app.RegisterService(battle.Type(), battle.Service)
	log.Println("================Run================")
	app.Run(&conf.Base, cluster.New(), db.NewRedisMgr()) //db.NewMgr()
	log.Println("================GameOver================")
}
