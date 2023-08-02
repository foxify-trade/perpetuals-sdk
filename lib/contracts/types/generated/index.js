"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingStorage__factory = exports.PairsStorage__factory = exports.PairInfos__factory = exports.OrderTokenManagement__factory = exports.OpenPnlFeed__factory = exports.Callbacks__factory = exports.BorrowingFees__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var BorrowingFees__factory_1 = require("./factories/BorrowingFees__factory");
Object.defineProperty(exports, "BorrowingFees__factory", { enumerable: true, get: function () { return BorrowingFees__factory_1.BorrowingFees__factory; } });
var Callbacks__factory_1 = require("./factories/Callbacks__factory");
Object.defineProperty(exports, "Callbacks__factory", { enumerable: true, get: function () { return Callbacks__factory_1.Callbacks__factory; } });
var OpenPnlFeed__factory_1 = require("./factories/OpenPnlFeed__factory");
Object.defineProperty(exports, "OpenPnlFeed__factory", { enumerable: true, get: function () { return OpenPnlFeed__factory_1.OpenPnlFeed__factory; } });
var OrderTokenManagement__factory_1 = require("./factories/OrderTokenManagement__factory");
Object.defineProperty(exports, "OrderTokenManagement__factory", { enumerable: true, get: function () { return OrderTokenManagement__factory_1.OrderTokenManagement__factory; } });
var PairInfos__factory_1 = require("./factories/PairInfos__factory");
Object.defineProperty(exports, "PairInfos__factory", { enumerable: true, get: function () { return PairInfos__factory_1.PairInfos__factory; } });
var PairsStorage__factory_1 = require("./factories/PairsStorage__factory");
Object.defineProperty(exports, "PairsStorage__factory", { enumerable: true, get: function () { return PairsStorage__factory_1.PairsStorage__factory; } });
var TradingStorage__factory_1 = require("./factories/TradingStorage__factory");
Object.defineProperty(exports, "TradingStorage__factory", { enumerable: true, get: function () { return TradingStorage__factory_1.TradingStorage__factory; } });
