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
    
        /**
         * ErrorCode enum.
         * @name gameproto.ErrorCode
         * @enum {string}
         * @property {number} OK=0 OK value
         * @property {number} Fail=1 Fail value
         * @property {number} Error=2 Error value
         * @property {number} ServerFull=3 ServerFull value
         * @property {number} KeyError=4 KeyError value
         * @property {number} NoFoundTarget=5 NoFoundTarget value
         * @property {number} IMPORTANT_WRONG_HEAD=-1000 IMPORTANT_WRONG_HEAD value
         * @property {number} RESOURCE_VITALITY_ERROR=1002 RESOURCE_VITALITY_ERROR value
         * @property {number} RESOURCE_GOLD_ERROR=1003 RESOURCE_GOLD_ERROR value
         * @property {number} RESOURCE_RMB_ERROR=1004 RESOURCE_RMB_ERROR value
         * @property {number} GUILD_EXIT_CHAIRMAN_ERROR=1022 GUILD_EXIT_CHAIRMAN_ERROR value
         * @property {number} UNKNOWN_ERROR=-9999 UNKNOWN_ERROR value
         */
        gameproto.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "Fail"] = 1;
            values[valuesById[2] = "Error"] = 2;
            values[valuesById[3] = "ServerFull"] = 3;
            values[valuesById[4] = "KeyError"] = 4;
            values[valuesById[5] = "NoFoundTarget"] = 5;
            values[valuesById[-1000] = "IMPORTANT_WRONG_HEAD"] = -1000;
            values[valuesById[1002] = "RESOURCE_VITALITY_ERROR"] = 1002;
            values[valuesById[1003] = "RESOURCE_GOLD_ERROR"] = 1003;
            values[valuesById[1004] = "RESOURCE_RMB_ERROR"] = 1004;
            values[valuesById[1022] = "GUILD_EXIT_CHAIRMAN_ERROR"] = 1022;
            values[valuesById[-9999] = "UNKNOWN_ERROR"] = -9999;
            return values;
        })();
    
        gameproto.C2S_TestMsg = (function() {
    
            /**
             * Properties of a C2S_TestMsg.
             * @memberof gameproto
             * @interface IC2S_TestMsg
             * @property {number|null} [id] C2S_TestMsg id
             */
    
            /**
             * Constructs a new C2S_TestMsg.
             * @memberof gameproto
             * @classdesc Represents a C2S_TestMsg.
             * @implements IC2S_TestMsg
             * @constructor
             * @param {gameproto.IC2S_TestMsg=} [properties] Properties to set
             */
            function C2S_TestMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C2S_TestMsg id.
             * @member {number} id
             * @memberof gameproto.C2S_TestMsg
             * @instance
             */
            C2S_TestMsg.prototype.id = 0;
    
            /**
             * Creates a new C2S_TestMsg instance using the specified properties.
             * @function create
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {gameproto.IC2S_TestMsg=} [properties] Properties to set
             * @returns {gameproto.C2S_TestMsg} C2S_TestMsg instance
             */
            C2S_TestMsg.create = function create(properties) {
                return new C2S_TestMsg(properties);
            };
    
            /**
             * Encodes the specified C2S_TestMsg message. Does not implicitly {@link gameproto.C2S_TestMsg.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {gameproto.IC2S_TestMsg} message C2S_TestMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C2S_TestMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                return writer;
            };
    
            /**
             * Encodes the specified C2S_TestMsg message, length delimited. Does not implicitly {@link gameproto.C2S_TestMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {gameproto.IC2S_TestMsg} message C2S_TestMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C2S_TestMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C2S_TestMsg message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C2S_TestMsg} C2S_TestMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_TestMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C2S_TestMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C2S_TestMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C2S_TestMsg} C2S_TestMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_TestMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C2S_TestMsg message.
             * @function verify
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C2S_TestMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };
    
            /**
             * Creates a C2S_TestMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C2S_TestMsg} C2S_TestMsg
             */
            C2S_TestMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C2S_TestMsg)
                    return object;
                var message = new $root.gameproto.C2S_TestMsg();
                if (object.id != null)
                    message.id = object.id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a C2S_TestMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C2S_TestMsg
             * @static
             * @param {gameproto.C2S_TestMsg} message C2S_TestMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C2S_TestMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };
    
            /**
             * Converts this C2S_TestMsg to JSON.
             * @function toJSON
             * @memberof gameproto.C2S_TestMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C2S_TestMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C2S_TestMsg;
        })();
    
        gameproto.S2C_TestMsg = (function() {
    
            /**
             * Properties of a S2C_TestMsg.
             * @memberof gameproto
             * @interface IS2C_TestMsg
             * @property {number|null} [id] S2C_TestMsg id
             */
    
            /**
             * Constructs a new S2C_TestMsg.
             * @memberof gameproto
             * @classdesc Represents a S2C_TestMsg.
             * @implements IS2C_TestMsg
             * @constructor
             * @param {gameproto.IS2C_TestMsg=} [properties] Properties to set
             */
            function S2C_TestMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * S2C_TestMsg id.
             * @member {number} id
             * @memberof gameproto.S2C_TestMsg
             * @instance
             */
            S2C_TestMsg.prototype.id = 0;
    
            /**
             * Creates a new S2C_TestMsg instance using the specified properties.
             * @function create
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {gameproto.IS2C_TestMsg=} [properties] Properties to set
             * @returns {gameproto.S2C_TestMsg} S2C_TestMsg instance
             */
            S2C_TestMsg.create = function create(properties) {
                return new S2C_TestMsg(properties);
            };
    
            /**
             * Encodes the specified S2C_TestMsg message. Does not implicitly {@link gameproto.S2C_TestMsg.verify|verify} messages.
             * @function encode
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {gameproto.IS2C_TestMsg} message S2C_TestMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_TestMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                return writer;
            };
    
            /**
             * Encodes the specified S2C_TestMsg message, length delimited. Does not implicitly {@link gameproto.S2C_TestMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {gameproto.IS2C_TestMsg} message S2C_TestMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_TestMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a S2C_TestMsg message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.S2C_TestMsg} S2C_TestMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_TestMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.S2C_TestMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a S2C_TestMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.S2C_TestMsg} S2C_TestMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_TestMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a S2C_TestMsg message.
             * @function verify
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            S2C_TestMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };
    
            /**
             * Creates a S2C_TestMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.S2C_TestMsg} S2C_TestMsg
             */
            S2C_TestMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.S2C_TestMsg)
                    return object;
                var message = new $root.gameproto.S2C_TestMsg();
                if (object.id != null)
                    message.id = object.id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a S2C_TestMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.S2C_TestMsg
             * @static
             * @param {gameproto.S2C_TestMsg} message S2C_TestMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            S2C_TestMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };
    
            /**
             * Converts this S2C_TestMsg to JSON.
             * @function toJSON
             * @memberof gameproto.S2C_TestMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            S2C_TestMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return S2C_TestMsg;
        })();
    
        gameproto.S2C_ConfirmInfo = (function() {
    
            /**
             * Properties of a S2C_ConfirmInfo.
             * @memberof gameproto
             * @interface IS2C_ConfirmInfo
             * @property {number|null} [msgHead] S2C_ConfirmInfo msgHead
             * @property {number|null} [code] S2C_ConfirmInfo code
             */
    
            /**
             * Constructs a new S2C_ConfirmInfo.
             * @memberof gameproto
             * @classdesc Represents a S2C_ConfirmInfo.
             * @implements IS2C_ConfirmInfo
             * @constructor
             * @param {gameproto.IS2C_ConfirmInfo=} [properties] Properties to set
             */
            function S2C_ConfirmInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * S2C_ConfirmInfo msgHead.
             * @member {number} msgHead
             * @memberof gameproto.S2C_ConfirmInfo
             * @instance
             */
            S2C_ConfirmInfo.prototype.msgHead = 0;
    
            /**
             * S2C_ConfirmInfo code.
             * @member {number} code
             * @memberof gameproto.S2C_ConfirmInfo
             * @instance
             */
            S2C_ConfirmInfo.prototype.code = 0;
    
            /**
             * Creates a new S2C_ConfirmInfo instance using the specified properties.
             * @function create
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {gameproto.IS2C_ConfirmInfo=} [properties] Properties to set
             * @returns {gameproto.S2C_ConfirmInfo} S2C_ConfirmInfo instance
             */
            S2C_ConfirmInfo.create = function create(properties) {
                return new S2C_ConfirmInfo(properties);
            };
    
            /**
             * Encodes the specified S2C_ConfirmInfo message. Does not implicitly {@link gameproto.S2C_ConfirmInfo.verify|verify} messages.
             * @function encode
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {gameproto.IS2C_ConfirmInfo} message S2C_ConfirmInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_ConfirmInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgHead != null && message.hasOwnProperty("msgHead"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgHead);
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                return writer;
            };
    
            /**
             * Encodes the specified S2C_ConfirmInfo message, length delimited. Does not implicitly {@link gameproto.S2C_ConfirmInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {gameproto.IS2C_ConfirmInfo} message S2C_ConfirmInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_ConfirmInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a S2C_ConfirmInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.S2C_ConfirmInfo} S2C_ConfirmInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_ConfirmInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.S2C_ConfirmInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.msgHead = reader.int32();
                        break;
                    case 2:
                        message.code = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a S2C_ConfirmInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.S2C_ConfirmInfo} S2C_ConfirmInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_ConfirmInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a S2C_ConfirmInfo message.
             * @function verify
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            S2C_ConfirmInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.msgHead != null && message.hasOwnProperty("msgHead"))
                    if (!$util.isInteger(message.msgHead))
                        return "msgHead: integer expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                return null;
            };
    
            /**
             * Creates a S2C_ConfirmInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.S2C_ConfirmInfo} S2C_ConfirmInfo
             */
            S2C_ConfirmInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.S2C_ConfirmInfo)
                    return object;
                var message = new $root.gameproto.S2C_ConfirmInfo();
                if (object.msgHead != null)
                    message.msgHead = object.msgHead | 0;
                if (object.code != null)
                    message.code = object.code | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a S2C_ConfirmInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.S2C_ConfirmInfo
             * @static
             * @param {gameproto.S2C_ConfirmInfo} message S2C_ConfirmInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            S2C_ConfirmInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.msgHead = 0;
                    object.code = 0;
                }
                if (message.msgHead != null && message.hasOwnProperty("msgHead"))
                    object.msgHead = message.msgHead;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                return object;
            };
    
            /**
             * Converts this S2C_ConfirmInfo to JSON.
             * @function toJSON
             * @memberof gameproto.S2C_ConfirmInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            S2C_ConfirmInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return S2C_ConfirmInfo;
        })();
    
        /**
         * BattleType enum.
         * @name gameproto.BattleType
         * @enum {string}
         * @property {number} PVE=0 PVE value
         * @property {number} PVP=1 PVP value
         */
        gameproto.BattleType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PVE"] = 0;
            values[valuesById[1] = "PVP"] = 1;
            return values;
        })();
    
        return gameproto;
    })();

    return $root;
});
