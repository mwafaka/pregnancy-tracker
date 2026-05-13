"use client"

import { cn } from "@/lib/utils"

interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  className,
}: ProgressRingProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (clampedProgress / 100) * circumference

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={cn("-rotate-90", className)}
    >
      <defs>
        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f9a8d4" /> {/* pink-300 */}
          <stop offset="50%" stopColor="#d8b4fe" /> {/* purple-300 */}
          <stop offset="100%" stopColor="#fcd34d" /> {/* amber-300 */}
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-white/10"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#progress-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-700 ease-out"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-foreground text-lg font-semibold"
        transform={`rotate(90, ${size / 2}, ${size / 2})`}
      >
        {Math.round(clampedProgress)}%
      </text>
    </svg>
  )
}
