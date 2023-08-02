"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isForexLowLiquidity = exports.isForexOpen = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-ignore-file
const luxon_1 = require("luxon");
const FOREX_MARKETS_TIME_ZONE_IANA = luxon_1.IANAZone.create("America/New_York");
const isForexOpen = (dateToCheck) => {
    const now = luxon_1.DateTime.fromJSDate(dateToCheck).setZone(FOREX_MARKETS_TIME_ZONE_IANA);
    const weekday = now.weekday;
    const hour = now.hour;
    const dayOfMonth = now.day;
    const month = now.month;
    const isInDST = now.isInDST;
    const isClosed = 
    // Christmas 2023
    (month === 12 && dayOfMonth >= 25 && dayOfMonth <= 27) ||
        // New Year's Eve 2023
        (month === 1 && dayOfMonth >= 1 && dayOfMonth <= 2) ||
        // Friday after 4PM (DST) and 5PM (non-DST)
        (weekday === 5 && ((isInDST && hour >= 16) || hour >= 17)) ||
        // Saturday
        weekday === 6 ||
        // Sunday before 4PM (DST) and 5PM (non-DST)
        (weekday === 7 && ((isInDST && hour < 16) || hour < 17));
    return !isClosed;
};
exports.isForexOpen = isForexOpen;
const isForexLowLiquidity = (timestampToCheck) => {
    const now = luxon_1.DateTime.fromMillis(timestampToCheck).setZone(FOREX_MARKETS_TIME_ZONE_IANA);
    const hour = now.hour;
    const minute = now.minute;
    const isInDST = now.isInDST;
    return ((isInDST && ((hour == 15 && minute >= 45) || (hour >= 16 && hour < 18))) ||
        (!isInDST && ((hour == 16 && minute >= 45) || (hour >= 17 && hour < 19))));
};
exports.isForexLowLiquidity = isForexLowLiquidity;
