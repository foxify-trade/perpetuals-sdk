"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOpenLimitOrdersRaw = exports.fetchOpenLimitOrders = void 0;
const ethcall_1 = require("ethcall");
const fetchOpenLimitOrders = (contracts, overrides = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const openLimitOrdersRaw = yield (0, exports.fetchOpenLimitOrdersRaw)(contracts, overrides);
    return openLimitOrdersRaw.map((order) => ({
        block: parseInt(order.block.toString()),
        buy: order.buy,
        index: parseInt(order.index.toString()),
        leverage: parseInt(order.leverage.toString()),
        maxPrice: parseFloat(order.maxPrice.toString()) / 1e10,
        minPrice: parseFloat(order.minPrice.toString()) / 1e10,
        pairIndex: parseInt(order.pairIndex.toString()),
        positionSize: parseFloat(order.positionSize.toString()) / 1e6,
        sl: parseFloat(order.sl.toString()) / 1e10,
        tp: parseFloat(order.tp.toString()) / 1e10,
        trader: order.trader,
        type: parseInt(order.type.toString()),
    }));
});
exports.fetchOpenLimitOrders = fetchOpenLimitOrders;
const fetchOpenLimitOrdersRaw = (contracts, overrides = {}) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contracts) {
        return [];
    }
    console.time("fetchOpenLimitOrdersRaw");
    const { useMulticall = false, blockTag = "latest" } = overrides;
    const { storage: storageContract, orderTokenManagement: nftRewards } = contracts;
    const openLimitOrders = yield storageContract.getOpenLimitOrders({
        blockTag,
    });
    let openLimitOrderTypes = [];
    if (useMulticall) {
        const multicallProvider = new ethcall_1.Provider();
        yield multicallProvider.init(storageContract.provider);
        const nftRewardsContractMulticall = new ethcall_1.Contract(nftRewards.address, [
            ...nftRewards.interface.fragments,
        ]);
        openLimitOrderTypes = yield multicallProvider.all(openLimitOrders.map((order) => nftRewardsContractMulticall.openLimitOrderTypes(order.trader, order.pairIndex, order.index)), blockTag);
    }
    else {
        openLimitOrderTypes = yield Promise.all(openLimitOrders.map(order => nftRewards.openLimitOrderTypes(order.trader, order.pairIndex, order.index, { blockTag })));
    }
    return openLimitOrderTypes.map((openLimitOrderType, index) => {
        const openLimitOrder = openLimitOrders[index];
        return {
            trader: openLimitOrder.trader,
            pairIndex: openLimitOrder.pairIndex,
            index: openLimitOrder.index,
            positionSize: openLimitOrder.positionSize,
            buy: openLimitOrder.buy,
            leverage: openLimitOrder.leverage,
            tp: openLimitOrder.tp,
            sl: openLimitOrder.sl,
            minPrice: openLimitOrder.minPrice,
            maxPrice: openLimitOrder.maxPrice,
            block: openLimitOrder.block,
            type: openLimitOrderType,
        };
    });
});
exports.fetchOpenLimitOrdersRaw = fetchOpenLimitOrdersRaw;
