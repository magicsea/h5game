for %%i in (*.proto) do (
.\tools\protoc -I=. -I=.\.. -I=.\..\..\src --gogoslick_out=plugins=grpc:.\..\..\src\gameproto\ %%i
)