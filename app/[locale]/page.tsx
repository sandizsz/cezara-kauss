import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HomeContent from '@/components/home/HomeContent';
import StructuredData from '@/components/StructuredData';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  const canonical = locale === 'lv' ? 'https://cezarakauss.lv' : 'https://cezarakauss.lv/en';

  return {
    alternates: {
      canonical,
      languages: {
        lv: 'https://cezarakauss.lv',
        en: 'https://cezarakauss.lv/en',
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

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </>
  );
}
