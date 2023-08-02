import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PairInfos, PairInfosInterface } from "../PairInfos";
export declare class PairInfos__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "valueLong";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "valueShort";
            readonly type: "int256";
        }];
        readonly name: "AccFundingFeesStored";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
        readonly name: "AccRolloverFeesStored";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateral";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "leverage";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rolloverFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "fundingFees";
            readonly type: "int256";
        }];
        readonly name: "FeesCharged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
        readonly name: "FundingFeePerBlockPUpdated";
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
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "ManagerUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "MaxNegativePnlOnOpenPUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "valueAbove";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "valueBelow";
            readonly type: "uint256";
        }];
        readonly name: "OnePercentDepthUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "onePercentDepthAbove";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "onePercentDepthBelow";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "rolloverFeePerBlockP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "fundingFeePerBlockP";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct PairInfos.PairParams";
            readonly name: "value";
            readonly type: "tuple";
        }];
        readonly name: "PairParamsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
        readonly name: "RolloverFeePerBlockPUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
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
            readonly name: "rollover";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "funding";
            readonly type: "int256";
        }];
        readonly name: "TradeInitialAccFeesStored";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getAccFundingFeesLong";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getAccFundingFeesShort";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getAccFundingFeesUpdateBlock";
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
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getAccRolloverFees";
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
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getAccRolloverFeesUpdateBlock";
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
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getFundingFeePerBlockP";
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
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getOnePercentDepthAbove";
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
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getOnePercentDepthBelow";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "indices";
            readonly type: "uint256[]";
        }];
        readonly name: "getPairInfos";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "onePercentDepthAbove";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "onePercentDepthBelow";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "rolloverFeePerBlockP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "fundingFeePerBlockP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairInfos.PairParams[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "accPerCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastUpdateBlock";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairInfos.PairRolloverFees[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "int256";
                readonly name: "accPerOiLong";
                readonly type: "int256";
            }, {
                readonly internalType: "int256";
                readonly name: "accPerOiShort";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastUpdateBlock";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairInfos.PairFundingFees[]";
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
        readonly name: "getPendingAccFundingFees";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "valueLong";
            readonly type: "int256";
        }, {
            readonly internalType: "int256";
            readonly name: "valueShort";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getPendingAccRolloverFees";
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
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getRolloverFeePerBlockP";
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
        readonly name: "getTradeFundingFee";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "accFundingFeesPerOi";
            readonly type: "int256";
        }, {
            readonly internalType: "int256";
            readonly name: "endAccFundingFeesPerOi";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "collateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "leverage";
            readonly type: "uint256";
        }];
        readonly name: "getTradeFundingFeePure";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "getTradeInitialAccFundingFeesPerOi";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
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
        readonly name: "getTradeInitialAccRolloverFeesPerCollateral";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "rolloverFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "fundingFee";
            readonly type: "int256";
        }];
        readonly name: "getTradeLiquidationPricePure";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "getTradeOpenedAfterUpdate";
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
            readonly name: "openPrice";
            readonly type: "uint256";
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
            readonly name: "tradeOpenInterest";
            readonly type: "uint256";
        }];
        readonly name: "getTradePriceImpact";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "priceAfterImpact";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "openPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "startOpenInterest";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tradeOpenInterest";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "onePercentDepth";
            readonly type: "uint256";
        }];
        readonly name: "getTradePriceImpactPure";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "priceAfterImpact";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
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
            readonly name: "collateral";
            readonly type: "uint256";
        }];
        readonly name: "getTradeRolloverFee";
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
            readonly name: "accRolloverFeesPerCollateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endAccRolloverFeesPerCollateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "collateral";
            readonly type: "uint256";
        }];
        readonly name: "getTradeRolloverFeePure";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
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
        }, {
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "closingFee";
            readonly type: "uint256";
        }];
        readonly name: "getTradeValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "collateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "rolloverFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "fundingFee";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "closingFee";
            readonly type: "uint256";
        }];
        readonly name: "getTradeValuePure";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITradingStorage";
            readonly name: "_storageT";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_manager";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxNegativePnlOnOpenP";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "manager";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxNegativePnlOnOpenP";
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
        readonly name: "pairFundingFees";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "accPerOiLong";
            readonly type: "int256";
        }, {
            readonly internalType: "int256";
            readonly name: "accPerOiShort";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastUpdateBlock";
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
        readonly name: "pairParams";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "onePercentDepthAbove";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "onePercentDepthBelow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "rolloverFeePerBlockP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fundingFeePerBlockP";
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
        readonly name: "pairRolloverFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "accPerCollateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastUpdateBlock";
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
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "setFundingFeePerBlockP";
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
        readonly name: "setFundingFeePerBlockPArray";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_manager";
            readonly type: "address";
        }];
        readonly name: "setManager";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "setMaxNegativePnlOnOpenP";
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
            readonly name: "valueAbove";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "valueBelow";
            readonly type: "uint256";
        }];
        readonly name: "setOnePercentDepth";
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
            readonly name: "valuesAbove";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "valuesBelow";
            readonly type: "uint256[]";
        }];
        readonly name: "setOnePercentDepthArray";
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
                readonly internalType: "uint256";
                readonly name: "onePercentDepthAbove";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "onePercentDepthBelow";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "rolloverFeePerBlockP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "fundingFeePerBlockP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairInfos.PairParams";
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
                readonly internalType: "uint256";
                readonly name: "onePercentDepthAbove";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "onePercentDepthBelow";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "rolloverFeePerBlockP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "fundingFeePerBlockP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct PairInfos.PairParams[]";
            readonly name: "values";
            readonly type: "tuple[]";
        }];
        readonly name: "setPairParamsArray";
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
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "setRolloverFeePerBlockP";
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
        readonly name: "setRolloverFeePerBlockPArray";
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
        }];
        readonly name: "storeTradeInitialAccFees";
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
        readonly name: "tradeInitialAccFees";
        readonly outputs: readonly [{
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
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): PairInfosInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PairInfos;
}
