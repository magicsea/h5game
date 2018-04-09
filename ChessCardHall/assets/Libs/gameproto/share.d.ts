
/** Namespace gameproto. */
export namespace gameproto {

    /** ErrorCode enum. */
    enum ErrorCode {
        OK = 0,
        Fail = 1,
        Error = 2,
        ServerFull = 3,
        KeyError = 4,
        NoFoundTarget = 5,
        IMPORTANT_WRONG_HEAD = -1000,
        RESOURCE_VITALITY_ERROR = 1002,
        RESOURCE_GOLD_ERROR = 1003,
        RESOURCE_RMB_ERROR = 1004,
        GUILD_EXIT_CHAIRMAN_ERROR = 1022,
        UNKNOWN_ERROR = -9999
    }

    /** Properties of a C2S_TestMsg. */
    interface IC2S_TestMsg {

        /** C2S_TestMsg id */
        id?: (number|null);
    }

    /** Represents a C2S_TestMsg. */
    class C2S_TestMsg implements IC2S_TestMsg {

        /**
         * Constructs a new C2S_TestMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC2S_TestMsg);

        /** C2S_TestMsg id. */
        public id: number;

        /**
         * Creates a new C2S_TestMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_TestMsg instance
         */
        public static create(properties?: gameproto.IC2S_TestMsg): gameproto.C2S_TestMsg;

        /**
         * Encodes the specified C2S_TestMsg message. Does not implicitly {@link gameproto.C2S_TestMsg.verify|verify} messages.
         * @param message C2S_TestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC2S_TestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_TestMsg message, length delimited. Does not implicitly {@link gameproto.C2S_TestMsg.verify|verify} messages.
         * @param message C2S_TestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC2S_TestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_TestMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_TestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C2S_TestMsg;

        /**
         * Decodes a C2S_TestMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_TestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C2S_TestMsg;

        /**
         * Verifies a C2S_TestMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_TestMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_TestMsg
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C2S_TestMsg;

        /**
         * Creates a plain object from a C2S_TestMsg message. Also converts values to other types if specified.
         * @param message C2S_TestMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C2S_TestMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_TestMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_TestMsg. */
    interface IS2C_TestMsg {

        /** S2C_TestMsg id */
        id?: (number|null);
    }

    /** Represents a S2C_TestMsg. */
    class S2C_TestMsg implements IS2C_TestMsg {

        /**
         * Constructs a new S2C_TestMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IS2C_TestMsg);

        /** S2C_TestMsg id. */
        public id: number;

        /**
         * Creates a new S2C_TestMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_TestMsg instance
         */
        public static create(properties?: gameproto.IS2C_TestMsg): gameproto.S2C_TestMsg;

        /**
         * Encodes the specified S2C_TestMsg message. Does not implicitly {@link gameproto.S2C_TestMsg.verify|verify} messages.
         * @param message S2C_TestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IS2C_TestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_TestMsg message, length delimited. Does not implicitly {@link gameproto.S2C_TestMsg.verify|verify} messages.
         * @param message S2C_TestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IS2C_TestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_TestMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_TestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.S2C_TestMsg;

        /**
         * Decodes a S2C_TestMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_TestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.S2C_TestMsg;

        /**
         * Verifies a S2C_TestMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_TestMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_TestMsg
         */
        public static fromObject(object: { [k: string]: any }): gameproto.S2C_TestMsg;

        /**
         * Creates a plain object from a S2C_TestMsg message. Also converts values to other types if specified.
         * @param message S2C_TestMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.S2C_TestMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_TestMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_ConfirmInfo. */
    interface IS2C_ConfirmInfo {

        /** S2C_ConfirmInfo msgHead */
        msgHead?: (number|null);

        /** S2C_ConfirmInfo code */
        code?: (number|null);
    }

    /** Represents a S2C_ConfirmInfo. */
    class S2C_ConfirmInfo implements IS2C_ConfirmInfo {

        /**
         * Constructs a new S2C_ConfirmInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IS2C_ConfirmInfo);

        /** S2C_ConfirmInfo msgHead. */
        public msgHead: number;

        /** S2C_ConfirmInfo code. */
        public code: number;

        /**
         * Creates a new S2C_ConfirmInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_ConfirmInfo instance
         */
        public static create(properties?: gameproto.IS2C_ConfirmInfo): gameproto.S2C_ConfirmInfo;

        /**
         * Encodes the specified S2C_ConfirmInfo message. Does not implicitly {@link gameproto.S2C_ConfirmInfo.verify|verify} messages.
         * @param message S2C_ConfirmInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IS2C_ConfirmInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_ConfirmInfo message, length delimited. Does not implicitly {@link gameproto.S2C_ConfirmInfo.verify|verify} messages.
         * @param message S2C_ConfirmInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IS2C_ConfirmInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_ConfirmInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_ConfirmInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.S2C_ConfirmInfo;

        /**
         * Decodes a S2C_ConfirmInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_ConfirmInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.S2C_ConfirmInfo;

        /**
         * Verifies a S2C_ConfirmInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_ConfirmInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_ConfirmInfo
         */
        public static fromObject(object: { [k: string]: any }): gameproto.S2C_ConfirmInfo;

        /**
         * Creates a plain object from a S2C_ConfirmInfo message. Also converts values to other types if specified.
         * @param message S2C_ConfirmInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.S2C_ConfirmInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_ConfirmInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BattleType enum. */
    enum BattleType {
        PVE = 0,
        PVP = 1
    }
}
