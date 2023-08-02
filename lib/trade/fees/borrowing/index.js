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
exports.BorrowingFee = exports.borrowingFeeUtils = exports.withinMaxGroupOi = exports.getBorrowingFee = void 0;
const getBorrowingFee = (posStable, pairIndex, long, initialAccFees, context) => {
    if (!context.groups ||
        !context.pairs ||
        !context.openInterest ||
        !context.pairs[pairIndex]) {
        return 0;
    }
    const { pairs } = context;
    const pairGroups = pairs[pairIndex].groups;
    const firstPairGroup = (pairGroups === null || pairGroups === void 0 ? void 0 : pairGroups.length) > 0 ? pairGroups[0] : undefined;
    let fee = 0;
    if (!firstPairGroup || firstPairGroup.block > initialAccFees.block) {
        fee =
            (!firstPairGroup
                ? getPairPendingAccFee(pairIndex, context.currentBlock, long, context)
                : long
                    ? firstPairGroup.pairAccFeeLong
                    : firstPairGroup.pairAccFeeShort) - initialAccFees.accPairFee;
    }
    for (let i = pairGroups.length; i > 0; i--) {
        const { deltaGroup, deltaPair, beforeTradeOpen } = getPairGroupAccFeesDeltas(i - 1, pairGroups, initialAccFees, pairIndex, long, context);
        fee += Math.max(deltaGroup, deltaPair);
        if (beforeTradeOpen) {
            break;
        }
    }
    return (posStable * fee) / 100;
};
exports.getBorrowingFee = getBorrowingFee;
const withinMaxGroupOi = (pairIndex, long, positionSizeStable, context) => {
    const { groups, pairs } = context;
    if (!groups || !pairs) {
        return false;
    }
    const g = groups[getPairGroupIndex(pairIndex, { pairs })];
    return (g.maxOi == 0 || (long ? g.oiLong : g.oiShort) + positionSizeStable <= g.maxOi);
};
exports.withinMaxGroupOi = withinMaxGroupOi;
const getPairGroupIndex = (pairIndex, context) => {
    const { pairs } = context;
    if (!pairs[pairIndex]) {
        return 0;
    }
    const pairGroups = pairs[pairIndex].groups;
    return pairGroups.length == 0 ? 0 : pairGroups[0].groupIndex;
};
const getPairPendingAccFees = (pairIndex, currentBlock, context) => {
    const { pairs, openInterest: { long, short }, accBlockWeightedMarketCap, } = context;
    const pair = pairs[pairIndex];
    const vaultMarketCap = getWeightedVaultMarketCap(accBlockWeightedMarketCap, pair.lastAccBlockWeightedMarketCap, currentBlock - pair.accLastUpdatedBlock);
    return getPendingAccFees(pair.accFeeLong, pair.accFeeShort, long, short, pair.feePerBlock, currentBlock, pair.accLastUpdatedBlock, vaultMarketCap);
};
const getPairPendingAccFee = (pairIndex, currentBlock, long, context) => {
    const { accFeeLong, accFeeShort } = getPairPendingAccFees(pairIndex, currentBlock, context);
    return long ? accFeeLong : accFeeShort;
};
const getGroupPendingAccFees = (groupIndex, currentBlock, context) => {
    const { groups, accBlockWeightedMarketCap } = context;
    const group = groups[groupIndex];
    const vaultMarketCap = getWeightedVaultMarketCap(accBlockWeightedMarketCap, group.lastAccBlockWeightedMarketCap, currentBlock - group.accLastUpdatedBlock);
    return getPendingAccFees(group.accFeeLong, group.accFeeShort, group.oiLong, group.oiShort, group.feePerBlock, currentBlock, group.accLastUpdatedBlock, vaultMarketCap);
};
const getGroupPendingAccFee = (groupIndex, currentBlock, long, context) => {
    const { accFeeLong, accFeeShort } = getGroupPendingAccFees(groupIndex, currentBlock, context);
    return long ? accFeeLong : accFeeShort;
};
const getPairGroupAccFeesDeltas = (i, pairGroups, initialFees, pairIndex, long, context) => {
    const group = pairGroups[i];
    const beforeTradeOpen = group.block < initialFees.block;
    let deltaGroup, deltaPair;
    if (i == pairGroups.length - 1) {
        const { currentBlock, accBlockWeightedMarketCap, groups, pairs, openInterest, } = context;
        deltaGroup = getGroupPendingAccFee(group.groupIndex, currentBlock, long, {
            groups,
            accBlockWeightedMarketCap,
        });
        deltaPair = getPairPendingAccFee(pairIndex, currentBlock, long, {
            pairs,
            openInterest: openInterest,
            accBlockWeightedMarketCap,
        });
    }
    else {
        const nextGroup = pairGroups[i + 1];
        if (beforeTradeOpen && nextGroup.block <= initialFees.block) {
            return { deltaGroup: 0, deltaPair: 0, beforeTradeOpen };
        }
        deltaGroup = long
            ? nextGroup.prevGroupAccFeeLong
            : nextGroup.prevGroupAccFeeShort;
        deltaPair = long ? nextGroup.pairAccFeeLong : nextGroup.pairAccFeeShort;
    }
    if (beforeTradeOpen) {
        deltaGroup -= initialFees.accGroupFee;
        deltaPair -= initialFees.accPairFee;
    }
    else {
        deltaGroup -= long ? group.initialAccFeeLong : group.initialAccFeeShort;
        deltaPair -= long ? group.pairAccFeeLong : group.pairAccFeeShort;
    }
    return { deltaGroup, deltaPair, beforeTradeOpen };
};
const getPendingAccFees = (accFeeLong, accFeeShort, oiLong, oiShort, feePerBlock, currentBlock, accLastUpdatedBlock, vaultMarketCap) => {
    const delta = ((oiLong - oiShort) * feePerBlock * (currentBlock - accLastUpdatedBlock)) /
        vaultMarketCap;
    const newAccFeeLong = delta > 0 ? accFeeLong + delta : accFeeLong;
    const newAccFeeShort = delta < 0 ? accFeeShort - delta : accFeeShort;
    return { accFeeLong: newAccFeeLong, accFeeShort: newAccFeeShort, delta };
};
const getWeightedVaultMarketCap = (accBlockWeightedMarketCap, lastAccBlockWeightedMarketCap, blockDelta) => {
    return blockDelta > 0
        ? blockDelta /
            (accBlockWeightedMarketCap - lastAccBlockWeightedMarketCap) /
            1e18
        : 1;
};
const getActivePairFeePerBlock = (pair, openInterest, accBlockWeightedMarketCap, currentBlock) => {
    const { long, short } = openInterest;
    const vaultMarketCap = getWeightedVaultMarketCap(accBlockWeightedMarketCap, pair.lastAccBlockWeightedMarketCap, currentBlock - pair.accLastUpdatedBlock);
    return (Math.abs(long - short) * pair.feePerBlock) / vaultMarketCap;
};
const getActiveGroupFeePerBlock = (group, accBlockWeightedMarketCap, currentBlock) => {
    const { oiLong, oiShort } = group;
    const vaultMarketCap = getWeightedVaultMarketCap(accBlockWeightedMarketCap, group.lastAccBlockWeightedMarketCap, currentBlock - group.accLastUpdatedBlock);
    return (Math.abs(oiLong - oiShort) * group.feePerBlock) / vaultMarketCap;
};
const getActiveFeePerBlock = (pair, group, pairOpenInterest, accBlockWeightedMarketCap, currentBlock) => {
    const pairFeePerBlock = getActivePairFeePerBlock(pair, pairOpenInterest, accBlockWeightedMarketCap, currentBlock);
    if (!group) {
        return pairFeePerBlock;
    }
    const groupFeePerBlock = getActiveGroupFeePerBlock(group, accBlockWeightedMarketCap, currentBlock);
    return Math.max(pairFeePerBlock, groupFeePerBlock);
};
exports.borrowingFeeUtils = {
    getPairGroupAccFeesDeltas,
    getPairPendingAccFees,
    getPairPendingAccFee,
    getGroupPendingAccFees,
    getGroupPendingAccFee,
    getPendingAccFees,
    getActivePairFeePerBlock,
    getActiveGroupFeePerBlock,
    getActiveFeePerBlock,
    getWeightedVaultMarketCap,
    getPairGroupIndex,
};
exports.BorrowingFee = __importStar(require("./types"));
