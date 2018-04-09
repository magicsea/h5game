// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
import vv from "./../vv";
import TankGame from "./TankGame"
import { gameproto } from "../../Libs/gameproto/gamemsg";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOverUI extends cc.Component {

    @property(cc.Label)
    lbtime: cc.Label = null;

    @property(cc.Label)
    lbkill: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    @property(cc.Node) btnLeave: cc.Node = null;//退出按钮
    start () {
        //退出按钮
        vv.btnClick(this.btnLeave, () => {
            vv.pauseTouch();//禁止交互操作
            vv.loadScene('hall');//跳转到登录场景
            vv.socket.emit("b_quit",{})
        });
    }

    // update (dt) {},

    DumpUI(time:number,kill:number) {
        this.lbtime.string=`${time}秒`
        this.lbkill.string=`${kill}`
    }

}
