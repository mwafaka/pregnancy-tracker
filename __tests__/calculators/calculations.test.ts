import { describe, it, expect } from "vitest";
import {
  calculateDueDate,
  calculatePregnancyWeek,
  calculateOvulation,
  calculateConception,
  calculateIVF,
  calculateWeightGain,
  calculateBabyGrowth,
} from "@/calculators";

describe("calculateDueDate", () => {
  it("should calculate due date 280 days after LMP", () => {
    const lmp = new Date("2024-01-01");
    const result = calculateDueDate(lmp);
    expect(result.dueDate.toISOString().split("T")[0]).toBe("2024-10-07");
    expect(result.weeksRemaining).toBeGreaterThan(0);
    expect(result.daysRemaining).toBeGreaterThan(0);
  });

  it("should set conception date 14 days after LMP", () => {
    const lmp = new Date("2024-06-01");
    const result = calculateDueDate(lmp);
    expect(result.conceptionDate.toISOString().split("T")[0]).toBe("2024-06-15");
  });

  it("should return trimester 1 for weeks 1-13", () => {
    const recentLmp = new Date();
    recentLmp.setDate(recentLmp.getDate() - 30);
    const result = calculateDueDate(recentLmp);
    expect(result.currentTrimester).toBe(1);
  });

  it("should throw on invalid date", () => {
    expect(() => calculateDueDate(new Date("invalid"))).toThrow();
  });
});

describe("calculatePregnancyWeek", () => {
  it("should return week 1 for recent LMP", () => {
    const lmp = new Date();
    const result = calculatePregnancyWeek(lmp);
    expect(result.week).toBe(1);
    expect(result.trimester).toBe(1);
  });

  it("should return week 20 for LMP 140 days ago", () => {
    const lmp = new Date();
    lmp.setDate(lmp.getDate() - 140);
    const result = calculatePregnancyWeek(lmp);
    expect(result.week).toBeGreaterThanOrEqual(20);
  });
});

describe("calculateOvulation", () => {
  it("should calculate fertile window for 28-day cycle", () => {
    const start = new Date("2024-01-01");
    const result = calculateOvulation(start, 28, 5);
    expect(result.ovulationDate.toISOString().split("T")[0]).toBe("2024-01-15");
    expect(result.fertileWindowStart.toISOString().split("T")[0]).toBe("2024-01-10");
    expect(result.fertileWindowEnd.toISOString().split("T")[0]).toBe("2024-01-15");
  });

  it("should throw for cycle length outside 21-45", () => {
    const start = new Date("2024-01-01");
    expect(() => calculateOvulation(start, 15, 5)).toThrow();
    expect(() => calculateOvulation(start, 50, 5)).toThrow();
  });
});

describe("calculateConception", () => {
  it("should back-calculate from due date", () => {
    const dueDate = new Date("2024-12-25");
    const result = calculateConception(dueDate);
    expect(result.conceptionDate.toISOString().split("T")[0]).toBe("2024-04-03");
    expect(result.dueDate.toISOString().split("T")[0]).toBe("2024-12-25");
  });
});

describe("calculateIVF", () => {
  it("should calculate IVF timeline from transfer date", () => {
    const transfer = new Date("2024-06-01");
    const result = calculateIVF(transfer, 5);
    expect(result.transferDate.toISOString().split("T")[0]).toBe("2024-06-01");
    expect(result.embryoAge).toBeGreaterThan(0);
  });
});

describe("calculateWeightGain", () => {
  it("should calculate weight gain for normal BMI", () => {
    const result = calculateWeightGain(60, 65, 165, 20);
    expect(result.recommendedGain.min).toBeGreaterThan(0);
    expect(result.currentGain).toBe(5);
    expect(typeof result.onTrack).toBe("boolean");
  });

  it("should throw for invalid weeks", () => {
    expect(() => calculateWeightGain(60, 65, 165, 0)).toThrow();
    expect(() => calculateWeightGain(60, 65, 165, 45)).toThrow();
  });
});

describe("calculateBabyGrowth", () => {
  it("should return growth data for known weeks", () => {
    expect(calculateBabyGrowth(4).size).toBe("Poppy seed");
    expect(calculateBabyGrowth(20).size).toBe("Banana");
    expect(calculateBabyGrowth(40).size).toBe("Small pumpkin");
  });

  it("should return fallback for unknown weeks", () => {
    const result = calculateBabyGrowth(1);
    expect(result.size).toBe("—");
  });
});
