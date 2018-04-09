import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Signln extends cc.Component {
    @property(cc.Node) btnRegister: cc.Node = null;//立即注册按钮
    @property(cc.EditBox) editBoxAccount: cc.EditBox = null;//账号输入框
    @property(cc.EditBox) editBoxPassword: cc.EditBox = null;//密码输入框
    @property([cc.Node]) viewAnimations: cc.Node[] = [];//界面动画节点集合

    onLoad() {
        //界面内元素初始动画
        let l = this.viewAnimations.length;
        for (let i = 0; i < l; i++) {
            this.viewAnimations[i].active = false;
            this.viewAnimations[i].y -= 30;
            this.viewAnimations[i].opacity = 150;

            this.scheduleOnce(() => {
                this.viewAnimations[i].active = true;
                this.viewAnimations[i].runAction(
                    cc.spawn(
                        cc.fadeTo(0.1, 255),
                        cc.moveBy(0.1, 0, 30),
                    )
                );
            }, i * 0.04);
        }
    }

    start() {
        //账号注册监听
        vv.btnClick(this.btnRegister, () => {
            let userName = this.editBoxAccount.string;
            if (!userName || userName.trim() == "") {
                vv.showTip("账号不能为空");
                return;
            }
            let password = this.editBoxPassword.string;
            if (!password || password.trim() == "") {
                vv.showTip("密码不能为空");
                return;
            }

            vv.pauseTouch();//禁止交互操作

            //vv.socket.emit('register', JSON.stringify({ userName: userName, password: password }));//向服务器发送注册请求
            this.registHttp(userName,password)
        });

        //监听服务器返回注册请求信息
        vv.eventOn('register', (data) => {
            if (data[0]) {
                vv.showTip("注册成功");
                vv.resumeTouch();//恢复交互操作

                //把注册账号登记到登录界面的输入框
                let SignIn = this.node.parent.getChildByName('signIn').getComponent('SignIn');
                SignIn.editBoxAccount.string = this.editBoxAccount.string;
                SignIn.editBoxPassword.string = this.editBoxPassword.string;
                SignIn.btnTouristSignln.active = false;
                SignIn.btnAccountSignln.active = true;

                this.node.destroy();
            }
            else {
                vv.showTip(data[1]);
                vv.resumeTouch();//恢复交互操作
            }
        }, this);
    }

    //regist
    registHttp(acc,pwd :string) {
            console.log(`=============regist http...${acc}...${pwd}`);
            let path :string = vv.GetServerURL()
            var url = `${path}/regist?a=${acc}&p=${pwd}`
            var self = this;
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = ()=>{
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var response = xhr.responseText;
                    console.log(`=============regist result:${response}`);
                    if(response=="success") {
                        vv.eventEmit("register",[true])
                    } else {
                        vv.eventEmit("register",[false,response])
                    }
                } else {
                    vv.eventEmit("register",[false,`网络异常:status=${xhr.status}`])
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
    }
}