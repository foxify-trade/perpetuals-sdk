"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIndicesOpen = void 0;
const stocks_1 = require("./stocks");
const isIndicesOpen = (dateToCheck) => (0, stocks_1.isStocksOpen)(dateToCheck);
exports.isIndicesOpen = isIndicesOpen;
