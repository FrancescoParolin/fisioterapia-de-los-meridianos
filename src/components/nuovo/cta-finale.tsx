"use client";

import { motion } from "framer-motion";

export function NuovoCtaFinale() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #5a6e4a 0%, #7a8a6a 50%, #8a9a7a 100%)",
        padding: "7rem 0",
      }}
      aria-label="Prenota la chiamata gratuita"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7"
        >
          {/* Eyebrow */}
          <span
            className="text-xs uppercase tracking-[0.28em] px-4 py-1.5 rounded-full border"
            style={{ color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.07)" }}
          >
            Primo passo — Gratuito
          </span>

          {/* Headline */}
          <h2
            className="font-display leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#fff" }}
          >
            Inizia. È gratis.
            <br />
            Dura 20 minuti.
          </h2>

          {/* Subtext */}
          <p
            className="text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Non ti chiedo di credere a nulla. Ti chiedo solo di raccontarmi
            com&apos;è la tua situazione. Poi decidiamo insieme.
          </p>

          {/* CTA */}
          <a
            href="[LINK_CALENDLY]"
            className="inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-semibold transition-all hover:scale-[1.04] hover:shadow-2xl active:scale-95"
            style={{ background: "#fff", color: "#7a8a6a" }}
            aria-label="Prenota la chiamata gratuita da 20 minuti"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Prenota la tua chiamata gratuita
          </a>

          {/* Sub-note */}
          <p className="text-xs flex flex-wrap justify-center gap-x-5 gap-y-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span>Nessun impegno</span>
            <span>·</span>
            <span>Rispondo entro 24h</span>
            <span>·</span>
            <span>Online o telefono</span>
          </p>

          {/* Legal disclaimer */}
          <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            Queste pratiche non sostituiscono il parere medico professionale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
