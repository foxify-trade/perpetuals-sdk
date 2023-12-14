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

  const rolloverFee = getRolloverFee(
    posStable,
    initialAccFees.rollover,
    initialAccFees.openedAfterUpdate,
    {
      ...context,
      currentBlock: context.currentL1Block,
    } as GetRolloverFeeContext
  );

  const borrowingFee = getBorrowingFee(
    posStable * trade.leverage,
    trade.pairIndex,
    trade.buy,
    initialAccFees.borrowing,
    context as GetBorrowingFeeContext
  );

  const fundingFee = getFundingFee(
  posStable * trade.leverage,
  initialAccFees.funding,
  trade.buy,
  initialAccFees.openedAfterUpdate,
  {
    ...context,
    currentBlock: context.currentL1Block,
  } as GetFundingFeeContext
);

  const liqPriceDistance =
    (trade.openPrice *
      (posStable * 0.9 -
        rolloverFee -
        borrowingFee -
        fundingFee)) /
    posStable /
    trade.leverage;

    const liqPrice = trade.buy
    ? Math.max(trade.openPrice - liqPriceDistance, 0)
    : Math.max(trade.openPrice + liqPriceDistance, 0);

    console.log(`perpetuals-sdk:liquidation: getLiquidationPrice(): buy=${trade.buy}, 
      openPrice=${trade.openPrice}, 
      liqPrice=${liqPrice}, 
      liqPriceDistance=${liqPriceDistance},
      rollingFee=${rolloverFee}, 
      borrowingFee=${borrowingFee}, 
      fundingFee=${fundingFee},
      posStable=${posStable},
      leverage=${trade.leverage}`);

      console.log (`perpetuals-sdk:liquidation: trade=${JSON.stringify(trade)}, context=${JSON.stringify(context)}`)
  return liqPrice;
};
