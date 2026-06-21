import { describe, it, expect } from "vitest";
import { convertCavanToKg } from "../convertcavantokg";

describe("convertCavanToKg", () => {
  it("should be a function", () => {
    expect(typeof convertCavanToKg).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => convertCavanToKg(null as any)).toThrow();
  });
});
