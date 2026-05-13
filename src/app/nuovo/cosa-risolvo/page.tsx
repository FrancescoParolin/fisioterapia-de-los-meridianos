import type { Metadata } from "next";
import { NuovoNav } from "@/components/nuovo/nav";
import { PageHero } from "@/components/nuovo/page-hero";
import { NuovoProblemi } from "@/components/nuovo/problemi";
import { NuovoCtaFinale } from "@/components/nuovo/cta-finale";
import { NuovoFooter } from "@/components/nuovo/footer";

export const metadata: Metadata = {
  title: "Cosa risolvo — Soma & Via | Ilaria Cecutti",
  description: "Dolori cronici, tensioni da stress, ansia somatizzata, stanchezza inspiegabile. Ilaria Cecutti lavora con fisioterapia dei meridiani e biodescodificación.",
};

const sintomiSpiegati = [
  {
    title: "Il dolore fisico ha una radice emotiva",
    desc: "La Biodescodificación studia come ogni organo, ogni zona del corpo, corrisponde a un tipo di conflitto emotivo specifico. Quando quel conflitto non viene elaborato, il corpo lo esprime attraverso un sintomo fisico.",
  },
  {
    title: "Non è psicosomatica nel senso comune",
    desc: "Non significa che 'è tutto nella testa'. Il dolore è reale. Il sintomo esiste. La domanda è: qual è il messaggio biologico che sta cercando di inviarti? Lavorare sulla causa emotiva non esclude il trattamento fisico — lo potenzia.",
  },
  {
    title: "Il massaggio apre, la Biodescodificación decodifica",
    desc: "Il massaggio terapeutico scioglie le tensioni, ripristina la circolazione, calma il sistema nervoso. La Biodescodificación porta consapevolezza sul 'perché'. Insieme, i due approcci creano un cambiamento che dura.",
  },
];

export default function CosaRisolvoPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <NuovoNav />

      <PageHero
        label="Cosa risolvo"
        title="Riconosci il segnale del tuo corpo."
        subtitle="Dolori ricorrenti, tensioni da stress, stanchezza cronica, stati emotivi che si sentono fisicamente. Non è il destino — ha una spiegazione."
      />

      {/* Spiegazione scientifica */}
      <section style={{ background: "#faf6ef", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>Come funziona</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-12 max-w-2xl">
            Perché il corpo esprime ciò che la mente non elabora.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sintomiSpiegati.map((s, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-display font-semibold shrink-0"
                  style={{ background: "rgba(122,138,106,0.12)", color: "#7a8a6a" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-display text-xl leading-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le 8 card problemi */}
      <NuovoProblemi />

      {/* Biodecodifica — blocco informativo */}
      <section style={{ background: "#2b2420", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Come agisce la biodecodifica emotiva
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                className="font-display leading-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#faf6ef" }}
              >
                Un approccio olistico e complementare alla medicina tradizionale.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(250,246,239,0.55)" }}>
                La biodecodifica emotiva (o bioneuroemozione) identifica e libera i conflitti emotivi inconsci
                correlati a disturbi fisici e psicologici. Concentrandosi sulla connessione mente-corpo,
                offre una prospettiva diversa — non alternativa — a quella medica tradizionale.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Riduce lo stress cronico", desc: "Lavora sulle cause emotive che mantengono il sistema nervoso in stato d'allerta." },
                { label: "Tratta problemi persistenti", desc: "Utile per dolori cronici, fobie, ansia e squilibri emotivi che non rispondono ad altri approcci." },
                { label: "Migliora la qualità della vita", desc: "Promuove equilibrio emotivo e benessere integrale attraverso la consapevolezza del messaggio biologico." },
                { label: "Approccio non invasivo", desc: "Nessun farmaco, nessuna tecnica invasiva. Solo ascolto, riflessione e strumenti di elaborazione personale." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ background: "#7a8a6a" }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "rgba(250,246,239,0.85)" }}>{item.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(250,246,239,0.4)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ background: "#faf6ef", padding: "3rem 0" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(107,93,82,0.5)" }}>
            ⚕️ Le sessioni di Biodescodificación e i massaggi terapeutici sono pratiche complementari.
            Non sostituiscono diagnosi mediche o terapie prescritte da professionisti sanitari.
            Ti consiglio sempre di affiancare il nostro percorso al tuo medico di riferimento.
          </p>
        </div>
      </section>

      <NuovoCtaFinale />
      <NuovoFooter />
    </div>
  );
}
