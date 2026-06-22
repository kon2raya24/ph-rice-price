
// Type exports for consumers
// Add specific types as needed
export function convertCavanToKg(cavan: number, riceType: "well-milled" | "regular" = "well-milled"): number {
  const kgPerCavan = riceType === "well-milled" ? 50 : 50;
  return cavan * kgPerCavan;
}
