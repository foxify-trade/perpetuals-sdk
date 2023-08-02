"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPnl = void 0;
const fees_1 = require("./fees");
const getPnl = (price, trade, initialAccFees, useFees, context) => {
    if (!price) {
        return;
    }
    const posStable = trade.positionSizeStable;
    const { openPrice, leverage } = trade;
    const { maxGainP, pairParams, pairRolloverFees, pairFundingFees, openInterest, fee, currentL1Block, } = context;
    const maxGain = maxGainP === undefined ? Infinity : (maxGainP / 100) * posStable;
    let pnlStable = trade.buy
        ? ((price - openPrice) / openPrice) * leverage * posStable
        : ((openPrice - price) / openPrice) * leverage * posStable;
    pnlStable = pnlStable > maxGain ? maxGain : pnlStable;
    if (useFees) {
        pnlStable -= (0, fees_1.getRolloverFee)(posStable, initialAccFees.rollover, initialAccFees.openedAfterUpdate, {
            currentBlock: currentL1Block,
            pairParams,
            pairRolloverFees,
        });
        pnlStable -= (0, fees_1.getFundingFee)(posStable * trade.leverage, initialAccFees.funding, trade.buy, initialAccFees.openedAfterUpdate, {
            currentBlock: currentL1Block,
            pairParams,
            pairFundingFees,
            openInterest,
        });
        pnlStable -= (0, fees_1.getBorrowingFee)(posStable, trade.pairIndex, trade.buy, initialAccFees.borrowing, context);
    }
    let pnlPercentage = (pnlStable / posStable) * 100;
    // Can be liquidated
    if (pnlPercentage <= -90) {
        pnlPercentage = -100;
    }
    else {
        pnlStable -= (0, fees_1.getClosingFee)(posStable, trade.leverage, trade.pairIndex, fee);
        pnlPercentage = (pnlStable / posStable) * 100;
    }
    pnlPercentage = pnlPercentage < -100 ? -100 : pnlPercentage;
    pnlStable = (posStable * pnlPercentage) / 100;
    return [pnlStable, pnlPercentage];
};
exports.getPnl = getPnl;
