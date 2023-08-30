set GOPROXY=https://goproxy.cn,direct
pushd src
pushd Server
go build -v -o ../../bin Server/server
popd
popd