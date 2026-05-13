"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-3 5-3 8s1.5 5 3 5 3-2 3-5-1.5-5-3-8z" />
        <path strokeLinecap="round" d="M9 19c-2 0-4-1-4-3M15 19c2 0 4-1 4-3" />
        <path strokeLinecap="round" d="M12 8v3M10.5 13l3 0" />
      </svg>
    ),
    title: "Dolori alla schiena che tornano sempre",
    text: "Hai fatto massaggi, fisioterapia, riposo. Il dolore passa… e poi ritorna. E nessuno ti spiega perché.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5C10 4 6 4 5 7c-1 3 1 6 7 9 6-3 8-6 7-9-1-3-5-3-7-.5z" />
        <path strokeLinecap="round" d="M12 6.5v9" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Tensioni muscolari legate allo stress",
    text: "Collo bloccato prima di una riunione importante. Spalle che si alzano da sole sotto pressione. Il corpo parla.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
        <path strokeLinecap="round" d="M8 16s1-2 4-2 4 2 4 2" />
      </svg>
    ),
    title: "Ansia che senti nel corpo",
    text: "Oppressione al petto, nodo alla gola, stomaco in subbuglio. Emozioni che non riesci a elaborare mentalmente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
        <path strokeLinecap="round" d="M8 12h.01M12 12h.01M16 12h.01" />
        <path strokeLinecap="round" d="M7 8l.5-3M17 8l-.5-3" />
      </svg>
    ),
    title: "Stanchezza cronica senza causa apparente",
    text: "Dormi, riposi, ma sei sempre esausto/a. Il corpo consuma energie per gestire qualcosa di irrisolto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path strokeLinecap="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Sensazione di blocco inspiegabile",
    text: "Sai che qualcosa non va ma non riesci a mettere a fuoco cosa. Il corpo lo sa prima della mente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" d="M12 3L4 7v5c0 5 4 9 8 10 4-1 8-5 8-10V7l-8-4z" />
        <path strokeLinecap="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Traumi o esperienze difficili nel passato",
    text: '"Ho superato tutto" — eppure il corpo non dimentica. La memoria è anche muscolare, e a volte riemerge.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
        <path strokeLinecap="round" d="M11 8v3M11 14h.01" />
      </svg>
    ),
    title: "Dolori senza diagnosi chiara",
    text: "Gli esami sono negativi, i medici non trovano nulla. Ma il dolore è reale. Forse la causa è altrove.",
  },
];

function Card({ card, i }: { card: typeof cards[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 rounded-2xl border p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
      style={{ background: "#fff", borderColor: "#e5d9c0", color: "#2b2420" }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: "rgba(122,138,106,0.1)", color: "#7a8a6a" }}
      >
        {card.icon}
      </div>
      <h3 className="font-display text-xl leading-tight">{card.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>{card.text}</p>
    </motion.div>
  );
}

export function NuovoProblemi() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="problemi" style={{ background: "#f2ead9", padding: "6rem 0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Il punto di partenza
          </p>
          <h2 className="font-display leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Riconosci qualcuno di questi problemi?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6b5d52" }}>
            Non è solo nel tuo corpo. Ogni dolore ha una storia.
          </p>
        </motion.div>

        {/* Grid 3 cols */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {cards.map((card, i) => (
            <Card key={card.title} card={card} i={i} />
          ))}
        </div>

        {/* Card 8 — special CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between"
          style={{ background: "#7a8a6a" }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              Se ti sei riconosciuto/a
            </p>
            <h3 className="font-display text-2xl md:text-3xl leading-tight" style={{ color: "#fff" }}>
              Sei nel posto giusto.
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              La chiamata gratuita da 20 minuti è il tuo primo passo — senza impegno.
            </p>
          </div>
          <a
            href="#prenota"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.03] active:scale-95"
            style={{ background: "#fff", color: "#7a8a6a" }}
            aria-label="Prenota la chiamata gratuita da 20 minuti"
          >
            Prenota ora — è gratis
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
