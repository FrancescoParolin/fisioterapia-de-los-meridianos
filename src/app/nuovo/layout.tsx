import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soma & Via — Massaggi e Biodescodificación a Pamplona",
  description:
    "Libera il dolore dalla sua radice. Percorso integrato di massaggio terapeutico e Biodescodificación con Ilaria Cerutti a Pamplona. Prima chiamata gratuita da 20 minuti.",
};

export default function NuovoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Nasconde nav, footer e floating CTA del sito principale su questa route */}
      <style>{`
        body > header,
        body > footer,
        body > div.fixed { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
