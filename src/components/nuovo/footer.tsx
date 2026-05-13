
const Logo = () => (
  <div className="flex items-center gap-2.5">
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="17" stroke="rgba(122,138,106,0.5)" strokeWidth="1.2" />
      <path d="M18 10 C12 10, 8 14, 10 20 C12 26, 18 26, 18 26" stroke="#7a8a6a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M18 10 C24 10, 28 14, 26 20 C24 26, 18 26, 18 26" stroke="rgba(250,246,239,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="18" r="1.5" fill="#7a8a6a" />
    </svg>
    <div className="leading-none">
      <div className="font-display text-sm" style={{ color: "rgba(250,246,239,0.7)" }}>Soma & Via</div>
    </div>
  </div>
);

const navLinks = [
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Cosa risolvo", href: "#problemi" },
  { label: "Servizi", href: "#servizi" },
  { label: "Come funziona", href: "#metodo" },
];

export function NuovoFooter() {
  return (
    <footer
      id="footer"
      style={{ background: "#1a1410", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(250,246,239,0.35)" }}>
              Massaggi terapeutici e Biodescodificación a Pamplona.
              <br />
              <em>Libera il dolore dalla sua radice.</em>
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="[LINK_INSTAGRAM]"
                aria-label="Seguici su Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" style={{ color: "rgba(250,246,239,0.5)" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="[LINK_FACEBOOK]"
                aria-label="Seguici su Facebook"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "rgba(250,246,239,0.5)" }}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(250,246,239,0.25)" }}>
              Navigazione
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(250,246,239,0.45)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(250,246,239,0.25)" }}>
              Contatti
            </p>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: "rgba(250,246,239,0.45)" }}>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: "#7a8a6a" }}>
                  <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
                  <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
                </svg>
                <a href="mailto:[EMAIL_CONTATTO]" className="hover:text-white transition-colors">
                  [EMAIL_CONTATTO]
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: "#7a8a6a" }}>
                  <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:[TELEFONO]" className="hover:text-white transition-colors">
                  [TELEFONO]
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: "#7a8a6a" }}>
                  <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.088 17 12.508 17 9A7 7 0 1 0 3 9c0 3.507 1.698 6.088 3.355 7.584a13.731 13.731 0 0 0 2.274 1.765 11.842 11.842 0 0 0 1.038.573l.018.008.006.003zM10 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" clipRule="evenodd" />
                </svg>
                <span>Pamplona, Spagna</span>
              </li>
            </ul>

            <a
              href="[LINK_CALENDLY]"
              className="mt-6 inline-flex items-center gap-2 text-xs rounded-full px-4 py-2 font-medium transition-colors hover:opacity-85"
              style={{ background: "#7a8a6a", color: "#fff" }}
            >
              Prenota chiamata gratuita
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(250,246,239,0.2)" }}
        >
          <p>© {new Date().getFullYear()} Soma & Via · Ilaria Cecutti. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Medical disclaimer */}
        <p className="mt-6 text-xs leading-relaxed" style={{ color: "rgba(250,246,239,0.12)" }}>
          Le sessioni di Biodescodificación e i massaggi terapeutici sono pratiche complementari e non sostituiscono
          diagnosi, terapie mediche o psicologiche prescritte da professionisti sanitari abilitati.
        </p>
      </div>
    </footer>
  );
}
