import vv from "./vv";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node) btnCreate: cc.Node = null;//创建按钮
    @property(cc.Node) btnClose: cc.Node = null;//关闭按钮
    @property(cc.Node) toggleGroup: cc.Node = null;//12个头像的父节点
    @property([cc.Node]) toggles: cc.Node[] = [];//12个头像
    @property(cc.EditBox) editBoxNickname: cc.EditBox = null;//昵称输入框
    @property([cc.Node]) viewAnimations: cc.Node[] = [];//界面动画节点集合
    @property(cc.Node) btnDice: cc.Node = null;//换名字按钮

    private sex: number = null;//性别
    private headId: number = null;//头像编号
    private needOpenTurntable: boolean = false;

    onLoad() {
        this.editBoxNickname.string = vv.userInfo.nickname?vv.userInfo.nickname:"";
        this.sex = vv.userInfo.sex;
        this.headId = vv.userInfo.headId;
        //cc.find(String(vv.userInfo.sex) + String(vv.userInfo.headId), this.toggleGroup).getComponent(cc.Toggle).isChecked = true;

        //界面渐入动画
        this.node.opacity = 100;
        this.node.runAction(cc.fadeTo(0.2, 255));

        //界面内元素初始动画
        let l = this.viewAnimations.length;
        for (let i = 0; i < l; i++) {
            this.viewAnimations[i].active = false;
            this.viewAnimations[i].y -= 30;
            this.viewAnimations[i].opacity = 150;

            this.scheduleOnce(() => {
                this.viewAnimations[i].active = true;
                this.viewAnimations[i].runAction(
                    cc.spawn(
                        cc.fadeTo(0.1, 255),
                        cc.moveBy(0.1, 0, 30),
                    )
                );
            }, i * 0.04 + 0.1);
        }
    }

    start() {
        for (let i = 0; i < this.toggles.length; i++) {
            this.toggles[i].on('toggle', (event) => {
                vv.playAudio("click")
                this.sex = Number(event.target.name[0]);
                this.headId = Number(event.target.name[1]);
            });
        }

        //创建按钮
        vv.btnClick(this.btnCreate, () => {
            let nickname = this.editBoxNickname.string;

            if (!nickname || nickname.trim() == "") { vv.showTip("姓名不能为空"); return; }
            if (nickname.length < 2) { vv.showTip("姓名长度不能少于2位"); return; }
            if (nickname.length > 8) { vv.showTip("姓名长度不能大于4位"); return; }
            if (nickname.indexOf(" ") > -1) { vv.showTip("姓名不能包含空格"); return; }
            if (!/^[\u4e00-\u9fa5]{0,}$/.test(nickname)) { vv.showTip("姓名必须为汉字"); return; }

            vv.pauseTouch();//禁止交互操作
            vv.socket.emit('s_reviseUserInfo', { userId: vv.userInfo.userId, nickname: this.editBoxNickname.string, sex: this.sex, headId: this.headId });
        });

        vv.eventOn('reviseUserInfo', (data) => {
            cc.log("修改资料:" + JSON.stringify(data));
            if (data[0]) {
                vv.showTip("修改成功");
                vv.userInfo.nickname = this.editBoxNickname.string;
                vv.userInfo.sex = this.sex;
                vv.userInfo.headId = this.headId;

                vv.resumeTouch();//恢复交互操作
                vv.eventEmit('updateUserInfo');//更新大厅信息
                this.node.destroy();
            }
            else {
                vv.showTip(data[1]);
                vv.resumeTouch();//恢复交互操作
            }
        }, this);

        let xings = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫";

        let mings = "旭梅萍元雪晓莉明燕敏俊飞文斌卫国伟九庆以莲留强晓敏汝彬台铭帆伟东明骏世鹏仕辉丹慧乔昆仑万里雪中锋绍雄秋萍丽娟发前云霞自伟依林旭虎玮柏组红心林鹏海涛醒绍平玉洁方雄志伟双丽明汉琴珍美明君海英涛文武艳小刚霞高强浩志豪军林小敏叶东自富喜少云忠义小燕自坤静雯文建开勇海林轲仕茂秀莲仁贵远青开凤玲伟军存瑞明浩文昌大伟岸英德琴光国佑军盛露少青祖美发祥钱钟森永发运瑞丽敏自珍家宝建联迪慧章盛锦素巨建生平明霞孟刚丽娟海峰松伟秋林明琴枝山";

        let fun = () => {
            let xing = xings[Math.floor(Math.random() * 168)]
            let ming = mings[Math.floor(Math.random() * 209)]
            if (Math.random() > 0.3) ming += mings[Math.floor(Math.random() * 209)]
            this.editBoxNickname.string = xing + ming;
        }

        vv.btnClick(this.btnDice, () => {
            fun()
        });

        vv.btnClick(this.btnClose, () => {
            this.node.destroy()
        });
    }

    onDestroy() {
        if (vv.isFreeTurntable && !vv.openedTurntable) {//有免费次数时打开大转盘
            vv.openedTurntable = true;
            vv.openPrefab("turntable");
        }
    }
}