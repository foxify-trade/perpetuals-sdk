import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IBorrowingFees {
    type PairGroupStruct = {
        groupIndex: PromiseOrValue<BigNumberish>;
        block: PromiseOrValue<BigNumberish>;
        initialAccFeeLong: PromiseOrValue<BigNumberish>;
        initialAccFeeShort: PromiseOrValue<BigNumberish>;
        prevGroupAccFeeLong: PromiseOrValue<BigNumberish>;
        prevGroupAccFeeShort: PromiseOrValue<BigNumberish>;
        pairAccFeeLong: PromiseOrValue<BigNumberish>;
        pairAccFeeShort: PromiseOrValue<BigNumberish>;
        _placeholder: PromiseOrValue<BigNumberish>;
    };
    type PairGroupStructOutput = [
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        groupIndex: number;
        block: number;
        initialAccFeeLong: BigNumber;
        initialAccFeeShort: BigNumber;
        prevGroupAccFeeLong: BigNumber;
        prevGroupAccFeeShort: BigNumber;
        pairAccFeeLong: BigNumber;
        pairAccFeeShort: BigNumber;
        _placeholder: BigNumber;
    };
    type PairStruct = {
        groups: IBorrowingFees.PairGroupStruct[];
        feePerBlock: PromiseOrValue<BigNumberish>;
        accFeeLong: PromiseOrValue<BigNumberish>;
        accFeeShort: PromiseOrValue<BigNumberish>;
        accLastUpdatedBlock: PromiseOrValue<BigNumberish>;
        _placeholder: PromiseOrValue<BigNumberish>;
        lastAccBlockWeightedMarketCap: PromiseOrValue<BigNumberish>;
    };
    type PairStructOutput = [
        IBorrowingFees.PairGroupStructOutput[],
        number,
        BigNumber,
        BigNumber,
        number,
        number,
        BigNumber
    ] & {
        groups: IBorrowingFees.PairGroupStructOutput[];
        feePerBlock: number;
        accFeeLong: BigNumber;
        accFeeShort: BigNumber;
        accLastUpdatedBlock: number;
        _placeholder: number;
        lastAccBlockWeightedMarketCap: BigNumber;
    };
    type GroupStruct = {
        oiLong: PromiseOrValue<BigNumberish>;
        oiShort: PromiseOrValue<BigNumberish>;
        feePerBlock: PromiseOrValue<BigNumberish>;
        accFeeLong: PromiseOrValue<BigNumberish>;
        accFeeShort: PromiseOrValue<BigNumberish>;
        accLastUpdatedBlock: PromiseOrValue<BigNumberish>;
        maxOi: PromiseOrValue<BigNumberish>;
        lastAccBlockWeightedMarketCap: PromiseOrValue<BigNumberish>;
    };
    type GroupStructOutput = [
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber
    ] & {
        oiLong: BigNumber;
        oiShort: BigNumber;
        feePerBlock: number;
        accFeeLong: BigNumber;
        accFeeShort: BigNumber;
        accLastUpdatedBlock: number;
        maxOi: BigNumber;
        lastAccBlockWeightedMarketCap: BigNumber;
    };
    type InitialAccFeesStruct = {
        accPairFee: PromiseOrValue<BigNumberish>;
        accGroupFee: PromiseOrValue<BigNumberish>;
        block: PromiseOrValue<BigNumberish>;
        _placeholder: PromiseOrValue<BigNumberish>;
    };
    type InitialAccFeesStructOutput = [
        BigNumber,
        BigNumber,
        number,
        BigNumber
    ] & {
        accPairFee: BigNumber;
        accGroupFee: BigNumber;
        block: number;
        _placeholder: BigNumber;
    };
    type BorrowingFeeInputStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        long: PromiseOrValue<boolean>;
        collateral: PromiseOrValue<BigNumberish>;
        leverage: PromiseOrValue<BigNumberish>;
    };
    type BorrowingFeeInputStructOutput = [
        string,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        long: boolean;
        collateral: BigNumber;
        leverage: BigNumber;
    };
    type LiqPriceInputStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        openPrice: PromiseOrValue<BigNumberish>;
        long: PromiseOrValue<boolean>;
        collateral: PromiseOrValue<BigNumberish>;
        leverage: PromiseOrValue<BigNumberish>;
    };
    type LiqPriceInputStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        openPrice: BigNumber;
        long: boolean;
        collateral: BigNumber;
        leverage: BigNumber;
    };
    type GroupParamsStruct = {
        feePerBlock: PromiseOrValue<BigNumberish>;
        maxOi: PromiseOrValue<BigNumberish>;
    };
    type GroupParamsStructOutput = [number, BigNumber] & {
        feePerBlock: number;
        maxOi: BigNumber;
    };
    type PairParamsStruct = {
        groupIndex: PromiseOrValue<BigNumberish>;
        feePerBlock: PromiseOrValue<BigNumberish>;
    };
    type PairParamsStructOutput = [number, number] & {
        groupIndex: number;
        feePerBlock: number;
    };
}
export declare namespace IPairInfos {
    type TradeInitialAccFeesStruct = {
        rollover: PromiseOrValue<BigNumberish>;
        funding: PromiseOrValue<BigNumberish>;
        openedAfterUpdate: PromiseOrValue<boolean>;
    };
    type TradeInitialAccFeesStructOutput = [
        BigNumber,
        BigNumber,
        boolean
    ] & {
        rollover: BigNumber;
        funding: BigNumber;
        openedAfterUpdate: boolean;
    };
}
export interface BorrowingFeesInterface extends utils.Interface {
    functions: {
        "getAllPairs()": FunctionFragment;
        "getGroup(uint16)": FunctionFragment;
        "getGroupPendingAccFee(uint16,uint256,bool)": FunctionFragment;
        "getGroupPendingAccFees(uint16,uint256)": FunctionFragment;
        "getGroupWeightedWorkPoolMarketCapSinceLastUpdate(uint16,uint256)": FunctionFragment;
        "getGroups(uint16[])": FunctionFragment;
        "getPair(uint256)": FunctionFragment;
        "getPairGroupAccFeesDeltas(uint256,(uint16,uint48,uint64,uint64,uint64,uint64,uint64,uint64,uint64)[],(uint64,uint64,uint48,uint80),uint256,bool,uint256)": FunctionFragment;
        "getPairGroupIndex(uint256)": FunctionFragment;
        "getPairOpenInterestStable(uint256)": FunctionFragment;
        "getPairPendingAccFee(uint256,uint256,bool)": FunctionFragment;
        "getPairPendingAccFees(uint256,uint256)": FunctionFragment;
        "getPairWeightedWorkPoolMarketCapSinceLastUpdate(uint256,uint256)": FunctionFragment;
        "getPendingAccBlockWeightedMarketCap(uint256)": FunctionFragment;
        "getPendingAccFees(uint64,uint64,uint256,uint256,uint32,uint256,uint256,uint256)": FunctionFragment;
        "getTradeBorrowingFee((address,uint256,uint256,bool,uint256,uint256))": FunctionFragment;
        "getTradeInitialAccFees(address,uint256,uint256)": FunctionFragment;
        "getTradeLiquidationPrice((address,uint256,uint256,uint256,bool,uint256,uint256))": FunctionFragment;
        "getWeightedWorkPoolMarketCap(uint256,uint256,uint256)": FunctionFragment;
        "groups(uint16)": FunctionFragment;
        "handleTradeAction(address,uint256,uint256,uint256,bool,bool)": FunctionFragment;
        "initialAccFees(address,uint256,uint256)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "pairInfos()": FunctionFragment;
        "pairs(uint256)": FunctionFragment;
        "setGroupParams(uint16,(uint32,uint80))": FunctionFragment;
        "setGroupParamsArray(uint16[],(uint32,uint80)[])": FunctionFragment;
        "setPairParams(uint256,(uint16,uint32))": FunctionFragment;
        "setPairParamsArray(uint256[],(uint16,uint32)[])": FunctionFragment;
        "storageT()": FunctionFragment;
        "withinMaxGroupOi(uint256,bool,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAllPairs" | "getGroup" | "getGroupPendingAccFee" | "getGroupPendingAccFees" | "getGroupWeightedWorkPoolMarketCapSinceLastUpdate" | "getGroups" | "getPair" | "getPairGroupAccFeesDeltas" | "getPairGroupIndex" | "getPairOpenInterestStable" | "getPairPendingAccFee" | "getPairPendingAccFees" | "getPairWeightedWorkPoolMarketCapSinceLastUpdate" | "getPendingAccBlockWeightedMarketCap" | "getPendingAccFees" | "getTradeBorrowingFee" | "getTradeInitialAccFees" | "getTradeLiquidationPrice" | "getWeightedWorkPoolMarketCap" | "groups" | "handleTradeAction" | "initialAccFees" | "initialize" | "pairInfos" | "pairs" | "setGroupParams" | "setGroupParamsArray" | "setPairParams" | "setPairParamsArray" | "storageT" | "withinMaxGroupOi"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllPairs", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGroup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGroupPendingAccFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getGroupPendingAccFees", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGroupWeightedWorkPoolMarketCapSinceLastUpdate", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGroups", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getPair", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPairGroupAccFeesDeltas", values: [
        PromiseOrValue<BigNumberish>,
        IBorrowingFees.PairGroupStruct[],
        IBorrowingFees.InitialAccFeesStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getPairGroupIndex", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPairOpenInterestStable", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPairPendingAccFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getPairPendingAccFees", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPairWeightedWorkPoolMarketCapSinceLastUpdate", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPendingAccBlockWeightedMarketCap", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPendingAccFees", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeBorrowingFee", values: [IBorrowingFees.BorrowingFeeInputStruct]): string;
    encodeFunctionData(functionFragment: "getTradeInitialAccFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeLiquidationPrice", values: [IBorrowingFees.LiqPriceInputStruct]): string;
    encodeFunctionData(functionFragment: "getWeightedWorkPoolMarketCap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "groups", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "handleTradeAction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "initialAccFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pairInfos", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairs", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setGroupParams", values: [PromiseOrValue<BigNumberish>, IBorrowingFees.GroupParamsStruct]): string;
    encodeFunctionData(functionFragment: "setGroupParamsArray", values: [PromiseOrValue<BigNumberish>[], IBorrowingFees.GroupParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "setPairParams", values: [PromiseOrValue<BigNumberish>, IBorrowingFees.PairParamsStruct]): string;
    encodeFunctionData(functionFragment: "setPairParamsArray", values: [PromiseOrValue<BigNumberish>[], IBorrowingFees.PairParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "storageT", values?: undefined): string;
    encodeFunctionData(functionFragment: "withinMaxGroupOi", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "getAllPairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGroup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGroupPendingAccFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGroupPendingAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGroupWeightedWorkPoolMarketCapSinceLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGroups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairGroupAccFeesDeltas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairGroupIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairOpenInterestStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairPendingAccFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairPendingAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairWeightedWorkPoolMarketCapSinceLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingAccBlockWeightedMarketCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeBorrowingFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeInitialAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeLiquidationPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWeightedWorkPoolMarketCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleTradeAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGroupParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGroupParamsArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairParamsArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storageT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withinMaxGroupOi", data: BytesLike): Result;
    events: {
        "GroupAccFeesUpdated(uint16,uint256,uint64,uint64,uint256)": EventFragment;
        "GroupOiUpdated(uint16,bool,bool,uint112,uint112,uint112)": EventFragment;
        "GroupUpdated(uint16,uint32,uint80)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "PairAccFeesUpdated(uint256,uint256,uint64,uint64,uint256)": EventFragment;
        "PairGroupUpdated(uint256,uint16,uint16)": EventFragment;
        "PairParamsUpdated(uint256,uint16,uint32)": EventFragment;
        "TradeActionHandled(address,uint256,uint256,bool,bool,uint256)": EventFragment;
        "TradeInitialAccFeesStored(address,uint256,uint256,uint64,uint64)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GroupAccFeesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GroupOiUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GroupUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairAccFeesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairGroupUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairParamsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TradeActionHandled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TradeInitialAccFeesStored"): EventFragment;
}
export interface GroupAccFeesUpdatedEventObject {
    groupIndex: number;
    currentBlock: BigNumber;
    accFeeLong: BigNumber;
    accFeeShort: BigNumber;
    accBlockWeightedMarketCap: BigNumber;
}
export type GroupAccFeesUpdatedEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], GroupAccFeesUpdatedEventObject>;
export type GroupAccFeesUpdatedEventFilter = TypedEventFilter<GroupAccFeesUpdatedEvent>;
export interface GroupOiUpdatedEventObject {
    groupIndex: number;
    long: boolean;
    increase: boolean;
    amount: BigNumber;
    oiLong: BigNumber;
    oiShort: BigNumber;
}
export type GroupOiUpdatedEvent = TypedEvent<[
    number,
    boolean,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber
], GroupOiUpdatedEventObject>;
export type GroupOiUpdatedEventFilter = TypedEventFilter<GroupOiUpdatedEvent>;
export interface GroupUpdatedEventObject {
    groupIndex: number;
    feePerBlock: number;
    maxOi: BigNumber;
}
export type GroupUpdatedEvent = TypedEvent<[
    number,
    number,
    BigNumber
], GroupUpdatedEventObject>;
export type GroupUpdatedEventFilter = TypedEventFilter<GroupUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface PairAccFeesUpdatedEventObject {
    pairIndex: BigNumber;
    currentBlock: BigNumber;
    accFeeLong: BigNumber;
    accFeeShort: BigNumber;
    accBlockWeightedMarketCap: BigNumber;
}
export type PairAccFeesUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PairAccFeesUpdatedEventObject>;
export type PairAccFeesUpdatedEventFilter = TypedEventFilter<PairAccFeesUpdatedEvent>;
export interface PairGroupUpdatedEventObject {
    pairIndex: BigNumber;
    prevGroupIndex: number;
    newGroupIndex: number;
}
export type PairGroupUpdatedEvent = TypedEvent<[
    BigNumber,
    number,
    number
], PairGroupUpdatedEventObject>;
export type PairGroupUpdatedEventFilter = TypedEventFilter<PairGroupUpdatedEvent>;
export interface PairParamsUpdatedEventObject {
    pairIndex: BigNumber;
    groupIndex: number;
    feePerBlock: number;
}
export type PairParamsUpdatedEvent = TypedEvent<[
    BigNumber,
    number,
    number
], PairParamsUpdatedEventObject>;
export type PairParamsUpdatedEventFilter = TypedEventFilter<PairParamsUpdatedEvent>;
export interface TradeActionHandledEventObject {
    trader: string;
    pairIndex: BigNumber;
    index: BigNumber;
    open: boolean;
    long: boolean;
    positionSizeStable: BigNumber;
}
export type TradeActionHandledEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    BigNumber
], TradeActionHandledEventObject>;
export type TradeActionHandledEventFilter = TypedEventFilter<TradeActionHandledEvent>;
export interface TradeInitialAccFeesStoredEventObject {
    trader: string;
    pairIndex: BigNumber;
    index: BigNumber;
    initialPairAccFee: BigNumber;
    initialGroupAccFee: BigNumber;
}
export type TradeInitialAccFeesStoredEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], TradeInitialAccFeesStoredEventObject>;
export type TradeInitialAccFeesStoredEventFilter = TypedEventFilter<TradeInitialAccFeesStoredEvent>;
export interface BorrowingFees extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BorrowingFeesInterface;
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
        getAllPairs(overrides?: CallOverrides): Promise<[IBorrowingFees.PairStructOutput[]]>;
        getGroup(groupIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IBorrowingFees.GroupStructOutput]>;
        getGroupPendingAccFee(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber] & {
            accFee: BigNumber;
        }>;
        getGroupPendingAccFees(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            groupAccFeeDelta: BigNumber;
        }>;
        getGroupWeightedWorkPoolMarketCapSinceLastUpdate(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGroups(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[IBorrowingFees.GroupStructOutput[]]>;
        getPair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IBorrowingFees.PairStructOutput]>;
        getPairGroupAccFeesDeltas(i: PromiseOrValue<BigNumberish>, pairGroups: IBorrowingFees.PairGroupStruct[], initialFees: IBorrowingFees.InitialAccFeesStruct, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            boolean
        ] & {
            deltaGroup: BigNumber;
            deltaPair: BigNumber;
            beforeTradeOpen: boolean;
        }>;
        getPairGroupIndex(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            groupIndex: number;
        }>;
        getPairOpenInterestStable(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPairPendingAccFee(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber] & {
            accFee: BigNumber;
        }>;
        getPairPendingAccFees(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            pairAccFeeDelta: BigNumber;
        }>;
        getPairWeightedWorkPoolMarketCapSinceLastUpdate(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPendingAccBlockWeightedMarketCap(currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPendingAccFees(accFeeLong: PromiseOrValue<BigNumberish>, accFeeShort: PromiseOrValue<BigNumberish>, oiLong: PromiseOrValue<BigNumberish>, oiShort: PromiseOrValue<BigNumberish>, feePerBlock: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, accLastUpdatedBlock: PromiseOrValue<BigNumberish>, workPoolMarketCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            newAccFeeLong: BigNumber;
            newAccFeeShort: BigNumber;
            delta: BigNumber;
        }>;
        getTradeBorrowingFee(input: IBorrowingFees.BorrowingFeeInputStruct, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        getTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IBorrowingFees.InitialAccFeesStructOutput,
            IPairInfos.TradeInitialAccFeesStructOutput
        ] & {
            borrowingFees: IBorrowingFees.InitialAccFeesStructOutput;
            otherFees: IPairInfos.TradeInitialAccFeesStructOutput;
        }>;
        getTradeLiquidationPrice(input: IBorrowingFees.LiqPriceInputStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        getWeightedWorkPoolMarketCap(accBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, lastAccBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, blockDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber,
            BigNumber,
            number,
            BigNumber,
            BigNumber
        ] & {
            oiLong: BigNumber;
            oiShort: BigNumber;
            feePerBlock: number;
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            accLastUpdatedBlock: number;
            maxOi: BigNumber;
            lastAccBlockWeightedMarketCap: BigNumber;
        }>;
        handleTradeAction(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, positionSizeStable: PromiseOrValue<BigNumberish>, open: PromiseOrValue<boolean>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber
        ] & {
            accPairFee: BigNumber;
            accGroupFee: BigNumber;
            block: number;
            _placeholder: BigNumber;
        }>;
        initialize(_storageT: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pairInfos(overrides?: CallOverrides): Promise<[string]>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number,
            number,
            BigNumber
        ] & {
            feePerBlock: number;
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            accLastUpdatedBlock: number;
            _placeholder: number;
            lastAccBlockWeightedMarketCap: BigNumber;
        }>;
        setGroupParams(groupIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.GroupParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGroupParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.GroupParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.PairParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.PairParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storageT(overrides?: CallOverrides): Promise<[string]>;
        withinMaxGroupOi(pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, positionSizeStable: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    getAllPairs(overrides?: CallOverrides): Promise<IBorrowingFees.PairStructOutput[]>;
    getGroup(groupIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IBorrowingFees.GroupStructOutput>;
    getGroupPendingAccFee(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    getGroupPendingAccFees(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        accFeeLong: BigNumber;
        accFeeShort: BigNumber;
        groupAccFeeDelta: BigNumber;
    }>;
    getGroupWeightedWorkPoolMarketCapSinceLastUpdate(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getGroups(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<IBorrowingFees.GroupStructOutput[]>;
    getPair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IBorrowingFees.PairStructOutput>;
    getPairGroupAccFeesDeltas(i: PromiseOrValue<BigNumberish>, pairGroups: IBorrowingFees.PairGroupStruct[], initialFees: IBorrowingFees.InitialAccFeesStruct, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        boolean
    ] & {
        deltaGroup: BigNumber;
        deltaPair: BigNumber;
        beforeTradeOpen: boolean;
    }>;
    getPairGroupIndex(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    getPairOpenInterestStable(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getPairPendingAccFee(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    getPairPendingAccFees(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        accFeeLong: BigNumber;
        accFeeShort: BigNumber;
        pairAccFeeDelta: BigNumber;
    }>;
    getPairWeightedWorkPoolMarketCapSinceLastUpdate(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPendingAccBlockWeightedMarketCap(currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPendingAccFees(accFeeLong: PromiseOrValue<BigNumberish>, accFeeShort: PromiseOrValue<BigNumberish>, oiLong: PromiseOrValue<BigNumberish>, oiShort: PromiseOrValue<BigNumberish>, feePerBlock: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, accLastUpdatedBlock: PromiseOrValue<BigNumberish>, workPoolMarketCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        newAccFeeLong: BigNumber;
        newAccFeeShort: BigNumber;
        delta: BigNumber;
    }>;
    getTradeBorrowingFee(input: IBorrowingFees.BorrowingFeeInputStruct, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        IBorrowingFees.InitialAccFeesStructOutput,
        IPairInfos.TradeInitialAccFeesStructOutput
    ] & {
        borrowingFees: IBorrowingFees.InitialAccFeesStructOutput;
        otherFees: IPairInfos.TradeInitialAccFeesStructOutput;
    }>;
    getTradeLiquidationPrice(input: IBorrowingFees.LiqPriceInputStruct, overrides?: CallOverrides): Promise<BigNumber>;
    getWeightedWorkPoolMarketCap(accBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, lastAccBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, blockDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber
    ] & {
        oiLong: BigNumber;
        oiShort: BigNumber;
        feePerBlock: number;
        accFeeLong: BigNumber;
        accFeeShort: BigNumber;
        accLastUpdatedBlock: number;
        maxOi: BigNumber;
        lastAccBlockWeightedMarketCap: BigNumber;
    }>;
    handleTradeAction(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, positionSizeStable: PromiseOrValue<BigNumberish>, open: PromiseOrValue<boolean>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number,
        BigNumber
    ] & {
        accPairFee: BigNumber;
        accGroupFee: BigNumber;
        block: number;
        _placeholder: BigNumber;
    }>;
    initialize(_storageT: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pairInfos(overrides?: CallOverrides): Promise<string>;
    pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        number,
        number,
        BigNumber
    ] & {
        feePerBlock: number;
        accFeeLong: BigNumber;
        accFeeShort: BigNumber;
        accLastUpdatedBlock: number;
        _placeholder: number;
        lastAccBlockWeightedMarketCap: BigNumber;
    }>;
    setGroupParams(groupIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.GroupParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGroupParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.GroupParamsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.PairParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.PairParamsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storageT(overrides?: CallOverrides): Promise<string>;
    withinMaxGroupOi(pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, positionSizeStable: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getAllPairs(overrides?: CallOverrides): Promise<IBorrowingFees.PairStructOutput[]>;
        getGroup(groupIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IBorrowingFees.GroupStructOutput>;
        getGroupPendingAccFee(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getGroupPendingAccFees(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            groupAccFeeDelta: BigNumber;
        }>;
        getGroupWeightedWorkPoolMarketCapSinceLastUpdate(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGroups(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<IBorrowingFees.GroupStructOutput[]>;
        getPair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IBorrowingFees.PairStructOutput>;
        getPairGroupAccFeesDeltas(i: PromiseOrValue<BigNumberish>, pairGroups: IBorrowingFees.PairGroupStruct[], initialFees: IBorrowingFees.InitialAccFeesStruct, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            boolean
        ] & {
            deltaGroup: BigNumber;
            deltaPair: BigNumber;
            beforeTradeOpen: boolean;
        }>;
        getPairGroupIndex(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        getPairOpenInterestStable(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPairPendingAccFee(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairPendingAccFees(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            pairAccFeeDelta: BigNumber;
        }>;
        getPairWeightedWorkPoolMarketCapSinceLastUpdate(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAccBlockWeightedMarketCap(currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAccFees(accFeeLong: PromiseOrValue<BigNumberish>, accFeeShort: PromiseOrValue<BigNumberish>, oiLong: PromiseOrValue<BigNumberish>, oiShort: PromiseOrValue<BigNumberish>, feePerBlock: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, accLastUpdatedBlock: PromiseOrValue<BigNumberish>, workPoolMarketCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            newAccFeeLong: BigNumber;
            newAccFeeShort: BigNumber;
            delta: BigNumber;
        }>;
        getTradeBorrowingFee(input: IBorrowingFees.BorrowingFeeInputStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IBorrowingFees.InitialAccFeesStructOutput,
            IPairInfos.TradeInitialAccFeesStructOutput
        ] & {
            borrowingFees: IBorrowingFees.InitialAccFeesStructOutput;
            otherFees: IPairInfos.TradeInitialAccFeesStructOutput;
        }>;
        getTradeLiquidationPrice(input: IBorrowingFees.LiqPriceInputStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getWeightedWorkPoolMarketCap(accBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, lastAccBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, blockDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber,
            BigNumber,
            number,
            BigNumber,
            BigNumber
        ] & {
            oiLong: BigNumber;
            oiShort: BigNumber;
            feePerBlock: number;
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            accLastUpdatedBlock: number;
            maxOi: BigNumber;
            lastAccBlockWeightedMarketCap: BigNumber;
        }>;
        handleTradeAction(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, positionSizeStable: PromiseOrValue<BigNumberish>, open: PromiseOrValue<boolean>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        initialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber
        ] & {
            accPairFee: BigNumber;
            accGroupFee: BigNumber;
            block: number;
            _placeholder: BigNumber;
        }>;
        initialize(_storageT: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        pairInfos(overrides?: CallOverrides): Promise<string>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number,
            number,
            BigNumber
        ] & {
            feePerBlock: number;
            accFeeLong: BigNumber;
            accFeeShort: BigNumber;
            accLastUpdatedBlock: number;
            _placeholder: number;
            lastAccBlockWeightedMarketCap: BigNumber;
        }>;
        setGroupParams(groupIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.GroupParamsStruct, overrides?: CallOverrides): Promise<void>;
        setGroupParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.GroupParamsStruct[], overrides?: CallOverrides): Promise<void>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.PairParamsStruct, overrides?: CallOverrides): Promise<void>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.PairParamsStruct[], overrides?: CallOverrides): Promise<void>;
        storageT(overrides?: CallOverrides): Promise<string>;
        withinMaxGroupOi(pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, positionSizeStable: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "GroupAccFeesUpdated(uint16,uint256,uint64,uint64,uint256)"(groupIndex?: PromiseOrValue<BigNumberish> | null, currentBlock?: null, accFeeLong?: null, accFeeShort?: null, accBlockWeightedMarketCap?: null): GroupAccFeesUpdatedEventFilter;
        GroupAccFeesUpdated(groupIndex?: PromiseOrValue<BigNumberish> | null, currentBlock?: null, accFeeLong?: null, accFeeShort?: null, accBlockWeightedMarketCap?: null): GroupAccFeesUpdatedEventFilter;
        "GroupOiUpdated(uint16,bool,bool,uint112,uint112,uint112)"(groupIndex?: PromiseOrValue<BigNumberish> | null, long?: PromiseOrValue<boolean> | null, increase?: PromiseOrValue<boolean> | null, amount?: null, oiLong?: null, oiShort?: null): GroupOiUpdatedEventFilter;
        GroupOiUpdated(groupIndex?: PromiseOrValue<BigNumberish> | null, long?: PromiseOrValue<boolean> | null, increase?: PromiseOrValue<boolean> | null, amount?: null, oiLong?: null, oiShort?: null): GroupOiUpdatedEventFilter;
        "GroupUpdated(uint16,uint32,uint80)"(groupIndex?: PromiseOrValue<BigNumberish> | null, feePerBlock?: null, maxOi?: null): GroupUpdatedEventFilter;
        GroupUpdated(groupIndex?: PromiseOrValue<BigNumberish> | null, feePerBlock?: null, maxOi?: null): GroupUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "PairAccFeesUpdated(uint256,uint256,uint64,uint64,uint256)"(pairIndex?: PromiseOrValue<BigNumberish> | null, currentBlock?: null, accFeeLong?: null, accFeeShort?: null, accBlockWeightedMarketCap?: null): PairAccFeesUpdatedEventFilter;
        PairAccFeesUpdated(pairIndex?: PromiseOrValue<BigNumberish> | null, currentBlock?: null, accFeeLong?: null, accFeeShort?: null, accBlockWeightedMarketCap?: null): PairAccFeesUpdatedEventFilter;
        "PairGroupUpdated(uint256,uint16,uint16)"(pairIndex?: PromiseOrValue<BigNumberish> | null, prevGroupIndex?: PromiseOrValue<BigNumberish> | null, newGroupIndex?: PromiseOrValue<BigNumberish> | null): PairGroupUpdatedEventFilter;
        PairGroupUpdated(pairIndex?: PromiseOrValue<BigNumberish> | null, prevGroupIndex?: PromiseOrValue<BigNumberish> | null, newGroupIndex?: PromiseOrValue<BigNumberish> | null): PairGroupUpdatedEventFilter;
        "PairParamsUpdated(uint256,uint16,uint32)"(pairIndex?: PromiseOrValue<BigNumberish> | null, groupIndex?: PromiseOrValue<BigNumberish> | null, feePerBlock?: null): PairParamsUpdatedEventFilter;
        PairParamsUpdated(pairIndex?: PromiseOrValue<BigNumberish> | null, groupIndex?: PromiseOrValue<BigNumberish> | null, feePerBlock?: null): PairParamsUpdatedEventFilter;
        "TradeActionHandled(address,uint256,uint256,bool,bool,uint256)"(trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, open?: null, long?: null, positionSizeStable?: null): TradeActionHandledEventFilter;
        TradeActionHandled(trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, open?: null, long?: null, positionSizeStable?: null): TradeActionHandledEventFilter;
        "TradeInitialAccFeesStored(address,uint256,uint256,uint64,uint64)"(trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, initialPairAccFee?: null, initialGroupAccFee?: null): TradeInitialAccFeesStoredEventFilter;
        TradeInitialAccFeesStored(trader?: PromiseOrValue<string> | null, pairIndex?: PromiseOrValue<BigNumberish> | null, index?: null, initialPairAccFee?: null, initialGroupAccFee?: null): TradeInitialAccFeesStoredEventFilter;
    };
    estimateGas: {
        getAllPairs(overrides?: CallOverrides): Promise<BigNumber>;
        getGroup(groupIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGroupPendingAccFee(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getGroupPendingAccFees(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGroupWeightedWorkPoolMarketCapSinceLastUpdate(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGroups(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getPair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairGroupAccFeesDeltas(i: PromiseOrValue<BigNumberish>, pairGroups: IBorrowingFees.PairGroupStruct[], initialFees: IBorrowingFees.InitialAccFeesStruct, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairGroupIndex(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairOpenInterestStable(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairPendingAccFee(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairPendingAccFees(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairWeightedWorkPoolMarketCapSinceLastUpdate(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAccBlockWeightedMarketCap(currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAccFees(accFeeLong: PromiseOrValue<BigNumberish>, accFeeShort: PromiseOrValue<BigNumberish>, oiLong: PromiseOrValue<BigNumberish>, oiShort: PromiseOrValue<BigNumberish>, feePerBlock: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, accLastUpdatedBlock: PromiseOrValue<BigNumberish>, workPoolMarketCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeBorrowingFee(input: IBorrowingFees.BorrowingFeeInputStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeLiquidationPrice(input: IBorrowingFees.LiqPriceInputStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getWeightedWorkPoolMarketCap(accBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, lastAccBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, blockDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        handleTradeAction(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, positionSizeStable: PromiseOrValue<BigNumberish>, open: PromiseOrValue<boolean>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_storageT: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pairInfos(overrides?: CallOverrides): Promise<BigNumber>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setGroupParams(groupIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.GroupParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGroupParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.GroupParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.PairParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.PairParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storageT(overrides?: CallOverrides): Promise<BigNumber>;
        withinMaxGroupOi(pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, positionSizeStable: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllPairs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGroup(groupIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGroupPendingAccFee(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGroupPendingAccFees(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGroupWeightedWorkPoolMarketCapSinceLastUpdate(groupIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGroups(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairGroupAccFeesDeltas(i: PromiseOrValue<BigNumberish>, pairGroups: IBorrowingFees.PairGroupStruct[], initialFees: IBorrowingFees.InitialAccFeesStruct, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairGroupIndex(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairOpenInterestStable(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairPendingAccFee(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairPendingAccFees(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairWeightedWorkPoolMarketCapSinceLastUpdate(pairIndex: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingAccBlockWeightedMarketCap(currentBlock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingAccFees(accFeeLong: PromiseOrValue<BigNumberish>, accFeeShort: PromiseOrValue<BigNumberish>, oiLong: PromiseOrValue<BigNumberish>, oiShort: PromiseOrValue<BigNumberish>, feePerBlock: PromiseOrValue<BigNumberish>, currentBlock: PromiseOrValue<BigNumberish>, accLastUpdatedBlock: PromiseOrValue<BigNumberish>, workPoolMarketCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeBorrowingFee(input: IBorrowingFees.BorrowingFeeInputStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeLiquidationPrice(input: IBorrowingFees.LiqPriceInputStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWeightedWorkPoolMarketCap(accBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, lastAccBlockWeightedMarketCap: PromiseOrValue<BigNumberish>, blockDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleTradeAction(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, positionSizeStable: PromiseOrValue<BigNumberish>, open: PromiseOrValue<boolean>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_storageT: PromiseOrValue<string>, _pairInfos: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pairInfos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGroupParams(groupIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.GroupParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGroupParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.GroupParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: IBorrowingFees.PairParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: IBorrowingFees.PairParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storageT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withinMaxGroupOi(pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, positionSizeStable: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
