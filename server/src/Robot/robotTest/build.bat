set oldpath=%GOPATH%
set GOPATH=%oldpath%;%CD%\..\..\..
go build -v
set GOPATH=%oldpath%