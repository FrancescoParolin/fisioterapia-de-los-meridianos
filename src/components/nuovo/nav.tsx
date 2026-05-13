"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Logo = () => (
  <Link href="/nuovo" className="flex items-center gap-3 shrink-0">
    {/* Symbol: two leaves / meridian paths */}
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="17" stroke="#7a8a6a" strokeWidth="1.2" />
      {/* left leaf */}
      <path
        d="M18 10 C12 10, 8 14, 10 20 C12 26, 18 26, 18 26"
        stroke="#7a8a6a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* right leaf */}
      <path
        d="M18 10 C24 10, 28 14, 26 20 C24 26, 18 26, 18 26"
        stroke="#2b2420"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* center dot */}
      <circle cx="18" cy="18" r="1.5" fill="#7a8a6a" />
    </svg>
    <div className="leading-none">
      <div
        className="font-display text-lg tracking-tight"
        style={{ color: "#2b2420", fontSize: "1.15rem" }}
      >
        Soma & Via
      </div>
      <div className="text-xs tracking-[0.12em] uppercase" style={{ color: "#7a8a6a", fontSize: "0.6rem" }}>
        Corpo · Emozione · Benessere
      </div>
    </div>
  </Link>
);

const links = [
  { label: "Chi sono", href: "/nuovo/chi-sono" },
  { label: "Cosa risolvo", href: "/nuovo/cosa-risolvo" },
  { label: "Servizi", href: "/nuovo/servizi" },
  { label: "Come funziona", href: "/nuovo/come-funziona" },
  { label: "Contatti", href: "/nuovo/contatti" },
];

export function NuovoNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,246,239,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(229,217,192,0.6)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm transition-colors hover:text-accent"
              style={{ color: "#6b5d52" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/nuovo/contatti"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:opacity-85 hover:shadow-md active:scale-95"
          style={{ background: "#7a8a6a", color: "#fff" }}
          aria-label="Prenota la chiamata gratuita da 20 minuti"
        >
          Chiama gratis · 20 min
        </a>

        {/* Mobile: CTA sempre visibile + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#prenota"
            className="inline-flex items-center rounded-full px-4 py-2 text-xs font-medium"
            style={{ background: "#7a8a6a", color: "#fff" }}
          >
            Gratis 20 min
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            className="p-1.5"
            style={{ color: "#2b2420" }}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: "#faf6ef", borderColor: "#e5d9c0" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm py-1"
              style={{ color: "#2b2420" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
