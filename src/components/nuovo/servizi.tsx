"use client";

import { motion } from "framer-motion";

const servizi = [
  {
    badge: "Massaggio Terapeutico",
    title: "Massaggio Terapeutico",
    perChi: "Per chi sente tensione fisica, dolori muscolari, contratture",
    include: [
      "Sessione individuale 60 min",
      "Analisi posturale iniziale",
      "Tecniche su misura per la tua situazione",
      "Consigli post-sessione personalizzati",
    ],
    durata: "60 minuti",
    prezzo: "€[PREZZO_MASSAGGIO]",
    cta: "Scopri di più",
    highlight: false,
  },
  {
    badge: "Biodescodificación",
    title: "Sessione di Biodescodificación",
    perChi: "Per chi vuole capire l'origine emotiva dei propri sintomi",
    include: [
      "Sessione individuale 60 min",
      "Analisi del conflitto biologico",
      "Lettura del sintomo come messaggio",
      "Strumenti di elaborazione personale",
    ],
    durata: "60 minuti",
    prezzo: "€[PREZZO_BIODESCO]",
    cta: "Scopri di più",
    highlight: false,
  },
  {
    badge: "Più scelto",
    title: "Percorso Integrato",
    perChi: "Per chi vuole lavorare su corpo e mente insieme",
    include: [
      "Massaggio terapeutico",
      "Sessione Biodescodificación integrata",
      "Piano di percorso personalizzato",
      "Supporto tra una sessione e l'altra",
    ],
    durata: "90 minuti",
    prezzo: "€[PREZZO_INTEGRATO]",
    cta: "Scopri di più",
    highlight: true,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true">
      <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
    </svg>
  );
}

export function NuovoServizi() {
  return (
    <section id="servizi" style={{ background: "#faf6ef", padding: "6rem 0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Servizi
          </p>
          <h2 className="font-display leading-tight mb-3" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Scegli da dove iniziare.
          </h2>
          <p className="text-base" style={{ color: "#6b5d52" }}>
            Ogni percorso parte da una chiamata gratuita.
          </p>
        </motion.div>

        {/* 3 service cards + 1 free CTA card */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {servizi.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-2xl border overflow-hidden"
              style={{
                background: s.highlight ? "#2b2420" : "#fff",
                borderColor: s.highlight ? "#2b2420" : "#e5d9c0",
              }}
            >
              {/* Badge */}
              <div
                className="px-6 pt-6 pb-0"
              >
                <span
                  className="text-xs uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                  style={{
                    background: s.highlight ? "rgba(122,138,106,0.25)" : "rgba(122,138,106,0.1)",
                    color: s.highlight ? "#b5c4a5" : "#7a8a6a",
                  }}
                >
                  {s.badge}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6 gap-5">
                <div>
                  <h3
                    className="font-display text-2xl leading-tight mb-2"
                    style={{ color: s.highlight ? "#fff" : "#2b2420" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: s.highlight ? "rgba(255,255,255,0.5)" : "#6b5d52" }}>
                    {s.perChi}
                  </p>
                </div>

                {/* Includes */}
                <ul className="flex flex-col gap-2.5">
                  {s.include.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: s.highlight ? "rgba(255,255,255,0.7)" : "#2b2420" }}
                    >
                      <span style={{ color: "#7a8a6a" }}><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price + duration */}
                <div
                  className="mt-auto pt-5 border-t flex items-end justify-between"
                  style={{ borderColor: s.highlight ? "rgba(255,255,255,0.1)" : "#e5d9c0" }}
                >
                  <div>
                    <div
                      className="font-display text-3xl leading-none"
                      style={{ color: s.highlight ? "#fff" : "#2b2420" }}
                    >
                      {s.prezzo}
                    </div>
                    <div className="text-xs mt-1" style={{ color: s.highlight ? "rgba(255,255,255,0.35)" : "#6b5d52" }}>
                      {s.durata}
                    </div>
                  </div>
                  <a
                    href="#prenota"
                    className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-4 py-2 transition-all hover:opacity-80 active:scale-95"
                    style={{
                      background: s.highlight ? "#7a8a6a" : "rgba(122,138,106,0.12)",
                      color: s.highlight ? "#fff" : "#7a8a6a",
                    }}
                    aria-label={`${s.cta} — ${s.title}`}
                  >
                    {s.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chiamata gratuita — special card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 border"
          style={{ background: "rgba(122,138,106,0.07)", borderColor: "rgba(122,138,106,0.25)" }}
          id="prenota"
        >
          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full font-semibold"
                style={{ background: "#7a8a6a", color: "#fff" }}
              >
                Inizia da qui · Gratuito
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3">
              Chiamata Conoscitiva
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b5d52" }}>
              20 minuti per capire se questo percorso fa per te. Mi racconti la tua situazione — io ti dico onestamente se e come posso aiutarti.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "20 minuti con me",
                "Ascolto della tua situazione",
                "Risposta alle tue domande",
                "Nessun impegno di acquisto",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#2b2420" }}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="shrink-0 flex flex-col items-center gap-4 text-center">
            <div className="font-display text-5xl leading-none" style={{ color: "#7a8a6a" }}>
              Gratis
            </div>
            <div className="text-xs" style={{ color: "#6b5d52" }}>20 min · Online o telefono</div>
            <a
              href="[LINK_CALENDLY]"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03] hover:shadow-lg active:scale-95"
              style={{ background: "#7a8a6a", color: "#fff" }}
              aria-label="Prenota la chiamata gratuita da 20 minuti"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Prenota la chiamata gratuita
            </a>
            <p className="text-xs" style={{ color: "#6b5d52", opacity: 0.6 }}>
              Rispondo entro 24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
