import {
  TradingStorage,
  PairInfos,
  PairsStorage,
  OpenPnlFeed,
  OrderTokenManagement,
  BorrowingFees,
  Callbacks,
} from "./generated";

export type Contracts = {
  storage: TradingStorage;
  pairInfos: PairInfos;
  pairsStorage: PairsStorage;
  openPnlFeed: OpenPnlFeed;
  orderTokenManagement: OrderTokenManagement;
  borrowingFees: BorrowingFees;
  callbacks: Callbacks;
};

export type ContractAddresses = {
  storage: string;
  pairInfos: string;
  pairsStorage: string;
  openPnlFeed: string;
  orderTokenManagement: string;
  borrowingFees: string;
  callbacks: string;
};

export type BlockTag = number | "latest" | "pending";
