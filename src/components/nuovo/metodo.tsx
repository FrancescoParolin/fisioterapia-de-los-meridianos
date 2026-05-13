"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    title: "Chiamata conoscitiva gratuita",
    duration: "20 min · Online",
    desc: "Ascolto la tua situazione, capiamo insieme se e come posso aiutarti. Nessun impegno, nessuna vendita.",
  },
  {
    n: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" d="M9 12h6M9 16h4M4 6h16M4 10h16" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
    title: "Valutazione integrata",
    duration: "Prima sessione",
    desc: "Analisi del corpo attraverso il massaggio + storia emotiva e biografica con la Biodescodificación. Una lettura completa.",
  },
  {
    n: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13V7m0 13l6-3m-6-10l6-3m0 13l5.447-2.724A1 1 0 0 0 21 16.382V5.618a1 1 0 0 0-1.447-.894L15 7" />
      </svg>
    ),
    title: "Percorso personalizzato",
    duration: "Sessioni individuali",
    desc: "Sessioni calibrate su di te — massaggio, Biodescodificación, o entrambi. Tu decidi il ritmo e la frequenza.",
  },
  {
    n: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" d="M12 3C8.5 3 6 6 6 9c0 4 3 6 6 9 3-3 6-5 6-9 0-3-2.5-6-6-6z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    title: "Il corpo trova il suo linguaggio",
    duration: "Risultati duraturi",
    desc: "Impari a leggere i segnali del tuo corpo. Il dolore non è nemico — è un messaggio che puoi finalmente capire.",
  },
];

export function NuovoMetodo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="metodo"
      style={{ background: "linear-gradient(160deg, #faf6ef 0%, #f2e8d8 100%)", padding: "6rem 0" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Come funziona
          </p>
          <h2 className="font-display leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Il metodo che unisce corpo e storia di vita.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6b5d52" }}>
            Non solo massaggio. Non solo ascolto. Un percorso integrato.
          </p>
        </motion.div>

        {/* Steps — vertical mobile, horizontal desktop */}
        <div className="relative">
          {/* Connector line — hidden mobile */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-[2.75rem] right-[2.75rem] h-px"
            style={{ background: "linear-gradient(to right, #7a8a6a, rgba(122,138,106,0.2))", opacity: 0.3 }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex lg:flex-col gap-6 lg:gap-5"
              >
                {/* Icon + number */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start shrink-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center border shrink-0 relative z-10"
                    style={{
                      background: "#faf6ef",
                      borderColor: "rgba(122,138,106,0.35)",
                      color: "#7a8a6a",
                    }}
                  >
                    {s.icon}
                  </div>
                  <span
                    className="font-display text-4xl lg:text-5xl leading-none"
                    style={{ color: "rgba(122,138,106,0.18)" }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.18em] mb-1.5" style={{ color: "#7a8a6a", opacity: 0.8 }}>
                    {s.duration}
                  </p>
                  <h3 className="font-display text-xl leading-tight mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 text-center text-sm"
          style={{ color: "rgba(107,93,82,0.55)" }}
        >
          Ogni percorso è unico. Partiamo sempre da un ascolto, non da un protocollo.
        </motion.p>
      </div>
    </section>
  );
}
