import { describe, it, expect } from "vitest";
import { computeRetailPrice } from "../computeretailprice";

describe("computeRetailPrice", () => {
  it("should be a function", () => {
    expect(typeof computeRetailPrice).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => computeRetailPrice(null as any)).toThrow();
  });
});
