"use client";

import { motion } from "framer-motion";
import { PREGNANCY_DURATION_WEEKS } from "@/constants";

interface BabyGrowthSVGProps {
  week: number;
  size?: number;
}

function getTrimester(week: number): 1 | 2 | 3 {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}

export function BabyGrowthSVG({ week, size = 200 }: BabyGrowthSVGProps) {
  const clamped = Math.max(4, Math.min(PREGNANCY_DURATION_WEEKS, week));
  const trimester = getTrimester(clamped);

  // Scale: week 4 = 0.12, week 40 = 1.0
  const scale = 0.12 + 0.88 * ((clamped - 4) / 36);
  const headR = 3 + 13 * ((clamped - 4) / 36);
  const opacity = trimester === 1 ? 0.7 : 1;

  // Baby position shifts: T1 high center, T2 middle, T3 lower (head-down)
  const babyCY = trimester === 1 ? 92 : trimester === 2 ? 100 : 108;
  const babyCX = 100;

  const bodyPath = (r: number, cy: number) => {
    const h = r * 3.2;
    const w = r * 1.6;
    return [
      `M ${babyCX - w * 0.3} ${cy + r * 0.6}`,
      `C ${babyCX - w * 0.5} ${cy + r * 1.2}, ${babyCX - w * 0.3} ${cy + h}, ${babyCX} ${cy + h}`,
      `C ${babyCX + w * 0.3} ${cy + h}, ${babyCX + w * 0.5} ${cy + r * 1.2}, ${babyCX + w * 0.3} ${cy + r * 0.6}`,
      "Z",
    ].join(" ");
  };

  const legPath = (r: number, cy: number) => {
    const flip = trimester === 3 ? -1 : 1;
    return [
      `M ${babyCX + r * 0.15} ${cy + r * 2.0}`,
      `C ${babyCX + r * 0.4} ${cy + r * 2.5}, ${babyCX + r * 0.8} ${cy + r * 2.8}, ${babyCX + r * 1.0 * flip} ${cy + r * 2.2}`,
      `C ${babyCX + r * 1.2 * flip} ${cy + r * 1.8}, ${babyCX + r * 0.6} ${cy + r * 1.6}, ${babyCX + r * 0.3} ${cy + r * 1.4}`,
    ].join(" ");
  };

  const armPath = (r: number, cy: number) => {
    return [
      `M ${babyCX - r * 0.2} ${cy + r * 1.0}`,
      `C ${babyCX - r * 0.6} ${cy + r * 1.2}, ${babyCX - r * 0.8} ${cy + r * 1.0}, ${babyCX - r * 0.7} ${cy + r * 0.6}`,
    ].join(" ");
  };

  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="select-none"
    >
      <defs>
        <radialGradient id="womb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(248, 176, 122, 0.15)" />
          <stop offset="60%" stopColor="rgba(167, 122, 238, 0.08)" />
          <stop offset="100%" stopColor="rgba(248, 176, 122, 0.02)" />
        </radialGradient>
        <radialGradient id="baby-grad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f8b07a" />
          <stop offset="100%" stopColor="#e87a4a" />
        </radialGradient>
        <radialGradient id="womb-ring" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="transparent" />
          <stop offset="85%" stopColor="rgba(248, 176, 122, 0.12)" />
          <stop offset="95%" stopColor="rgba(167, 122, 238, 0.08)" />
          <stop offset="100%" stopColor="rgba(248, 176, 122, 0.04)" />
        </radialGradient>
        <filter id="soft-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer womb circle */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(248, 176, 122, 0.15)" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="100" cy="100" r="86" fill="url(#womb-glow)" />
      <circle cx="100" cy="100" r="86" fill="url(#womb-ring)" />

      {/* Amniotic fluid particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={70 + Math.sin((i / 8) * Math.PI * 2) * 45 + (trimester === 3 ? 10 : 0)}
          cy={70 + Math.cos((i / 8) * Math.PI * 2) * 40 + (trimester === 1 ? -8 : 0)}
          r={1.5 + Math.sin(i * 1.5) * 0.8}
          fill="rgba(248, 176, 122, 0.25)"
          animate={{
            opacity: [0.15, 0.4, 0.15],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Sparkle stars - more visible in T2/T3 */}
      {trimester >= 2 && Array.from({ length: 3 }).map((_, i) => (
        <motion.text
          key={`star-${i}`}
          x={55 + i * 35}
          y={40 + (i % 2) * 12}
          fontSize="8"
          fill="rgba(167, 122, 238, 0.2)"
          animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
        >
          ✦
        </motion.text>
      ))}

      {/* Umbilical cord (simple curved line) */}
      <motion.path
        d={`M ${babyCX + headR * 0.2} ${babyCY - headR * 1.5} C ${babyCX + 30} ${babyCY - 45}, ${babyCX + 45} ${babyCY - 30}, ${babyCX + 50} ${babyCY - 10}`}
        stroke="rgba(248, 176, 122, 0.2)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        animate={{ pathLength: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* BABY GROUP - scales based on week */}
      <motion.g
        animate={{ scale, opacity }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{ originX: "100px", originY: `${babyCY}px` }}
      >
        {/* Body shadow */}
        <ellipse
          cx={babyCX + 2}
          cy={babyCY + 5}
          rx={headR * 1.5}
          ry={headR * 2}
          fill="rgba(0,0,0,0.04)"
          filter="url(#soft-glow)"
        />

        {/* Body */}
        <path
          d={bodyPath(headR, babyCY)}
          fill="url(#baby-grad)"
          opacity={0.9}
        />

        {/* Legs */}
        <path
          d={legPath(headR, babyCY)}
          stroke="#e87a4a"
          strokeWidth={headR * 0.3}
          strokeLinecap="round"
          fill="none"
          opacity={0.7}
        />

        {/* Arms */}
        {trimester >= 2 && (
          <path
            d={armPath(headR, babyCY)}
            stroke="#e87a4a"
            strokeWidth={headR * 0.25}
            strokeLinecap="round"
            fill="none"
            opacity={0.6}
          />
        )}

        {/* Head */}
        <circle
          cx={babyCX}
          cy={babyCY}
          r={headR}
          fill="url(#baby-grad)"
        />

        {/* Face details - appear in T2/T3 */}
        {trimester >= 2 && (
          <>
            <motion.circle
              cx={babyCX - headR * 0.3}
              cy={babyCY - headR * 0.15}
              r={headR * 0.1}
              fill="rgba(180, 80, 40, 0.4)"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx={babyCX + headR * 0.1}
              cy={babyCY - headR * 0.15}
              r={headR * 0.1}
              fill="rgba(180, 80, 40, 0.4)"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
            />
            {/* Tiny smile */}
            <path
              d={`M ${babyCX - headR * 0.15} ${babyCY + headR * 0.15} Q ${babyCX} ${babyCY + headR * 0.35}, ${babyCX + headR * 0.15} ${babyCY + headR * 0.15}`}
              stroke="rgba(180, 80, 40, 0.3)"
              strokeWidth={headR * 0.06}
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Heartbeat pulse ring - T2/T3 */}
        {trimester >= 2 && (
          <motion.circle
            cx={babyCX + headR * 0.7}
            cy={babyCY - headR * 1.2}
            r={headR * 0.2}
            fill="none"
            stroke="rgba(248, 100, 100, 0.25)"
            strokeWidth="1.5"
            animate={{
              r: [headR * 0.2, headR * 0.5, headR * 0.2],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Small "heart" near baby - T3 emotional touch */}
        {trimester === 3 && (
          <motion.text
            x={babyCX + headR * 1.2}
            y={babyCY - headR * 1.5}
            fontSize="6"
            fill="rgba(248, 100, 100, 0.3)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ♥
          </motion.text>
        )}
      </motion.g>

      {/* Week label at bottom */}
      <text
        x="100"
        y="185"
        textAnchor="middle"
        fontSize="9"
        fill="rgba(167, 122, 238, 0.25)"
        fontFamily="var(--font-plus-jakarta), system-ui, sans-serif"
        fontWeight="600"
      >
        Week {clamped}
      </text>
    </motion.svg>
  );
}
