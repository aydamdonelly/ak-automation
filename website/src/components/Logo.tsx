"use client";

import { motion, type Variants } from "framer-motion";

interface LogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export default function Logo({ size = 40, animate = true, className = "" }: LogoProps) {
  const cubicBezier: [number, number, number, number] = [0.25, 0.4, 0, 1];

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.12, duration: 0.6, ease: cubicBezier },
        opacity: { delay: i * 0.12, duration: 0.01 },
      },
    }),
  };

  return (
    <motion.svg
      viewBox="0 0 48 40"
      fill="none"
      width={size}
      height={(size / 48) * 40}
      className={className}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      {/* A — left diagonal leg */}
      <motion.path
        d="M3 37L17 3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={draw}
        custom={0}
      />
      {/* Shared vertical — A right side + K spine */}
      <motion.path
        d="M17 3V37"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      {/* A — crossbar */}
      <motion.path
        d="M9 24H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      {/* K — upper arm */}
      <motion.path
        d="M17 24L36 3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={draw}
        custom={3}
      />
      {/* K — lower leg */}
      <motion.path
        d="M17 24L38 37"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={draw}
        custom={4}
      />
      {/* Accent dot */}
      <motion.circle
        cx="43"
        cy="37"
        r="2.5"
        fill="url(#logo-gradient)"
        initial={animate ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-pink)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
