export type Review = {
  name: string;
  location?: string;
  rating: number;
  text: string;
  service?: string;
};

// TODO: sostituire con recensioni reali (Google, Instagram, WhatsApp)
export const reviews: Review[] = [
  {
    name: "Elena M.",
    location: "Pamplona",
    rating: 5,
    service: "Massaggio Decontratturante",
    text: "Le mani di Ilaria sanno esattamente dove lavorare. Dopo mesi di dolori cervicali, è bastata una seduta per sentirmi un'altra persona. Ambiente accogliente e professionalità rara.",
  },
  {
    name: "Marco R.",
    rating: 5,
    service: "Massaggio Sportivo",
    text: "Faccio trail running e il massaggio sportivo di Ilaria è diventato parte della mia preparazione. Recupero più veloce e zero infortuni da un anno a questa parte.",
  },
  {
    name: "Giulia P.",
    location: "Iruña",
    rating: 5,
    service: "Linfodrenaggio",
    text: "Mi sento a casa appena entro in studio. Ilaria ascolta davvero e costruisce il trattamento su di te. Uscire leggera, in tutti i sensi, è garantito.",
  },
  {
    name: "Alessandro V.",
    rating: 5,
    service: "Massaggio Rilassante",
    text: "Tempi lenti, gesti sicuri, il giusto silenzio. Un'ora fuori dal mondo che mi regalo ogni volta che posso.",
  },
  {
    name: "Chiara D.",
    rating: 5,
    text: "La trovi raramente una persona che unisce competenza tecnica e delicatezza così. Consigliata a occhi chiusi.",
  },
];
