
// Type exports for consumers
// Add specific types as needed
/**
 * computeRetailPrice
 * @param wholesalePerCavan
 * @param markup
 */
export function computeRetailPrice(wholesalePerCavan: number, markup: number = 0.15): { perKg: number; perCavan: number } {
  if (wholesalePerCavan === null || wholesalePerCavan === undefined) throw new Error("Invalid input");
  const perCavan = wholesalePerCavan * (1 + markup);
  return { perKg: Math.round((perCavan / 50) * 100) / 100, perCavan: Math.round(perCavan * 100) / 100 };
}
