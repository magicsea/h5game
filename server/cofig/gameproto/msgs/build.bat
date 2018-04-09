protoc -I=. -I=.\..\..\..\src  -I=%GOPATH%\src -I=..\.. --gogoslick_out=plugins=grpc:.\..\..\..\src\gameproto\msgs\ *.proto 
