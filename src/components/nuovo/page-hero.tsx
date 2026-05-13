"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export function PageHero({ label, title, subtitle, dark = false }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: dark
          ? "#2b2420"
          : "linear-gradient(160deg, #faf6ef 0%, #f0e8d5 100%)",
        paddingTop: "clamp(7rem, 16vh, 10rem)",
        paddingBottom: "clamp(3rem, 8vh, 5rem)",
        borderBottom: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid #e5d9c0",
      }}
    >
      {/* Decorative blob */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full"
        style={{
          background: dark
            ? "radial-gradient(circle, rgba(122,138,106,0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(122,138,106,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.p
          className="text-xs uppercase tracking-[0.28em] mb-5"
          style={{ color: "#7a8a6a" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          {label}
        </motion.p>

        <motion.h1
          className="font-display leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            color: dark ? "#faf6ef" : "#2b2420",
          }}
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-5 text-lg leading-relaxed max-w-2xl"
            style={{ color: dark ? "rgba(250,246,239,0.55)" : "#6b5d52" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
