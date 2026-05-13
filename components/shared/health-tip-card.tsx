"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HealthTipCardProps {
  icon: ReactNode
  title: string
  description: string
  category: string
  className?: string
}

const categoryStyles: Record<string, string> = {
  nutrition: "bg-emerald-500/20 text-emerald-400",
  exercise: "bg-blue-500/20 text-blue-400",
  wellness: "bg-purple-500/20 text-purple-400",
  sleep: "bg-indigo-500/20 text-indigo-400",
  mental: "bg-pink-500/20 text-pink-400",
  general: "bg-amber-500/20 text-amber-400",
}

export function HealthTipCard({
  icon,
  title,
  description,
  category,
  className,
}: HealthTipCardProps) {
  const badgeStyle = categoryStyles[category.toLowerCase()] ?? categoryStyles.general

  return (
    <div
      className={cn(
        "group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-5 backdrop-blur-xl",
        "transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 hover:from-white/10 hover:to-white/[0.15]",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 text-purple-400">
          {icon}
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            badgeStyle,
          )}
        >
          {category}
        </span>
      </div>
      <h4 className="mb-1.5 text-sm font-semibold text-foreground">{title}</h4>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
