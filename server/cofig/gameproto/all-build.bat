echo "build msgs..."
pushd msgs
call build.bat
popd

echo "build cs proto..."
call buildgo.bat

echo "build ts proto..."
call buildts.bat