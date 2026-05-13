import type { Metadata } from "next";
import { NuovoNav } from "@/components/nuovo/nav";
import { PageHero } from "@/components/nuovo/page-hero";
import { NuovoMetodo } from "@/components/nuovo/metodo";
import { NuovoCtaFinale } from "@/components/nuovo/cta-finale";
import { NuovoFooter } from "@/components/nuovo/footer";

export const metadata: Metadata = {
  title: "Come funziona — Soma & Via",
  description: "Scopri il metodo integrato di Soma & Via: massaggio terapeutico e Biodescodificación in un percorso in 4 fasi.",
};

const bioConcetti = [
  {
    termine: "Conflitto biologico",
    def: "Un evento vissuto con forte carica emotiva che il cervello non riesce a elaborare. La biologia risponde attivando un programma di sopravvivenza — spesso un sintomo fisico.",
  },
  {
    termine: "Fase attiva vs fase di risoluzione",
    def: "Ogni programma biologico ha due fasi: la fase attiva (il conflitto è presente) e la fase di riparazione (il conflitto si risolve). Molti sintomi appaiono nella fase di riparazione.",
  },
  {
    termine: "Memoria biologica",
    def: "Il corpo 'ricorda' le esperienze emotive più di quanto la mente cosciente faccia. Traumi, shock, paure intense si depositano nella muscolatura, nella postura, nel sistema nervoso autonomo.",
  },
  {
    termine: "Approccio complementare",
    def: "La Biodescodificación non sostituisce la medicina tradizionale. Si affianca ad essa, aggiungendo una lettura del sintomo che va oltre la causa fisica immediata.",
  },
];

export default function ComeFunzionaPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <NuovoNav />

      <PageHero
        label="Il metodo"
        title="Non solo massaggio. Non solo ascolto."
        subtitle="Un percorso integrato che unisce il lavoro sul corpo con la comprensione delle sue radici emotive."
      />

      {/* Timeline */}
      <NuovoMetodo />

      {/* Cos'è la Biodescodificación */}
      <section style={{ background: "#2b2420", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            Biodescodificación
          </p>
          <h2
            className="font-display leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#faf6ef" }}
          >
            Il linguaggio biologico delle emozioni.
          </h2>
          <p className="text-base leading-relaxed mb-12 max-w-2xl" style={{ color: "rgba(250,246,239,0.55)" }}>
            La Biodescodificación è un approccio terapeutico complementare che studia la correlazione tra
            stati emotivi vissuti e manifestazioni fisiche nel corpo. Ecco i concetti chiave:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {bioConcetti.map((b) => (
              <div
                key={b.termine}
                className="rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3 className="font-display text-xl mb-3" style={{ color: "#faf6ef" }}>{b.termine}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(250,246,239,0.5)" }}>{b.def}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-center leading-relaxed" style={{ color: "rgba(250,246,239,0.2)" }}>
            ⚕️ Queste pratiche NON sostituiscono il parere medico professionale.
          </p>
        </div>
      </section>

      {/* Fisioterapia dei Meridiani — tecnica principale */}
      <section style={{ background: "#faf6ef", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
            La tecnica
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5 max-w-2xl">
            Fisioterapia dei Meridiani: la digitopressione dei monaci buddisti.
          </h2>
          <p className="text-base leading-relaxed mb-12 max-w-3xl" style={{ color: "#6b5d52" }}>
            Una tecnica di trattamento manuale in cui si usa la pressione delle dita su tessuti molli
            e punti trigger per alleviare dolori muscolari e articolari. Appartiene all&apos;antica terapia
            asiatica di digitopressione praticata dai monaci nei templi — una tradizione di rispetto
            e autorità, al pari di medici e mentori nella cultura buddhista.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden" style={{ background: "#f2ead9" }}>
              <picture>
                <img
                  src="/images/taconera-6.jpg"
                  alt="Fisioterapia dei meridiani — sessione manuale"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="flex flex-col justify-center gap-6">
              {[
                {
                  title: "Lungo le linee energetiche",
                  desc: "Si percorrono i meridiani del corpo — le linee energetiche della medicina tradizionale cinese — cercando i punti di agopuntura bloccati.",
                },
                {
                  title: "Dita, non aghi",
                  desc: "La pressione delle dita sostituisce gli aghi dell'agopuntura. Stessa logica energetica, approccio completamente manuale e non invasivo.",
                },
                {
                  title: "Zone trattate",
                  desc: "Collo, spalle, braccia, gomiti, polsi, schiena, anca, piedi. Qualsiasi area dove il blocco energetico si manifesta come dolore.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ background: "#7a8a6a" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg mb-1">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Come agisce sulla circolazione */}
          <div
            className="rounded-2xl p-8 grid md:grid-cols-3 gap-6"
            style={{ background: "#f2ead9", border: "1px solid #e5d9c0" }}
          >
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">🩸</div>
              <h3 className="font-display text-xl mb-2">Pressione</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>
                La pressione sulla zona infiammata muove il sangue attraverso i tessuti bloccati.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">🔄</div>
              <h3 className="font-display text-xl mb-2">Rilascio</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>
                Al rilascio della pressione, affluisce sangue nuovo ricco di ossigeno, avviando la guarigione.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3" aria-hidden="true">🌿</div>
              <h3 className="font-display text-xl mb-2">Detossificazione</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>
                La circolazione migliorata elimina prodotti di scarto e tossine che causano dolore e rigidità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chakra — centri energetici */}
      <section style={{ background: "#2b2420", padding: "4rem 0" }}>
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>
              I sette chakra
            </p>
            <h2
              className="font-display leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#faf6ef" }}
            >
              I centri energetici vitali.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(250,246,239,0.55)" }}>
              Ognuno dei sette chakra rappresenta un insieme di emozioni che impattano sulla salute
              fisica, emotiva e sul successo nella vita. Quando sono in equilibrio, operano alla
              frequenza più alta — attraggono le persone e le opportunità giuste, e il corpo
              funziona in armonia.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(250,246,239,0.55)" }}>
              In momenti di stress e incertezza i nostri centri energetici si richiudono,
              generando sintomi fisici o emotivi: ansia, blocco, senso di essere &ldquo;fuori di sé&rdquo;.
              Il lavoro sui meridiani e sui chakra riporta l&apos;equilibrio.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { n: "1", nome: "Radice", emozioni: "Sicurezza, sopravvivenza", colore: "#c0392b" },
              { n: "2", nome: "Sacrale", emozioni: "Creatività, sessualità, emozioni", colore: "#e67e22" },
              { n: "3", nome: "Plesso solare", emozioni: "Potere personale, autostima", colore: "#f1c40f" },
              { n: "4", nome: "Cuore", emozioni: "Amore, compassione, relazioni", colore: "#27ae60" },
              { n: "5", nome: "Gola", emozioni: "Espressione, comunicazione, verità", colore: "#2980b9" },
              { n: "6", nome: "Terzo occhio", emozioni: "Intuizione, chiarezza mentale", colore: "#8e44ad" },
              { n: "7", nome: "Corona", emozioni: "Connessione spirituale, illuminazione", colore: "#9b59b6" },
            ].map((c) => (
              <div key={c.n} className="flex items-center gap-4 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: c.colore }}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium" style={{ color: "rgba(250,246,239,0.8)", minWidth: "7rem" }}>
                  {c.nome}
                </span>
                <span className="text-xs" style={{ color: "rgba(250,246,239,0.35)" }}>{c.emozioni}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biodecodifica emotiva — contenuto educativo */}
      <section style={{ background: "#f2ead9", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.28em] mb-4" style={{ color: "#7a8a6a" }}>Approfondimento</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4 max-w-2xl">
            Cos&apos;è la biodecodifica emotiva?
          </h2>
          <p className="text-base leading-relaxed mb-14 max-w-3xl" style={{ color: "#6b5d52" }}>
            La biodecodifica emotiva, nota anche come bioneuroemozione, è una tecnica terapeutica complementare
            che cerca di identificare e liberare conflitti emotivi inconsci correlati a malattie fisiche e
            disturbi psicologici. Si basa sulla premessa che le emozioni non risolte possono manifestarsi
            nel corpo come sintomi fisici. Affrontando questi conflitti, si promuove un processo di
            guarigione più profondo e duraturo.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "A cosa si usa?",
                a: "Viene utilizzata per identificare e rilasciare conflitti emotivi che possono influenzare la salute fisica e mentale. È utile nel trattamento di problemi cronici, fobie, ansia, stress e altri squilibri emotivi. Aiuta a migliorare la qualità della vita e promuovere l'equilibrio emotivo.",
              },
              {
                q: "Come funziona una sessione?",
                a: "Attraverso una serie di sessioni, vengono esplorate le emozioni e le esperienze passate che potrebbero essere correlate ai sintomi attuali. Si utilizzano tecniche di analisi e riflessione per svelare schemi emotivi e convinzioni limitanti, lavorando poi per risolverli.",
              },
              {
                q: "Quanto dura?",
                a: "Una sessione individuale dura generalmente da una a due ore. Il numero di sedute necessarie varia dalla complessità del problema: in alcuni casi è sufficiente una sola sessione, in altri sono necessarie diverse sessioni nell'arco di settimane o mesi.",
              },
              {
                q: "Come prepararsi?",
                a: "Si consiglia di arrivare con una mente aperta e disposta a esplorare le proprie emozioni. Indossare abiti comodi, evitare cibi pesanti prima della sessione, e riflettere sulle situazioni o sintomi su cui si desidera lavorare facilita il processo.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl p-7"
                style={{ background: "#fff", border: "1px solid #e5d9c0" }}
              >
                <h3 className="font-display text-xl leading-tight mb-3">{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>{item.a}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-5"
            style={{ background: "rgba(122,138,106,0.1)", border: "1px solid rgba(122,138,106,0.2)" }}
          >
            <div className="text-3xl" aria-hidden="true">⚕️</div>
            <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>
              <strong style={{ color: "#2b2420" }}>Nota importante:</strong> La biodecodifica emotiva è una
              tecnica complementare e non sostituisce diagnosi mediche o terapie prescritte da professionisti
              sanitari abilitati. Ti consiglio sempre di affiancare questo percorso al tuo medico di riferimento.
            </p>
          </div>
        </div>
      </section>

      <NuovoCtaFinale />
      <NuovoFooter />
    </div>
  );
}
