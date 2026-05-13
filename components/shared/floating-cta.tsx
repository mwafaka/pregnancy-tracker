"use client"

import { cn } from "@/lib/utils"

interface FloatingCtaProps {
  label: string
  onClick?: () => void
  className?: string
}

export function FloatingCta({
  label,
  onClick,
  className,
}: FloatingCtaProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-20 right-4 z-50 md:hidden",
        "rounded-full border border-white/20 bg-gradient-to-r from-purple-500/80 to-pink-500/80 px-6 py-3",
        "text-sm font-semibold text-white shadow-lg shadow-purple-500/30",
        "backdrop-blur-xl transition-all duration-300",
        "hover:from-purple-500 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-500/40",
        "active:scale-95",
        className,
      )}
    >
      {label}
    </button>
  )
}
