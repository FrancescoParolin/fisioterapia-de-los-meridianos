import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary["howItWorks"];
};

export function HowItWorks({ dict }: Props) {
  const steps = [
    { n: "01", title: dict.s1title, desc: dict.s1desc },
    { n: "02", title: dict.s2title, desc: dict.s2desc },
    { n: "03", title: dict.s3title, desc: dict.s3desc },
  ];

  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {dict.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            {dict.h2}
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
  );
}
