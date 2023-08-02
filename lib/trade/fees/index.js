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
exports.getRolloverFee = exports.getFundingFee = exports.getClosingFee = void 0;
const getClosingFee = (posStable, leverage, pairIndex, pairFee) => {
    if (posStable === undefined ||
        leverage === undefined ||
        pairIndex === undefined ||
        pairFee === undefined) {
        return 0;
    }
    const { closeFeeP } = pairFee;
    return closeFeeP * posStable * leverage;
};
exports.getClosingFee = getClosingFee;
const getFundingFee = (leveragedPosStable, initialAccFundingFees, buy, openedAfterUpdate, context) => {
    const { pairParams, pairFundingFees, openInterest, currentBlock } = context;
    if (!currentBlock ||
        !openedAfterUpdate ||
        pairParams === undefined ||
        pairFundingFees === undefined ||
        openInterest === undefined)
        return 0;
    const { accPerOiLong, accPerOiShort, lastUpdateBlock } = pairFundingFees;
    const { fundingFeePerBlockP } = pairParams;
    const { long: longOi, short: shortOi } = openInterest;
    const fundingFeesPaidByLongs = (longOi - shortOi) * fundingFeePerBlockP * (currentBlock - lastUpdateBlock);
    const pendingAccFundingFees = buy
        ? accPerOiLong + fundingFeesPaidByLongs / longOi
        : accPerOiShort + (fundingFeesPaidByLongs * -1) / shortOi;
    return leveragedPosStable * (pendingAccFundingFees - initialAccFundingFees);
};
exports.getFundingFee = getFundingFee;
const getRolloverFee = (posStable, initialAccRolloverFees, openedAfterUpdate, context) => {
    const { pairParams, pairRolloverFees, currentBlock } = context;
    if (!currentBlock ||
        !openedAfterUpdate ||
        pairParams === undefined ||
        pairRolloverFees === undefined)
        return 0;
    const { accPerCollateral, lastUpdateBlock } = pairRolloverFees;
    const { rolloverFeePerBlockP } = pairParams;
    const pendingAccRolloverFees = accPerCollateral + (currentBlock - lastUpdateBlock) * rolloverFeePerBlockP;
    return posStable * (pendingAccRolloverFees - initialAccRolloverFees);
};
exports.getRolloverFee = getRolloverFee;
__exportStar(require("./borrowing"), exports);
