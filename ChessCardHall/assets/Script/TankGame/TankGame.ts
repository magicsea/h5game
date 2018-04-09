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
import { gameproto } from "../../Libs/gameproto/gamemsg";
import Tank from "./Tank";
import Bullet from "./Bullet";
import GameOverUI from "./GameOverUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TankGame extends cc.Component {

    static instance :TankGame
    //战场节点
    @property(cc.Node)
    fightNode: cc.Node = null;
    @property(cc.Prefab)
    tankPrefab : cc.Prefab
    @property(GameOverUI)
    gameoverUI :GameOverUI

    //所有单位
    tankMap:{[index:number]:Tank;}={}

    //移动包
    snaps : gameproto.Snap[] = []

    //地图对象
    entityMap:{[index:number]:Bullet;}={}

    selfId: number//自己的id
    // LIFE-CYCLE CALLBACKS:
 
    onLoad () {
        TankGame.instance = this

        vv.eventOn("loadFightSceneEnd",(msg)=>{
            console.warn("###loadFightSceneEnd:")
            this.loadFightSceneEnd()
        },this)

        vv.wson("battleStart",(msg)=>{this.onBattleStart(msg)})
        vv.wson("newStage",(msg)=>{this.onNewStage(msg)})
        vv.wson("snap",(msg)=>{this.onSnap(msg)})
        vv.wson("shot",(msg)=>{this.onShot(msg)})
        vv.wson("addEntity",(msg)=>{this.onAddEntity(msg)})
        vv.wson("removeEntity",(msg)=>{this.onRemoveEntity(msg)})
        vv.wson("hit",(msg)=>{this.onHit(msg)})
        vv.wson("dead",(msg)=>{this.onDead(msg)})
        vv.wson("gameover",(msg)=>{this.onGameOver(msg)})
    
    }

    start () {
        // vv.eventOn('enterFightScene', (data) => {
        //     vv.loadScene('game',this.loadFightSceneEnd);//进入战斗场景
        //     console.info("#enterFightScene")
        // }, this)

    }

    update (dt:number) {
        //一帧的时间
        const FRAME_TIME = 20*5
       
        if (this.snaps.length>0) {
            let l = this.snaps.pop()
            for (const info of l.infos) {
                let t = this.getTank(info.id)
                if (t!=null) {
                    t.updateSnap(info)
                    if (t.id==this.selfId) {
                        //console.warn("##self:",info.pos.x,info.pos.y)
                    }
                }
            }
        }
        
     }

    //战斗根节点
    static GetRoot() : cc.Node {
        return TankGame.instance.fightNode
    }


    //战斗场景加载完成
    loadFightSceneEnd() {
        console.info("#send b_ready")
        vv.socket.emit("b_ready",{})//战斗准备
    }

    //生成一个坦克
    spawnTankA(info:gameproto.IFighterInfo) {
        let tanknode = cc.instantiate(this.tankPrefab)
        //let tank = tanknode.addComponent(Bullet)
        let tank = tanknode.getComponent(Tank) 
        tanknode.parent = TankGame.GetRoot()
        tank.initData(info,this.selfId==info.id)
        this.tankMap[tank.id]=tank
        //return tank
    }

    onBattleStart(msg:gameproto.BattleStart) {
        this.selfId = msg.self.id
        console.info("onBattleStart:",msg.self.id,msg.fighters)
        for (const f of msg.fighters) {
            this.spawnTankA(f)
        }
        vv.showTip("WASD移动，空格发弹。祝好运~",cc.Color.YELLOW)
    }

    onNewStage(msg:gameproto.NewStage) {
        console.info("NewStage:",msg.stage,msg.fighters.length)
        vv.showTip(`Start Stage ${msg.stage}`)
        for (const f of msg.fighters) {
            let t = this.getTank(f.id)
            if (t==null) {
                this.spawnTankA(f)
            }
        }
        
    }



    //gameproto.Snap
    onSnap(msg:gameproto.Snap) {
        //console.info("onSnap:",msg.infos)
        this.snaps.push(msg)
    }

    
    //gameproto.Shot
    onShot(msg:gameproto.Shot) {
        console.info("onShot:",msg.id)
        let t = this.getTank(msg.id)
        if (t) {
            t.shootAnim()
        }
    }

    


    //销毁
    destoryTank(id:number) {
        console.info("destoryTank:",id)
        let tank = this.getTank(id)
        if (tank!=null) {
            tank.node.destroy()
            console.info("destoryTank now:",id)
        }
        delete this.tankMap[id]
    }

    //获取一个tank
    getTank(id:number) :Tank {
        if (this.tankMap[id]==undefined) {
            return null
        }
        return this.tankMap[id]
    }


    //gameproto.Snap
    onAddEntity(msg:gameproto.AddEntity) {
        cc.loader.loadRes("Prefab/bullet_2" , (err, prefab) => {
            if (err) {
                console.error("onAddEntity fail:",err)
                return;
            }

            let bulletnode = cc.instantiate(prefab)
            let bullet = bulletnode.addComponent(Bullet)
            let bulletSpeed = 300
            bulletnode.parent = TankGame.GetRoot()
            bulletnode.position = msg.pos
    
            let vel = new cc.Vec2(msg.vel.x,msg.vel.y)
            bullet.SetMoveVec(vel)
            this.entityMap[msg.id]=bullet
        });
    }
   
    onRemoveEntity(msg:gameproto.RemoveEntity) {
        let bl = this.entityMap[msg.id]
        if (bl!=undefined&&bl!=null) {
            bl.node.destroy()
        }
    }

    onHit(msg:gameproto.Hit) {
        let tank = this.getTank(msg.targetId)
        if (tank!=undefined&&tank!=null) {
            tank.BeHit(msg.loseHP)
        }
    }

    onDead(msg:gameproto.Dead) {
        console.info("onDead:",msg.id)
        let tank = this.getTank(msg.id)
        if (tank!=undefined&&tank!=null) {
            tank.OnDead(msg.enemyId)
            this.destoryTank(tank.id)
        }
    }
    
    

    onGameOver(msg:gameproto.GameOver) {
        console.info("GameOver:",msg.time,msg.stage,msg.kill)
        vv.showTip(`游戏结束，你坚持了[${msg.time}]秒`)

        this.fightNode.active = false
        this.gameoverUI.DumpUI(msg.time,msg.kill)
        this.gameoverUI.node.active = true
    }
}
