import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Sprite) icon: cc.Sprite = null;//头像
    @property(cc.Label) nickname: cc.Label = null;//昵称
    @property(cc.Label) level: cc.Label = null;//等级
    @property(cc.Sprite) grade: cc.Sprite = null;//段位
    @property(cc.Label) gold: cc.Label = null;//金币
    @property(cc.Label) diamond: cc.Label = null;//钻石
    @property(cc.Node) btnUserInfo: cc.Node = null;//查看玩家信息按钮

    @property([cc.Node]) btnHalls: cc.Node[] = [];//按钮合集
    @property([cc.Node]) btnGames: cc.Node[] = [];//游戏合集

    @property([cc.SpriteFrame]) iconBoys: cc.SpriteFrame[] = [];//男头像图标合集
    @property([cc.SpriteFrame]) iconGirls: cc.SpriteFrame[] = [];//女头像图标合集
    @property([cc.SpriteFrame]) grades: cc.SpriteFrame[] = [];//段位图标合集

    @property(cc.Node) userInfo: cc.Node = null;//玩家信息

    onLoad() {
        vv.screenAdapter();//屏幕适配
        vv.onScreenSizeChange();//监听屏幕尺寸变化
        this.updateUserInfo();//更新玩家信息
        this.viewAnimation();//大厅动画
    }

    viewAnimation() {
        this.userInfo.y += 100;
        this.userInfo.runAction(cc.moveBy(0.5, 0, -100).easing(cc.easeOut(0.5)));

        //游戏合集
        // for (let i = 0; i < this.btnGames.length; i++) {
        //     this.btnGames[i].y -= 500;
        //     this.scheduleOnce(() => {
        //         this.btnGames[i].runAction(
        //             cc.sequence(
        //                 cc.moveBy(0.3, 0, 500 + 30).easing(cc.easeIn(0.3)),
        //                 cc.moveBy(0.1, 0, -30)
        //             )
        //         );
        //     }, 0.1 * i);
        // }

        // this.btnHalls[0].x += 100;
        // this.btnHalls[0].runAction(cc.moveBy(0.5, -100, 0).easing(cc.easeOut(0.5)));
    }

    start() {
        vv.openPrefab("chat");//聊天

        //查看玩家信息按钮
        vv.btnClick(this.btnUserInfo, () => {
            vv.openPrefab("reviseUserInfo");//查看玩家信息
        });

        //大转盘按钮
        vv.btnClick(this.btnHalls[0], () => {
            vv.openPrefab("turntable");//大转盘
        });

        // this.scheduleOnce(() => {
        //     if (vv.userInfo.nickname === vv.userInfo.userName.slice(0, 8) && vv.userInfo.userName !== "管理员") {//创建用户信息
        //         vv.openPrefab("reviseUserInfo");
        //     }
        //     else if (vv.isFreeTurntable && !vv.openedTurntable) {//有免费次数时打开大转盘
        //         vv.openedTurntable = true;
        //         vv.openPrefab("turntable");
        //     }
        // }, 0.6);

        vv.eventOn('updateUserInfo', (data) => {
            this.updateUserInfo();//更新玩家信息
        }, this);

        vv.eventOn('enterFightScene', (data) => {
            console.info("#enterFightScene")
            vv.loadScene('game',()=>{
                vv.eventEmit("loadFightSceneEnd")
                console.info("send loadFightSceneEnd")
            });//进入战斗场景

        }, this)

        //游戏合集
        for (let i = 0; i < this.btnGames.length; i++) {
            this.btnGames[i].runAction(cc.repeatForever(
                cc.sequence(
                    cc.scaleTo(1 + Math.random() / 2, 1.03, 0.97),
                    cc.scaleTo(1 + Math.random() / 2, 0.97, 1.03)
                )
            ));

            vv.btnClick(this.btnGames[i], () => {
                if (i === 0) {
                    this.enterPVE()
                    //vv.loadScene('game');
                }
                else {
                    vv.showTip("还未完成");
                }

            });
        }
    }

    //请求加入战场
    enterPVE() {
        vv.socket.emit("s_requestBattle",{stageId:1,battleType:0})//S_RequestBattle
    }



    /**更新玩家信息 */
    updateUserInfo() {
        cc.log("updateUserInfo...lv",vv.userInfo.level,vv.userInfo.headId)
        this.icon.spriteFrame = (vv.userInfo.sex === 1 ? this.iconBoys[vv.userInfo.headId - 1] : this.iconGirls[vv.userInfo.headId - 1]);
        cc.log("icon:",this.icon.spriteFrame)
        this.nickname.string = vv.userInfo.nickname;
        //let level = vv.expToLevel(vv.userInfo.exp);
        let level = vv.userInfo.level
        this.level.string = "Lv." + level;
        this.grade.spriteFrame = level > 99 ? this.grades[9] : this.grades[Math.floor(level / 10)];
        this.gold.string = vv.virtualCoinToCN(vv.userInfo.gold);
        this.diamond.string = vv.virtualCoinToCN(vv.userInfo.diamond);
    }
}