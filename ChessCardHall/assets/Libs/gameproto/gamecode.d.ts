
/** Namespace gameproto. */
export namespace gameproto {

    /** C2GS_CMD enum. */
    enum C2GS_CMD {
        C2GS_NONE = 0,
        C2S_LOGIN = 1,
        C2S_Test = 10,
        C2S_HEART_INFO = 254,
        C2S_ACK = 255
    }

    /** GS2C_CMD enum. */
    enum GS2C_CMD {
        GS2C_NONE = 0,
        S2C_CONFIRM = 1,
        S2C_LOGIN_END = 2,
        S2C_LOGIN_CHAR_INFO = 3,
        S2C_Test = 10
    }
}
