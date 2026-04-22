"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SUPPORTED_LANGS, LANG_FLAGS, LANG_LABELS, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function select(lang: Lang) {
    document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    setOpen(false);
    router.refresh();
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-muted"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span aria-hidden="true">{LANG_FLAGS[currentLang]}</span>
        <span className="uppercase font-medium tracking-wide text-xs">
          {currentLang}
        </span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <>
          {/* backdrop — close on outside click */}
          <div
            className="fixed inset-0 z-[290]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            role="listbox"
            aria-label="Language"
            className="absolute right-0 top-full mt-1 z-[300] bg-background border border-border rounded-xl shadow-lg py-1 min-w-[148px]"
          >
            {SUPPORTED_LANGS.map((lang) => (
              <button
                key={lang}
                type="button"
                role="option"
                aria-selected={lang === currentLang}
                onClick={() => select(lang)}
                className={`flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left transition-colors hover:bg-muted ${
                  lang === currentLang
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                <span aria-hidden="true">{LANG_FLAGS[lang]}</span>
                <span>{LANG_LABELS[lang]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
