import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  footerDict: Dictionary["footer"];
  navDict: Dictionary["nav"];
};

export function Footer({ footerDict, navDict }: Props) {
  return (
    <footer className="border-t border-border/60 bg-muted/40 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png?v=2" alt="" width={36} height={36} className="h-9 w-9 shrink-0" aria-hidden="true"/>
            <div className="leading-[1.2]">
              <div className="font-display text-base">Fisioterapia</div>
              <div className="font-display text-base text-muted-foreground">de los Meridianos</div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-xs">
            {footerDict.desc}
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">{footerDict.navLabel}</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/chi-sono" className="hover:text-foreground">{navDict.chiSono}</Link></li>
            <li><Link href="/servizi" className="hover:text-foreground">{navDict.servizi}</Link></li>
            <li><Link href="/prenota" className="hover:text-foreground">{navDict.prenota}</Link></li>
            <li><Link href="/contatti" className="hover:text-foreground">{navDict.contatti}</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">{footerDict.contactLabel}</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>Email: <a href="mailto:info@ilariacerutti.it" className="hover:text-foreground">info@ilariacerutti.it</a></li>
            <li>Telefono: <span>+39 000 000 0000</span></li>
            <li>Instagram: <a href="https://instagram.com/ilariacerutti" className="hover:text-foreground">@ilariacerutti</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fisioterapia de los Meridianos. {footerDict.copyright}
      </div>
    </footer>
  );
}
