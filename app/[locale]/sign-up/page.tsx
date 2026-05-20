import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import RegistrationForm from '@/components/RegistrationForm';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'registration' });

  const canonical = locale === 'lv'
    ? 'https://cezarakauss.lv/registret-komandu'
    : 'https://cezarakauss.lv/en/sign-up';

  return {
    title: `${t('title')} ${t('titleHighlight')} | Cēzara Kauss`,
    description: t('sectionLabel'),
    alternates: {
      canonical,
      languages: {
        lv: 'https://cezarakauss.lv/registret-komandu',
        en: 'https://cezarakauss.lv/en/sign-up',
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

export default function SignUpPage() {
  return (
    <>
      <Navigation />
      <main className="animate-fade-in">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
