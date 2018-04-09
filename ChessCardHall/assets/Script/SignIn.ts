import vv from "./vv";
import loginMod from "./Module/loginMod";
import { gameproto as loginproto } from "../Libs/gameproto/login";
import { gameproto as codeproto } from "../Libs/gameproto/gamecode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Signln extends cc.Component {
    @property(cc.Node) btnTouristSignln: cc.Node = null;//游客登录按钮
    @property(cc.Node) btnAccountSignln: cc.Node = null;//账号登录按钮
    @property(cc.Node) btnRegister: cc.Node = null;//打开注册界面按钮
    @property(cc.EditBox) editBoxAccount: cc.EditBox = null;//账号输入框
    @property(cc.EditBox) editBoxPassword: cc.EditBox = null;//密码输入框
    @property([cc.Node]) viewAnimations: cc.Node[] = [];//界面动画节点集合

    onLoad() {
        //读取登录账号,并登记到输入框
        var userData = JSON.parse(cc.sys.localStorage.getItem('userData'));
        if (userData&&userData.userName) {
            this.editBoxAccount.string = ""+userData.userName;
            this.editBoxPassword.string =""+userData.password;
            this.btnTouristSignln.active = false;
            this.btnAccountSignln.active = true;
            this.viewAnimations[3] = this.btnAccountSignln;
        }

        //界面渐入动画
        this.node.opacity = 100;
        this.node.runAction(cc.fadeTo(0.2, 255));

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
            }, i * 0.04 + 0.1);
        }

        //屏幕适配
        cc.find("M", this.node).setContentSize(cc.winSize);
    }

    start() {
        //游客登录和账号登录按钮的切换处理
        this.signlnBtnSwitch();

        //游客登录
        vv.btnClick(this.btnTouristSignln, () => {

            vv.showTip("暂时不支持游客登录，请先注册")
            return
            vv.pauseTouch();//禁止交互操作
            var userDataTourist = cc.sys.localStorage.getItem('userDataTourist');
            if (userDataTourist) {
                vv.socket.emit('signIn', userDataTourist);
                this.editBoxAccount.string = JSON.parse(userDataTourist).userName;
                this.editBoxPassword.string = JSON.parse(userDataTourist).password;
            }
            else {
                vv.socket.emit('tourist');
            }
        });

        vv.eventOn('tourist', (data) => {
            cc.log("游客验证:" + JSON.stringify(data));
            if (data[0]) {
                vv.showTip("游客登录成功,默认密码:1234");
                vv.userInfo = data[1];
                this.editBoxAccount.string = data[1].userName;
                this.editBoxPassword.string = data[1].password;

                this.scheduleOnce(() => {
                    vv.initUseData();
                    vv.loadScene('hall');
                }, 0.5);

                //保存游客账号
                cc.sys.localStorage.setItem('userDataTourist', JSON.stringify({ userName: vv.userInfo.userName, password: vv.userInfo.password }));
                //保存登录账号
                cc.sys.localStorage.setItem('userData', JSON.stringify({ userName: vv.userInfo.userName, password: vv.userInfo.password }));
            }
            else {
                vv.showTip(data[1]);
                vv.resumeTouch();//恢复交互操作
            }
        }, this);

        //账号登录
        vv.btnClick(this.btnAccountSignln, () => {
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

            // let user = {
            //     userName: userName,
            //     password: password
            // };
            // vv.socket.emit('signIn', JSON.stringify(user));
            this.loginHttp(userName,password)
        });

        vv.eventOn('signIn', (data) => {
            cc.log("登录验证:" + JSON.stringify(data));
            if (data[0]) {
                vv.showTip("登录成功");
                //vv.userInfo = data[1];
                this.scheduleOnce(() => {
                    vv.initUseData();
                    vv.loadScene('hall');
                }, 0.5);

                //保存登录账号
                //cc.sys.localStorage.setItem('userData', JSON.stringify({ userName: vv.userInfo.userName, password: vv.userInfo.password }));
            }
            else {
                vv.showTip(data[1]);
                vv.resumeTouch();//恢复交互操作
            }
        }, this);

        //创建账号
        vv.btnClick(this.btnRegister, () => {
            vv.openPrefab("register");//打开创建账号界面
        });
    }

    /**游客登录和账号登录按钮的切换处理 */
    signlnBtnSwitch() {
        let update = () => {
            //如果输入框全部为空,则显示游客登录按钮
            if (this.editBoxAccount.string.length === 0 && this.editBoxPassword.string.length === 0) {
                this.btnTouristSignln.active = true;
                this.btnAccountSignln.active = false;
            }
            else {
                this.btnTouristSignln.active = false;
                this.btnAccountSignln.active = true;
            }
        }

        this.editBoxAccount.node.on('text-changed', (event) => {//输入框文字变化监听
            update();
        });
        this.editBoxPassword.node.on('text-changed', (event) => {//输入框失去焦点监听
            update();
        });
        this.editBoxAccount.node.on('editing-did-ended', (event) => {//输入框文字变化监听
            update();
        });
        this.editBoxPassword.node.on('editing-did-ended', (event) => {//输入框失去焦点监听
            update();
        });
    }


    //加载网络
    loadNetwork() {
        vv.openPrefab("network", (node: cc.Node) => {
            node.parent = cc.director.getScene();
        });//打开网络连接界面
    }
    //login
    loginHttp(acc,pwd :string) {
            let path :string = vv.GetServerURL()
            
            var url = `${path}/login?a=${acc}&p=${pwd}`
            console.log(`=============login http...${url}`);
            var self = this;
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = ()=>{
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var response = xhr.responseText;
                    console.log(`=============login result:${response}`);
                    
                    var d = JSON.parse(response);
                    var loginData = d as loginproto.UserLoginResult
                    //var s :gameproto.UserLoginResult = loginData ;
                    console.log(`=============login rrrrrr:${loginData.gateTcpAddr} ${loginData.gateWsAddr}  ${loginData.result}`);

                    if (loginData.result!=undefined&&loginData.result!=0) {
                        vv.showTip(`登录失败 code=${loginData.result}`);
                        vv.resumeTouch();//恢复交互操作
                        return 
                    }
                    cc.sys.localStorage.setItem('userData', JSON.stringify({ userName: acc, password: pwd}));
                    loginMod.SetLoginData(loginData.gateWsAddr as string,loginData.uid as number,loginData.key as string)
                    //this.connectionNetworkWs();
                    this.loadNetwork()
                }
            };3
            xhr.open("GET", url, true);
            xhr.send();
    }
}
