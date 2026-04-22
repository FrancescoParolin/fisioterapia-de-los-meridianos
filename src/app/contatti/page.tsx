import type { Metadata } from "next";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatti di Ilaria Cerutti: email, telefono, Instagram e indirizzo.",
};

export default async function ContattiPage() {
  const lang = await getLang();
  const d = getDictionary(lang);

  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
        {d.contatti.label}
      </p>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
        {d.contatti.h1} <em className="italic text-accent">{d.contatti.h1em}</em>.
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-16">
        {d.contatti.subtitle}
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <ContactCard
          label="Email"
          value="info@ilariacerutti.it"
          href="mailto:info@ilariacerutti.it"
        />
        <ContactCard
          label="Telefono"
          value="+39 000 000 0000"
          href="tel:+390000000000"
        />
        <ContactCard
          label="Instagram"
          value="@ilariacerutti"
          href="https://instagram.com/ilariacerutti"
        />
        <ContactCard
          label="WhatsApp"
          value="WhatsApp"
          href="https://wa.me/390000000000"
        />
      </div>

      <div className="mt-16 rounded-2xl border border-border/60 bg-card p-8">
        <h2 className="font-display text-2xl mb-4">{d.contatti.whereLabel}</h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          {d.contatti.whereAddress}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {d.contatti.whereHours}
        </p>
      </div>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-accent/60 transition-colors"
    >
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </div>
      <div className="font-display text-xl group-hover:text-accent transition-colors">
        {value}
      </div>
    </a>
  );
}
