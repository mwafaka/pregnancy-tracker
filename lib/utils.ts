import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { addDays, differenceInDays, startOfDay } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const localeMap: Record<string, string> = {
  en: "en-US",
  de: "de-DE",
};

function getLocaleLang(locale: string): string {
  return localeMap[locale] ?? "en-US";
}

export function formatDate(date: Date, locale: string = "en"): string {
  return new Intl.DateTimeFormat(getLocaleLang(locale), {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDateShort(date: Date, locale: string = "en"): string {
  return new Intl.DateTimeFormat(getLocaleLang(locale), {
    month: "short",
    day: "numeric",
  }).format(date);
}

export function safeParseDate(value: string): Date | null {
  if (!value || typeof value !== "string") return null;
  const parsed = new Date(value);
  if (isNaN(parsed.getTime())) return null;
  return parsed;
}

export function sanitizeInput(value: string): string {
  return value.replace(/[<>]/g, "").replace(/javascript:/gi, "").trim();
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function generateId(): string {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trimEnd() + "...";
}

export function getWeeksBetween(start: Date, end: Date): number {
  return Math.floor(differenceInDays(end, start) / 7);
}

export function getWeekFromLMP(lmp: Date): number {
  const days = differenceInDays(startOfDay(new Date()), startOfDay(lmp));
  return Math.max(1, Math.min(40, Math.floor(days / 7) + 1));
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
