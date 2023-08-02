import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ITradingStorage {
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
}
export declare namespace IFoxifyAffiliation {
    type NFTDataStruct = {
        level: PromiseOrValue<BigNumberish>;
        randomValue: PromiseOrValue<BytesLike>;
        timestamp: PromiseOrValue<BigNumberish>;
    };
    type NFTDataStructOutput = [number, string, BigNumber] & {
        level: number;
        randomValue: string;
        timestamp: BigNumber;
    };
}
export declare namespace TradingCallbacks {
    type AffiliationUserDataStruct = {
        activeId: PromiseOrValue<BigNumberish>;
        team: PromiseOrValue<BigNumberish>;
        nftData: IFoxifyAffiliation.NFTDataStruct;
    };
    type AffiliationUserDataStructOutput = [
        BigNumber,
        BigNumber,
        IFoxifyAffiliation.NFTDataStructOutput
    ] & {
        activeId: BigNumber;
        team: BigNumber;
        nftData: IFoxifyAffiliation.NFTDataStructOutput;
    };
    type AggregatorAnswerStruct = {
        orderId: PromiseOrValue<BigNumberish>;
        price: PromiseOrValue<BigNumberish>;
        spreadP: PromiseOrValue<BigNumberish>;
    };
    type AggregatorAnswerStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        orderId: BigNumber;
        price: BigNumber;
        spreadP: BigNumber;
    };
    type SimplifiedTradeIdStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        tradeType: PromiseOrValue<BigNumberish>;
    };
    type SimplifiedTradeIdStructOutput = [
        string,
        BigNumber,
        BigNumber,
        number
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        tradeType: number;
    };
    type LastUpdatedStruct = {
        tp: PromiseOrValue<BigNumberish>;
        sl: PromiseOrValue<BigNumberish>;
        limit: PromiseOrValue<BigNumberish>;
        created: PromiseOrValue<BigNumberish>;
    };
    type LastUpdatedStructOutput = [number, number, number, number] & {
        tp: number;
        sl: number;
        limit: number;
        created: number;
    };
}
export interface CallbacksInterface extends utils.Interface {
    functions: {
        "affiliation()": FunctionFragment;
        "borrowingFees()": FunctionFragment;
        "canExecuteTimeout()": FunctionFragment;
        "closeTradeMarketCallback((uint256,uint256,uint256))": FunctionFragment;
        "done()": FunctionFragment;
        "executeBotCloseOrderCallback((uint256,uint256,uint256))": FunctionFragment;
        "executeBotOpenOrderCallback((uint256,uint256,uint256))": FunctionFragment;
        "getAllPairsMaxLeverage()": FunctionFragment;
        "initialize(address,address,address,address,uint256)": FunctionFragment;
        "initializeV2(address)": FunctionFragment;
        "isDone()": FunctionFragment;
        "isPaused()": FunctionFragment;
        "openTradeMarketCallback((uint256,uint256,uint256))": FunctionFragment;
        "orderTokenManagement()": FunctionFragment;
        "pairInfos()": FunctionFragment;
        "pairMaxLeverage(uint256)": FunctionFragment;
        "pause()": FunctionFragment;
        "referral()": FunctionFragment;
        "setAffiliation(address)": FunctionFragment;
        "setCanExecuteTimeout(uint256)": FunctionFragment;
        "setPairMaxLeverage(uint256,uint256)": FunctionFragment;
        "setPairMaxLeverageArray(uint256[],uint256[])": FunctionFragment;
        "setReferral(address)": FunctionFragment;
        "setTradeLastUpdated((address,uint256,uint256,uint8),(uint32,uint32,uint32,uint32))": FunctionFragment;
        "storageT()": FunctionFragment;
        "tradeLastUpdated(address,uint256,uint256,uint8)": FunctionFragment;
        "updateSlCallback((uint256,uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "affiliation" | "borrowingFees" | "canExecuteTimeout" | "closeTradeMarketCallback" | "done" | "executeBotCloseOrderCallback" | "executeBotOpenOrderCallback" | "getAllPairsMaxLeverage" | "initialize" | "initializeV2" | "isDone" | "isPaused" | "openTradeMarketCallback" | "orderTokenManagement" | "pairInfos" | "pairMaxLeverage" | "pause" | "referral" | "setAffiliation" | "setCanExecuteTimeout" | "setPairMaxLeverage" | "setPairMaxLeverageArray" | "setReferral" | "setTradeLastUpdated" | "storageT" | "tradeLastUpdated" | "updateSlCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "affiliation", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowingFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "canExecuteTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "closeTradeMarketCallback", values: [TradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "done", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeBotCloseOrderCallback", values: [TradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "executeBotOpenOrderCallback", values: [TradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "getAllPairsMaxLeverage", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "initializeV2", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isDone", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "openTradeMarketCallback", values: [TradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "orderTokenManagement", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairInfos", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairMaxLeverage", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "referral", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAffiliation", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCanExecuteTimeout", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPairMaxLeverage", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPairMaxLeverageArray", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "setReferral", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTradeLastUpdated", values: [
        TradingCallbacks.SimplifiedTradeIdStruct,
        TradingCallbacks.LastUpdatedStruct
    ]): string;
    encodeFunctionData(functionFragment: "storageT", values?: undefined): string;
    encodeFunctionData(functionFragment: "tradeLastUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateSlCallback", values: [TradingCallbacks.AggregatorAnswerStruct]): string;
    decodeFunctionResult(functionFragment: "affiliation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowingFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canExecuteTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeTradeMarketCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "done", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBotCloseOrderCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBotOpenOrderCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPairsMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDone", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openTradeMarketCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderTokenManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAffiliation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCanExecuteTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairMaxLeverageArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTradeLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storageT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tradeLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSlCallback", data: BytesLike): Result;
    events: {
        "BorrowingFeeCharged(address,uint256,uint256)": EventFragment;
        "BotOrderCanceled(uint256,uint8,uint8)": EventFragment;
        "CanExecuteTimeoutUpdated(uint256)": EventFragment;
        "CloseLimitExecuted(uint256,uint256,tuple,uint8,uint256,uint256,uint256,int256,uint256)": EventFragment;
        "CloseMarketExecuted(uint256,tuple,bool,uint256,uint256,uint256,int256,uint256)": EventFragment;
        "DevGovRefFeeCharged(address,uint256)": EventFragment;
        "Done(bool)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "MarketCloseCanceled(uint256,address,uint256,uint256,uint8)": EventFragment;
        "MarketOpenCanceled(uint256,address,uint256,uint8)": EventFragment;
        "OpenLimitExecuted(uint256,uint256,tuple,uint8,uint256,uint256,uint256,int256,uint256)": EventFragment;
        "OpenLimitExecutedWithAffiliationReferral(uint256,uint256,tuple,uint8,uint256,uint256,uint256,int256,uint256,tuple,uint256)": EventFragment;
        "OpenMarketExecuted(uint256,tuple,bool,uint256,uint256,uint256,int256,uint256)": EventFragment;
        "OpenMarketExecutedWithAffiliationReferral(uint256,tuple,bool,uint256,uint256,uint256,int256,uint256,tuple,uint256)": EventFragment;
        "OrderExecutionFeeCharged(address,uint256)": EventFragment;
        "PairMaxLeverageUpdated(uint256,uint256)": EventFragment;
        "Pause(bool)": EventFragment;
        "SlCanceled(uint256,address,uint256,uint256,uint8)": EventFragment;
        "SlUpdated(uint256,address,uint256,uint256,uint256)": EventFragment;
        "StableWorkPoolFeeCharged(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BorrowingFeeCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BotOrderCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CanExecuteTimeoutUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CloseLimitExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CloseMarketExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DevGovRefFeeCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Done"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketCloseCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketOpenCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenLimitExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenLimitExecutedWithAffiliationReferral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenMarketExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenMarketExecutedWithAffiliationReferral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderExecutionFeeCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairMaxLeverageUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Pause"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SlCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SlUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StableWorkPoolFeeCharged"): EventFragment;
}
export interface BorrowingFeeChargedEventObject {
    trader: string;
    tradeValueStable: BigNumber;
    feeValueStable: BigNumber;
}
export type BorrowingFeeChargedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], BorrowingFeeChargedEventObject>;
export type BorrowingFeeChargedEventFilter = TypedEventFilter<BorrowingFeeChargedEvent>;
export interface BotOrderCanceledEventObject {
    orderId: BigNumber;
    orderType: number;
    cancelReason: number;
}
export type BotOrderCanceledEvent = TypedEvent<[
    BigNumber,
    number,
    number
], BotOrderCanceledEventObject>;
export type BotOrderCanceledEventFilter = TypedEventFilter<BotOrderCanceledEvent>;
export interface CanExecuteTimeoutUpdatedEventObject {
    newValue: BigNumber;
}
export type CanExecuteTimeoutUpdatedEvent = TypedEvent<[
    BigNumber
], CanExecuteTimeoutUpdatedEventObject>;
export type CanExecuteTimeoutUpdatedEventFilter = TypedEventFilter<CanExecuteTimeoutUpdatedEvent>;
export interface CloseLimitExecutedEventObject {
    orderId: BigNumber;
    limitIndex: BigNumber;
    t: ITradingStorage.TradeStructOutput;
    orderType: number;
    price: BigNumber;
    priceImpactP: BigNumber;
    positionSizeStable: BigNumber;
    percentProfit: BigNumber;
    stableSentToTrader: BigNumber;
}
export type CloseLimitExecutedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    ITradingStorage.TradeStructOutput,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], CloseLimitExecutedEventObject>;
export type CloseLimitExecutedEventFilter = TypedEventFilter<CloseLimitExecutedEvent>;
export interface CloseMarketExecutedEventObject {
    orderId: BigNumber;
    t: ITradingStorage.TradeStructOutput;
    open: boolean;
    price: BigNumber;
    priceImpactP: BigNumber;
    positionSizeStable: BigNumber;
    percentProfit: BigNumber;
    stableSentToTrader: BigNumber;
}
export type CloseMarketExecutedEvent = TypedEvent<[
    BigNumber,
    ITradingStorage.TradeStructOutput,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], CloseMarketExecutedEventObject>;
export type CloseMarketExecutedEventFilter = TypedEventFilter<CloseMarketExecutedEvent>;
export interface DevGovRefFeeChargedEventObject {
    trader: string;
    valueStable: BigNumber;
}
export type DevGovRefFeeChargedEvent = TypedEvent<[
    string,
    BigNumber
], DevGovRefFeeChargedEventObject>;
export type DevGovRefFeeChargedEventFilter = TypedEventFilter<DevGovRefFeeChargedEvent>;
export interface DoneEventObject {
    done: boolean;
}
export type DoneEvent = TypedEvent<[boolean], DoneEventObject>;
export type DoneEventFilter = TypedEventFilter<DoneEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MarketCloseCanceledEventObject {
    orderId: BigNumber;
    trader: string;
    pairIndex: BigNumber;
    index: BigNumber;
    cancelReason: number;
}
export type MarketCloseCanceledEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number
], MarketCloseCanceledEventObject>;
export type MarketCloseCanceledEventFilter = TypedEventFilter<MarketCloseCanceledEvent>;
export interface MarketOpenCanceledEventObject {
    orderId: BigNumber;
    trader: string;
    pairIndex: BigNumber;
    cancelReason: number;
}
export type MarketOpenCanceledEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    number
], MarketOpenCanceledEventObject>;
export type MarketOpenCanceledEventFilter = TypedEventFilter<MarketOpenCanceledEvent>;
export interface OpenLimitExecutedEventObject {
    orderId: BigNumber;
    limitIndex: BigNumber;
    t: ITradingStorage.TradeStructOutput;
    orderType: number;
    price: BigNumber;
    priceImpactP: BigNumber;
    positionSizeStable: BigNumber;
    percentProfit: BigNumber;
    stableSentToTrader: BigNumber;
}
export type OpenLimitExecutedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    ITradingStorage.TradeStructOutput,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], OpenLimitExecutedEventObject>;
export type OpenLimitExecutedEventFilter = TypedEventFilter<OpenLimitExecutedEvent>;
export interface OpenLimitExecutedWithAffiliationReferralEventObject {
    orderId: BigNumber;
    limitIndex: BigNumber;
    t: ITradingStorage.TradeStructOutput;
    orderType: number;
    price: BigNumber;
    priceImpactP: BigNumber;
    positionSizeStable: BigNumber;
    percentProfit: BigNumber;
    stableSentToTrader: BigNumber;
    affiliationInfo: TradingCallbacks.AffiliationUserDataStructOutput;
    referralTeamID: BigNumber;
}
export type OpenLimitExecutedWithAffiliationReferralEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    ITradingStorage.TradeStructOutput,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    TradingCallbacks.AffiliationUserDataStructOutput,
    BigNumber
], OpenLimitExecutedWithAffiliationReferralEventObject>;
export type OpenLimitExecutedWithAffiliationReferralEventFilter = TypedEventFilter<OpenLimitExecutedWithAffiliationReferralEvent>;
export interface OpenMarketExecutedEventObject {
    orderId: BigNumber;
    t: ITradingStorage.TradeStructOutput;
    open: boolean;
    price: BigNumber;
    priceImpactP: BigNumber;
    positionSizeStable: BigNumber;
    percentProfit: BigNumber;
    stableSentToTrader: BigNumber;
}
export type OpenMarketExecutedEvent = TypedEvent<[
    BigNumber,
    ITradingStorage.TradeStructOutput,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], OpenMarketExecutedEventObject>;
export type OpenMarketExecutedEventFilter = TypedEventFilter<OpenMarketExecutedEvent>;
export interface OpenMarketExecutedWithAffiliationReferralEventObject {
    orderId: BigNumber;
    t: ITradingStorage.TradeStructOutput;
    open: boolean;
    price: BigNumber;
    priceImpactP: BigNumber;
    positionSizeStable: BigNumber;
    percentProfit: BigNumber;
    stableSentToTrader: BigNumber;
    affiliationInfo: TradingCallbacks.AffiliationUserDataStructOutput;
    referralTeamID: BigNumber;
}
export type OpenMarketExecutedWithAffiliationReferralEvent = TypedEvent<[
    BigNumber,
    ITradingStorage.TradeStructOutput,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    TradingCallbacks.AffiliationUserDataStructOutput,
    BigNumber
], OpenMarketExecutedWithAffiliationReferralEventObject>;
export type OpenMarketExecutedWithAffiliationReferralEventFilter = TypedEventFilter<OpenMarketExecutedWithAffiliationReferralEvent>;
export interface OrderExecutionFeeChargedEventObject {
    trader: string;
    valueStable: BigNumber;
}
export type OrderExecutionFeeChargedEvent = TypedEvent<[
    string,
    BigNumber
], OrderExecutionFeeChargedEventObject>;
export type OrderExecutionFeeChargedEventFilter = TypedEventFilter<OrderExecutionFeeChargedEvent>;
export interface PairMaxLeverageUpdatedEventObject {
    pairIndex: BigNumber;
    maxLeverage: BigNumber;
}
export type PairMaxLeverageUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], PairMaxLeverageUpdatedEventObject>;
export type PairMaxLeverageUpdatedEventFilter = TypedEventFilter<PairMaxLeverageUpdatedEvent>;
export interface PauseEventObject {
    paused: boolean;
}
export type PauseEvent = TypedEvent<[boolean], PauseEventObject>;
export type PauseEventFilter = TypedEventFilter<PauseEvent>;
export interface SlCanceledEventObject {
    orderId: BigNumber;
    trader: string;
    pairIndex: BigNumber;
    index: BigNumber;
    cancelReason: number;
}
export type SlCanceledEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number
], SlCanceledEventObject>;
export type SlCanceledEventFilter = TypedEventFilter<SlCanceledEvent>;
export interface SlUpdatedEventObject {
    orderId: BigNumber;
    trader: string;
    pairIndex: BigNumber;
    index: BigNumber;
    newSl: BigNumber;
}
export type SlUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], SlUpdatedEventObject>;
export type SlUpdatedEventFilter = TypedEventFilter<SlUpdatedEvent>;
export interface StableWorkPoolFeeChargedEventObject {
    trader: string;
    valueStable: BigNumber;
}
export type StableWorkPoolFeeChargedEvent = TypedEvent<[
    string,
    BigNumber
], StableWorkPoolFeeChargedEventObject>;
export type StableWorkPoolFeeChargedEventFilter = TypedEventFilter<StableWorkPoolFeeChargedEvent>;
export interface Callbacks extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CallbacksInterface;
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
        affiliation(overrides?: CallOverrides): Promise<[string]>;
        borrowingFees(overrides?: CallOverrides): Promise<[string]>;
        canExecuteTimeout(overrides?: CallOverrides): Promise<[BigNumber]>;
        closeTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        done(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeBotCloseOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeBotOpenOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAllPairsMaxLeverage(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        initialize(_storageT: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, _workPoolToApprove: PromiseOrValue<string>, _canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeV2(_borrowingFees: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isDone(overrides?: CallOverrides): Promise<[boolean]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        openTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        orderTokenManagement(overrides?: CallOverrides): Promise<[string]>;
        pairInfos(overrides?: CallOverrides): Promise<[string]>;
        pairMaxLeverage(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        referral(overrides?: CallOverrides): Promise<[string]>;
        setAffiliation(_affiliation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCanExecuteTimeout(_canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairMaxLeverage(pairIndex: PromiseOrValue<BigNumberish>, maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairMaxLeverageArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReferral(_referral: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTradeLastUpdated(_id: TradingCallbacks.SimplifiedTradeIdStruct, _lastUpdated: TradingCallbacks.LastUpdatedStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storageT(overrides?: CallOverrides): Promise<[string]>;
        tradeLastUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number
        ] & {
            tp: number;
            sl: number;
            limit: number;
            created: number;
        }>;
        updateSlCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    affiliation(overrides?: CallOverrides): Promise<string>;
    borrowingFees(overrides?: CallOverrides): Promise<string>;
    canExecuteTimeout(overrides?: CallOverrides): Promise<BigNumber>;
    closeTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    done(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeBotCloseOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeBotOpenOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAllPairsMaxLeverage(overrides?: CallOverrides): Promise<BigNumber[]>;
    initialize(_storageT: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, _workPoolToApprove: PromiseOrValue<string>, _canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeV2(_borrowingFees: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isDone(overrides?: CallOverrides): Promise<boolean>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    openTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    orderTokenManagement(overrides?: CallOverrides): Promise<string>;
    pairInfos(overrides?: CallOverrides): Promise<string>;
    pairMaxLeverage(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    referral(overrides?: CallOverrides): Promise<string>;
    setAffiliation(_affiliation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCanExecuteTimeout(_canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairMaxLeverage(pairIndex: PromiseOrValue<BigNumberish>, maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairMaxLeverageArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReferral(_referral: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTradeLastUpdated(_id: TradingCallbacks.SimplifiedTradeIdStruct, _lastUpdated: TradingCallbacks.LastUpdatedStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storageT(overrides?: CallOverrides): Promise<string>;
    tradeLastUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        number,
        number,
        number,
        number
    ] & {
        tp: number;
        sl: number;
        limit: number;
        created: number;
    }>;
    updateSlCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        affiliation(overrides?: CallOverrides): Promise<string>;
        borrowingFees(overrides?: CallOverrides): Promise<string>;
        canExecuteTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        closeTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: CallOverrides): Promise<void>;
        done(overrides?: CallOverrides): Promise<void>;
        executeBotCloseOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: CallOverrides): Promise<void>;
        executeBotOpenOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: CallOverrides): Promise<void>;
        getAllPairsMaxLeverage(overrides?: CallOverrides): Promise<BigNumber[]>;
        initialize(_storageT: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, _workPoolToApprove: PromiseOrValue<string>, _canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initializeV2(_borrowingFees: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isDone(overrides?: CallOverrides): Promise<boolean>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        openTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: CallOverrides): Promise<void>;
        orderTokenManagement(overrides?: CallOverrides): Promise<string>;
        pairInfos(overrides?: CallOverrides): Promise<string>;
        pairMaxLeverage(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: CallOverrides): Promise<void>;
        referral(overrides?: CallOverrides): Promise<string>;
        setAffiliation(_affiliation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setCanExecuteTimeout(_canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPairMaxLeverage(pairIndex: PromiseOrValue<BigNumberish>, maxLeverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPairMaxLeverageArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setReferral(_referral: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setTradeLastUpdated(_id: TradingCallbacks.SimplifiedTradeIdStruct, _lastUpdated: TradingCallbacks.LastUpdatedStruct, overrides?: CallOverrides): Promise<void>;
        storageT(overrides?: CallOverrides): Promise<string>;
        tradeLastUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number
        ] & {
            tp: number;
            sl: number;
            limit: number;
            created: number;
        }>;
        updateSlCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BorrowingFeeCharged(address,uint256,uint256)"(trader?: PromiseOrValue<string> | null, tradeValueStable?: null, feeValueStable?: null): BorrowingFeeChargedEventFilter;
        BorrowingFeeCharged(trader?: PromiseOrValue<string> | null, tradeValueStable?: null, feeValueStable?: null): BorrowingFeeChargedEventFilter;
        "BotOrderCanceled(uint256,uint8,uint8)"(orderId?: PromiseOrValue<BigNumberish> | null, orderType?: null, cancelReason?: null): BotOrderCanceledEventFilter;
        BotOrderCanceled(orderId?: PromiseOrValue<BigNumberish> | null, orderType?: null, cancelReason?: null): BotOrderCanceledEventFilter;
        "CanExecuteTimeoutUpdated(uint256)"(newValue?: null): CanExecuteTimeoutUpdatedEventFilter;
        CanExecuteTimeoutUpdated(newValue?: null): CanExecuteTimeoutUpdatedEventFilter;
        "CloseLimitExecuted(uint256,uint256,tuple,uint8,uint256,uint256,uint256,int256,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, limitIndex?: null, t?: null, orderType?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): CloseLimitExecutedEventFilter;
        CloseLimitExecuted(orderId?: PromiseOrValue<BigNumberish> | null, limitIndex?: null, t?: null, orderType?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): CloseLimitExecutedEventFilter;
        "CloseMarketExecuted(uint256,tuple,bool,uint256,uint256,uint256,int256,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, t?: null, open?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): CloseMarketExecutedEventFilter;
        CloseMarketExecuted(orderId?: PromiseOrValue<BigNumberish> | null, t?: null, open?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): CloseMarketExecutedEventFilter;
        "DevGovRefFeeCharged(address,uint256)"(trader?: PromiseOrValue<string> | null, valueStable?: null): DevGovRefFeeChargedEventFilter;
        DevGovRefFeeCharged(trader?: PromiseOrValue<string> | null, valueStable?: null): DevGovRefFeeChargedEventFilter;
        "Done(bool)"(done?: null): DoneEventFilter;
        Done(done?: null): DoneEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "MarketCloseCanceled(uint256,address,uint256,uint256,uint8)"(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, cancelReason?: null): MarketCloseCanceledEventFilter;
        MarketCloseCanceled(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, cancelReason?: null): MarketCloseCanceledEventFilter;
        "MarketOpenCanceled(uint256,address,uint256,uint8)"(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, cancelReason?: null): MarketOpenCanceledEventFilter;
        MarketOpenCanceled(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, cancelReason?: null): MarketOpenCanceledEventFilter;
        "OpenLimitExecuted(uint256,uint256,tuple,uint8,uint256,uint256,uint256,int256,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, limitIndex?: null, t?: null, orderType?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): OpenLimitExecutedEventFilter;
        OpenLimitExecuted(orderId?: PromiseOrValue<BigNumberish> | null, limitIndex?: null, t?: null, orderType?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): OpenLimitExecutedEventFilter;
        "OpenLimitExecutedWithAffiliationReferral(uint256,uint256,tuple,uint8,uint256,uint256,uint256,int256,uint256,tuple,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, limitIndex?: null, t?: null, orderType?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null, affiliationInfo?: null, referralTeamID?: null): OpenLimitExecutedWithAffiliationReferralEventFilter;
        OpenLimitExecutedWithAffiliationReferral(orderId?: PromiseOrValue<BigNumberish> | null, limitIndex?: null, t?: null, orderType?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null, affiliationInfo?: null, referralTeamID?: null): OpenLimitExecutedWithAffiliationReferralEventFilter;
        "OpenMarketExecuted(uint256,tuple,bool,uint256,uint256,uint256,int256,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, t?: null, open?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): OpenMarketExecutedEventFilter;
        OpenMarketExecuted(orderId?: PromiseOrValue<BigNumberish> | null, t?: null, open?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null): OpenMarketExecutedEventFilter;
        "OpenMarketExecutedWithAffiliationReferral(uint256,tuple,bool,uint256,uint256,uint256,int256,uint256,tuple,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, t?: null, open?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null, affiliationInfo?: null, referralTeamID?: null): OpenMarketExecutedWithAffiliationReferralEventFilter;
        OpenMarketExecutedWithAffiliationReferral(orderId?: PromiseOrValue<BigNumberish> | null, t?: null, open?: null, price?: null, priceImpactP?: null, positionSizeStable?: null, percentProfit?: null, stableSentToTrader?: null, affiliationInfo?: null, referralTeamID?: null): OpenMarketExecutedWithAffiliationReferralEventFilter;
        "OrderExecutionFeeCharged(address,uint256)"(trader?: PromiseOrValue<string> | null, valueStable?: null): OrderExecutionFeeChargedEventFilter;
        OrderExecutionFeeCharged(trader?: PromiseOrValue<string> | null, valueStable?: null): OrderExecutionFeeChargedEventFilter;
        "PairMaxLeverageUpdated(uint256,uint256)"(pairIndex?: PromiseOrValue<BigNumberish> | null, maxLeverage?: null): PairMaxLeverageUpdatedEventFilter;
        PairMaxLeverageUpdated(pairIndex?: PromiseOrValue<BigNumberish> | null, maxLeverage?: null): PairMaxLeverageUpdatedEventFilter;
        "Pause(bool)"(paused?: null): PauseEventFilter;
        Pause(paused?: null): PauseEventFilter;
        "SlCanceled(uint256,address,uint256,uint256,uint8)"(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, cancelReason?: null): SlCanceledEventFilter;
        SlCanceled(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, cancelReason?: null): SlCanceledEventFilter;
        "SlUpdated(uint256,address,uint256,uint256,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, newSl?: null): SlUpdatedEventFilter;
        SlUpdated(orderId?: PromiseOrValue<BigNumberish> | null, trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, newSl?: null): SlUpdatedEventFilter;
        "StableWorkPoolFeeCharged(address,uint256)"(trader?: PromiseOrValue<string> | null, valueStable?: null): StableWorkPoolFeeChargedEventFilter;
        StableWorkPoolFeeCharged(trader?: PromiseOrValue<string> | null, valueStable?: null): StableWorkPoolFeeChargedEventFilter;
    };
    estimateGas: {
        affiliation(overrides?: CallOverrides): Promise<BigNumber>;
        borrowingFees(overrides?: CallOverrides): Promise<BigNumber>;
        canExecuteTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        closeTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        done(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeBotCloseOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeBotOpenOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAllPairsMaxLeverage(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_storageT: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, _workPoolToApprove: PromiseOrValue<string>, _canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeV2(_borrowingFees: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isDone(overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        openTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        orderTokenManagement(overrides?: CallOverrides): Promise<BigNumber>;
        pairInfos(overrides?: CallOverrides): Promise<BigNumber>;
        pairMaxLeverage(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        referral(overrides?: CallOverrides): Promise<BigNumber>;
        setAffiliation(_affiliation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCanExecuteTimeout(_canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairMaxLeverage(pairIndex: PromiseOrValue<BigNumberish>, maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairMaxLeverageArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReferral(_referral: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTradeLastUpdated(_id: TradingCallbacks.SimplifiedTradeIdStruct, _lastUpdated: TradingCallbacks.LastUpdatedStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storageT(overrides?: CallOverrides): Promise<BigNumber>;
        tradeLastUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        updateSlCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        affiliation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowingFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canExecuteTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closeTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        done(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeBotCloseOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeBotOpenOrderCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAllPairsMaxLeverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_storageT: PromiseOrValue<string>, _orderTokenManagement: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, _workPoolToApprove: PromiseOrValue<string>, _canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeV2(_borrowingFees: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isDone(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openTradeMarketCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        orderTokenManagement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairInfos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairMaxLeverage(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        referral(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAffiliation(_affiliation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCanExecuteTimeout(_canExecuteTimeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairMaxLeverage(pairIndex: PromiseOrValue<BigNumberish>, maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairMaxLeverageArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReferral(_referral: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTradeLastUpdated(_id: TradingCallbacks.SimplifiedTradeIdStruct, _lastUpdated: TradingCallbacks.LastUpdatedStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storageT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tradeLastUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateSlCallback(a: TradingCallbacks.AggregatorAnswerStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
