"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LampContainer } from "@/components/ui/lamp";

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

const wordVariant = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 1.1 + i * 0.1,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function BiodescHero({ label, h1, h1em, subtitle, cta, stat1, stat2, stat3 }: Props) {
  const words = h1.split(" ");

  return (
    <LampContainer>
      {/* label pill */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="inline-block text-xs uppercase tracking-[0.28em] mb-8 px-4 py-1.5 rounded-full border"
        style={{
          color: "oklch(0.52 0.065 130)",
          borderColor: "oklch(0.52 0.065 130 / 0.35)",
          background: "oklch(0.52 0.065 130 / 0.1)",
        }}
      >
        {label}
      </motion.span>

      {/* main headline — word by word blur-reveal */}
      <h1 className="font-display text-center leading-[1.02] tracking-tight mb-4" style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariant}
            initial="hidden"
            animate="visible"
            className="inline-block mr-[0.25em]"
            style={{ color: "#faf6ef" }}
          >
            {word}
          </motion.span>
        ))}
        <br />
        {/* italic em — delayed after main words */}
        <motion.em
          initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{
            delay: 1.1 + words.length * 0.1 + 0.2,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="italic not-italic"
          style={{ color: "oklch(0.52 0.065 130)", fontStyle: "italic" }}
        >
          {h1em}
        </motion.em>
      </h1>

      {/* subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 + words.length * 0.1 + 0.55, duration: 0.8, ease: "easeOut" }}
        className="text-lg md:text-xl text-center leading-relaxed mb-10 max-w-lg"
        style={{ color: "rgba(250, 246, 239, 0.5)" }}
      >
        {subtitle}
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 + words.length * 0.1 + 0.85, duration: 0.7, ease: "easeOut" }}
      >
        <Link
          href="/prenota"
          className="inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-base font-medium transition-all hover:scale-105 hover:shadow-xl active:scale-100"
          style={{
            background: "oklch(0.52 0.065 130)",
            color: "#faf6ef",
            boxShadow: "0 0 40px oklch(0.52 0.065 130 / 0.35)",
          }}
        >
          {cta}
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </motion.div>

      {/* trust row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 + words.length * 0.1 + 1.2, duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm mt-12"
        style={{ color: "rgba(250, 246, 239, 0.3)" }}
      >
        {[stat1, stat2, stat3].map((s, i) => (
          <span key={i} className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "oklch(0.52 0.065 130 / 0.7)" }}
            />
            {s}
          </span>
        ))}
      </motion.div>
    </LampContainer>
  );
}
