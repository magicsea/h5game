// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
import Tank from "./Tank"
import vv from "./../vv";
import { gameproto } from "../../Libs/gameproto/gamemsg";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Controller extends cc.Component {

    @property(Tank)
    player: Tank = null;//玩家


    moveVec : cc.Vec2;//方向控制
    angel:number;

    @property(cc.Node)
    btnShot: cc.Node = null;//射击按钮
    

    @property(cc.Node)
    joystickNode: cc.Node = null;//joysticknode
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.moveVec = new cc.Vec2(0,1)
    }

    start () {
        // 初始化键盘输入监听
        this.setInputControl();
        vv.btnClick(this.btnShot, () => {
            this.shoot()
        });
    }

    update (dt) {
        
        var js = this.joystickNode.getComponent("GameJoystick")
        var pos = js.getTouchPos() as cc.Vec2
        var a = pos.signAngle(cc.Vec2.UP)*180/Math.PI //cc.pAngleSigned(pos,cc.Vec2.UP)*180/3.14
        if (pos.equals(cc.Vec2.ZERO)) {
            a = this.angel
        }
        
        //console.warn("angle:",a)
        var msg = {angle:a}//new gameproto.Move()
        vv.socket.emit("b_move",msg)
        // if(this.player) {
        //     this.player.setMoveVec(this.moveVec)
        // }

    }

    shoot() {
        //this.player.shoot()
        vv.socket.emit("b_shot",{})
    }
    
 
    setInputControl() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        
    }
    
    
    onKeyDown(event) {
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.moveVec = new cc.Vec2(-1,0)
                this.angel = -90
                break;
            case cc.macro.KEY.d:
                this.moveVec= new cc.Vec2(1,0)
                this.angel = 90
                break;
            case cc.macro.KEY.w:
                this.moveVec = new cc.Vec2(0,1)
                this.angel = 0
                break;
            case cc.macro.KEY.s:
                this.moveVec = new cc.Vec2(0,-1)
                this.angel = 180
                break; 
            case cc.macro.KEY.space:
                this.shoot()
                break;
        }
    }
}


