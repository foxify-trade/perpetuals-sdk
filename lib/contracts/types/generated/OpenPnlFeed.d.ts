import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface OpenPnlFeedInterface extends utils.Interface {
    functions: {
        "forceNewEpoch()": FunctionFragment;
        "fulfill(bytes32,int256)": FunctionFragment;
        "job()": FunctionFragment;
        "lastRequestId()": FunctionFragment;
        "linkFee()": FunctionFragment;
        "minAnswers()": FunctionFragment;
        "newOpenPnlRequestOrEpoch()": FunctionFragment;
        "nextEpochValues(uint256)": FunctionFragment;
        "nextEpochValuesLastRequest()": FunctionFragment;
        "nextEpochValuesRequestCount()": FunctionFragment;
        "oracles(uint256)": FunctionFragment;
        "orderTokenManagement()": FunctionFragment;
        "requestAnswers(uint256,uint256)": FunctionFragment;
        "requestByAddressId(address,uint256)": FunctionFragment;
        "requestIds(bytes32)": FunctionFragment;
        "requests(uint256)": FunctionFragment;
        "requestsCount()": FunctionFragment;
        "requestsEvery()": FunctionFragment;
        "requestsStart()": FunctionFragment;
        "resetNextEpochValueRequests()": FunctionFragment;
        "setLinkFee(uint256)": FunctionFragment;
        "setOrderTokenManagement(address)": FunctionFragment;
        "updateJob(bytes32)": FunctionFragment;
        "updateMinAnswers(uint256)": FunctionFragment;
        "updateOracle(uint256,address)": FunctionFragment;
        "updateOracles(address[])": FunctionFragment;
        "updateRequestsCount(uint256)": FunctionFragment;
        "updateRequestsEvery(uint256)": FunctionFragment;
        "updateRequestsInfoBatch(uint256,uint256,uint256)": FunctionFragment;
        "updateRequestsStart(uint256)": FunctionFragment;
        "workPool()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "forceNewEpoch" | "fulfill" | "job" | "lastRequestId" | "linkFee" | "minAnswers" | "newOpenPnlRequestOrEpoch" | "nextEpochValues" | "nextEpochValuesLastRequest" | "nextEpochValuesRequestCount" | "oracles" | "orderTokenManagement" | "requestAnswers" | "requestByAddressId" | "requestIds" | "requests" | "requestsCount" | "requestsEvery" | "requestsStart" | "resetNextEpochValueRequests" | "setLinkFee" | "setOrderTokenManagement" | "updateJob" | "updateMinAnswers" | "updateOracle" | "updateOracles" | "updateRequestsCount" | "updateRequestsEvery" | "updateRequestsInfoBatch" | "updateRequestsStart" | "workPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "forceNewEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "fulfill", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "job", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastRequestId", values?: undefined): string;
    encodeFunctionData(functionFragment: "linkFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "minAnswers", values?: undefined): string;
    encodeFunctionData(functionFragment: "newOpenPnlRequestOrEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextEpochValues", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nextEpochValuesLastRequest", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextEpochValuesRequestCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracles", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "orderTokenManagement", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestAnswers", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "requestByAddressId", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "requestIds", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "requests", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "requestsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestsEvery", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestsStart", values?: undefined): string;
    encodeFunctionData(functionFragment: "resetNextEpochValueRequests", values?: undefined): string;
    encodeFunctionData(functionFragment: "setLinkFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setOrderTokenManagement", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateJob", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "updateMinAnswers", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateOracle", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateOracles", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "updateRequestsCount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateRequestsEvery", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateRequestsInfoBatch", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateRequestsStart", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "workPool", values?: undefined): string;
    decodeFunctionResult(functionFragment: "forceNewEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "job", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastRequestId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linkFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAnswers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newOpenPnlRequestOrEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextEpochValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextEpochValuesLastRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextEpochValuesRequestCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderTokenManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestAnswers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestByAddressId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestsEvery", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestsStart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetNextEpochValueRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLinkFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOrderTokenManagement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateJob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMinAnswers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOracles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRequestsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRequestsEvery", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRequestsInfoBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRequestsStart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workPool", data: BytesLike): Result;
    events: {
        "ChainlinkCancelled(bytes32)": EventFragment;
        "ChainlinkFulfilled(bytes32)": EventFragment;
        "ChainlinkRequested(bytes32)": EventFragment;
        "JobUpdated(bytes32)": EventFragment;
        "NewEpoch(uint256,uint256,int256[],int256,uint256)": EventFragment;
        "NewEpochForced(uint256)": EventFragment;
        "NextEpochValueRequested(uint256,uint256,bytes32,uint256,uint256)": EventFragment;
        "NextEpochValuesReset(uint256,uint256)": EventFragment;
        "NumberParamUpdated(string,uint256)": EventFragment;
        "OracleUpdated(uint256,address)": EventFragment;
        "OraclesUpdated(address[])": EventFragment;
        "OrderTokenManagementUpdated(address)": EventFragment;
        "RequestMedianValueSet(uint256,uint256,int256[],int256)": EventFragment;
        "RequestValueReceived(bool,uint256,uint256,bytes32,address,int256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "JobUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewEpoch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewEpochForced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NextEpochValueRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NextEpochValuesReset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NumberParamUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OracleUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OraclesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderTokenManagementUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestMedianValueSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestValueReceived"): EventFragment;
}
export interface ChainlinkCancelledEventObject {
    id: string;
}
export type ChainlinkCancelledEvent = TypedEvent<[
    string
], ChainlinkCancelledEventObject>;
export type ChainlinkCancelledEventFilter = TypedEventFilter<ChainlinkCancelledEvent>;
export interface ChainlinkFulfilledEventObject {
    id: string;
}
export type ChainlinkFulfilledEvent = TypedEvent<[
    string
], ChainlinkFulfilledEventObject>;
export type ChainlinkFulfilledEventFilter = TypedEventFilter<ChainlinkFulfilledEvent>;
export interface ChainlinkRequestedEventObject {
    id: string;
}
export type ChainlinkRequestedEvent = TypedEvent<[
    string
], ChainlinkRequestedEventObject>;
export type ChainlinkRequestedEventFilter = TypedEventFilter<ChainlinkRequestedEvent>;
export interface JobUpdatedEventObject {
    newValue: string;
}
export type JobUpdatedEvent = TypedEvent<[string], JobUpdatedEventObject>;
export type JobUpdatedEventFilter = TypedEventFilter<JobUpdatedEvent>;
export interface NewEpochEventObject {
    newEpoch: BigNumber;
    requestId: BigNumber;
    epochMedianValues: BigNumber[];
    epochAverageValue: BigNumber;
    newEpochPositiveOpenPnl: BigNumber;
}
export type NewEpochEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber,
    BigNumber
], NewEpochEventObject>;
export type NewEpochEventFilter = TypedEventFilter<NewEpochEvent>;
export interface NewEpochForcedEventObject {
    newEpoch: BigNumber;
}
export type NewEpochForcedEvent = TypedEvent<[
    BigNumber
], NewEpochForcedEventObject>;
export type NewEpochForcedEventFilter = TypedEventFilter<NewEpochForcedEvent>;
export interface NextEpochValueRequestedEventObject {
    currEpoch: BigNumber;
    requestId: BigNumber;
    job: string;
    oraclesCount: BigNumber;
    linkFeePerNode: BigNumber;
}
export type NextEpochValueRequestedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], NextEpochValueRequestedEventObject>;
export type NextEpochValueRequestedEventFilter = TypedEventFilter<NextEpochValueRequestedEvent>;
export interface NextEpochValuesResetEventObject {
    currEpoch: BigNumber;
    requestsResetCount: BigNumber;
}
export type NextEpochValuesResetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NextEpochValuesResetEventObject>;
export type NextEpochValuesResetEventFilter = TypedEventFilter<NextEpochValuesResetEvent>;
export interface NumberParamUpdatedEventObject {
    name: string;
    newValue: BigNumber;
}
export type NumberParamUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], NumberParamUpdatedEventObject>;
export type NumberParamUpdatedEventFilter = TypedEventFilter<NumberParamUpdatedEvent>;
export interface OracleUpdatedEventObject {
    index: BigNumber;
    newValue: string;
}
export type OracleUpdatedEvent = TypedEvent<[
    BigNumber,
    string
], OracleUpdatedEventObject>;
export type OracleUpdatedEventFilter = TypedEventFilter<OracleUpdatedEvent>;
export interface OraclesUpdatedEventObject {
    newValues: string[];
}
export type OraclesUpdatedEvent = TypedEvent<[
    string[]
], OraclesUpdatedEventObject>;
export type OraclesUpdatedEventFilter = TypedEventFilter<OraclesUpdatedEvent>;
export interface OrderTokenManagementUpdatedEventObject {
    newValue: string;
}
export type OrderTokenManagementUpdatedEvent = TypedEvent<[
    string
], OrderTokenManagementUpdatedEventObject>;
export type OrderTokenManagementUpdatedEventFilter = TypedEventFilter<OrderTokenManagementUpdatedEvent>;
export interface RequestMedianValueSetEventObject {
    currEpoch: BigNumber;
    requestId: BigNumber;
    requestValues: BigNumber[];
    medianValue: BigNumber;
}
export type RequestMedianValueSetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber
], RequestMedianValueSetEventObject>;
export type RequestMedianValueSetEventFilter = TypedEventFilter<RequestMedianValueSetEvent>;
export interface RequestValueReceivedEventObject {
    isLate: boolean;
    currEpoch: BigNumber;
    requestId: BigNumber;
    oracleRequestId: string;
    oracle: string;
    requestValue: BigNumber;
    linkFee: BigNumber;
}
export type RequestValueReceivedEvent = TypedEvent<[
    boolean,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], RequestValueReceivedEventObject>;
export type RequestValueReceivedEventFilter = TypedEventFilter<RequestValueReceivedEvent>;
export interface OpenPnlFeed extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OpenPnlFeedInterface;
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
        forceNewEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fulfill(requestId: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        job(overrides?: CallOverrides): Promise<[string]>;
        lastRequestId(overrides?: CallOverrides): Promise<[BigNumber]>;
        linkFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        minAnswers(overrides?: CallOverrides): Promise<[BigNumber]>;
        newOpenPnlRequestOrEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nextEpochValues(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nextEpochValuesLastRequest(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextEpochValuesRequestCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracles(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        orderTokenManagement(overrides?: CallOverrides): Promise<[string]>;
        requestAnswers(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        requestByAddressId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        requestIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        requests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber
        ] & {
            initiated: boolean;
            active: boolean;
            linkFeePerNode: BigNumber;
        }>;
        requestsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        requestsEvery(overrides?: CallOverrides): Promise<[BigNumber]>;
        requestsStart(overrides?: CallOverrides): Promise<[BigNumber]>;
        resetNextEpochValueRequests(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLinkFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOrderTokenManagement(newValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateJob(newValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateMinAnswers(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateOracle(_index: PromiseOrValue<BigNumberish>, newValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateOracles(newValues: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateRequestsCount(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateRequestsEvery(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateRequestsInfoBatch(newRequestsStart: PromiseOrValue<BigNumberish>, newRequestsEvery: PromiseOrValue<BigNumberish>, newRequestsCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateRequestsStart(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        workPool(overrides?: CallOverrides): Promise<[string]>;
    };
    forceNewEpoch(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fulfill(requestId: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    job(overrides?: CallOverrides): Promise<string>;
    lastRequestId(overrides?: CallOverrides): Promise<BigNumber>;
    linkFee(overrides?: CallOverrides): Promise<BigNumber>;
    minAnswers(overrides?: CallOverrides): Promise<BigNumber>;
    newOpenPnlRequestOrEpoch(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nextEpochValues(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nextEpochValuesLastRequest(overrides?: CallOverrides): Promise<BigNumber>;
    nextEpochValuesRequestCount(overrides?: CallOverrides): Promise<BigNumber>;
    oracles(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    orderTokenManagement(overrides?: CallOverrides): Promise<string>;
    requestAnswers(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    requestByAddressId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    requestIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    requests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber
    ] & {
        initiated: boolean;
        active: boolean;
        linkFeePerNode: BigNumber;
    }>;
    requestsCount(overrides?: CallOverrides): Promise<BigNumber>;
    requestsEvery(overrides?: CallOverrides): Promise<BigNumber>;
    requestsStart(overrides?: CallOverrides): Promise<BigNumber>;
    resetNextEpochValueRequests(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLinkFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOrderTokenManagement(newValue: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateJob(newValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateMinAnswers(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateOracle(_index: PromiseOrValue<BigNumberish>, newValue: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateOracles(newValues: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateRequestsCount(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateRequestsEvery(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateRequestsInfoBatch(newRequestsStart: PromiseOrValue<BigNumberish>, newRequestsEvery: PromiseOrValue<BigNumberish>, newRequestsCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateRequestsStart(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    workPool(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        forceNewEpoch(overrides?: CallOverrides): Promise<void>;
        fulfill(requestId: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        job(overrides?: CallOverrides): Promise<string>;
        lastRequestId(overrides?: CallOverrides): Promise<BigNumber>;
        linkFee(overrides?: CallOverrides): Promise<BigNumber>;
        minAnswers(overrides?: CallOverrides): Promise<BigNumber>;
        newOpenPnlRequestOrEpoch(overrides?: CallOverrides): Promise<void>;
        nextEpochValues(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nextEpochValuesLastRequest(overrides?: CallOverrides): Promise<BigNumber>;
        nextEpochValuesRequestCount(overrides?: CallOverrides): Promise<BigNumber>;
        oracles(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        orderTokenManagement(overrides?: CallOverrides): Promise<string>;
        requestAnswers(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        requestByAddressId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        requestIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        requests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber
        ] & {
            initiated: boolean;
            active: boolean;
            linkFeePerNode: BigNumber;
        }>;
        requestsCount(overrides?: CallOverrides): Promise<BigNumber>;
        requestsEvery(overrides?: CallOverrides): Promise<BigNumber>;
        requestsStart(overrides?: CallOverrides): Promise<BigNumber>;
        resetNextEpochValueRequests(overrides?: CallOverrides): Promise<void>;
        setLinkFee(_fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOrderTokenManagement(newValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateJob(newValue: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        updateMinAnswers(newValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateOracle(_index: PromiseOrValue<BigNumberish>, newValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateOracles(newValues: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        updateRequestsCount(newValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateRequestsEvery(newValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateRequestsInfoBatch(newRequestsStart: PromiseOrValue<BigNumberish>, newRequestsEvery: PromiseOrValue<BigNumberish>, newRequestsCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateRequestsStart(newValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        workPool(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ChainlinkCancelled(bytes32)"(id?: PromiseOrValue<BytesLike> | null): ChainlinkCancelledEventFilter;
        ChainlinkCancelled(id?: PromiseOrValue<BytesLike> | null): ChainlinkCancelledEventFilter;
        "ChainlinkFulfilled(bytes32)"(id?: PromiseOrValue<BytesLike> | null): ChainlinkFulfilledEventFilter;
        ChainlinkFulfilled(id?: PromiseOrValue<BytesLike> | null): ChainlinkFulfilledEventFilter;
        "ChainlinkRequested(bytes32)"(id?: PromiseOrValue<BytesLike> | null): ChainlinkRequestedEventFilter;
        ChainlinkRequested(id?: PromiseOrValue<BytesLike> | null): ChainlinkRequestedEventFilter;
        "JobUpdated(bytes32)"(newValue?: null): JobUpdatedEventFilter;
        JobUpdated(newValue?: null): JobUpdatedEventFilter;
        "NewEpoch(uint256,uint256,int256[],int256,uint256)"(newEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, epochMedianValues?: null, epochAverageValue?: null, newEpochPositiveOpenPnl?: null): NewEpochEventFilter;
        NewEpoch(newEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, epochMedianValues?: null, epochAverageValue?: null, newEpochPositiveOpenPnl?: null): NewEpochEventFilter;
        "NewEpochForced(uint256)"(newEpoch?: PromiseOrValue<BigNumberish> | null): NewEpochForcedEventFilter;
        NewEpochForced(newEpoch?: PromiseOrValue<BigNumberish> | null): NewEpochForcedEventFilter;
        "NextEpochValueRequested(uint256,uint256,bytes32,uint256,uint256)"(currEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, job?: null, oraclesCount?: null, linkFeePerNode?: null): NextEpochValueRequestedEventFilter;
        NextEpochValueRequested(currEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, job?: null, oraclesCount?: null, linkFeePerNode?: null): NextEpochValueRequestedEventFilter;
        "NextEpochValuesReset(uint256,uint256)"(currEpoch?: PromiseOrValue<BigNumberish> | null, requestsResetCount?: null): NextEpochValuesResetEventFilter;
        NextEpochValuesReset(currEpoch?: PromiseOrValue<BigNumberish> | null, requestsResetCount?: null): NextEpochValuesResetEventFilter;
        "NumberParamUpdated(string,uint256)"(name?: null, newValue?: null): NumberParamUpdatedEventFilter;
        NumberParamUpdated(name?: null, newValue?: null): NumberParamUpdatedEventFilter;
        "OracleUpdated(uint256,address)"(index?: null, newValue?: null): OracleUpdatedEventFilter;
        OracleUpdated(index?: null, newValue?: null): OracleUpdatedEventFilter;
        "OraclesUpdated(address[])"(newValues?: null): OraclesUpdatedEventFilter;
        OraclesUpdated(newValues?: null): OraclesUpdatedEventFilter;
        "OrderTokenManagementUpdated(address)"(newValue?: null): OrderTokenManagementUpdatedEventFilter;
        OrderTokenManagementUpdated(newValue?: null): OrderTokenManagementUpdatedEventFilter;
        "RequestMedianValueSet(uint256,uint256,int256[],int256)"(currEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, requestValues?: null, medianValue?: null): RequestMedianValueSetEventFilter;
        RequestMedianValueSet(currEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, requestValues?: null, medianValue?: null): RequestMedianValueSetEventFilter;
        "RequestValueReceived(bool,uint256,uint256,bytes32,address,int256,uint256)"(isLate?: null, currEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, oracleRequestId?: null, oracle?: PromiseOrValue<string> | null, requestValue?: null, linkFee?: null): RequestValueReceivedEventFilter;
        RequestValueReceived(isLate?: null, currEpoch?: PromiseOrValue<BigNumberish> | null, requestId?: PromiseOrValue<BigNumberish> | null, oracleRequestId?: null, oracle?: PromiseOrValue<string> | null, requestValue?: null, linkFee?: null): RequestValueReceivedEventFilter;
    };
    estimateGas: {
        forceNewEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fulfill(requestId: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        job(overrides?: CallOverrides): Promise<BigNumber>;
        lastRequestId(overrides?: CallOverrides): Promise<BigNumber>;
        linkFee(overrides?: CallOverrides): Promise<BigNumber>;
        minAnswers(overrides?: CallOverrides): Promise<BigNumber>;
        newOpenPnlRequestOrEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nextEpochValues(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nextEpochValuesLastRequest(overrides?: CallOverrides): Promise<BigNumber>;
        nextEpochValuesRequestCount(overrides?: CallOverrides): Promise<BigNumber>;
        oracles(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        orderTokenManagement(overrides?: CallOverrides): Promise<BigNumber>;
        requestAnswers(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        requestByAddressId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        requestIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        requests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        requestsCount(overrides?: CallOverrides): Promise<BigNumber>;
        requestsEvery(overrides?: CallOverrides): Promise<BigNumber>;
        requestsStart(overrides?: CallOverrides): Promise<BigNumber>;
        resetNextEpochValueRequests(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLinkFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOrderTokenManagement(newValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateJob(newValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateMinAnswers(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateOracle(_index: PromiseOrValue<BigNumberish>, newValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateOracles(newValues: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateRequestsCount(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateRequestsEvery(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateRequestsInfoBatch(newRequestsStart: PromiseOrValue<BigNumberish>, newRequestsEvery: PromiseOrValue<BigNumberish>, newRequestsCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateRequestsStart(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        workPool(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        forceNewEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fulfill(requestId: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        job(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        linkFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minAnswers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        newOpenPnlRequestOrEpoch(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nextEpochValues(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextEpochValuesLastRequest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextEpochValuesRequestCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracles(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        orderTokenManagement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestAnswers(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestByAddressId(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestsEvery(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestsStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resetNextEpochValueRequests(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLinkFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOrderTokenManagement(newValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateJob(newValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateMinAnswers(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateOracle(_index: PromiseOrValue<BigNumberish>, newValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateOracles(newValues: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateRequestsCount(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateRequestsEvery(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateRequestsInfoBatch(newRequestsStart: PromiseOrValue<BigNumberish>, newRequestsEvery: PromiseOrValue<BigNumberish>, newRequestsCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateRequestsStart(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        workPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
