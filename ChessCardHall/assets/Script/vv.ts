/** 全局工具类 */
type NetCallBackFunc = (msgId:string,msg:any) => void;
export class FakeSocket {
    on(msgId:string,fun:Function){
        vv.wson(msgId,fun)
    }

    emit(msgId:string,msg?:any){
        vv.wssend(msgId,msg)
    }
}
export default class vv {
    /** socket连接 */
    static socket: FakeSocket = new FakeSocket();
    //static socket: any = null;
    static wssocket: WebSocket = null;
    /** 用户数据 */
    static userInfo: any = null;
    /** 聊天数据 */
    static chatInfo: any = [];
    /** 是否有免费大转盘 */
    static isFreeTurntable: boolean = false;
    /** 是否打开过大转盘 */
    static openedTurntable: boolean = false;
    /** 是否刷新离线奖励 */
    static needUpdataOffLineReward: boolean = true;

    /** 当前显示的提示框数量 */
    static showTipState: boolean[] = [false, false, false, false, false, false, false, false];

    /** 预制体是否正在打开中 */
    static prefabOpening: boolean = false;

    /** 清空用户数据 */
    static emptyUseData() {
        this.userInfo = null;
        this.isFreeTurntable = false;
    }

    /** 初始化用户数据 */
    static initUseData() {
        let time: number = 0//Date.parse(vv.userInfo.lastGetFreeTurntable);
        let newTime: Date = new Date();
        newTime.setHours(0);
        newTime.setMinutes(0);
        newTime.setSeconds(0);
        newTime.setMilliseconds(0)

        // if (!vv.userInfo.lastGetFreeTurntable) {
        //     vv.isFreeTurntable = true;
        // }
        // else if (newTime.getTime() !== time) {
        //     vv.isFreeTurntable = true;
        // }
    }

    static GetServerURL() :string {
        return "http://127.0.0.1:9900"
        //return "http://magicsea.top:9900"
    }

    /** 根据经验计算出等级 */
    static expToLevel(exp: number): number {
        let level: number = 1;
        let i = 0;

        while (exp > 0) {
            exp = exp - 10 * i - 10;
            if (exp >= 0) {
                level++;
            }
            else { 
                if (level > 100) level = 100;
                return level;
            }

            i++;
        }

        return level;
    }

    /** 计算出虚拟币中文单位 */
    static virtualCoinToCN(num: number): string {
        if (num < 10000) return String(num)
        else if (num < 100000) return Math.floor(num / 10) / 1000 + "万"
        else if (num < 1000000) return Math.floor(num / 100) / 100 + "万"
        else if (num < 10000000) return Math.floor(num / 1000) / 10 + "万"
        else if (num < 100000000) return Math.floor(num / 10000) + "万"
        else if (num < 1000000000) return Math.floor(num / 100000) / 1000 + "亿"
        else if (num < 10000000000) return Math.floor(num / 1000000) / 100 + "亿"
        else if (num < 100000000000) return Math.floor(num / 10000000) / 10 + "亿"
        else if (num < 1000000000000) return Math.floor(num / 100000000) + "亿"
        else return "9999亿+"
    }

    /** 计算距离现在时间差 */
    static timeDifference(time: Date, nowTime?: Date): string {
        let t = nowTime ? nowTime : new Date();
        let newTime = Math.floor((t.getTime() - time.getTime()) / 1000);

        if (newTime < 60) {
            return newTime + "秒前";
        }
        else if (newTime < 60 * 60) {
            return Math.floor(newTime / 60) + "分钟前";
        }
        else if (newTime < 60 * 60 * 24) {
            return Math.floor(newTime / (60 * 60)) + "小时前";
        }
        else {
            return Math.floor(newTime / (60 * 60 * 24)) + "天前";
        }
    }

    /** 屏幕适配 */
    static screenAdapter() {
        if (cc.sys.os === cc.sys.OS_WINDOWS) return;

        let canvas: cc.Canvas = cc.find("Canvas").getComponent(cc.Canvas);
        let winSize: cc.Size = cc.view.getVisibleSize();
        if (winSize.height / winSize.width >= 960 / 720) {
            canvas.fitWidth = true;
            canvas.fitHeight = false;
        }
        else {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    }

    /** 监听屏幕尺寸变化 */
    static onScreenSizeChange() {
        let bg: cc.Node = cc.find("Canvas/bg");
        if (bg) {
            bg.on('size-changed', (event) => {
                this.screenAdapter();//屏幕适配
            });
        }
    }

    /** 禁止交互操作 */
    static pauseTouch() {
        cc.find("MASK").scale = 1;
    }

    /** 恢复交互操作 */
    static resumeTouch() {
        cc.find("MASK").scale = 0;
    }

    /** 跳转场景 */
    static loadScene(sceneName: string, cb?: Function) {
        let MASK = cc.find("MASK");
        let lab = cc.find("MASK/lab");
        MASK.scale = 1;
        MASK.runAction(cc.sequence(
            cc.fadeTo(0.6, 255),
            cc.callFunc(() => {
                cc.director.loadScene(sceneName, () => {
                    this.showTipState = [false, false, false, false, false, false, false, false];
                    if (cb) cb();
                });

                lab.getComponent(cc.Label).scheduleOnce(() => {
                    lab.active = true;
                }, 0.5);
            })
        ));
    }

    /** 事件监听 */
    static eventOn(event: string, cb: Function, target: object) {
        cc.find("Canvas").on(event, function (event) {
            cb(event);
        }, target);
    }

    /** 事件发射 */
    static eventEmit(event: string, data?: any) {
        cc.find("Canvas").emit(event, data);
        //cc.find("Canvas").emit(event, data,target);
    }

    /** 播放音频 */
    static playAudio(url: string, loop?: boolean) {
        if (!url) {
            cc.log("playAudio err: url is null");
            return;
        }

        if (!loop) loop = false;

        cc.log("play audio  pre：",url)
        let path = "Audio/" + url + ".mp3"
        cc.loader.loadRes(path, cc.AudioClip, (err, audioClip)=> {
            cc.audioEngine.play(audioClip,loop,1)
            });
        cc.log("play audio：",path)
      
        //let audioID = cc.audioEngine.play(cc.url.raw("resources/Audio/" + url + ".mp3"), loop, 1);

        //return audioID;
    }

    /** 提示框 font:显示的文字 color:文字的颜色(默认:120,120,120)  fontSize:文字大小(默认30号) */
    static showTip(font: string, color?: cc.Color, fontSize?: number) {
        if (!font) {
            cc.log("提示文字不能为空");
            return;
        }

        let id = this.showTipState.indexOf(false);
        if (id === -1) return;
        this.showTipState[id] = true;

        cc.loader.loadRes("Prefab/tip", (err, prefab) => {
            if (err) {
                cc.log("加载预制体出错: " + err);
                return;
            }
            let node = cc.instantiate(prefab);
            node.x = cc.winSize.width / 2;
            node.y = cc.winSize.height + node.height / 2;
            node.getChildByName('tip').getComponent(cc.RichText).string = font;
            node.parent = cc.director.getScene();

            node.runAction(cc.sequence(
                cc.moveBy(0.3, 0, -(node.height + 3) * id - node.height - 10).easing(cc.easeOut(0.3)),
                cc.delayTime(0.6),
                cc.callFunc(() => {
                    this.showTipState[id] = false;
                }),
                cc.fadeOut(0.6),
                cc.callFunc(() => {
                    node.destroy();
                })
            ));
        });
    }

    /** 添加按钮点击处理 */
    static btnClick(node: cc.Node, cb?: Function, noScale?: boolean, noPlayAudio?: boolean) {
        node.on('touchend', (event) => {
            if (!noPlayAudio) this.playAudio("click");
            if (cb) cb()
        });

        if (!noScale) {
            node.on('touchstart', (event) => {
                node.scale = 1.05;
            });

            node.on('touchend', (event) => {
                node.scale = 1;

            });

            node.on('touchcancel', (event) => {
                node.scale = 1;
            });
        }
    }

    /** 转换消息成表情 */
    static msgToBeExpression(word: string): string {
        cc.log(word)
        if (word.indexOf("[") > -1) {
            let k = ["[笑]", "[哭]", "[色]", "[汗]", "[怒]", "[晕]", "[哈]", "[冷]"];
            let s = ["[xiao]", "[ku]", "[se]", "[han]", "[nu]", "[yun]", "[ha]", "[leng]"];
            for (let i = 0; i < k.length; i++) {
                while (word.indexOf(k[i]) > -1) {
                    word = word.replace(k[i], "<img src='" + s[i] + "'/>");
                }
            }
        }
        return word;
    }

    /** 打开预制体 url:路径地址,resources\Prefab开始 cb:回调函数 */
    static openPrefab(url: string, cb?: Function): cc.Node {
        if (!url) return;

        if (this.prefabOpening) {
            cc.log("打开预制体出错: 预制体正在打开中");
            return;
        }

        if (cc.find("Canvas/prefabs/" + url)) {
            cc.log("打开预制体出错: 预制体已经打开");
            return;
        }

        this.prefabOpening = true;

        cc.loader.loadRes("Prefab/" + url, (err, prefab) => {
            if (err) return;

            let node: cc.Node = cc.instantiate(prefab);
            node.parent = cc.find("Canvas/prefabs");
            if (cb) cb(node);

            let btnClose: cc.Node = cc.find("btnClose", node);
            if (btnClose) this.btnClick(btnClose, () => { node.destroy() });

            let MASK: cc.Node = node.getChildByName('MASK');
            if (MASK) this.btnClick(MASK, () => { node.destroy() });

            this.prefabOpening = false;
            return node;
        });
    }


    //发送websocket消息
    static wssend(msgId:string,o?:any) {
        var msg = JSON.stringify({Id:msgId,Msg:JSON.stringify(o)})
        if (msgId!="b_move") {
            console.warn("==============send:"+msg)
        }

        this.wssocket.send(msg)
    }

    static mapNetHandle:{[index:string]:Function;}={}
    //网络消息分发
    static wsDistributeNetMessage(raw:string) {
        var obj = JSON.parse(raw)
        var id = obj.Id as string
        var msg = JSON.parse(obj.Msg)
        if (id!="snap") {
            console.warn("=============onmessage id:"+id+"  msg:"+msg)
        }
       
        var element = this.mapNetHandle[id]
        if (element!=null) {
            //console.warn("$$$"+typeof(element)+"   \n"+element)
            element(msg)
        }
        else 
        {
            console.error("================no handle event:"+id)
            for (const key in this.mapNetHandle) {
               console.warn("=>id:"+key+"  fun:"+this.mapNetHandle[key])
            }
        }
    }
    //网络消息事件
    static wson(msgId:string,callback:Function) {
        this.mapNetHandle[msgId]=callback
        //console.warn("=============wson id:"+msgId+"  func:"+typeof(callback))
    }
}