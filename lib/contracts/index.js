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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractsForChain = void 0;
const addresses_1 = require("./addresses");
const factories_1 = require("./types/generated/factories");
const getContractsForChain = (chainId, signerOrProvider) => {
    const addresses = (0, addresses_1.getContractAddressesForChain)(chainId);
    return {
        storage: factories_1.TradingStorage__factory.connect(addresses.storage, signerOrProvider),
        pairInfos: factories_1.PairInfos__factory.connect(addresses.pairInfos, signerOrProvider),
        pairsStorage: factories_1.PairsStorage__factory.connect(addresses.pairsStorage, signerOrProvider),
        openPnlFeed: factories_1.OpenPnlFeed__factory.connect(addresses.openPnlFeed, signerOrProvider),
        orderTokenManagement: factories_1.OrderTokenManagement__factory.connect(addresses.orderTokenManagement, signerOrProvider),
        borrowingFees: factories_1.BorrowingFees__factory.connect(addresses.borrowingFees, signerOrProvider),
        callbacks: factories_1.Callbacks__factory.connect(addresses.callbacks, signerOrProvider),
    };
};
exports.getContractsForChain = getContractsForChain;
__exportStar(require("./utils"), exports);
__exportStar(require("./addresses"), exports);
