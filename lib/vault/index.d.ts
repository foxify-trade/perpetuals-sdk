type GetPendingAccBlockWeightedMarketCap = {
    marketCap: number;
    accBlockWeightedMarketCap: number;
    accBlockWeightedMarketCapLastStored: number;
};
export declare const getPendingAccBlockWeightedMarketCap: (currentBlock: number, context: GetPendingAccBlockWeightedMarketCap) => number;
export {};
