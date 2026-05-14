"use client";

import { useMemo, useState, useEffect } from "react";
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
  const years = useMemo(() => [currentYear - 1, currentYear, currentYear + 1], [currentYear]);

  const parts = value ? value.split("-") : [];
  const [localYear, setLocalYear] = useState(parts[0] || "");
  const [localMonth, setLocalMonth] = useState(parts[1] || "");
  const [localDay, setLocalDay] = useState(parts[2] || "");

  useEffect(() => {
    setLocalYear(parts[0] || "");
    setLocalMonth(parts[1] || "");
    setLocalDay(parts[2] || "");
  }, [value]);

  const daysInMonth = useMemo(() => {
    if (!localYear || !localMonth) return 31;
    return new Date(Number(localYear), Number(localMonth), 0).getDate();
  }, [localYear, localMonth]);

  const handleChange = (field: "year" | "month" | "day", newValue: string) => {
    const newYear = field === "year" ? newValue : localYear;
    const newMonth = field === "month" ? newValue : localMonth;
    const newDay = field === "day" ? newValue : localDay;

    let validDay = newDay;
    if (newYear && newMonth && newDay) {
      const maxDay = new Date(Number(newYear), Number(newMonth), 0).getDate();
      if (Number(newDay) > maxDay) {
        validDay = String(maxDay).padStart(2, "0");
      }
    }

    if (field === "year") setLocalYear(newValue);
    if (field === "month") setLocalMonth(newValue);
    if (field === "day") setLocalDay(newValue);

    if (newYear && newMonth && validDay) {
      const m = newMonth.padStart(2, "0");
      const d = validDay.padStart(2, "0");
      onChange(`${newYear}-${m}-${d}`);
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
          value={localDay}
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
          value={localMonth}
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
          value={localYear}
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
