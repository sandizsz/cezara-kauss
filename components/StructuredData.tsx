export default function StructuredData() {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Cēzara kauss 2026",
    description:
      "Prestižs futbola turnīrs Latvijā. Piesakiet savu komandu un cīnieties par trofeju!",
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
      name: "Cēzara kauss",
      url: "https://cezarakauss.lv",
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
