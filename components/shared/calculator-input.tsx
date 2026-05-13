"use client";

import { type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CalculatorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  description?: string;
  icon?: ReactNode;
}

export const CalculatorInput = forwardRef<HTMLInputElement, CalculatorInputProps>(
  ({ label, error, description, icon, className, id, ...props }, ref) => {
    const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="space-y-2">
        <label htmlFor={inputId} className="block text-sm font-medium">
          {label}
        </label>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "placeholder:text-muted-foreground",
              icon && "pl-10",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

CalculatorInput.displayName = "CalculatorInput";
