import type { Metadata } from "next";
import Image from "next/image";
import { Testimonials } from "@/components/testimonials";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Scopri il percorso e la filosofia di Ilaria Cerutti, massaggiatrice professionista a Pamplona.",
};

export default async function ChiSonoPage() {
  const lang = await getLang();
  const d = getDictionary(lang);

  return (
    <>
      <article className="mx-auto max-w-5xl px-6 py-24 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            {d.chiSono.label}
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-10">
            {d.chiSono.h1}{" "}
            <em className="italic text-accent">{d.chiSono.h1em}</em>.
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>{d.chiSono.p1}</p>
            <p>{d.chiSono.p2}</p>
            <p>{d.chiSono.p3}</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/40 md:sticky md:top-24">
            <Image
              src="/images/taconera-10.jpg"
              alt="Ilaria Cerutti al lavoro"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </article>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-16 grid sm:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-4xl mb-2">10+</div>
            <div className="text-sm text-muted-foreground">{d.chiSono.stat1}</div>
          </div>
          <div>
            <div className="font-display text-4xl mb-2">500+</div>
            <div className="text-sm text-muted-foreground">{d.chiSono.stat2}</div>
          </div>
          <div>
            <div className="font-display text-4xl mb-2">4</div>
            <div className="text-sm text-muted-foreground">{d.chiSono.stat3}</div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {d.chiSono.reviewsLabel}
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {d.chiSono.reviewsH2}
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  );
}
