import { Metadata } from "next";
import { tournamentHistory } from "@/data/tournament-history";
import { getYearPhotos } from "@/data/get-year-photos";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import VestureHero from "@/components/vesture/VestureHero";
import YearSection from "@/components/vesture/YearSection";

export const metadata: Metadata = {
  title: "Turnīra Vēsture | Cēzara Kauss",
  description:
    "Cēzara Kauss futbola turnīra vēsture — rezultāti, foto galerija, statistika un komandas no visiem turnīriem kopš 2024. gada.",
  keywords: [
    "Cēzara kauss vēsture",
    "futbola turnīrs rezultāti",
    "Cēzara kauss 2024",
    "Cēzara kauss 2025",
    "futbola turnīrs Gulbenē",
    "turnīra foto",
  ],
  openGraph: {
    title: "Turnīra Vēsture | Cēzara Kauss",
    description:
      "Rezultāti, foto galerija un statistika no visiem Cēzara Kauss turnīriem.",
    url: "https://cezarakauss.lv/turnira-vesture",
    siteName: "Cēzara kauss",
    locale: "lv_LV",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cēzara Kauss turnīra vēsture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnīra Vēsture | Cēzara Kauss",
    description:
      "Rezultāti, foto galerija un statistika no visiem Cēzara Kauss turnīriem.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cezarakauss.lv/turnira-vesture",
  },
};

export default function TurniraVesturePage() {
  return (
    <>
      <Navigation />
      <main>
        <VestureHero />

      <div className="bg-black">
        {tournamentHistory.map((yearData, i) => (
          <div key={yearData.year}>
            <YearSection data={yearData} photos={getYearPhotos(yearData.year)} />
            {/* Gold divider between years */}
            {i < tournamentHistory.length - 1 && (
              <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="h-px bg-linear-to-r from-transparent via-cesar-gold/40 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* JSON-LD structured data for each tournament year */}
      {tournamentHistory.map((yearData) => (
        <script
          key={`ld-${yearData.year}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              name: `Cēzara Kauss ${yearData.year}`,
              description: `Futbola turnīrs Cēzara Kauss ${yearData.year} — ${yearData.teams.length} komandas, uzvarētāji: ${yearData.winner.name}`,
              startDate: `${yearData.year}-07-26`,
              location: {
                "@type": "Place",
                name: "Gulbenes Pilsētas Stadions",
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
              sport: "Football",
              inLanguage: "lv",
            }),
          }}
        />
      ))}
      </main>
      <Footer />
    </>
  );
}
