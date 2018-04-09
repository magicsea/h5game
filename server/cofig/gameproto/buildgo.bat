protoc -I=. -I=.\.. -I=%GOPATH%\src -I=.\..\..\src --gogoslick_out=plugins=grpc:.\..\..\src\gameproto\ *.proto 
