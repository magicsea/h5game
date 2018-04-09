import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label) playerNum: cc.Label = null;//我的排名
    @property(cc.Node) list: cc.Node = null;
    @property(cc.Node) ScrollView: cc.Node = null;
    @property(cc.Node) content: cc.Node = null;
    @property(cc.Node) arrow: cc.Node = null;

    start() {
        let pool = new cc.NodePool();

        vv.socket.emit('getRankList');

        vv.eventOn('getRankList', (data) => {
            cc.log("获取排行列表:" + JSON.stringify(data));

            for (let i = 0; i < data.length; i++) {
                if (vv.userInfo.userId === data[i].userId) this.playerNum.string = data[i].rank;
                let node: cc.Node = cc.instantiate(this.list);
                node.getChildByName("rank").getComponent(cc.Label).string = data[i].rank;
                node.getChildByName("name").getComponent(cc.Label).string = data[i].nickname;
                node.getChildByName("gold").getComponent(cc.Label).string = vv.virtualCoinToCN(data[i].gold);
                node.parent = this.content;
                node.active = true;
            }
        }, this);

        vv.btnClick(this.node, () => {
            if (!this.ScrollView.active) {
                this.ScrollView.active = true;
                this.arrow.rotation = 180;
            }
            else {
                this.ScrollView.active = false;

                this.arrow.rotation = 0;
            }
        }, true)
    }
}
