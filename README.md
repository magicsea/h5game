# h5game

io类型h5游戏，客户端使用ts版cocos creator。服务器使用golang actor分布式框架,可伸缩部署。
[demo试玩地址](http://magicsea.top:82/web-mobile/)

## 客户端依赖

- cocos creator 2.4.0

## 客户端已知问题：

- 升级引擎后一些输入框默认显示有问题，需要删了重新摆

- toggle的改动，导致头像不能显示

## 服务器源码依赖

```
已使用go mod管理包。
golang版本1.13。
拉去依赖步骤：
1.进入server/src/Server目录
2.执行ini_mod.bat 或者 go mod tidy
```

## 服务器运行

- 安装数据库redis

- 进入server目录，执行build.bat编译

- 配置server/bin/config.json是数据库地址、服务器集群的配置地址
  
  ```
  "redis":{
        "addr":"127.0.0.1:6379",//redis地址
        "password":"1111",//redis密码,未设密码可不填
        "poolsize":10,
        "dbs":[0,1,2,3,4]
    },
  "proto":"json",//消息参数协议打包方式,支持protobuf,json
  ```

- 启动
  
  ```
  windows ：
  方法1：直接运行bin/server.exe 
  方法2：执行 StartSingleServer.bat(单进程方式)
  方法3：执行 StartMultiServer.bat(多进程方式)
      
  linux ：
  执行./run.sh start
  ```
  
  ## TODO:

- [x] 登录、聊天、个人信息修改、基本战斗

- [x] behavoior接入

- [x] tcp,websocket协议兼容。pb,json可选。

- [ ] 移动降低发包，客户端平滑

## QQ群：285728047
