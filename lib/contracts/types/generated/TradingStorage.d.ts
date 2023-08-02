import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace TradingStorage {
    type OpenLimitOrderStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        positionSize: PromiseOrValue<BigNumberish>;
        buy: PromiseOrValue<boolean>;
        leverage: PromiseOrValue<BigNumberish>;
        tp: PromiseOrValue<BigNumberish>;
        sl: PromiseOrValue<BigNumberish>;
        minPrice: PromiseOrValue<BigNumberish>;
        maxPrice: PromiseOrValue<BigNumberish>;
        block: PromiseOrValue<BigNumberish>;
        tokenId: PromiseOrValue<BigNumberish>;
    };
    type OpenLimitOrderStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        positionSize: BigNumber;
        buy: boolean;
        leverage: BigNumber;
        tp: BigNumber;
        sl: BigNumber;
        minPrice: BigNumber;
        maxPrice: BigNumber;
        block: BigNumber;
        tokenId: BigNumber;
    };
    type TradeStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        positionSizeStable: PromiseOrValue<BigNumberish>;
        openPrice: PromiseOrValue<BigNumberish>;
        buy: PromiseOrValue<boolean>;
        leverage: PromiseOrValue<BigNumberish>;
        tp: PromiseOrValue<BigNumberish>;
        sl: PromiseOrValue<BigNumberish>;
    };
    type TradeStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        positionSizeStable: BigNumber;
        openPrice: BigNumber;
        buy: boolean;
        leverage: BigNumber;
        tp: BigNumber;
        sl: BigNumber;
    };
    type PendingBotOrderStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        orderType: PromiseOrValue<BigNumberish>;
    };
    type PendingBotOrderStructOutput = [
        string,
        BigNumber,
        BigNumber,
        number
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        orderType: number;
    };
    type PendingMarketOrderStruct = {
        trade: TradingStorage.TradeStruct;
        block: PromiseOrValue<BigNumberish>;
        wantedPrice: PromiseOrValue<BigNumberish>;
        slippageP: PromiseOrValue<BigNumberish>;
        tokenId: PromiseOrValue<BigNumberish>;
    };
    type PendingMarketOrderStructOutput = [
        TradingStorage.TradeStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trade: TradingStorage.TradeStructOutput;
        block: BigNumber;
        wantedPrice: BigNumber;
        slippageP: BigNumber;
        tokenId: BigNumber;
    };
    type TradeInfoStruct = {
        tokenId: PromiseOrValue<BigNumberish>;
        openInterestStable: PromiseOrValue<BigNumberish>;
        tpLastUpdated: PromiseOrValue<BigNumberish>;
        slLastUpdated: PromiseOrValue<BigNumberish>;
        beingMarketClosed: PromiseOrValue<boolean>;
    };
    type TradeInfoStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        tokenId: BigNumber;
        openInterestStable: BigNumber;
        tpLastUpdated: BigNumber;
        slLastUpdated: BigNumber;
        beingMarketClosed: boolean;
    };
}
export interface TradingStorageInterface extends utils.Interface {
    functions: {
        "PRECISION()": FunctionFragment;
        "addSupportedToken(address)": FunctionFragment;
        "addTradingContract(address)": FunctionFragment;
        "callbacks()": FunctionFragment;
        "claimFees()": FunctionFragment;
        "dev()": FunctionFragment;
        "devFeesStable()": FunctionFragment;
        "firstEmptyOpenLimitIndex(address,uint256)": FunctionFragment;
        "firstEmptyTradeIndex(address,uint256)": FunctionFragment;
        "getOpenLimitOrder(address,uint256,uint256)": FunctionFragment;
        "getOpenLimitOrders()": FunctionFragment;
        "getPendingOrderIds(address)": FunctionFragment;
        "getSupportedTokens()": FunctionFragment;
        "gov()": FunctionFragment;
        "govFeesStable()": FunctionFragment;
        "handleDevGovRefFees(uint256,uint256,bool,bool)": FunctionFragment;
        "hasOpenLimitOrder(address,uint256,uint256)": FunctionFragment;
        "initialize(address,address,address,address,address,address)": FunctionFragment;
        "isTradingContract(address)": FunctionFragment;
        "linkErc677()": FunctionFragment;
        "maxPendingMarketOrders()": FunctionFragment;
        "maxTradesPerPair()": FunctionFragment;
        "openInterestStable(uint256,uint256)": FunctionFragment;
        "openLimitOrderIds(address,uint256,uint256)": FunctionFragment;
        "openLimitOrders(uint256)": FunctionFragment;
        "openLimitOrdersCount(address,uint256)": FunctionFragment;
        "openTrades(address,uint256,uint256)": FunctionFragment;
        "openTradesCount(address,uint256)": FunctionFragment;
        "openTradesInfo(address,uint256,uint256)": FunctionFragment;
        "orderTokenManagement()": FunctionFragment;
        "pairTraders(uint256,uint256)": FunctionFragment;
        "pairTradersArray(uint256)": FunctionFragment;
        "pairTradersId(address,uint256)": FunctionFragment;
        "pendingMarketCloseCount(address,uint256)": FunctionFragment;
        "pendingMarketOpenCount(address,uint256)": FunctionFragment;
        "pendingOrderIds(address,uint256)": FunctionFragment;
        "pendingOrderIdsCount(address)": FunctionFragment;
        "priceAggregator()": FunctionFragment;
        "ref()": FunctionFragment;
        "refFeesStable()": FunctionFragment;
        "removeTradingContract(address)": FunctionFragment;
        "reqID_pendingBotOrder(uint256)": FunctionFragment;
        "reqID_pendingMarketOrder(uint256)": FunctionFragment;
        "setCallbacks(address)": FunctionFragment;
        "setDev(address)": FunctionFragment;
        "setGov(address)": FunctionFragment;
        "setMaxOpenInterestStable(uint256,uint256)": FunctionFragment;
        "setMaxPendingMarketOrders(uint256)": FunctionFragment;
        "setMaxTradesPerPair(uint256)": FunctionFragment;
        "setOrderTokenManagement(address)": FunctionFragment;
        "setPriceAggregator(address)": FunctionFragment;
        "setRef(address)": FunctionFragment;
        "setTrading(address)": FunctionFragment;
        "setWorkPool(address)": FunctionFragment;
        "stable()": FunctionFragment;
        "storeOpenLimitOrder((address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "storePendingBotOrder((address,uint256,uint256,uint8),uint256)": FunctionFragment;
        "storePendingMarketOrder(((address,uint256,uint256,uint256,uint256,bool,uint256,uint256,uint256),uint256,uint256,uint256,uint256),uint256,bool)": FunctionFragment;
        "storeTrade((address,uint256,uint256,uint256,uint256,bool,uint256,uint256,uint256),(uint256,uint256,uint256,uint256,bool))": FunctionFragment;
        "supportedTokens(uint256)": FunctionFragment;
        "trading()": FunctionFragment;
        "transferStable(address,address,uint256)": FunctionFragment;
        "unregisterOpenLimitOrder(address,uint256,uint256)": FunctionFragment;
        "unregisterPendingBotOrder(uint256)": FunctionFragment;
        "unregisterPendingMarketOrder(uint256,bool)": FunctionFragment;
        "unregisterTrade(address,uint256,uint256)": FunctionFragment;
        "updateOpenLimitOrder((address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "updateSl(address,uint256,uint256,uint256)": FunctionFragment;
        "updateTp(address,uint256,uint256,uint256)": FunctionFragment;
        "updateTrade((address,uint256,uint256,uint256,uint256,bool,uint256,uint256,uint256))": FunctionFragment;
        "workPool()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PRECISION" | "addSupportedToken" | "addTradingContract" | "callbacks" | "claimFees" | "dev" | "devFeesStable" | "firstEmptyOpenLimitIndex" | "firstEmptyTradeIndex" | "getOpenLimitOrder" | "getOpenLimitOrders" | "getPendingOrderIds" | "getSupportedTokens" | "gov" | "govFeesStable" | "handleDevGovRefFees" | "hasOpenLimitOrder" | "initialize" | "isTradingContract" | "linkErc677" | "maxPendingMarketOrders" | "maxTradesPerPair" | "openInterestStable" | "openLimitOrderIds" | "openLimitOrders" | "openLimitOrdersCount" | "openTrades" | "openTradesCount" | "openTradesInfo" | "orderTokenManagement" | "pairTraders" | "pairTradersArray" | "pairTradersId" | "pendingMarketCloseCount" | "pendingMarketOpenCount" | "pendingOrderIds" | "pendingOrderIdsCount" | "priceAggregator" | "ref" | "refFeesStable" | "removeTradingContract" | "reqID_pendingBotOrder" | "reqID_pendingMarketOrder" | "setCallbacks" | "setDev" | "setGov" | "setMaxOpenInterestStable" | "setMaxPendingMarketOrders" | "setMaxTradesPerPair" | "setOrderTokenManagement" | "setPriceAggregator" | "setRef" | "setTrading" | "setWorkPool" | "stable" | "storeOpenLimitOrder" | "storePendingBotOrder" | "storePendingMarketOrder" | "storeTrade" | "supportedTokens" | "trading" | "transferStable" | "unregisterOpenLimitOrder" | "unregisterPendingBotOrder" | "unregisterPendingMarketOrder" | "unregisterTrade" | "updateOpenLimitOrder" | "updateSl" | "updateTp" | "updateTrade" | "workPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "addSupportedToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addTradingContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callbacks", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "dev", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFeesStable", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstEmptyOpenLimitIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "firstEmptyTradeIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOpenLimitOrder", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getOpenLimitOrders", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPendingOrderIds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSupportedTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "govFeesStable", values?: undefined): string;
    encodeFunctionData(functionFragment: "handleDevGovRefFees", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "hasOpenLimitOrder", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isTradingContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "linkErc677", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxPendingMarketOrders", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxTradesPerPair", values?: undefined): string;
    encodeFunctionData(functionFragment: "openInterestStable", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "openLimitOrderIds", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "openLimitOrders", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "openLimitOrdersCount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "openTrades", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "openTradesCount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "openTradesInfo", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "orderTokenManagement", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairTraders", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairTradersArray", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairTradersId", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pendingMarketCloseCount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pendingMarketOpenCount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pendingOrderIds", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pendingOrderIdsCount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "priceAggregator", values?: undefined): string;
    encodeFunctionData(functionFragment: "ref", values?: undefined): string;
    encodeFunctionData(functionFragment: "refFeesStable", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeTradingContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "reqID_pendingBotOrder", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "reqID_pendingMarketOrder", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setCallbacks", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDev", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setMaxOpenInterestStable", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxPendingMarketOrders", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxTradesPerPair", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setOrderTokenManagement", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setPriceAggregator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRef", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTrading", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setWorkPool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stable", values?: undefined): string;
    encodeFunctionData(functionFragment: "storeOpenLimitOrder", values: [TradingStorage.OpenLimitOrderStruct]): string;
    encodeFunctionData(functionFragment: "storePendingBotOrder", values: [TradingStorage.PendingBotOrderStruct, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "storePendingMarketOrder", values: [
        TradingStorage.PendingMarketOrderStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "storeTrade", values: [TradingStorage.TradeStruct, TradingStorage.TradeInfoStruct]): string;
    encodeFunctionData(functionFragment: "supportedTokens", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "trading", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferStable", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unregisterOpenLimitOrder", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unregisterPendingBotOrder", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unregisterPendingMarketOrder", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "unregisterTrade", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateOpenLimitOrder", values: [TradingStorage.OpenLimitOrderStruct]): string;
    encodeFunctionData(functionFragment: "updateSl", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateTp", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateTrade", values: [TradingStorage.TradeStruct]): string;
    encodeFunctionData(functionFragment: "workPool", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSupportedToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addTradingContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callbacks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFeesStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstEmptyOpenLimitIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstEmptyTradeIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOpenLimitOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOpenLimitOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingOrderIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupportedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "govFeesStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleDevGovRefFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasOpenLimitOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTradingContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linkErc677", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxPendingMarketOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxTradesPerPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openInterestStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openLimitOrderIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openLimitOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openLimitOrdersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openTrades", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openTradesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openTradesInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderTokenManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairTraders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairTradersArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairTradersId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingMarketCloseCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingMarketOpenCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOrderIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOrderIdsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ref", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refFeesStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeTradingContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reqID_pendingBotOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reqID_pendingMarketOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCallbacks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDev", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxOpenInterestStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxPendingMarketOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxTradesPerPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOrderTokenManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRef", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrading", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWorkPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storeOpenLimitOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storePendingBotOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storePendingMarketOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storeTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trading", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterOpenLimitOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterPendingBotOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterPendingMarketOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOpenLimitOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workPool", data: BytesLike): Result;
    events: {
        "AddressUpdated(string,address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "NumberUpdated(string,uint256)": EventFragment;
        "NumberUpdatedPair(string,uint256,uint256)": EventFragment;
        "SpreadReductionsUpdated(uint256[5])": EventFragment;
        "SupportedTokenAdded(address)": EventFragment;
        "TradingContractAdded(address)": EventFragment;
        "TradingContractRemoved(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NumberUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NumberUpdatedPair"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SpreadReductionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SupportedTokenAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TradingContractAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TradingContractRemoved"): EventFragment;
}
export interface AddressUpdatedEventObject {
    name: string;
    a: string;
}
export type AddressUpdatedEvent = TypedEvent<[
    string,
    string
], AddressUpdatedEventObject>;
export type AddressUpdatedEventFilter = TypedEventFilter<AddressUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface NumberUpdatedEventObject {
    name: string;
    value: BigNumber;
}
export type NumberUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], NumberUpdatedEventObject>;
export type NumberUpdatedEventFilter = TypedEventFilter<NumberUpdatedEvent>;
export interface NumberUpdatedPairEventObject {
    name: string;
    pairIndex: BigNumber;
    value: BigNumber;
}
export type NumberUpdatedPairEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], NumberUpdatedPairEventObject>;
export type NumberUpdatedPairEventFilter = TypedEventFilter<NumberUpdatedPairEvent>;
export interface SpreadReductionsUpdatedEventObject {
    arg0: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
}
export type SpreadReductionsUpdatedEvent = TypedEvent<[
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
], SpreadReductionsUpdatedEventObject>;
export type SpreadReductionsUpdatedEventFilter = TypedEventFilter<SpreadReductionsUpdatedEvent>;
export interface SupportedTokenAddedEventObject {
    a: string;
}
export type SupportedTokenAddedEvent = TypedEvent<[
    string
], SupportedTokenAddedEventObject>;
export type SupportedTokenAddedEventFilter = TypedEventFilter<SupportedTokenAddedEvent>;
export interface TradingContractAddedEventObject {
    a: string;
}
export type TradingContractAddedEvent = TypedEvent<[
    string
], TradingContractAddedEventObject>;
export type TradingContractAddedEventFilter = TypedEventFilter<TradingContractAddedEvent>;
export interface TradingContractRemovedEventObject {
    a: string;
}
export type TradingContractRemovedEvent = TypedEvent<[
    string
], TradingContractRemovedEventObject>;
export type TradingContractRemovedEventFilter = TypedEventFilter<TradingContractRemovedEvent>;
export interface TradingStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TradingStorageInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        addSupportedToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callbacks(overrides?: CallOverrides): Promise<[string]>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dev(overrides?: CallOverrides): Promise<[string]>;
        devFeesStable(overrides?: CallOverrides): Promise<[BigNumber]>;
        firstEmptyOpenLimitIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            index: BigNumber;
        }>;
        firstEmptyTradeIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            index: BigNumber;
        }>;
        getOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[TradingStorage.OpenLimitOrderStructOutput]>;
        getOpenLimitOrders(overrides?: CallOverrides): Promise<[TradingStorage.OpenLimitOrderStructOutput[]]>;
        getPendingOrderIds(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getSupportedTokens(overrides?: CallOverrides): Promise<[string[]]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        govFeesStable(overrides?: CallOverrides): Promise<[BigNumber]>;
        handleDevGovRefFees(_pairIndex: PromiseOrValue<BigNumberish>, _leveragedPositionSize: PromiseOrValue<BigNumberish>, _isRef: PromiseOrValue<boolean>, _fullFee: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasOpenLimitOrder(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_stable: PromiseOrValue<string>, _linkErc677: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _gov: PromiseOrValue<string>, _dev: PromiseOrValue<string>, _ref: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isTradingContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        linkErc677(overrides?: CallOverrides): Promise<[string]>;
        maxPendingMarketOrders(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxTradesPerPair(overrides?: CallOverrides): Promise<[BigNumber]>;
        openInterestStable(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        openLimitOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        openLimitOrders(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            trader: string;
            pairIndex: BigNumber;
            index: BigNumber;
            positionSize: BigNumber;
            buy: boolean;
            leverage: BigNumber;
            tp: BigNumber;
            sl: BigNumber;
            minPrice: BigNumber;
            maxPrice: BigNumber;
            block: BigNumber;
            tokenId: BigNumber;
        }>;
        openLimitOrdersCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        openTrades(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            trader: string;
            pairIndex: BigNumber;
            index: BigNumber;
            positionSizeStable: BigNumber;
            openPrice: BigNumber;
            buy: boolean;
            leverage: BigNumber;
            tp: BigNumber;
            sl: BigNumber;
        }>;
        openTradesCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        openTradesInfo(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            tokenId: BigNumber;
            openInterestStable: BigNumber;
            tpLastUpdated: BigNumber;
            slLastUpdated: BigNumber;
            beingMarketClosed: boolean;
        }>;
        orderTokenManagement(overrides?: CallOverrides): Promise<[string]>;
        pairTraders(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        pairTradersArray(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        pairTradersId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pendingMarketCloseCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pendingMarketOpenCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pendingOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pendingOrderIdsCount(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        priceAggregator(overrides?: CallOverrides): Promise<[string]>;
        ref(overrides?: CallOverrides): Promise<[string]>;
        refFeesStable(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reqID_pendingBotOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            number
        ] & {
            trader: string;
            pairIndex: BigNumber;
            index: BigNumber;
            orderType: number;
        }>;
        reqID_pendingMarketOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            TradingStorage.TradeStructOutput,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            trade: TradingStorage.TradeStructOutput;
            block: BigNumber;
            wantedPrice: BigNumber;
            slippageP: BigNumber;
            tokenId: BigNumber;
        }>;
        setCallbacks(_callbacks: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDev(_dev: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxOpenInterestStable(_pairIndex: PromiseOrValue<BigNumberish>, _newMaxOpenInterest: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxPendingMarketOrders(_maxPendingMarketOrders: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxTradesPerPair(_maxTradesPerPair: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOrderTokenManagement(_orderTokenManagement: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPriceAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRef(_ref: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrading(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWorkPool(_workPool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stable(overrides?: CallOverrides): Promise<[string]>;
        storeOpenLimitOrder(o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storePendingBotOrder(_botOrder: TradingStorage.PendingBotOrderStruct, _orderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storePendingMarketOrder(_order: TradingStorage.PendingMarketOrderStruct, _id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storeTrade(_trade: TradingStorage.TradeStruct, _tradeInfo: TradingStorage.TradeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportedTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        trading(overrides?: CallOverrides): Promise<[string]>;
        transferStable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unregisterOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unregisterPendingBotOrder(_order: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unregisterPendingMarketOrder(_id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unregisterTrade(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateOpenLimitOrder(_o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSl(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newSl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateTp(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newTp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateTrade(_t: TradingStorage.TradeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        workPool(overrides?: CallOverrides): Promise<[string]>;
    };
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    addSupportedToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callbacks(overrides?: CallOverrides): Promise<string>;
    claimFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dev(overrides?: CallOverrides): Promise<string>;
    devFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
    firstEmptyOpenLimitIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    firstEmptyTradeIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<TradingStorage.OpenLimitOrderStructOutput>;
    getOpenLimitOrders(overrides?: CallOverrides): Promise<TradingStorage.OpenLimitOrderStructOutput[]>;
    getPendingOrderIds(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getSupportedTokens(overrides?: CallOverrides): Promise<string[]>;
    gov(overrides?: CallOverrides): Promise<string>;
    govFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
    handleDevGovRefFees(_pairIndex: PromiseOrValue<BigNumberish>, _leveragedPositionSize: PromiseOrValue<BigNumberish>, _isRef: PromiseOrValue<boolean>, _fullFee: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasOpenLimitOrder(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    initialize(_stable: PromiseOrValue<string>, _linkErc677: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _gov: PromiseOrValue<string>, _dev: PromiseOrValue<string>, _ref: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isTradingContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    linkErc677(overrides?: CallOverrides): Promise<string>;
    maxPendingMarketOrders(overrides?: CallOverrides): Promise<BigNumber>;
    maxTradesPerPair(overrides?: CallOverrides): Promise<BigNumber>;
    openInterestStable(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    openLimitOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    openLimitOrders(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        positionSize: BigNumber;
        buy: boolean;
        leverage: BigNumber;
        tp: BigNumber;
        sl: BigNumber;
        minPrice: BigNumber;
        maxPrice: BigNumber;
        block: BigNumber;
        tokenId: BigNumber;
    }>;
    openLimitOrdersCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    openTrades(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        positionSizeStable: BigNumber;
        openPrice: BigNumber;
        buy: boolean;
        leverage: BigNumber;
        tp: BigNumber;
        sl: BigNumber;
    }>;
    openTradesCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    openTradesInfo(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        tokenId: BigNumber;
        openInterestStable: BigNumber;
        tpLastUpdated: BigNumber;
        slLastUpdated: BigNumber;
        beingMarketClosed: boolean;
    }>;
    orderTokenManagement(overrides?: CallOverrides): Promise<string>;
    pairTraders(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    pairTradersArray(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    pairTradersId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pendingMarketCloseCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pendingMarketOpenCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pendingOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pendingOrderIdsCount(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    priceAggregator(overrides?: CallOverrides): Promise<string>;
    ref(overrides?: CallOverrides): Promise<string>;
    refFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
    removeTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reqID_pendingBotOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        number
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        orderType: number;
    }>;
    reqID_pendingMarketOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        TradingStorage.TradeStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trade: TradingStorage.TradeStructOutput;
        block: BigNumber;
        wantedPrice: BigNumber;
        slippageP: BigNumber;
        tokenId: BigNumber;
    }>;
    setCallbacks(_callbacks: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDev(_dev: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxOpenInterestStable(_pairIndex: PromiseOrValue<BigNumberish>, _newMaxOpenInterest: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxPendingMarketOrders(_maxPendingMarketOrders: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxTradesPerPair(_maxTradesPerPair: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOrderTokenManagement(_orderTokenManagement: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPriceAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRef(_ref: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrading(_trading: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWorkPool(_workPool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stable(overrides?: CallOverrides): Promise<string>;
    storeOpenLimitOrder(o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storePendingBotOrder(_botOrder: TradingStorage.PendingBotOrderStruct, _orderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storePendingMarketOrder(_order: TradingStorage.PendingMarketOrderStruct, _id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storeTrade(_trade: TradingStorage.TradeStruct, _tradeInfo: TradingStorage.TradeInfoStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportedTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    trading(overrides?: CallOverrides): Promise<string>;
    transferStable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unregisterOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unregisterPendingBotOrder(_order: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unregisterPendingMarketOrder(_id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unregisterTrade(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateOpenLimitOrder(_o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSl(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newSl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateTp(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newTp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateTrade(_t: TradingStorage.TradeStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    workPool(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        addSupportedToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addTradingContract(_trading: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        callbacks(overrides?: CallOverrides): Promise<string>;
        claimFees(overrides?: CallOverrides): Promise<void>;
        dev(overrides?: CallOverrides): Promise<string>;
        devFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
        firstEmptyOpenLimitIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        firstEmptyTradeIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<TradingStorage.OpenLimitOrderStructOutput>;
        getOpenLimitOrders(overrides?: CallOverrides): Promise<TradingStorage.OpenLimitOrderStructOutput[]>;
        getPendingOrderIds(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getSupportedTokens(overrides?: CallOverrides): Promise<string[]>;
        gov(overrides?: CallOverrides): Promise<string>;
        govFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
        handleDevGovRefFees(_pairIndex: PromiseOrValue<BigNumberish>, _leveragedPositionSize: PromiseOrValue<BigNumberish>, _isRef: PromiseOrValue<boolean>, _fullFee: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        hasOpenLimitOrder(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_stable: PromiseOrValue<string>, _linkErc677: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _gov: PromiseOrValue<string>, _dev: PromiseOrValue<string>, _ref: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isTradingContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        linkErc677(overrides?: CallOverrides): Promise<string>;
        maxPendingMarketOrders(overrides?: CallOverrides): Promise<BigNumber>;
        maxTradesPerPair(overrides?: CallOverrides): Promise<BigNumber>;
        openInterestStable(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openLimitOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openLimitOrders(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            trader: string;
            pairIndex: BigNumber;
            index: BigNumber;
            positionSize: BigNumber;
            buy: boolean;
            leverage: BigNumber;
            tp: BigNumber;
            sl: BigNumber;
            minPrice: BigNumber;
            maxPrice: BigNumber;
            block: BigNumber;
            tokenId: BigNumber;
        }>;
        openLimitOrdersCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openTrades(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            trader: string;
            pairIndex: BigNumber;
            index: BigNumber;
            positionSizeStable: BigNumber;
            openPrice: BigNumber;
            buy: boolean;
            leverage: BigNumber;
            tp: BigNumber;
            sl: BigNumber;
        }>;
        openTradesCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openTradesInfo(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            tokenId: BigNumber;
            openInterestStable: BigNumber;
            tpLastUpdated: BigNumber;
            slLastUpdated: BigNumber;
            beingMarketClosed: boolean;
        }>;
        orderTokenManagement(overrides?: CallOverrides): Promise<string>;
        pairTraders(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        pairTradersArray(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        pairTradersId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingMarketCloseCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingMarketOpenCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingOrderIdsCount(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        priceAggregator(overrides?: CallOverrides): Promise<string>;
        ref(overrides?: CallOverrides): Promise<string>;
        refFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
        removeTradingContract(_trading: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        reqID_pendingBotOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            number
        ] & {
            trader: string;
            pairIndex: BigNumber;
            index: BigNumber;
            orderType: number;
        }>;
        reqID_pendingMarketOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            TradingStorage.TradeStructOutput,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            trade: TradingStorage.TradeStructOutput;
            block: BigNumber;
            wantedPrice: BigNumber;
            slippageP: BigNumber;
            tokenId: BigNumber;
        }>;
        setCallbacks(_callbacks: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDev(_dev: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMaxOpenInterestStable(_pairIndex: PromiseOrValue<BigNumberish>, _newMaxOpenInterest: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxPendingMarketOrders(_maxPendingMarketOrders: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxTradesPerPair(_maxTradesPerPair: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOrderTokenManagement(_orderTokenManagement: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setPriceAggregator(_aggregator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setRef(_ref: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTrading(_trading: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setWorkPool(_workPool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stable(overrides?: CallOverrides): Promise<string>;
        storeOpenLimitOrder(o: TradingStorage.OpenLimitOrderStruct, overrides?: CallOverrides): Promise<void>;
        storePendingBotOrder(_botOrder: TradingStorage.PendingBotOrderStruct, _orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        storePendingMarketOrder(_order: TradingStorage.PendingMarketOrderStruct, _id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        storeTrade(_trade: TradingStorage.TradeStruct, _tradeInfo: TradingStorage.TradeInfoStruct, overrides?: CallOverrides): Promise<void>;
        supportedTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        trading(overrides?: CallOverrides): Promise<string>;
        transferStable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unregisterOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unregisterPendingBotOrder(_order: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unregisterPendingMarketOrder(_id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        unregisterTrade(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateOpenLimitOrder(_o: TradingStorage.OpenLimitOrderStruct, overrides?: CallOverrides): Promise<void>;
        updateSl(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newSl: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateTp(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newTp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateTrade(_t: TradingStorage.TradeStruct, overrides?: CallOverrides): Promise<void>;
        workPool(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddressUpdated(string,address)"(name?: null, a?: null): AddressUpdatedEventFilter;
        AddressUpdated(name?: null, a?: null): AddressUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "NumberUpdated(string,uint256)"(name?: null, value?: null): NumberUpdatedEventFilter;
        NumberUpdated(name?: null, value?: null): NumberUpdatedEventFilter;
        "NumberUpdatedPair(string,uint256,uint256)"(name?: null, pairIndex?: null, value?: null): NumberUpdatedPairEventFilter;
        NumberUpdatedPair(name?: null, pairIndex?: null, value?: null): NumberUpdatedPairEventFilter;
        "SpreadReductionsUpdated(uint256[5])"(arg0?: null): SpreadReductionsUpdatedEventFilter;
        SpreadReductionsUpdated(arg0?: null): SpreadReductionsUpdatedEventFilter;
        "SupportedTokenAdded(address)"(a?: null): SupportedTokenAddedEventFilter;
        SupportedTokenAdded(a?: null): SupportedTokenAddedEventFilter;
        "TradingContractAdded(address)"(a?: null): TradingContractAddedEventFilter;
        TradingContractAdded(a?: null): TradingContractAddedEventFilter;
        "TradingContractRemoved(address)"(a?: null): TradingContractRemovedEventFilter;
        TradingContractRemoved(a?: null): TradingContractRemovedEventFilter;
    };
    estimateGas: {
        PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        addSupportedToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callbacks(overrides?: CallOverrides): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dev(overrides?: CallOverrides): Promise<BigNumber>;
        devFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
        firstEmptyOpenLimitIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        firstEmptyTradeIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOpenLimitOrders(overrides?: CallOverrides): Promise<BigNumber>;
        getPendingOrderIds(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSupportedTokens(overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        govFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
        handleDevGovRefFees(_pairIndex: PromiseOrValue<BigNumberish>, _leveragedPositionSize: PromiseOrValue<BigNumberish>, _isRef: PromiseOrValue<boolean>, _fullFee: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasOpenLimitOrder(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_stable: PromiseOrValue<string>, _linkErc677: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _gov: PromiseOrValue<string>, _dev: PromiseOrValue<string>, _ref: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isTradingContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        linkErc677(overrides?: CallOverrides): Promise<BigNumber>;
        maxPendingMarketOrders(overrides?: CallOverrides): Promise<BigNumber>;
        maxTradesPerPair(overrides?: CallOverrides): Promise<BigNumber>;
        openInterestStable(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openLimitOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openLimitOrders(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openLimitOrdersCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openTrades(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openTradesCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openTradesInfo(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        orderTokenManagement(overrides?: CallOverrides): Promise<BigNumber>;
        pairTraders(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairTradersArray(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairTradersId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingMarketCloseCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingMarketOpenCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingOrderIdsCount(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        priceAggregator(overrides?: CallOverrides): Promise<BigNumber>;
        ref(overrides?: CallOverrides): Promise<BigNumber>;
        refFeesStable(overrides?: CallOverrides): Promise<BigNumber>;
        removeTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reqID_pendingBotOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reqID_pendingMarketOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setCallbacks(_callbacks: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDev(_dev: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxOpenInterestStable(_pairIndex: PromiseOrValue<BigNumberish>, _newMaxOpenInterest: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxPendingMarketOrders(_maxPendingMarketOrders: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxTradesPerPair(_maxTradesPerPair: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOrderTokenManagement(_orderTokenManagement: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPriceAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRef(_ref: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrading(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWorkPool(_workPool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stable(overrides?: CallOverrides): Promise<BigNumber>;
        storeOpenLimitOrder(o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storePendingBotOrder(_botOrder: TradingStorage.PendingBotOrderStruct, _orderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storePendingMarketOrder(_order: TradingStorage.PendingMarketOrderStruct, _id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storeTrade(_trade: TradingStorage.TradeStruct, _tradeInfo: TradingStorage.TradeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportedTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        trading(overrides?: CallOverrides): Promise<BigNumber>;
        transferStable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unregisterOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unregisterPendingBotOrder(_order: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unregisterPendingMarketOrder(_id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unregisterTrade(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateOpenLimitOrder(_o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSl(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newSl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateTp(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newTp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateTrade(_t: TradingStorage.TradeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        workPool(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addSupportedToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callbacks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFeesStable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstEmptyOpenLimitIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstEmptyTradeIndex(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOpenLimitOrders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingOrderIds(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupportedTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        govFeesStable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleDevGovRefFees(_pairIndex: PromiseOrValue<BigNumberish>, _leveragedPositionSize: PromiseOrValue<BigNumberish>, _isRef: PromiseOrValue<boolean>, _fullFee: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasOpenLimitOrder(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_stable: PromiseOrValue<string>, _linkErc677: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _gov: PromiseOrValue<string>, _dev: PromiseOrValue<string>, _ref: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isTradingContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        linkErc677(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxPendingMarketOrders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxTradesPerPair(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openInterestStable(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openLimitOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openLimitOrders(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openLimitOrdersCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openTrades(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openTradesCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openTradesInfo(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        orderTokenManagement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairTraders(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairTradersArray(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairTradersId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingMarketCloseCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingMarketOpenCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOrderIds(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOrderIdsCount(_trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ref(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refFeesStable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeTradingContract(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reqID_pendingBotOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reqID_pendingMarketOrder(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCallbacks(_callbacks: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDev(_dev: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxOpenInterestStable(_pairIndex: PromiseOrValue<BigNumberish>, _newMaxOpenInterest: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxPendingMarketOrders(_maxPendingMarketOrders: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxTradesPerPair(_maxTradesPerPair: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOrderTokenManagement(_orderTokenManagement: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPriceAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRef(_ref: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrading(_trading: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWorkPool(_workPool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        storeOpenLimitOrder(o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storePendingBotOrder(_botOrder: TradingStorage.PendingBotOrderStruct, _orderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storePendingMarketOrder(_order: TradingStorage.PendingMarketOrderStruct, _id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storeTrade(_trade: TradingStorage.TradeStruct, _tradeInfo: TradingStorage.TradeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportedTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        trading(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferStable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unregisterOpenLimitOrder(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unregisterPendingBotOrder(_order: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unregisterPendingMarketOrder(_id: PromiseOrValue<BigNumberish>, _open: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unregisterTrade(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateOpenLimitOrder(_o: TradingStorage.OpenLimitOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSl(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newSl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateTp(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _newTp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateTrade(_t: TradingStorage.TradeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        workPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
