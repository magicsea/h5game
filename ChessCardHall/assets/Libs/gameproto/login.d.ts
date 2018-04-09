
/** Namespace gameproto. */
export namespace gameproto {

    /** Properties of a UserLoginResult. */
    interface IUserLoginResult {

        /** UserLoginResult uid */
        uid?: (number|null);

        /** UserLoginResult gateTcpAddr */
        gateTcpAddr?: (string|null);

        /** UserLoginResult gateWsAddr */
        gateWsAddr?: (string|null);

        /** UserLoginResult key */
        key?: (string|null);

        /** UserLoginResult result */
        result?: (number|null);
    }

    /** Represents a UserLoginResult. */
    class UserLoginResult implements IUserLoginResult {

        /**
         * Constructs a new UserLoginResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IUserLoginResult);

        /** UserLoginResult uid. */
        public uid: number;

        /** UserLoginResult gateTcpAddr. */
        public gateTcpAddr: string;

        /** UserLoginResult gateWsAddr. */
        public gateWsAddr: string;

        /** UserLoginResult key. */
        public key: string;

        /** UserLoginResult result. */
        public result: number;

        /**
         * Creates a new UserLoginResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLoginResult instance
         */
        public static create(properties?: gameproto.IUserLoginResult): gameproto.UserLoginResult;

        /**
         * Encodes the specified UserLoginResult message. Does not implicitly {@link gameproto.UserLoginResult.verify|verify} messages.
         * @param message UserLoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IUserLoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLoginResult message, length delimited. Does not implicitly {@link gameproto.UserLoginResult.verify|verify} messages.
         * @param message UserLoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IUserLoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.UserLoginResult;

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.UserLoginResult;

        /**
         * Verifies a UserLoginResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLoginResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLoginResult
         */
        public static fromObject(object: { [k: string]: any }): gameproto.UserLoginResult;

        /**
         * Creates a plain object from a UserLoginResult message. Also converts values to other types if specified.
         * @param message UserLoginResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.UserLoginResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLoginResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlatformUser. */
    interface IPlatformUser {

        /** PlatformUser platformId */
        platformId?: (string|null);

        /** PlatformUser platform */
        platform?: (gameproto.PlatformUser.PlatformType|null);

        /** PlatformUser platformSession */
        platformSession?: (string|null);

        /** PlatformUser platformUid */
        platformUid?: (number|null);

        /** PlatformUser serverID */
        serverID?: (number|null);

        /** PlatformUser channelId */
        channelId?: (string|null);

        /** PlatformUser version */
        version?: (number|null);

        /** PlatformUser key */
        key?: (string|null);
    }

    /** Represents a PlatformUser. */
    class PlatformUser implements IPlatformUser {

        /**
         * Constructs a new PlatformUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.IPlatformUser);

        /** PlatformUser platformId. */
        public platformId: string;

        /** PlatformUser platform. */
        public platform: gameproto.PlatformUser.PlatformType;

        /** PlatformUser platformSession. */
        public platformSession: string;

        /** PlatformUser platformUid. */
        public platformUid: number;

        /** PlatformUser serverID. */
        public serverID: number;

        /** PlatformUser channelId. */
        public channelId: string;

        /** PlatformUser version. */
        public version: number;

        /** PlatformUser key. */
        public key: string;

        /**
         * Creates a new PlatformUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlatformUser instance
         */
        public static create(properties?: gameproto.IPlatformUser): gameproto.PlatformUser;

        /**
         * Encodes the specified PlatformUser message. Does not implicitly {@link gameproto.PlatformUser.verify|verify} messages.
         * @param message PlatformUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.IPlatformUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlatformUser message, length delimited. Does not implicitly {@link gameproto.PlatformUser.verify|verify} messages.
         * @param message PlatformUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.IPlatformUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlatformUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlatformUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.PlatformUser;

        /**
         * Decodes a PlatformUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlatformUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.PlatformUser;

        /**
         * Verifies a PlatformUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlatformUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlatformUser
         */
        public static fromObject(object: { [k: string]: any }): gameproto.PlatformUser;

        /**
         * Creates a plain object from a PlatformUser message. Also converts values to other types if specified.
         * @param message PlatformUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.PlatformUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlatformUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PlatformUser {

        /** PlatformType enum. */
        enum PlatformType {
            Engine = 0,
            DEVICE = 99
        }
    }

    /** Properties of a LoginReturn. */
    interface ILoginReturn {

        /** LoginReturn errCode */
        errCode?: (number|null);

        /** LoginReturn serverTime */
        serverTime?: (number|null);

        /** LoginReturn args */
        args?: (string|null);

        /** LoginReturn bFirst */
        bFirst?: (number|null);
    }

    /** Represents a LoginReturn. */
    class LoginReturn implements ILoginReturn {

        /**
         * Constructs a new LoginReturn.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.ILoginReturn);

        /** LoginReturn errCode. */
        public errCode: number;

        /** LoginReturn serverTime. */
        public serverTime: number;

        /** LoginReturn args. */
        public args: string;

        /** LoginReturn bFirst. */
        public bFirst: number;

        /**
         * Creates a new LoginReturn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReturn instance
         */
        public static create(properties?: gameproto.ILoginReturn): gameproto.LoginReturn;

        /**
         * Encodes the specified LoginReturn message. Does not implicitly {@link gameproto.LoginReturn.verify|verify} messages.
         * @param message LoginReturn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.ILoginReturn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReturn message, length delimited. Does not implicitly {@link gameproto.LoginReturn.verify|verify} messages.
         * @param message LoginReturn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.ILoginReturn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReturn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.LoginReturn;

        /**
         * Decodes a LoginReturn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.LoginReturn;

        /**
         * Verifies a LoginReturn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReturn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReturn
         */
        public static fromObject(object: { [k: string]: any }): gameproto.LoginReturn;

        /**
         * Creates a plain object from a LoginReturn message. Also converts values to other types if specified.
         * @param message LoginReturn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.LoginReturn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReturn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginInfo. */
    interface ILoginInfo {

        /** LoginInfo headId */
        headId?: (number|null);

        /** LoginInfo level */
        level?: (number|null);

        /** LoginInfo exp */
        exp?: (number|Long|null);

        /** LoginInfo nickname */
        nickname?: (string|null);

        /** LoginInfo sex */
        sex?: (number|null);

        /** LoginInfo id */
        id?: (number|Long|null);

        /** LoginInfo gold */
        gold?: (number|null);

        /** LoginInfo diamond */
        diamond?: (number|null);
    }

    /** Represents a LoginInfo. */
    class LoginInfo implements ILoginInfo {

        /**
         * Constructs a new LoginInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameproto.ILoginInfo);

        /** LoginInfo headId. */
        public headId: number;

        /** LoginInfo level. */
        public level: number;

        /** LoginInfo exp. */
        public exp: (number|Long);

        /** LoginInfo nickname. */
        public nickname: string;

        /** LoginInfo sex. */
        public sex: number;

        /** LoginInfo id. */
        public id: (number|Long);

        /** LoginInfo gold. */
        public gold: number;

        /** LoginInfo diamond. */
        public diamond: number;

        /**
         * Creates a new LoginInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginInfo instance
         */
        public static create(properties?: gameproto.ILoginInfo): gameproto.LoginInfo;

        /**
         * Encodes the specified LoginInfo message. Does not implicitly {@link gameproto.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameproto.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginInfo message, length delimited. Does not implicitly {@link gameproto.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameproto.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameproto.LoginInfo;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameproto.LoginInfo;

        /**
         * Verifies a LoginInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginInfo
         */
        public static fromObject(object: { [k: string]: any }): gameproto.LoginInfo;

        /**
         * Creates a plain object from a LoginInfo message. Also converts values to other types if specified.
         * @param message LoginInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameproto.LoginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
