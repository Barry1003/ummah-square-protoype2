/** ₦1,234,567 — Naira, no kobo. Prices in the catalogue are whole Naira. */
export const formatNaira = (amount: number): string =>
  `₦${Math.round(amount).toLocaleString('en-NG')}`;

/** "23% off" for a discounted product, or null when there is no discount. */
export const discountLabel = (price: number, originalPrice?: number): string | null => {
  if (!originalPrice || originalPrice <= price) return null;
  return `${Math.round(((originalPrice - price) / originalPrice) * 100)}% off`;
};
