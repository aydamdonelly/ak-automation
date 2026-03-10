"use client";

import { motion } from "framer-motion";
import { Counter, MagneticButton } from "./motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Animated mesh gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
          style={{ animation: "mesh-shift 20s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-pink/10 blur-[120px]"
          style={{ animation: "mesh-shift 25s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-accent-light/8 blur-[100px]"
          style={{ animation: "mesh-shift 18s ease-in-out infinite 5s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl pt-20">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-border px-5 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-fg-muted">Aktuell 2 Plätze frei</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0, 1] }}
            className="mb-6 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight"
          >
            Ich automatisiere Ihren{" "}
            <span className="gradient-text">zeitfressendsten Prozess</span>
            <br />
            — in 2 Wochen.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl"
          >
            KI-gestützte Prozessautomatisierung für deutsche KMUs.
            Festpreis. Messbares Ergebnis. Kein Risiko.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton
              href="#kontakt"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-fg px-10 text-[15px] font-medium text-bg"
            >
              <span className="relative z-10">Kostenloses Erstgespräch</span>
              <span className="absolute inset-0 bg-linear-to-r from-accent to-accent-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Kostenloses Erstgespräch
              </span>
            </MagneticButton>
            <a
              href="#loesung"
              className="inline-flex h-14 items-center justify-center rounded-full border border-border px-10 text-[15px] font-medium text-fg-muted transition-all hover:border-fg-dim hover:text-fg"
            >
              So funktioniert&apos;s
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3"
        >
          {[
            { value: 30, suffix: "h", label: "Zeitersparnis / Woche" },
            { value: 10, suffix: " Tage", label: "Bis zum Go-Live" },
            { value: 5000, prefix: "€", suffix: "", label: "Festpreis, netto" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-bg-elevated px-8 py-8"
            >
              <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                <Counter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </span>
              <span className="text-sm text-fg-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>
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
