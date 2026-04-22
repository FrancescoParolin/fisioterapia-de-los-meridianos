import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary["benefits"];
};

const icons = [
  // shield — formazione certificata
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  // clock — su misura
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>,
  // home — studio
  <svg key="home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>,
  // calendar — flessibilità
  <svg key="cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>,
];

export function BenefitsStrip({ dict }: Props) {
  const benefits = [
    { icon: icons[0], title: dict.b1title, desc: dict.b1desc },
    { icon: icons[1], title: dict.b2title, desc: dict.b2desc },
    { icon: icons[2], title: dict.b3title, desc: dict.b3desc },
    { icon: icons[3], title: dict.b4title, desc: dict.b4desc },
  ];

  return (
    <section className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="flex flex-col gap-3">
            <div className="text-accent">{b.icon}</div>
            <h3 className="font-medium text-base">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
