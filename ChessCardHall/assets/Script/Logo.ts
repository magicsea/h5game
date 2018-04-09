import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class logo extends cc.Component {
    @property(cc.Node) logo: cc.Node = null;

    onLoad() {
        (<any>window).vv = vv;
        vv.screenAdapter();//屏幕适配
        vv.onScreenSizeChange();//监听屏幕尺寸变化
        cc.game.setFrameRate(30);
    }

    start() {
        this.scheduleOnce(() => {
            vv.loadScene('login', () => {
                vv.playAudio("bg", true);//播放音频
            });
        }, 1);
    }
}