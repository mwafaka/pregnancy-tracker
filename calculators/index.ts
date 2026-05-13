import {
  addDays,
  addWeeks,
  differenceInDays,
  differenceInWeeks,
  startOfDay,
  isBefore,
  isValid,
  parseISO,
} from "date-fns";
import {
  PREGNANCY_DURATION_WEEKS,
  PREGNANCY_DURATION_DAYS,
  LUTEAL_PHASE_LENGTH,
  FERTILE_WINDOW_DAYS,
  IMPLANTATION_DAYS,
  AVERAGE_CYCLE_LENGTH,
  AVERAGE_PERIOD_LENGTH,
  IVF_EMBRYO_AGE_DAYS,
  BMI_CATEGORIES,
  WEEKLY_GAIN_RATES,
} from "@/constants";
import type {
  DueDateResult,
  OvulationResult,
  ConceptionResult,
  IVFResult,
  WeightGainResult,
  TimelineMilestone,
} from "@/types";

export function calculateDueDate(lmpDate: Date): DueDateResult {
  const lmp = startOfDay(lmpDate);
  if (!isValid(lmp)) throw new Error("Invalid LMP date");

  const dueDate = addDays(lmp, PREGNANCY_DURATION_DAYS);
  const today = startOfDay(new Date());
  const daysPregnant = differenceInDays(today, lmp);
  const currentWeek = Math.max(1, Math.min(PREGNANCY_DURATION_WEEKS, Math.floor(daysPregnant / 7) + 1));
  const currentTrimester = currentWeek <= 13 ? 1 : currentWeek <= 27 ? 2 : 3;
  const weeksRemaining = Math.max(0, PREGNANCY_DURATION_WEEKS - currentWeek);
  const daysRemaining = Math.max(0, PREGNANCY_DURATION_DAYS - daysPregnant);
  const conceptionDate = addDays(lmp, 14);

  const milestones: TimelineMilestone[] = generateMilestones(lmp, dueDate);

  return { dueDate, conceptionDate, currentWeek, currentTrimester, weeksRemaining, daysRemaining, milestones };
}

export function calculatePregnancyWeek(lmpDate: Date): { week: number; trimester: 1 | 2 | 3 } {
  const lmp = startOfDay(lmpDate);
  if (!isValid(lmp)) throw new Error("Invalid LMP date");

  const daysPregnant = differenceInDays(startOfDay(new Date()), lmp);
  const week = Math.max(1, Math.min(PREGNANCY_DURATION_WEEKS, Math.floor(daysPregnant / 7) + 1));
  const trimester = week <= 13 ? 1 : week <= 27 ? 2 : 3;
  return { week, trimester };
}

export function calculateOvulation(
  periodStart: Date,
  cycleLength: number = AVERAGE_CYCLE_LENGTH,
  periodLength: number = AVERAGE_PERIOD_LENGTH
): OvulationResult {
  const start = startOfDay(periodStart);
  if (!isValid(start)) throw new Error("Invalid period start date");
  if (cycleLength < 21 || cycleLength > 45) throw new Error("Cycle length must be 21–45 days");

  const ovulationDate = addDays(start, cycleLength - LUTEAL_PHASE_LENGTH);
  const fertileWindowStart = addDays(ovulationDate, -(FERTILE_WINDOW_DAYS - 1));
  const fertileWindowEnd = ovulationDate;
  const nextPeriodDate = addDays(start, cycleLength);
  const implantationDate = isBefore(new Date(), addDays(ovulationDate, IMPLANTATION_DAYS))
    ? addDays(ovulationDate, IMPLANTATION_DAYS)
    : undefined;
  const cycleDay = differenceInDays(startOfDay(new Date()), start) + 1;

  return { ovulationDate, fertileWindowStart, fertileWindowEnd, nextPeriodDate, implantationDate, cycleDay };
}

export function calculateConception(dueDate: Date): ConceptionResult {
  const due = startOfDay(dueDate);
  if (!isValid(due)) throw new Error("Invalid due date");

  const conceptionDate = addDays(due, -PREGNANCY_DURATION_DAYS + 14);
  const lmp = addDays(due, -PREGNANCY_DURATION_DAYS);
  const fertileWindowStart = addDays(conceptionDate, -3);
  const fertileWindowEnd = addDays(conceptionDate, 2);
  const implantationDate = addDays(conceptionDate, IMPLANTATION_DAYS);
  const pregnancyTestDate = addDays(conceptionDate, IMPLANTATION_DAYS + 5);

  return { conceptionDate, dueDate: due, fertileWindow: { start: fertileWindowStart, end: fertileWindowEnd }, implantationDate, pregnancyTestDate };
}

export function calculateIVF(transferDate: Date, embryoAgeDays: number = IVF_EMBRYO_AGE_DAYS): IVFResult {
  const transfer = startOfDay(transferDate);
  if (!isValid(transfer)) throw new Error("Invalid transfer date");

  const retrievalDate = addDays(transfer, -(embryoAgeDays + 1));
  const implantationDate = addDays(transfer, 1);
  const pregnancyTestDate = addDays(transfer, 9);
  const dueDate = addDays(transfer, PREGNANCY_DURATION_DAYS - embryoAgeDays + 266);
  const embryoAge = differenceInDays(startOfDay(new Date()), transfer) + embryoAgeDays;

  const milestones = generateMilestones(addDays(transfer, -14), dueDate);

  return { retrievalDate, transferDate, implantationDate, pregnancyTestDate, dueDate, milestones, embryoAge };
}

export function calculateWeightGain(
  prePregnancyWeight: number,
  currentWeight: number,
  height: number,
  weeksPregnant: number
): WeightGainResult {
  if (weeksPregnant < 1 || weeksPregnant > PREGNANCY_DURATION_WEEKS) throw new Error("Invalid weeks pregnant");
  if (prePregnancyWeight <= 0 || currentWeight <= 0 || height <= 0) throw new Error("Invalid weight or height");

  const bmi = prePregnancyWeight / ((height / 100) * (height / 100));
  const category = getBMICategory(bmi);
  const recommendedGain = BMI_CATEGORIES[category].gain;
  const currentGain = currentWeight - prePregnancyWeight;

  const weeklyRate = weeksPregnant > 12 ? (currentGain - 2) / (weeksPregnant - 12) : 0;
  const targetRate = WEEKLY_GAIN_RATES[category];
  if (!targetRate) return { recommendedGain: BMI_CATEGORIES.normal.gain, currentGain: Number(currentGain.toFixed(1)), weeklyRate: Number(weeklyRate.toFixed(2)), onTrack: false, byWeek: [] };
  const onTrack = weeklyRate >= targetRate.min && weeklyRate <= targetRate.max;

  const byWeek = Array.from({ length: PREGNANCY_DURATION_WEEKS }, (_, i) => {
    const w = i + 1;
    if (w <= 12) return { week: w, min: 0, max: 2 };
    const weeksRemaining = w - 12;
    return {
      week: w,
      min: Number((recommendedGain.min * (weeksRemaining / (PREGNANCY_DURATION_WEEKS - 12))).toFixed(1)),
      max: Number((recommendedGain.max * (weeksRemaining / (PREGNANCY_DURATION_WEEKS - 12))).toFixed(1)),
    };
  });

  return { recommendedGain, currentGain: Number(currentGain.toFixed(1)), weeklyRate: Number(weeklyRate.toFixed(2)), onTrack, byWeek };
}

export function calculateBabyGrowth(week: number) {
  const sizes: Record<number, { size: string; length: string; weight: string }> = {
    4: { size: "Poppy seed", length: "0.04 in", weight: "<0.04 oz" },
    5: { size: "Sesame seed", length: "0.08 in", weight: "<0.04 oz" },
    6: { size: "Sweet pea", length: "0.16 in", weight: "<0.04 oz" },
    7: { size: "Blueberry", length: "0.51 in", weight: "<0.04 oz" },
    8: { size: "Raspberry", length: "0.63 in", weight: "0.04 oz" },
    9: { size: "Green olive", length: "0.9 in", weight: "0.07 oz" },
    10: { size: "Prune", length: "1.2 in", weight: "0.14 oz" },
    11: { size: "Fig", length: "1.6 in", weight: "0.25 oz" },
    12: { size: "Lime", length: "2.1 in", weight: "0.49 oz" },
    13: { size: "Pea pod", length: "2.9 in", weight: "0.81 oz" },
    14: { size: "Lemon", length: "3.4 in", weight: "1.5 oz" },
    15: { size: "Apple", length: "3.9 in", weight: "2.5 oz" },
    16: { size: "Avocado", length: "4.5 in", weight: "3.5 oz" },
    17: { size: "Pear", length: "5.1 in", weight: "4.7 oz" },
    18: { size: "Bell pepper", length: "5.6 in", weight: "6.7 oz" },
    19: { size: "Mango", length: "6.0 in", weight: "8.5 oz" },
    20: { size: "Banana", length: "6.6 in", weight: "11 oz" },
    21: { size: "Carrot", length: "7.1 in", weight: "13 oz" },
    22: { size: "Papaya", length: "7.6 in", weight: "1 lb" },
    23: { size: "Grapefruit", length: "8.0 in", weight: "1.1 lb" },
    24: { size: "Cantaloupe", length: "8.4 in", weight: "1.3 lb" },
    25: { size: "Rutabaga", length: "8.8 in", weight: "1.5 lb" },
    26: { size: "Zucchini", length: "9.2 in", weight: "1.7 lb" },
    27: { size: "Cauliflower", length: "9.6 in", weight: "2 lb" },
    28: { size: "Eggplant", length: "10.0 in", weight: "2.2 lb" },
    29: { size: "Butternut squash", length: "10.4 in", weight: "2.5 lb" },
    30: { size: "Cabbage", length: "10.8 in", weight: "2.7 lb" },
    31: { size: "Coconut", length: "11.2 in", weight: "3 lb" },
    32: { size: "Jicama", length: "11.6 in", weight: "3.3 lb" },
    33: { size: "Pineapple", length: "12.0 in", weight: "3.5 lb" },
    34: { size: "Honeydew", length: "12.4 in", weight: "3.8 lb" },
    35: { size: "Crenshaw melon", length: "12.8 in", weight: "4 lb" },
    36: { size: "Romaine lettuce", length: "13.2 in", weight: "4.2 lb" },
    37: { size: "Swiss chard", length: "13.6 in", weight: "4.5 lb" },
    38: { size: "Rhubarb", length: "14.0 in", weight: "4.7 lb" },
    39: { size: "Watermelon", length: "14.4 in", weight: "5 lb" },
    40: { size: "Small pumpkin", length: "14.8 in", weight: "5.5 lb" },
  };

  return sizes[week] ?? { size: "—", length: "—", weight: "—" };
}

function generateMilestones(lmp: Date, dueDate: Date): TimelineMilestone[] {
  const milestones: TimelineMilestone[] = [];
  for (let w = 4; w <= 40; w += 4) {
    milestones.push({
      date: addWeeks(lmp, w),
      week: w,
      title: `Week ${w}`,
      description: getMilestoneDescription(w),
      type: "milestone",
    });
  }
  milestones.push({
    date: dueDate,
    week: 40,
    title: "Due Date",
    description: "Your estimated due date. Most babies arrive between 38–42 weeks.",
    type: "milestone",
  });
  return milestones;
}

function getMilestoneDescription(week: number): string {
  const descriptions: Record<number, string> = {
    4: "Implantation complete. Baby is the size of a poppy seed.",
    8: "All major organs are forming. Baby's heart is beating.",
    12: "Risk of miscarriage decreases significantly. Baby's reflexes are developing.",
    16: "Baby can make facial expressions. Gender may be visible on ultrasound.",
    20: "Halfway there! Baby can hear your voice and may respond to sounds.",
    24: "Baby's lungs are developing rapidly. Taste buds are forming.",
    28: "Third trimester begins. Baby can blink and dream (REM sleep).",
    32: "Baby is practicing breathing movements. Most babies are head-down now.",
    36: "Baby's organs are almost fully mature. The body is plumping up.",
    40: "Full term! Baby is ready to meet the world.",
  };
  return descriptions[week] ?? "Your baby is growing and developing.";
}

function getBMICategory(bmi: number): keyof typeof BMI_CATEGORIES {
  for (const [category, range] of Object.entries(BMI_CATEGORIES)) {
    if (bmi >= range.min && bmi <= range.max) return category as keyof typeof BMI_CATEGORIES;
  }
  return "normal";
}
