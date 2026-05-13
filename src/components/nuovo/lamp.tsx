"use client";

import { motion } from "framer-motion";
import React from "react";

const BG = "#161210";
const SAGE = "oklch(0.52 0.065 130)";
const AMBER = "oklch(0.65 0.12 70)";

export function LampContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex flex-col items-center justify-start overflow-hidden w-full border-b border-white/5"
      style={{ background: BG, minHeight: "100svh" }}
    >
      {/* ── beam plane ── */}
      <div
        className="relative w-full flex items-end justify-center"
        style={{ height: "52vh", transform: "scaleY(1.2)", transformOrigin: "bottom" }}
      >
        {/* left beam */}
        <motion.div
          initial={{ opacity: 0.2, width: "12rem" }}
          animate={{ opacity: 1, width: "32rem" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute inset-auto right-1/2 overflow-hidden"
          style={{ height: "100%", bottom: 0 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 70deg at center top, ${SAGE} 0%, transparent 55%)`,
            }}
          />
          {/* inner edge fade */}
          <div className="absolute inset-y-0 left-0 w-20" style={{ background: `linear-gradient(to right, ${BG}, transparent)` }} />
          <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
        </motion.div>

        {/* right beam */}
        <motion.div
          initial={{ opacity: 0.2, width: "12rem" }}
          animate={{ opacity: 1, width: "32rem" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute inset-auto left-1/2 overflow-hidden"
          style={{ height: "100%", bottom: 0 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 290deg at center top, transparent 45%, ${SAGE} 100%)`,
            }}
          />
          <div className="absolute inset-y-0 right-0 w-20" style={{ background: `linear-gradient(to left, ${BG}, transparent)` }} />
          <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
        </motion.div>

        {/* center amber orb (warm healing light) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 0.75, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
          className="absolute rounded-full blur-3xl"
          style={{
            bottom: "-1.5rem",
            width: "18rem",
            height: "9rem",
            background: AMBER,
          }}
        />

        {/* tight center glow */}
        <motion.div
          initial={{ width: "3rem", opacity: 0 }}
          animate={{ width: "8rem", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="absolute rounded-full blur-xl"
          style={{
            bottom: "0",
            height: "3rem",
            background: "white",
            opacity: 0.6,
          }}
        />

        {/* horizontal line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent 5%, ${SAGE} 35%, white 50%, ${SAGE} 65%, transparent 95%)`,
          }}
        />

        {/* floor fade */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: "55%", background: `linear-gradient(to top, ${BG}, transparent)`, zIndex: 10 }}
        />
      </div>

      {/* ── content ── */}
      <div className="relative w-full flex flex-col items-center px-6 -mt-20 pb-24">
        {children}
      </div>
    </div>
  );
}
