"use client";

import { cn } from "@/lib/utils";

interface AnimatedStatProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedStat({ value, label, icon, className, delay = 0 }: AnimatedStatProps) {
  return (
    <div
      className={cn("text-center animate-fade-in-up", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {icon && <div className="flex justify-center mb-2 text-peach-400">{icon}</div>}
      <div className="stat-value">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
