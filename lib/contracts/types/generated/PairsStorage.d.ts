import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace PairsStorage {
    type FeeStruct = {
        name: PromiseOrValue<string>;
        openFeeP: PromiseOrValue<BigNumberish>;
        closeFeeP: PromiseOrValue<BigNumberish>;
        oracleFeeP: PromiseOrValue<BigNumberish>;
        executeLimitOrderFeeP: PromiseOrValue<BigNumberish>;
        referralFeeP: PromiseOrValue<BigNumberish>;
        minLevPosStable: PromiseOrValue<BigNumberish>;
    };
    type FeeStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        openFeeP: BigNumber;
        closeFeeP: BigNumber;
        oracleFeeP: BigNumber;
        executeLimitOrderFeeP: BigNumber;
        referralFeeP: BigNumber;
        minLevPosStable: BigNumber;
    };
    type GroupStruct = {
        name: PromiseOrValue<string>;
        job: PromiseOrValue<BytesLike>;
        minLeverage: PromiseOrValue<BigNumberish>;
        maxLeverage: PromiseOrValue<BigNumberish>;
        maxCollateralP: PromiseOrValue<BigNumberish>;
    };
    type GroupStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        job: string;
        minLeverage: BigNumber;
        maxLeverage: BigNumber;
        maxCollateralP: BigNumber;
    };
    type FeedStruct = {
        feed1: PromiseOrValue<string>;
        feed2: PromiseOrValue<string>;
        feedCalculation: PromiseOrValue<BigNumberish>;
        maxDeviationP: PromiseOrValue<BigNumberish>;
    };
    type FeedStructOutput = [string, string, number, BigNumber] & {
        feed1: string;
        feed2: string;
        feedCalculation: number;
        maxDeviationP: BigNumber;
    };
    type PairStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        feed: PairsStorage.FeedStruct;
        spreadP: PromiseOrValue<BigNumberish>;
        groupIndex: PromiseOrValue<BigNumberish>;
        feeIndex: PromiseOrValue<BigNumberish>;
    };
    type PairStructOutput = [
        string,
        string,
        PairsStorage.FeedStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        from: string;
        to: string;
        feed: PairsStorage.FeedStructOutput;
        spreadP: BigNumber;
        groupIndex: BigNumber;
        feeIndex: BigNumber;
    };
}
export interface PairsStorageInterface extends utils.Interface {
    functions: {
        "addFee((string,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "addGroup((string,bytes32,uint256,uint256,uint256))": FunctionFragment;
        "addPair((string,string,(address,address,uint8,uint256),uint256,uint256,uint256))": FunctionFragment;
        "addPairs((string,string,(address,address,uint8,uint256),uint256,uint256,uint256)[])": FunctionFragment;
        "currentOrderId()": FunctionFragment;
        "fees(uint256)": FunctionFragment;
        "feesCount()": FunctionFragment;
        "groupCollateral(uint256,bool)": FunctionFragment;
        "groupMaxCollateral(uint256)": FunctionFragment;
        "groups(uint256)": FunctionFragment;
        "groupsCollaterals(uint256,uint256)": FunctionFragment;
        "groupsCount()": FunctionFragment;
        "guaranteedSlEnabled(uint256)": FunctionFragment;
        "initialize(address,uint256)": FunctionFragment;
        "isPairListed(string,string)": FunctionFragment;
        "pairCloseFeeP(uint256)": FunctionFragment;
        "pairExecuteLimitOrderFeeP(uint256)": FunctionFragment;
        "pairFeed(uint256)": FunctionFragment;
        "pairJob(uint256)": FunctionFragment;
        "pairMaxLeverage(uint256)": FunctionFragment;
        "pairMinLevPosStable(uint256)": FunctionFragment;
        "pairMinLeverage(uint256)": FunctionFragment;
        "pairOpenFeeP(uint256)": FunctionFragment;
        "pairOracleFeeP(uint256)": FunctionFragment;
        "pairReferralFeeP(uint256)": FunctionFragment;
        "pairSpreadP(uint256)": FunctionFragment;
        "pairs(uint256)": FunctionFragment;
        "pairsBackend(uint256)": FunctionFragment;
        "pairsCount()": FunctionFragment;
        "storageT()": FunctionFragment;
        "updateFee(uint256,(string,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "updateGroup(uint256,(string,bytes32,uint256,uint256,uint256))": FunctionFragment;
        "updateGroupCollateral(uint256,uint256,bool,bool)": FunctionFragment;
        "updatePair(uint256,(string,string,(address,address,uint8,uint256),uint256,uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addFee" | "addGroup" | "addPair" | "addPairs" | "currentOrderId" | "fees" | "feesCount" | "groupCollateral" | "groupMaxCollateral" | "groups" | "groupsCollaterals" | "groupsCount" | "guaranteedSlEnabled" | "initialize" | "isPairListed" | "pairCloseFeeP" | "pairExecuteLimitOrderFeeP" | "pairFeed" | "pairJob" | "pairMaxLeverage" | "pairMinLevPosStable" | "pairMinLeverage" | "pairOpenFeeP" | "pairOracleFeeP" | "pairReferralFeeP" | "pairSpreadP" | "pairs" | "pairsBackend" | "pairsCount" | "storageT" | "updateFee" | "updateGroup" | "updateGroupCollateral" | "updatePair"): FunctionFragment;
    encodeFunctionData(functionFragment: "addFee", values: [PairsStorage.FeeStruct]): string;
    encodeFunctionData(functionFragment: "addGroup", values: [PairsStorage.GroupStruct]): string;
    encodeFunctionData(functionFragment: "addPair", values: [PairsStorage.PairStruct]): string;
    encodeFunctionData(functionFragment: "addPairs", values: [PairsStorage.PairStruct[]]): string;
    encodeFunctionData(functionFragment: "currentOrderId", values?: undefined): string;
    encodeFunctionData(functionFragment: "fees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "feesCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "groupCollateral", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "groupMaxCollateral", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "groups", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "groupsCollaterals", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "groupsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "guaranteedSlEnabled", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isPairListed", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pairCloseFeeP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairExecuteLimitOrderFeeP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairFeed", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairJob", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairMaxLeverage", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairMinLevPosStable", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairMinLeverage", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairOpenFeeP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairOracleFeeP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairReferralFeeP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairSpreadP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairs", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairsBackend", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "storageT", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFee", values: [PromiseOrValue<BigNumberish>, PairsStorage.FeeStruct]): string;
    encodeFunctionData(functionFragment: "updateGroup", values: [PromiseOrValue<BigNumberish>, PairsStorage.GroupStruct]): string;
    encodeFunctionData(functionFragment: "updateGroupCollateral", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "updatePair", values: [PromiseOrValue<BigNumberish>, PairsStorage.PairStruct]): string;
    decodeFunctionResult(functionFragment: "addFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGroup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentOrderId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groupCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groupMaxCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groupsCollaterals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groupsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guaranteedSlEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPairListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairCloseFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairExecuteLimitOrderFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairJob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMinLevPosStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMinLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairOpenFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairOracleFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairReferralFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairSpreadP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairsBackend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storageT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGroup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGroupCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePair", data: BytesLike): Result;
    events: {
        "FeeAdded(uint256,string)": EventFragment;
        "FeeUpdated(uint256)": EventFragment;
        "GroupAdded(uint256,string)": EventFragment;
        "GroupUpdated(uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "PairAdded(uint256,string,string)": EventFragment;
        "PairUpdated(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FeeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GroupAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GroupUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairUpdated"): EventFragment;
}
export interface FeeAddedEventObject {
    index: BigNumber;
    name: string;
}
export type FeeAddedEvent = TypedEvent<[
    BigNumber,
    string
], FeeAddedEventObject>;
export type FeeAddedEventFilter = TypedEventFilter<FeeAddedEvent>;
export interface FeeUpdatedEventObject {
    index: BigNumber;
}
export type FeeUpdatedEvent = TypedEvent<[BigNumber], FeeUpdatedEventObject>;
export type FeeUpdatedEventFilter = TypedEventFilter<FeeUpdatedEvent>;
export interface GroupAddedEventObject {
    index: BigNumber;
    name: string;
}
export type GroupAddedEvent = TypedEvent<[
    BigNumber,
    string
], GroupAddedEventObject>;
export type GroupAddedEventFilter = TypedEventFilter<GroupAddedEvent>;
export interface GroupUpdatedEventObject {
    index: BigNumber;
}
export type GroupUpdatedEvent = TypedEvent<[
    BigNumber
], GroupUpdatedEventObject>;
export type GroupUpdatedEventFilter = TypedEventFilter<GroupUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface PairAddedEventObject {
    index: BigNumber;
    from: string;
    to: string;
}
export type PairAddedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], PairAddedEventObject>;
export type PairAddedEventFilter = TypedEventFilter<PairAddedEvent>;
export interface PairUpdatedEventObject {
    index: BigNumber;
}
export type PairUpdatedEvent = TypedEvent<[BigNumber], PairUpdatedEventObject>;
export type PairUpdatedEventFilter = TypedEventFilter<PairUpdatedEvent>;
export interface PairsStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PairsStorageInterface;
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
        addFee(_fee: PairsStorage.FeeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addGroup(_group: PairsStorage.GroupStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addPair(_pair: PairsStorage.PairStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addPairs(_pairs: PairsStorage.PairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentOrderId(overrides?: CallOverrides): Promise<[BigNumber]>;
        fees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            openFeeP: BigNumber;
            closeFeeP: BigNumber;
            oracleFeeP: BigNumber;
            executeLimitOrderFeeP: BigNumber;
            referralFeeP: BigNumber;
            minLevPosStable: BigNumber;
        }>;
        feesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        groupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        groupMaxCollateral(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            job: string;
            minLeverage: BigNumber;
            maxLeverage: BigNumber;
            maxCollateralP: BigNumber;
        }>;
        groupsCollaterals(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        groupsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        guaranteedSlEnabled(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_storageT: PromiseOrValue<string>, _currentOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPairListed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        pairCloseFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairExecuteLimitOrderFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairFeed(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[PairsStorage.FeedStructOutput]>;
        pairJob(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pairMaxLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairMinLevPosStable(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairMinLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairOpenFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairOracleFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairReferralFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairSpreadP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            PairsStorage.FeedStructOutput,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            from: string;
            to: string;
            feed: PairsStorage.FeedStructOutput;
            spreadP: BigNumber;
            groupIndex: BigNumber;
            feeIndex: BigNumber;
        }>;
        pairsBackend(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            PairsStorage.PairStructOutput,
            PairsStorage.GroupStructOutput,
            PairsStorage.FeeStructOutput
        ]>;
        pairsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        storageT(overrides?: CallOverrides): Promise<[string]>;
        updateFee(_id: PromiseOrValue<BigNumberish>, _fee: PairsStorage.FeeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateGroup(_id: PromiseOrValue<BigNumberish>, _group: PairsStorage.GroupStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateGroupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, _increase: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updatePair(_pairIndex: PromiseOrValue<BigNumberish>, _pair: PairsStorage.PairStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addFee(_fee: PairsStorage.FeeStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addGroup(_group: PairsStorage.GroupStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addPair(_pair: PairsStorage.PairStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addPairs(_pairs: PairsStorage.PairStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentOrderId(overrides?: CallOverrides): Promise<BigNumber>;
    fees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        openFeeP: BigNumber;
        closeFeeP: BigNumber;
        oracleFeeP: BigNumber;
        executeLimitOrderFeeP: BigNumber;
        referralFeeP: BigNumber;
        minLevPosStable: BigNumber;
    }>;
    feesCount(overrides?: CallOverrides): Promise<BigNumber>;
    groupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    groupMaxCollateral(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        job: string;
        minLeverage: BigNumber;
        maxLeverage: BigNumber;
        maxCollateralP: BigNumber;
    }>;
    groupsCollaterals(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    groupsCount(overrides?: CallOverrides): Promise<BigNumber>;
    guaranteedSlEnabled(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    initialize(_storageT: PromiseOrValue<string>, _currentOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPairListed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    pairCloseFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairExecuteLimitOrderFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairFeed(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PairsStorage.FeedStructOutput>;
    pairJob(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pairMaxLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairMinLevPosStable(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairMinLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairOpenFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairOracleFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairReferralFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairSpreadP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        string,
        PairsStorage.FeedStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        from: string;
        to: string;
        feed: PairsStorage.FeedStructOutput;
        spreadP: BigNumber;
        groupIndex: BigNumber;
        feeIndex: BigNumber;
    }>;
    pairsBackend(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        PairsStorage.PairStructOutput,
        PairsStorage.GroupStructOutput,
        PairsStorage.FeeStructOutput
    ]>;
    pairsCount(overrides?: CallOverrides): Promise<BigNumber>;
    storageT(overrides?: CallOverrides): Promise<string>;
    updateFee(_id: PromiseOrValue<BigNumberish>, _fee: PairsStorage.FeeStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateGroup(_id: PromiseOrValue<BigNumberish>, _group: PairsStorage.GroupStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateGroupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, _increase: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updatePair(_pairIndex: PromiseOrValue<BigNumberish>, _pair: PairsStorage.PairStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addFee(_fee: PairsStorage.FeeStruct, overrides?: CallOverrides): Promise<void>;
        addGroup(_group: PairsStorage.GroupStruct, overrides?: CallOverrides): Promise<void>;
        addPair(_pair: PairsStorage.PairStruct, overrides?: CallOverrides): Promise<void>;
        addPairs(_pairs: PairsStorage.PairStruct[], overrides?: CallOverrides): Promise<void>;
        currentOrderId(overrides?: CallOverrides): Promise<BigNumber>;
        fees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            openFeeP: BigNumber;
            closeFeeP: BigNumber;
            oracleFeeP: BigNumber;
            executeLimitOrderFeeP: BigNumber;
            referralFeeP: BigNumber;
            minLevPosStable: BigNumber;
        }>;
        feesCount(overrides?: CallOverrides): Promise<BigNumber>;
        groupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        groupMaxCollateral(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            job: string;
            minLeverage: BigNumber;
            maxLeverage: BigNumber;
            maxCollateralP: BigNumber;
        }>;
        groupsCollaterals(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        groupsCount(overrides?: CallOverrides): Promise<BigNumber>;
        guaranteedSlEnabled(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_storageT: PromiseOrValue<string>, _currentOrderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        isPairListed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        pairCloseFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairExecuteLimitOrderFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairFeed(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PairsStorage.FeedStructOutput>;
        pairJob(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string, string, BigNumber]>;
        pairMaxLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairMinLevPosStable(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairMinLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairOpenFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairOracleFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairReferralFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairSpreadP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            PairsStorage.FeedStructOutput,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            from: string;
            to: string;
            feed: PairsStorage.FeedStructOutput;
            spreadP: BigNumber;
            groupIndex: BigNumber;
            feeIndex: BigNumber;
        }>;
        pairsBackend(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            PairsStorage.PairStructOutput,
            PairsStorage.GroupStructOutput,
            PairsStorage.FeeStructOutput
        ]>;
        pairsCount(overrides?: CallOverrides): Promise<BigNumber>;
        storageT(overrides?: CallOverrides): Promise<string>;
        updateFee(_id: PromiseOrValue<BigNumberish>, _fee: PairsStorage.FeeStruct, overrides?: CallOverrides): Promise<void>;
        updateGroup(_id: PromiseOrValue<BigNumberish>, _group: PairsStorage.GroupStruct, overrides?: CallOverrides): Promise<void>;
        updateGroupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, _increase: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        updatePair(_pairIndex: PromiseOrValue<BigNumberish>, _pair: PairsStorage.PairStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FeeAdded(uint256,string)"(index?: null, name?: null): FeeAddedEventFilter;
        FeeAdded(index?: null, name?: null): FeeAddedEventFilter;
        "FeeUpdated(uint256)"(index?: null): FeeUpdatedEventFilter;
        FeeUpdated(index?: null): FeeUpdatedEventFilter;
        "GroupAdded(uint256,string)"(index?: null, name?: null): GroupAddedEventFilter;
        GroupAdded(index?: null, name?: null): GroupAddedEventFilter;
        "GroupUpdated(uint256)"(index?: null): GroupUpdatedEventFilter;
        GroupUpdated(index?: null): GroupUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "PairAdded(uint256,string,string)"(index?: null, from?: null, to?: null): PairAddedEventFilter;
        PairAdded(index?: null, from?: null, to?: null): PairAddedEventFilter;
        "PairUpdated(uint256)"(index?: null): PairUpdatedEventFilter;
        PairUpdated(index?: null): PairUpdatedEventFilter;
    };
    estimateGas: {
        addFee(_fee: PairsStorage.FeeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addGroup(_group: PairsStorage.GroupStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addPair(_pair: PairsStorage.PairStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addPairs(_pairs: PairsStorage.PairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentOrderId(overrides?: CallOverrides): Promise<BigNumber>;
        fees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feesCount(overrides?: CallOverrides): Promise<BigNumber>;
        groupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        groupMaxCollateral(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        groupsCollaterals(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        groupsCount(overrides?: CallOverrides): Promise<BigNumber>;
        guaranteedSlEnabled(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_storageT: PromiseOrValue<string>, _currentOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPairListed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pairCloseFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairExecuteLimitOrderFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairFeed(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairJob(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pairMaxLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairMinLevPosStable(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairMinLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairOpenFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairOracleFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairReferralFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairSpreadP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairsBackend(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairsCount(overrides?: CallOverrides): Promise<BigNumber>;
        storageT(overrides?: CallOverrides): Promise<BigNumber>;
        updateFee(_id: PromiseOrValue<BigNumberish>, _fee: PairsStorage.FeeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateGroup(_id: PromiseOrValue<BigNumberish>, _group: PairsStorage.GroupStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateGroupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, _increase: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updatePair(_pairIndex: PromiseOrValue<BigNumberish>, _pair: PairsStorage.PairStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addFee(_fee: PairsStorage.FeeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addGroup(_group: PairsStorage.GroupStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addPair(_pair: PairsStorage.PairStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addPairs(_pairs: PairsStorage.PairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentOrderId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        groupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        groupMaxCollateral(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        groups(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        groupsCollaterals(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        groupsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guaranteedSlEnabled(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_storageT: PromiseOrValue<string>, _currentOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPairListed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairCloseFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairExecuteLimitOrderFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairFeed(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairJob(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pairMaxLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairMinLevPosStable(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairMinLeverage(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairOpenFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairOracleFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairReferralFeeP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairSpreadP(_pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairsBackend(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        storageT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateFee(_id: PromiseOrValue<BigNumberish>, _fee: PairsStorage.FeeStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateGroup(_id: PromiseOrValue<BigNumberish>, _group: PairsStorage.GroupStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateGroupCollateral(_pairIndex: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _long: PromiseOrValue<boolean>, _increase: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updatePair(_pairIndex: PromiseOrValue<BigNumberish>, _pair: PairsStorage.PairStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
