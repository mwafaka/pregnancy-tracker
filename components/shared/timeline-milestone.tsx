"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineMilestoneProps {
  date: string
  weekNumber: number
  title: string
  description?: string
  type: "milestone" | "appointment" | "symptom" | "reminder"
  index?: number
  className?: string
}

const typeConfig: Record<
  TimelineMilestoneProps["type"],
  { icon: string; label: string; dot: string; badge: string }
> = {
  milestone: {
    icon: "🎉",
    label: "Milestone",
    dot: "bg-emerald-500 shadow-emerald-500/50",
    badge: "bg-emerald-500/20 text-emerald-400",
  },
  appointment: {
    icon: "📅",
    label: "Appointment",
    dot: "bg-blue-500 shadow-blue-500/50",
    badge: "bg-blue-500/20 text-blue-400",
  },
  symptom: {
    icon: "💊",
    label: "Symptom",
    dot: "bg-orange-500 shadow-orange-500/50",
    badge: "bg-orange-500/20 text-orange-400",
  },
  reminder: {
    icon: "🔔",
    label: "Reminder",
    dot: "bg-purple-500 shadow-purple-500/50",
    badge: "bg-purple-500/20 text-purple-400",
  },
}

export function TimelineMilestone({
  date,
  weekNumber,
  title,
  description,
  type,
  index = 0,
  className,
}: TimelineMilestoneProps) {
  const config = typeConfig[type]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className={cn("relative flex gap-4 pl-8", className)}
    >
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div className={cn("h-3 w-3 rounded-full shadow-lg", config.dot)} />
        <div className="mt-1 h-full w-px bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-4 backdrop-blur-xl">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{date}</span>
          <span className="text-xs text-muted-foreground">Week {weekNumber}</span>
        </div>

        <h4 className="mb-1 text-sm font-semibold text-foreground">{title}</h4>

        {description && (
          <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
            config.badge,
          )}
        >
          {config.icon} {config.label}
        </span>
      </div>
    </motion.div>
  )
}
