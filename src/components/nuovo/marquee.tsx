"use client";

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden border-y border-border/60 bg-foreground py-4 select-none"
      aria-hidden="true"
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-8 text-sm uppercase tracking-[0.18em]"
            style={{ color: "oklch(from var(--color-background) l c h / 0.5)" }}
          >
            {item}
            <span
              className="inline-block w-1 h-1 rounded-full shrink-0"
              style={{ background: "var(--color-accent)", opacity: 0.5 }}
            />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
