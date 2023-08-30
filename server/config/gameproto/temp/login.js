/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.gameproto = (function() {
    
        /**
         * Namespace gameproto.
         * @exports gameproto
         * @namespace
         */
        var gameproto = {};
    
        gameproto.UserLoginResult = (function() {
    
            /**
             * Properties of a UserLoginResult.
             * @memberof gameproto
             * @interface IUserLoginResult
             * @property {number|null} [uid] UserLoginResult uid
             * @property {string|null} [gateTcpAddr] UserLoginResult gateTcpAddr
             * @property {string|null} [gateWsAddr] UserLoginResult gateWsAddr
             * @property {string|null} [key] UserLoginResult key
             * @property {number|null} [result] UserLoginResult result
             */
    
            /**
             * Constructs a new UserLoginResult.
             * @memberof gameproto
             * @classdesc Represents a UserLoginResult.
             * @implements IUserLoginResult
             * @constructor
             * @param {gameproto.IUserLoginResult=} [properties] Properties to set
             */
            function UserLoginResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserLoginResult uid.
             * @member {number} uid
             * @memberof gameproto.UserLoginResult
             * @instance
             */
            UserLoginResult.prototype.uid = 0;
    
            /**
             * UserLoginResult gateTcpAddr.
             * @member {string} gateTcpAddr
             * @memberof gameproto.UserLoginResult
             * @instance
             */
            UserLoginResult.prototype.gateTcpAddr = "";
    
            /**
             * UserLoginResult gateWsAddr.
             * @member {string} gateWsAddr
             * @memberof gameproto.UserLoginResult
             * @instance
             */
            UserLoginResult.prototype.gateWsAddr = "";
    
            /**
             * UserLoginResult key.
             * @member {string} key
             * @memberof gameproto.UserLoginResult
             * @instance
             */
            UserLoginResult.prototype.key = "";
    
            /**
             * UserLoginResult result.
             * @member {number} result
             * @memberof gameproto.UserLoginResult
             * @instance
             */
            UserLoginResult.prototype.result = 0;
    
            /**
             * Creates a new UserLoginResult instance using the specified properties.
             * @function create
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {gameproto.IUserLoginResult=} [properties] Properties to set
             * @returns {gameproto.UserLoginResult} UserLoginResult instance
             */
            UserLoginResult.create = function create(properties) {
                return new UserLoginResult(properties);
            };
    
            /**
             * Encodes the specified UserLoginResult message. Does not implicitly {@link gameproto.UserLoginResult.verify|verify} messages.
             * @function encode
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {gameproto.IUserLoginResult} message UserLoginResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserLoginResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.gateTcpAddr != null && message.hasOwnProperty("gateTcpAddr"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.gateTcpAddr);
                if (message.gateWsAddr != null && message.hasOwnProperty("gateWsAddr"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.gateWsAddr);
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.key);
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.result);
                return writer;
            };
    
            /**
             * Encodes the specified UserLoginResult message, length delimited. Does not implicitly {@link gameproto.UserLoginResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {gameproto.IUserLoginResult} message UserLoginResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserLoginResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserLoginResult message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.UserLoginResult} UserLoginResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserLoginResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.UserLoginResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.uint32();
                        break;
                    case 2:
                        message.gateTcpAddr = reader.string();
                        break;
                    case 3:
                        message.gateWsAddr = reader.string();
                        break;
                    case 4:
                        message.key = reader.string();
                        break;
                    case 5:
                        message.result = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserLoginResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.UserLoginResult} UserLoginResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserLoginResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserLoginResult message.
             * @function verify
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserLoginResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.gateTcpAddr != null && message.hasOwnProperty("gateTcpAddr"))
                    if (!$util.isString(message.gateTcpAddr))
                        return "gateTcpAddr: string expected";
                if (message.gateWsAddr != null && message.hasOwnProperty("gateWsAddr"))
                    if (!$util.isString(message.gateWsAddr))
                        return "gateWsAddr: string expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                return null;
            };
    
            /**
             * Creates a UserLoginResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.UserLoginResult} UserLoginResult
             */
            UserLoginResult.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.UserLoginResult)
                    return object;
                var message = new $root.gameproto.UserLoginResult();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.gateTcpAddr != null)
                    message.gateTcpAddr = String(object.gateTcpAddr);
                if (object.gateWsAddr != null)
                    message.gateWsAddr = String(object.gateWsAddr);
                if (object.key != null)
                    message.key = String(object.key);
                if (object.result != null)
                    message.result = object.result | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a UserLoginResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.UserLoginResult
             * @static
             * @param {gameproto.UserLoginResult} message UserLoginResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserLoginResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.gateTcpAddr = "";
                    object.gateWsAddr = "";
                    object.key = "";
                    object.result = 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.gateTcpAddr != null && message.hasOwnProperty("gateTcpAddr"))
                    object.gateTcpAddr = message.gateTcpAddr;
                if (message.gateWsAddr != null && message.hasOwnProperty("gateWsAddr"))
                    object.gateWsAddr = message.gateWsAddr;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                return object;
            };
    
            /**
             * Converts this UserLoginResult to JSON.
             * @function toJSON
             * @memberof gameproto.UserLoginResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserLoginResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserLoginResult;
        })();
    
        gameproto.PlatformUser = (function() {
    
            /**
             * Properties of a PlatformUser.
             * @memberof gameproto
             * @interface IPlatformUser
             * @property {string|null} [platformId] PlatformUser platformId
             * @property {gameproto.PlatformUser.PlatformType|null} [platform] PlatformUser platform
             * @property {string|null} [platformSession] PlatformUser platformSession
             * @property {number|null} [platformUid] PlatformUser platformUid
             * @property {number|null} [serverID] PlatformUser serverID
             * @property {string|null} [channelId] PlatformUser channelId
             * @property {number|null} [version] PlatformUser version
             * @property {string|null} [key] PlatformUser key
             */
    
            /**
             * Constructs a new PlatformUser.
             * @memberof gameproto
             * @classdesc Represents a PlatformUser.
             * @implements IPlatformUser
             * @constructor
             * @param {gameproto.IPlatformUser=} [properties] Properties to set
             */
            function PlatformUser(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformUser platformId.
             * @member {string} platformId
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.platformId = "";
    
            /**
             * PlatformUser platform.
             * @member {gameproto.PlatformUser.PlatformType} platform
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.platform = 0;
    
            /**
             * PlatformUser platformSession.
             * @member {string} platformSession
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.platformSession = "";
    
            /**
             * PlatformUser platformUid.
             * @member {number} platformUid
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.platformUid = 0;
    
            /**
             * PlatformUser serverID.
             * @member {number} serverID
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.serverID = 0;
    
            /**
             * PlatformUser channelId.
             * @member {string} channelId
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.channelId = "";
    
            /**
             * PlatformUser version.
             * @member {number} version
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.version = 0;
    
            /**
             * PlatformUser key.
             * @member {string} key
             * @memberof gameproto.PlatformUser
             * @instance
             */
            PlatformUser.prototype.key = "";
    
            /**
             * Creates a new PlatformUser instance using the specified properties.
             * @function create
             * @memberof gameproto.PlatformUser
             * @static
             * @param {gameproto.IPlatformUser=} [properties] Properties to set
             * @returns {gameproto.PlatformUser} PlatformUser instance
             */
            PlatformUser.create = function create(properties) {
                return new PlatformUser(properties);
            };
    
            /**
             * Encodes the specified PlatformUser message. Does not implicitly {@link gameproto.PlatformUser.verify|verify} messages.
             * @function encode
             * @memberof gameproto.PlatformUser
             * @static
             * @param {gameproto.IPlatformUser} message PlatformUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlatformUser.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.platformId != null && message.hasOwnProperty("platformId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.platformId);
                if (message.platform != null && message.hasOwnProperty("platform"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.platform);
                if (message.platformSession != null && message.hasOwnProperty("platformSession"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.platformSession);
                if (message.platformUid != null && message.hasOwnProperty("platformUid"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.platformUid);
                if (message.serverID != null && message.hasOwnProperty("serverID"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.serverID);
                if (message.channelId != null && message.hasOwnProperty("channelId"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.channelId);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.version);
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.key);
                return writer;
            };
    
            /**
             * Encodes the specified PlatformUser message, length delimited. Does not implicitly {@link gameproto.PlatformUser.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.PlatformUser
             * @static
             * @param {gameproto.IPlatformUser} message PlatformUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlatformUser.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlatformUser message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.PlatformUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.PlatformUser} PlatformUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlatformUser.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.PlatformUser();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.platformId = reader.string();
                        break;
                    case 2:
                        message.platform = reader.int32();
                        break;
                    case 3:
                        message.platformSession = reader.string();
                        break;
                    case 4:
                        message.platformUid = reader.int32();
                        break;
                    case 5:
                        message.serverID = reader.int32();
                        break;
                    case 6:
                        message.channelId = reader.string();
                        break;
                    case 7:
                        message.version = reader.int32();
                        break;
                    case 8:
                        message.key = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PlatformUser message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.PlatformUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.PlatformUser} PlatformUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlatformUser.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlatformUser message.
             * @function verify
             * @memberof gameproto.PlatformUser
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlatformUser.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.platformId != null && message.hasOwnProperty("platformId"))
                    if (!$util.isString(message.platformId))
                        return "platformId: string expected";
                if (message.platform != null && message.hasOwnProperty("platform"))
                    switch (message.platform) {
                    default:
                        return "platform: enum value expected";
                    case 0:
                    case 99:
                        break;
                    }
                if (message.platformSession != null && message.hasOwnProperty("platformSession"))
                    if (!$util.isString(message.platformSession))
                        return "platformSession: string expected";
                if (message.platformUid != null && message.hasOwnProperty("platformUid"))
                    if (!$util.isInteger(message.platformUid))
                        return "platformUid: integer expected";
                if (message.serverID != null && message.hasOwnProperty("serverID"))
                    if (!$util.isInteger(message.serverID))
                        return "serverID: integer expected";
                if (message.channelId != null && message.hasOwnProperty("channelId"))
                    if (!$util.isString(message.channelId))
                        return "channelId: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isInteger(message.version))
                        return "version: integer expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                return null;
            };
    
            /**
             * Creates a PlatformUser message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.PlatformUser
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.PlatformUser} PlatformUser
             */
            PlatformUser.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.PlatformUser)
                    return object;
                var message = new $root.gameproto.PlatformUser();
                if (object.platformId != null)
                    message.platformId = String(object.platformId);
                switch (object.platform) {
                case "Engine":
                case 0:
                    message.platform = 0;
                    break;
                case "DEVICE":
                case 99:
                    message.platform = 99;
                    break;
                }
                if (object.platformSession != null)
                    message.platformSession = String(object.platformSession);
                if (object.platformUid != null)
                    message.platformUid = object.platformUid | 0;
                if (object.serverID != null)
                    message.serverID = object.serverID | 0;
                if (object.channelId != null)
                    message.channelId = String(object.channelId);
                if (object.version != null)
                    message.version = object.version | 0;
                if (object.key != null)
                    message.key = String(object.key);
                return message;
            };
    
            /**
             * Creates a plain object from a PlatformUser message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.PlatformUser
             * @static
             * @param {gameproto.PlatformUser} message PlatformUser
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlatformUser.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.platformId = "";
                    object.platform = options.enums === String ? "Engine" : 0;
                    object.platformSession = "";
                    object.platformUid = 0;
                    object.serverID = 0;
                    object.channelId = "";
                    object.version = 0;
                    object.key = "";
                }
                if (message.platformId != null && message.hasOwnProperty("platformId"))
                    object.platformId = message.platformId;
                if (message.platform != null && message.hasOwnProperty("platform"))
                    object.platform = options.enums === String ? $root.gameproto.PlatformUser.PlatformType[message.platform] : message.platform;
                if (message.platformSession != null && message.hasOwnProperty("platformSession"))
                    object.platformSession = message.platformSession;
                if (message.platformUid != null && message.hasOwnProperty("platformUid"))
                    object.platformUid = message.platformUid;
                if (message.serverID != null && message.hasOwnProperty("serverID"))
                    object.serverID = message.serverID;
                if (message.channelId != null && message.hasOwnProperty("channelId"))
                    object.channelId = message.channelId;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                return object;
            };
    
            /**
             * Converts this PlatformUser to JSON.
             * @function toJSON
             * @memberof gameproto.PlatformUser
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlatformUser.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * PlatformType enum.
             * @name gameproto.PlatformUser.PlatformType
             * @enum {string}
             * @property {number} Engine=0 Engine value
             * @property {number} DEVICE=99 DEVICE value
             */
            PlatformUser.PlatformType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Engine"] = 0;
                values[valuesById[99] = "DEVICE"] = 99;
                return values;
            })();
    
            return PlatformUser;
        })();
    
        gameproto.LoginReturn = (function() {
    
            /**
             * Properties of a LoginReturn.
             * @memberof gameproto
             * @interface ILoginReturn
             * @property {number|null} [errCode] LoginReturn errCode
             * @property {number|null} [serverTime] LoginReturn serverTime
             * @property {string|null} [args] LoginReturn args
             * @property {number|null} [bFirst] LoginReturn bFirst
             */
    
            /**
             * Constructs a new LoginReturn.
             * @memberof gameproto
             * @classdesc Represents a LoginReturn.
             * @implements ILoginReturn
             * @constructor
             * @param {gameproto.ILoginReturn=} [properties] Properties to set
             */
            function LoginReturn(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LoginReturn errCode.
             * @member {number} errCode
             * @memberof gameproto.LoginReturn
             * @instance
             */
            LoginReturn.prototype.errCode = 0;
    
            /**
             * LoginReturn serverTime.
             * @member {number} serverTime
             * @memberof gameproto.LoginReturn
             * @instance
             */
            LoginReturn.prototype.serverTime = 0;
    
            /**
             * LoginReturn args.
             * @member {string} args
             * @memberof gameproto.LoginReturn
             * @instance
             */
            LoginReturn.prototype.args = "";
    
            /**
             * LoginReturn bFirst.
             * @member {number} bFirst
             * @memberof gameproto.LoginReturn
             * @instance
             */
            LoginReturn.prototype.bFirst = 0;
    
            /**
             * Creates a new LoginReturn instance using the specified properties.
             * @function create
             * @memberof gameproto.LoginReturn
             * @static
             * @param {gameproto.ILoginReturn=} [properties] Properties to set
             * @returns {gameproto.LoginReturn} LoginReturn instance
             */
            LoginReturn.create = function create(properties) {
                return new LoginReturn(properties);
            };
    
            /**
             * Encodes the specified LoginReturn message. Does not implicitly {@link gameproto.LoginReturn.verify|verify} messages.
             * @function encode
             * @memberof gameproto.LoginReturn
             * @static
             * @param {gameproto.ILoginReturn} message LoginReturn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginReturn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
                if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverTime);
                if (message.args != null && message.hasOwnProperty("args"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.args);
                if (message.bFirst != null && message.hasOwnProperty("bFirst"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bFirst);
                return writer;
            };
    
            /**
             * Encodes the specified LoginReturn message, length delimited. Does not implicitly {@link gameproto.LoginReturn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.LoginReturn
             * @static
             * @param {gameproto.ILoginReturn} message LoginReturn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginReturn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LoginReturn message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.LoginReturn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.LoginReturn} LoginReturn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginReturn.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.LoginReturn();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.errCode = reader.int32();
                        break;
                    case 2:
                        message.serverTime = reader.int32();
                        break;
                    case 3:
                        message.args = reader.string();
                        break;
                    case 4:
                        message.bFirst = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LoginReturn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.LoginReturn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.LoginReturn} LoginReturn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginReturn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LoginReturn message.
             * @function verify
             * @memberof gameproto.LoginReturn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginReturn.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                    if (!$util.isInteger(message.serverTime))
                        return "serverTime: integer expected";
                if (message.args != null && message.hasOwnProperty("args"))
                    if (!$util.isString(message.args))
                        return "args: string expected";
                if (message.bFirst != null && message.hasOwnProperty("bFirst"))
                    if (!$util.isInteger(message.bFirst))
                        return "bFirst: integer expected";
                return null;
            };
    
            /**
             * Creates a LoginReturn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.LoginReturn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.LoginReturn} LoginReturn
             */
            LoginReturn.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.LoginReturn)
                    return object;
                var message = new $root.gameproto.LoginReturn();
                if (object.errCode != null)
                    message.errCode = object.errCode | 0;
                if (object.serverTime != null)
                    message.serverTime = object.serverTime | 0;
                if (object.args != null)
                    message.args = String(object.args);
                if (object.bFirst != null)
                    message.bFirst = object.bFirst | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LoginReturn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.LoginReturn
             * @static
             * @param {gameproto.LoginReturn} message LoginReturn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginReturn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.serverTime = 0;
                    object.args = "";
                    object.bFirst = 0;
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                    object.serverTime = message.serverTime;
                if (message.args != null && message.hasOwnProperty("args"))
                    object.args = message.args;
                if (message.bFirst != null && message.hasOwnProperty("bFirst"))
                    object.bFirst = message.bFirst;
                return object;
            };
    
            /**
             * Converts this LoginReturn to JSON.
             * @function toJSON
             * @memberof gameproto.LoginReturn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginReturn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LoginReturn;
        })();
    
        gameproto.LoginInfo = (function() {
    
            /**
             * Properties of a LoginInfo.
             * @memberof gameproto
             * @interface ILoginInfo
             * @property {number|null} [headId] LoginInfo headId
             * @property {number|null} [level] LoginInfo level
             * @property {number|Long|null} [exp] LoginInfo exp
             * @property {string|null} [nickname] LoginInfo nickname
             * @property {number|null} [sex] LoginInfo sex
             * @property {number|Long|null} [id] LoginInfo id
             * @property {number|null} [gold] LoginInfo gold
             * @property {number|null} [diamond] LoginInfo diamond
             */
    
            /**
             * Constructs a new LoginInfo.
             * @memberof gameproto
             * @classdesc Represents a LoginInfo.
             * @implements ILoginInfo
             * @constructor
             * @param {gameproto.ILoginInfo=} [properties] Properties to set
             */
            function LoginInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LoginInfo headId.
             * @member {number} headId
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.headId = 0;
    
            /**
             * LoginInfo level.
             * @member {number} level
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.level = 0;
    
            /**
             * LoginInfo exp.
             * @member {number|Long} exp
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * LoginInfo nickname.
             * @member {string} nickname
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.nickname = "";
    
            /**
             * LoginInfo sex.
             * @member {number} sex
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.sex = 0;
    
            /**
             * LoginInfo id.
             * @member {number|Long} id
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * LoginInfo gold.
             * @member {number} gold
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.gold = 0;
    
            /**
             * LoginInfo diamond.
             * @member {number} diamond
             * @memberof gameproto.LoginInfo
             * @instance
             */
            LoginInfo.prototype.diamond = 0;
    
            /**
             * Creates a new LoginInfo instance using the specified properties.
             * @function create
             * @memberof gameproto.LoginInfo
             * @static
             * @param {gameproto.ILoginInfo=} [properties] Properties to set
             * @returns {gameproto.LoginInfo} LoginInfo instance
             */
            LoginInfo.create = function create(properties) {
                return new LoginInfo(properties);
            };
    
            /**
             * Encodes the specified LoginInfo message. Does not implicitly {@link gameproto.LoginInfo.verify|verify} messages.
             * @function encode
             * @memberof gameproto.LoginInfo
             * @static
             * @param {gameproto.ILoginInfo} message LoginInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.headId != null && message.hasOwnProperty("headId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.headId);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.exp);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickname);
                if (message.sex != null && message.hasOwnProperty("sex"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sex);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.id);
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gold);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.diamond);
                return writer;
            };
    
            /**
             * Encodes the specified LoginInfo message, length delimited. Does not implicitly {@link gameproto.LoginInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.LoginInfo
             * @static
             * @param {gameproto.ILoginInfo} message LoginInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LoginInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.LoginInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.LoginInfo} LoginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.LoginInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.headId = reader.int32();
                        break;
                    case 2:
                        message.level = reader.int32();
                        break;
                    case 3:
                        message.exp = reader.int64();
                        break;
                    case 4:
                        message.nickname = reader.string();
                        break;
                    case 5:
                        message.sex = reader.int32();
                        break;
                    case 6:
                        message.id = reader.int64();
                        break;
                    case 7:
                        message.gold = reader.int32();
                        break;
                    case 8:
                        message.diamond = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LoginInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.LoginInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.LoginInfo} LoginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LoginInfo message.
             * @function verify
             * @memberof gameproto.LoginInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.headId != null && message.hasOwnProperty("headId"))
                    if (!$util.isInteger(message.headId))
                        return "headId: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                        return "exp: integer|Long expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.sex != null && message.hasOwnProperty("sex"))
                    if (!$util.isInteger(message.sex))
                        return "sex: integer expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (!$util.isInteger(message.gold))
                        return "gold: integer expected";
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    if (!$util.isInteger(message.diamond))
                        return "diamond: integer expected";
                return null;
            };
    
            /**
             * Creates a LoginInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.LoginInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.LoginInfo} LoginInfo
             */
            LoginInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.LoginInfo)
                    return object;
                var message = new $root.gameproto.LoginInfo();
                if (object.headId != null)
                    message.headId = object.headId | 0;
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.exp != null)
                    if ($util.Long)
                        (message.exp = $util.Long.fromValue(object.exp)).unsigned = false;
                    else if (typeof object.exp === "string")
                        message.exp = parseInt(object.exp, 10);
                    else if (typeof object.exp === "number")
                        message.exp = object.exp;
                    else if (typeof object.exp === "object")
                        message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber();
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.sex != null)
                    message.sex = object.sex | 0;
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.gold != null)
                    message.gold = object.gold | 0;
                if (object.diamond != null)
                    message.diamond = object.diamond | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LoginInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.LoginInfo
             * @static
             * @param {gameproto.LoginInfo} message LoginInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.headId = 0;
                    object.level = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.exp = options.longs === String ? "0" : 0;
                    object.nickname = "";
                    object.sex = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.id = options.longs === String ? "0" : 0;
                    object.gold = 0;
                    object.diamond = 0;
                }
                if (message.headId != null && message.hasOwnProperty("headId"))
                    object.headId = message.headId;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (typeof message.exp === "number")
                        object.exp = options.longs === String ? String(message.exp) : message.exp;
                    else
                        object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber() : message.exp;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.sex != null && message.hasOwnProperty("sex"))
                    object.sex = message.sex;
                if (message.id != null && message.hasOwnProperty("id"))
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.gold != null && message.hasOwnProperty("gold"))
                    object.gold = message.gold;
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    object.diamond = message.diamond;
                return object;
            };
    
            /**
             * Converts this LoginInfo to JSON.
             * @function toJSON
             * @memberof gameproto.LoginInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LoginInfo;
        })();
    
        return gameproto;
    })();

    return $root;
});
