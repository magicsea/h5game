export class LoginData {
    GateAddr :string
    Uid:number
    Key:string
}

export default class loginMod {
    static logindata :LoginData
    static SetLoginData(addr:string,uid:number,key:string) {
        this.logindata = new LoginData()
        this.logindata.GateAddr =addr
        this.logindata.Uid = uid
        this.logindata.Key = key
    }
    
    static GetLoginData() : LoginData {
        return this.logindata
    }
}


