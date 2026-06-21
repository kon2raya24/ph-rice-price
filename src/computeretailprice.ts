export function computeRetailPrice(wholesalePerCavan: number, markup: number = 0.15): { perKg: number; perCavan: number } {
  const perCavan = wholesalePerCavan * (1 + markup);
  return { perKg: Math.round((perCavan / 50) * 100) / 100, perCavan: Math.round(perCavan * 100) / 100 };
}
