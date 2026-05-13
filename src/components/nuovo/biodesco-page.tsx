import type { Metadata } from "next";
import Link from "next/link";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";
import { Faq } from "@/components/faq";
import { BiodescHero } from "@/components/biodesco-hero";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import { Marquee } from "@/components/ui/marquee";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const d = getDictionary(lang);
  return {
    title: d.biodesco.metaTitle,
    description: d.biodesco.metaDesc,
  };
}

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-accent" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

  const marqueeItems = [
    "Biodescodificazione",
    "Il corpo parla",
    "Sintomi come messaggi",
    "Emozione e salute",
    "Radice emotiva",
    "Percorso personalizzato",
    "Prima chiamata gratuita",
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <BiodescHero
        label={b.heroLabel}
        h1={b.heroH1}
        h1em={b.heroH1em}
        subtitle={b.heroSubtitle}
        cta={b.heroCta}
        stat1={b.heroStat1}
        stat2={b.heroStat2}
        stat3={b.heroStat3}
      />

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <Marquee items={marqueeItems} />

      {/* ── IL CORPO PARLA — dark ────────────────────────────── */}
      <section className="bg-foreground border-b border-foreground/80">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-36">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.22em] mb-10" style={{ color: "var(--color-accent)" }}>
              {b.bodyLabel}
            </p>
            {/* giant quote */}
            <blockquote
              className="font-display italic leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", color: "oklch(from var(--color-background) l c h / 0.85)" }}
            >
              &ldquo;Il corpo registra tutto ciò che la mente non riesce a elaborare.&rdquo;
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "oklch(from var(--color-background) l c h / 0.3)" }}>
              — Biologia delle emozioni
            </p>
          </AnimatedSection>

          <div className="mt-16 grid md:grid-cols-2 gap-10 pt-10 border-t" style={{ borderColor: "oklch(from var(--color-background) l c h / 0.1)" }}>
            <AnimatedSection delay={0.05}>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(from var(--color-background) l c h / 0.58)" }}>{b.bodyP1}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(from var(--color-background) l c h / 0.58)" }}>{b.bodyP2}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden">
            {[
              { n: "20", unit: "min", label: "Prima chiamata gratuita" },
              { n: "4–6", unit: "", label: "Sessioni per sentire cambiamenti" },
              { n: "100%", unit: "", label: "Sicuro, complementare alla medicina" },
            ].map((stat, i) => (
              <AnimatedItem key={stat.label} delay={i * 0.1} className="bg-card px-6 py-8 flex flex-col gap-1">
                <div className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-accent)", lineHeight: 1 }}>
                  {stat.n}<span className="text-2xl">{stat.unit}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-snug">{stat.label}</p>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── COS'È ────────────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <AnimatedSection className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{b.whatLabel}</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">{b.whatH2}</h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "oklch(from var(--color-foreground) l c h / 0.7)" }}>
              <p>{b.whatP1}</p>
              <p>{b.whatP2}</p>
              <div
                className="rounded-xl border border-accent/20 px-5 py-4 flex items-start gap-3 text-sm"
                style={{ background: "oklch(from var(--color-accent) l c h / 0.06)" }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span style={{ color: "oklch(from var(--color-foreground) l c h / 0.8)" }}>{b.whatP3}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COME FUNZIONA — vertical timeline ────────────────── */}
      <section className="border-b border-border/60" style={{ background: "linear-gradient(160deg, #faf6ef 0%, #f2e8d8 100%)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <AnimatedSection className="mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{b.howLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{b.howH2}</h2>
          </AnimatedSection>

          <div className="relative flex flex-col gap-0">
            {/* vertical line */}
            <div className="absolute left-[1.375rem] top-12 bottom-12 w-px" style={{ background: "linear-gradient(to bottom, var(--color-accent), transparent)", opacity: 0.2 }} />

            {steps.map((s, i) => (
              <AnimatedItem key={s.n} delay={i * 0.15} className="flex gap-7 pb-12 last:pb-0">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-semibold tracking-wider shrink-0 border"
                  style={{
                    background: "oklch(from var(--color-accent) l c h / 0.1)",
                    borderColor: "oklch(from var(--color-accent) l c h / 0.25)",
                    color: "var(--color-accent)",
                    zIndex: 1,
                  }}
                >
                  {s.n}
                </div>
                <div className="pt-2 pb-6 flex-1 border-b border-border/40 last:border-0">
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">{s.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA CAMBIA ─ pills ───────────────────────────────── */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <AnimatedSection className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{b.outLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-lg">{b.outH2}</h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {outcomes.map((o, i) => (
              <AnimatedItem key={o.text} delay={i * 0.07}>
                <div className="flex items-center gap-3 rounded-full px-5 py-3 bg-card border border-border/60 hover:border-accent/50 transition-colors shadow-sm">
                  <span className="text-lg shrink-0" role="img" aria-hidden="true">{o.icon}</span>
                  <span className="text-sm" style={{ color: "oklch(from var(--color-foreground) l c h / 0.78)" }}>{o.text}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREZZO + CTA combinati — dark ────────────────────── */}
      <section className="bg-foreground border-b border-foreground/80">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* left: price card */}
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.22em] mb-6" style={{ color: "var(--color-accent)" }}>{b.priceLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-10" style={{ color: "var(--color-background)" }}>
              {b.priceH2}
            </h2>
            <div className="flex items-end gap-3 mb-2">
              <span className="font-display" style={{ fontSize: "5rem", lineHeight: 1, color: "var(--color-accent)" }}>{b.priceAmount}</span>
            </div>
            <div className="flex gap-4 text-sm mb-8" style={{ color: "oklch(from var(--color-background) l c h / 0.4)" }}>
              <span>{b.priceDuration}</span>
              <span>·</span>
              <span>{b.priceMode}</span>
            </div>
            <div className="space-y-3 mb-8">
              {[b.priceInc1, b.priceInc2, b.priceInc3].map((inc) => (
                <div key={inc} className="flex items-center gap-3 text-sm" style={{ color: "oklch(from var(--color-background) l c h / 0.65)" }}>
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden="true">
                    <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  {inc}
                </div>
              ))}
            </div>
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--color-accent)", color: "var(--color-background)" }}
            >
              {b.priceCta}
            </Link>
          </AnimatedSection>

          {/* right: CTA */}
          <AnimatedSection delay={0.15} className="relative">
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{ background: "oklch(from var(--color-background) l c h / 0.04)", border: "1px solid oklch(from var(--color-background) l c h / 0.1)" }}
            >
              <p className="text-xs uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(from var(--color-accent) l c h / 0.8)" }}>
                {b.callLabel}
              </p>
              <h3
                className="font-display text-3xl md:text-4xl leading-tight mb-5"
                style={{ color: "var(--color-background)" }}
              >
                {b.callH2}
              </h3>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "oklch(from var(--color-background) l c h / 0.5)" }}
              >
                {b.callSubtitle}
              </p>
              <Link
                href="/prenota"
                className="inline-flex items-center gap-2.5 rounded-full bg-background px-7 py-3.5 text-sm font-medium hover:bg-background/90 transition-colors"
                style={{ color: "var(--color-foreground)" }}
              >
                {b.callCta}
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIANZE ────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <AnimatedSection className="mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{b.testiLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{b.testiH2}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedItem key={t.name} delay={i * 0.13}>
                <div className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card px-7 py-8 h-full shadow-sm">
                  <div className="font-display select-none" style={{ fontSize: "3.5rem", color: "var(--color-accent)", opacity: 0.25, lineHeight: 1 }} aria-hidden="true">
                    &ldquo;
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed italic" style={{ color: "oklch(from var(--color-foreground) l c h / 0.7)" }}>
                    {t.quote}
                  </blockquote>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <div className="flex items-center gap-3 border-t border-border/50 pt-5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-display text-xs font-semibold shrink-0"
                      style={{ background: `oklch(from var(--color-accent) l c h / ${0.12 + i * 0.05})`, color: "var(--color-accent)" }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Faq dict={faqDict} />
    </>
  );
}
