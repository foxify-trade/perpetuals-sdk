import type { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import { Contracts } from "./types";
export declare const getContractsForChain: (chainId: number, signerOrProvider?: Signer | Provider) => Contracts;
export * from "./utils";
export * from "./addresses";
