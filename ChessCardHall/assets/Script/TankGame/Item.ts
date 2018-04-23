// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
import ResMgr from "./ResMgr";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Item extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

     onLoad () {

     }

    start () {
        this.node.runAction(cc.repeatForever(
            cc.sequence(
                cc.scaleTo(1 + Math.random() / 2, 1.03, 0.97),
                cc.scaleTo(1 + Math.random() / 2, 0.97, 1.03)
            )
        ));

    }

    // update (dt) {}

    SetType(id:number) {
        let s = ResMgr.getItemSpriteFrame(id)
        console.warn("SetType:",s)
        let sp = this.getComponent(cc.Sprite);
        sp.spriteFrame = s
    }
}
