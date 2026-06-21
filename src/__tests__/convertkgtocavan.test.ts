import { describe, it, expect } from "vitest";
import { convertKgToCavan } from "../convertkgtocavan";

describe("convertKgToCavan", () => {
  it("should be a function", () => {
    expect(typeof convertKgToCavan).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => convertKgToCavan(null as any)).toThrow();
  });
});
