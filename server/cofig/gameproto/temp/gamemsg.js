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
         * ChatMsgType enum.
         * @name gameproto.ChatMsgType
         * @enum {string}
         * @property {number} C2S_PrivateChat=0 C2S_PrivateChat value
         * @property {number} S2C_PrivateChat=1 S2C_PrivateChat value
         * @property {number} S2C_PrivateOtherChat=2 S2C_PrivateOtherChat value
         * @property {number} C2S_WorldChat=3 C2S_WorldChat value
         * @property {number} S2C_WorldChat=4 S2C_WorldChat value
         */
        gameproto.ChatMsgType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "C2S_PrivateChat"] = 0;
            values[valuesById[1] = "S2C_PrivateChat"] = 1;
            values[valuesById[2] = "S2C_PrivateOtherChat"] = 2;
            values[valuesById[3] = "C2S_WorldChat"] = 3;
            values[valuesById[4] = "S2C_WorldChat"] = 4;
            return values;
        })();
    
        gameproto.C2S_PrivateChatMsg = (function() {
    
            /**
             * Properties of a C2S_PrivateChatMsg.
             * @memberof gameproto
             * @interface IC2S_PrivateChatMsg
             * @property {string|null} [targetName] C2S_PrivateChatMsg targetName
             * @property {string|null} [msg] C2S_PrivateChatMsg msg
             */
    
            /**
             * Constructs a new C2S_PrivateChatMsg.
             * @memberof gameproto
             * @classdesc Represents a C2S_PrivateChatMsg.
             * @implements IC2S_PrivateChatMsg
             * @constructor
             * @param {gameproto.IC2S_PrivateChatMsg=} [properties] Properties to set
             */
            function C2S_PrivateChatMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C2S_PrivateChatMsg targetName.
             * @member {string} targetName
             * @memberof gameproto.C2S_PrivateChatMsg
             * @instance
             */
            C2S_PrivateChatMsg.prototype.targetName = "";
    
            /**
             * C2S_PrivateChatMsg msg.
             * @member {string} msg
             * @memberof gameproto.C2S_PrivateChatMsg
             * @instance
             */
            C2S_PrivateChatMsg.prototype.msg = "";
    
            /**
             * Creates a new C2S_PrivateChatMsg instance using the specified properties.
             * @function create
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {gameproto.IC2S_PrivateChatMsg=} [properties] Properties to set
             * @returns {gameproto.C2S_PrivateChatMsg} C2S_PrivateChatMsg instance
             */
            C2S_PrivateChatMsg.create = function create(properties) {
                return new C2S_PrivateChatMsg(properties);
            };
    
            /**
             * Encodes the specified C2S_PrivateChatMsg message. Does not implicitly {@link gameproto.C2S_PrivateChatMsg.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {gameproto.IC2S_PrivateChatMsg} message C2S_PrivateChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C2S_PrivateChatMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.targetName != null && message.hasOwnProperty("targetName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetName);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };
    
            /**
             * Encodes the specified C2S_PrivateChatMsg message, length delimited. Does not implicitly {@link gameproto.C2S_PrivateChatMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {gameproto.IC2S_PrivateChatMsg} message C2S_PrivateChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C2S_PrivateChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C2S_PrivateChatMsg message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C2S_PrivateChatMsg} C2S_PrivateChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_PrivateChatMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C2S_PrivateChatMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.targetName = reader.string();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C2S_PrivateChatMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C2S_PrivateChatMsg} C2S_PrivateChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_PrivateChatMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C2S_PrivateChatMsg message.
             * @function verify
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C2S_PrivateChatMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.targetName != null && message.hasOwnProperty("targetName"))
                    if (!$util.isString(message.targetName))
                        return "targetName: string expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };
    
            /**
             * Creates a C2S_PrivateChatMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C2S_PrivateChatMsg} C2S_PrivateChatMsg
             */
            C2S_PrivateChatMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C2S_PrivateChatMsg)
                    return object;
                var message = new $root.gameproto.C2S_PrivateChatMsg();
                if (object.targetName != null)
                    message.targetName = String(object.targetName);
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };
    
            /**
             * Creates a plain object from a C2S_PrivateChatMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C2S_PrivateChatMsg
             * @static
             * @param {gameproto.C2S_PrivateChatMsg} message C2S_PrivateChatMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C2S_PrivateChatMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.targetName = "";
                    object.msg = "";
                }
                if (message.targetName != null && message.hasOwnProperty("targetName"))
                    object.targetName = message.targetName;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };
    
            /**
             * Converts this C2S_PrivateChatMsg to JSON.
             * @function toJSON
             * @memberof gameproto.C2S_PrivateChatMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C2S_PrivateChatMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C2S_PrivateChatMsg;
        })();
    
        gameproto.S2C_PrivateChatMsg = (function() {
    
            /**
             * Properties of a S2C_PrivateChatMsg.
             * @memberof gameproto
             * @interface IS2C_PrivateChatMsg
             * @property {string|null} [targetName] S2C_PrivateChatMsg targetName
             * @property {string|null} [msg] S2C_PrivateChatMsg msg
             * @property {number|null} [result] S2C_PrivateChatMsg result
             */
    
            /**
             * Constructs a new S2C_PrivateChatMsg.
             * @memberof gameproto
             * @classdesc Represents a S2C_PrivateChatMsg.
             * @implements IS2C_PrivateChatMsg
             * @constructor
             * @param {gameproto.IS2C_PrivateChatMsg=} [properties] Properties to set
             */
            function S2C_PrivateChatMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * S2C_PrivateChatMsg targetName.
             * @member {string} targetName
             * @memberof gameproto.S2C_PrivateChatMsg
             * @instance
             */
            S2C_PrivateChatMsg.prototype.targetName = "";
    
            /**
             * S2C_PrivateChatMsg msg.
             * @member {string} msg
             * @memberof gameproto.S2C_PrivateChatMsg
             * @instance
             */
            S2C_PrivateChatMsg.prototype.msg = "";
    
            /**
             * S2C_PrivateChatMsg result.
             * @member {number} result
             * @memberof gameproto.S2C_PrivateChatMsg
             * @instance
             */
            S2C_PrivateChatMsg.prototype.result = 0;
    
            /**
             * Creates a new S2C_PrivateChatMsg instance using the specified properties.
             * @function create
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {gameproto.IS2C_PrivateChatMsg=} [properties] Properties to set
             * @returns {gameproto.S2C_PrivateChatMsg} S2C_PrivateChatMsg instance
             */
            S2C_PrivateChatMsg.create = function create(properties) {
                return new S2C_PrivateChatMsg(properties);
            };
    
            /**
             * Encodes the specified S2C_PrivateChatMsg message. Does not implicitly {@link gameproto.S2C_PrivateChatMsg.verify|verify} messages.
             * @function encode
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {gameproto.IS2C_PrivateChatMsg} message S2C_PrivateChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_PrivateChatMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.targetName != null && message.hasOwnProperty("targetName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetName);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
                return writer;
            };
    
            /**
             * Encodes the specified S2C_PrivateChatMsg message, length delimited. Does not implicitly {@link gameproto.S2C_PrivateChatMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {gameproto.IS2C_PrivateChatMsg} message S2C_PrivateChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_PrivateChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a S2C_PrivateChatMsg message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.S2C_PrivateChatMsg} S2C_PrivateChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_PrivateChatMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.S2C_PrivateChatMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.targetName = reader.string();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    case 3:
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
             * Decodes a S2C_PrivateChatMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.S2C_PrivateChatMsg} S2C_PrivateChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_PrivateChatMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a S2C_PrivateChatMsg message.
             * @function verify
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            S2C_PrivateChatMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.targetName != null && message.hasOwnProperty("targetName"))
                    if (!$util.isString(message.targetName))
                        return "targetName: string expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                return null;
            };
    
            /**
             * Creates a S2C_PrivateChatMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.S2C_PrivateChatMsg} S2C_PrivateChatMsg
             */
            S2C_PrivateChatMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.S2C_PrivateChatMsg)
                    return object;
                var message = new $root.gameproto.S2C_PrivateChatMsg();
                if (object.targetName != null)
                    message.targetName = String(object.targetName);
                if (object.msg != null)
                    message.msg = String(object.msg);
                if (object.result != null)
                    message.result = object.result | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a S2C_PrivateChatMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.S2C_PrivateChatMsg
             * @static
             * @param {gameproto.S2C_PrivateChatMsg} message S2C_PrivateChatMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            S2C_PrivateChatMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.targetName = "";
                    object.msg = "";
                    object.result = 0;
                }
                if (message.targetName != null && message.hasOwnProperty("targetName"))
                    object.targetName = message.targetName;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                return object;
            };
    
            /**
             * Converts this S2C_PrivateChatMsg to JSON.
             * @function toJSON
             * @memberof gameproto.S2C_PrivateChatMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            S2C_PrivateChatMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return S2C_PrivateChatMsg;
        })();
    
        gameproto.S2C_PrivateOtherChatMsg = (function() {
    
            /**
             * Properties of a S2C_PrivateOtherChatMsg.
             * @memberof gameproto
             * @interface IS2C_PrivateOtherChatMsg
             * @property {string|null} [sendName] S2C_PrivateOtherChatMsg sendName
             * @property {string|null} [msg] S2C_PrivateOtherChatMsg msg
             */
    
            /**
             * Constructs a new S2C_PrivateOtherChatMsg.
             * @memberof gameproto
             * @classdesc Represents a S2C_PrivateOtherChatMsg.
             * @implements IS2C_PrivateOtherChatMsg
             * @constructor
             * @param {gameproto.IS2C_PrivateOtherChatMsg=} [properties] Properties to set
             */
            function S2C_PrivateOtherChatMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * S2C_PrivateOtherChatMsg sendName.
             * @member {string} sendName
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @instance
             */
            S2C_PrivateOtherChatMsg.prototype.sendName = "";
    
            /**
             * S2C_PrivateOtherChatMsg msg.
             * @member {string} msg
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @instance
             */
            S2C_PrivateOtherChatMsg.prototype.msg = "";
    
            /**
             * Creates a new S2C_PrivateOtherChatMsg instance using the specified properties.
             * @function create
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {gameproto.IS2C_PrivateOtherChatMsg=} [properties] Properties to set
             * @returns {gameproto.S2C_PrivateOtherChatMsg} S2C_PrivateOtherChatMsg instance
             */
            S2C_PrivateOtherChatMsg.create = function create(properties) {
                return new S2C_PrivateOtherChatMsg(properties);
            };
    
            /**
             * Encodes the specified S2C_PrivateOtherChatMsg message. Does not implicitly {@link gameproto.S2C_PrivateOtherChatMsg.verify|verify} messages.
             * @function encode
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {gameproto.IS2C_PrivateOtherChatMsg} message S2C_PrivateOtherChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_PrivateOtherChatMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sendName != null && message.hasOwnProperty("sendName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.sendName);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };
    
            /**
             * Encodes the specified S2C_PrivateOtherChatMsg message, length delimited. Does not implicitly {@link gameproto.S2C_PrivateOtherChatMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {gameproto.IS2C_PrivateOtherChatMsg} message S2C_PrivateOtherChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_PrivateOtherChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a S2C_PrivateOtherChatMsg message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.S2C_PrivateOtherChatMsg} S2C_PrivateOtherChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_PrivateOtherChatMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.S2C_PrivateOtherChatMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sendName = reader.string();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a S2C_PrivateOtherChatMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.S2C_PrivateOtherChatMsg} S2C_PrivateOtherChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_PrivateOtherChatMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a S2C_PrivateOtherChatMsg message.
             * @function verify
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            S2C_PrivateOtherChatMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sendName != null && message.hasOwnProperty("sendName"))
                    if (!$util.isString(message.sendName))
                        return "sendName: string expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };
    
            /**
             * Creates a S2C_PrivateOtherChatMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.S2C_PrivateOtherChatMsg} S2C_PrivateOtherChatMsg
             */
            S2C_PrivateOtherChatMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.S2C_PrivateOtherChatMsg)
                    return object;
                var message = new $root.gameproto.S2C_PrivateOtherChatMsg();
                if (object.sendName != null)
                    message.sendName = String(object.sendName);
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };
    
            /**
             * Creates a plain object from a S2C_PrivateOtherChatMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @static
             * @param {gameproto.S2C_PrivateOtherChatMsg} message S2C_PrivateOtherChatMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            S2C_PrivateOtherChatMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.sendName = "";
                    object.msg = "";
                }
                if (message.sendName != null && message.hasOwnProperty("sendName"))
                    object.sendName = message.sendName;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };
    
            /**
             * Converts this S2C_PrivateOtherChatMsg to JSON.
             * @function toJSON
             * @memberof gameproto.S2C_PrivateOtherChatMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            S2C_PrivateOtherChatMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return S2C_PrivateOtherChatMsg;
        })();
    
        gameproto.C2S_WorldChatMsg = (function() {
    
            /**
             * Properties of a C2S_WorldChatMsg.
             * @memberof gameproto
             * @interface IC2S_WorldChatMsg
             * @property {string|null} [data] C2S_WorldChatMsg data
             */
    
            /**
             * Constructs a new C2S_WorldChatMsg.
             * @memberof gameproto
             * @classdesc Represents a C2S_WorldChatMsg.
             * @implements IC2S_WorldChatMsg
             * @constructor
             * @param {gameproto.IC2S_WorldChatMsg=} [properties] Properties to set
             */
            function C2S_WorldChatMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C2S_WorldChatMsg data.
             * @member {string} data
             * @memberof gameproto.C2S_WorldChatMsg
             * @instance
             */
            C2S_WorldChatMsg.prototype.data = "";
    
            /**
             * Creates a new C2S_WorldChatMsg instance using the specified properties.
             * @function create
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {gameproto.IC2S_WorldChatMsg=} [properties] Properties to set
             * @returns {gameproto.C2S_WorldChatMsg} C2S_WorldChatMsg instance
             */
            C2S_WorldChatMsg.create = function create(properties) {
                return new C2S_WorldChatMsg(properties);
            };
    
            /**
             * Encodes the specified C2S_WorldChatMsg message. Does not implicitly {@link gameproto.C2S_WorldChatMsg.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {gameproto.IC2S_WorldChatMsg} message C2S_WorldChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C2S_WorldChatMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified C2S_WorldChatMsg message, length delimited. Does not implicitly {@link gameproto.C2S_WorldChatMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {gameproto.IC2S_WorldChatMsg} message C2S_WorldChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C2S_WorldChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C2S_WorldChatMsg message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C2S_WorldChatMsg} C2S_WorldChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_WorldChatMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C2S_WorldChatMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C2S_WorldChatMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C2S_WorldChatMsg} C2S_WorldChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_WorldChatMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C2S_WorldChatMsg message.
             * @function verify
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C2S_WorldChatMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                return null;
            };
    
            /**
             * Creates a C2S_WorldChatMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C2S_WorldChatMsg} C2S_WorldChatMsg
             */
            C2S_WorldChatMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C2S_WorldChatMsg)
                    return object;
                var message = new $root.gameproto.C2S_WorldChatMsg();
                if (object.data != null)
                    message.data = String(object.data);
                return message;
            };
    
            /**
             * Creates a plain object from a C2S_WorldChatMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C2S_WorldChatMsg
             * @static
             * @param {gameproto.C2S_WorldChatMsg} message C2S_WorldChatMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C2S_WorldChatMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.data = "";
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                return object;
            };
    
            /**
             * Converts this C2S_WorldChatMsg to JSON.
             * @function toJSON
             * @memberof gameproto.C2S_WorldChatMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C2S_WorldChatMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C2S_WorldChatMsg;
        })();
    
        gameproto.S2C_WorldChatMsg = (function() {
    
            /**
             * Properties of a S2C_WorldChatMsg.
             * @memberof gameproto
             * @interface IS2C_WorldChatMsg
             * @property {string|null} [name] S2C_WorldChatMsg name
             * @property {string|null} [data] S2C_WorldChatMsg data
             */
    
            /**
             * Constructs a new S2C_WorldChatMsg.
             * @memberof gameproto
             * @classdesc Represents a S2C_WorldChatMsg.
             * @implements IS2C_WorldChatMsg
             * @constructor
             * @param {gameproto.IS2C_WorldChatMsg=} [properties] Properties to set
             */
            function S2C_WorldChatMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * S2C_WorldChatMsg name.
             * @member {string} name
             * @memberof gameproto.S2C_WorldChatMsg
             * @instance
             */
            S2C_WorldChatMsg.prototype.name = "";
    
            /**
             * S2C_WorldChatMsg data.
             * @member {string} data
             * @memberof gameproto.S2C_WorldChatMsg
             * @instance
             */
            S2C_WorldChatMsg.prototype.data = "";
    
            /**
             * Creates a new S2C_WorldChatMsg instance using the specified properties.
             * @function create
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {gameproto.IS2C_WorldChatMsg=} [properties] Properties to set
             * @returns {gameproto.S2C_WorldChatMsg} S2C_WorldChatMsg instance
             */
            S2C_WorldChatMsg.create = function create(properties) {
                return new S2C_WorldChatMsg(properties);
            };
    
            /**
             * Encodes the specified S2C_WorldChatMsg message. Does not implicitly {@link gameproto.S2C_WorldChatMsg.verify|verify} messages.
             * @function encode
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {gameproto.IS2C_WorldChatMsg} message S2C_WorldChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_WorldChatMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified S2C_WorldChatMsg message, length delimited. Does not implicitly {@link gameproto.S2C_WorldChatMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {gameproto.IS2C_WorldChatMsg} message S2C_WorldChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S2C_WorldChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a S2C_WorldChatMsg message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.S2C_WorldChatMsg} S2C_WorldChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_WorldChatMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.S2C_WorldChatMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.data = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a S2C_WorldChatMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.S2C_WorldChatMsg} S2C_WorldChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_WorldChatMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a S2C_WorldChatMsg message.
             * @function verify
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            S2C_WorldChatMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                return null;
            };
    
            /**
             * Creates a S2C_WorldChatMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.S2C_WorldChatMsg} S2C_WorldChatMsg
             */
            S2C_WorldChatMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.S2C_WorldChatMsg)
                    return object;
                var message = new $root.gameproto.S2C_WorldChatMsg();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.data != null)
                    message.data = String(object.data);
                return message;
            };
    
            /**
             * Creates a plain object from a S2C_WorldChatMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.S2C_WorldChatMsg
             * @static
             * @param {gameproto.S2C_WorldChatMsg} message S2C_WorldChatMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            S2C_WorldChatMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.data = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                return object;
            };
    
            /**
             * Converts this S2C_WorldChatMsg to JSON.
             * @function toJSON
             * @memberof gameproto.S2C_WorldChatMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            S2C_WorldChatMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return S2C_WorldChatMsg;
        })();
    
        gameproto.S_ReviseUserInfo = (function() {
    
            /**
             * Properties of a S_ReviseUserInfo.
             * @memberof gameproto
             * @interface IS_ReviseUserInfo
             * @property {string|null} [nickname] S_ReviseUserInfo nickname
             * @property {number|null} [headId] S_ReviseUserInfo headId
             */
    
            /**
             * Constructs a new S_ReviseUserInfo.
             * @memberof gameproto
             * @classdesc Represents a S_ReviseUserInfo.
             * @implements IS_ReviseUserInfo
             * @constructor
             * @param {gameproto.IS_ReviseUserInfo=} [properties] Properties to set
             */
            function S_ReviseUserInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * S_ReviseUserInfo nickname.
             * @member {string} nickname
             * @memberof gameproto.S_ReviseUserInfo
             * @instance
             */
            S_ReviseUserInfo.prototype.nickname = "";
    
            /**
             * S_ReviseUserInfo headId.
             * @member {number} headId
             * @memberof gameproto.S_ReviseUserInfo
             * @instance
             */
            S_ReviseUserInfo.prototype.headId = 0;
    
            /**
             * Creates a new S_ReviseUserInfo instance using the specified properties.
             * @function create
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {gameproto.IS_ReviseUserInfo=} [properties] Properties to set
             * @returns {gameproto.S_ReviseUserInfo} S_ReviseUserInfo instance
             */
            S_ReviseUserInfo.create = function create(properties) {
                return new S_ReviseUserInfo(properties);
            };
    
            /**
             * Encodes the specified S_ReviseUserInfo message. Does not implicitly {@link gameproto.S_ReviseUserInfo.verify|verify} messages.
             * @function encode
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {gameproto.IS_ReviseUserInfo} message S_ReviseUserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_ReviseUserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
                if (message.headId != null && message.hasOwnProperty("headId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.headId);
                return writer;
            };
    
            /**
             * Encodes the specified S_ReviseUserInfo message, length delimited. Does not implicitly {@link gameproto.S_ReviseUserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {gameproto.IS_ReviseUserInfo} message S_ReviseUserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_ReviseUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a S_ReviseUserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.S_ReviseUserInfo} S_ReviseUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_ReviseUserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.S_ReviseUserInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nickname = reader.string();
                        break;
                    case 2:
                        message.headId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a S_ReviseUserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.S_ReviseUserInfo} S_ReviseUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_ReviseUserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a S_ReviseUserInfo message.
             * @function verify
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            S_ReviseUserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.headId != null && message.hasOwnProperty("headId"))
                    if (!$util.isInteger(message.headId))
                        return "headId: integer expected";
                return null;
            };
    
            /**
             * Creates a S_ReviseUserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.S_ReviseUserInfo} S_ReviseUserInfo
             */
            S_ReviseUserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.S_ReviseUserInfo)
                    return object;
                var message = new $root.gameproto.S_ReviseUserInfo();
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.headId != null)
                    message.headId = object.headId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a S_ReviseUserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.S_ReviseUserInfo
             * @static
             * @param {gameproto.S_ReviseUserInfo} message S_ReviseUserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            S_ReviseUserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.nickname = "";
                    object.headId = 0;
                }
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.headId != null && message.hasOwnProperty("headId"))
                    object.headId = message.headId;
                return object;
            };
    
            /**
             * Converts this S_ReviseUserInfo to JSON.
             * @function toJSON
             * @memberof gameproto.S_ReviseUserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            S_ReviseUserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return S_ReviseUserInfo;
        })();
    
        gameproto.C_Response = (function() {
    
            /**
             * Properties of a C_Response.
             * @memberof gameproto
             * @interface IC_Response
             * @property {number|null} [errCode] C_Response errCode
             * @property {string|null} [msg] C_Response msg
             */
    
            /**
             * Constructs a new C_Response.
             * @memberof gameproto
             * @classdesc Represents a C_Response.
             * @implements IC_Response
             * @constructor
             * @param {gameproto.IC_Response=} [properties] Properties to set
             */
            function C_Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_Response errCode.
             * @member {number} errCode
             * @memberof gameproto.C_Response
             * @instance
             */
            C_Response.prototype.errCode = 0;
    
            /**
             * C_Response msg.
             * @member {string} msg
             * @memberof gameproto.C_Response
             * @instance
             */
            C_Response.prototype.msg = "";
    
            /**
             * Creates a new C_Response instance using the specified properties.
             * @function create
             * @memberof gameproto.C_Response
             * @static
             * @param {gameproto.IC_Response=} [properties] Properties to set
             * @returns {gameproto.C_Response} C_Response instance
             */
            C_Response.create = function create(properties) {
                return new C_Response(properties);
            };
    
            /**
             * Encodes the specified C_Response message. Does not implicitly {@link gameproto.C_Response.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C_Response
             * @static
             * @param {gameproto.IC_Response} message C_Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };
    
            /**
             * Encodes the specified C_Response message, length delimited. Does not implicitly {@link gameproto.C_Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C_Response
             * @static
             * @param {gameproto.IC_Response} message C_Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_Response message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C_Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C_Response} C_Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C_Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.errCode = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C_Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C_Response} C_Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_Response message.
             * @function verify
             * @memberof gameproto.C_Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };
    
            /**
             * Creates a C_Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C_Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C_Response} C_Response
             */
            C_Response.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C_Response)
                    return object;
                var message = new $root.gameproto.C_Response();
                if (object.errCode != null)
                    message.errCode = object.errCode | 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };
    
            /**
             * Creates a plain object from a C_Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C_Response
             * @static
             * @param {gameproto.C_Response} message C_Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_Response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.msg = "";
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };
    
            /**
             * Converts this C_Response to JSON.
             * @function toJSON
             * @memberof gameproto.C_Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_Response;
        })();
    
        gameproto.C_UpateAttr = (function() {
    
            /**
             * Properties of a C_UpateAttr.
             * @memberof gameproto
             * @interface IC_UpateAttr
             * @property {string|null} [key] C_UpateAttr key
             * @property {number|Long|null} [val] C_UpateAttr val
             */
    
            /**
             * Constructs a new C_UpateAttr.
             * @memberof gameproto
             * @classdesc Represents a C_UpateAttr.
             * @implements IC_UpateAttr
             * @constructor
             * @param {gameproto.IC_UpateAttr=} [properties] Properties to set
             */
            function C_UpateAttr(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_UpateAttr key.
             * @member {string} key
             * @memberof gameproto.C_UpateAttr
             * @instance
             */
            C_UpateAttr.prototype.key = "";
    
            /**
             * C_UpateAttr val.
             * @member {number|Long} val
             * @memberof gameproto.C_UpateAttr
             * @instance
             */
            C_UpateAttr.prototype.val = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new C_UpateAttr instance using the specified properties.
             * @function create
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {gameproto.IC_UpateAttr=} [properties] Properties to set
             * @returns {gameproto.C_UpateAttr} C_UpateAttr instance
             */
            C_UpateAttr.create = function create(properties) {
                return new C_UpateAttr(properties);
            };
    
            /**
             * Encodes the specified C_UpateAttr message. Does not implicitly {@link gameproto.C_UpateAttr.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {gameproto.IC_UpateAttr} message C_UpateAttr message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_UpateAttr.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.val != null && message.hasOwnProperty("val"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.val);
                return writer;
            };
    
            /**
             * Encodes the specified C_UpateAttr message, length delimited. Does not implicitly {@link gameproto.C_UpateAttr.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {gameproto.IC_UpateAttr} message C_UpateAttr message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_UpateAttr.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_UpateAttr message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C_UpateAttr} C_UpateAttr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_UpateAttr.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C_UpateAttr();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.val = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_UpateAttr message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C_UpateAttr} C_UpateAttr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_UpateAttr.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_UpateAttr message.
             * @function verify
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_UpateAttr.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.val != null && message.hasOwnProperty("val"))
                    if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                        return "val: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a C_UpateAttr message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C_UpateAttr} C_UpateAttr
             */
            C_UpateAttr.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C_UpateAttr)
                    return object;
                var message = new $root.gameproto.C_UpateAttr();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.val != null)
                    if ($util.Long)
                        (message.val = $util.Long.fromValue(object.val)).unsigned = false;
                    else if (typeof object.val === "string")
                        message.val = parseInt(object.val, 10);
                    else if (typeof object.val === "number")
                        message.val = object.val;
                    else if (typeof object.val === "object")
                        message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a C_UpateAttr message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C_UpateAttr
             * @static
             * @param {gameproto.C_UpateAttr} message C_UpateAttr
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_UpateAttr.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.val = options.longs === String ? "0" : 0;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.val != null && message.hasOwnProperty("val"))
                    if (typeof message.val === "number")
                        object.val = options.longs === String ? String(message.val) : message.val;
                    else
                        object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber() : message.val;
                return object;
            };
    
            /**
             * Converts this C_UpateAttr to JSON.
             * @function toJSON
             * @memberof gameproto.C_UpateAttr
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_UpateAttr.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_UpateAttr;
        })();
    
        gameproto.S_RequestBattle = (function() {
    
            /**
             * Properties of a S_RequestBattle.
             * @memberof gameproto
             * @interface IS_RequestBattle
             * @property {number|null} [stageId] S_RequestBattle stageId
             * @property {number|null} [battleType] S_RequestBattle battleType
             */
    
            /**
             * Constructs a new S_RequestBattle.
             * @memberof gameproto
             * @classdesc Represents a S_RequestBattle.
             * @implements IS_RequestBattle
             * @constructor
             * @param {gameproto.IS_RequestBattle=} [properties] Properties to set
             */
            function S_RequestBattle(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * S_RequestBattle stageId.
             * @member {number} stageId
             * @memberof gameproto.S_RequestBattle
             * @instance
             */
            S_RequestBattle.prototype.stageId = 0;
    
            /**
             * S_RequestBattle battleType.
             * @member {number} battleType
             * @memberof gameproto.S_RequestBattle
             * @instance
             */
            S_RequestBattle.prototype.battleType = 0;
    
            /**
             * Creates a new S_RequestBattle instance using the specified properties.
             * @function create
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {gameproto.IS_RequestBattle=} [properties] Properties to set
             * @returns {gameproto.S_RequestBattle} S_RequestBattle instance
             */
            S_RequestBattle.create = function create(properties) {
                return new S_RequestBattle(properties);
            };
    
            /**
             * Encodes the specified S_RequestBattle message. Does not implicitly {@link gameproto.S_RequestBattle.verify|verify} messages.
             * @function encode
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {gameproto.IS_RequestBattle} message S_RequestBattle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_RequestBattle.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stageId);
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.battleType);
                return writer;
            };
    
            /**
             * Encodes the specified S_RequestBattle message, length delimited. Does not implicitly {@link gameproto.S_RequestBattle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {gameproto.IS_RequestBattle} message S_RequestBattle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_RequestBattle.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a S_RequestBattle message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.S_RequestBattle} S_RequestBattle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_RequestBattle.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.S_RequestBattle();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stageId = reader.int32();
                        break;
                    case 2:
                        message.battleType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a S_RequestBattle message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.S_RequestBattle} S_RequestBattle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_RequestBattle.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a S_RequestBattle message.
             * @function verify
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            S_RequestBattle.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    if (!$util.isInteger(message.stageId))
                        return "stageId: integer expected";
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    if (!$util.isInteger(message.battleType))
                        return "battleType: integer expected";
                return null;
            };
    
            /**
             * Creates a S_RequestBattle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.S_RequestBattle} S_RequestBattle
             */
            S_RequestBattle.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.S_RequestBattle)
                    return object;
                var message = new $root.gameproto.S_RequestBattle();
                if (object.stageId != null)
                    message.stageId = object.stageId | 0;
                if (object.battleType != null)
                    message.battleType = object.battleType | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a S_RequestBattle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.S_RequestBattle
             * @static
             * @param {gameproto.S_RequestBattle} message S_RequestBattle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            S_RequestBattle.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stageId = 0;
                    object.battleType = 0;
                }
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    object.stageId = message.stageId;
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    object.battleType = message.battleType;
                return object;
            };
    
            /**
             * Converts this S_RequestBattle to JSON.
             * @function toJSON
             * @memberof gameproto.S_RequestBattle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            S_RequestBattle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return S_RequestBattle;
        })();
    
        gameproto.C_RequestBattle = (function() {
    
            /**
             * Properties of a C_RequestBattle.
             * @memberof gameproto
             * @interface IC_RequestBattle
             * @property {number|null} [stageId] C_RequestBattle stageId
             * @property {number|null} [battleType] C_RequestBattle battleType
             * @property {number|null} [errCode] C_RequestBattle errCode
             */
    
            /**
             * Constructs a new C_RequestBattle.
             * @memberof gameproto
             * @classdesc Represents a C_RequestBattle.
             * @implements IC_RequestBattle
             * @constructor
             * @param {gameproto.IC_RequestBattle=} [properties] Properties to set
             */
            function C_RequestBattle(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_RequestBattle stageId.
             * @member {number} stageId
             * @memberof gameproto.C_RequestBattle
             * @instance
             */
            C_RequestBattle.prototype.stageId = 0;
    
            /**
             * C_RequestBattle battleType.
             * @member {number} battleType
             * @memberof gameproto.C_RequestBattle
             * @instance
             */
            C_RequestBattle.prototype.battleType = 0;
    
            /**
             * C_RequestBattle errCode.
             * @member {number} errCode
             * @memberof gameproto.C_RequestBattle
             * @instance
             */
            C_RequestBattle.prototype.errCode = 0;
    
            /**
             * Creates a new C_RequestBattle instance using the specified properties.
             * @function create
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {gameproto.IC_RequestBattle=} [properties] Properties to set
             * @returns {gameproto.C_RequestBattle} C_RequestBattle instance
             */
            C_RequestBattle.create = function create(properties) {
                return new C_RequestBattle(properties);
            };
    
            /**
             * Encodes the specified C_RequestBattle message. Does not implicitly {@link gameproto.C_RequestBattle.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {gameproto.IC_RequestBattle} message C_RequestBattle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_RequestBattle.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stageId);
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.battleType);
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.errCode);
                return writer;
            };
    
            /**
             * Encodes the specified C_RequestBattle message, length delimited. Does not implicitly {@link gameproto.C_RequestBattle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {gameproto.IC_RequestBattle} message C_RequestBattle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_RequestBattle.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_RequestBattle message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C_RequestBattle} C_RequestBattle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_RequestBattle.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C_RequestBattle();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stageId = reader.int32();
                        break;
                    case 2:
                        message.battleType = reader.int32();
                        break;
                    case 3:
                        message.errCode = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_RequestBattle message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C_RequestBattle} C_RequestBattle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_RequestBattle.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_RequestBattle message.
             * @function verify
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_RequestBattle.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    if (!$util.isInteger(message.stageId))
                        return "stageId: integer expected";
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    if (!$util.isInteger(message.battleType))
                        return "battleType: integer expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                return null;
            };
    
            /**
             * Creates a C_RequestBattle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C_RequestBattle} C_RequestBattle
             */
            C_RequestBattle.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C_RequestBattle)
                    return object;
                var message = new $root.gameproto.C_RequestBattle();
                if (object.stageId != null)
                    message.stageId = object.stageId | 0;
                if (object.battleType != null)
                    message.battleType = object.battleType | 0;
                if (object.errCode != null)
                    message.errCode = object.errCode | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a C_RequestBattle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C_RequestBattle
             * @static
             * @param {gameproto.C_RequestBattle} message C_RequestBattle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_RequestBattle.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stageId = 0;
                    object.battleType = 0;
                    object.errCode = 0;
                }
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    object.stageId = message.stageId;
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    object.battleType = message.battleType;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                return object;
            };
    
            /**
             * Converts this C_RequestBattle to JSON.
             * @function toJSON
             * @memberof gameproto.C_RequestBattle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_RequestBattle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_RequestBattle;
        })();
    
        gameproto.C_StartBattle = (function() {
    
            /**
             * Properties of a C_StartBattle.
             * @memberof gameproto
             * @interface IC_StartBattle
             * @property {number|null} [stageId] C_StartBattle stageId
             * @property {number|null} [battleType] C_StartBattle battleType
             * @property {string|null} [roomId] C_StartBattle roomId
             */
    
            /**
             * Constructs a new C_StartBattle.
             * @memberof gameproto
             * @classdesc Represents a C_StartBattle.
             * @implements IC_StartBattle
             * @constructor
             * @param {gameproto.IC_StartBattle=} [properties] Properties to set
             */
            function C_StartBattle(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_StartBattle stageId.
             * @member {number} stageId
             * @memberof gameproto.C_StartBattle
             * @instance
             */
            C_StartBattle.prototype.stageId = 0;
    
            /**
             * C_StartBattle battleType.
             * @member {number} battleType
             * @memberof gameproto.C_StartBattle
             * @instance
             */
            C_StartBattle.prototype.battleType = 0;
    
            /**
             * C_StartBattle roomId.
             * @member {string} roomId
             * @memberof gameproto.C_StartBattle
             * @instance
             */
            C_StartBattle.prototype.roomId = "";
    
            /**
             * Creates a new C_StartBattle instance using the specified properties.
             * @function create
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {gameproto.IC_StartBattle=} [properties] Properties to set
             * @returns {gameproto.C_StartBattle} C_StartBattle instance
             */
            C_StartBattle.create = function create(properties) {
                return new C_StartBattle(properties);
            };
    
            /**
             * Encodes the specified C_StartBattle message. Does not implicitly {@link gameproto.C_StartBattle.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {gameproto.IC_StartBattle} message C_StartBattle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_StartBattle.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stageId);
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.battleType);
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomId);
                return writer;
            };
    
            /**
             * Encodes the specified C_StartBattle message, length delimited. Does not implicitly {@link gameproto.C_StartBattle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {gameproto.IC_StartBattle} message C_StartBattle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_StartBattle.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_StartBattle message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C_StartBattle} C_StartBattle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_StartBattle.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C_StartBattle();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stageId = reader.int32();
                        break;
                    case 2:
                        message.battleType = reader.int32();
                        break;
                    case 3:
                        message.roomId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_StartBattle message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C_StartBattle} C_StartBattle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_StartBattle.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_StartBattle message.
             * @function verify
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_StartBattle.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    if (!$util.isInteger(message.stageId))
                        return "stageId: integer expected";
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    if (!$util.isInteger(message.battleType))
                        return "battleType: integer expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isString(message.roomId))
                        return "roomId: string expected";
                return null;
            };
    
            /**
             * Creates a C_StartBattle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C_StartBattle} C_StartBattle
             */
            C_StartBattle.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C_StartBattle)
                    return object;
                var message = new $root.gameproto.C_StartBattle();
                if (object.stageId != null)
                    message.stageId = object.stageId | 0;
                if (object.battleType != null)
                    message.battleType = object.battleType | 0;
                if (object.roomId != null)
                    message.roomId = String(object.roomId);
                return message;
            };
    
            /**
             * Creates a plain object from a C_StartBattle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C_StartBattle
             * @static
             * @param {gameproto.C_StartBattle} message C_StartBattle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_StartBattle.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stageId = 0;
                    object.battleType = 0;
                    object.roomId = "";
                }
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    object.stageId = message.stageId;
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    object.battleType = message.battleType;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                return object;
            };
    
            /**
             * Converts this C_StartBattle to JSON.
             * @function toJSON
             * @memberof gameproto.C_StartBattle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_StartBattle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_StartBattle;
        })();
    
        gameproto.C_Balance = (function() {
    
            /**
             * Properties of a C_Balance.
             * @memberof gameproto
             * @interface IC_Balance
             * @property {number|null} [stageId] C_Balance stageId
             * @property {number|null} [battleType] C_Balance battleType
             * @property {Array.<gameproto.IAward>|null} [awards] C_Balance awards
             */
    
            /**
             * Constructs a new C_Balance.
             * @memberof gameproto
             * @classdesc Represents a C_Balance.
             * @implements IC_Balance
             * @constructor
             * @param {gameproto.IC_Balance=} [properties] Properties to set
             */
            function C_Balance(properties) {
                this.awards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_Balance stageId.
             * @member {number} stageId
             * @memberof gameproto.C_Balance
             * @instance
             */
            C_Balance.prototype.stageId = 0;
    
            /**
             * C_Balance battleType.
             * @member {number} battleType
             * @memberof gameproto.C_Balance
             * @instance
             */
            C_Balance.prototype.battleType = 0;
    
            /**
             * C_Balance awards.
             * @member {Array.<gameproto.IAward>} awards
             * @memberof gameproto.C_Balance
             * @instance
             */
            C_Balance.prototype.awards = $util.emptyArray;
    
            /**
             * Creates a new C_Balance instance using the specified properties.
             * @function create
             * @memberof gameproto.C_Balance
             * @static
             * @param {gameproto.IC_Balance=} [properties] Properties to set
             * @returns {gameproto.C_Balance} C_Balance instance
             */
            C_Balance.create = function create(properties) {
                return new C_Balance(properties);
            };
    
            /**
             * Encodes the specified C_Balance message. Does not implicitly {@link gameproto.C_Balance.verify|verify} messages.
             * @function encode
             * @memberof gameproto.C_Balance
             * @static
             * @param {gameproto.IC_Balance} message C_Balance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Balance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stageId);
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.battleType);
                if (message.awards != null && message.awards.length)
                    for (var i = 0; i < message.awards.length; ++i)
                        $root.gameproto.Award.encode(message.awards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified C_Balance message, length delimited. Does not implicitly {@link gameproto.C_Balance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.C_Balance
             * @static
             * @param {gameproto.IC_Balance} message C_Balance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Balance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_Balance message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.C_Balance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.C_Balance} C_Balance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Balance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.C_Balance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stageId = reader.int32();
                        break;
                    case 2:
                        message.battleType = reader.int32();
                        break;
                    case 3:
                        if (!(message.awards && message.awards.length))
                            message.awards = [];
                        message.awards.push($root.gameproto.Award.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_Balance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.C_Balance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.C_Balance} C_Balance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Balance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_Balance message.
             * @function verify
             * @memberof gameproto.C_Balance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_Balance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    if (!$util.isInteger(message.stageId))
                        return "stageId: integer expected";
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    if (!$util.isInteger(message.battleType))
                        return "battleType: integer expected";
                if (message.awards != null && message.hasOwnProperty("awards")) {
                    if (!Array.isArray(message.awards))
                        return "awards: array expected";
                    for (var i = 0; i < message.awards.length; ++i) {
                        var error = $root.gameproto.Award.verify(message.awards[i]);
                        if (error)
                            return "awards." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a C_Balance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.C_Balance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.C_Balance} C_Balance
             */
            C_Balance.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.C_Balance)
                    return object;
                var message = new $root.gameproto.C_Balance();
                if (object.stageId != null)
                    message.stageId = object.stageId | 0;
                if (object.battleType != null)
                    message.battleType = object.battleType | 0;
                if (object.awards) {
                    if (!Array.isArray(object.awards))
                        throw TypeError(".gameproto.C_Balance.awards: array expected");
                    message.awards = [];
                    for (var i = 0; i < object.awards.length; ++i) {
                        if (typeof object.awards[i] !== "object")
                            throw TypeError(".gameproto.C_Balance.awards: object expected");
                        message.awards[i] = $root.gameproto.Award.fromObject(object.awards[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a C_Balance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.C_Balance
             * @static
             * @param {gameproto.C_Balance} message C_Balance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_Balance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.awards = [];
                if (options.defaults) {
                    object.stageId = 0;
                    object.battleType = 0;
                }
                if (message.stageId != null && message.hasOwnProperty("stageId"))
                    object.stageId = message.stageId;
                if (message.battleType != null && message.hasOwnProperty("battleType"))
                    object.battleType = message.battleType;
                if (message.awards && message.awards.length) {
                    object.awards = [];
                    for (var j = 0; j < message.awards.length; ++j)
                        object.awards[j] = $root.gameproto.Award.toObject(message.awards[j], options);
                }
                return object;
            };
    
            /**
             * Converts this C_Balance to JSON.
             * @function toJSON
             * @memberof gameproto.C_Balance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_Balance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_Balance;
        })();
    
        gameproto.Award = (function() {
    
            /**
             * Properties of an Award.
             * @memberof gameproto
             * @interface IAward
             * @property {number|null} [aType] Award aType
             * @property {number|null} [aVal] Award aVal
             */
    
            /**
             * Constructs a new Award.
             * @memberof gameproto
             * @classdesc Represents an Award.
             * @implements IAward
             * @constructor
             * @param {gameproto.IAward=} [properties] Properties to set
             */
            function Award(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Award aType.
             * @member {number} aType
             * @memberof gameproto.Award
             * @instance
             */
            Award.prototype.aType = 0;
    
            /**
             * Award aVal.
             * @member {number} aVal
             * @memberof gameproto.Award
             * @instance
             */
            Award.prototype.aVal = 0;
    
            /**
             * Creates a new Award instance using the specified properties.
             * @function create
             * @memberof gameproto.Award
             * @static
             * @param {gameproto.IAward=} [properties] Properties to set
             * @returns {gameproto.Award} Award instance
             */
            Award.create = function create(properties) {
                return new Award(properties);
            };
    
            /**
             * Encodes the specified Award message. Does not implicitly {@link gameproto.Award.verify|verify} messages.
             * @function encode
             * @memberof gameproto.Award
             * @static
             * @param {gameproto.IAward} message Award message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Award.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.aType != null && message.hasOwnProperty("aType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.aType);
                if (message.aVal != null && message.hasOwnProperty("aVal"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.aVal);
                return writer;
            };
    
            /**
             * Encodes the specified Award message, length delimited. Does not implicitly {@link gameproto.Award.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.Award
             * @static
             * @param {gameproto.IAward} message Award message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Award.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Award message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.Award
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.Award} Award
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Award.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.Award();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.aType = reader.int32();
                        break;
                    case 2:
                        message.aVal = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Award message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.Award
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.Award} Award
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Award.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Award message.
             * @function verify
             * @memberof gameproto.Award
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Award.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.aType != null && message.hasOwnProperty("aType"))
                    if (!$util.isInteger(message.aType))
                        return "aType: integer expected";
                if (message.aVal != null && message.hasOwnProperty("aVal"))
                    if (!$util.isInteger(message.aVal))
                        return "aVal: integer expected";
                return null;
            };
    
            /**
             * Creates an Award message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.Award
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.Award} Award
             */
            Award.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.Award)
                    return object;
                var message = new $root.gameproto.Award();
                if (object.aType != null)
                    message.aType = object.aType | 0;
                if (object.aVal != null)
                    message.aVal = object.aVal | 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Award message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.Award
             * @static
             * @param {gameproto.Award} message Award
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Award.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.aType = 0;
                    object.aVal = 0;
                }
                if (message.aType != null && message.hasOwnProperty("aType"))
                    object.aType = message.aType;
                if (message.aVal != null && message.hasOwnProperty("aVal"))
                    object.aVal = message.aVal;
                return object;
            };
    
            /**
             * Converts this Award to JSON.
             * @function toJSON
             * @memberof gameproto.Award
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Award.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Award;
        })();
    
        gameproto.FVector = (function() {
    
            /**
             * Properties of a FVector.
             * @memberof gameproto
             * @interface IFVector
             * @property {number|null} [x] FVector x
             * @property {number|null} [y] FVector y
             */
    
            /**
             * Constructs a new FVector.
             * @memberof gameproto
             * @classdesc Represents a FVector.
             * @implements IFVector
             * @constructor
             * @param {gameproto.IFVector=} [properties] Properties to set
             */
            function FVector(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FVector x.
             * @member {number} x
             * @memberof gameproto.FVector
             * @instance
             */
            FVector.prototype.x = 0;
    
            /**
             * FVector y.
             * @member {number} y
             * @memberof gameproto.FVector
             * @instance
             */
            FVector.prototype.y = 0;
    
            /**
             * Creates a new FVector instance using the specified properties.
             * @function create
             * @memberof gameproto.FVector
             * @static
             * @param {gameproto.IFVector=} [properties] Properties to set
             * @returns {gameproto.FVector} FVector instance
             */
            FVector.create = function create(properties) {
                return new FVector(properties);
            };
    
            /**
             * Encodes the specified FVector message. Does not implicitly {@link gameproto.FVector.verify|verify} messages.
             * @function encode
             * @memberof gameproto.FVector
             * @static
             * @param {gameproto.IFVector} message FVector message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FVector.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                return writer;
            };
    
            /**
             * Encodes the specified FVector message, length delimited. Does not implicitly {@link gameproto.FVector.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.FVector
             * @static
             * @param {gameproto.IFVector} message FVector message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FVector.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FVector message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.FVector
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.FVector} FVector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FVector.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.FVector();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.float();
                        break;
                    case 2:
                        message.y = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FVector message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.FVector
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.FVector} FVector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FVector.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FVector message.
             * @function verify
             * @memberof gameproto.FVector
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FVector.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                return null;
            };
    
            /**
             * Creates a FVector message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.FVector
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.FVector} FVector
             */
            FVector.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.FVector)
                    return object;
                var message = new $root.gameproto.FVector();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                return message;
            };
    
            /**
             * Creates a plain object from a FVector message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.FVector
             * @static
             * @param {gameproto.FVector} message FVector
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FVector.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                return object;
            };
    
            /**
             * Converts this FVector to JSON.
             * @function toJSON
             * @memberof gameproto.FVector
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FVector.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FVector;
        })();
    
        gameproto.Move = (function() {
    
            /**
             * Properties of a Move.
             * @memberof gameproto
             * @interface IMove
             * @property {number|null} [angle] Move angle
             */
    
            /**
             * Constructs a new Move.
             * @memberof gameproto
             * @classdesc Represents a Move.
             * @implements IMove
             * @constructor
             * @param {gameproto.IMove=} [properties] Properties to set
             */
            function Move(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Move angle.
             * @member {number} angle
             * @memberof gameproto.Move
             * @instance
             */
            Move.prototype.angle = 0;
    
            /**
             * Creates a new Move instance using the specified properties.
             * @function create
             * @memberof gameproto.Move
             * @static
             * @param {gameproto.IMove=} [properties] Properties to set
             * @returns {gameproto.Move} Move instance
             */
            Move.create = function create(properties) {
                return new Move(properties);
            };
    
            /**
             * Encodes the specified Move message. Does not implicitly {@link gameproto.Move.verify|verify} messages.
             * @function encode
             * @memberof gameproto.Move
             * @static
             * @param {gameproto.IMove} message Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Move.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.angle != null && message.hasOwnProperty("angle"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.angle);
                return writer;
            };
    
            /**
             * Encodes the specified Move message, length delimited. Does not implicitly {@link gameproto.Move.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.Move
             * @static
             * @param {gameproto.IMove} message Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Move.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Move message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.Move} Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Move.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.Move();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.angle = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Move message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.Move} Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Move.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Move message.
             * @function verify
             * @memberof gameproto.Move
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Move.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.angle != null && message.hasOwnProperty("angle"))
                    if (typeof message.angle !== "number")
                        return "angle: number expected";
                return null;
            };
    
            /**
             * Creates a Move message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.Move
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.Move} Move
             */
            Move.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.Move)
                    return object;
                var message = new $root.gameproto.Move();
                if (object.angle != null)
                    message.angle = Number(object.angle);
                return message;
            };
    
            /**
             * Creates a plain object from a Move message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.Move
             * @static
             * @param {gameproto.Move} message Move
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Move.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.angle = 0;
                if (message.angle != null && message.hasOwnProperty("angle"))
                    object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
                return object;
            };
    
            /**
             * Converts this Move to JSON.
             * @function toJSON
             * @memberof gameproto.Move
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Move.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Move;
        })();
    
        gameproto.Shot = (function() {
    
            /**
             * Properties of a Shot.
             * @memberof gameproto
             * @interface IShot
             * @property {number|null} [id] Shot id
             * @property {number|null} [bulletId] Shot bulletId
             * @property {gameproto.IFVector|null} [pos] Shot pos
             * @property {number|null} [angel] Shot angel
             */
    
            /**
             * Constructs a new Shot.
             * @memberof gameproto
             * @classdesc Represents a Shot.
             * @implements IShot
             * @constructor
             * @param {gameproto.IShot=} [properties] Properties to set
             */
            function Shot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Shot id.
             * @member {number} id
             * @memberof gameproto.Shot
             * @instance
             */
            Shot.prototype.id = 0;
    
            /**
             * Shot bulletId.
             * @member {number} bulletId
             * @memberof gameproto.Shot
             * @instance
             */
            Shot.prototype.bulletId = 0;
    
            /**
             * Shot pos.
             * @member {gameproto.IFVector|null|undefined} pos
             * @memberof gameproto.Shot
             * @instance
             */
            Shot.prototype.pos = null;
    
            /**
             * Shot angel.
             * @member {number} angel
             * @memberof gameproto.Shot
             * @instance
             */
            Shot.prototype.angel = 0;
    
            /**
             * Creates a new Shot instance using the specified properties.
             * @function create
             * @memberof gameproto.Shot
             * @static
             * @param {gameproto.IShot=} [properties] Properties to set
             * @returns {gameproto.Shot} Shot instance
             */
            Shot.create = function create(properties) {
                return new Shot(properties);
            };
    
            /**
             * Encodes the specified Shot message. Does not implicitly {@link gameproto.Shot.verify|verify} messages.
             * @function encode
             * @memberof gameproto.Shot
             * @static
             * @param {gameproto.IShot} message Shot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Shot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.bulletId != null && message.hasOwnProperty("bulletId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bulletId);
                if (message.pos != null && message.hasOwnProperty("pos"))
                    $root.gameproto.FVector.encode(message.pos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.angel != null && message.hasOwnProperty("angel"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.angel);
                return writer;
            };
    
            /**
             * Encodes the specified Shot message, length delimited. Does not implicitly {@link gameproto.Shot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.Shot
             * @static
             * @param {gameproto.IShot} message Shot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Shot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Shot message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.Shot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.Shot} Shot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.Shot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.bulletId = reader.int32();
                        break;
                    case 3:
                        message.pos = $root.gameproto.FVector.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.angel = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Shot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.Shot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.Shot} Shot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Shot message.
             * @function verify
             * @memberof gameproto.Shot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Shot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.bulletId != null && message.hasOwnProperty("bulletId"))
                    if (!$util.isInteger(message.bulletId))
                        return "bulletId: integer expected";
                if (message.pos != null && message.hasOwnProperty("pos")) {
                    var error = $root.gameproto.FVector.verify(message.pos);
                    if (error)
                        return "pos." + error;
                }
                if (message.angel != null && message.hasOwnProperty("angel"))
                    if (typeof message.angel !== "number")
                        return "angel: number expected";
                return null;
            };
    
            /**
             * Creates a Shot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.Shot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.Shot} Shot
             */
            Shot.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.Shot)
                    return object;
                var message = new $root.gameproto.Shot();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.bulletId != null)
                    message.bulletId = object.bulletId | 0;
                if (object.pos != null) {
                    if (typeof object.pos !== "object")
                        throw TypeError(".gameproto.Shot.pos: object expected");
                    message.pos = $root.gameproto.FVector.fromObject(object.pos);
                }
                if (object.angel != null)
                    message.angel = Number(object.angel);
                return message;
            };
    
            /**
             * Creates a plain object from a Shot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.Shot
             * @static
             * @param {gameproto.Shot} message Shot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Shot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.bulletId = 0;
                    object.pos = null;
                    object.angel = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.bulletId != null && message.hasOwnProperty("bulletId"))
                    object.bulletId = message.bulletId;
                if (message.pos != null && message.hasOwnProperty("pos"))
                    object.pos = $root.gameproto.FVector.toObject(message.pos, options);
                if (message.angel != null && message.hasOwnProperty("angel"))
                    object.angel = options.json && !isFinite(message.angel) ? String(message.angel) : message.angel;
                return object;
            };
    
            /**
             * Converts this Shot to JSON.
             * @function toJSON
             * @memberof gameproto.Shot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Shot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Shot;
        })();
    
        gameproto.UseItem = (function() {
    
            /**
             * Properties of a UseItem.
             * @memberof gameproto
             * @interface IUseItem
             * @property {number|null} [itemId] UseItem itemId
             */
    
            /**
             * Constructs a new UseItem.
             * @memberof gameproto
             * @classdesc Represents a UseItem.
             * @implements IUseItem
             * @constructor
             * @param {gameproto.IUseItem=} [properties] Properties to set
             */
            function UseItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UseItem itemId.
             * @member {number} itemId
             * @memberof gameproto.UseItem
             * @instance
             */
            UseItem.prototype.itemId = 0;
    
            /**
             * Creates a new UseItem instance using the specified properties.
             * @function create
             * @memberof gameproto.UseItem
             * @static
             * @param {gameproto.IUseItem=} [properties] Properties to set
             * @returns {gameproto.UseItem} UseItem instance
             */
            UseItem.create = function create(properties) {
                return new UseItem(properties);
            };
    
            /**
             * Encodes the specified UseItem message. Does not implicitly {@link gameproto.UseItem.verify|verify} messages.
             * @function encode
             * @memberof gameproto.UseItem
             * @static
             * @param {gameproto.IUseItem} message UseItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UseItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
                return writer;
            };
    
            /**
             * Encodes the specified UseItem message, length delimited. Does not implicitly {@link gameproto.UseItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.UseItem
             * @static
             * @param {gameproto.IUseItem} message UseItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UseItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UseItem message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.UseItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.UseItem} UseItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UseItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.UseItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.itemId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UseItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.UseItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.UseItem} UseItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UseItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UseItem message.
             * @function verify
             * @memberof gameproto.UseItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UseItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    if (!$util.isInteger(message.itemId))
                        return "itemId: integer expected";
                return null;
            };
    
            /**
             * Creates a UseItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.UseItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.UseItem} UseItem
             */
            UseItem.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.UseItem)
                    return object;
                var message = new $root.gameproto.UseItem();
                if (object.itemId != null)
                    message.itemId = object.itemId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a UseItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.UseItem
             * @static
             * @param {gameproto.UseItem} message UseItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UseItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.itemId = 0;
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    object.itemId = message.itemId;
                return object;
            };
    
            /**
             * Converts this UseItem to JSON.
             * @function toJSON
             * @memberof gameproto.UseItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UseItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UseItem;
        })();
    
        gameproto.FighterSnapInfo = (function() {
    
            /**
             * Properties of a FighterSnapInfo.
             * @memberof gameproto
             * @interface IFighterSnapInfo
             * @property {number|null} [id] FighterSnapInfo id
             * @property {gameproto.IFVector|null} [pos] FighterSnapInfo pos
             * @property {gameproto.IFVector|null} [vel] FighterSnapInfo vel
             */
    
            /**
             * Constructs a new FighterSnapInfo.
             * @memberof gameproto
             * @classdesc Represents a FighterSnapInfo.
             * @implements IFighterSnapInfo
             * @constructor
             * @param {gameproto.IFighterSnapInfo=} [properties] Properties to set
             */
            function FighterSnapInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FighterSnapInfo id.
             * @member {number} id
             * @memberof gameproto.FighterSnapInfo
             * @instance
             */
            FighterSnapInfo.prototype.id = 0;
    
            /**
             * FighterSnapInfo pos.
             * @member {gameproto.IFVector|null|undefined} pos
             * @memberof gameproto.FighterSnapInfo
             * @instance
             */
            FighterSnapInfo.prototype.pos = null;
    
            /**
             * FighterSnapInfo vel.
             * @member {gameproto.IFVector|null|undefined} vel
             * @memberof gameproto.FighterSnapInfo
             * @instance
             */
            FighterSnapInfo.prototype.vel = null;
    
            /**
             * Creates a new FighterSnapInfo instance using the specified properties.
             * @function create
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {gameproto.IFighterSnapInfo=} [properties] Properties to set
             * @returns {gameproto.FighterSnapInfo} FighterSnapInfo instance
             */
            FighterSnapInfo.create = function create(properties) {
                return new FighterSnapInfo(properties);
            };
    
            /**
             * Encodes the specified FighterSnapInfo message. Does not implicitly {@link gameproto.FighterSnapInfo.verify|verify} messages.
             * @function encode
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {gameproto.IFighterSnapInfo} message FighterSnapInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FighterSnapInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.pos != null && message.hasOwnProperty("pos"))
                    $root.gameproto.FVector.encode(message.pos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.vel != null && message.hasOwnProperty("vel"))
                    $root.gameproto.FVector.encode(message.vel, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified FighterSnapInfo message, length delimited. Does not implicitly {@link gameproto.FighterSnapInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {gameproto.IFighterSnapInfo} message FighterSnapInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FighterSnapInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FighterSnapInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.FighterSnapInfo} FighterSnapInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FighterSnapInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.FighterSnapInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.pos = $root.gameproto.FVector.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.vel = $root.gameproto.FVector.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FighterSnapInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.FighterSnapInfo} FighterSnapInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FighterSnapInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FighterSnapInfo message.
             * @function verify
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FighterSnapInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.pos != null && message.hasOwnProperty("pos")) {
                    var error = $root.gameproto.FVector.verify(message.pos);
                    if (error)
                        return "pos." + error;
                }
                if (message.vel != null && message.hasOwnProperty("vel")) {
                    var error = $root.gameproto.FVector.verify(message.vel);
                    if (error)
                        return "vel." + error;
                }
                return null;
            };
    
            /**
             * Creates a FighterSnapInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.FighterSnapInfo} FighterSnapInfo
             */
            FighterSnapInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.FighterSnapInfo)
                    return object;
                var message = new $root.gameproto.FighterSnapInfo();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.pos != null) {
                    if (typeof object.pos !== "object")
                        throw TypeError(".gameproto.FighterSnapInfo.pos: object expected");
                    message.pos = $root.gameproto.FVector.fromObject(object.pos);
                }
                if (object.vel != null) {
                    if (typeof object.vel !== "object")
                        throw TypeError(".gameproto.FighterSnapInfo.vel: object expected");
                    message.vel = $root.gameproto.FVector.fromObject(object.vel);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FighterSnapInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.FighterSnapInfo
             * @static
             * @param {gameproto.FighterSnapInfo} message FighterSnapInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FighterSnapInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.pos = null;
                    object.vel = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.pos != null && message.hasOwnProperty("pos"))
                    object.pos = $root.gameproto.FVector.toObject(message.pos, options);
                if (message.vel != null && message.hasOwnProperty("vel"))
                    object.vel = $root.gameproto.FVector.toObject(message.vel, options);
                return object;
            };
    
            /**
             * Converts this FighterSnapInfo to JSON.
             * @function toJSON
             * @memberof gameproto.FighterSnapInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FighterSnapInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FighterSnapInfo;
        })();
    
        gameproto.Snap = (function() {
    
            /**
             * Properties of a Snap.
             * @memberof gameproto
             * @interface ISnap
             * @property {Array.<gameproto.IFighterSnapInfo>|null} [infos] Snap infos
             */
    
            /**
             * Constructs a new Snap.
             * @memberof gameproto
             * @classdesc Represents a Snap.
             * @implements ISnap
             * @constructor
             * @param {gameproto.ISnap=} [properties] Properties to set
             */
            function Snap(properties) {
                this.infos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Snap infos.
             * @member {Array.<gameproto.IFighterSnapInfo>} infos
             * @memberof gameproto.Snap
             * @instance
             */
            Snap.prototype.infos = $util.emptyArray;
    
            /**
             * Creates a new Snap instance using the specified properties.
             * @function create
             * @memberof gameproto.Snap
             * @static
             * @param {gameproto.ISnap=} [properties] Properties to set
             * @returns {gameproto.Snap} Snap instance
             */
            Snap.create = function create(properties) {
                return new Snap(properties);
            };
    
            /**
             * Encodes the specified Snap message. Does not implicitly {@link gameproto.Snap.verify|verify} messages.
             * @function encode
             * @memberof gameproto.Snap
             * @static
             * @param {gameproto.ISnap} message Snap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Snap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.infos != null && message.infos.length)
                    for (var i = 0; i < message.infos.length; ++i)
                        $root.gameproto.FighterSnapInfo.encode(message.infos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Snap message, length delimited. Does not implicitly {@link gameproto.Snap.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.Snap
             * @static
             * @param {gameproto.ISnap} message Snap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Snap.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Snap message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.Snap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.Snap} Snap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Snap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.Snap();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.infos && message.infos.length))
                            message.infos = [];
                        message.infos.push($root.gameproto.FighterSnapInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Snap message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.Snap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.Snap} Snap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Snap.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Snap message.
             * @function verify
             * @memberof gameproto.Snap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Snap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.infos != null && message.hasOwnProperty("infos")) {
                    if (!Array.isArray(message.infos))
                        return "infos: array expected";
                    for (var i = 0; i < message.infos.length; ++i) {
                        var error = $root.gameproto.FighterSnapInfo.verify(message.infos[i]);
                        if (error)
                            return "infos." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Snap message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.Snap
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.Snap} Snap
             */
            Snap.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.Snap)
                    return object;
                var message = new $root.gameproto.Snap();
                if (object.infos) {
                    if (!Array.isArray(object.infos))
                        throw TypeError(".gameproto.Snap.infos: array expected");
                    message.infos = [];
                    for (var i = 0; i < object.infos.length; ++i) {
                        if (typeof object.infos[i] !== "object")
                            throw TypeError(".gameproto.Snap.infos: object expected");
                        message.infos[i] = $root.gameproto.FighterSnapInfo.fromObject(object.infos[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Snap message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.Snap
             * @static
             * @param {gameproto.Snap} message Snap
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Snap.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.infos = [];
                if (message.infos && message.infos.length) {
                    object.infos = [];
                    for (var j = 0; j < message.infos.length; ++j)
                        object.infos[j] = $root.gameproto.FighterSnapInfo.toObject(message.infos[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Snap to JSON.
             * @function toJSON
             * @memberof gameproto.Snap
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Snap.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Snap;
        })();
    
        gameproto.FighterInfo = (function() {
    
            /**
             * Properties of a FighterInfo.
             * @memberof gameproto
             * @interface IFighterInfo
             * @property {number|null} [id] FighterInfo id
             * @property {gameproto.IFVector|null} [pos] FighterInfo pos
             * @property {gameproto.IFVector|null} [vel] FighterInfo vel
             * @property {string|null} [name] FighterInfo name
             * @property {number|null} [hp] FighterInfo hp
             */
    
            /**
             * Constructs a new FighterInfo.
             * @memberof gameproto
             * @classdesc Represents a FighterInfo.
             * @implements IFighterInfo
             * @constructor
             * @param {gameproto.IFighterInfo=} [properties] Properties to set
             */
            function FighterInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FighterInfo id.
             * @member {number} id
             * @memberof gameproto.FighterInfo
             * @instance
             */
            FighterInfo.prototype.id = 0;
    
            /**
             * FighterInfo pos.
             * @member {gameproto.IFVector|null|undefined} pos
             * @memberof gameproto.FighterInfo
             * @instance
             */
            FighterInfo.prototype.pos = null;
    
            /**
             * FighterInfo vel.
             * @member {gameproto.IFVector|null|undefined} vel
             * @memberof gameproto.FighterInfo
             * @instance
             */
            FighterInfo.prototype.vel = null;
    
            /**
             * FighterInfo name.
             * @member {string} name
             * @memberof gameproto.FighterInfo
             * @instance
             */
            FighterInfo.prototype.name = "";
    
            /**
             * FighterInfo hp.
             * @member {number} hp
             * @memberof gameproto.FighterInfo
             * @instance
             */
            FighterInfo.prototype.hp = 0;
    
            /**
             * Creates a new FighterInfo instance using the specified properties.
             * @function create
             * @memberof gameproto.FighterInfo
             * @static
             * @param {gameproto.IFighterInfo=} [properties] Properties to set
             * @returns {gameproto.FighterInfo} FighterInfo instance
             */
            FighterInfo.create = function create(properties) {
                return new FighterInfo(properties);
            };
    
            /**
             * Encodes the specified FighterInfo message. Does not implicitly {@link gameproto.FighterInfo.verify|verify} messages.
             * @function encode
             * @memberof gameproto.FighterInfo
             * @static
             * @param {gameproto.IFighterInfo} message FighterInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FighterInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.pos != null && message.hasOwnProperty("pos"))
                    $root.gameproto.FVector.encode(message.pos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.vel != null && message.hasOwnProperty("vel"))
                    $root.gameproto.FVector.encode(message.vel, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                if (message.hp != null && message.hasOwnProperty("hp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hp);
                return writer;
            };
    
            /**
             * Encodes the specified FighterInfo message, length delimited. Does not implicitly {@link gameproto.FighterInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.FighterInfo
             * @static
             * @param {gameproto.IFighterInfo} message FighterInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FighterInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FighterInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.FighterInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.FighterInfo} FighterInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FighterInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.FighterInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.pos = $root.gameproto.FVector.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.vel = $root.gameproto.FVector.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.name = reader.string();
                        break;
                    case 5:
                        message.hp = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FighterInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.FighterInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.FighterInfo} FighterInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FighterInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FighterInfo message.
             * @function verify
             * @memberof gameproto.FighterInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FighterInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.pos != null && message.hasOwnProperty("pos")) {
                    var error = $root.gameproto.FVector.verify(message.pos);
                    if (error)
                        return "pos." + error;
                }
                if (message.vel != null && message.hasOwnProperty("vel")) {
                    var error = $root.gameproto.FVector.verify(message.vel);
                    if (error)
                        return "vel." + error;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.hp != null && message.hasOwnProperty("hp"))
                    if (!$util.isInteger(message.hp))
                        return "hp: integer expected";
                return null;
            };
    
            /**
             * Creates a FighterInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.FighterInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.FighterInfo} FighterInfo
             */
            FighterInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.FighterInfo)
                    return object;
                var message = new $root.gameproto.FighterInfo();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.pos != null) {
                    if (typeof object.pos !== "object")
                        throw TypeError(".gameproto.FighterInfo.pos: object expected");
                    message.pos = $root.gameproto.FVector.fromObject(object.pos);
                }
                if (object.vel != null) {
                    if (typeof object.vel !== "object")
                        throw TypeError(".gameproto.FighterInfo.vel: object expected");
                    message.vel = $root.gameproto.FVector.fromObject(object.vel);
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.hp != null)
                    message.hp = object.hp | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a FighterInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.FighterInfo
             * @static
             * @param {gameproto.FighterInfo} message FighterInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FighterInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.pos = null;
                    object.vel = null;
                    object.name = "";
                    object.hp = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.pos != null && message.hasOwnProperty("pos"))
                    object.pos = $root.gameproto.FVector.toObject(message.pos, options);
                if (message.vel != null && message.hasOwnProperty("vel"))
                    object.vel = $root.gameproto.FVector.toObject(message.vel, options);
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.hp != null && message.hasOwnProperty("hp"))
                    object.hp = message.hp;
                return object;
            };
    
            /**
             * Converts this FighterInfo to JSON.
             * @function toJSON
             * @memberof gameproto.FighterInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FighterInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FighterInfo;
        })();
    
        gameproto.BattleStart = (function() {
    
            /**
             * Properties of a BattleStart.
             * @memberof gameproto
             * @interface IBattleStart
             * @property {gameproto.IFighterInfo|null} [self] BattleStart self
             * @property {Array.<gameproto.IFighterInfo>|null} [fighters] BattleStart fighters
             */
    
            /**
             * Constructs a new BattleStart.
             * @memberof gameproto
             * @classdesc Represents a BattleStart.
             * @implements IBattleStart
             * @constructor
             * @param {gameproto.IBattleStart=} [properties] Properties to set
             */
            function BattleStart(properties) {
                this.fighters = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BattleStart self.
             * @member {gameproto.IFighterInfo|null|undefined} self
             * @memberof gameproto.BattleStart
             * @instance
             */
            BattleStart.prototype.self = null;
    
            /**
             * BattleStart fighters.
             * @member {Array.<gameproto.IFighterInfo>} fighters
             * @memberof gameproto.BattleStart
             * @instance
             */
            BattleStart.prototype.fighters = $util.emptyArray;
    
            /**
             * Creates a new BattleStart instance using the specified properties.
             * @function create
             * @memberof gameproto.BattleStart
             * @static
             * @param {gameproto.IBattleStart=} [properties] Properties to set
             * @returns {gameproto.BattleStart} BattleStart instance
             */
            BattleStart.create = function create(properties) {
                return new BattleStart(properties);
            };
    
            /**
             * Encodes the specified BattleStart message. Does not implicitly {@link gameproto.BattleStart.verify|verify} messages.
             * @function encode
             * @memberof gameproto.BattleStart
             * @static
             * @param {gameproto.IBattleStart} message BattleStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BattleStart.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.self != null && message.hasOwnProperty("self"))
                    $root.gameproto.FighterInfo.encode(message.self, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.fighters != null && message.fighters.length)
                    for (var i = 0; i < message.fighters.length; ++i)
                        $root.gameproto.FighterInfo.encode(message.fighters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified BattleStart message, length delimited. Does not implicitly {@link gameproto.BattleStart.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.BattleStart
             * @static
             * @param {gameproto.IBattleStart} message BattleStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BattleStart.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BattleStart message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.BattleStart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.BattleStart} BattleStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BattleStart.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.BattleStart();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.self = $root.gameproto.FighterInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.fighters && message.fighters.length))
                            message.fighters = [];
                        message.fighters.push($root.gameproto.FighterInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BattleStart message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.BattleStart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.BattleStart} BattleStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BattleStart.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BattleStart message.
             * @function verify
             * @memberof gameproto.BattleStart
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BattleStart.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.self != null && message.hasOwnProperty("self")) {
                    var error = $root.gameproto.FighterInfo.verify(message.self);
                    if (error)
                        return "self." + error;
                }
                if (message.fighters != null && message.hasOwnProperty("fighters")) {
                    if (!Array.isArray(message.fighters))
                        return "fighters: array expected";
                    for (var i = 0; i < message.fighters.length; ++i) {
                        var error = $root.gameproto.FighterInfo.verify(message.fighters[i]);
                        if (error)
                            return "fighters." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a BattleStart message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.BattleStart
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.BattleStart} BattleStart
             */
            BattleStart.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.BattleStart)
                    return object;
                var message = new $root.gameproto.BattleStart();
                if (object.self != null) {
                    if (typeof object.self !== "object")
                        throw TypeError(".gameproto.BattleStart.self: object expected");
                    message.self = $root.gameproto.FighterInfo.fromObject(object.self);
                }
                if (object.fighters) {
                    if (!Array.isArray(object.fighters))
                        throw TypeError(".gameproto.BattleStart.fighters: array expected");
                    message.fighters = [];
                    for (var i = 0; i < object.fighters.length; ++i) {
                        if (typeof object.fighters[i] !== "object")
                            throw TypeError(".gameproto.BattleStart.fighters: object expected");
                        message.fighters[i] = $root.gameproto.FighterInfo.fromObject(object.fighters[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BattleStart message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.BattleStart
             * @static
             * @param {gameproto.BattleStart} message BattleStart
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BattleStart.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.fighters = [];
                if (options.defaults)
                    object.self = null;
                if (message.self != null && message.hasOwnProperty("self"))
                    object.self = $root.gameproto.FighterInfo.toObject(message.self, options);
                if (message.fighters && message.fighters.length) {
                    object.fighters = [];
                    for (var j = 0; j < message.fighters.length; ++j)
                        object.fighters[j] = $root.gameproto.FighterInfo.toObject(message.fighters[j], options);
                }
                return object;
            };
    
            /**
             * Converts this BattleStart to JSON.
             * @function toJSON
             * @memberof gameproto.BattleStart
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BattleStart.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BattleStart;
        })();
    
        gameproto.NewStage = (function() {
    
            /**
             * Properties of a NewStage.
             * @memberof gameproto
             * @interface INewStage
             * @property {number|null} [stage] NewStage stage
             * @property {Array.<gameproto.IFighterInfo>|null} [fighters] NewStage fighters
             */
    
            /**
             * Constructs a new NewStage.
             * @memberof gameproto
             * @classdesc Represents a NewStage.
             * @implements INewStage
             * @constructor
             * @param {gameproto.INewStage=} [properties] Properties to set
             */
            function NewStage(properties) {
                this.fighters = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NewStage stage.
             * @member {number} stage
             * @memberof gameproto.NewStage
             * @instance
             */
            NewStage.prototype.stage = 0;
    
            /**
             * NewStage fighters.
             * @member {Array.<gameproto.IFighterInfo>} fighters
             * @memberof gameproto.NewStage
             * @instance
             */
            NewStage.prototype.fighters = $util.emptyArray;
    
            /**
             * Creates a new NewStage instance using the specified properties.
             * @function create
             * @memberof gameproto.NewStage
             * @static
             * @param {gameproto.INewStage=} [properties] Properties to set
             * @returns {gameproto.NewStage} NewStage instance
             */
            NewStage.create = function create(properties) {
                return new NewStage(properties);
            };
    
            /**
             * Encodes the specified NewStage message. Does not implicitly {@link gameproto.NewStage.verify|verify} messages.
             * @function encode
             * @memberof gameproto.NewStage
             * @static
             * @param {gameproto.INewStage} message NewStage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewStage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stage != null && message.hasOwnProperty("stage"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stage);
                if (message.fighters != null && message.fighters.length)
                    for (var i = 0; i < message.fighters.length; ++i)
                        $root.gameproto.FighterInfo.encode(message.fighters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified NewStage message, length delimited. Does not implicitly {@link gameproto.NewStage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.NewStage
             * @static
             * @param {gameproto.INewStage} message NewStage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewStage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NewStage message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.NewStage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.NewStage} NewStage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewStage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.NewStage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stage = reader.int32();
                        break;
                    case 2:
                        if (!(message.fighters && message.fighters.length))
                            message.fighters = [];
                        message.fighters.push($root.gameproto.FighterInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NewStage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.NewStage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.NewStage} NewStage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewStage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NewStage message.
             * @function verify
             * @memberof gameproto.NewStage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NewStage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stage != null && message.hasOwnProperty("stage"))
                    if (!$util.isInteger(message.stage))
                        return "stage: integer expected";
                if (message.fighters != null && message.hasOwnProperty("fighters")) {
                    if (!Array.isArray(message.fighters))
                        return "fighters: array expected";
                    for (var i = 0; i < message.fighters.length; ++i) {
                        var error = $root.gameproto.FighterInfo.verify(message.fighters[i]);
                        if (error)
                            return "fighters." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a NewStage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.NewStage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.NewStage} NewStage
             */
            NewStage.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.NewStage)
                    return object;
                var message = new $root.gameproto.NewStage();
                if (object.stage != null)
                    message.stage = object.stage | 0;
                if (object.fighters) {
                    if (!Array.isArray(object.fighters))
                        throw TypeError(".gameproto.NewStage.fighters: array expected");
                    message.fighters = [];
                    for (var i = 0; i < object.fighters.length; ++i) {
                        if (typeof object.fighters[i] !== "object")
                            throw TypeError(".gameproto.NewStage.fighters: object expected");
                        message.fighters[i] = $root.gameproto.FighterInfo.fromObject(object.fighters[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a NewStage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.NewStage
             * @static
             * @param {gameproto.NewStage} message NewStage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NewStage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.fighters = [];
                if (options.defaults)
                    object.stage = 0;
                if (message.stage != null && message.hasOwnProperty("stage"))
                    object.stage = message.stage;
                if (message.fighters && message.fighters.length) {
                    object.fighters = [];
                    for (var j = 0; j < message.fighters.length; ++j)
                        object.fighters[j] = $root.gameproto.FighterInfo.toObject(message.fighters[j], options);
                }
                return object;
            };
    
            /**
             * Converts this NewStage to JSON.
             * @function toJSON
             * @memberof gameproto.NewStage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NewStage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NewStage;
        })();
    
        gameproto.GameOver = (function() {
    
            /**
             * Properties of a GameOver.
             * @memberof gameproto
             * @interface IGameOver
             * @property {number|null} [winner] GameOver winner
             * @property {number|null} [time] GameOver time
             * @property {number|null} [stage] GameOver stage
             * @property {number|null} [kill] GameOver kill
             */
    
            /**
             * Constructs a new GameOver.
             * @memberof gameproto
             * @classdesc Represents a GameOver.
             * @implements IGameOver
             * @constructor
             * @param {gameproto.IGameOver=} [properties] Properties to set
             */
            function GameOver(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameOver winner.
             * @member {number} winner
             * @memberof gameproto.GameOver
             * @instance
             */
            GameOver.prototype.winner = 0;
    
            /**
             * GameOver time.
             * @member {number} time
             * @memberof gameproto.GameOver
             * @instance
             */
            GameOver.prototype.time = 0;
    
            /**
             * GameOver stage.
             * @member {number} stage
             * @memberof gameproto.GameOver
             * @instance
             */
            GameOver.prototype.stage = 0;
    
            /**
             * GameOver kill.
             * @member {number} kill
             * @memberof gameproto.GameOver
             * @instance
             */
            GameOver.prototype.kill = 0;
    
            /**
             * Creates a new GameOver instance using the specified properties.
             * @function create
             * @memberof gameproto.GameOver
             * @static
             * @param {gameproto.IGameOver=} [properties] Properties to set
             * @returns {gameproto.GameOver} GameOver instance
             */
            GameOver.create = function create(properties) {
                return new GameOver(properties);
            };
    
            /**
             * Encodes the specified GameOver message. Does not implicitly {@link gameproto.GameOver.verify|verify} messages.
             * @function encode
             * @memberof gameproto.GameOver
             * @static
             * @param {gameproto.IGameOver} message GameOver message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameOver.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.winner != null && message.hasOwnProperty("winner"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.winner);
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
                if (message.stage != null && message.hasOwnProperty("stage"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stage);
                if (message.kill != null && message.hasOwnProperty("kill"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.kill);
                return writer;
            };
    
            /**
             * Encodes the specified GameOver message, length delimited. Does not implicitly {@link gameproto.GameOver.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.GameOver
             * @static
             * @param {gameproto.IGameOver} message GameOver message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameOver.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GameOver message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.GameOver
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.GameOver} GameOver
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameOver.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.GameOver();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.winner = reader.int32();
                        break;
                    case 2:
                        message.time = reader.int32();
                        break;
                    case 3:
                        message.stage = reader.int32();
                        break;
                    case 4:
                        message.kill = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GameOver message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.GameOver
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.GameOver} GameOver
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameOver.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GameOver message.
             * @function verify
             * @memberof gameproto.GameOver
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameOver.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.winner != null && message.hasOwnProperty("winner"))
                    if (!$util.isInteger(message.winner))
                        return "winner: integer expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                if (message.stage != null && message.hasOwnProperty("stage"))
                    if (!$util.isInteger(message.stage))
                        return "stage: integer expected";
                if (message.kill != null && message.hasOwnProperty("kill"))
                    if (!$util.isInteger(message.kill))
                        return "kill: integer expected";
                return null;
            };
    
            /**
             * Creates a GameOver message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.GameOver
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.GameOver} GameOver
             */
            GameOver.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.GameOver)
                    return object;
                var message = new $root.gameproto.GameOver();
                if (object.winner != null)
                    message.winner = object.winner | 0;
                if (object.time != null)
                    message.time = object.time | 0;
                if (object.stage != null)
                    message.stage = object.stage | 0;
                if (object.kill != null)
                    message.kill = object.kill | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a GameOver message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.GameOver
             * @static
             * @param {gameproto.GameOver} message GameOver
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameOver.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.winner = 0;
                    object.time = 0;
                    object.stage = 0;
                    object.kill = 0;
                }
                if (message.winner != null && message.hasOwnProperty("winner"))
                    object.winner = message.winner;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                if (message.stage != null && message.hasOwnProperty("stage"))
                    object.stage = message.stage;
                if (message.kill != null && message.hasOwnProperty("kill"))
                    object.kill = message.kill;
                return object;
            };
    
            /**
             * Converts this GameOver to JSON.
             * @function toJSON
             * @memberof gameproto.GameOver
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameOver.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GameOver;
        })();
    
        gameproto.Hit = (function() {
    
            /**
             * Properties of a Hit.
             * @memberof gameproto
             * @interface IHit
             * @property {number|null} [bulletId] Hit bulletId
             * @property {number|null} [targetId] Hit targetId
             * @property {number|null} [loseHP] Hit loseHP
             */
    
            /**
             * Constructs a new Hit.
             * @memberof gameproto
             * @classdesc Represents a Hit.
             * @implements IHit
             * @constructor
             * @param {gameproto.IHit=} [properties] Properties to set
             */
            function Hit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Hit bulletId.
             * @member {number} bulletId
             * @memberof gameproto.Hit
             * @instance
             */
            Hit.prototype.bulletId = 0;
    
            /**
             * Hit targetId.
             * @member {number} targetId
             * @memberof gameproto.Hit
             * @instance
             */
            Hit.prototype.targetId = 0;
    
            /**
             * Hit loseHP.
             * @member {number} loseHP
             * @memberof gameproto.Hit
             * @instance
             */
            Hit.prototype.loseHP = 0;
    
            /**
             * Creates a new Hit instance using the specified properties.
             * @function create
             * @memberof gameproto.Hit
             * @static
             * @param {gameproto.IHit=} [properties] Properties to set
             * @returns {gameproto.Hit} Hit instance
             */
            Hit.create = function create(properties) {
                return new Hit(properties);
            };
    
            /**
             * Encodes the specified Hit message. Does not implicitly {@link gameproto.Hit.verify|verify} messages.
             * @function encode
             * @memberof gameproto.Hit
             * @static
             * @param {gameproto.IHit} message Hit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bulletId != null && message.hasOwnProperty("bulletId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bulletId);
                if (message.targetId != null && message.hasOwnProperty("targetId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.targetId);
                if (message.loseHP != null && message.hasOwnProperty("loseHP"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.loseHP);
                return writer;
            };
    
            /**
             * Encodes the specified Hit message, length delimited. Does not implicitly {@link gameproto.Hit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.Hit
             * @static
             * @param {gameproto.IHit} message Hit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Hit message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.Hit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.Hit} Hit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.Hit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bulletId = reader.int32();
                        break;
                    case 2:
                        message.targetId = reader.int32();
                        break;
                    case 3:
                        message.loseHP = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Hit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.Hit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.Hit} Hit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Hit message.
             * @function verify
             * @memberof gameproto.Hit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bulletId != null && message.hasOwnProperty("bulletId"))
                    if (!$util.isInteger(message.bulletId))
                        return "bulletId: integer expected";
                if (message.targetId != null && message.hasOwnProperty("targetId"))
                    if (!$util.isInteger(message.targetId))
                        return "targetId: integer expected";
                if (message.loseHP != null && message.hasOwnProperty("loseHP"))
                    if (!$util.isInteger(message.loseHP))
                        return "loseHP: integer expected";
                return null;
            };
    
            /**
             * Creates a Hit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.Hit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.Hit} Hit
             */
            Hit.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.Hit)
                    return object;
                var message = new $root.gameproto.Hit();
                if (object.bulletId != null)
                    message.bulletId = object.bulletId | 0;
                if (object.targetId != null)
                    message.targetId = object.targetId | 0;
                if (object.loseHP != null)
                    message.loseHP = object.loseHP | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Hit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.Hit
             * @static
             * @param {gameproto.Hit} message Hit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.bulletId = 0;
                    object.targetId = 0;
                    object.loseHP = 0;
                }
                if (message.bulletId != null && message.hasOwnProperty("bulletId"))
                    object.bulletId = message.bulletId;
                if (message.targetId != null && message.hasOwnProperty("targetId"))
                    object.targetId = message.targetId;
                if (message.loseHP != null && message.hasOwnProperty("loseHP"))
                    object.loseHP = message.loseHP;
                return object;
            };
    
            /**
             * Converts this Hit to JSON.
             * @function toJSON
             * @memberof gameproto.Hit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Hit;
        })();
    
        gameproto.Dead = (function() {
    
            /**
             * Properties of a Dead.
             * @memberof gameproto
             * @interface IDead
             * @property {number|null} [id] Dead id
             * @property {number|null} [enemyId] Dead enemyId
             */
    
            /**
             * Constructs a new Dead.
             * @memberof gameproto
             * @classdesc Represents a Dead.
             * @implements IDead
             * @constructor
             * @param {gameproto.IDead=} [properties] Properties to set
             */
            function Dead(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Dead id.
             * @member {number} id
             * @memberof gameproto.Dead
             * @instance
             */
            Dead.prototype.id = 0;
    
            /**
             * Dead enemyId.
             * @member {number} enemyId
             * @memberof gameproto.Dead
             * @instance
             */
            Dead.prototype.enemyId = 0;
    
            /**
             * Creates a new Dead instance using the specified properties.
             * @function create
             * @memberof gameproto.Dead
             * @static
             * @param {gameproto.IDead=} [properties] Properties to set
             * @returns {gameproto.Dead} Dead instance
             */
            Dead.create = function create(properties) {
                return new Dead(properties);
            };
    
            /**
             * Encodes the specified Dead message. Does not implicitly {@link gameproto.Dead.verify|verify} messages.
             * @function encode
             * @memberof gameproto.Dead
             * @static
             * @param {gameproto.IDead} message Dead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dead.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.enemyId != null && message.hasOwnProperty("enemyId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.enemyId);
                return writer;
            };
    
            /**
             * Encodes the specified Dead message, length delimited. Does not implicitly {@link gameproto.Dead.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.Dead
             * @static
             * @param {gameproto.IDead} message Dead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dead.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Dead message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.Dead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.Dead} Dead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dead.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.Dead();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.enemyId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Dead message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.Dead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.Dead} Dead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dead.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Dead message.
             * @function verify
             * @memberof gameproto.Dead
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Dead.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.enemyId != null && message.hasOwnProperty("enemyId"))
                    if (!$util.isInteger(message.enemyId))
                        return "enemyId: integer expected";
                return null;
            };
    
            /**
             * Creates a Dead message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.Dead
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.Dead} Dead
             */
            Dead.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.Dead)
                    return object;
                var message = new $root.gameproto.Dead();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.enemyId != null)
                    message.enemyId = object.enemyId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Dead message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.Dead
             * @static
             * @param {gameproto.Dead} message Dead
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Dead.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.enemyId = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.enemyId != null && message.hasOwnProperty("enemyId"))
                    object.enemyId = message.enemyId;
                return object;
            };
    
            /**
             * Converts this Dead to JSON.
             * @function toJSON
             * @memberof gameproto.Dead
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Dead.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Dead;
        })();
    
        gameproto.AddEntity = (function() {
    
            /**
             * Properties of an AddEntity.
             * @memberof gameproto
             * @interface IAddEntity
             * @property {number|null} [id] AddEntity id
             * @property {gameproto.IFVector|null} [pos] AddEntity pos
             * @property {gameproto.IFVector|null} [vel] AddEntity vel
             * @property {number|null} [etype] AddEntity etype
             */
    
            /**
             * Constructs a new AddEntity.
             * @memberof gameproto
             * @classdesc Represents an AddEntity.
             * @implements IAddEntity
             * @constructor
             * @param {gameproto.IAddEntity=} [properties] Properties to set
             */
            function AddEntity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AddEntity id.
             * @member {number} id
             * @memberof gameproto.AddEntity
             * @instance
             */
            AddEntity.prototype.id = 0;
    
            /**
             * AddEntity pos.
             * @member {gameproto.IFVector|null|undefined} pos
             * @memberof gameproto.AddEntity
             * @instance
             */
            AddEntity.prototype.pos = null;
    
            /**
             * AddEntity vel.
             * @member {gameproto.IFVector|null|undefined} vel
             * @memberof gameproto.AddEntity
             * @instance
             */
            AddEntity.prototype.vel = null;
    
            /**
             * AddEntity etype.
             * @member {number} etype
             * @memberof gameproto.AddEntity
             * @instance
             */
            AddEntity.prototype.etype = 0;
    
            /**
             * Creates a new AddEntity instance using the specified properties.
             * @function create
             * @memberof gameproto.AddEntity
             * @static
             * @param {gameproto.IAddEntity=} [properties] Properties to set
             * @returns {gameproto.AddEntity} AddEntity instance
             */
            AddEntity.create = function create(properties) {
                return new AddEntity(properties);
            };
    
            /**
             * Encodes the specified AddEntity message. Does not implicitly {@link gameproto.AddEntity.verify|verify} messages.
             * @function encode
             * @memberof gameproto.AddEntity
             * @static
             * @param {gameproto.IAddEntity} message AddEntity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddEntity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.pos != null && message.hasOwnProperty("pos"))
                    $root.gameproto.FVector.encode(message.pos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.vel != null && message.hasOwnProperty("vel"))
                    $root.gameproto.FVector.encode(message.vel, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.etype != null && message.hasOwnProperty("etype"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.etype);
                return writer;
            };
    
            /**
             * Encodes the specified AddEntity message, length delimited. Does not implicitly {@link gameproto.AddEntity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.AddEntity
             * @static
             * @param {gameproto.IAddEntity} message AddEntity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddEntity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AddEntity message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.AddEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.AddEntity} AddEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddEntity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.AddEntity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.pos = $root.gameproto.FVector.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.vel = $root.gameproto.FVector.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.etype = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AddEntity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.AddEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.AddEntity} AddEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddEntity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AddEntity message.
             * @function verify
             * @memberof gameproto.AddEntity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddEntity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.pos != null && message.hasOwnProperty("pos")) {
                    var error = $root.gameproto.FVector.verify(message.pos);
                    if (error)
                        return "pos." + error;
                }
                if (message.vel != null && message.hasOwnProperty("vel")) {
                    var error = $root.gameproto.FVector.verify(message.vel);
                    if (error)
                        return "vel." + error;
                }
                if (message.etype != null && message.hasOwnProperty("etype"))
                    if (!$util.isInteger(message.etype))
                        return "etype: integer expected";
                return null;
            };
    
            /**
             * Creates an AddEntity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.AddEntity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.AddEntity} AddEntity
             */
            AddEntity.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.AddEntity)
                    return object;
                var message = new $root.gameproto.AddEntity();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.pos != null) {
                    if (typeof object.pos !== "object")
                        throw TypeError(".gameproto.AddEntity.pos: object expected");
                    message.pos = $root.gameproto.FVector.fromObject(object.pos);
                }
                if (object.vel != null) {
                    if (typeof object.vel !== "object")
                        throw TypeError(".gameproto.AddEntity.vel: object expected");
                    message.vel = $root.gameproto.FVector.fromObject(object.vel);
                }
                if (object.etype != null)
                    message.etype = object.etype | 0;
                return message;
            };
    
            /**
             * Creates a plain object from an AddEntity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.AddEntity
             * @static
             * @param {gameproto.AddEntity} message AddEntity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddEntity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.pos = null;
                    object.vel = null;
                    object.etype = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.pos != null && message.hasOwnProperty("pos"))
                    object.pos = $root.gameproto.FVector.toObject(message.pos, options);
                if (message.vel != null && message.hasOwnProperty("vel"))
                    object.vel = $root.gameproto.FVector.toObject(message.vel, options);
                if (message.etype != null && message.hasOwnProperty("etype"))
                    object.etype = message.etype;
                return object;
            };
    
            /**
             * Converts this AddEntity to JSON.
             * @function toJSON
             * @memberof gameproto.AddEntity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddEntity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AddEntity;
        })();
    
        gameproto.RemoveEntity = (function() {
    
            /**
             * Properties of a RemoveEntity.
             * @memberof gameproto
             * @interface IRemoveEntity
             * @property {number|null} [id] RemoveEntity id
             * @property {number|null} [etype] RemoveEntity etype
             */
    
            /**
             * Constructs a new RemoveEntity.
             * @memberof gameproto
             * @classdesc Represents a RemoveEntity.
             * @implements IRemoveEntity
             * @constructor
             * @param {gameproto.IRemoveEntity=} [properties] Properties to set
             */
            function RemoveEntity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RemoveEntity id.
             * @member {number} id
             * @memberof gameproto.RemoveEntity
             * @instance
             */
            RemoveEntity.prototype.id = 0;
    
            /**
             * RemoveEntity etype.
             * @member {number} etype
             * @memberof gameproto.RemoveEntity
             * @instance
             */
            RemoveEntity.prototype.etype = 0;
    
            /**
             * Creates a new RemoveEntity instance using the specified properties.
             * @function create
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {gameproto.IRemoveEntity=} [properties] Properties to set
             * @returns {gameproto.RemoveEntity} RemoveEntity instance
             */
            RemoveEntity.create = function create(properties) {
                return new RemoveEntity(properties);
            };
    
            /**
             * Encodes the specified RemoveEntity message. Does not implicitly {@link gameproto.RemoveEntity.verify|verify} messages.
             * @function encode
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {gameproto.IRemoveEntity} message RemoveEntity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveEntity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.etype != null && message.hasOwnProperty("etype"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.etype);
                return writer;
            };
    
            /**
             * Encodes the specified RemoveEntity message, length delimited. Does not implicitly {@link gameproto.RemoveEntity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {gameproto.IRemoveEntity} message RemoveEntity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveEntity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RemoveEntity message from the specified reader or buffer.
             * @function decode
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameproto.RemoveEntity} RemoveEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveEntity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameproto.RemoveEntity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.etype = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RemoveEntity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameproto.RemoveEntity} RemoveEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveEntity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RemoveEntity message.
             * @function verify
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoveEntity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.etype != null && message.hasOwnProperty("etype"))
                    if (!$util.isInteger(message.etype))
                        return "etype: integer expected";
                return null;
            };
    
            /**
             * Creates a RemoveEntity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameproto.RemoveEntity} RemoveEntity
             */
            RemoveEntity.fromObject = function fromObject(object) {
                if (object instanceof $root.gameproto.RemoveEntity)
                    return object;
                var message = new $root.gameproto.RemoveEntity();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.etype != null)
                    message.etype = object.etype | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RemoveEntity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameproto.RemoveEntity
             * @static
             * @param {gameproto.RemoveEntity} message RemoveEntity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RemoveEntity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.etype = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.etype != null && message.hasOwnProperty("etype"))
                    object.etype = message.etype;
                return object;
            };
    
            /**
             * Converts this RemoveEntity to JSON.
             * @function toJSON
             * @memberof gameproto.RemoveEntity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RemoveEntity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RemoveEntity;
        })();
    
        return gameproto;
    })();

    return $root;
});
