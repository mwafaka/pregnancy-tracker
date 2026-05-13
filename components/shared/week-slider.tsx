"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type { PregnancyWeekCardProps } from "./pregnancy-week-card"

interface WeekSliderProps {
  currentWeek: number
  onWeekSelect: (week: number) => void
  className?: string
}

export function WeekSlider({
  currentWeek,
  onWeekSelect,
  className,
}: WeekSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const el = itemRefs.current[currentWeek - 1]
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
  }, [currentWeek])

  return (
    <div
      ref={containerRef}
      className={cn(
        "hide-scrollbar flex gap-2 overflow-x-auto px-4 py-3",
        "scrollbar-none",
        className,
      )}
    >
      {Array.from({ length: 40 }, (_, i) => {
        const week = i + 1
        const isActive = week === currentWeek

        return (
          <button
            key={week}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            onClick={() => onWeekSelect(week)}
            className={cn(
              "flex shrink-0 flex-col items-center justify-center rounded-xl px-3 py-2 text-center transition-all duration-200",
              "border border-white/10 backdrop-blur-xl",
              isActive
                ? "border-purple-400/50 bg-gradient-to-b from-purple-500/20 to-pink-500/20 shadow-lg shadow-purple-500/10"
                : "bg-white/5 hover:bg-white/10",
            )}
          >
            <span
              className={cn(
                "text-xs font-medium",
                isActive ? "text-purple-300" : "text-muted-foreground",
              )}
            >
              Week
            </span>
            <span
              className={cn(
                "text-lg font-bold",
                isActive ? "text-foreground" : "text-foreground/70",
              )}
            >
              {week}
            </span>
          </button>
        )
      })}
    </div>
  )
}
