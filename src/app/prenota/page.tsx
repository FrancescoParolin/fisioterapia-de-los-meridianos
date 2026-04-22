import type { Metadata } from "next";
import { services } from "@/lib/services";
import { BookingForm } from "./booking-form";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Prenota",
  description: "Prenota una sessione di massaggio con Ilaria Cerutti.",
};

type Props = {
  searchParams: Promise<{ servizio?: string }>;
};

export default async function PrenotaPage({ searchParams }: Props) {
  const [{ servizio }, lang] = await Promise.all([searchParams, getLang()]);
  const d = getDictionary(lang);
  const preselected = services.find((s) => s.slug === servizio)?.slug;

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
        {d.prenota.label}
      </p>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
        {d.prenota.h1} <em className="italic text-accent">{d.prenota.h1em}</em>.
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
        {d.prenota.subtitle}
      </p>

      <BookingForm services={services} preselected={preselected} dict={d.prenota} />
    </div>
  );
}
