import vv from "./vv";
import loginMod from "./Module/loginMod";
import { gameproto as loginproto } from "../Libs/gameproto/login";
const { ccclass, property } = cc._decorator;




@ccclass
export default class network extends cc.Component {
    @property(cc.Node) eye: cc.Node = null;//大眼萌
    @property(cc.Node) network: cc.Node = null;//网络连接界面展示
    @property(cc.Node) noNetwork: cc.Node = null;//网络无法连接界面展示
    @property(cc.Node) btnExit: cc.Node = null;//网络无法连接时的退出游戏按钮
    @property(cc.Node) QQL: cc.Node = null;//游戏敲敲乐界面

    private connectionNum: number = 0;//当前尝试连接次数
    //private loginData : any;
    onLoad() {
        this.node.scale = 1;
        this.network.addComponent(connectingAction);//网络连接中动画
    }

    start() {
        cc.game.addPersistRootNode(this.node);//设置为常驻节点,切换场景不会消失
        this.scheduleOnce(() => {

            vv.showTip("开始连接服务器");
            this.QQL.active = false;//关闭小游戏
            this.node.scale = 0;//隐藏网络连接界面

            //if (!vv.userInfo) vv.openPrefab("signIn");//打开登录界面
            //this.connectionNetwork();//建立服务器连接
            //this.loginHttp();
            this.connectionNetworkWs();
        }, 0.5);

        //退出游戏按钮监听
        this.btnExit.once('click', (event) => {
            cc.game.end();//退出游戏
        });
    }


    //建立服务器连接websocket
    connectionNetworkWs() {
        var logindata = loginMod.GetLoginData()
        console.info("###connect to gate:"+logindata.GateAddr)
        var decoder = new TextDecoder('utf-8')
        var socket :WebSocket = new WebSocket("ws://"+logindata.GateAddr);
        socket.binaryType = 'arraybuffer';
        vv.wssocket = socket
        socket.onopen = ()=> {
            vv.showTip("连接成功");
            console.warn("=============connected")
            //发送验证
            vv.wssend("login",{"PlatformUid":logindata.Uid,"Key":logindata.Key})

        }
        socket.onerror = (ev: Event)=> {
            console.warn("=============onerror:",ev)
        }
        socket.onclose = (ev: CloseEvent)=> {
            console.warn("=============onclose:",ev.reason)
            vv.showTip("断开连接");
            this.connectionNum = 0;//重连数重置
            this.node.scale = 1;//打开网络连接界面
            this.QQL.active = true;//打开小游戏

            if (cc.sys.isBrowser) {//游览器的处理
                this.network.active = true;
                this.noNetwork.active = false;
            }
            else {//设备上的处理
                this.noNetwork.active = true;
                this.eye.color = new cc.Color(146, 7, 131);
                this.network.active = false;
            }
        }
        socket.onmessage = (ev: MessageEvent)=> {
            var raw = decoder.decode(ev.data)
            console.warn(`=============onmessage raw:${raw}`)
            vv.wsDistributeNetMessage(raw)
        }

        //验证完成
        vv.wson("login",(msg)=>{
            console.warn("###login result:"+(msg.errCode==undefined))
            let data = {}
            data[0]=(msg.errCode==undefined)
            data[1]={}
            vv.eventEmit('signIn', data);
        })
        vv.wson("logininfo",(msg)=>{
            console.warn("###login info:"+msg.nickname,msg.headId,msg)
            let tmsg = msg as loginproto.LoginInfo
            vv.userInfo = msg
        })
        vv.wson("updateAttr",(msg)=>{
            console.warn("###updateAttr:"+msg.key+"="+msg.val)
            vv.userInfo[msg.key] = msg.val
            vv.eventEmit('updateUserInfo');//更新大厅信息
        })
        //加入战场请求C_RequestBattle
        vv.wson("requestBattle",(msg)=>{
            console.warn("###requestBattle请求完成:"+msg.errCode)
            
            if (msg.errCode!=undefined) {
                vv.showTip(`加入战场失败:code=${msg.errCode}`)
            } else {
                vv.showTip("加入战斗已申请")
            }
        })
        //战斗开始C_StartBattle
        vv.wson("readyBattle",(msg)=>{
            vv.showTip("战场准备就绪!")
            console.warn("###startBattle:"+msg.errCode)
            vv.eventEmit('enterFightScene');
            
        })
        this.connectionNetwork()
    }

    //建立服务器连接 socket.io
    connectionNetwork() {
        //vv.socket = io.connect(this.loginData.gateWsAddr);//建立服务器连接
        /*
        vv.socket = io.connect('ws://127.0.0.1:8080/');//建立服务器连接
        
        vv.socket.on('connect', (msg) => {//连接成功
            vv.showTip("连接成功");
            this.QQL.active = false;//关闭小游戏
            this.node.scale = 0;//隐藏网络连接界面

            if (!vv.userInfo) vv.openPrefab("signIn");//打开登录界面
            if (this.connectionNum === 0) vv.socket.emit('sysOs', { os: cc.sys.os, deviceResolution: cc.view.getVisibleSize() });//向服务器发送系统基础信息
        });

        vv.socket.on('disconnect', (msg) => {//断开连接
            vv.showTip("断开连接");
            this.connectionNum = 0;//重连数重置
            this.node.scale = 1;//打开网络连接界面
            this.QQL.active = true;//打开小游戏

            if (cc.sys.isBrowser) {//游览器的处理
                this.network.active = true;
                this.noNetwork.active = false;
            }
            else {//设备上的处理
                this.noNetwork.active = true;
                this.eye.color = new cc.Color(146, 7, 131);
                this.network.active = false;
            }
        });
        */
        vv.socket.on('reconnecting', (msg) => {//正在重连
            this.connectionNum++;
            vv.showTip("第" + this.connectionNum + "次重连");
            if (this.connectionNum === 1) this.QQL.active = true;//打开小游戏
            if (this.connectionNum === 3) {//重连3次,打开网络无法连接界面展示
                this.network.active = false;
                this.noNetwork.active = true;
            }
        });

        vv.socket.on('notice', (data) => {//通知
            vv.eventEmit('notice', data);
        });

        vv.socket.on('chat', (data) => {//聊天
            vv.eventEmit('chat', data);
        });

        vv.socket.on('tourist', (data) => {//游客登录
            vv.eventEmit('tourist', data);
        });

        vv.socket.on('signIn', (data) => {//账号登录
            vv.eventEmit('signIn', data);
        });

        vv.socket.on('register', (data) => {//账号注册
            vv.eventEmit('register', data);
        });

        vv.socket.on('reviseUserInfo', (data) => {//修改用户信息
            let l = {}
            l[0]=(data.errCode==undefined)
            l[1]=data.msg

            vv.eventEmit('reviseUserInfo', l);
        });

        vv.socket.on('turntable', (data) => {//大转盘信息
            vv.eventEmit('turntable', data);
        });

        vv.socket.on('loadTurntableInfo', (data) => {//读取大转盘中奖记录
            vv.eventEmit('loadTurntableInfo', data);
        });

        vv.socket.on('getRankList', (data) => {//获取排行榜列表
            vv.eventEmit('getRankList', data);
        });

        vv.socket.on('getPlayerList', (data) => {//获取玩游戏人数和列表
            vv.eventEmit('getPlayerList', data);
        });

        vv.socket.on('updataPlayerList', (data) => {//刷新玩游戏人数和列表
            vv.eventEmit('updataPlayerList', data);
        });
    }
}

//网络连接中动画
class connectingAction extends cc.Component {
    @property(cc.Node) eye: cc.Node = null;

    onEnable() {
        this.unscheduleAllCallbacks();
        //文字动画
        for (let i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].scale = 1;
            this.scheduleOnce(() => {
                this.node.children[i].stopAllActions();
                this.node.children[i].runAction(
                    cc.repeatForever(
                        cc.sequence(
                            cc.scaleTo(0.3, 1.2, 1.2),
                            cc.scaleTo(0.3, 1, 1),
                            cc.delayTime(0.5),
                        )
                    )
                );
            }, 0.2 * i);
        }

        //眼睛动画
        if (!this.eye) this.eye = this.node.parent.getChildByName('eye');
        this.eye.stopAllActions();
        this.eye.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.tintTo(2, 246, 7, 131),
                    cc.tintTo(2, 246, 7, 31),
                    cc.tintTo(2, 146, 7, 31),
                    cc.tintTo(2, 146, 7, 131)
                )
            )
        );
    }
}