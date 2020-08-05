module Server

go 1.13

require (
	comm v0.0.0-00010101000000-000000000000
	gameproto v0.0.0-00010101000000-000000000000
	github.com/AsynkronIT/protoactor-go v0.0.0-20200317173033-c483abfa40e2
	github.com/astaxie/beego v1.12.2 // indirect
	github.com/go-redis/redis v6.15.8+incompatible // indirect
	github.com/go-redis/redis/v7 v7.4.0
	github.com/gogo/protobuf v1.3.1
	github.com/magicsea/behavior3go v0.0.0-20200622063830-4cf5449990a7
	github.com/magicsea/ganet v0.0.0-20200803062315-0bb3f3f0ce0b
)

replace (
	comm => ../comm
	gameproto => ../gameproto
)
