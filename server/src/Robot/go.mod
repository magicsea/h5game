module robotTest

go 1.13

require (
	gameproto v0.0.0-00010101000000-000000000000
	github.com/gogo/protobuf v1.3.1
	github.com/gorilla/websocket v1.4.2 // indirect
	github.com/magicsea/ganet v0.0.0-20200721080758-d33e58ea37d8
)

replace (
	comm => ../comm
	gameproto => ../gameproto
)
