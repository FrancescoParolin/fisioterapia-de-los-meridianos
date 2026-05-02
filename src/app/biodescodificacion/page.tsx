import type { Metadata } from "next";
import Link from "next/link";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";
import { Faq } from "@/components/faq";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const d = getDictionary(lang);
  return {
    title: d.biodesco.metaTitle,
    description: d.biodesco.metaDesc,
  };
}

export default async function BiodescodificacionPage() {
  const lang = await getLang();
  const d = getDictionary(lang);
  const b = d.biodesco;

  const faqDict = {
    ...d.faq,
    label: b.faqLabel,
    h2: b.faqH2,
    q1: b.faqQ1, a1: b.faqA1,
    q2: b.faqQ2, a2: b.faqA2,
    q3: b.faqQ3, a3: b.faqA3,
    q4: b.faqQ4, a4: b.faqA4,
    q5: b.faqQ5, a5: b.faqA5,
  };

  const steps = [
    { n: "01", title: b.howS1title, desc: b.howS1desc },
    { n: "02", title: b.howS2title, desc: b.howS2desc },
    { n: "03", title: b.howS3title, desc: b.howS3desc },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-card border-b border-border/60">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-accent/6 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="inline-block text-xs uppercase tracking-[0.25em] text-accent mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8">
            {b.heroLabel}
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            {b.heroH1}<br />
            <em className="italic text-accent">{b.heroH1em}</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10">
            {b.heroSubtitle}
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-background font-medium hover:bg-foreground/85 transition-colors shadow-lg"
          >
            {b.heroCta}
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── IL CORPO PARLA ───────────────────────────────────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {b.bodyLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              {b.bodyH2}
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>{b.bodyP1}</p>
              <p>{b.bodyP2}</p>
            </div>
          </div>
          {/* visual accent */}
          <div className="hidden md:block">
            <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/15 via-accent/8 to-transparent border border-accent/20 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="font-display text-7xl text-accent/30 mb-3">♾</div>
                <p className="font-display text-xl text-foreground/50 italic leading-snug">
                  "Il corpo registra<br/>tutto ciò che la mente<br/>non riesce a elaborare."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COS'È ────────────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {b.whatLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-10">
            {b.whatH2}
          </h2>
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>{b.whatP1}</p>
            <p>{b.whatP2}</p>
            <p className="flex items-start gap-3 text-base bg-card rounded-xl border border-border/60 px-5 py-4">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z" clipRule="evenodd"/>
              </svg>
              {b.whatP3}
            </p>
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ────────────────────────────────────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {b.howLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {b.howH2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col gap-4">
                <div className="font-display text-6xl text-border">{s.n}</div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREZZO ───────────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {b.priceLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-10">
            {b.priceH2}
          </h2>
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background px-12 py-10 shadow-sm">
            <div className="font-display text-6xl text-accent">{b.priceAmount}</div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-accent" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm.75 4.25a.75.75 0 0 0-1.5 0v3.5c0 .199.079.39.22.53l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.75 8.69V5.25z"/>
                </svg>
                {b.priceDuration}
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-accent" aria-hidden="true">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
                </svg>
                {b.priceMode}
              </span>
            </div>
            <Link
              href="/prenota"
              className="mt-2 inline-flex items-center rounded-full bg-foreground px-7 py-3 text-sm text-background hover:bg-foreground/85 transition-colors"
            >
              {b.priceCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHIAMATA GRATUITA ────────────────────────────────── */}
      <section className="border-b border-border/60 bg-accent/8">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-5">
            {b.callLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {b.callH2}
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-10 max-w-md mx-auto">
            {b.callSubtitle}
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-background font-medium hover:bg-foreground/85 transition-colors shadow-md"
          >
            {b.callCta}
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Faq dict={faqDict} />
    </>
  );
}
