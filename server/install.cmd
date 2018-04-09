set oldpath=%GOPATH%
set GOPATH=%oldpath%;%CD%
go install -v server
set GOPATH=%oldpath%