import {
  Fee,
  OpenInterest,
  PairFundingFees,
  PairParams,
  PairRolloverFees,
} from "../types";

export const getClosingFee = (
  posStable: number,
  leverage: number,
  pairIndex: number,
  pairFee: Fee | undefined
): number => {
  if (
    posStable === undefined ||
    leverage === undefined ||
    pairIndex === undefined ||
    pairFee === undefined
  ) {
    return 0;
  }

  const { closeFeeP } = pairFee;

  return closeFeeP  * posStable * leverage;
};

export type GetFundingFeeContext = {
  currentBlock?: number;
  pairParams?: PairParams;
  pairFundingFees?: PairFundingFees;
  openInterest?: OpenInterest;
};

export const getFundingFee = (
  leveragedPosStable: number,
  initialAccFundingFees: number,
  buy: boolean,
  openedAfterUpdate: boolean,
  context: GetFundingFeeContext
): number => {
  const { pairParams, pairFundingFees, openInterest, currentBlock } = context;

  if (
    !currentBlock ||
    !openedAfterUpdate ||
    pairParams === undefined ||
    pairFundingFees === undefined ||
    openInterest === undefined
  )
    return 0;

  const { accPerOiLong, accPerOiShort, lastUpdateBlock } = pairFundingFees;
  const { fundingFeePerBlockP } = pairParams;

  const { long: longOi, short: shortOi } = openInterest;

  const fundingFeesPaidByLongs =
    (longOi - shortOi) * fundingFeePerBlockP * (currentBlock - lastUpdateBlock);

  const pendingAccFundingFees = buy
    ? accPerOiLong + fundingFeesPaidByLongs / longOi
    : accPerOiShort + (fundingFeesPaidByLongs * -1) / shortOi;

  return leveragedPosStable * (pendingAccFundingFees - initialAccFundingFees);
};

export type GetRolloverFeeContext = {
  currentBlock?: number;
  pairParams?: PairParams;
  pairRolloverFees?: PairRolloverFees;
};

export const getRolloverFee = (
  posStable: number,
  initialAccRolloverFees: number,
  openedAfterUpdate: boolean,
  context: GetRolloverFeeContext
): number => {
  const { pairParams, pairRolloverFees, currentBlock } = context;

  if (
    !currentBlock ||
    !openedAfterUpdate ||
    pairParams === undefined ||
    pairRolloverFees === undefined
  )
    return 0;

  const { accPerCollateral, lastUpdateBlock } = pairRolloverFees;
  const { rolloverFeePerBlockP } = pairParams;

  const pendingAccRolloverFees =
    accPerCollateral + (currentBlock - lastUpdateBlock) * rolloverFeePerBlockP;

  return posStable * (pendingAccRolloverFees - initialAccRolloverFees);
};

export * from "./borrowing";
