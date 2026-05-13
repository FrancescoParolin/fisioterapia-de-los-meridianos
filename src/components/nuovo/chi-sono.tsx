"use client";

import { motion } from "framer-motion";

export function NuovoChiSono() {
  return (
    <section
      id="chi-sono"
      style={{ background: "#2b2420", padding: "6rem 0" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="aspect-[3/4] rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {/* Placeholder foto — sostituire con img reale */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "rgba(122,138,106,0.12)" }}
              >
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(122,138,106,0.2)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10" style={{ color: "rgba(122,138,106,0.6)" }}>
                      <path strokeLinecap="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>
                    [FOTO_PROFILO]
                  </p>
                </div>
              </div>
            </div>

            {/* Floating credential badge */}
            <div
              className="absolute -bottom-6 -right-4 md:right-auto md:-left-4 rounded-xl px-5 py-4 shadow-xl"
              style={{ background: "#7a8a6a" }}
            >
              <div className="font-display text-2xl leading-none" style={{ color: "#fff" }}>
                [ANNI]
              </div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em" }}>
                anni di esperienza
              </div>
            </div>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 md:pt-0"
          >
            <p className="text-xs uppercase tracking-[0.28em] mb-5" style={{ color: "#7a8a6a" }}>
              Chi sono
            </p>
            <h2
              className="font-display leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#faf6ef" }}
            >
              [NOME_PROFESSIONISTA]
            </h2>

            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(250,246,239,0.65)" }}>
              [TESTO_BIO — inserisci la tua storia professionale, il percorso formativo, e cosa ti ha portato a unire massaggio e Biodescodificación.]
            </p>

            {/* Credentials grid */}
            <div
              className="grid grid-cols-2 gap-px mt-8 mb-8 rounded-xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              {[
                { label: "Sede", value: "📍 Pamplona (ES)" },
                { label: "Online", value: "🌐 Videochiamata" },
                { label: "Formazione", value: "🎓 [FORMAZIONE]" },
                { label: "Specializzazione", value: "🧬 [SPECIALIZZAZIONE]" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="px-5 py-4"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="text-xs mb-1" style={{ color: "rgba(250,246,239,0.35)", letterSpacing: "0.08em" }}>
                    {c.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "rgba(250,246,239,0.8)" }}>
                    {c.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="border-l-2 pl-5 italic text-base leading-relaxed"
              style={{ borderColor: "#7a8a6a", color: "rgba(250,246,239,0.55)" }}
            >
              "[CITAZIONE — perché ho scelto di unire massaggio terapeutico e Biodescodificación, e cosa questo cambia per le persone che seguo.]"
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
