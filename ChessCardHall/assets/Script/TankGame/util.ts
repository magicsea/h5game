import { gameproto } from "../../Libs/gameproto/gamemsg";

const {ccclass, property} = cc._decorator;


export default class util {
    
    static FV2Vec(fv :gameproto.IFVector):cc.Vec2 {
        return new cc.Vec2(fv.x?fv.x:0,fv.y?fv.y:0)
    }

    static Vec2FV(v2 :cc.Vec2):gameproto.IFVector {
        return v2
    }
}