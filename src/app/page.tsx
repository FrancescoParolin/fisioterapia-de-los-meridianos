import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { Testimonials } from "@/components/testimonials";
import { BenefitsStrip } from "@/components/benefits-strip";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";

export default async function HomePage() {
  const lang = await getLang();
  const dict = getDictionary(lang);
  const d = dict;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92svh] flex items-center">
        {/* bg image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/taconera-7.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 w-full">
          {/* social proof badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/60 px-4 py-2 text-xs mb-8">
            <span className="text-accent">★★★★★</span>
            <span className="text-muted-foreground">{d.hero.badge}</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-2xl mb-6">
            {d.hero.h1}<br />
            <em className="italic text-accent">{d.hero.h1em}</em>
          </h1>

          <p className="text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed mb-10">
            {d.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/85 transition-colors shadow-lg"
            >
              {d.hero.ctaPrimary}
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" clipRule="evenodd"/>
              </svg>
            </Link>
            <a
              href="https://wa.me/390000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-sm px-6 py-3.5 text-sm hover:bg-card transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.523 5.847L.057 23.854a.5.5 0 0 0 .614.614l6.007-1.467C8.265 23.576 10.098 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.63-.527-5.108-1.438l-.362-.218-3.726.91.91-3.726-.218-.362A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {d.hero.ctaWa}
            </a>
          </div>

          {/* trust micro-signals */}
          <div className="mt-10 flex flex-wrap gap-5 text-xs text-muted-foreground">
            {[d.hero.trust1, d.hero.trust2, d.hero.trust3].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-accent" aria-hidden="true"><path d="M8 1l2.163 4.38L15 6.184l-3.5 3.41.826 4.818L8 12.016l-4.326 2.396L4.5 9.594 1 6.184l4.837-.804L8 1z"/></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS STRIP ───────────────────────────────────── */}
      <BenefitsStrip dict={d.benefits} />

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="trattamenti">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {d.services.label}
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-lg">
                {d.services.h2}
              </h2>
            </div>
            <Link
              href="/servizi"
              className="text-sm underline underline-offset-4 decoration-accent decoration-2 hover:text-accent transition-colors"
            >
              {d.services.viewAll}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/prenota?servizio=${s.slug}`}
                className="group relative rounded-2xl border border-border/60 bg-card p-7 hover:border-accent/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl group-hover:text-accent transition-colors">
                    {s.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <div className="font-display text-xl text-accent">€{s.price}</div>
                    <div className="text-xs text-muted-foreground">{s.duration} {d.services.min}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {s.benefits.map((b) => (
                    <li key={b} className="rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-xs font-medium text-accent">
                  {d.services.bookThis}
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" clipRule="evenodd"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <HowItWorks dict={d.howItWorks} />

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {d.about.label}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              {d.about.h2}
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
              <p>{d.about.p1}</p>
              <p>{d.about.p2}</p>
              <p>{d.about.p3}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8 pt-6 border-t border-border/60">
              <div>
                <div className="font-display text-3xl text-accent">10+</div>
                <div className="text-xs text-muted-foreground mt-1">{d.about.stat1}</div>
              </div>
              <div>
                <div className="font-display text-3xl text-accent">500+</div>
                <div className="text-xs text-muted-foreground mt-1">{d.about.stat2}</div>
              </div>
              <div>
                <div className="font-display text-3xl text-accent">100%</div>
                <div className="text-xs text-muted-foreground mt-1">{d.about.stat3}</div>
              </div>
            </div>
            <Link
              href="/chi-sono"
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4 decoration-accent decoration-2 hover:text-accent transition-colors"
            >
              {d.about.readMore}
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/40">
              <Image
                src="/images/taconera-6.jpg"
                alt="Ilaria Cerutti, massaggiatrice professionista"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {d.testimonials.label}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {d.testimonials.h2}
            </h2>
          </div>
          <Testimonials limit={3} />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Faq dict={d.faq} />

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/taconera-10.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-foreground/88" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-background">
          <p className="text-sm uppercase tracking-[0.2em] text-background/50 mb-5">
            {d.finalCta.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {d.finalCta.h2}
          </h2>
          <p className="text-background/70 leading-relaxed mb-10 max-w-md mx-auto">
            {d.finalCta.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 font-medium hover:bg-background/90 transition-colors"
            >
              {d.finalCta.ctaPrimary}
            </Link>
            <a
              href="https://wa.me/390000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 text-background px-6 py-3.5 text-sm hover:bg-background/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.523 5.847L.057 23.854a.5.5 0 0 0 .614.614l6.007-1.467C8.265 23.576 10.098 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.63-.527-5.108-1.438l-.362-.218-3.726.91.91-3.726-.218-.362A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {d.finalCta.ctaWa}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
