import { NuovoNav } from "@/components/nuovo/nav";
import { NuovoHero } from "@/components/nuovo/hero";
import { NuovoProblemi } from "@/components/nuovo/problemi";
import { NuovoMetodo } from "@/components/nuovo/metodo";
import { NuovoServizi } from "@/components/nuovo/servizi";
import { NuovoChiSono } from "@/components/nuovo/chi-sono";
import { NuovoFaq } from "@/components/nuovo/faq";
import { NuovoCtaFinale } from "@/components/nuovo/cta-finale";
import { NuovoFooter } from "@/components/nuovo/footer";

export default function NuovoPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <NuovoNav />
      <NuovoHero />
      <NuovoProblemi />
      <NuovoMetodo />
      <NuovoServizi />
      <NuovoChiSono />
      <NuovoFaq />
      <NuovoCtaFinale />
      <NuovoFooter />
    </div>
  );
}
