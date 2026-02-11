import { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://cezarakauss.lv"),
  title: `Cēzara kauss ${currentYear} | Futbola Turnīrs`,
  description: `Piesakies amatieru futbola turnīram Cēzara kauss ${currentYear}. Reģistrē savu komandu un piedalies cīņā par trofeju!`,
  keywords: [
    "Cēzara kauss",
    "futbola turnīrs",
    "futbols Latvijā",
    "futbola sacensības",
    "komandu reģistrācija",
  ],
  authors: [{ name: "Cēzara kauss" }],
  openGraph: {
    title: `Cēzara kauss ${currentYear} | Futbola Turnīrs`,
    description: `Piesakies prestižajam futbola turnīram Cēzara kauss ${currentYear}. Reģistrē savu komandu!`,
    url: "https://cezarakauss.lv",
    siteName: "Cēzara kauss",
    locale: "lv_LV",
    type: "website",
    images: [
      {
        url: "/images/hero_image.webp",
        width: 1200,
        height: 630,
        alt: "Cēzara kauss futbola turnīrs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Cēzara kauss ${currentYear} | Futbola Turnīrs`,
    description: `Piesakies amatieru futbola turnīram Cēzara kauss ${currentYear}.`,
    images: ["/images/hero_image.webp"],
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
