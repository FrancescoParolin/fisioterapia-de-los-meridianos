import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { Testimonials } from "@/components/testimonials";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Tutti i trattamenti di massaggio offerti da Ilaria Cerutti: rilassante, decontratturante, linfodrenaggio, sportivo.",
};

export default async function ServiziPage() {
  const lang = await getLang();
  const d = getDictionary(lang);

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {d.servizi.label}
        </p>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6 max-w-3xl">
          {d.servizi.h1}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
          {d.servizi.subtitle}
        </p>

        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-border/40 mb-16">
          <Image
            src="/images/taconera-7.jpg"
            alt="Trattamento in studio"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          {services.map((s) => (
            <section
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 rounded-2xl border border-border/60 bg-card p-8 md:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <h2 className="font-display text-3xl md:text-4xl">{s.name}</h2>
                <div className="flex items-baseline gap-6 text-sm">
                  <span className="text-muted-foreground">
                    {s.duration} {d.servizi.min}
                  </span>
                  <span className="font-display text-2xl text-accent">
                    €{s.price}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {s.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-8">
                {s.benefits.map((b) => (
                  <li
                    key={b}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={`/prenota?servizio=${s.slug}`}
                className="inline-flex items-center text-sm underline underline-offset-4 decoration-accent decoration-2 hover:text-accent transition-colors"
              >
                {d.servizi.bookThis}
              </Link>
            </section>
          ))}
        </div>
      </div>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {d.servizi.reviewsLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {d.servizi.reviewsH2}
            </h2>
          </div>
          <Testimonials limit={3} />
        </div>
      </section>
    </>
  );
}
