"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFulfillmentPrice = void 0;
const spread_1 = require("./spread");
const types_1 = require("./types");
const getFulfillmentPrice = (order, pair, pairParams, openInterest) => {
    if (!order || !pair) {
        return 0;
    }
    // Get spread percentage
    const baseSpreadP = (0, spread_1.getBaseSpreadP)(pair.spreadP);
    const spreadWithPriceImpactP = (0, spread_1.getSpreadWithPriceImpactP)(baseSpreadP, order.buy, order.positionSize, order.leverage, pairParams, openInterest);
    if (spreadWithPriceImpactP === 0) {
        return 0;
    }
    const askingPrice = (order.buy && order.type === types_1.OpenLimitOrderType.REVERSAL) ||
        (!order.buy && order.type === types_1.OpenLimitOrderType.MOMENTUM)
        ? order.maxPrice
        : order.minPrice;
    return order.buy
        ? askingPrice * (1 - spreadWithPriceImpactP)
        : askingPrice * (1 + spreadWithPriceImpactP);
};
exports.getFulfillmentPrice = getFulfillmentPrice;
