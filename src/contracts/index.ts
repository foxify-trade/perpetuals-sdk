import type { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import { getContractAddressesForChain } from "./addresses";
import {
  TradingStorage__factory,
  PairInfos__factory,
  PairsStorage__factory,
  OpenPnlFeed__factory,
  OrderTokenManagement__factory,
  BorrowingFees__factory,
  Callbacks__factory,
} from "./types/generated/factories";
import { Contracts } from "./types";

export const getContractsForChain = (
  chainId: number,
  signerOrProvider?: Signer | Provider
): Contracts => {
  const addresses = getContractAddressesForChain(chainId);

  return {
    storage: TradingStorage__factory.connect(
      addresses.storage,
      signerOrProvider as Signer | Provider
    ),
    pairInfos: PairInfos__factory.connect(
      addresses.pairInfos,
      signerOrProvider as Signer | Provider
    ),
    pairsStorage: PairsStorage__factory.connect(
      addresses.pairsStorage,
      signerOrProvider as Signer | Provider
    ),
    openPnlFeed: OpenPnlFeed__factory.connect(
      addresses.openPnlFeed,
      signerOrProvider as Signer | Provider
    ),
    orderTokenManagement: OrderTokenManagement__factory.connect(
      addresses.orderTokenManagement,
      signerOrProvider as Signer | Provider
    ),
    borrowingFees: BorrowingFees__factory.connect(
      addresses.borrowingFees,
      signerOrProvider as Signer | Provider
    ),
    callbacks: Callbacks__factory.connect(
      addresses.callbacks,
      signerOrProvider as Signer | Provider
    ),
  };
};

export * from "./utils";
export * from "./addresses";
