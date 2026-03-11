"use client";

import { motion } from "framer-motion";
import { Counter, MagneticButton } from "./motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Aurora background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base orbs — slow drift */}
        <div
          className="absolute left-1/3 top-1/4 h-150 w-150 rounded-full bg-accent/15 blur-[150px]"
          style={{ animation: "mesh-shift 20s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-125 w-125 rounded-full bg-accent-pink/10 blur-[150px]"
          style={{ animation: "mesh-shift 25s ease-in-out infinite reverse" }}
        />

        {/* Aurora streaks */}
        <div
          className="aurora-layer top-[-20%]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.12) 20%, rgba(168,85,247,0.18) 40%, rgba(236,72,153,0.12) 60%, transparent 100%)",
            animation: "aurora-drift 12s ease-in-out infinite, aurora-hue 20s ease infinite",
          }}
        />
        <div
          className="aurora-layer top-[-10%]"
          style={{
            background: "linear-gradient(90deg, transparent 10%, rgba(167,139,250,0.1) 30%, rgba(124,58,237,0.15) 50%, rgba(236,72,153,0.08) 70%, transparent 90%)",
            animation: "aurora-drift-2 15s ease-in-out infinite, aurora-hue 25s ease infinite 5s",
          }}
        />
        <div
          className="aurora-layer top-[5%]"
          style={{
            background: "linear-gradient(90deg, transparent 5%, rgba(236,72,153,0.08) 25%, rgba(124,58,237,0.12) 45%, rgba(167,139,250,0.06) 65%, transparent 95%)",
            animation: "aurora-drift 18s ease-in-out infinite 3s",
          }}
        />

        {/* Radial fade from bottom to keep text area readable */}
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/80 to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 lg:px-10">
        <div className="mx-auto w-full max-w-350 pt-24">
          {/* Status line — terminal style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex items-center gap-3 font-mono text-sm"
          >
            <span className="text-accent">$</span>
            <span className="text-fg-muted">status</span>
            <span className="text-fg-dim">—</span>
            <span className="text-emerald-400">accepting clients</span>
            <span
              className="inline-block h-4 w-[2px] bg-fg"
              style={{ animation: "type-cursor 1s steps(1) infinite" }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0, 1] }}
            className="mb-8 max-w-5xl text-[clamp(2.25rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            Ich automatisiere{" "}
            <span className="gradient-text">Ihren zeitfressendsten Prozess</span>
            . In 2 Wochen.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 max-w-2xl text-base leading-relaxed text-fg-muted sm:mb-12 sm:text-xl"
          >
            KI-gestützte Prozessautomatisierung für deutsche KMUs.
            Festpreis. Messbares Ergebnis. Kein Risiko.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4"
          >
            <MagneticButton
              href="https://calendly.com/kahirov/erstgespraech"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-fg px-8 text-sm font-medium text-bg sm:h-14 sm:px-10 sm:text-[15px]"
            >
              <span className="relative z-10">Kostenloses Erstgespräch</span>
              <span className="absolute inset-0 bg-linear-to-r from-accent to-accent-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Kostenloses Erstgespräch
              </span>
            </MagneticButton>
            <a
              href="#loesung"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-medium text-fg-muted transition-all hover:border-fg-dim hover:text-fg sm:h-14 sm:px-10 sm:text-[15px]"
            >
              So funktioniert&apos;s
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-24 grid grid-cols-1 border-t border-border sm:grid-cols-3"
          >
            {[
              { value: 30, suffix: "h", label: "Zeitersparnis / Woche" },
              { value: 10, suffix: " Tage", label: "Bis zum Go-Live" },
              { value: 5000, prefix: "€", suffix: "", label: "Festpreis, netto" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 ${i > 0 ? "border-t border-border sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
              >
                <span className="block text-4xl font-bold tracking-tight sm:text-5xl">
                  <Counter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </span>
                <span className="mt-2 block text-sm text-fg-dim">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-fg-dim">Scroll</span>
          <div className="h-8 w-[1px] bg-linear-to-b from-fg-dim to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
