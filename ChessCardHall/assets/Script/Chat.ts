import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Turntable extends cc.Component {
    @property(cc.RichText) chatLab: cc.RichText = null;//文字
    @property(cc.Node) chatView: cc.Node = null;//发送聊天界面
    @property(cc.Node) content: cc.Node = null;//聊天信息容器
    @property(cc.Node) btnArrow: cc.Node = null;//聊天信息箭头

    @property(cc.EditBox) chatEditBox: cc.EditBox = null;//输入框
    @property(cc.Node) btnSend: cc.Node = null;//发送按钮
    @property(cc.Node) btnExpression: cc.Node = null;//打开表情按钮
    @property(cc.Node) bgExpression: cc.Node = null;//表情界面
    @property([cc.Node]) expressions: cc.Node[] = [];//表情合集

    private interval: number = 0;//发送消息间隔

    onLoad() {
        this.node.parent = cc.find("Canvas/buttom");
        this.node.y = -100;

        //调整场景时 显示聊天记录
        let l = vv.chatInfo.length;
        if (l > 0) {
            this.interval = l * 0.2;
            for (let i = 0; i < l; i++) {
                this.scheduleOnce(() => {
                    this.interval -= 0.2;
                    let node: cc.Node = null;
                    node = cc.instantiate(this.chatLab.node);
                    node.parent = this.content;
                    node.getComponent(cc.RichText).string = vv.msgToBeExpression(vv.chatInfo[i].data);
                    node.active = true;
                }, 0.1 * i);
            }
        }

        //离线奖励信息显示处理
        if (vv.needUpdataOffLineReward) {
            vv.needUpdataOffLineReward = false;
            //this.updataOffLineReward();
        }
    }

    //离线奖励信息显示处理
    updataOffLineReward() {
        let lab = "<color=#99CC2D>您已离线1小时1分<img src='[gold]'/>+[999]<img src='[diam]'/>+[99]<img src='[exp]'/>+[9]</c>";
        lab = lab.replace("[999]", vv.userInfo.offLineReward.gold);
        lab = lab.replace("[99]", vv.userInfo.offLineReward.diamond);
        lab = lab.replace("[9]", vv.userInfo.offLineReward.exp);
        let time = vv.userInfo.offLineReward.offLineTime;
        let a = null;
        let b = null;
        if (time >= 1440) {
            a = Math.floor(time / 1440)
            b = Math.floor((time - a * 1440) / 24)
            lab = lab.replace("1小时1分", a + "天" + b + "小时");
        }
        else if (time >= 60) {
            a = Math.floor(time / 60)
            b = time - a * 60
            lab = lab.replace("1小时1分", a + "小时" + b + "分");
        }
        else {
            lab = lab.replace("1小时1分", time + "分");
        }

        vv.chatInfo.push({ data: lab });

        let node = cc.instantiate(this.chatLab.node);
        node.parent = this.content;

        node.getComponent(cc.RichText).string = lab;
        node.active = true;
    }

    start() {
        this.scheduleOnce(() => {
            this.node.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeOut(0.5)));
        }, 0.5);

        vv.btnClick(this.btnExpression, () => {//打开表情按钮
            this.bgExpression.active = !this.bgExpression.active;
        });

        vv.btnClick(this.btnArrow, () => {//聊天窗口升缩
            if (this.node.height === 50) {
                this.node.height = cc.winSize.height / 2;
                this.chatView.active = true;
                this.btnArrow.rotation = 180;
            }
            else if (this.node.height === cc.winSize.height / 2) {
                this.node.height = 150;
                this.chatView.active = false;
            }
            else {
                this.node.height = 50;
                this.btnArrow.rotation = 0;
            }
        });

        vv.btnClick(cc.find("Canvas"), () => {//聊天窗口升缩
            if (this.node.height !== 50 && this.node.height !== 150) {
                this.node.height = 50;
                this.chatView.active = false;
                this.btnArrow.rotation = 0;
            }
        }, true, true);

        for (let i = 0; i < this.expressions.length; i++) {//添加表情点击
            vv.btnClick(this.expressions[i], () => {
                this.chatEditBox.string = this.chatEditBox.string.concat(this.expressions[i].name);
            });
        }

        vv.btnClick(this.btnSend, () => {//发送按钮
            let word = this.chatEditBox.string;

            if (!word || word.trim() == "") {
                vv.showTip("内容不能为空");
                return;
            }
            if (word.length < 3) {
                vv.showTip("请输入2个字以上");
                return;
            }
            if (word.length > 30) {
                vv.showTip("请输入30个字以内");
                return;
            }

            vv.showTip("发送成功");
            this.chatEditBox.string = "";
            vv.socket.emit('s_chat', { data: word });
        });

        this.chatEditBox.node.on('editing-return', (event) => {
            let word = this.chatEditBox.string;

            if (!word || word.trim() == "") {
                vv.showTip("内容不能为空");
                return;
            }
            if (word.length < 3) {
                vv.showTip("请输入2个字以上");
                return;
            }
            if (word.length > 30) {
                vv.showTip("请输入30个字以内");
                return;
            }

            vv.showTip("发送成功");
            this.chatEditBox.string = "";
            vv.socket.emit('chat', { data: word });
        });

        //监听聊天信息
        let pool = new cc.NodePool();//创建对象池

        vv.eventOn('chat', (data) => {
            cc.log("消息来袭" + JSON.stringify(data));

            this.interval += 0.2;
            this.scheduleOnce(() => {
                this.interval -= 0.2;
                if (vv.chatInfo.length > 29) {
                    vv.chatInfo.shift()
                }
                vv.chatInfo.push(data);

                if (this.content.childrenCount > 30) pool.put(this.content.children[1]);//向对象池中存入一个节点
                let node: cc.Node = null;
                if (pool.size() > 0) {
                    node = pool.get();
                }
                else {
                    node = cc.instantiate(this.chatLab.node);
                }

                node.parent = this.content;
                node.getComponent(cc.RichText).string =`<a href="www.baidu.com" color="red"/>${data.name}</a>`+":"+vv.msgToBeExpression(data.data);
                node.active = true;
            }, this.interval);
        }, this);
    }
}