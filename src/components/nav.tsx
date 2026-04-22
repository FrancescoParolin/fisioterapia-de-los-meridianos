"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Dictionary, Lang } from "@/lib/i18n";

type NavDict = Dictionary["nav"];

type Props = {
  dict: NavDict;
  lang: Lang;
};

export function Nav({ dict, lang }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // chiudi al cambio pagina
  useEffect(() => { setOpen(false); }, [pathname]);

  // blocca scroll body quando aperto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "/chi-sono", label: dict.chiSono },
    { href: "/servizi", label: dict.servizi },
    { href: "/contatti", label: dict.contatti },
  ];

  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-75 transition-opacity shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png?v=2"
              alt="Fisioterapia de los Meridianos"
              width={40}
              height={40}
              className="h-[62px] w-[62px] shrink-0"
            />
            <div className="hidden sm:block leading-[1.2]">
              <div className="font-display text-sm tracking-tight">Fisioterapia</div>
              <div className="font-display text-sm tracking-tight text-muted-foreground">de los Meridianos</div>
            </div>
          </Link>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors ${
                  pathname === l.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* language switcher — desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher currentLang={lang} />
            </div>

            <Link
              href="/prenota"
              className="hidden sm:inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm text-background hover:bg-foreground/85 transition-colors"
            >
              {dict.prenota}
            </Link>

            {/* hamburger */}
            <button
              type="button"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE DRAWER ───────────────────────────────────── */}
      {open && (
        <div
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-[200] flex flex-col"
          style={{ backgroundColor: "#faf6ef" }}
        >
          <div className="flex flex-col flex-1 px-6 pt-8 pb-12 gap-0 border-t border-black/10 overflow-y-auto">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-display text-4xl py-5 border-b border-black/10 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/prenota"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-4 text-sm text-background hover:bg-foreground/85 transition-colors"
            >
              {dict.prenotaLong}
            </Link>
            {/* language switcher — mobile */}
            <div className="mt-8 flex justify-start">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
