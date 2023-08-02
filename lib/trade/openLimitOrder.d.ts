import { LimitOrder, OpenInterest, Pair, PairParams } from "./types";
export declare const getFulfillmentPrice: (order: LimitOrder, pair: Pair, pairParams: PairParams, openInterest: OpenInterest) => number;
