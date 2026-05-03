"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  label: string;
  h1: string;
  h1em: string;
  subtitle: string;
  cta: string;
  stat1: string;
  stat2: string;
  stat3: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function BiodescHero({ label, h1, h1em, subtitle, cta, stat1, stat2, stat3 }: Props) {
  return (
    <section
      className="relative overflow-hidden border-b border-border/60"
      style={{ minHeight: "100svh", background: "#fdf9f3" }}
    >
      {/* warm radial blush from top-right */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 85% -10%, #f0dfc0 0%, transparent 60%)",
        }}
      />
      {/* subtle sage tint bottom-left */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at -5% 110%, oklch(0.52 0.065 130 / 0.08) 0%, transparent 60%)",
        }}
      />
      {/* grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.022,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 flex flex-col justify-center" style={{ minHeight: "100svh", paddingTop: "6rem", paddingBottom: "4rem" }}>
        {/* label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-10"
        >
          <span
            className="text-xs uppercase tracking-[0.28em] px-4 py-1.5 rounded-full border"
            style={{
              color: "oklch(0.52 0.065 130)",
              borderColor: "oklch(0.52 0.065 130 / 0.3)",
              background: "oklch(0.52 0.065 130 / 0.07)",
            }}
          >
            {label}
          </span>
        </motion.div>

        {/* main headline — line by line */}
        <h1
          className="font-display leading-[0.97] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)" }}
        >
          <motion.span
            className="block"
            style={{ color: "#2b2420" }}
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
          >
            {h1}
          </motion.span>
          <motion.em
            className="block"
            style={{ color: "oklch(0.52 0.065 130)", fontStyle: "italic" }}
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            {h1em}
          </motion.em>
        </h1>

        {/* animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease }}
          className="mb-8"
          style={{
            height: "1px",
            width: "10rem",
            background: "oklch(0.52 0.065 130 / 0.4)",
            transformOrigin: "left",
          }}
        />

        {/* subtitle + CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-8 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.2, ease }}
            className="text-lg leading-relaxed flex-1"
            style={{ color: "oklch(from var(--color-foreground) l c h / 0.55)" }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.45, ease }}
            className="shrink-0"
          >
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-background text-sm font-medium hover:bg-foreground/85 transition-all hover:shadow-lg active:scale-95"
            >
              {cta}
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* trust row — bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-6 right-6 flex flex-wrap gap-x-8 gap-y-2 text-xs"
          style={{ color: "oklch(from var(--color-foreground) l c h / 0.35)" }}
        >
          {[stat1, stat2, stat3].map((s, i) => (
            <span key={i} className="flex items-center gap-2 uppercase tracking-[0.15em]">
              <span className="w-1 h-1 rounded-full inline-block" style={{ background: "oklch(0.52 0.065 130 / 0.6)" }} />
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
