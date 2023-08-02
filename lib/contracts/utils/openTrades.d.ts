import { TradeContainer, TradeContainerRaw } from "@/trade/types";
import { Contracts, BlockTag } from "@/contracts/types";
export type FetchOpenPairTradesOverrides = {
    pairBatchSize?: number;
    useMulticall?: boolean;
    blockTag?: BlockTag;
};
export declare const fetchOpenPairTrades: (contracts: Contracts, overrides?: FetchOpenPairTradesOverrides) => Promise<TradeContainer[]>;
export declare const fetchOpenPairTradesRaw: (contracts: Contracts, overrides?: FetchOpenPairTradesOverrides) => Promise<TradeContainerRaw[]>;
