import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PairsStorage, PairsStorageInterface } from "../PairsStorage";
export declare class PairsStorage__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "FeeAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "FeeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "GroupAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
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
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "from";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }];
        readonly name: "PairAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "PairUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "openFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "closeFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "oracleFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executeLimitOrderFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "referralFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLevPosStable";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Fee";
            readonly name: "_fee";
            readonly type: "tuple";
        }];
        readonly name: "addFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "bytes32";
                readonly name: "job";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxCollateralP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Group";
            readonly name: "_group";
            readonly type: "tuple";
        }];
        readonly name: "addGroup";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "from";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "feed1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "feed2";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum PairsStorage.FeedCalculation";
                    readonly name: "feedCalculation";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxDeviationP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct PairsStorage.Feed";
                readonly name: "feed";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeIndex";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Pair";
            readonly name: "_pair";
            readonly type: "tuple";
        }];
        readonly name: "addPair";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "from";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "feed1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "feed2";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum PairsStorage.FeedCalculation";
                    readonly name: "feedCalculation";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxDeviationP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct PairsStorage.Feed";
                readonly name: "feed";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeIndex";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Pair[]";
            readonly name: "_pairs";
            readonly type: "tuple[]";
        }];
        readonly name: "addPairs";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "currentOrderId";
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
        readonly name: "fees";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "openFeeP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "closeFeeP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "oracleFeeP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "executeLimitOrderFeeP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "referralFeeP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minLevPosStable";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feesCount";
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
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }];
        readonly name: "groupCollateral";
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
        }];
        readonly name: "groupMaxCollateral";
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
        readonly name: "groups";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "job";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "minLeverage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxLeverage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxCollateralP";
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
        readonly name: "groupsCollaterals";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "groupsCount";
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
        }];
        readonly name: "guaranteedSlEnabled";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITradingStorage";
            readonly name: "_storageT";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_currentOrderId";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "isPairListed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairCloseFeeP";
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
        }];
        readonly name: "pairExecuteLimitOrderFeeP";
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
        }];
        readonly name: "pairFeed";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feed1";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feed2";
                readonly type: "address";
            }, {
                readonly internalType: "enum PairsStorage.FeedCalculation";
                readonly name: "feedCalculation";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxDeviationP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Feed";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairJob";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairMinLevPosStable";
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
        }];
        readonly name: "pairMinLeverage";
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
        }];
        readonly name: "pairOpenFeeP";
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
        }];
        readonly name: "pairOracleFeeP";
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
        }];
        readonly name: "pairReferralFeeP";
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
        }];
        readonly name: "pairSpreadP";
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
        readonly name: "pairs";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "from";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "feed1";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feed2";
                readonly type: "address";
            }, {
                readonly internalType: "enum PairsStorage.FeedCalculation";
                readonly name: "feedCalculation";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxDeviationP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Feed";
            readonly name: "feed";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "spreadP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "groupIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeIndex";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "pairsBackend";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "from";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "feed1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "feed2";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum PairsStorage.FeedCalculation";
                    readonly name: "feedCalculation";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxDeviationP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct PairsStorage.Feed";
                readonly name: "feed";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeIndex";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Pair";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "bytes32";
                readonly name: "job";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxCollateralP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Group";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "openFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "closeFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "oracleFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executeLimitOrderFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "referralFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLevPosStable";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Fee";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pairsCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
            readonly name: "_id";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "openFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "closeFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "oracleFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executeLimitOrderFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "referralFeeP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLevPosStable";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Fee";
            readonly name: "_fee";
            readonly type: "tuple";
        }];
        readonly name: "updateFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "bytes32";
                readonly name: "job";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxCollateralP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Group";
            readonly name: "_group";
            readonly type: "tuple";
        }];
        readonly name: "updateGroup";
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
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_increase";
            readonly type: "bool";
        }];
        readonly name: "updateGroupCollateral";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "from";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "feed1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "feed2";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum PairsStorage.FeedCalculation";
                    readonly name: "feedCalculation";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxDeviationP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct PairsStorage.Feed";
                readonly name: "feed";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeIndex";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairsStorage.Pair";
            readonly name: "_pair";
            readonly type: "tuple";
        }];
        readonly name: "updatePair";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PairsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PairsStorage;
}
