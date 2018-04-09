import Bullet from "./Bullet";
import util from "./util";
import TankGame from "./TankGame"
import { gameproto } from "../../Libs/gameproto/gamemsg";
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
export default class Tank extends cc.Component {

    //基础信息
    id :number
    name :string

    snapList :Array<gameproto.IFighterSnapInfo>


    @property(cc.Node)
    body: cc.Node = null;

    //@property
    //speed:number = 10

    @property(cc.Node)
    animNode: cc.Node = null;

    @property(cc.Node)
    playerTank: cc.Node = null;
    @property(cc.Node)
    enemyTank: cc.Node = null;

    @property(cc.Prefab)
    bulletPrefab : cc.Prefab

    //ui hp
    HPs : cc.Node[] = []

    moveVec :cc.Vec2 = cc.Vec2.ZERO
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    hp :number


    start () {
        for (let i = 0; i < 4; i++) {
            let path = `ui/hp/Bar_B-life_${i+1}`
            let node = cc.find(path,this.node)
            //console.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$find:",node)
            this.HPs.push(node)
        }
        this.dumpUI()
    }

    update (dt) {
        
        //let n = this.moveVec.normalize()
        //let v = n.mul(this.speed*dt)
        //let v = this.moveVec
        //this.node.position = this.node.position.addSelf(v)
        //console.log("move:n=",n," v=",v)
    }

    faceTo(dir:cc.Vec2) {
     
        let r = cc.Vec2.UP.signAngle(dir)*180/Math.PI//new cc.Vec2(10,10)
        //console.log("faceto:",dir," rotato=",r)
        this.body.rotation = r
    }

    setMoveVec(vec:cc.Vec2) {
        this.moveVec = vec
        this.faceTo(vec)
    }

    shootAnim() :boolean {
        
        //anim
        //let ske = this.animNode.getComponent(sp.Skeleton)//动画有问题，先不弄
        //ske.setAnimation(0,"atk_level1",false)
        
        return true
    }

    stop() {

    }

    shoot() :boolean {
        
        //bullet
        //let pool = new cc.NodePool();//创建对象池
        //pool.get put
        let bulletnode = cc.instantiate(this.bulletPrefab)
        let bullet = bulletnode.addComponent(Bullet)
        let bulletSpeed = 300
        bulletnode.parent = TankGame.GetRoot()
        bulletnode.position = this.node.position
        
        bullet.SetMoveVec(this.moveVec.normalize().mul(bulletSpeed))
        
        return true
    }

    initData(info :gameproto.IFighterInfo,isPlayer :boolean) {
        this.id = info.id
        this.name = info.name
        this.node.position = util.FV2Vec(info.pos)
        this.hp = info.hp
        this.faceTo(util.FV2Vec(info.vel))
        this.moveVec = util.FV2Vec(info.vel)

        this.playerTank.active = isPlayer
        this.enemyTank.active = !isPlayer
    }

    updateSnap(info:gameproto.IFighterSnapInfo) {
        this.node.position = util.FV2Vec(info.pos)
        this.faceTo(util.FV2Vec(info.vel))
        this.moveVec = util.FV2Vec(info.vel)
        //console.info("update pos:",info.pos)
    }

    BeHit(lose:number) {
        this.hp-=lose
        console.info("BeHit :",this.id)
        this.dumpUI()
    }

    dumpUI() {
        for (let i = 0; i < this.HPs.length; i++) {
            const element = this.HPs[i];
            element.active = (i<this.hp)
        }
    }

    OnDead(enemyId:number) {
        console.info("OnDead :",this.id)

    }
}
