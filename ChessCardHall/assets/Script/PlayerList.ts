import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label) playerNum: cc.Label = null;//在线玩家人数
    @property(cc.Node) list: cc.Node = null;
    @property(cc.Node) ScrollView: cc.Node = null;
    @property(cc.Node) content: cc.Node = null;
    @property(cc.Node) arrow: cc.Node = null;

    start() {
        let pool = new cc.NodePool();

        vv.socket.emit('getPlayerList');

        vv.eventOn('getPlayerList', (data) => {
            cc.log("获取玩家列表:" + data);
            this.playerNum.string = data.length;//更新在线玩家人数

            for (let i = 0; i < data.length; i++) {
                data[i] = data[i].split('|');
                let node: cc.Node = cc.instantiate(this.list);
                node.getComponent(cc.Label).string = "Lv" + vv.expToLevel(data[i][1]) + "  " + data[i][0];
                node.parent = this.content;
                node.name = data[i][0];
                node.zIndex = -data[i][1];
                node.active = true;
            }
        }, this);

        vv.eventOn('updataPlayerList', (data) => {
            cc.log("玩家列表刷新:" + data);
            this.playerNum.string = data.length;//更新在线玩家人数

            this.content.destroyAllChildren()

            for (let i = 0; i < data.length; i++) {
                data[i] = data[i].split('|');
                let node: cc.Node = null;
                if (pool.size() > 0) {
                    node = pool.get();
                }
                else {
                    node = cc.instantiate(this.list);
                }
                node.getComponent(cc.Label).string = "Lv" + vv.expToLevel(data[i][1]) + " " + data[i][0];
                node.parent = this.content;
                node.name = data[i][0];
                node.zIndex = -data[i][1];
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
