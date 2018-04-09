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
         * C2GS_CMD enum.
         * @name gameproto.C2GS_CMD
         * @enum {string}
         * @property {number} C2GS_NONE=0 C2GS_NONE value
         * @property {number} C2S_LOGIN=1 C2S_LOGIN value
         * @property {number} C2S_Test=10 C2S_Test value
         * @property {number} C2S_HEART_INFO=254 C2S_HEART_INFO value
         * @property {number} C2S_ACK=255 C2S_ACK value
         */
        gameproto.C2GS_CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "C2GS_NONE"] = 0;
            values[valuesById[1] = "C2S_LOGIN"] = 1;
            values[valuesById[10] = "C2S_Test"] = 10;
            values[valuesById[254] = "C2S_HEART_INFO"] = 254;
            values[valuesById[255] = "C2S_ACK"] = 255;
            return values;
        })();
    
        /**
         * GS2C_CMD enum.
         * @name gameproto.GS2C_CMD
         * @enum {string}
         * @property {number} GS2C_NONE=0 GS2C_NONE value
         * @property {number} S2C_CONFIRM=1 S2C_CONFIRM value
         * @property {number} S2C_LOGIN_END=2 S2C_LOGIN_END value
         * @property {number} S2C_LOGIN_CHAR_INFO=3 S2C_LOGIN_CHAR_INFO value
         * @property {number} S2C_Test=10 S2C_Test value
         */
        gameproto.GS2C_CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GS2C_NONE"] = 0;
            values[valuesById[1] = "S2C_CONFIRM"] = 1;
            values[valuesById[2] = "S2C_LOGIN_END"] = 2;
            values[valuesById[3] = "S2C_LOGIN_CHAR_INFO"] = 3;
            values[valuesById[10] = "S2C_Test"] = 10;
            return values;
        })();
    
        return gameproto;
    })();

    return $root;
});
