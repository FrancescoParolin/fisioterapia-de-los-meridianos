import type { Metadata } from "next";
import { NuovoNav } from "@/components/nuovo/nav";
import { PageHero } from "@/components/nuovo/page-hero";
import { NuovoFooter } from "@/components/nuovo/footer";

export const metadata: Metadata = {
  title: "Contatti — Soma & Via",
  description: "Prenota la tua chiamata gratuita da 20 minuti con Soma & Via. Online o in presenza a Pamplona.",
};

const canali = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: "Telefono / WhatsApp",
    value: "[TELEFONO]",
    href: "tel:[TELEFONO]",
    note: "Rispondo entro poche ore",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
    label: "Email",
    value: "[EMAIL_CONTATTO]",
    href: "mailto:[EMAIL_CONTATTO]",
    note: "Rispondo entro 24h",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: "Instagram",
    value: "@[INSTAGRAM_HANDLE]",
    href: "[LINK_INSTAGRAM]",
    note: "Storie e contenuti quotidiani",
  },
];

export default function ContattiPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <NuovoNav />

      <PageHero
        label="Contatti"
        title="Inizia con una conversazione."
        subtitle="20 minuti gratuiti per capire se questo percorso fa per te. Senza impegno, senza vendita."
        dark
      />

      {/* Prenota chiamata — card principale */}
      <section style={{ background: "#faf6ef", padding: "5rem 0" }}>
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">

          {/* Left: card prenota */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-6"
            style={{ background: "#fff", border: "1px solid #e5d9c0" }}
          >
            <div>
              <span
                className="text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                style={{ background: "rgba(122,138,106,0.1)", color: "#7a8a6a" }}
              >
                Primo passo — Gratuito
              </span>
            </div>
            <div>
              <h2 className="font-display text-3xl leading-tight mb-3">Chiamata conoscitiva</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6b5d52" }}>
                20 minuti online (video o telefono) in cui mi racconti la tua situazione.
                Non è una sessione — è un ascolto. Ti dico onestamente se e come posso aiutarti.
              </p>
            </div>
            <ul className="space-y-2">
              {["Nessun impegno", "Nessun costo", "Online o telefono", "Rispondo entro 24h"].map((i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "#2b2420" }}>
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0" style={{ color: "#7a8a6a" }}>
                    <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start gap-3 mt-auto pt-4 border-t" style={{ borderColor: "#e5d9c0" }}>
              <div className="font-display text-4xl leading-none" style={{ color: "#7a8a6a" }}>Gratis</div>
              <a
                href="[LINK_CALENDLY]"
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.03] hover:shadow-lg active:scale-95"
                style={{ background: "#7a8a6a", color: "#fff" }}
                aria-label="Prenota la chiamata gratuita da 20 minuti"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1zm0 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6z" />
                </svg>
                Prenota la chiamata gratuita
              </a>
            </div>
          </div>

          {/* Right: canali + info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] mb-6" style={{ color: "#7a8a6a" }}>
                O scrivimi direttamente
              </p>
              <div className="space-y-4">
                {canali.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                    style={{ background: "#f2ead9", border: "1px solid transparent" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(122,138,106,0.15)", color: "#7a8a6a" }}
                    >
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-[0.12em] mb-0.5" style={{ color: "#7a8a6a" }}>{c.label}</p>
                      <p className="text-sm font-medium truncate" style={{ color: "#2b2420" }}>{c.value}</p>
                      <p className="text-xs" style={{ color: "rgba(107,93,82,0.5)" }}>{c.note}</p>
                    </div>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 opacity-30 group-hover:opacity-70 transition-opacity" style={{ color: "#2b2420" }}>
                      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Dove siamo */}
            <div
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{ background: "#f2ead9", border: "1px solid #e5d9c0" }}
            >
              <p className="text-xs uppercase tracking-[0.18em]" style={{ color: "#7a8a6a" }}>Dove siamo</p>
              <div className="space-y-1 text-sm" style={{ color: "#2b2420" }}>
                <p className="font-medium">Studio — Pamplona, Spagna</p>
                <p style={{ color: "#6b5d52" }}>[INDIRIZZO_STUDIO]</p>
              </div>
              <div
                className="rounded-lg h-32 flex items-center justify-center text-xs uppercase tracking-[0.2em]"
                style={{ background: "#e5d9c0", color: "rgba(107,93,82,0.4)" }}
              >
                [MAPPA — inserisci Google Maps embed]
              </div>
              <p className="text-xs" style={{ color: "rgba(107,93,82,0.5)" }}>
                Le sessioni di Biodescodificación sono disponibili anche online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NuovoFooter />
    </div>
  );
}
