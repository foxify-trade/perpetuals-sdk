"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiquidationPrice = void 0;
const fees_1 = require("./fees");
const getLiquidationPrice = (trade, tradeInfo, initialAccFees, context) => {
    const posStable = trade.positionSizeStable;
    const liqPriceDistance = (trade.openPrice *
        (posStable * 0.9 -
            (0, fees_1.getRolloverFee)(posStable, initialAccFees.rollover, initialAccFees.openedAfterUpdate, Object.assign(Object.assign({}, context), { currentBlock: context.currentL1Block })) -
            (0, fees_1.getBorrowingFee)(posStable * trade.leverage, trade.pairIndex, trade.buy, initialAccFees.borrowing, context) -
            (0, fees_1.getFundingFee)(posStable * trade.leverage, initialAccFees.funding, trade.buy, initialAccFees.openedAfterUpdate, Object.assign(Object.assign({}, context), { currentBlock: context.currentL1Block })))) /
        posStable /
        trade.leverage;
    return trade.buy
        ? Math.max(trade.openPrice - liqPriceDistance, 0)
        : Math.max(trade.openPrice + liqPriceDistance, 0);
};
exports.getLiquidationPrice = getLiquidationPrice;
