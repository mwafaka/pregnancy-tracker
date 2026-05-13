"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingGradientProps {
  className?: string;
  color1?: string;
  color2?: string;
  size?: "sm" | "md" | "lg";
  speed?: "normal" | "slow";
}

export function FloatingGradient({
  className,
  color1 = "rgba(248, 176, 122, 0.3)",
  color2 = "rgba(167, 122, 238, 0.3)",
  size = "lg",
  speed = "normal",
}: FloatingGradientProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <motion.div
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: speed === "slow" ? 12 : 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "floating-gradient",
        sizeClasses[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${color1}, ${color2} 70%, transparent)`,
      }}
      aria-hidden="true"
    />
  );
}
