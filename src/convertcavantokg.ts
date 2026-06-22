
// Type exports for consumers
// Add specific types as needed
export function convertCavanToKg(cavan: number, riceType: "well-milled" | "regular" = "well-milled"): number {
  if (cavan === null || cavan === undefined) throw new Error("Invalid input");
  const kgPerCavan = riceType === "well-milled" ? 50 : 50;
  return cavan * kgPerCavan;
}
