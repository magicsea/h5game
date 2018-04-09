// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
import vv from "./vv";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Init extends cc.Component {

 
    onLoad () {
        (<any>window).vv = vv;
        vv.screenAdapter();//屏幕适配
        vv.onScreenSizeChange();//监听屏幕尺寸变化
        cc.game.setFrameRate(30);
    }

    start () {

    }

    // update (dt) {},
}
