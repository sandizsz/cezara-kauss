export default function StructuredData() {
  const currentYear = new Date().getFullYear();
  const eventData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `Cēzara kauss ${currentYear}`,
    description:
      "Prestižs futbola turnīrs Latvijā. Piesakiet savu komandu un cīnieties par trofeju!",
    startDate: `${currentYear}-06-15T09:00:00+03:00`,
    endDate: `${currentYear}-06-15T20:00:00+03:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Futbola stadions",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rīga",
        addressCountry: "LV",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Cēzara kauss",
      url: "https://cezarakauss.lv",
    },
    offers: {
      "@type": "Offer",
      url: "https://cezarakauss.lv#registracija",
      availability: "https://schema.org/InStock",
      validFrom: `${currentYear}-01-01`,
    },
    sport: "Football",
    inLanguage: "lv",
    image: "https://cezarakauss.lv/og-image.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  );
}
