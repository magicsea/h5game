import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Turntable extends cc.Component {
    @property(cc.Node) Reward: cc.Node = null;//奖励圆盘
    @property(cc.Node) guang: cc.Node = null;//圆盘的灯光
    @property(cc.Node) list: cc.Node = null;//中奖名单
    @property(cc.Node) myList: cc.Node = null;//我的中奖纪录
    @property(cc.Node) btnGet: cc.Node = null;//抽奖按钮
    @property(cc.Node) free: cc.Node = null;//抽奖按钮免费标记
    @property(cc.Node) spend: cc.Node = null;//抽奖按钮花费标记
    @property(cc.Label) price: cc.Label = null;//当前抽奖价格

    @property([cc.Node]) viewAnimations: cc.Node[] = [];//界面动画节点集合

    private turntableReward: any = [];
    private correctAngle: number = 25.7;
    private lastPosition: number = 0;
    private HallJS: any = null;
    private color1: cc.Color = new cc.Color(11, 229, 255);
    private color2: cc.Color = new cc.Color(255, 114, 249);

    onLoad() {
        this.HallJS = cc.find("Canvas").getComponent("Hall")

        //界面初始化
        let time = new Date(vv.userInfo.lastGetFreeTurntable);
        let newTime = new Date();
        if (!vv.isFreeTurntable) {
            this.free.active = false;
            this.spend.active = true;
        }

        //界面动画
        this.viewAnimations[0].y -= 100;
        this.viewAnimations[0].opacity = 0;
        this.viewAnimations[1].y -= 240;
        this.viewAnimations[1].opacity = 0;
        this.viewAnimations[2].scale = 0;

        this.viewAnimations[2].runAction(cc.sequence(
            cc.spawn(
                cc.scaleTo(0.3, 1, 1),
                cc.rotateBy(0.3, 360)
            ),
            cc.callFunc(() => {
                this.viewAnimations[1].opacity = 100;
                this.viewAnimations[1].runAction(cc.sequence(
                    cc.spawn(
                        cc.fadeTo(0.3, 255),
                        cc.moveBy(0.3, 0, 240),

                    ),
                    cc.callFunc(() => {
                        vv.socket.emit('loadTurntableInfo');//读取大转盘中奖记录
                        this.viewAnimations[0].opacity = 100;
                        this.viewAnimations[0].runAction(
                            cc.spawn(
                                cc.fadeTo(0.2, 255),
                                cc.moveBy(0.2, 0, 100),
                            )
                        );
                    })
                ));
            })
        ));
    }

    start() {
        vv.eventOn('loadTurntableInfo', (data) => {
            cc.log("转盘中奖记录:" + JSON.stringify(data));
            this.showWinningList(data);
        }, this);

        this.schedule(() => {
            this.guang.active = !this.guang.active;
        }, 0.5);

        //点击抽奖按钮
        this.scheduleOnce(() => {
            vv.btnClick(this.btnGet, () => {
                this.btnGet.pauseSystemEvents(true);//暂停节点监听
                vv.socket.emit('turntable');
            });

            vv.eventOn('turntable', (data) => {
                cc.log("中奖结果:" + JSON.stringify(data));
                if (!data[0]) {
                    vv.showTip(data[1]);
                    this.btnGet.resumeSystemEvents(true);//恢复节点监听
                }
                else {
                    this.rewardRun(data[1]);
                }

            }, this);
        }, 1);
    }

    //显示中奖名单
    showWinningList(data) {
        if (!data) return;
        for (let i = 0; i < data.length; i++) {
            this.scheduleOnce(() => {
                let node: cc.Node = cc.instantiate(this.list);
                let layout: cc.Node = node.getChildByName('layout');
                layout.opacity = 100;
                layout.y = -30;
                let time: cc.Node = layout.getChildByName('time');
                let name: cc.Node = layout.getChildByName('name');
                let reward: cc.Node = layout.getChildByName('reward');
                if (data[i].id === 0) reward.color = this.color1;
                if (data[i].id === 5) reward.color = this.color2;

                let n = new Date(data[i].time);

                time.getComponent(cc.Label).string = vv.timeDifference(n, data.nowTime);;
                name.getComponent(cc.Label).string = data[i].nickname;
                reward.getComponent(cc.Label).string = data[i].des;
                node.parent = this.list.parent;
                node.active = true;
                layout.runAction(cc.spawn(
                    cc.moveTo(0.2, 0, 0),
                    cc.fadeTo(0.2, 255)
                ));
            }, 0.1 * i);
        }
    }

    //转盘转动动画
    rewardRun(data) {
        if (this.spend.active) {
            vv.userInfo.diamond -= 10;
            this.HallJS.diamond.string = vv.userInfo.diamond;
        }

        if (data.type === 1) {//更新金币
            vv.userInfo.gold += data.num;
        }
        else if (data.type === 2) {//更新钻石
            vv.userInfo.diamond += data.num;
        }
        else if (data.type === 3) {//更新经验
            vv.userInfo.exp += data.num;
        }

        vv.isFreeTurntable = false;
        this.free.active = false;
        this.spend.active = true;

        this.Reward.runAction(cc.sequence(
            cc.rotateBy(4, 1800 + 51.43 * data.id + this.correctAngle - this.lastPosition * 51.43).easing(cc.easeInOut(2)),
            cc.callFunc(() => {
                this.correctAngle = 0;
                this.lastPosition = data.id;

                let icon: string = null;
                if (data.type === 1) {//更新金币
                    icon = "<img src='[gold]'/> x ";
                    this.HallJS.gold.string = vv.virtualCoinToCN(vv.userInfo.gold);
                }
                else if (data.type === 2) {//更新钻石
                    icon = "<img src='[diam]'/> x ";
                    this.HallJS.diamond.string = vv.virtualCoinToCN(vv.userInfo.diamond);
                }
                else if (data.type === 3) {//更新经验
                    icon = "<img src='[exp]'/> x ";
                    let level = vv.expToLevel(vv.userInfo.exp);
                    this.HallJS.level.string = "Lv." + level;
                    this.HallJS.grade.spriteFrame = level > 99 ? this.HallJS.grades[9] : this.HallJS.grades[Math.floor(level / 10)];
                }

                vv.showTip(icon + data.num);
                vv.playAudio("win");
                this.btnGet.resumeSystemEvents(true);//恢复节点监听

                let node: cc.Node = cc.instantiate(this.myList);
                let time: cc.Node = node.getChildByName('time');
                let reward: cc.Node = node.getChildByName('reward');
                if (data.id === 0) reward.color = this.color1;
                if (data.id === 5) reward.color = this.color2;
                reward.getComponent(cc.Label).string = data.des;
                let t = new Date();
                let hour = t.getHours();
                let minute = t.getMinutes();
                let second = t.getSeconds();
                time.getComponent(cc.Label).string = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);
                node.parent = this.myList.parent;
                node.zIndex = -node.parent.childrenCount;
                node.active = true;
            })
        ));
    }

    onDestroy() {
        this.HallJS.gold.string = vv.virtualCoinToCN(vv.userInfo.gold);
        this.HallJS.diamond.string = vv.virtualCoinToCN(vv.userInfo.diamond);
        let level = vv.expToLevel(vv.userInfo.exp);
        this.HallJS.level.string = "Lv." + level;
        this.HallJS.grade.spriteFrame = level > 99 ? this.HallJS.grades[9] : this.HallJS.grades[Math.floor(level / 10)];
    }
}