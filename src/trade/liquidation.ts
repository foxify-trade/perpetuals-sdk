import {
  getFundingFee,
  GetFundingFeeContext,
  getRolloverFee,
  GetRolloverFeeContext,
  getBorrowingFee,
  GetBorrowingFeeContext,
} from "./fees";
import { Trade, TradeInfo, TradeInitialAccFees } from "./types";

export type GetLiqPriceContext = GetFundingFeeContext &
  GetRolloverFeeContext &
  GetBorrowingFeeContext & { currentBlock: number; currentL1Block: number };

export const getLiquidationPrice = (
  trade: Trade,
  initialAccFees: TradeInitialAccFees,
  context: GetLiqPriceContext
): number => {
  const posStable = trade.positionSizeStable;

  const liqPriceDistance =
    (trade.openPrice *
      (posStable * 0.9 -
        getRolloverFee(
          posStable,
          initialAccFees.rollover,
          initialAccFees.openedAfterUpdate,
          {
            ...context,
            currentBlock: context.currentL1Block,
          } as GetRolloverFeeContext
        ) -
        getBorrowingFee(
          posStable * trade.leverage,
          trade.pairIndex,
          trade.buy,
          initialAccFees.borrowing,
          context as GetBorrowingFeeContext
        ) -
        getFundingFee(
          posStable * trade.leverage,
          initialAccFees.funding,
          trade.buy,
          initialAccFees.openedAfterUpdate,
          {
            ...context,
            currentBlock: context.currentL1Block,
          } as GetFundingFeeContext
        ))) /
    posStable /
    trade.leverage;

  return trade.buy
    ? Math.max(trade.openPrice - liqPriceDistance, 0)
    : Math.max(trade.openPrice + liqPriceDistance, 0);
};
