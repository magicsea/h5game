set oldpath=%GOPATH%
set GOPATH=%oldpath%;%CD%
go build -v server
set GOPATH=%oldpath%