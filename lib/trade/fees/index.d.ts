import { Fee, OpenInterest, PairFundingFees, PairParams, PairRolloverFees } from "../types";
export declare const getClosingFee: (posStable: number, leverage: number, pairIndex: number, pairFee: Fee | undefined) => number;
export type GetFundingFeeContext = {
    currentBlock?: number;
    pairParams?: PairParams;
    pairFundingFees?: PairFundingFees;
    openInterest?: OpenInterest;
};
export declare const getFundingFee: (leveragedPosStable: number, initialAccFundingFees: number, buy: boolean, openedAfterUpdate: boolean, context: GetFundingFeeContext) => number;
export type GetRolloverFeeContext = {
    currentBlock?: number;
    pairParams?: PairParams;
    pairRolloverFees?: PairRolloverFees;
};
export declare const getRolloverFee: (posStable: number, initialAccRolloverFees: number, openedAfterUpdate: boolean, context: GetRolloverFeeContext) => number;
export * from "./borrowing";
