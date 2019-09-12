protoc -I=. -I=.\..\..\..\src -I=.\..\..\..\src\vendor  -I=%GOPATH%\src -I=..\.. --gogoslick_out=plugins=grpc:.\..\..\..\src\gameproto\msgs\ *.proto 
