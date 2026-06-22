/**
 * convertKgToCavan
 * @param kg
 */
export function convertKgToCavan(kg: number): number {
  if (kg === null || kg === undefined) throw new Error("Invalid input");
  return Math.round((kg / 50) * 100) / 100;
}
