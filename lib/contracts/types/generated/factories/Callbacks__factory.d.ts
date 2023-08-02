import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Callbacks, CallbacksInterface } from "../Callbacks";
export declare class Callbacks__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tradeValueStable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "feeValueStable";
            readonly type: "uint256";
        }];
        readonly name: "BorrowingFeeCharged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.LimitOrder";
            readonly name: "orderType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "enum TradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }];
        readonly name: "BotOrderCanceled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newValue";
            readonly type: "uint256";
        }];
        readonly name: "CanExecuteTimeoutUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "limitIndex";
            readonly type: "uint256";
        }, {
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
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.LimitOrder";
            readonly name: "orderType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stableSentToTrader";
            readonly type: "uint256";
        }];
        readonly name: "CloseLimitExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
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
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stableSentToTrader";
            readonly type: "uint256";
        }];
        readonly name: "CloseMarketExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "valueStable";
            readonly type: "uint256";
        }];
        readonly name: "DevGovRefFeeCharged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "done";
            readonly type: "bool";
        }];
        readonly name: "Done";
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
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum TradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }];
        readonly name: "MarketCloseCanceled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum TradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }];
        readonly name: "MarketOpenCanceled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "limitIndex";
            readonly type: "uint256";
        }, {
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
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.LimitOrder";
            readonly name: "orderType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stableSentToTrader";
            readonly type: "uint256";
        }];
        readonly name: "OpenLimitExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "limitIndex";
            readonly type: "uint256";
        }, {
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
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.LimitOrder";
            readonly name: "orderType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stableSentToTrader";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "activeId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "team";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum IFoxifyAffiliation.Level";
                    readonly name: "level";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "randomValue";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "timestamp";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IFoxifyAffiliation.NFTData";
                readonly name: "nftData";
                readonly type: "tuple";
            }];
            readonly indexed: false;
            readonly internalType: "struct TradingCallbacks.AffiliationUserData";
            readonly name: "affiliationInfo";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "referralTeamID";
            readonly type: "uint256";
        }];
        readonly name: "OpenLimitExecutedWithAffiliationReferral";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
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
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stableSentToTrader";
            readonly type: "uint256";
        }];
        readonly name: "OpenMarketExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
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
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stableSentToTrader";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "activeId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "team";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum IFoxifyAffiliation.Level";
                    readonly name: "level";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "randomValue";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "timestamp";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IFoxifyAffiliation.NFTData";
                readonly name: "nftData";
                readonly type: "tuple";
            }];
            readonly indexed: false;
            readonly internalType: "struct TradingCallbacks.AffiliationUserData";
            readonly name: "affiliationInfo";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "referralTeamID";
            readonly type: "uint256";
        }];
        readonly name: "OpenMarketExecutedWithAffiliationReferral";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "valueStable";
            readonly type: "uint256";
        }];
        readonly name: "OrderExecutionFeeCharged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maxLeverage";
            readonly type: "uint256";
        }];
        readonly name: "PairMaxLeverageUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "paused";
            readonly type: "bool";
        }];
        readonly name: "Pause";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum TradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }];
        readonly name: "SlCanceled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newSl";
            readonly type: "uint256";
        }];
        readonly name: "SlUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "valueStable";
            readonly type: "uint256";
        }];
        readonly name: "StableWorkPoolFeeCharged";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "affiliation";
        readonly outputs: readonly [{
            readonly internalType: "contract IFoxifyAffiliation";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "borrowingFees";
        readonly outputs: readonly [{
            readonly internalType: "contract IBorrowingFees";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "canExecuteTimeout";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingCallbacks.AggregatorAnswer";
            readonly name: "a";
            readonly type: "tuple";
        }];
        readonly name: "closeTradeMarketCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "done";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingCallbacks.AggregatorAnswer";
            readonly name: "a";
            readonly type: "tuple";
        }];
        readonly name: "executeBotCloseOrderCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingCallbacks.AggregatorAnswer";
            readonly name: "a";
            readonly type: "tuple";
        }];
        readonly name: "executeBotOpenOrderCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllPairsMaxLeverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITradingStorage";
            readonly name: "_storageT";
            readonly type: "address";
        }, {
            readonly internalType: "contract IOrderExecutionTokenManagement";
            readonly name: "_orderTokenManagement";
            readonly type: "address";
        }, {
            readonly internalType: "contract IPairInfos";
            readonly name: "_pairInfos";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_workPoolToApprove";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_canExecuteTimeout";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IBorrowingFees";
            readonly name: "_borrowingFees";
            readonly type: "address";
        }];
        readonly name: "initializeV2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isDone";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isPaused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingCallbacks.AggregatorAnswer";
            readonly name: "a";
            readonly type: "tuple";
        }];
        readonly name: "openTradeMarketCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [];
        readonly name: "pairInfos";
        readonly outputs: readonly [{
            readonly internalType: "contract IPairInfos";
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
        }];
        readonly name: "pairMaxLeverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "referral";
        readonly outputs: readonly [{
            readonly internalType: "contract IFoxifyReferral";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_affiliation";
            readonly type: "address";
        }];
        readonly name: "setAffiliation";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_canExecuteTimeout";
            readonly type: "uint256";
        }];
        readonly name: "setCanExecuteTimeout";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxLeverage";
            readonly type: "uint256";
        }];
        readonly name: "setPairMaxLeverage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "indices";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "setPairMaxLeverageArray";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_referral";
            readonly type: "address";
        }];
        readonly name: "setReferral";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
                readonly internalType: "enum TradingCallbacks.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }];
            readonly internalType: "struct TradingCallbacks.SimplifiedTradeId";
            readonly name: "_id";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "tp";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "sl";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "limit";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "created";
                readonly type: "uint32";
            }];
            readonly internalType: "struct TradingCallbacks.LastUpdated";
            readonly name: "_lastUpdated";
            readonly type: "tuple";
        }];
        readonly name: "setTradeLastUpdated";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "storageT";
        readonly outputs: readonly [{
            readonly internalType: "contract ITradingStorage";
            readonly name: "";
            readonly type: "address";
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
        }, {
            readonly internalType: "enum TradingCallbacks.TradeType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly name: "tradeLastUpdated";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "tp";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "sl";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "limit";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "created";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TradingCallbacks.AggregatorAnswer";
            readonly name: "a";
            readonly type: "tuple";
        }];
        readonly name: "updateSlCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): CallbacksInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Callbacks;
}
