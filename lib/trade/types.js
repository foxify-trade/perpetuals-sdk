"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenLimitOrderType = exports.PositionType = void 0;
var PositionType;
(function (PositionType) {
    PositionType["LONG"] = "LONG";
    PositionType["SHORT"] = "SHORT";
})(PositionType = exports.PositionType || (exports.PositionType = {}));
var OpenLimitOrderType;
(function (OpenLimitOrderType) {
    OpenLimitOrderType[OpenLimitOrderType["LEGACY"] = 0] = "LEGACY";
    OpenLimitOrderType[OpenLimitOrderType["REVERSAL"] = 1] = "REVERSAL";
    OpenLimitOrderType[OpenLimitOrderType["MOMENTUM"] = 2] = "MOMENTUM";
})(OpenLimitOrderType = exports.OpenLimitOrderType || (exports.OpenLimitOrderType = {}));
