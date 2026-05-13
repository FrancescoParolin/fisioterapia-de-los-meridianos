import type { Metadata } from "next";
import { NuovoNav } from "@/components/nuovo/nav";
import { PageHero } from "@/components/nuovo/page-hero";
import { NuovoServizi } from "@/components/nuovo/servizi";
import { NuovoCtaFinale } from "@/components/nuovo/cta-finale";
import { NuovoFooter } from "@/components/nuovo/footer";

export const metadata: Metadata = {
  title: "Servizi — Soma & Via",
  description: "Massaggio terapeutico, Biodescodificación, Percorso Integrato. Scopri i servizi di Soma & Via e prenota la tua prima chiamata gratuita.",
};

const domande = [
  {
    q: "Quanto spesso devo venire?",
    a: "Dipende dalla situazione. In media, 1 sessione a settimana o ogni due settimane nella fase iniziale. Ne parliamo nella chiamata gratuita.",
  },
  {
    q: "Posso scegliere solo uno dei due approcci?",
    a: "Sì. Puoi iniziare solo con il massaggio, solo con la Biodescodificación, o combinarli nel Percorso Integrato. Troveremo insieme ciò che fa per te.",
  },
  {
    q: "Come si svolge la prima sessione?",
    a: "Iniziamo sempre con un colloquio di 10-15 minuti per capire la tua situazione, poi procediamo con la sessione vera e propria.",
  },
];

export default function ServiziPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <NuovoNav />

      <PageHero
        label="Servizi"
        title="Scegli da dove iniziare."
        subtitle="Ogni percorso parte da un ascolto. La prima chiamata è sempre gratuita."
      />

      <NuovoServizi />

      {/* Mini FAQ servizi */}
      <section style={{ background: "#f2ead9", padding: "5rem 0" }}>
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>Domande sui servizi</p>
          <h2 className="font-display text-3xl leading-tight mb-10">Hai dubbi?</h2>
          <div className="space-y-6">
            {domande.map((d) => (
              <div
                key={d.q}
                className="rounded-2xl p-7"
                style={{ background: "#fff", border: "1px solid #e5d9c0" }}
              >
                <h3 className="font-display text-xl mb-3">{d.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>{d.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NuovoCtaFinale />
      <NuovoFooter />
    </div>
  );
}
