"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface DateSelectProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  description?: string;
  error?: string;
  className?: string;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function DateSelect({ value, onChange, label, description, error, className }: DateSelectProps) {
  const currentYear = new Date().getFullYear();
  const years = useMemo(() => [currentYear - 2, currentYear - 1, currentYear], [currentYear]);

  const parts = value ? value.split("-") : [];
  const year = parts[0] || "";
  const month = parts[1] || "";
  const day = parts[2] || "";

  const daysInMonth = useMemo(() => {
    if (!year || !month) return 31;
    return new Date(Number(year), Number(month), 0).getDate();
  }, [year, month]);

  const handleChange = (field: "year" | "month" | "day", newValue: string) => {
    const newYear = field === "year" ? newValue : year;
    const newMonth = field === "month" ? newValue : month;
    const newDay = field === "day" ? newValue : day;

    let validDay = newDay;
    if (newYear && newMonth && newDay) {
      const maxDay = new Date(Number(newYear), Number(newMonth), 0).getDate();
      if (Number(newDay) > maxDay) {
        validDay = String(maxDay).padStart(2, "0");
      }
    }

    const y = newYear;
    const m = newMonth.padStart(2, "0");
    const d = validDay.padStart(2, "0");
    if (y && m && d) {
      onChange(`${y}-${m}-${d}`);
    } else {
      onChange("");
    }
  };

  const selectClass = cn(
    "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    error && "border-destructive focus-visible:ring-destructive",
  );

  return (
    <div className={cn("space-y-2", className)}>
      {label && <label className="block text-sm font-medium">{label}</label>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="flex gap-2">
        <select
          value={day}
          onChange={(e) => handleChange("day", e.target.value)}
          className={selectClass}
          aria-label="Day"
        >
          <option value="">Day</option>
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
            <option key={d} value={String(d).padStart(2, "0")}>{d}</option>
          ))}
        </select>
        <select
          value={month}
          onChange={(e) => handleChange("month", e.target.value)}
          className={selectClass}
          aria-label="Month"
        >
          <option value="">Month</option>
          {MONTHS.map((name, i) => (
            <option key={i + 1} value={String(i + 1).padStart(2, "0")}>{name}</option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => handleChange("year", e.target.value)}
          className={selectClass}
          aria-label="Year"
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>{y}</option>
          ))}
        </select>
      </div>
      {error && (
        <p className="text-xs text-destructive" role="alert">{error}</p>
      )}
    </div>
  );
}
