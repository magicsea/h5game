const { ccclass, property } = cc._decorator;

@ccclass
export default class MASK extends cc.Component {
    @property(cc.Label) lab: cc.Label = null;

    onLoad() {
        this.node.scale = 1;
    }

    start() {
        this.node.runAction(
            cc.sequence(
                cc.fadeTo(0.6, 0),
                cc.callFunc(function () {
                    this.node.scale = 0;
                }, this, null)
            )
        );

        let i = 0;
        let q = [".", "..", "..."];
        let p = "拼命加载中";
        this.lab.schedule(() => {
            this.lab.string = p + q[i];
            i++;
            if (i > 2) i = 0;
        }, 0.4);
    }
}