import { describe, it, expect } from "vitest";
import { cn, safeParseDate, sanitizeInput, clamp, truncate, generateId } from "@/lib/utils";

describe("cn", () => {
  it("should merge Tailwind classes", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("should handle conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });
});

describe("safeParseDate", () => {
  it("should parse valid date strings", () => {
    const result = safeParseDate("2024-01-15");
    expect(result).not.toBeNull();
    expect(result!.getFullYear()).toBe(2024);
  });

  it("should return null for invalid dates", () => {
    expect(safeParseDate("")).toBeNull();
    expect(safeParseDate("not-a-date")).toBeNull();
  });
});

describe("sanitizeInput", () => {
  it("should strip HTML tags", () => {
    expect(sanitizeInput("<script>alert('xss')</script>")).toBe("alert('xss')");
  });

  it("should remove javascript: protocol", () => {
    expect(sanitizeInput("javascript:alert(1)")).toBe("alert(1)");
  });
});

describe("clamp", () => {
  it("should clamp within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });
});

describe("truncate", () => {
  it("should truncate long strings", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
  });

  it("should not truncate short strings", () => {
    expect(truncate("Hi", 5)).toBe("Hi");
  });
});

describe("generateId", () => {
  it("should generate a non-empty string", () => {
    expect(generateId()).toBeTruthy();
    expect(typeof generateId()).toBe("string");
  });
});
