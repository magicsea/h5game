#npm install -g protobufjs
#call pbjs -t static-module -o %tpath%/proto.js login.proto
#call pbts -m -o %tpath%/proto.d.ts %tpath%/proto.js

set tpath=%CD%/../../../ChessCardHall/assets/Libs/gameproto
for /f "delims=" %%i in ('dir /b proto "*.proto"') do (
    call pbjs -t static-module -o ./temp/%%~ni.js %%~ni.proto
    call pbts -m -o %tpath%/%%~ni.d.ts ./temp/%%~ni.js
)
@IF %ERRORLEVEL% NEQ 0 pause