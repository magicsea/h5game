import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class qql extends cc.Component {
    @property([cc.Node]) yans: cc.Node[] = [];
    @property(cc.Label) lianji: cc.Label = null;
    @property(cc.Label) time: cc.Label = null;//时间
    @property([cc.SpriteFrame]) img: cc.SpriteFrame[] = [];
    @property(cc.Node) timeOver: cc.Node = null;//时间到提示
    @property(cc.Node) btnOnceAgain: cc.Node = null;//再来一次

    private scrore: number = 0;//得分
    private positions: cc.Vec2[] = [];//记录4个位置
    private times: number = 0;//出现次数
    private time1: number = 0.5;//生成间隔
    private time2: number[] = [0.2, 0.3, 0, 1, 0.4, 0.5];//随机间隔
    private time3: number = 20;//每局时间

    onLoad() {
        for (let i = 0; i < 4; i++) {
            this.positions[i] = this.yans[i].position;
            this.yans[i].on('click', (event) => {
                this.yans[i].stopAllActions();
                this.yans[i].scale = 0;

                if (this.yans[i].tag === 0) {
                    vv.playAudio("qql_lose");
                    this.scrore--;
                    if (this.scrore < 0) {
                        this.scrore = 0;
                    }
                }
                else {
                    vv.playAudio("qql_win");
                    this.scrore++;
                }

                this.lianji.string = this.scrore + "击";
                this.lianji.node.stopAllActions();
                this.lianji.node.runAction(
                    cc.sequence(
                        cc.scaleTo(0.1, 1.3, 1.3),
                        cc.scaleTo(0.1, 1, 1)
                    )
                );
            });
        }

        vv.btnClick(this.btnOnceAgain, () => {
            this.onEnable();
        });
    }

    onEnable() {
        this.scrore = 0;
        this.time3 = 20;
        this.timeOver.y = -50;
        this.timeOver.opacity = 255;
        this.node.y = -300;
        this.unscheduleAllCallbacks();
        this.timeOver.active = true;
        this.btnOnceAgain.active = false;
        this.node.runAction(cc.moveTo(0.4, 0, 0));

        let schedule = () => {
            this.time.string = String(this.time3) + "S";
            if (this.time3 === 0) {
                this.unschedule(schedule);

                this.timeOver.runAction(
                    cc.sequence(
                        cc.moveTo(1, 0, 250),
                        cc.delayTime(1),
                        cc.callFunc(function () {
                            cc.fadeTo(0.3, 0)
                        }, this, null)
                    )
                );

                this.scheduleOnce(() => {
                    this.timeOver.active = false;
                    this.btnOnceAgain.active = true;
                }, 3);
                return;
            }
            this.time3--;
        };
        this.schedule(schedule, 1);

        for (let i = 0; i < 4; i++) {
            this.yans[i].stopAllActions();
            this.yans[i].scale = 0;
        }

        let j = 0;

        let fun = () => {
            this.scheduleOnce(() => {
                if (this.time3 === 0) return;

                this.times++;
                this.time1 -= Math.floor(this.times / 5) * 0.1;
                if (this.time1 < 0.3) this.time1 = 0.3;


                let doing = () => {
                    let random1: number = Math.floor(Math.random() * 4);
                    if (this.yans[random1].scale === 0) {
                        let random2: number = Math.floor(Math.random() * 3);
                        this.yans[random1].tag === random2 ? null : this.yans[random1].getComponent(cc.Sprite).spriteFrame = this.img[random2];
                        this.yans[random1].tag = random2;
                        this.yans[random1].runAction(
                            cc.sequence(
                                cc.scaleTo(0.2, 1, 1),
                                cc.delayTime(0.5 + this.time1),
                                cc.scaleTo(0.1, 0, 0)
                            )
                        );
                    }
                    else {
                        doing();
                    }
                };

                doing();

                fun();
            }, this.time1 + this.time2[j]);
            j++;
            if (j >= this.time2.length) j = 0;
        };

        fun();
    }
}