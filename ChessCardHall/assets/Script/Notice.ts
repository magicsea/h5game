import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Notice extends cc.Component {
    @property(cc.RichText) msg: cc.RichText = null;
    private msgs = [];//存放消息队列

    onLoad() {
        this.node.scale = 0;
    }

    start() {
        vv.eventOn('notice', (data) => {
            cc.log("服务器通知:" + JSON.stringify(data));
            data.data = data.data.replace("nickname", vv.userInfo.nickname);
            this.msgs.push(data);
            if (this.msgs.length === 1) this.showNotice();
        }, this);
    }

    showNotice() {
        let msg = vv.msgToBeExpression(this.msgs[0].data);
        this.msg.string = msg;
        this.msg.node.x = 520;
        this.node.scale = 1;
        this.msg.node.runAction(
            cc.sequence(
                cc.moveTo(0.5, 24, 0),
                cc.delayTime(1.5),
                cc.moveBy((this.msg.node.width + 24) / 50, -this.msg.node.width - 24, 0),
                cc.callFunc(() => {
                    this.msgs.shift();
                    if (this.msgs.length === 0) this.node.scale = 0;
                    else this.showNotice();
                })
            )
        )
    }
}