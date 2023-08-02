"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPendingAccBlockWeightedMarketCap = void 0;
const MC_PRECISION = 1e18;
const getPendingAccBlockWeightedMarketCap = (currentBlock, context) => {
    const { marketCap, accBlockWeightedMarketCap, accBlockWeightedMarketCapLastStored, } = context;
    return (accBlockWeightedMarketCap +
        (currentBlock - accBlockWeightedMarketCapLastStored) /
            Math.max(marketCap * MC_PRECISION, 1));
};
exports.getPendingAccBlockWeightedMarketCap = getPendingAccBlockWeightedMarketCap;
