"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Baby } from "lucide-react";
import { cn } from "@/lib/utils";

interface PregnancyWeekCardProps {
  week: number;
  trimester: number;
  size: string;
  isCurrent?: boolean;
  href?: string;
  className?: string;
}

export function PregnancyWeekCard({
  week,
  trimester,
  size,
  isCurrent,
  href,
  className,
}: PregnancyWeekCardProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "glass rounded-2xl p-4 text-center cursor-pointer transition-all relative overflow-hidden group",
        isCurrent && "ring-2 ring-peach-400 ring-offset-2 ring-offset-background",
        className
      )}
    >
      {isCurrent && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-peach-400 rounded-full flex items-center justify-center"
        >
          <Baby className="w-3 h-3 text-white" />
        </motion.div>
      )}
      <div className="text-2xl font-display font-bold gradient-text">{week}</div>
      <div className="text-xs text-muted-foreground mt-1">
        Trimester {trimester}
      </div>
      <div className="text-xs text-peach-500 mt-1 font-medium">{size}</div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
