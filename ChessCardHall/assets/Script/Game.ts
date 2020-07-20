import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node) btnLeave: cc.Node = null;//退出按钮
    @property(cc.Node) bgGame: cc.Node = null;//背景图片


    onLoad() {
        vv.screenAdapter();//屏幕适配
        vv.onScreenSizeChange();//监听屏幕尺寸变化

        let winSize = cc.view.getVisibleSize();
        if (this.bgGame.width !== winSize.width) {
            this.bgGame.scale = this.bgGame.width < winSize.width ? winSize.width / this.bgGame.width : this.bgGame.width / winSize.width;
        }
        else {
            this.bgGame.scale = this.bgGame.height < winSize.height ? winSize.height / this.bgGame.height : this.bgGame.height / winSize.height;
        }


    }

    start() {
        //vv.openPrefab("chat");//聊天

        //退出按钮
        vv.btnClick(this.btnLeave, () => {
            vv.pauseTouch();//禁止交互操作
            vv.loadScene('lobby');//跳转到登录场景
            vv.socket.emit("b_quit",{})
        });
    }



}
