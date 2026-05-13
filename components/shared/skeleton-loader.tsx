"use client"

import { cn } from "@/lib/utils"

interface SkeletonLoaderProps {
  variant?: "card" | "text" | "circle" | "chart"
  className?: string
}

export function SkeletonLoader({ variant = "text", className }: SkeletonLoaderProps) {
  switch (variant) {
    case "card":
      return (
        <div
          className={cn(
            "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
            className,
          )}
        >
          <div className="mb-4 h-40 w-full animate-pulse rounded-xl bg-white/10" />
          <div className="mb-3 h-4 w-3/4 animate-pulse rounded-full bg-white/10" />
          <div className="h-3 w-full animate-pulse rounded-full bg-white/10" />
        </div>
      )
    case "circle":
      return (
        <div
          className={cn(
            "animate-pulse rounded-full bg-white/10",
            className,
          )}
          style={{ width: "var(--sk-size, 64px)", height: "var(--sk-size, 64px)" }}
        />
      )
    case "chart":
      return (
        <div className={cn("space-y-3", className)}>
          <div className="flex items-end gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 animate-pulse rounded-t-lg bg-white/10"
                style={{ height: `${Math.random() * 60 + 20}px` }}
              />
            ))}
          </div>
          <div className="h-3 w-1/2 animate-pulse rounded-full bg-white/10" />
        </div>
      )
    default:
      return (
        <div className={cn("space-y-2", className)}>
          <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
          <div className="h-4 w-5/6 animate-pulse rounded-full bg-white/10" />
          <div className="h-4 w-2/3 animate-pulse rounded-full bg-white/10" />
        </div>
      )
  }
}
