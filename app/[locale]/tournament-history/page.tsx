import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { tournamentHistory } from '@/data/tournament-history';
import { getYearPhotos } from '@/data/get-year-photos';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import VestureHero from '@/components/vesture/VestureHero';
import YearSection from '@/components/vesture/YearSection';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'history' });

  const canonical = locale === 'lv'
    ? 'https://cezarakauss.lv/turnira-vesture'
    : 'https://cezarakauss.lv/en/tournament-history';

  return {
    title: `${t('title')} ${t('titleHighlight')} | Cēzara Kauss`,
    description: t('subtitle'),
    alternates: {
      canonical,
      languages: {
        lv: 'https://cezarakauss.lv/turnira-vesture',
        en: 'https://cezarakauss.lv/en/tournament-history',
      },
    },
    openGraph: {
      locale: locale === 'lv' ? 'lv_LV' : 'en_US',
      alternateLocale: locale === 'lv' ? 'en_US' : 'lv_LV',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function TournamentHistoryPage() {
  return (
    <>
      <Navigation />
      <main>
        <VestureHero />
        <div className="bg-black">
          {tournamentHistory.map((yearData, i) => (
            <div key={yearData.year}>
              <YearSection data={yearData} photos={getYearPhotos(yearData.year)} />
              {i < tournamentHistory.length - 1 && (
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <div className="h-px bg-linear-to-r from-transparent via-cesar-gold/40 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
        {tournamentHistory.map((yearData) => (
          <script
            key={`ld-${yearData.year}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'SportsEvent',
                name: `Cēzara Kauss ${yearData.year}`,
                description: `Futbola turnīrs Cēzara Kauss ${yearData.year}`,
                startDate: `${yearData.year}-07-26`,
                location: {
                  '@type': 'Place',
                  name: 'Gulbenes Pilsētas Stadions',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'O. Kalpaka iela 1A',
                    addressLocality: 'Gulbene',
                    addressCountry: 'LV',
                  },
                },
                organizer: { '@type': 'Organization', name: 'Cēzara Kauss', url: 'https://cezarakauss.lv' },
                sport: 'Football',
                inLanguage: 'lv',
              }),
            }}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
