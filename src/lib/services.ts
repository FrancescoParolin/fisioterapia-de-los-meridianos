export type Service = {
  slug: string;
  name: string;
  duration: number; // minutes
  price: number; // EUR
  description: string;
  benefits: string[];
};

// TODO: sostituire con dati reali da Ilaria
export const services: Service[] = [
  {
    slug: "rilassante",
    name: "Massaggio Rilassante",
    duration: 60,
    price: 70,
    description:
      "Un trattamento avvolgente che scioglie le tensioni accumulate e riporta il corpo a uno stato di calma profonda.",
    benefits: ["Riduce lo stress", "Migliora il sonno", "Rilassa la muscolatura"],
  },
  {
    slug: "decontratturante",
    name: "Massaggio Decontratturante",
    duration: 50,
    price: 75,
    description:
      "Lavoro mirato su contratture e nodi muscolari per ridare libertà di movimento alla zona cervicale, dorsale e lombare.",
    benefits: ["Scioglie contratture", "Allevia dolori muscolari", "Migliora la postura"],
  },
  {
    slug: "linfodrenante",
    name: "Linfodrenaggio",
    duration: 60,
    price: 80,
    description:
      "Tecnica delicata e ritmica che stimola il sistema linfatico, favorendo il drenaggio dei liquidi in eccesso.",
    benefits: ["Riduce il gonfiore", "Migliora la circolazione", "Sensazione di leggerezza"],
  },
  {
    slug: "sportivo",
    name: "Massaggio Sportivo",
    duration: 50,
    price: 75,
    description:
      "Pensato per chi pratica attività fisica: prepara il corpo allo sforzo e ne favorisce il recupero.",
    benefits: ["Recupero muscolare", "Prevenzione infortuni", "Maggiore elasticità"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
