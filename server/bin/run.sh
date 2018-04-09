#!/bin/bash
cp -rf Server TcgServer

proc_name="TcgServer"
serverPid="Server.Pid"



start()
{
	alreadyStart=`ps -ef|grep ${proc_name} | grep -v "grep"|awk '{print $2}'`
	if [ "$alreadyStart" != "" ]; then
		echo "Server is already start  "
	else
		nohup ./TcgServer > TcgServer.log &
		sleep 3
		proc_id=`ps -ef|grep ${proc_name} | grep -v "grep"|awk '{print $2}'`
		echo $proc_id > $serverPid
		echo ${proc_name}" pid:"$proc_id
	fi
}

stop()
{
	pid=$(cat $serverPid)
	echo $pid
	if [ "$pid" == "" ]; then
		echo "=== $proc_name process not exists or stop success"
	else
		kill $pid
		echo "=== $proc_name process pid is:$pid"
		echo "=== begin kill $proc_name process, pid is:$pid"
		kill -9 $pid
	fi
	echo "" > $serverPid
}

keepAlive()
{
	pid=$(cat $serverPid)
	echo $pid
	while true; do
		sleep 30
		if [ "$pid" == "" ]; then
			start
		fi
	done
}

if [ "$1" == "start" ]; then
	start
elif [ "$1" == "stop" ]; then
	stop
elif [ "$1" == "restart" ]; then
	stop
	sleep 3
	start
else
	echo "Error Command!!!   parameter is start or stop or restart"
fi
