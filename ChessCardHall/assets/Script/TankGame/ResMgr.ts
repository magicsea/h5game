// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ResMgr extends cc.Component {
    public static instance:ResMgr
    @property([cc.SpriteFrame])
    itemSF :cc.SpriteFrame[]=[]
    
    onLoad () {
        ResMgr.instance = this
    }

    start () {

    }

    // update (dt) {}

    static getItemSpriteFrame(id:number):cc.SpriteFrame {
        console.log("sf size:",ResMgr.instance.itemSF.length)
        return ResMgr.instance.itemSF[id-1]
    }
}
