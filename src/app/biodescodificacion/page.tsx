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

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-border/60"
        style={{ background: "linear-gradient(150deg, #fdf8f2 0%, #f5e9d8 45%, #faf6ef 100%)" }}
      >
        {/* organic blobs */}
        <div
          className="pointer-events-none absolute -top-28 -right-28 w-[640px] h-[640px]"
          style={{
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 60%",
            background: "oklch(from var(--color-accent) l c h / 0.09)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 w-[420px] h-[420px]"
          style={{
            borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
            background: "oklch(from var(--color-accent) l c h / 0.06)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 py-36 md:py-44 text-center">
          <span
            className="inline-block text-xs uppercase tracking-[0.25em] text-accent mb-8 px-4 py-1.5 rounded-full border border-accent/30"
            style={{ background: "oklch(from var(--color-accent) l c h / 0.08)" }}
          >
            {b.heroLabel}
          </span>

          <h1 className="font-display leading-[1.0] tracking-tight mb-8" style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}>
            {b.heroH1}
            <br />
            <em className="italic" style={{ color: "var(--color-accent)" }}>
              {b.heroH1em}
            </em>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "oklch(from var(--color-foreground) l c h / 0.6)" }}
          >
            {b.heroSubtitle}
          </p>

          <Link
            href="/prenota"
            className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-9 py-4 text-background font-medium hover:bg-foreground/85 transition-colors shadow-lg text-base"
          >
            {b.heroCta}
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>

          {/* trust row */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
            style={{ color: "oklch(from var(--color-foreground) l c h / 0.4)" }}
          >
            {[b.heroStat1, b.heroStat2, b.heroStat3].map((s, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 inline-block" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── IL CORPO PARLA — dark inverted ──────────────────────── */}
      <section className="bg-foreground border-b border-foreground/80">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-[0.22em] mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              {b.bodyLabel}
            </p>
            <h2
              className="font-display text-4xl md:text-5xl leading-tight mb-7"
              style={{ color: "var(--color-background)" }}
            >
              {b.bodyH2}
            </h2>
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "oklch(from var(--color-background) l c h / 0.6)" }}
            >
              <p>{b.bodyP1}</p>
              <p>{b.bodyP2}</p>
            </div>
          </div>

          {/* giant pull quote */}
          <div className="relative pl-0 md:pl-8">
            <div
              className="font-display select-none leading-[0.8] mb-0"
              style={{ fontSize: "9rem", color: "oklch(from var(--color-accent) l c h / 0.3)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote
              className="font-display text-2xl md:text-3xl italic leading-snug -mt-6"
              style={{ color: "oklch(from var(--color-background) l c h / 0.85)" }}
            >
              Il corpo registra tutto ciò che la mente non riesce a elaborare.
            </blockquote>
            <p
              className="mt-6 text-xs uppercase tracking-[0.2em]"
              style={{ color: "oklch(from var(--color-background) l c h / 0.3)" }}
            >
              — Biologia delle emozioni
            </p>
          </div>
        </div>
      </section>

      {/* ── COS'È ────────────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
            {b.whatLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-12 max-w-2xl">
            {b.whatH2}
          </h2>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3 space-y-4 text-base leading-relaxed" style={{ color: "oklch(from var(--color-foreground) l c h / 0.72)" }}>
              <p>{b.whatP1}</p>
              <p>{b.whatP2}</p>
            </div>
            <div className="md:col-span-2 flex flex-col gap-3">
              <div
                className="rounded-2xl border border-accent/20 px-5 py-4 flex items-start gap-3"
                style={{ background: "oklch(from var(--color-accent) l c h / 0.07)" }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm leading-relaxed" style={{ color: "oklch(from var(--color-foreground) l c h / 0.78)" }}>{b.whatP3}</span>
              </div>
              {[
                { emoji: "🫀", title: "Scienza + emozione", sub: "Basato su ricerca biologica e psicosomatica" },
                { emoji: "🤝", title: "Complementare alla medicina", sub: "Non sostituisce le cure, le affianca" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-card px-5 py-4 flex items-center gap-4">
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div>
                    <div className="font-display text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ────────────────────────────────────── */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 max-w-lg">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
              {b.howLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{b.howH2}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connecting line desktop */}
            <div
              className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px"
              style={{ background: "linear-gradient(to right, transparent, var(--color-accent), transparent)", opacity: 0.2 }}
            />
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col gap-5">
                {/* numbered badge */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold tracking-wider border"
                  style={{
                    background: "oklch(from var(--color-accent) l c h / 0.1)",
                    borderColor: "oklch(from var(--color-accent) l c h / 0.25)",
                    color: "var(--color-accent)",
                  }}
                >
                  {s.n}
                </div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA CAMBIA ─ pills on warm gradient ─────────────── */}
      <section
        className="border-b border-border/60"
        style={{ background: "linear-gradient(160deg, #faf6ef 0%, #f0e8d8 100%)" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{b.outLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-lg">{b.outH2}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {outcomes.map((o) => (
              <div
                key={o.text}
                className="flex items-center gap-3 rounded-full px-5 py-3 bg-background border border-border/60 hover:border-accent/40 transition-colors shadow-sm"
              >
                <span className="text-xl shrink-0" role="img" aria-hidden="true">{o.icon}</span>
                <span className="text-sm" style={{ color: "oklch(from var(--color-foreground) l c h / 0.8)" }}>{o.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREZZO — dark premium card ───────────────────────── */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{b.priceLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{b.priceH2}</h2>
          </div>

          <div className="max-w-sm mx-auto rounded-3xl bg-foreground shadow-2xl overflow-hidden">
            {/* price header */}
            <div
              className="px-8 py-10 text-center border-b"
              style={{ borderColor: "oklch(from var(--color-background) l c h / 0.1)" }}
            >
              <div
                className="font-display leading-none mb-2"
                style={{ fontSize: "6rem", color: "var(--color-accent)" }}
              >
                {b.priceAmount}
              </div>
              <div
                className="flex justify-center gap-4 text-sm mt-3"
                style={{ color: "oklch(from var(--color-background) l c h / 0.45)" }}
              >
                <span>{b.priceDuration}</span>
                <span aria-hidden="true">·</span>
                <span>{b.priceMode}</span>
              </div>
            </div>

            {/* includes */}
            <div className="px-8 py-7 space-y-4">
              {[b.priceInc1, b.priceInc2, b.priceInc3].map((inc) => (
                <div
                  key={inc}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "oklch(from var(--color-background) l c h / 0.7)" }}
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden="true">
                    <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  {inc}
                </div>
              ))}
            </div>

            <div className="px-8 pb-8">
              <Link
                href="/prenota"
                className="block text-center rounded-full py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "var(--color-accent)", color: "var(--color-background)" }}
              >
                {b.priceCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIANZE ────────────────────────────────────── */}
      <section
        className="border-b border-border/60"
        style={{ background: "oklch(from var(--color-accent) l c h / 0.05)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">{b.testiLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{b.testiH2}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="flex flex-col gap-4 rounded-2xl bg-background border border-border/60 px-7 py-8 shadow-sm">
                {/* large quote glyph */}
                <div
                  className="font-display select-none leading-none"
                  style={{ fontSize: "4rem", color: "var(--color-accent)", opacity: 0.3 + i * 0.05 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <blockquote
                  className="flex-1 text-sm leading-relaxed italic"
                  style={{ color: "oklch(from var(--color-foreground) l c h / 0.72)" }}
                >
                  {t.quote}
                </blockquote>
                {/* stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} />)}
                </div>
                {/* author */}
                <div className="flex items-center gap-3 border-t border-border/50 pt-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-semibold shrink-0"
                    style={{
                      background: `oklch(from var(--color-accent) l c h / ${0.12 + i * 0.04})`,
                      color: "var(--color-accent)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIAMATA GRATUITA — dark with blob ──────────────── */}
      <section className="relative overflow-hidden bg-foreground border-b border-foreground/60">
        <div
          className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px]"
          style={{
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 60%",
            background: "oklch(from var(--color-accent) l c h / 0.14)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 w-[320px] h-[320px]"
          style={{
            borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
            background: "oklch(from var(--color-accent) l c h / 0.09)",
            filter: "blur(45px)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-28 md:py-40 text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-6"
            style={{ color: "oklch(from var(--color-accent) l c h / 0.8)" }}
          >
            {b.callLabel}
          </p>
          <h2
            className="font-display leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "var(--color-background)" }}
          >
            {b.callH2}
          </h2>
          <p
            className="leading-relaxed mb-12 max-w-xs mx-auto text-sm"
            style={{ color: "oklch(from var(--color-background) l c h / 0.5)" }}
          >
            {b.callSubtitle}
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2.5 rounded-full px-9 py-4 font-medium transition-opacity hover:opacity-90 text-base"
            style={{ background: "var(--color-accent)", color: "var(--color-background)" }}
          >
            {b.callCta}
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Faq dict={faqDict} />
    </>
  );
}
