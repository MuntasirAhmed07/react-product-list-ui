// src/store/useConverterStore.js
import { create } from 'zustand';

export const useConverter = create((set, get) => ({
  exchangeRate: 120,

  convertPriceToTk: (priceInUSD) => {
    const { exchangeRate } = get();
    return parseFloat((priceInUSD * exchangeRate).toFixed(2));
  },

  calculateDiscountedPriceInTk: (priceInUSD, discountPercent) => {
    const { convertPriceToTk } = get();
    const discounted = priceInUSD - (priceInUSD * discountPercent) / 100;
    return parseFloat(convertPriceToTk(discounted).toFixed(1));
  },
}));
