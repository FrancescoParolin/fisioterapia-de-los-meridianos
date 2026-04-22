import { reviews } from "@/lib/reviews";

function Stars({ n }: { n: number }) {
  return (
    <div
      className="flex gap-0.5 text-accent"
      aria-label={`${n} stelle su 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.7 6.2.7-4.6 4.3 1.3 6.2L10 15.3l-5.5 3.1 1.3-6.2L1.2 7.9l6.2-.7z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((r, i) => (
        <figure
          key={i}
          className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col"
        >
          <Stars n={r.rating} />
          <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
            <p>&ldquo;{r.text}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-6 pt-4 border-t border-border/60 text-sm">
            <div className="font-medium">{r.name}</div>
            <div className="text-muted-foreground text-xs mt-0.5">
              {[r.service, r.location].filter(Boolean).join(" · ")}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
