"use strict";
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
exports.fetchOpenPairTradesRaw = exports.fetchOpenPairTrades = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const ethcall_1 = require("ethcall");
const fetchOpenPairTrades = (contracts, overrides = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const rawTrades = yield (0, exports.fetchOpenPairTradesRaw)(contracts, overrides);
    return rawTrades.map(rawTrade => _prepareTradeContainer(rawTrade.trade, rawTrade.tradeInfo, rawTrade.initialAccFees));
});
exports.fetchOpenPairTrades = fetchOpenPairTrades;
const fetchOpenPairTradesRaw = (contracts, overrides = {}) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contracts) {
        return [];
    }
    const { pairBatchSize = 10, useMulticall = false, blockTag = "latest", } = overrides;
    const { pairsStorage: pairsStorageContract } = contracts;
    try {
        const totalPairIndexes = (yield pairsStorageContract.pairsCount({ blockTag })).toNumber() - 1;
        let allOpenPairTrades = [];
        for (let batchStartPairIndex = 0; batchStartPairIndex < totalPairIndexes; batchStartPairIndex += pairBatchSize) {
            const batchEndPairIndex = Math.min(batchStartPairIndex + pairBatchSize - 1, totalPairIndexes);
            const openPairTradesBatch = useMulticall
                ? yield fetchOpenPairTradesBatchMulticall(contracts, batchStartPairIndex, batchEndPairIndex, blockTag)
                : yield fetchOpenPairTradesBatch(contracts, batchStartPairIndex, batchEndPairIndex);
            allOpenPairTrades = allOpenPairTrades.concat(openPairTradesBatch);
        }
        return allOpenPairTrades;
    }
    catch (error) {
        console.error(`Unexpected error while fetching open pair trades!`);
        throw error;
    }
});
exports.fetchOpenPairTradesRaw = fetchOpenPairTradesRaw;
const fetchOpenPairTradesBatch = (contracts, startPairIndex, endPairIndex) => __awaiter(void 0, void 0, void 0, function* () {
    const { storage: storageContract, borrowingFees: borrowingFeesContract } = contracts;
    const maxTradesPerPair = (yield storageContract.maxTradesPerPair()).toNumber();
    const pairIndexesToFetch = Array.from({ length: endPairIndex - startPairIndex + 1 }, (_, i) => i + startPairIndex);
    const rawTrades = yield Promise.all(pairIndexesToFetch.map((pairIndex) => __awaiter(void 0, void 0, void 0, function* () {
        const pairTraderAddresses = yield storageContract.pairTradersArray(pairIndex);
        if (pairTraderAddresses.length === 0) {
            return [];
        }
        const openTradesForPairTraders = yield Promise.all(pairTraderAddresses.map((pairTraderAddress) => __awaiter(void 0, void 0, void 0, function* () {
            const openTradesCalls = new Array(maxTradesPerPair);
            for (let pairTradeIndex = 0; pairTradeIndex < maxTradesPerPair; pairTradeIndex++) {
                openTradesCalls[pairTradeIndex] = storageContract.openTrades(pairTraderAddress, pairIndex, pairTradeIndex);
            }
            const openTradesForTraderAddress = yield Promise.all(openTradesCalls);
            // Filter out any of the trades that aren't *really* open (NOTE: these will have an empty trader address, so just test against that)
            const actualOpenTradesForTrader = openTradesForTraderAddress.filter(openTrade => openTrade.trader === pairTraderAddress);
            const [actualOpenTradesTradeInfos, actualOpenTradesInitialAccFees] = yield Promise.all([
                Promise.all(actualOpenTradesForTrader.map(aot => storageContract.openTradesInfo(aot.trader, aot.pairIndex, aot.index))),
                Promise.all(actualOpenTradesForTrader.map(aot => borrowingFeesContract.getTradeInitialAccFees(aot.trader, aot.pairIndex, aot.index))),
            ]);
            const finalOpenTradesForTrader = new Array(actualOpenTradesForTrader.length);
            for (let tradeIndex = 0; tradeIndex < actualOpenTradesForTrader.length; tradeIndex++) {
                const tradeInfo = actualOpenTradesTradeInfos[tradeIndex];
                if (tradeInfo === undefined) {
                    continue;
                }
                if (actualOpenTradesInitialAccFees[tradeIndex] === undefined) {
                    continue;
                }
                const tradeInitialAccFees = Object.assign(Object.assign({}, actualOpenTradesInitialAccFees[tradeIndex].otherFees), { borrowing: actualOpenTradesInitialAccFees[tradeIndex].borrowingFees });
                const trade = actualOpenTradesForTrader[tradeIndex];
                finalOpenTradesForTrader[tradeIndex] = {
                    trade,
                    tradeInfo,
                    initialAccFees: tradeInitialAccFees,
                };
            }
            return finalOpenTradesForTrader;
        })));
        return openTradesForPairTraders;
    })));
    const perPairTrades = rawTrades.reduce((a, b) => a.concat(b), []);
    //@ts-ignore
    return perPairTrades.reduce((a, b) => a.concat(b), []);
});
const fetchOpenPairTradesBatchMulticall = (contracts, startPairIndex, endPairIndex, blockTag) => __awaiter(void 0, void 0, void 0, function* () {
    const { storage: storageContract, borrowingFees: borrowingFeesContract } = contracts;
    // Convert to Multicall for efficient RPC usage
    const multicallProvider = new ethcall_1.Provider();
    yield multicallProvider.init(storageContract.provider);
    const storageContractMulticall = new ethcall_1.Contract(storageContract.address, [
        ...storageContract.interface.fragments,
    ]);
    const borrowingFeesContractMulticall = new ethcall_1.Contract(borrowingFeesContract.address, [...borrowingFeesContract.interface.fragments]);
    const maxTradesPerPair = (yield storageContract.maxTradesPerPair()).toNumber();
    const pairIndexesToFetch = Array.from({ length: endPairIndex - startPairIndex + 1 }, (_, i) => i + startPairIndex);
    const mcPairTraderAddresses = yield multicallProvider.all(pairIndexesToFetch.map(pairIndex => storageContractMulticall.pairTradersArray(pairIndex)), blockTag);
    const mcFlatOpenTrades = yield multicallProvider.all(mcPairTraderAddresses
        .map((pairTraderAddresses, _ix) => {
        return pairTraderAddresses
            .map((pairTraderAddress) => {
            const openTradesCalls = new Array(maxTradesPerPair);
            for (let pairTradeIndex = 0; pairTradeIndex < maxTradesPerPair; pairTradeIndex++) {
                openTradesCalls[pairTradeIndex] =
                    storageContractMulticall.openTrades(pairTraderAddress, _ix + startPairIndex, pairTradeIndex);
            }
            return openTradesCalls;
        })
            .reduce((acc, val) => acc.concat(val), []);
    })
        .reduce((acc, val) => acc.concat(val), []), blockTag);
    const openTrades = mcFlatOpenTrades.filter(openTrade => openTrade[0] !== "0x0000000000000000000000000000000000000000");
    const [openTradesTradeInfos, openTradesInitialAccFees] = yield Promise.all([
        multicallProvider.all(openTrades.map(openTrade => storageContractMulticall.openTradesInfo(openTrade.trader, openTrade.pairIndex, openTrade.index)), blockTag),
        multicallProvider.all(openTrades.map(openTrade => borrowingFeesContractMulticall.getTradeInitialAccFees(openTrade.trader, openTrade.pairIndex, openTrade.index)), blockTag),
    ]);
    const finalTrades = new Array(openTrades.length);
    for (let tradeIndex = 0; tradeIndex < openTradesTradeInfos.length; tradeIndex++) {
        const tradeInfo = openTradesTradeInfos[tradeIndex];
        if (tradeInfo === undefined) {
            console.error("No trade info found for open trade while fetching open trades!", { trade: openTradesTradeInfos[tradeIndex] });
            continue;
        }
        if (openTradesInitialAccFees[tradeIndex] === undefined) {
            console.error("No initial fees found for open trade while fetching open trades!", { trade: openTrades[tradeIndex] });
            continue;
        }
        const tradeInitialAccFees = Object.assign(Object.assign({}, openTradesInitialAccFees[tradeIndex].otherFees), { borrowing: openTradesInitialAccFees[tradeIndex].borrowingFees });
        const trade = openTrades[tradeIndex];
        finalTrades[tradeIndex] = {
            trade,
            tradeInfo,
            initialAccFees: tradeInitialAccFees,
        };
    }
    return finalTrades.filter(trade => trade !== undefined);
});
const _prepareTradeContainer = (trade, tradeInfo, tradeInitialAccFees) => ({
    trade: {
        trader: trade.trader,
        pairIndex: parseInt(trade.pairIndex.toString()),
        index: parseInt(trade.index.toString()),
        positionSizeStable: parseFloat(trade.positionSizeStable.toString()) / 1e18,
        openPrice: parseFloat(trade.openPrice.toString()) / 1e10,
        buy: trade.buy.toString() === "true",
        leverage: parseInt(trade.leverage.toString()),
        tp: parseFloat(trade.tp.toString()) / 1e10,
        sl: parseFloat(trade.sl.toString()) / 1e10,
    },
    tradeInfo: {
        beingMarketClosed: tradeInfo.beingMarketClosed.toString() === "true",
        tokenPriceStable: parseFloat(tradeInfo.tokenPriceStable.toString()) / 1e10,
        openInterestStable: parseFloat(tradeInfo.openInterestStable.toString()) / 1e18,
        tpLastUpdated: tradeInfo.tpLastUpdated,
        slLastUpdated: tradeInfo.slLastUpdated,
    },
    initialAccFees: {
        rollover: parseFloat(tradeInitialAccFees.rollover.toString()) / 1e18,
        funding: parseFloat(tradeInitialAccFees.funding.toString()) / 1e18,
        openedAfterUpdate: tradeInitialAccFees.openedAfterUpdate.toString() === "true",
        borrowing: {
            accPairFee: parseFloat(tradeInitialAccFees.borrowing.accPairFee.toString()) / 1e10,
            accGroupFee: parseFloat(tradeInitialAccFees.borrowing.accGroupFee.toString()) / 1e10,
            block: parseFloat(tradeInitialAccFees.borrowing.block.toString()),
        },
    },
});
