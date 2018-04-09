
/** Namespace gameproto. */
export namespace gameproto {

    /** ChatMsgType enum. */
    enum ChatMsgType {
        C2S_PrivateChat = 0,
        S2C_PrivateChat = 1,
        S2C_PrivateOtherChat = 2,
        C2S_WorldChat = 3,
        S2C_WorldChat = 4
    }

    /** Properties of a C2S_PrivateChatMsg. */
    interface IC2S_PrivateChatMsg {

        /** C2S_PrivateChatMsg targetName */
        targetName?: (string|null);

        /** C2S_PrivateChatMsg msg */
        msg?: (string|null);
    }

    /** Represents a C2S_PrivateChatMsg. */
    class C2S_PrivateChatMsg implements IC2S_PrivateChatMsg {

        /**
         * Constructs a new C2S_PrivateChatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC2S_PrivateChatMsg);

        /** C2S_PrivateChatMsg targetName. */
        public targetName: string;

        /** C2S_PrivateChatMsg msg. */
        public msg: string;

        /**
         * Creates a new C2S_PrivateChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_PrivateChatMsg instance
         */
        public static create(properties?: gameproto.IC2S_PrivateChatMsg): gameproto.C2S_PrivateChatMsg;

        /**
         * Encodes the specified C2S_PrivateChatMsg message. Does not implicitly {@link gameproto.C2S_PrivateChatMsg.verify|verify} messages.
         * @param message C2S_PrivateChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC2S_PrivateChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_PrivateChatMsg message, length delimited. Does not implicitly {@link gameproto.C2S_PrivateChatMsg.verify|verify} messages.
         * @param message C2S_PrivateChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC2S_PrivateChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_PrivateChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_PrivateChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C2S_PrivateChatMsg;

        /**
         * Decodes a C2S_PrivateChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_PrivateChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C2S_PrivateChatMsg;

        /**
         * Verifies a C2S_PrivateChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_PrivateChatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_PrivateChatMsg
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C2S_PrivateChatMsg;

        /**
         * Creates a plain object from a C2S_PrivateChatMsg message. Also converts values to other types if specified.
         * @param message C2S_PrivateChatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C2S_PrivateChatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_PrivateChatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_PrivateChatMsg. */
    interface IS2C_PrivateChatMsg {

        /** S2C_PrivateChatMsg targetName */
        targetName?: (string|null);

        /** S2C_PrivateChatMsg msg */
        msg?: (string|null);

        /** S2C_PrivateChatMsg result */
        result?: (number|null);
    }

    /** Represents a S2C_PrivateChatMsg. */
    class S2C_PrivateChatMsg implements IS2C_PrivateChatMsg {

        /**
         * Constructs a new S2C_PrivateChatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IS2C_PrivateChatMsg);

        /** S2C_PrivateChatMsg targetName. */
        public targetName: string;

        /** S2C_PrivateChatMsg msg. */
        public msg: string;

        /** S2C_PrivateChatMsg result. */
        public result: number;

        /**
         * Creates a new S2C_PrivateChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_PrivateChatMsg instance
         */
        public static create(properties?: gameproto.IS2C_PrivateChatMsg): gameproto.S2C_PrivateChatMsg;

        /**
         * Encodes the specified S2C_PrivateChatMsg message. Does not implicitly {@link gameproto.S2C_PrivateChatMsg.verify|verify} messages.
         * @param message S2C_PrivateChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IS2C_PrivateChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_PrivateChatMsg message, length delimited. Does not implicitly {@link gameproto.S2C_PrivateChatMsg.verify|verify} messages.
         * @param message S2C_PrivateChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IS2C_PrivateChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_PrivateChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_PrivateChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.S2C_PrivateChatMsg;

        /**
         * Decodes a S2C_PrivateChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_PrivateChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.S2C_PrivateChatMsg;

        /**
         * Verifies a S2C_PrivateChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_PrivateChatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_PrivateChatMsg
         */
        public static fromObject(object: { [k: string]: any }): gameproto.S2C_PrivateChatMsg;

        /**
         * Creates a plain object from a S2C_PrivateChatMsg message. Also converts values to other types if specified.
         * @param message S2C_PrivateChatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.S2C_PrivateChatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_PrivateChatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_PrivateOtherChatMsg. */
    interface IS2C_PrivateOtherChatMsg {

        /** S2C_PrivateOtherChatMsg sendName */
        sendName?: (string|null);

        /** S2C_PrivateOtherChatMsg msg */
        msg?: (string|null);
    }

    /** Represents a S2C_PrivateOtherChatMsg. */
    class S2C_PrivateOtherChatMsg implements IS2C_PrivateOtherChatMsg {

        /**
         * Constructs a new S2C_PrivateOtherChatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IS2C_PrivateOtherChatMsg);

        /** S2C_PrivateOtherChatMsg sendName. */
        public sendName: string;

        /** S2C_PrivateOtherChatMsg msg. */
        public msg: string;

        /**
         * Creates a new S2C_PrivateOtherChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_PrivateOtherChatMsg instance
         */
        public static create(properties?: gameproto.IS2C_PrivateOtherChatMsg): gameproto.S2C_PrivateOtherChatMsg;

        /**
         * Encodes the specified S2C_PrivateOtherChatMsg message. Does not implicitly {@link gameproto.S2C_PrivateOtherChatMsg.verify|verify} messages.
         * @param message S2C_PrivateOtherChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IS2C_PrivateOtherChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_PrivateOtherChatMsg message, length delimited. Does not implicitly {@link gameproto.S2C_PrivateOtherChatMsg.verify|verify} messages.
         * @param message S2C_PrivateOtherChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IS2C_PrivateOtherChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_PrivateOtherChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_PrivateOtherChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.S2C_PrivateOtherChatMsg;

        /**
         * Decodes a S2C_PrivateOtherChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_PrivateOtherChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.S2C_PrivateOtherChatMsg;

        /**
         * Verifies a S2C_PrivateOtherChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_PrivateOtherChatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_PrivateOtherChatMsg
         */
        public static fromObject(object: { [k: string]: any }): gameproto.S2C_PrivateOtherChatMsg;

        /**
         * Creates a plain object from a S2C_PrivateOtherChatMsg message. Also converts values to other types if specified.
         * @param message S2C_PrivateOtherChatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.S2C_PrivateOtherChatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_PrivateOtherChatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_WorldChatMsg. */
    interface IC2S_WorldChatMsg {

        /** C2S_WorldChatMsg data */
        data?: (string|null);
    }

    /** Represents a C2S_WorldChatMsg. */
    class C2S_WorldChatMsg implements IC2S_WorldChatMsg {

        /**
         * Constructs a new C2S_WorldChatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC2S_WorldChatMsg);

        /** C2S_WorldChatMsg data. */
        public data: string;

        /**
         * Creates a new C2S_WorldChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_WorldChatMsg instance
         */
        public static create(properties?: gameproto.IC2S_WorldChatMsg): gameproto.C2S_WorldChatMsg;

        /**
         * Encodes the specified C2S_WorldChatMsg message. Does not implicitly {@link gameproto.C2S_WorldChatMsg.verify|verify} messages.
         * @param message C2S_WorldChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC2S_WorldChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_WorldChatMsg message, length delimited. Does not implicitly {@link gameproto.C2S_WorldChatMsg.verify|verify} messages.
         * @param message C2S_WorldChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC2S_WorldChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_WorldChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_WorldChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C2S_WorldChatMsg;

        /**
         * Decodes a C2S_WorldChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_WorldChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C2S_WorldChatMsg;

        /**
         * Verifies a C2S_WorldChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_WorldChatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_WorldChatMsg
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C2S_WorldChatMsg;

        /**
         * Creates a plain object from a C2S_WorldChatMsg message. Also converts values to other types if specified.
         * @param message C2S_WorldChatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C2S_WorldChatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_WorldChatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_WorldChatMsg. */
    interface IS2C_WorldChatMsg {

        /** S2C_WorldChatMsg name */
        name?: (string|null);

        /** S2C_WorldChatMsg data */
        data?: (string|null);
    }

    /** Represents a S2C_WorldChatMsg. */
    class S2C_WorldChatMsg implements IS2C_WorldChatMsg {

        /**
         * Constructs a new S2C_WorldChatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IS2C_WorldChatMsg);

        /** S2C_WorldChatMsg name. */
        public name: string;

        /** S2C_WorldChatMsg data. */
        public data: string;

        /**
         * Creates a new S2C_WorldChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_WorldChatMsg instance
         */
        public static create(properties?: gameproto.IS2C_WorldChatMsg): gameproto.S2C_WorldChatMsg;

        /**
         * Encodes the specified S2C_WorldChatMsg message. Does not implicitly {@link gameproto.S2C_WorldChatMsg.verify|verify} messages.
         * @param message S2C_WorldChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IS2C_WorldChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_WorldChatMsg message, length delimited. Does not implicitly {@link gameproto.S2C_WorldChatMsg.verify|verify} messages.
         * @param message S2C_WorldChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IS2C_WorldChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_WorldChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_WorldChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.S2C_WorldChatMsg;

        /**
         * Decodes a S2C_WorldChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_WorldChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.S2C_WorldChatMsg;

        /**
         * Verifies a S2C_WorldChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_WorldChatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_WorldChatMsg
         */
        public static fromObject(object: { [k: string]: any }): gameproto.S2C_WorldChatMsg;

        /**
         * Creates a plain object from a S2C_WorldChatMsg message. Also converts values to other types if specified.
         * @param message S2C_WorldChatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.S2C_WorldChatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_WorldChatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ReviseUserInfo. */
    interface IS_ReviseUserInfo {

        /** S_ReviseUserInfo nickname */
        nickname?: (string|null);

        /** S_ReviseUserInfo headId */
        headId?: (number|null);
    }

    /** Represents a S_ReviseUserInfo. */
    class S_ReviseUserInfo implements IS_ReviseUserInfo {

        /**
         * Constructs a new S_ReviseUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IS_ReviseUserInfo);

        /** S_ReviseUserInfo nickname. */
        public nickname: string;

        /** S_ReviseUserInfo headId. */
        public headId: number;

        /**
         * Creates a new S_ReviseUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReviseUserInfo instance
         */
        public static create(properties?: gameproto.IS_ReviseUserInfo): gameproto.S_ReviseUserInfo;

        /**
         * Encodes the specified S_ReviseUserInfo message. Does not implicitly {@link gameproto.S_ReviseUserInfo.verify|verify} messages.
         * @param message S_ReviseUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IS_ReviseUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ReviseUserInfo message, length delimited. Does not implicitly {@link gameproto.S_ReviseUserInfo.verify|verify} messages.
         * @param message S_ReviseUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IS_ReviseUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReviseUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ReviseUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.S_ReviseUserInfo;

        /**
         * Decodes a S_ReviseUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ReviseUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.S_ReviseUserInfo;

        /**
         * Verifies a S_ReviseUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ReviseUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ReviseUserInfo
         */
        public static fromObject(object: { [k: string]: any }): gameproto.S_ReviseUserInfo;

        /**
         * Creates a plain object from a S_ReviseUserInfo message. Also converts values to other types if specified.
         * @param message S_ReviseUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.S_ReviseUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ReviseUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_Response. */
    interface IC_Response {

        /** C_Response errCode */
        errCode?: (number|null);

        /** C_Response msg */
        msg?: (string|null);
    }

    /** Represents a C_Response. */
    class C_Response implements IC_Response {

        /**
         * Constructs a new C_Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC_Response);

        /** C_Response errCode. */
        public errCode: number;

        /** C_Response msg. */
        public msg: string;

        /**
         * Creates a new C_Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_Response instance
         */
        public static create(properties?: gameproto.IC_Response): gameproto.C_Response;

        /**
         * Encodes the specified C_Response message. Does not implicitly {@link gameproto.C_Response.verify|verify} messages.
         * @param message C_Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC_Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_Response message, length delimited. Does not implicitly {@link gameproto.C_Response.verify|verify} messages.
         * @param message C_Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC_Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C_Response;

        /**
         * Decodes a C_Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C_Response;

        /**
         * Verifies a C_Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_Response
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C_Response;

        /**
         * Creates a plain object from a C_Response message. Also converts values to other types if specified.
         * @param message C_Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_UpateAttr. */
    interface IC_UpateAttr {

        /** C_UpateAttr key */
        key?: (string|null);

        /** C_UpateAttr val */
        val?: (number|Long|null);
    }

    /** Represents a C_UpateAttr. */
    class C_UpateAttr implements IC_UpateAttr {

        /**
         * Constructs a new C_UpateAttr.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC_UpateAttr);

        /** C_UpateAttr key. */
        public key: string;

        /** C_UpateAttr val. */
        public val: (number|Long);

        /**
         * Creates a new C_UpateAttr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_UpateAttr instance
         */
        public static create(properties?: gameproto.IC_UpateAttr): gameproto.C_UpateAttr;

        /**
         * Encodes the specified C_UpateAttr message. Does not implicitly {@link gameproto.C_UpateAttr.verify|verify} messages.
         * @param message C_UpateAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC_UpateAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_UpateAttr message, length delimited. Does not implicitly {@link gameproto.C_UpateAttr.verify|verify} messages.
         * @param message C_UpateAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC_UpateAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_UpateAttr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_UpateAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C_UpateAttr;

        /**
         * Decodes a C_UpateAttr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_UpateAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C_UpateAttr;

        /**
         * Verifies a C_UpateAttr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_UpateAttr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_UpateAttr
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C_UpateAttr;

        /**
         * Creates a plain object from a C_UpateAttr message. Also converts values to other types if specified.
         * @param message C_UpateAttr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C_UpateAttr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_UpateAttr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_RequestBattle. */
    interface IS_RequestBattle {

        /** S_RequestBattle stageId */
        stageId?: (number|null);

        /** S_RequestBattle battleType */
        battleType?: (number|null);
    }

    /** Represents a S_RequestBattle. */
    class S_RequestBattle implements IS_RequestBattle {

        /**
         * Constructs a new S_RequestBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IS_RequestBattle);

        /** S_RequestBattle stageId. */
        public stageId: number;

        /** S_RequestBattle battleType. */
        public battleType: number;

        /**
         * Creates a new S_RequestBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RequestBattle instance
         */
        public static create(properties?: gameproto.IS_RequestBattle): gameproto.S_RequestBattle;

        /**
         * Encodes the specified S_RequestBattle message. Does not implicitly {@link gameproto.S_RequestBattle.verify|verify} messages.
         * @param message S_RequestBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IS_RequestBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_RequestBattle message, length delimited. Does not implicitly {@link gameproto.S_RequestBattle.verify|verify} messages.
         * @param message S_RequestBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IS_RequestBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RequestBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_RequestBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.S_RequestBattle;

        /**
         * Decodes a S_RequestBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_RequestBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.S_RequestBattle;

        /**
         * Verifies a S_RequestBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_RequestBattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_RequestBattle
         */
        public static fromObject(object: { [k: string]: any }): gameproto.S_RequestBattle;

        /**
         * Creates a plain object from a S_RequestBattle message. Also converts values to other types if specified.
         * @param message S_RequestBattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.S_RequestBattle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_RequestBattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_RequestBattle. */
    interface IC_RequestBattle {

        /** C_RequestBattle stageId */
        stageId?: (number|null);

        /** C_RequestBattle battleType */
        battleType?: (number|null);

        /** C_RequestBattle errCode */
        errCode?: (number|null);
    }

    /** Represents a C_RequestBattle. */
    class C_RequestBattle implements IC_RequestBattle {

        /**
         * Constructs a new C_RequestBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC_RequestBattle);

        /** C_RequestBattle stageId. */
        public stageId: number;

        /** C_RequestBattle battleType. */
        public battleType: number;

        /** C_RequestBattle errCode. */
        public errCode: number;

        /**
         * Creates a new C_RequestBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_RequestBattle instance
         */
        public static create(properties?: gameproto.IC_RequestBattle): gameproto.C_RequestBattle;

        /**
         * Encodes the specified C_RequestBattle message. Does not implicitly {@link gameproto.C_RequestBattle.verify|verify} messages.
         * @param message C_RequestBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC_RequestBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_RequestBattle message, length delimited. Does not implicitly {@link gameproto.C_RequestBattle.verify|verify} messages.
         * @param message C_RequestBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC_RequestBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_RequestBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_RequestBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C_RequestBattle;

        /**
         * Decodes a C_RequestBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_RequestBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C_RequestBattle;

        /**
         * Verifies a C_RequestBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_RequestBattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_RequestBattle
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C_RequestBattle;

        /**
         * Creates a plain object from a C_RequestBattle message. Also converts values to other types if specified.
         * @param message C_RequestBattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C_RequestBattle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_RequestBattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_StartBattle. */
    interface IC_StartBattle {

        /** C_StartBattle stageId */
        stageId?: (number|null);

        /** C_StartBattle battleType */
        battleType?: (number|null);

        /** C_StartBattle roomId */
        roomId?: (string|null);
    }

    /** Represents a C_StartBattle. */
    class C_StartBattle implements IC_StartBattle {

        /**
         * Constructs a new C_StartBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC_StartBattle);

        /** C_StartBattle stageId. */
        public stageId: number;

        /** C_StartBattle battleType. */
        public battleType: number;

        /** C_StartBattle roomId. */
        public roomId: string;

        /**
         * Creates a new C_StartBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_StartBattle instance
         */
        public static create(properties?: gameproto.IC_StartBattle): gameproto.C_StartBattle;

        /**
         * Encodes the specified C_StartBattle message. Does not implicitly {@link gameproto.C_StartBattle.verify|verify} messages.
         * @param message C_StartBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC_StartBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_StartBattle message, length delimited. Does not implicitly {@link gameproto.C_StartBattle.verify|verify} messages.
         * @param message C_StartBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC_StartBattle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_StartBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_StartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C_StartBattle;

        /**
         * Decodes a C_StartBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_StartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C_StartBattle;

        /**
         * Verifies a C_StartBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_StartBattle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_StartBattle
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C_StartBattle;

        /**
         * Creates a plain object from a C_StartBattle message. Also converts values to other types if specified.
         * @param message C_StartBattle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C_StartBattle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_StartBattle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_Balance. */
    interface IC_Balance {

        /** C_Balance stageId */
        stageId?: (number|null);

        /** C_Balance battleType */
        battleType?: (number|null);

        /** C_Balance awards */
        awards?: (gameproto.IAward[]|null);
    }

    /** Represents a C_Balance. */
    class C_Balance implements IC_Balance {

        /**
         * Constructs a new C_Balance.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IC_Balance);

        /** C_Balance stageId. */
        public stageId: number;

        /** C_Balance battleType. */
        public battleType: number;

        /** C_Balance awards. */
        public awards: gameproto.IAward[];

        /**
         * Creates a new C_Balance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_Balance instance
         */
        public static create(properties?: gameproto.IC_Balance): gameproto.C_Balance;

        /**
         * Encodes the specified C_Balance message. Does not implicitly {@link gameproto.C_Balance.verify|verify} messages.
         * @param message C_Balance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IC_Balance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_Balance message, length delimited. Does not implicitly {@link gameproto.C_Balance.verify|verify} messages.
         * @param message C_Balance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IC_Balance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_Balance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_Balance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.C_Balance;

        /**
         * Decodes a C_Balance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_Balance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.C_Balance;

        /**
         * Verifies a C_Balance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_Balance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_Balance
         */
        public static fromObject(object: { [k: string]: any }): gameproto.C_Balance;

        /**
         * Creates a plain object from a C_Balance message. Also converts values to other types if specified.
         * @param message C_Balance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.C_Balance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_Balance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Award. */
    interface IAward {

        /** Award aType */
        aType?: (number|null);

        /** Award aVal */
        aVal?: (number|null);
    }

    /** Represents an Award. */
    class Award implements IAward {

        /**
         * Constructs a new Award.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IAward);

        /** Award aType. */
        public aType: number;

        /** Award aVal. */
        public aVal: number;

        /**
         * Creates a new Award instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Award instance
         */
        public static create(properties?: gameproto.IAward): gameproto.Award;

        /**
         * Encodes the specified Award message. Does not implicitly {@link gameproto.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Award message, length delimited. Does not implicitly {@link gameproto.Award.verify|verify} messages.
         * @param message Award message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Award message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.Award;

        /**
         * Decodes an Award message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Award
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.Award;

        /**
         * Verifies an Award message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Award message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Award
         */
        public static fromObject(object: { [k: string]: any }): gameproto.Award;

        /**
         * Creates a plain object from an Award message. Also converts values to other types if specified.
         * @param message Award
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.Award, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Award to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FVector. */
    interface IFVector {

        /** FVector x */
        x?: (number|null);

        /** FVector y */
        y?: (number|null);
    }

    /** Represents a FVector. */
    class FVector implements IFVector {

        /**
         * Constructs a new FVector.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IFVector);

        /** FVector x. */
        public x: number;

        /** FVector y. */
        public y: number;

        /**
         * Creates a new FVector instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FVector instance
         */
        public static create(properties?: gameproto.IFVector): gameproto.FVector;

        /**
         * Encodes the specified FVector message. Does not implicitly {@link gameproto.FVector.verify|verify} messages.
         * @param message FVector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IFVector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FVector message, length delimited. Does not implicitly {@link gameproto.FVector.verify|verify} messages.
         * @param message FVector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IFVector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FVector message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FVector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.FVector;

        /**
         * Decodes a FVector message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FVector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.FVector;

        /**
         * Verifies a FVector message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FVector message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FVector
         */
        public static fromObject(object: { [k: string]: any }): gameproto.FVector;

        /**
         * Creates a plain object from a FVector message. Also converts values to other types if specified.
         * @param message FVector
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.FVector, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FVector to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Move. */
    interface IMove {

        /** Move angle */
        angle?: (number|null);
    }

    /** Represents a Move. */
    class Move implements IMove {

        /**
         * Constructs a new Move.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IMove);

        /** Move angle. */
        public angle: number;

        /**
         * Creates a new Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Move instance
         */
        public static create(properties?: gameproto.IMove): gameproto.Move;

        /**
         * Encodes the specified Move message. Does not implicitly {@link gameproto.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link gameproto.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.Move;

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.Move;

        /**
         * Verifies a Move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Move
         */
        public static fromObject(object: { [k: string]: any }): gameproto.Move;

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @param message Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Shot. */
    interface IShot {

        /** Shot id */
        id?: (number|null);

        /** Shot bulletId */
        bulletId?: (number|null);

        /** Shot pos */
        pos?: (gameproto.IFVector|null);

        /** Shot angel */
        angel?: (number|null);
    }

    /** Represents a Shot. */
    class Shot implements IShot {

        /**
         * Constructs a new Shot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IShot);

        /** Shot id. */
        public id: number;

        /** Shot bulletId. */
        public bulletId: number;

        /** Shot pos. */
        public pos?: (gameproto.IFVector|null);

        /** Shot angel. */
        public angel: number;

        /**
         * Creates a new Shot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Shot instance
         */
        public static create(properties?: gameproto.IShot): gameproto.Shot;

        /**
         * Encodes the specified Shot message. Does not implicitly {@link gameproto.Shot.verify|verify} messages.
         * @param message Shot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IShot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Shot message, length delimited. Does not implicitly {@link gameproto.Shot.verify|verify} messages.
         * @param message Shot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IShot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Shot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Shot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.Shot;

        /**
         * Decodes a Shot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Shot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.Shot;

        /**
         * Verifies a Shot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Shot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Shot
         */
        public static fromObject(object: { [k: string]: any }): gameproto.Shot;

        /**
         * Creates a plain object from a Shot message. Also converts values to other types if specified.
         * @param message Shot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.Shot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Shot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UseItem. */
    interface IUseItem {

        /** UseItem itemId */
        itemId?: (number|null);
    }

    /** Represents a UseItem. */
    class UseItem implements IUseItem {

        /**
         * Constructs a new UseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IUseItem);

        /** UseItem itemId. */
        public itemId: number;

        /**
         * Creates a new UseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseItem instance
         */
        public static create(properties?: gameproto.IUseItem): gameproto.UseItem;

        /**
         * Encodes the specified UseItem message. Does not implicitly {@link gameproto.UseItem.verify|verify} messages.
         * @param message UseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UseItem message, length delimited. Does not implicitly {@link gameproto.UseItem.verify|verify} messages.
         * @param message UseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.UseItem;

        /**
         * Decodes a UseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.UseItem;

        /**
         * Verifies a UseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseItem
         */
        public static fromObject(object: { [k: string]: any }): gameproto.UseItem;

        /**
         * Creates a plain object from a UseItem message. Also converts values to other types if specified.
         * @param message UseItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.UseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FighterSnapInfo. */
    interface IFighterSnapInfo {

        /** FighterSnapInfo id */
        id?: (number|null);

        /** FighterSnapInfo pos */
        pos?: (gameproto.IFVector|null);

        /** FighterSnapInfo vel */
        vel?: (gameproto.IFVector|null);
    }

    /** Represents a FighterSnapInfo. */
    class FighterSnapInfo implements IFighterSnapInfo {

        /**
         * Constructs a new FighterSnapInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IFighterSnapInfo);

        /** FighterSnapInfo id. */
        public id: number;

        /** FighterSnapInfo pos. */
        public pos?: (gameproto.IFVector|null);

        /** FighterSnapInfo vel. */
        public vel?: (gameproto.IFVector|null);

        /**
         * Creates a new FighterSnapInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FighterSnapInfo instance
         */
        public static create(properties?: gameproto.IFighterSnapInfo): gameproto.FighterSnapInfo;

        /**
         * Encodes the specified FighterSnapInfo message. Does not implicitly {@link gameproto.FighterSnapInfo.verify|verify} messages.
         * @param message FighterSnapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IFighterSnapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FighterSnapInfo message, length delimited. Does not implicitly {@link gameproto.FighterSnapInfo.verify|verify} messages.
         * @param message FighterSnapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IFighterSnapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FighterSnapInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FighterSnapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.FighterSnapInfo;

        /**
         * Decodes a FighterSnapInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FighterSnapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.FighterSnapInfo;

        /**
         * Verifies a FighterSnapInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FighterSnapInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FighterSnapInfo
         */
        public static fromObject(object: { [k: string]: any }): gameproto.FighterSnapInfo;

        /**
         * Creates a plain object from a FighterSnapInfo message. Also converts values to other types if specified.
         * @param message FighterSnapInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.FighterSnapInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FighterSnapInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Snap. */
    interface ISnap {

        /** Snap infos */
        infos?: (gameproto.IFighterSnapInfo[]|null);
    }

    /** Represents a Snap. */
    class Snap implements ISnap {

        /**
         * Constructs a new Snap.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.ISnap);

        /** Snap infos. */
        public infos: gameproto.IFighterSnapInfo[];

        /**
         * Creates a new Snap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Snap instance
         */
        public static create(properties?: gameproto.ISnap): gameproto.Snap;

        /**
         * Encodes the specified Snap message. Does not implicitly {@link gameproto.Snap.verify|verify} messages.
         * @param message Snap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.ISnap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Snap message, length delimited. Does not implicitly {@link gameproto.Snap.verify|verify} messages.
         * @param message Snap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.ISnap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Snap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Snap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.Snap;

        /**
         * Decodes a Snap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Snap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.Snap;

        /**
         * Verifies a Snap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Snap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Snap
         */
        public static fromObject(object: { [k: string]: any }): gameproto.Snap;

        /**
         * Creates a plain object from a Snap message. Also converts values to other types if specified.
         * @param message Snap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.Snap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Snap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FighterInfo. */
    interface IFighterInfo {

        /** FighterInfo id */
        id?: (number|null);

        /** FighterInfo pos */
        pos?: (gameproto.IFVector|null);

        /** FighterInfo vel */
        vel?: (gameproto.IFVector|null);

        /** FighterInfo name */
        name?: (string|null);

        /** FighterInfo hp */
        hp?: (number|null);
    }

    /** Represents a FighterInfo. */
    class FighterInfo implements IFighterInfo {

        /**
         * Constructs a new FighterInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IFighterInfo);

        /** FighterInfo id. */
        public id: number;

        /** FighterInfo pos. */
        public pos?: (gameproto.IFVector|null);

        /** FighterInfo vel. */
        public vel?: (gameproto.IFVector|null);

        /** FighterInfo name. */
        public name: string;

        /** FighterInfo hp. */
        public hp: number;

        /**
         * Creates a new FighterInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FighterInfo instance
         */
        public static create(properties?: gameproto.IFighterInfo): gameproto.FighterInfo;

        /**
         * Encodes the specified FighterInfo message. Does not implicitly {@link gameproto.FighterInfo.verify|verify} messages.
         * @param message FighterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IFighterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FighterInfo message, length delimited. Does not implicitly {@link gameproto.FighterInfo.verify|verify} messages.
         * @param message FighterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IFighterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FighterInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FighterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.FighterInfo;

        /**
         * Decodes a FighterInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FighterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.FighterInfo;

        /**
         * Verifies a FighterInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FighterInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FighterInfo
         */
        public static fromObject(object: { [k: string]: any }): gameproto.FighterInfo;

        /**
         * Creates a plain object from a FighterInfo message. Also converts values to other types if specified.
         * @param message FighterInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.FighterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FighterInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleStart. */
    interface IBattleStart {

        /** BattleStart self */
        self?: (gameproto.IFighterInfo|null);

        /** BattleStart fighters */
        fighters?: (gameproto.IFighterInfo[]|null);
    }

    /** Represents a BattleStart. */
    class BattleStart implements IBattleStart {

        /**
         * Constructs a new BattleStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IBattleStart);

        /** BattleStart self. */
        public self?: (gameproto.IFighterInfo|null);

        /** BattleStart fighters. */
        public fighters: gameproto.IFighterInfo[];

        /**
         * Creates a new BattleStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleStart instance
         */
        public static create(properties?: gameproto.IBattleStart): gameproto.BattleStart;

        /**
         * Encodes the specified BattleStart message. Does not implicitly {@link gameproto.BattleStart.verify|verify} messages.
         * @param message BattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IBattleStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleStart message, length delimited. Does not implicitly {@link gameproto.BattleStart.verify|verify} messages.
         * @param message BattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IBattleStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.BattleStart;

        /**
         * Decodes a BattleStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.BattleStart;

        /**
         * Verifies a BattleStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleStart
         */
        public static fromObject(object: { [k: string]: any }): gameproto.BattleStart;

        /**
         * Creates a plain object from a BattleStart message. Also converts values to other types if specified.
         * @param message BattleStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.BattleStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewStage. */
    interface INewStage {

        /** NewStage stage */
        stage?: (number|null);

        /** NewStage fighters */
        fighters?: (gameproto.IFighterInfo[]|null);
    }

    /** Represents a NewStage. */
    class NewStage implements INewStage {

        /**
         * Constructs a new NewStage.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.INewStage);

        /** NewStage stage. */
        public stage: number;

        /** NewStage fighters. */
        public fighters: gameproto.IFighterInfo[];

        /**
         * Creates a new NewStage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewStage instance
         */
        public static create(properties?: gameproto.INewStage): gameproto.NewStage;

        /**
         * Encodes the specified NewStage message. Does not implicitly {@link gameproto.NewStage.verify|verify} messages.
         * @param message NewStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.INewStage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewStage message, length delimited. Does not implicitly {@link gameproto.NewStage.verify|verify} messages.
         * @param message NewStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.INewStage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewStage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.NewStage;

        /**
         * Decodes a NewStage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.NewStage;

        /**
         * Verifies a NewStage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewStage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewStage
         */
        public static fromObject(object: { [k: string]: any }): gameproto.NewStage;

        /**
         * Creates a plain object from a NewStage message. Also converts values to other types if specified.
         * @param message NewStage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.NewStage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewStage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameOver. */
    interface IGameOver {

        /** GameOver winner */
        winner?: (number|null);

        /** GameOver time */
        time?: (number|null);

        /** GameOver stage */
        stage?: (number|null);

        /** GameOver kill */
        kill?: (number|null);
    }

    /** Represents a GameOver. */
    class GameOver implements IGameOver {

        /**
         * Constructs a new GameOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IGameOver);

        /** GameOver winner. */
        public winner: number;

        /** GameOver time. */
        public time: number;

        /** GameOver stage. */
        public stage: number;

        /** GameOver kill. */
        public kill: number;

        /**
         * Creates a new GameOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOver instance
         */
        public static create(properties?: gameproto.IGameOver): gameproto.GameOver;

        /**
         * Encodes the specified GameOver message. Does not implicitly {@link gameproto.GameOver.verify|verify} messages.
         * @param message GameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameOver message, length delimited. Does not implicitly {@link gameproto.GameOver.verify|verify} messages.
         * @param message GameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.GameOver;

        /**
         * Decodes a GameOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.GameOver;

        /**
         * Verifies a GameOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameOver
         */
        public static fromObject(object: { [k: string]: any }): gameproto.GameOver;

        /**
         * Creates a plain object from a GameOver message. Also converts values to other types if specified.
         * @param message GameOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.GameOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hit. */
    interface IHit {

        /** Hit bulletId */
        bulletId?: (number|null);

        /** Hit targetId */
        targetId?: (number|null);

        /** Hit loseHP */
        loseHP?: (number|null);
    }

    /** Represents a Hit. */
    class Hit implements IHit {

        /**
         * Constructs a new Hit.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IHit);

        /** Hit bulletId. */
        public bulletId: number;

        /** Hit targetId. */
        public targetId: number;

        /** Hit loseHP. */
        public loseHP: number;

        /**
         * Creates a new Hit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hit instance
         */
        public static create(properties?: gameproto.IHit): gameproto.Hit;

        /**
         * Encodes the specified Hit message. Does not implicitly {@link gameproto.Hit.verify|verify} messages.
         * @param message Hit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IHit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hit message, length delimited. Does not implicitly {@link gameproto.Hit.verify|verify} messages.
         * @param message Hit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IHit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.Hit;

        /**
         * Decodes a Hit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.Hit;

        /**
         * Verifies a Hit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hit
         */
        public static fromObject(object: { [k: string]: any }): gameproto.Hit;

        /**
         * Creates a plain object from a Hit message. Also converts values to other types if specified.
         * @param message Hit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.Hit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Dead. */
    interface IDead {

        /** Dead id */
        id?: (number|null);

        /** Dead enemyId */
        enemyId?: (number|null);
    }

    /** Represents a Dead. */
    class Dead implements IDead {

        /**
         * Constructs a new Dead.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IDead);

        /** Dead id. */
        public id: number;

        /** Dead enemyId. */
        public enemyId: number;

        /**
         * Creates a new Dead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Dead instance
         */
        public static create(properties?: gameproto.IDead): gameproto.Dead;

        /**
         * Encodes the specified Dead message. Does not implicitly {@link gameproto.Dead.verify|verify} messages.
         * @param message Dead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IDead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Dead message, length delimited. Does not implicitly {@link gameproto.Dead.verify|verify} messages.
         * @param message Dead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IDead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Dead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Dead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.Dead;

        /**
         * Decodes a Dead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Dead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.Dead;

        /**
         * Verifies a Dead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Dead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Dead
         */
        public static fromObject(object: { [k: string]: any }): gameproto.Dead;

        /**
         * Creates a plain object from a Dead message. Also converts values to other types if specified.
         * @param message Dead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.Dead, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Dead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddEntity. */
    interface IAddEntity {

        /** AddEntity id */
        id?: (number|null);

        /** AddEntity pos */
        pos?: (gameproto.IFVector|null);

        /** AddEntity vel */
        vel?: (gameproto.IFVector|null);

        /** AddEntity etype */
        etype?: (number|null);
    }

    /** Represents an AddEntity. */
    class AddEntity implements IAddEntity {

        /**
         * Constructs a new AddEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IAddEntity);

        /** AddEntity id. */
        public id: number;

        /** AddEntity pos. */
        public pos?: (gameproto.IFVector|null);

        /** AddEntity vel. */
        public vel?: (gameproto.IFVector|null);

        /** AddEntity etype. */
        public etype: number;

        /**
         * Creates a new AddEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddEntity instance
         */
        public static create(properties?: gameproto.IAddEntity): gameproto.AddEntity;

        /**
         * Encodes the specified AddEntity message. Does not implicitly {@link gameproto.AddEntity.verify|verify} messages.
         * @param message AddEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IAddEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddEntity message, length delimited. Does not implicitly {@link gameproto.AddEntity.verify|verify} messages.
         * @param message AddEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IAddEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.AddEntity;

        /**
         * Decodes an AddEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.AddEntity;

        /**
         * Verifies an AddEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddEntity
         */
        public static fromObject(object: { [k: string]: any }): gameproto.AddEntity;

        /**
         * Creates a plain object from an AddEntity message. Also converts values to other types if specified.
         * @param message AddEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.AddEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RemoveEntity. */
    interface IRemoveEntity {

        /** RemoveEntity id */
        id?: (number|null);

        /** RemoveEntity etype */
        etype?: (number|null);
    }

    /** Represents a RemoveEntity. */
    class RemoveEntity implements IRemoveEntity {

        /**
         * Constructs a new RemoveEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IRemoveEntity);

        /** RemoveEntity id. */
        public id: number;

        /** RemoveEntity etype. */
        public etype: number;

        /**
         * Creates a new RemoveEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveEntity instance
         */
        public static create(properties?: gameproto.IRemoveEntity): gameproto.RemoveEntity;

        /**
         * Encodes the specified RemoveEntity message. Does not implicitly {@link gameproto.RemoveEntity.verify|verify} messages.
         * @param message RemoveEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IRemoveEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveEntity message, length delimited. Does not implicitly {@link gameproto.RemoveEntity.verify|verify} messages.
         * @param message RemoveEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IRemoveEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.RemoveEntity;

        /**
         * Decodes a RemoveEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.RemoveEntity;

        /**
         * Verifies a RemoveEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveEntity
         */
        public static fromObject(object: { [k: string]: any }): gameproto.RemoveEntity;

        /**
         * Creates a plain object from a RemoveEntity message. Also converts values to other types if specified.
         * @param message RemoveEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.RemoveEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
