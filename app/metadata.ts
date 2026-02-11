import { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://cezarakauss.lv"),
  title: "Cēzara kauss | Futbola Turnīrs",
  description:
    "Piesakies amatieru futbola turnīram Cēzara kauss. Reģistrē savu komandu un piedalies cīņā par trofeju!",
  keywords: [
    "Cēzara kauss",
    "futbola turnīrs",
    "minifutbola turnīrs",
    "futbols Latvijā",
    "futbola sacensības",
    "komandu reģistrācija",
  ],
  authors: [{ name: "Cēzara kauss" }],
  openGraph: {
    title: "Cēzara kauss | Futbola Turnīrs",
    description:
      "Piesakies amatieru futbola turnīram Cēzara kauss. Reģistrē savu komandu!",
    url: "https://cezarakauss.lv",
    siteName: "Cēzara kauss",
    locale: "lv_LV",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cēzara kauss futbola turnīrs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cēzara kauss 2025 | Futbola Turnīrs",
    description: "Piesakies amatieru futbola turnīram Cēzara kauss",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cezarakauss.lv",
    languages: {
      "lv-LV": "https://cezarakauss.lv",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};
