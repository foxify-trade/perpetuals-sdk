"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFees = exports.fetchPairsRolloverFees = exports.fetchPairsParams = exports.fetchPairs = void 0;
const fetchPairs = (contracts, pairIxs) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contracts) {
        return [];
    }
    const { pairsStorage: pairsStorageContract } = contracts;
    try {
        const pairs = yield Promise.all(pairIxs.map(pairIndex => pairsStorageContract.pairs(pairIndex)));
        return pairs.map((pair, index) => {
            return {
                name: pair.from + "/" + pair.to,
                from: pair.from,
                to: pair.to,
                feeIndex: parseInt(pair.feeIndex.toString()),
                groupIndex: parseInt(pair.groupIndex.toString()),
                pairIndex: pairIxs[index],
                spreadP: parseFloat(pair.spreadP.toString()) / 1e12,
            };
        });
    }
    catch (error) {
        console.error(`Unexpected error while fetching pairs!`);
        throw error;
    }
});
exports.fetchPairs = fetchPairs;
const fetchPairsParams = (contracts, pairIxs) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contracts) {
        return [];
    }
    const { pairInfos: pairInfosContract } = contracts;
    try {
        const pairParams = yield Promise.all(pairIxs.map(pairIndex => pairInfosContract.pairParams(pairIndex)));
        return pairParams.map(pair => {
            return {
                onePercentDepthAbove: parseFloat(pair.onePercentDepthAbove.toString()),
                onePercentDepthBelow: parseFloat(pair.onePercentDepthBelow.toString()),
                rolloverFeePerBlockP: parseFloat(pair.rolloverFeePerBlockP.toString()) / 1e12,
                fundingFeePerBlockP: parseFloat(pair.fundingFeePerBlockP.toString()) / 1e12,
            };
        });
    }
    catch (error) {
        console.error(`Unexpected error while fetching pairs!`);
        throw error;
    }
});
exports.fetchPairsParams = fetchPairsParams;
const fetchPairsRolloverFees = (contracts, pairIxs) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contracts) {
        return [];
    }
    const { pairInfos: pairInfosContract } = contracts;
    try {
        const pairsRolloverFees = yield Promise.all(pairIxs.map(pairIndex => pairInfosContract.pairRolloverFees(pairIndex)));
        return pairsRolloverFees.map(pairData => {
            return {
                accPerCollateral: parseFloat(pairData.accPerCollateral.toString()) / 1e18,
                lastUpdateBlock: parseInt(pairData.lastUpdateBlock.toString()),
            };
        });
    }
    catch (error) {
        console.error(`Unexpected error while fetching pairs!`);
        throw error;
    }
});
exports.fetchPairsRolloverFees = fetchPairsRolloverFees;
const fetchFees = (contracts, feeIxs) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contracts) {
        return [];
    }
    const { pairsStorage: pairsStorageContract } = contracts;
    try {
        const fees = yield Promise.all(feeIxs.map(pairIndex => pairsStorageContract.fees(pairIndex)));
        return fees.map(fee => {
            return {
                closeFeeP: parseFloat(fee.closeFeeP.toString()) / 1e12,
                minLevPosStable: parseFloat(fee.minLevPosStable.toString()) / 1e12,
                openFeeP: parseFloat(fee.openFeeP.toString()) / 1e12,
                referralFeeP: parseFloat(fee.referralFeeP.toString()) / 1e12,
            };
        });
    }
    catch (error) {
        console.error(`Unexpected error while fetching pairs!`);
        throw error;
    }
});
exports.fetchFees = fetchFees;
