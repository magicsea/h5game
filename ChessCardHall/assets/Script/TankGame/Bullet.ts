// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    moveVec :cc.Vec2
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    
    start () {

    }

    update (dt:number) {
        let n = this.moveVec.mul(dt)
        this.node.position = this.node.position.addSelf(n)
    }

    SetMoveVec(moveVec :cc.Vec2) {
        this.moveVec = moveVec
        this.node.rotation = cc.Vec2.UP.signAngle(moveVec)*180/Math.PI
    }
}
