import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'rules' });

  const canonical = locale === 'lv' ? 'https://cezarakauss.lv/reglaments' : 'https://cezarakauss.lv/en/rules';

  return {
    title: `${t('title')} ${t('titleHighlight')} | Cēzara kauss`,
    description: t('subtitle'),
    alternates: {
      canonical,
      languages: {
        lv: 'https://cezarakauss.lv/reglaments',
        en: 'https://cezarakauss.lv/en/rules',
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RulesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'rules' });
  const sections = t.raw('sections') as { title: string; items: string[] }[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('title')} ${t('titleHighlight')} | Cēzara kauss`,
    description: t('subtitle'),
    url: locale === 'lv' ? 'https://cezarakauss.lv/reglaments' : 'https://cezarakauss.lv/en/rules',
    inLanguage: locale,
    isPartOf: { '@type': 'WebSite', name: 'Cēzara kauss', url: 'https://cezarakauss.lv' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/turnira_reglaments.webp')" }} />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
            <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
              <span className="hero-label mb-4 md:mb-6 text-cesar-gold text-[10px] md:text-xs">{t('pageTagline')}</span>
              <h1 className="font-display font-bold text-7xl sm:text-8xl md:text-[8rem] uppercase tracking-normal mb-4 md:mb-6" style={{ lineHeight: '0.9' }}>
                {t('title')}<span className="gold-text-gradient ml-[10px]"> {t('titleHighlight')}</span>
              </h1>
              <p className="max-w-lg mx-auto text-zinc-400 text-sm md:text-lg font-medium tracking-tight">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            {sections.map((section, i) => (
              <div key={i} className="mb-10 md:mb-14 last:mb-0">
                <h2 className="font-display text-2xl md:text-3xl text-cesar-gold uppercase mb-4 md:mb-6 pb-3 border-b border-cesar-gold/20">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <p key={j} className="text-zinc-300 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-zinc-800">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
