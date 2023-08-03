import { GetFundingFeeContext, GetRolloverFeeContext, GetBorrowingFeeContext } from "./fees";
import { Trade, TradeInitialAccFees } from "./types";
export type GetLiqPriceContext = GetFundingFeeContext & GetRolloverFeeContext & GetBorrowingFeeContext & {
    currentBlock: number;
    currentL1Block: number;
};
export declare const getLiquidationPrice: (trade: Trade, initialAccFees: TradeInitialAccFees, context: GetLiqPriceContext) => number;
