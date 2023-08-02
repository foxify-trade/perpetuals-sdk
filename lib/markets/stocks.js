"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUSMarketsNow = exports.isStocksOpen = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-ignore-file
const luxon_1 = require("luxon");
const STOCKS_MARKETS_TIME_ZONE_IANA = luxon_1.IANAZone.create("America/New_York");
const isStocksOpen = (dateToCheck) => {
    const now = luxon_1.DateTime.fromJSDate(dateToCheck).setZone(STOCKS_MARKETS_TIME_ZONE_IANA);
    const weekday = now.weekday;
    const hour = now.hour;
    const dayOfMonth = now.day;
    const month = now.month;
    const minute = now.minute;
    const isClosed = 
    // New Year's  2023
    (month === 1 && dayOfMonth === 2) ||
        // Martin Luther King, Jr. Day 2023
        (month === 1 && dayOfMonth === 16) ||
        // Washington's Birthday 2023
        (month === 2 && dayOfMonth === 20) ||
        // Good Friday 2023
        (month === 4 && dayOfMonth === 7) ||
        // Memorial Day 2023
        (month === 5 && dayOfMonth === 29) ||
        // Juneteenth National Independence Day 2023
        (month === 6 && dayOfMonth === 19) ||
        // Independence Day 2023
        (month === 7 && dayOfMonth === 4) ||
        // Labor Day 2023
        (month === 9 && dayOfMonth === 4) ||
        // Thanksgiving Day 2022
        (month === 11 && dayOfMonth === 23) ||
        // Friday after Thanksgiving Day 2023 (closes early at 1PM)
        (month === 11 && dayOfMonth === 24 && hour >= 13) ||
        // Christmas Day 2023
        (month === 12 && dayOfMonth === 25) ||
        // Saturday
        weekday === 6 ||
        // Sunday
        weekday === 7 ||
        // Mo-Fr Daily Opening
        hour < 9 ||
        (hour === 9 && minute < 30) ||
        // Mo-Fr Daily Closing
        hour >= 16;
    return !isClosed;
};
exports.isStocksOpen = isStocksOpen;
const getUSMarketsNow = () => {
    return luxon_1.DateTime.now().setZone(STOCKS_MARKETS_TIME_ZONE_IANA);
};
exports.getUSMarketsNow = getUSMarketsNow;
