import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TradingStorage, TradingStorageInterface } from "../TradingStorage";
export declare class TradingStorage__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "a";
            readonly type: "address";
        }];
        readonly name: "AddressUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "NumberUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "NumberUpdatedPair";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256[5]";
            readonly name: "";
            readonly type: "uint256[5]";
        }];
        readonly name: "SpreadReductionsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "a";
            readonly type: "address";
        }];
        readonly name: "SupportedTokenAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "a";
            readonly type: "address";
        }];
        readonly name: "TradingContractAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "a";
            readonly type: "address";
        }];
        readonly name: "TradingContractRemoved";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "PRECISION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "addSupportedToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trading";
            readonly type: "address";
        }];
        readonly name: "addTradingContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "callbacks";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "dev";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "devFeesStable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "firstEmptyOpenLimitIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "firstEmptyTradeIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "getOpenLimitOrder";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSize";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.OpenLimitOrder";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOpenLimitOrders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSize";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.OpenLimitOrder[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getPendingOrderIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSupportedTokens";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gov";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "govFeesStable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_leveragedPositionSize";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isRef";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_fullFee";
            readonly type: "bool";
        }];
        readonly name: "handleDevGovRefFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "hasOpenLimitOrder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract TokenInterface";
            readonly name: "_stable";
            readonly type: "address";
        }, {
            readonly internalType: "contract TokenInterface";
            readonly name: "_linkErc677";
            readonly type: "address";
        }, {
            readonly internalType: "contract IOrderExecutionTokenManagement";
            readonly name: "_orderTokenManagement";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_gov";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_dev";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_ref";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "isTradingContract";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "linkErc677";
        readonly outputs: readonly [{
            readonly internalType: "contract TokenInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxPendingMarketOrders";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxTradesPerPair";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "openInterestStable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "openLimitOrderIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "openLimitOrders";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionSize";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "buy";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "leverage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tp";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sl";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "block";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "openLimitOrdersCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "openTrades";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "openPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "buy";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "leverage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tp";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sl";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "openTradesCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "openTradesInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "openInterestStable";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tpLastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "slLastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "beingMarketClosed";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "orderTokenManagement";
        readonly outputs: readonly [{
            readonly internalType: "contract IOrderExecutionTokenManagement";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "pairTraders";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairTradersArray";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "pairTradersId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "pendingMarketCloseCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "pendingMarketOpenCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "pendingOrderIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "pendingOrderIdsCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "priceAggregator";
        readonly outputs: readonly [{
            readonly internalType: "contract IAggregator01";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ref";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "refFeesStable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trading";
            readonly type: "address";
        }];
        readonly name: "removeTradingContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "reqID_pendingBotOrder";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum TradingStorage.LimitOrder";
            readonly name: "orderType";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "reqID_pendingMarketOrder";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSizeStable";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "openPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.Trade";
            readonly name: "trade";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "block";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "wantedPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "slippageP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_callbacks";
            readonly type: "address";
        }];
        readonly name: "setCallbacks";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_dev";
            readonly type: "address";
        }];
        readonly name: "setDev";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_gov";
            readonly type: "address";
        }];
        readonly name: "setGov";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newMaxOpenInterest";
            readonly type: "uint256";
        }];
        readonly name: "setMaxOpenInterestStable";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maxPendingMarketOrders";
            readonly type: "uint256";
        }];
        readonly name: "setMaxPendingMarketOrders";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maxTradesPerPair";
            readonly type: "uint256";
        }];
        readonly name: "setMaxTradesPerPair";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_orderTokenManagement";
            readonly type: "address";
        }];
        readonly name: "setOrderTokenManagement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_aggregator";
            readonly type: "address";
        }];
        readonly name: "setPriceAggregator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_ref";
            readonly type: "address";
        }];
        readonly name: "setRef";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trading";
            readonly type: "address";
        }];
        readonly name: "setTrading";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_workPool";
            readonly type: "address";
        }];
        readonly name: "setWorkPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stable";
        readonly outputs: readonly [{
            readonly internalType: "contract TokenInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSize";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.OpenLimitOrder";
            readonly name: "o";
            readonly type: "tuple";
        }];
        readonly name: "storeOpenLimitOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum TradingStorage.LimitOrder";
                readonly name: "orderType";
                readonly type: "uint8";
            }];
            readonly internalType: "struct TradingStorage.PendingBotOrder";
            readonly name: "_botOrder";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_orderId";
            readonly type: "uint256";
        }];
        readonly name: "storePendingBotOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "pairIndex";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "index";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "positionSizeStable";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "openPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "buy";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "leverage";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tp";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "sl";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct TradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "wantedPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.PendingMarketOrder";
            readonly name: "_order";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_open";
            readonly type: "bool";
        }];
        readonly name: "storePendingMarketOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSizeStable";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "openPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.Trade";
            readonly name: "_trade";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "openInterestStable";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tpLastUpdated";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slLastUpdated";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "beingMarketClosed";
                readonly type: "bool";
            }];
            readonly internalType: "struct TradingStorage.TradeInfo";
            readonly name: "_tradeInfo";
            readonly type: "tuple";
        }];
        readonly name: "storeTrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "supportedTokens";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "trading";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "transferStable";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "unregisterOpenLimitOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_order";
            readonly type: "uint256";
        }];
        readonly name: "unregisterPendingBotOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_open";
            readonly type: "bool";
        }];
        readonly name: "unregisterPendingMarketOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "unregisterTrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSize";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.OpenLimitOrder";
            readonly name: "_o";
            readonly type: "tuple";
        }];
        readonly name: "updateOpenLimitOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newSl";
            readonly type: "uint256";
        }];
        readonly name: "updateSl";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newTp";
            readonly type: "uint256";
        }];
        readonly name: "updateTp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSizeStable";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "openPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingStorage.Trade";
            readonly name: "_t";
            readonly type: "tuple";
        }];
        readonly name: "updateTrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "workPool";
        readonly outputs: readonly [{
            readonly internalType: "contract IWorkPool";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TradingStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TradingStorage;
}
