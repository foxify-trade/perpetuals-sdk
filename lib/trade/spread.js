"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpreadWithPriceImpactP = exports.getBaseSpreadP = void 0;
const getBaseSpreadP = (pairSpreadP) => {
    if (!pairSpreadP) {
        return 0;
    }
    return pairSpreadP;
};
exports.getBaseSpreadP = getBaseSpreadP;
const getSpreadWithPriceImpactP = (baseSpreadP, buy, collateral, leverage, pairParams, openInterest) => {
    if (baseSpreadP === undefined) {
        return 0;
    }
    const onePercentDepth = buy
        ? pairParams === null || pairParams === void 0 ? void 0 : pairParams.onePercentDepthAbove
        : pairParams === null || pairParams === void 0 ? void 0 : pairParams.onePercentDepthBelow;
    const existingOi = buy ? openInterest === null || openInterest === void 0 ? void 0 : openInterest.long : openInterest === null || openInterest === void 0 ? void 0 : openInterest.short;
    if (!onePercentDepth ||
        existingOi === undefined ||
        collateral === undefined) {
        return baseSpreadP;
    }
    return (baseSpreadP +
        (existingOi + (collateral * leverage) / 2) / onePercentDepth / 100);
};
exports.getSpreadWithPriceImpactP = getSpreadWithPriceImpactP;
