import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BorrowingFees, BorrowingFeesInterface } from "../BorrowingFees";
export declare class BorrowingFees__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "accBlockWeightedMarketCap";
            readonly type: "uint256";
        }];
        readonly name: "GroupAccFeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: true;
            readonly internalType: "bool";
            readonly name: "increase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint112";
            readonly name: "amount";
            readonly type: "uint112";
        }, {
            readonly indexed: false;
            readonly internalType: "uint112";
            readonly name: "oiLong";
            readonly type: "uint112";
        }, {
            readonly indexed: false;
            readonly internalType: "uint112";
            readonly name: "oiShort";
            readonly type: "uint112";
        }];
        readonly name: "GroupOiUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "feePerBlock";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint80";
            readonly name: "maxOi";
            readonly type: "uint80";
        }];
        readonly name: "GroupUpdated";
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
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "accBlockWeightedMarketCap";
            readonly type: "uint256";
        }];
        readonly name: "PairAccFeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "prevGroupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "newGroupIndex";
            readonly type: "uint16";
        }];
        readonly name: "PairGroupUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "feePerBlock";
            readonly type: "uint32";
        }];
        readonly name: "PairParamsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }];
        readonly name: "TradeActionHandled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly internalType: "uint64";
            readonly name: "initialPairAccFee";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "initialGroupAccFee";
            readonly type: "uint64";
        }];
        readonly name: "TradeInitialAccFeesStored";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllPairs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "groupIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "block";
                    readonly type: "uint48";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "initialAccFeeLong";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "initialAccFeeShort";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "prevGroupAccFeeLong";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "prevGroupAccFeeShort";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "pairAccFeeLong";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "pairAccFeeShort";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "_placeholder";
                    readonly type: "uint64";
                }];
                readonly internalType: "struct IBorrowingFees.PairGroup[]";
                readonly name: "groups";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "_placeholder";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastAccBlockWeightedMarketCap";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBorrowingFees.Pair[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }];
        readonly name: "getGroup";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint112";
                readonly name: "oiLong";
                readonly type: "uint112";
            }, {
                readonly internalType: "uint112";
                readonly name: "oiShort";
                readonly type: "uint112";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint80";
                readonly name: "maxOi";
                readonly type: "uint80";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastAccBlockWeightedMarketCap";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBorrowingFees.Group";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }];
        readonly name: "getGroupPendingAccFee";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accFee";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getGroupPendingAccFees";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "int256";
            readonly name: "groupAccFeeDelta";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getGroupWeightedWorkPoolMarketCapSinceLastUpdate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "indices";
            readonly type: "uint16[]";
        }];
        readonly name: "getGroups";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint112";
                readonly name: "oiLong";
                readonly type: "uint112";
            }, {
                readonly internalType: "uint112";
                readonly name: "oiShort";
                readonly type: "uint112";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint80";
                readonly name: "maxOi";
                readonly type: "uint80";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastAccBlockWeightedMarketCap";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBorrowingFees.Group[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getPair";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "groupIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "block";
                    readonly type: "uint48";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "initialAccFeeLong";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "initialAccFeeShort";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "prevGroupAccFeeLong";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "prevGroupAccFeeShort";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "pairAccFeeLong";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "pairAccFeeShort";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "_placeholder";
                    readonly type: "uint64";
                }];
                readonly internalType: "struct IBorrowingFees.PairGroup[]";
                readonly name: "groups";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "_placeholder";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastAccBlockWeightedMarketCap";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBorrowingFees.Pair";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "i";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "groupIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "block";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint64";
                readonly name: "initialAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "initialAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "prevGroupAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "prevGroupAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "pairAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "pairAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "_placeholder";
                readonly type: "uint64";
            }];
            readonly internalType: "struct IBorrowingFees.PairGroup[]";
            readonly name: "pairGroups";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "accPairFee";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accGroupFee";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "block";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint80";
                readonly name: "_placeholder";
                readonly type: "uint80";
            }];
            readonly internalType: "struct IBorrowingFees.InitialAccFees";
            readonly name: "initialFees";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getPairGroupAccFeesDeltas";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "deltaGroup";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "deltaPair";
            readonly type: "uint64";
        }, {
            readonly internalType: "bool";
            readonly name: "beforeTradeOpen";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getPairGroupIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getPairOpenInterestStable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }];
        readonly name: "getPairPendingAccFee";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accFee";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getPairPendingAccFees";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "int256";
            readonly name: "pairAccFeeDelta";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getPairWeightedWorkPoolMarketCapSinceLastUpdate";
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
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getPendingAccBlockWeightedMarketCap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "oiLong";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "oiShort";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "feePerBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "accLastUpdatedBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "workPoolMarketCap";
            readonly type: "uint256";
        }];
        readonly name: "getPendingAccFees";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "newAccFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "newAccFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "int256";
            readonly name: "delta";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
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
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeeInput";
            readonly name: "input";
            readonly type: "tuple";
        }];
        readonly name: "getTradeBorrowingFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getTradeInitialAccFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "accPairFee";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accGroupFee";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "block";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint80";
                readonly name: "_placeholder";
                readonly type: "uint80";
            }];
            readonly internalType: "struct IBorrowingFees.InitialAccFees";
            readonly name: "borrowingFees";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "rollover";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "funding";
                readonly type: "int256";
            }, {
                readonly internalType: "bool";
                readonly name: "openedAfterUpdate";
                readonly type: "bool";
            }];
            readonly internalType: "struct IPairInfos.TradeInitialAccFees";
            readonly name: "otherFees";
            readonly type: "tuple";
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
                readonly name: "openPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBorrowingFees.LiqPriceInput";
            readonly name: "input";
            readonly type: "tuple";
        }];
        readonly name: "getTradeLiquidationPrice";
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
            readonly name: "accBlockWeightedMarketCap";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastAccBlockWeightedMarketCap";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockDelta";
            readonly type: "uint256";
        }];
        readonly name: "getWeightedWorkPoolMarketCap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly name: "groups";
        readonly outputs: readonly [{
            readonly internalType: "uint112";
            readonly name: "oiLong";
            readonly type: "uint112";
        }, {
            readonly internalType: "uint112";
            readonly name: "oiShort";
            readonly type: "uint112";
        }, {
            readonly internalType: "uint32";
            readonly name: "feePerBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint48";
            readonly name: "accLastUpdatedBlock";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint80";
            readonly name: "maxOi";
            readonly type: "uint80";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastAccBlockWeightedMarketCap";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }];
        readonly name: "handleTradeAction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "initialAccFees";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accPairFee";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accGroupFee";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint48";
            readonly name: "block";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint80";
            readonly name: "_placeholder";
            readonly type: "uint80";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITradingStorage";
            readonly name: "_storageT";
            readonly type: "address";
        }, {
            readonly internalType: "contract IPairInfos";
            readonly name: "_pairInfos";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "pairs";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "feePerBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint48";
            readonly name: "accLastUpdatedBlock";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "_placeholder";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastAccBlockWeightedMarketCap";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint80";
                readonly name: "maxOi";
                readonly type: "uint80";
            }];
            readonly internalType: "struct IBorrowingFees.GroupParams";
            readonly name: "value";
            readonly type: "tuple";
        }];
        readonly name: "setGroupParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "indices";
            readonly type: "uint16[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint80";
                readonly name: "maxOi";
                readonly type: "uint80";
            }];
            readonly internalType: "struct IBorrowingFees.GroupParams[]";
            readonly name: "values";
            readonly type: "tuple[]";
        }];
        readonly name: "setGroupParamsArray";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "groupIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.PairParams";
            readonly name: "value";
            readonly type: "tuple";
        }];
        readonly name: "setPairParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "indices";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "groupIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.PairParams[]";
            readonly name: "values";
            readonly type: "tuple[]";
        }];
        readonly name: "setPairParamsArray";
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
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionSizeStable";
            readonly type: "uint256";
        }];
        readonly name: "withinMaxGroupOi";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BorrowingFeesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BorrowingFees;
}
