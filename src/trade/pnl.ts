import {
  getBorrowingFee,
  GetBorrowingFeeContext,
  getClosingFee,
  getFundingFee,
  GetFundingFeeContext,
  getRolloverFee,
  GetRolloverFeeContext,
} from "./fees";
import { Fee, Trade, TradeInfo, TradeInitialAccFees } from "./types";

export type GetPnlContext = GetRolloverFeeContext &
  GetFundingFeeContext &
  GetBorrowingFeeContext & {
    currentBlock: number;
    currentL1Block: number;
    fee: Fee | undefined;
    maxGainP: number | undefined;
  };

export const getPnl = (
  price: number | undefined,
  trade: Trade,
  initialAccFees: TradeInitialAccFees,
  useFees: boolean,
  context: GetPnlContext
): number[] | undefined => {
  if (!price) {
    return;
  }
  const posStable = trade.positionSizeStable;
  const { openPrice, leverage } = trade;
  const {
    maxGainP,
    pairParams,
    pairRolloverFees,
    pairFundingFees,
    openInterest,
    fee,
    currentL1Block,
  } = context;
  const maxGain = maxGainP === undefined ? Infinity : (maxGainP / 100) * posStable;

  let pnlStable = trade.buy
    ? ((price - openPrice) / openPrice) * leverage * posStable
    : ((openPrice - price) / openPrice) * leverage * posStable;

  pnlStable = pnlStable > maxGain ? maxGain : pnlStable;

  if (useFees) {
    pnlStable -= getRolloverFee(
      posStable,
      initialAccFees.rollover,
      initialAccFees.openedAfterUpdate,
      {
        currentBlock: currentL1Block,
        pairParams,
        pairRolloverFees,
      }
    );

    pnlStable -= getFundingFee(
      posStable * trade.leverage,
      initialAccFees.funding,
      trade.buy,
      initialAccFees.openedAfterUpdate,
      {
        currentBlock: currentL1Block,
        pairParams,
        pairFundingFees,
        openInterest,
      }
    );

    pnlStable -= getBorrowingFee(
      posStable,
      trade.pairIndex,
      trade.buy,
      initialAccFees.borrowing,
      context as GetBorrowingFeeContext
    );
  }

  let pnlPercentage = (pnlStable / posStable) * 100;

  // Can be liquidated
  if (pnlPercentage <= -90) {
    pnlPercentage = -100;
  } else {
    pnlStable -= getClosingFee(posStable, trade.leverage, trade.pairIndex, fee);
    pnlPercentage = (pnlStable / posStable) * 100;
  }

  pnlPercentage = pnlPercentage < -100 ? -100 : pnlPercentage;
  pnlStable = (posStable * pnlPercentage) / 100;

  return [pnlStable, pnlPercentage];
};
