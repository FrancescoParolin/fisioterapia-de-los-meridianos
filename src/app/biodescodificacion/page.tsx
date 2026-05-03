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

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent shrink-0" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

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

  const outcomes = [
    { icon: "🧠", text: b.out1 },
    { icon: "🌊", text: b.out2 },
    { icon: "🌙", text: b.out3 },
    { icon: "🔍", text: b.out4 },
    { icon: "🔓", text: b.out5 },
    { icon: "🌱", text: b.out6 },
  ];

  const testimonials = [
    { quote: b.testi1q, name: b.testi1n, role: b.testi1r },
    { quote: b.testi2q, name: b.testi2n, role: b.testi2r },
    { quote: b.testi3q, name: b.testi3n, role: b.testi3r },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-card border-b border-border/60">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-accent/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-accent/6 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 md:py-36 text-center">
          <p className="inline-block text-xs uppercase tracking-[0.25em] text-accent mb-8 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8">
            {b.heroLabel}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] mb-6">
            {b.heroH1}<br />
            <em className="italic text-accent">{b.heroH1em}</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/65 max-w-xl mx-auto leading-relaxed mb-10">
            {b.heroSubtitle}
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-9 py-4 text-background font-medium hover:bg-foreground/85 transition-colors shadow-lg text-base"
          >
            {b.heroCta}
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd"/>
            </svg>
          </Link>

          {/* trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[b.heroStat1, b.heroStat2, b.heroStat3].map((s, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── IL CORPO PARLA ───────────────────────────────────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
              {b.bodyLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-7">
              {b.bodyH2}
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>{b.bodyP1}</p>
              <p>{b.bodyP2}</p>
            </div>
          </div>
          {/* pull quote */}
          <div className="hidden md:flex flex-col gap-6">
            <blockquote className="relative rounded-2xl bg-accent/8 border border-accent/20 px-8 py-8">
              <div className="font-display text-6xl text-accent/20 leading-none mb-2 select-none">&ldquo;</div>
              <p className="font-display text-xl md:text-2xl text-foreground/70 italic leading-snug">
                Il corpo registra tutto ciò che la mente non riesce a elaborare.
              </p>
              <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">— Biologia delle emozioni</div>
            </blockquote>
            <div className="flex gap-4">
              {["Basato sulla ricerca", "Non sostituisce la medicina", "Lavoro in profondità"].map((t) => (
                <span key={t} className="flex-1 text-center text-xs text-muted-foreground bg-muted/50 rounded-xl px-3 py-3 leading-snug border border-border/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COS'È ────────────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
            {b.whatLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-10">
            {b.whatH2}
          </h2>
          <div className="space-y-5 text-lg text-foreground/75 leading-relaxed">
            <p>{b.whatP1}</p>
            <p>{b.whatP2}</p>
          </div>
          <div className="mt-8 flex items-start gap-3 text-sm bg-card rounded-xl border border-border/60 px-5 py-4">
            <CheckIcon />
            <span>{b.whatP3}</span>
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ────────────────────────────────────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
              {b.howLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {b.howH2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative flex flex-col gap-5 rounded-2xl border border-border/60 bg-card px-7 py-8 overflow-hidden">
                {/* subtle background number */}
                <div
                  className="pointer-events-none absolute -top-4 -right-2 font-display text-[8rem] leading-none select-none"
                  style={{ color: "oklch(from var(--color-border) l c h / 0.5)" }}
                  aria-hidden="true"
                >
                  {s.n}
                </div>
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center mb-4">
                    <span className="text-accent font-display text-sm font-semibold">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA CAMBIA ──────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
              {b.outLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {b.outH2}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div key={o.text} className="flex items-start gap-4 rounded-xl border border-border/60 bg-background px-5 py-5 hover:border-accent/40 transition-colors">
                <span className="text-2xl shrink-0 mt-0.5" role="img" aria-hidden="true">{o.icon}</span>
                <p className="text-sm text-foreground/80 leading-snug">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREZZO ───────────────────────────────────────────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
              {b.priceLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {b.priceH2}
            </h2>
          </div>
          <div className="max-w-md mx-auto rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm">
            {/* price header */}
            <div className="bg-accent/8 border-b border-border/60 px-8 py-8 text-center">
              <div className="font-display text-7xl text-foreground mb-1">{b.priceAmount}</div>
              <div className="flex justify-center gap-6 text-sm text-muted-foreground mt-3">
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
            </div>
            {/* includes */}
            <div className="px-8 py-6 space-y-3">
              {[b.priceInc1, b.priceInc2, b.priceInc3].map((inc) => (
                <div key={inc} className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckIcon />
                  {inc}
                </div>
              ))}
            </div>
            <div className="px-8 pb-8">
              <Link
                href="/prenota"
                className="block text-center rounded-full bg-foreground px-7 py-3.5 text-sm text-background hover:bg-foreground/85 transition-colors font-medium"
              >
                {b.priceCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIANZE ────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
              {b.testiLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {b.testiH2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card px-7 py-8">
                {/* stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote className="flex-1 text-sm text-foreground/75 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-border/50 pt-5">
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIAMATA GRATUITA ────────────────────────────────── */}
      <section className="border-b border-border/60" style={{ backgroundColor: "oklch(from var(--color-accent) l c h / 0.08)" }}>
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-6">
            {b.callLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {b.callH2}
          </h2>
          <p className="text-foreground/65 leading-relaxed mb-12 max-w-sm mx-auto">
            {b.callSubtitle}
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-9 py-4 text-background font-medium hover:bg-foreground/85 transition-colors shadow-md text-base"
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
