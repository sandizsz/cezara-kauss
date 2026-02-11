import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reģistrēt Komandu | Cēzara Kauss 2026",
  description:
    "Piesakiet savu komandu Cēzara Kauss 2026 futbola turnīram. Dalības maksa €100. Formāts 5 vs 5.",
  keywords: [
    "Cēzara kauss reģistrācija",
    "futbola turnīrs pieteikšanās",
    "komandu reģistrācija",
    "Cēzara kauss 2026",
  ],
  openGraph: {
    title: "Reģistrēt Komandu | Cēzara Kauss 2026",
    description:
      "Piesakiet savu komandu Cēzara Kauss 2026 futbola turnīram. Dalības maksa €100. Formāts 5 vs 5.",
    url: "https://cezarakauss.lv/registret-komandu",
    siteName: "Cēzara kauss",
    locale: "lv_LV",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cēzara Kauss 2026 — komandu reģistrācija",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reģistrēt Komandu | Cēzara Kauss 2026",
    description:
      "Piesakiet savu komandu Cēzara Kauss 2026 futbola turnīram. Dalības maksa €100.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cezarakauss.lv/registret-komandu",
  },
};

export default function RegistretKomandu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Cēzara Kauss 2026",
    description:
      "Piesakiet savu komandu Cēzara Kauss 2026 futbola turnīram. Dalības maksa €100. Formāts 5 vs 5.",
    startDate: "2026-07-25T09:00:00+03:00",
    endDate: "2026-07-25T20:00:00+03:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Gulbenes pilsētas stadions",
      address: {
        "@type": "PostalAddress",
        streetAddress: "O. Kalpaka iela 1A",
        addressLocality: "Gulbene",
        addressCountry: "LV",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Cēzara Kauss",
      url: "https://cezarakauss.lv",
    },
    offers: {
      "@type": "Offer",
      url: "https://cezarakauss.lv/registret-komandu",
      price: "100",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    sport: "Football",
    inLanguage: "lv",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="animate-fade-in">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
