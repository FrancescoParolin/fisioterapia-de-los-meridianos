"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary["faq"];
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium leading-snug pr-4">{q}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clipRule="evenodd"/>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}
      >
        <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
}

export function Faq({ dict }: Props) {
  const faqs = [
    { q: dict.q1, a: dict.a1 },
    { q: dict.q2, a: dict.a2 },
    { q: dict.q3, a: dict.a3 },
    { q: dict.q4, a: dict.a4 },
    { q: dict.q5, a: dict.a5 },
    { q: dict.q6, a: dict.a6 },
  ];

  return (
    <section className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {dict.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            {dict.h2}
          </h2>
        </div>
        <div>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
