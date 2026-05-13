"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineProgressProps {
  current: number;
  total: number;
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export function TimelineProgress({
  current,
  total,
  className,
  showLabel = true,
  size = "md",
}: TimelineProgressProps) {
  const percentage = Math.min(100, (current / total) * 100);

  const heights = { sm: "h-2", md: "h-3", lg: "h-4" };

  return (
    <div className={cn("space-y-2", className)}>
      {showLabel && (
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-semibold gradient-text">
            Week {current} of {total}
          </span>
        </div>
      )}
      <div className={cn("relative rounded-full bg-muted overflow-hidden", heights[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-peach-400 via-lavender-400 to-pink-400"
        />
      </div>
    </div>
  );
}
