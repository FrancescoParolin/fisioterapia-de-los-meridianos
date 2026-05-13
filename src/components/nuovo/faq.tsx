"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Cos'è esattamente la Biodescodificación?",
    a: "La Biodescodificación è un approccio terapeutico complementare che studia come le esperienze emotivi vissuti si manifestano nel corpo sotto forma di sintomi fisici. Ogni organo, ogni zona del corpo ha una corrispondenza con un tipo di conflitto emotivo o biografico specifico. Lavorare sulla radice del sintomo — e non solo sul sintomo — permette spesso di ottenere risultati più duraturi.",
  },
  {
    q: "È una terapia medica riconosciuta?",
    a: "La Biodescodificación è una disciplina complementare e non sostituisce in alcun modo una diagnosi medica o un trattamento prescritto dal medico. Ti consiglio sempre di affiancarla alle cure del tuo medico di riferimento. Le sessioni sono uno spazio di ascolto e consapevolezza, non un intervento clinico.",
  },
  {
    q: "Come funziona la chiamata gratuita da 20 minuti?",
    a: "È una chiamata online (video o telefonica) in cui mi racconti la tua situazione. Non è una sessione terapeutica: è un incontro per capire insieme se e come posso aiutarti. Ti faccio alcune domande, rispondo alle tue, e ti dico onestamente se il mio approccio è adatto alla tua situazione. Nessun impegno.",
  },
  {
    q: "Posso fare le sessioni online?",
    a: "Sì. Le sessioni di Biodescodificación si svolgono comodamente online via videochiamata. Il massaggio terapeutico richiede invece la presenza fisica presso lo studio a Pamplona. Il Percorso Integrato può essere strutturato in modo misto, in base alle tue esigenze.",
  },
  {
    q: "Quanto dura un percorso?",
    a: "Dipende dalla situazione individuale — non esiste una risposta uguale per tutti. Alcune persone notano cambiamenti già dopo 2-3 sessioni. Un percorso standard è di 6-10 sessioni nell'arco di 2-3 mesi. Ne parliamo nella chiamata gratuita, dove posso darti una stima più precisa dopo averti ascoltato.",
  },
  {
    q: "Non ho mai sentito parlare di Biodescodificación. Da dove inizio?",
    a: "Dalla chiamata gratuita, sempre. Non hai bisogno di conoscere nulla in anticipo né di avere aspettative particolari. Ti spiego tutto durante i 20 minuti insieme, in modo semplice e senza linguaggio esoterico.",
  },
  {
    q: "Che differenza c'è tra il tuo approccio e un massaggio classico?",
    a: "Un massaggio classico lavora principalmente sul sintomo fisico — la contrattura, la tensione, il dolore. Il mio approccio integrato lavora anche sulla causa: perché quel dolore è lì, cosa lo mantiene nel tempo, e cosa il tuo corpo sta cercando di comunicarti. Non sostituisce il massaggio tradizionale, lo completa.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border-b"
      style={{ borderColor: "#e5d9c0" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
        aria-expanded={isOpen}
        style={{ color: "#2b2420" }}
      >
        <span className="font-display text-lg leading-snug pr-4">{q}</span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={{
            background: isOpen ? "#7a8a6a" : "rgba(122,138,106,0.1)",
            color: isOpen ? "#fff" : "#7a8a6a",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1z" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="text-sm leading-relaxed pb-6 pr-12"
              style={{ color: "#6b5d52" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NuovoFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#faf6ef", padding: "6rem 0" }}>
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Domande frequenti
          </p>
          <h2 className="font-display leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Hai dubbi? Rispondo qui.
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Disclaimer medico */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-xs text-center leading-relaxed"
          style={{ color: "rgba(107,93,82,0.5)" }}
        >
          ⚕️ Queste pratiche NON sostituiscono il parere medico professionale.
          Affianca sempre i nostri percorsi al tuo medico di riferimento.
        </motion.p>
      </div>
    </section>
  );
}
