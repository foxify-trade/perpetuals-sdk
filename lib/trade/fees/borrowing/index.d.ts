import { OpenInterest } from "../../types";
import * as BorrowingFee from "./types";
export type GetBorrowingFeeContext = {
    currentBlock: number;
    accBlockWeightedMarketCap: number;
    groups: BorrowingFee.Group[];
    pairs: BorrowingFee.Pair[];
    openInterest: OpenInterest;
};
export declare const getBorrowingFee: (posStable: number, pairIndex: number, long: boolean, initialAccFees: BorrowingFee.InitialAccFees, context: GetBorrowingFeeContext) => number;
export declare const withinMaxGroupOi: (pairIndex: number, long: boolean, positionSizeStable: number, context: {
    groups: BorrowingFee.Group[];
    pairs: BorrowingFee.Pair[];
}) => boolean;
export declare const borrowingFeeUtils: {
    getPairGroupAccFeesDeltas: (i: number, pairGroups: BorrowingFee.PairGroup[], initialFees: BorrowingFee.InitialAccFees, pairIndex: number, long: boolean, context: GetBorrowingFeeContext) => {
        deltaGroup: number;
        deltaPair: number;
        beforeTradeOpen: boolean;
    };
    getPairPendingAccFees: (pairIndex: number, currentBlock: number, context: {
        pairs: BorrowingFee.Pair[];
        openInterest: OpenInterest;
        accBlockWeightedMarketCap: number;
    }) => {
        accFeeLong: number;
        accFeeShort: number;
        delta: number;
    };
    getPairPendingAccFee: (pairIndex: number, currentBlock: number, long: boolean, context: {
        pairs: BorrowingFee.Pair[];
        openInterest: OpenInterest;
        accBlockWeightedMarketCap: number;
    }) => number;
    getGroupPendingAccFees: (groupIndex: number, currentBlock: number, context: {
        groups: BorrowingFee.Group[];
        accBlockWeightedMarketCap: number;
    }) => {
        accFeeLong: number;
        accFeeShort: number;
        delta: number;
    };
    getGroupPendingAccFee: (groupIndex: number, currentBlock: number, long: boolean, context: {
        groups: BorrowingFee.Group[];
        accBlockWeightedMarketCap: number;
    }) => number;
    getPendingAccFees: (accFeeLong: number, accFeeShort: number, oiLong: number, oiShort: number, feePerBlock: number, currentBlock: number, accLastUpdatedBlock: number, vaultMarketCap: number) => {
        accFeeLong: number;
        accFeeShort: number;
        delta: number;
    };
    getActivePairFeePerBlock: (pair: BorrowingFee.Pair, openInterest: OpenInterest, accBlockWeightedMarketCap: number, currentBlock: number) => number;
    getActiveGroupFeePerBlock: (group: BorrowingFee.Group, accBlockWeightedMarketCap: number, currentBlock: number) => number;
    getActiveFeePerBlock: (pair: BorrowingFee.Pair, group: BorrowingFee.Group | undefined, pairOpenInterest: OpenInterest, accBlockWeightedMarketCap: number, currentBlock: number) => number;
    getWeightedVaultMarketCap: (accBlockWeightedMarketCap: number, lastAccBlockWeightedMarketCap: number, blockDelta: number) => number;
    getPairGroupIndex: (pairIndex: number, context: {
        pairs: BorrowingFee.Pair[];
    }) => number;
};
export * as BorrowingFee from "./types";
