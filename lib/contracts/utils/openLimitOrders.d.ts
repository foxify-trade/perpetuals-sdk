import { LimitOrder } from "@/trade/types";
import { BlockTag, Contracts } from "../types";
export type FetchOpenLimitOrdersOverrides = {
    blockTag?: BlockTag;
    useMulticall?: boolean;
};
export declare const fetchOpenLimitOrders: (contracts: Contracts, overrides?: FetchOpenLimitOrdersOverrides) => Promise<LimitOrder[]>;
export declare const fetchOpenLimitOrdersRaw: (contracts: Contracts, overrides?: FetchOpenLimitOrdersOverrides) => Promise<any[]>;
