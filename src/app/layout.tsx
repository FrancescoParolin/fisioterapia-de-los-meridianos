import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { getLang } from "@/lib/get-lang";
import { getDictionary } from "@/lib/i18n";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

// TODO: aggiorna città reale
const CITY = "Pamplona";
const BUSINESS_NAME = "Fisioterapia de los Meridianos";
const BASE_URL = "https://fisioterapiadelosmeridianos.com"; // TODO: dominio reale

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `Fisioterapia ${CITY} | ${BUSINESS_NAME}`,
    template: `%s · Fisioterapia ${CITY} | ${BUSINESS_NAME}`,
  },
  description: `Fisioterapia professionale a ${CITY} — trattamenti personalizzati, massaggi terapeutici, terapia manuale e riabilitazione. Prenota la tua sessione con Ilaria Cerutti.`,
  keywords: [
    `fisioterapia ${CITY}`,
    `fisioterapeuta ${CITY}`,
    "terapia manual",
    "masaje terapéutico",
    "rehabilitación",
    "bienestar",
    "Ilaria Cerutti",
    "Fisioterapia de los Meridianos",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: BASE_URL,
    siteName: BUSINESS_NAME,
    title: `Fisioterapia ${CITY} | ${BUSINESS_NAME}`,
    description: `Trattamenti personalizzati a ${CITY}. Prenota la tua sessione con Ilaria Cerutti.`,
    images: [{ url: "/images/taconera-7.jpg", width: 2400, alt: "Fisioterapia de los Meridianos" }],
  },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true },
};

// LocalBusiness structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  description: `Fisioterapia professionale a ${CITY}. Trattamenti personalizzati: terapia manuale, massaggio terapeutico, linfodrenaggio, riabilitazione.`,
  url: BASE_URL,
  telephone: "+390000000000", // TODO
  email: "info@ilariacerutti.com", // TODO
  address: {
    "@type": "PostalAddress",
    streetAddress: "", // TODO
    addressLocality: CITY,
    addressCountry: "ES",
  },
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://instagram.com/ilariacerutti"], // TODO
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLang();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav dict={dict.nav} lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer footerDict={dict.footer} navDict={dict.nav} />
        <FloatingCta />
      </body>
    </html>
  );
}
