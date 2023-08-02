import { Pair, PairParams, PairRolloverFees, Fee } from "@/trade/types";
import { Contracts } from "@/contracts/types";
export declare const fetchPairs: (contracts: Contracts, pairIxs: number[]) => Promise<Pair[]>;
export declare const fetchPairsParams: (contracts: Contracts, pairIxs: number[]) => Promise<PairParams[]>;
export declare const fetchPairsRolloverFees: (contracts: Contracts, pairIxs: number[]) => Promise<PairRolloverFees[]>;
export declare const fetchFees: (contracts: Contracts, feeIxs: number[]) => Promise<Fee[]>;
