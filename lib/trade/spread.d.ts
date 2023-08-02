import { OpenInterest, PairParams } from "./types";
export declare const getBaseSpreadP: (pairSpreadP: number | undefined) => number;
export declare const getSpreadWithPriceImpactP: (baseSpreadP: number, buy: boolean, collateral: number, leverage: number, pairParams: PairParams | undefined, openInterest: OpenInterest | undefined) => number;
