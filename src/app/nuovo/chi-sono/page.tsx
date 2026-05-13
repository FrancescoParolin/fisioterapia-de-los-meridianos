import type { Metadata } from "next";
import { NuovoNav } from "@/components/nuovo/nav";
import { PageHero } from "@/components/nuovo/page-hero";
import { NuovoCtaFinale } from "@/components/nuovo/cta-finale";
import { NuovoFooter } from "@/components/nuovo/footer";

export const metadata: Metadata = {
  title: "Chi sono — Soma & Via | Ilaria Cecutti",
  description:
    "Ilaria Cecutti: 20 anni di fisioterapia dei meridiani e biodescodificación. Formata alla Scuola di Medicina Tradizionale di Bangkok (Wat Po). Studio a Pamplona.",
};

const credenziali = [
  { icon: "📍", label: "Sede", value: "Pamplona, Spagna" },
  { icon: "🌐", label: "Online", value: "Sessioni via videochiamata" },
  { icon: "🎓", label: "Formazione", value: "Wat Po — Scuola di Medicina Tradizionale, Bangkok" },
  { icon: "🧬", label: "Metodo", value: "Fisioterapia dei Meridiani · Biodescodificación" },
  { icon: "📅", label: "Esperienza", value: "20+ anni di pratica" },
  { icon: "🧠", label: "Specializzazioni", value: "PNL · Life Coaching · Digitopressione" },
];

const timeline = [
  {
    periodo: "10 anni a Bangkok",
    titolo: "Direttrice in un'azienda svizzera",
    desc: "Un decennio in Tailandia come manager in ambito corporate. Una vita di successo professionale che, col tempo, ha cominciato a fare i conti con qualcosa di più profondo.",
  },
  {
    periodo: "La svolta",
    titolo: "Wat Po — Scuola di Medicina Tradizionale",
    desc: "A Bangkok ho scoperto la mia vocazione: ho studiato fisioterapia alla Scuola di Medicina Tradizionale del Tempio di Wat Po. Ho riconosciuto un talento naturale per l'agopressione e la fisioterapia orientale che non sapevo di avere.",
  },
  {
    periodo: "Il ritorno in Europa",
    desc: "Abbandonata la carriera corporativa, mi sono dedicata interamente alla sanazione olistica. Un cambio radicale di vita che oggi si traduce in un percorso per chi vuole fare lo stesso: ascoltare il proprio corpo.",
    titolo: "Dalla carriera alla guarigione olistica",
  },
  {
    periodo: "Da 20 anni",
    titolo: "Studio a Pamplona",
    desc: "Lavoro con persone che soffrono di dolori articolari, blocchi fisici ed emotivi. Integro la fisioterapia dei meridiani con la biodescodificación e principi psicosomatici per un approccio che tiene insieme corpo, mente e storia di vita.",
  },
];

export default function ChiSonoPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <NuovoNav />

      <PageHero
        label="Chi sono"
        title="Da Bangkok a Pamplona, seguendo i meridiani."
        subtitle="Ilaria Cecutti — fisioterapista dei meridiani, praticante di Biodescodificación, coach. 20 anni di lavoro sul corpo e sulle sue radici emotive."
      />

      {/* Bio + foto */}
      <section style={{ background: "#faf6ef", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Foto */}
          <div className="relative">
            <div
              className="aspect-[3/4] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: "#f2ead9" }}
            >
              <div className="text-center px-8">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "rgba(122,138,106,0.15)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12" style={{ color: "rgba(122,138,106,0.5)" }}>
                    <path strokeLinecap="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(107,93,82,0.35)" }}>
                  [FOTO_PROFILO]
                </p>
              </div>
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-5 -right-4 rounded-xl px-5 py-4 shadow-lg"
              style={{ background: "#7a8a6a" }}
            >
              <div className="font-display text-2xl leading-none" style={{ color: "#fff" }}>20+</div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>anni di pratica</div>
            </div>
          </div>

          {/* Testo */}
          <div className="space-y-5 pt-4">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Ilaria Cecutti</h2>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#6b5d52" }}>
              <p>
                Per dieci anni ho vissuto a Bangkok come direttrice in un&apos;azienda svizzera.
                Una carriera costruita con impegno, in un paese che mi ha trasformata.
                È lì che ho scoperto la medicina tradizionale orientale — e con essa, una vocazione
                che non sapevo di avere.
              </p>
              <p>
                Ho studiato alla <strong style={{ color: "#2b2420" }}>Scuola di Medicina Tradizionale di Wat Po</strong>,
                il tempio buddista di Bangkok che da secoli custodisce la conoscenza dell&apos;agopressione
                e della fisioterapia orientale. Ho riconosciuto in questo lavoro un talento naturale:
                la capacità di sentire dove il corpo è bloccato e di liberarlo attraverso la pressione
                dei punti sui meridiani.
              </p>
              <p>
                Al ritorno in Europa ho abbandonato la carriera corporativa. Una scelta radicale,
                presa con chiarezza. Da allora, da oltre vent&apos;anni, lavoro con persone che soffrono
                di dolori articolari, tensioni croniche, blocchi fisici ed emotivi. Ho integrato
                la fisioterapia dei meridiani con la <strong style={{ color: "#2b2420" }}>Biodescodificación</strong> e
                con principi psicosomatici, perché i pensieri e i sentimenti hanno un impatto diretto
                sulla salute fisica — e ne sono convinta da sempre.
              </p>
              <p>
                Ho approfondito il mio percorso con lo studio della{" "}
                <strong style={{ color: "#2b2420" }}>Programmazione Neuro-Linguistica (PNL)</strong> e
                del life coaching: strumenti che completano il lavoro manuale e permettono di
                accompagnare chi seguo non solo nel corpo, ma anche nella comprensione di sé.
              </p>
            </div>

            {/* Citazione */}
            <blockquote
              className="border-l-2 pl-5 py-1 italic text-base"
              style={{ borderColor: "#7a8a6a", color: "#6b5d52" }}
            >
              &ldquo;I pensieri e i sentimenti hanno un impatto diretto sulla salute fisica.
              Quando il corpo parla, vale la pena fermarsi ad ascoltarlo.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline percorso */}
      <section style={{ background: "#f2ead9", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Il percorso
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-14">
            Da dirigente a guaritrice.
          </h2>

          <div className="relative flex flex-col gap-0">
            {/* Linea verticale */}
            <div
              className="absolute left-5 top-6 bottom-6 w-px"
              style={{ background: "linear-gradient(to bottom, #7a8a6a, transparent)", opacity: 0.25 }}
              aria-hidden="true"
            />

            {timeline.map((t, i) => (
              <div key={i} className="flex gap-8 pb-10 last:pb-0">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold border relative z-10"
                  style={{
                    background: "#f2ead9",
                    borderColor: "rgba(122,138,106,0.35)",
                    color: "#7a8a6a",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-2 flex-1 border-b border-border/30 pb-10 last:border-0 last:pb-0">
                  <p className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "#7a8a6a" }}>
                    {t.periodo}
                  </p>
                  <h3 className="font-display text-xl mb-2">{t.titolo}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credenziali */}
      <section style={{ background: "#faf6ef", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Formazione & specializzazioni
          </p>
          <h2 className="font-display text-3xl leading-tight mb-10">Credenziali.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {credenziali.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: "#fff", border: "1px solid #e5d9c0" }}
              >
                <span className="text-2xl" role="img" aria-label={c.label}>{c.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "#7a8a6a" }}>
                    {c.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#2b2420" }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofia — dark */}
      <section style={{ background: "#2b2420", padding: "5rem 0" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.28em] mb-8" style={{ color: "#7a8a6a" }}>
            La mia filosofia
          </p>
          <blockquote
            className="font-display italic leading-[1.1]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)", color: "rgba(250,246,239,0.8)" }}
          >
            &ldquo;Sono passata da una carriera corporativa alla sanazione olistica perché
            ho scoperto che il corpo sa già tutto. Il mio lavoro è aiutarti a tradurre
            quello che ti sta dicendo.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.2em]" style={{ color: "rgba(250,246,239,0.25)" }}>
            — Ilaria Cecutti
          </p>
        </div>
      </section>

      <NuovoCtaFinale />
      <NuovoFooter />
    </div>
  );
}
