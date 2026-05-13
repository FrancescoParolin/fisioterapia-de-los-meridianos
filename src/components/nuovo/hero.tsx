"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function NuovoHero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Sezione hero"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet="/images/taconera-7.jpg" type="image/jpeg" />
          <img
            src="/images/taconera-7.jpg"
            alt="Sessione di massaggio terapeutico"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>
        {/* Gradient overlay — warm dark from bottom + top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(43,36,32,0.55) 0%, rgba(43,36,32,0.35) 40%, rgba(43,36,32,0.72) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <span
            className="text-xs uppercase tracking-[0.28em] px-4 py-1.5 rounded-full border"
            style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.08)" }}
          >
            Massaggio Terapeutico · Biodescodificación · Pamplona
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-display leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)", color: "#fff" }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.45, ease }}
        >
          Il tuo corpo sa dove fa male.
          <br />
          <em style={{ color: "rgba(255,255,255,0.75)", fontStyle: "italic" }}>
            Io ti aiuto a capire perché.
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg leading-relaxed max-w-2xl"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2.2vw, 1.2rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
        >
          Massaggi terapeutici e Biodescodificación: un percorso integrato
          per liberare il dolore dalla sua radice emotiva.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease }}
        >
          <a
            href="#prenota"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03] hover:shadow-xl active:scale-95"
            style={{ background: "#7a8a6a", color: "#fff" }}
            aria-label="Prenota la chiamata gratuita da 20 minuti"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Prenota la chiamata gratuita da 20 min
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Scopri come funziona
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" />
            </svg>
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs"
          style={{ color: "rgba(255,255,255,0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {["Nessun impegno", "100% gratuita", "Online o in presenza"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 uppercase tracking-[0.15em]">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 shrink-0" style={{ color: "#7a8a6a" }} aria-hidden="true">
                <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
              </svg>
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        aria-hidden="true"
      >
        <div
          className="w-6 h-9 rounded-full border flex items-start justify-center pt-2"
          style={{ borderColor: "rgba(255,255,255,0.25)" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
