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
    


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.moveVec = new cc.Vec2(0,1)
    }

    start () {
        // 初始化键盘输入监听
        this.setInputControl();
        
    }

    update (dt) {
        var msg = {angle:this.angel}//new gameproto.Move()
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
        var self = this;
        // 添加键盘事件监听
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // 有按键按下时，判断是否是我们指定的方向控制键，并设置向对应方向加速
            onKeyPressed:(keyCode, event)=> {
                switch(keyCode) {
                    case cc.KEY.a:
                        this.moveVec = new cc.Vec2(-1,0)
                        this.angel = -90
                        break;
                    case cc.KEY.d:
                        this.moveVec= new cc.Vec2(1,0)
                        this.angel = 90
                        break;
                    case cc.KEY.w:
                        this.moveVec = new cc.Vec2(0,1)
                        this.angel = 0
                        break;
                    case cc.KEY.s:
                        this.moveVec = new cc.Vec2(0,-1)
                        this.angel = 180
                        break; 
                    case cc.KEY.space:
                        this.shoot()
                        break;
                }
            },
            // 松开按键时，停止向该方向的加速
            onKeyReleased: (keyCode, event)=> {
                switch(keyCode) {
                    case cc.KEY.a:
                        break;
                    case cc.KEY.d:
                        break;
                }
            }
        
        }, self.node);
    }
}
