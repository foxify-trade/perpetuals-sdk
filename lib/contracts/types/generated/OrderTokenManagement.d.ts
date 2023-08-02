import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface OrderTokenManagementInterface extends utils.Interface {
    functions: {
        "addAggregatorFund()": FunctionFragment;
        "addOpenPnlFeedFund()": FunctionFragment;
        "aggregator()": FunctionFragment;
        "checkAggregatorLinkBalance()": FunctionFragment;
        "checkOpenPnlFeedLinkBalance()": FunctionFragment;
        "foreignTokensRecover(address,uint256,address)": FunctionFragment;
        "increaseInStableBalanceAmount()": FunctionFragment;
        "initialize(address,address,address,address,address,address[],uint24[],uint256,uint256)": FunctionFragment;
        "linkToken()": FunctionFragment;
        "minLinkBalanceContract()": FunctionFragment;
        "openLimitOrderTypes(address,uint256,uint256)": FunctionFragment;
        "openPnlFeed()": FunctionFragment;
        "poolsFees(uint256)": FunctionFragment;
        "setAggregator(address)": FunctionFragment;
        "setLinkToken(address)": FunctionFragment;
        "setOpenLimitOrderType(address,uint256,uint256,uint8)": FunctionFragment;
        "setOpenPnlFeed(address)": FunctionFragment;
        "setRouter(address)": FunctionFragment;
        "setStorage(address)": FunctionFragment;
        "setincreaseInStableBalanceAmount(uint256)": FunctionFragment;
        "setminLinkBalanceContract(uint256)": FunctionFragment;
        "storageT()": FunctionFragment;
        "swapPathIntermediate(uint256)": FunctionFragment;
        "uniswapV3Router()": FunctionFragment;
        "updatePoolsFees(uint24[])": FunctionFragment;
        "updateSwapPathIntermediate(address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAggregatorFund" | "addOpenPnlFeedFund" | "aggregator" | "checkAggregatorLinkBalance" | "checkOpenPnlFeedLinkBalance" | "foreignTokensRecover" | "increaseInStableBalanceAmount" | "initialize" | "linkToken" | "minLinkBalanceContract" | "openLimitOrderTypes" | "openPnlFeed" | "poolsFees" | "setAggregator" | "setLinkToken" | "setOpenLimitOrderType" | "setOpenPnlFeed" | "setRouter" | "setStorage" | "setincreaseInStableBalanceAmount" | "setminLinkBalanceContract" | "storageT" | "swapPathIntermediate" | "uniswapV3Router" | "updatePoolsFees" | "updateSwapPathIntermediate"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAggregatorFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "addOpenPnlFeedFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "aggregator", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkAggregatorLinkBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkOpenPnlFeedLinkBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "foreignTokensRecover", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "increaseInStableBalanceAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "linkToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "minLinkBalanceContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "openLimitOrderTypes", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "openPnlFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolsFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setAggregator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setLinkToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setOpenLimitOrderType", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setOpenPnlFeed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRouter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setStorage", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setincreaseInStableBalanceAmount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setminLinkBalanceContract", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "storageT", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapPathIntermediate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "uniswapV3Router", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePoolsFees", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "updateSwapPathIntermediate", values: [PromiseOrValue<string>[]]): string;
    decodeFunctionResult(functionFragment: "addAggregatorFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOpenPnlFeedFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAggregatorLinkBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkOpenPnlFeedLinkBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foreignTokensRecover", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseInStableBalanceAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linkToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minLinkBalanceContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openLimitOrderTypes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPnlFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLinkToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOpenLimitOrderType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOpenPnlFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setincreaseInStableBalanceAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setminLinkBalanceContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storageT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapPathIntermediate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3Router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePoolsFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSwapPathIntermediate", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OrderTokenManagement extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OrderTokenManagementInterface;
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
        addAggregatorFund(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addOpenPnlFeedFund(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        aggregator(overrides?: CallOverrides): Promise<[string]>;
        checkAggregatorLinkBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        checkOpenPnlFeedLinkBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        foreignTokensRecover(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseInStableBalanceAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_storageT: PromiseOrValue<string>, _linkToken: PromiseOrValue<string>, _router: PromiseOrValue<string>, _aggregator: PromiseOrValue<string>, _openPnlFeed: PromiseOrValue<string>, _swapPathIntermediate: PromiseOrValue<string>[], _poolsFees: PromiseOrValue<BigNumberish>[], _minLinkBalanceContract: PromiseOrValue<BigNumberish>, _increaseInStableBalanceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        linkToken(overrides?: CallOverrides): Promise<[string]>;
        minLinkBalanceContract(overrides?: CallOverrides): Promise<[BigNumber]>;
        openLimitOrderTypes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        openPnlFeed(overrides?: CallOverrides): Promise<[string]>;
        poolsFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        setAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLinkToken(_linkToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOpenLimitOrderType(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOpenPnlFeed(_openPnlFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStorage(_storage: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setincreaseInStableBalanceAmount(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setminLinkBalanceContract(_minBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storageT(overrides?: CallOverrides): Promise<[string]>;
        swapPathIntermediate(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        uniswapV3Router(overrides?: CallOverrides): Promise<[string]>;
        updatePoolsFees(_fees: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSwapPathIntermediate(_path: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addAggregatorFund(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addOpenPnlFeedFund(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    aggregator(overrides?: CallOverrides): Promise<string>;
    checkAggregatorLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;
    checkOpenPnlFeedLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;
    foreignTokensRecover(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseInStableBalanceAmount(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_storageT: PromiseOrValue<string>, _linkToken: PromiseOrValue<string>, _router: PromiseOrValue<string>, _aggregator: PromiseOrValue<string>, _openPnlFeed: PromiseOrValue<string>, _swapPathIntermediate: PromiseOrValue<string>[], _poolsFees: PromiseOrValue<BigNumberish>[], _minLinkBalanceContract: PromiseOrValue<BigNumberish>, _increaseInStableBalanceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    linkToken(overrides?: CallOverrides): Promise<string>;
    minLinkBalanceContract(overrides?: CallOverrides): Promise<BigNumber>;
    openLimitOrderTypes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    openPnlFeed(overrides?: CallOverrides): Promise<string>;
    poolsFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    setAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLinkToken(_linkToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOpenLimitOrderType(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOpenPnlFeed(_openPnlFeed: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStorage(_storage: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setincreaseInStableBalanceAmount(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setminLinkBalanceContract(_minBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storageT(overrides?: CallOverrides): Promise<string>;
    swapPathIntermediate(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    uniswapV3Router(overrides?: CallOverrides): Promise<string>;
    updatePoolsFees(_fees: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSwapPathIntermediate(_path: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAggregatorFund(overrides?: CallOverrides): Promise<BigNumber>;
        addOpenPnlFeedFund(overrides?: CallOverrides): Promise<BigNumber>;
        aggregator(overrides?: CallOverrides): Promise<string>;
        checkAggregatorLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;
        checkOpenPnlFeedLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;
        foreignTokensRecover(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        increaseInStableBalanceAmount(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_storageT: PromiseOrValue<string>, _linkToken: PromiseOrValue<string>, _router: PromiseOrValue<string>, _aggregator: PromiseOrValue<string>, _openPnlFeed: PromiseOrValue<string>, _swapPathIntermediate: PromiseOrValue<string>[], _poolsFees: PromiseOrValue<BigNumberish>[], _minLinkBalanceContract: PromiseOrValue<BigNumberish>, _increaseInStableBalanceAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        linkToken(overrides?: CallOverrides): Promise<string>;
        minLinkBalanceContract(overrides?: CallOverrides): Promise<BigNumber>;
        openLimitOrderTypes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        openPnlFeed(overrides?: CallOverrides): Promise<string>;
        poolsFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        setAggregator(_aggregator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setLinkToken(_linkToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setOpenLimitOrderType(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _type: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOpenPnlFeed(_openPnlFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setRouter(_router: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setStorage(_storage: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setincreaseInStableBalanceAmount(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        setminLinkBalanceContract(_minBalance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        storageT(overrides?: CallOverrides): Promise<string>;
        swapPathIntermediate(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        uniswapV3Router(overrides?: CallOverrides): Promise<string>;
        updatePoolsFees(_fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;
        updateSwapPathIntermediate(_path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
    };
    estimateGas: {
        addAggregatorFund(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addOpenPnlFeedFund(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        aggregator(overrides?: CallOverrides): Promise<BigNumber>;
        checkAggregatorLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;
        checkOpenPnlFeedLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;
        foreignTokensRecover(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseInStableBalanceAmount(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_storageT: PromiseOrValue<string>, _linkToken: PromiseOrValue<string>, _router: PromiseOrValue<string>, _aggregator: PromiseOrValue<string>, _openPnlFeed: PromiseOrValue<string>, _swapPathIntermediate: PromiseOrValue<string>[], _poolsFees: PromiseOrValue<BigNumberish>[], _minLinkBalanceContract: PromiseOrValue<BigNumberish>, _increaseInStableBalanceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        linkToken(overrides?: CallOverrides): Promise<BigNumber>;
        minLinkBalanceContract(overrides?: CallOverrides): Promise<BigNumber>;
        openLimitOrderTypes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openPnlFeed(overrides?: CallOverrides): Promise<BigNumber>;
        poolsFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLinkToken(_linkToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOpenLimitOrderType(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOpenPnlFeed(_openPnlFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStorage(_storage: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setincreaseInStableBalanceAmount(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setminLinkBalanceContract(_minBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storageT(overrides?: CallOverrides): Promise<BigNumber>;
        swapPathIntermediate(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3Router(overrides?: CallOverrides): Promise<BigNumber>;
        updatePoolsFees(_fees: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSwapPathIntermediate(_path: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAggregatorFund(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addOpenPnlFeedFund(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        aggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAggregatorLinkBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkOpenPnlFeedLinkBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        foreignTokensRecover(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseInStableBalanceAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_storageT: PromiseOrValue<string>, _linkToken: PromiseOrValue<string>, _router: PromiseOrValue<string>, _aggregator: PromiseOrValue<string>, _openPnlFeed: PromiseOrValue<string>, _swapPathIntermediate: PromiseOrValue<string>[], _poolsFees: PromiseOrValue<BigNumberish>[], _minLinkBalanceContract: PromiseOrValue<BigNumberish>, _increaseInStableBalanceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        linkToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minLinkBalanceContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openLimitOrderTypes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openPnlFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAggregator(_aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLinkToken(_linkToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOpenLimitOrderType(_trader: PromiseOrValue<string>, _pairIndex: PromiseOrValue<BigNumberish>, _index: PromiseOrValue<BigNumberish>, _type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOpenPnlFeed(_openPnlFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRouter(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStorage(_storage: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setincreaseInStableBalanceAmount(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setminLinkBalanceContract(_minBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storageT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapPathIntermediate(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniswapV3Router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updatePoolsFees(_fees: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSwapPathIntermediate(_path: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
