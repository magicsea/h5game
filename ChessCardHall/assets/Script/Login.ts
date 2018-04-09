import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class login extends cc.Component {
    @property(cc.Node) bgHall: cc.Node = null;//棋牌大厅icon节点

    onLoad() {
        (<any>window).vv = vv;
        vv.screenAdapter();//屏幕适配
        vv.onScreenSizeChange();//监听屏幕尺寸变化
        cc.game.setFrameRate(30);
    }

    start() {
        // if (!cc.find("network")) {
        //     vv.openPrefab("network", (node: cc.Node) => {
        //         node.parent = cc.director.getScene();
        //     });//打开网络连接界面
        // }
        //else {
            vv.openPrefab("signIn");//打开登录界面
        //}
    }
}