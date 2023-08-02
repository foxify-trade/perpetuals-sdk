import { GetBorrowingFeeContext, GetFundingFeeContext, GetRolloverFeeContext } from "./fees";
import { Fee, Trade, TradeInitialAccFees } from "./types";
export type GetPnlContext = GetRolloverFeeContext & GetFundingFeeContext & GetBorrowingFeeContext & {
    currentBlock: number;
    currentL1Block: number;
    fee: Fee | undefined;
    maxGainP: number | undefined;
};
export declare const getPnl: (price: number | undefined, trade: Trade, initialAccFees: TradeInitialAccFees, useFees: boolean, context: GetPnlContext) => number[] | undefined;
