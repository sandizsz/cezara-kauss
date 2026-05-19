# i18n Language Switcher — Implementation Plan (Part 4)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

Tasks 10–15: Rules page, Registration form, Metadata, Sitemap, API emails, Verification.

---

## Task 10: Update rules page to use translations

**Files:**
- Modify: `app/[locale]/rules/page.tsx`

This page was created in Task 2 Step 5 as a copy of the old `app/reglaments/page.tsx`. Now replace the hardcoded `sections` array and static metadata with i18n-driven equivalents.

- [ ] **Step 1: Rewrite `app/[locale]/rules/page.tsx`**

```tsx
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

type Section = {
  title: string;
  items: string[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const lvUrl = 'https://cezarakauss.lv/reglaments';
  const enUrl = 'https://cezarakauss.lv/en/rules';
  const canonical = isEn ? enUrl : lvUrl;

  return {
    title: isEn ? 'Tournament Rules | Cēzara Kauss' : 'Turnīra Reglaments | Cēzara kauss',
    description: isEn
      ? 'Official rules and competition format for the Cēzara Kauss football tournament.'
      : 'Cēzara kauss futbola turnīra oficiālais reglaments — noteikumi, pieteikšanās kārtība, norises kārtība, disciplīna un balvu fonds.',
    keywords: isEn
      ? ['Cezara Kauss rules', 'football tournament rules', 'Gulbene football', 'tournament regulations']
      : ['Cēzara kauss reglaments', 'futbola turnīrs noteikumi', 'Cēzara kauss noteikumi', 'turnīra reglaments'],
    openGraph: {
      title: isEn ? 'Tournament Rules | Cēzara Kauss' : 'Turnīra Reglaments | Cēzara kauss',
      description: isEn
        ? 'Official rules for the Cēzara Kauss football tournament.'
        : 'Cēzara kauss futbola turnīra oficiālais reglaments.',
      url: canonical,
      siteName: 'Cēzara kauss',
      locale: isEn ? 'en_GB' : 'lv_LV',
      type: 'website',
      images: [{ url: '/images/turnira_reglaments.webp', width: 1200, height: 630, alt: 'Cēzara kauss turnīra reglaments' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Tournament Rules | Cēzara Kauss' : 'Turnīra Reglaments | Cēzara kauss',
      images: ['/images/turnira_reglaments.webp'],
    },
    alternates: {
      canonical,
      languages: {
        lv: lvUrl,
        en: enUrl,
        'x-default': lvUrl,
      },
    },
  };
}

export default async function RulesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'rules' });
  const sections = t.raw('sections') as Section[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title') + ' ' + t('titleHighlight'),
    description: t('subtitle'),
    url: locale === 'en' ? 'https://cezarakauss.lv/en/rules' : 'https://cezarakauss.lv/reglaments',
    inLanguage: locale,
    isPartOf: { '@type': 'WebSite', name: 'Cēzara kauss', url: 'https://cezarakauss.lv' },
    about: {
      '@type': 'SportsEvent',
      name: 'Cēzara kauss 2026',
      sport: 'Football',
      location: {
        '@type': 'Place',
        name: 'Gulbenes pilsētas stadions',
        address: { '@type': 'PostalAddress', streetAddress: 'O. Kalpaka iela 1A', addressLocality: 'Gulbene', addressCountry: 'LV' },
      },
    },
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
              <span className="hero-label mb-4 md:mb-6 text-cesar-gold text-[10px] md:text-xs">
                {t('pageTagline')}
              </span>
              <h1 className="font-display font-bold text-7xl sm:text-8xl md:text-[8rem] uppercase tracking-normal mb-4 md:mb-6" style={{ lineHeight: '0.9' }}>
                {t('title')}
                <span className="gold-text-gradient ml-[10px]">{t('titleHighlight')}</span>
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
```

- [ ] **Step 2: Commit**

```bash
git add app/\[locale\]/rules/page.tsx
git commit -m "feat: translate rules page with i18n sections"
```

---

## Task 11: Update RegistrationForm and sign-up page

**Files:**
- Modify: `components/RegistrationForm.tsx`

The form is a client component. Add `useTranslations('registration')` and `useLocale()`. Append the locale as a hidden field to the fetch body so the API can select the correct email template.

- [ ] **Step 1: Rewrite `components/RegistrationForm.tsx`**

```tsx
"use client";

import { useState, useRef, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/lib/navigation";

interface FormData {
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
  comment: string;
}

export default function RegistrationForm() {
  const t = useTranslations("registration");
  const locale = useLocale();

  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError(t("logoError"));
      return;
    }
    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
    setError("");
  };

  const removeLogo = () => {
    setLogoFile(null);
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const body = new window.FormData();
      body.append("teamName", formData.teamName);
      body.append("captainName", formData.captainName);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("comment", formData.comment);
      body.append("locale", locale);
      if (logoFile) {
        body.append("logo", logoFile);
      }

      const res = await fetch("/api/register", {
        method: "POST",
        body,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || t("genericError"));
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : t("genericError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="registracija" className="pt-28 pb-20 md:pt-40 md:pb-32 max-w-4xl mx-auto px-4 md:px-6 text-center animate-fade-in">
        <div className="bg-cesar-gold w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-8 md:mb-12 rounded-full">
          <svg className="w-10 h-10 md:w-12 md:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-5xl md:text-8xl font-display font-bold text-black mb-4 md:mb-6 uppercase tracking-normal" style={{ lineHeight: "0.9" }}>
          {t("successTitle")} <span className="gold-text-gradient">{t("successTitleHighlight")}</span>
        </h2>
        <div className="text-zinc-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 px-2 space-y-4">
          <p>{t("successP1")}</p>
          <p>{t("successP2")}</p>
          <p>{t("successP3")}</p>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-10 py-5 md:px-16 md:py-6 bg-black text-cesar-gold font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-sm border-b-4 border-cesar-gold"
        >
          {t("backButton")}
        </button>
      </section>
    );
  }

  return (
    <section id="registracija" className="pt-28 pb-12 md:pt-36 md:pb-32 max-w-7xl mx-auto px-4 md:px-6 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-20 gap-4 md:gap-6">
        <div>
          <span className="section-label mb-3 md:mb-4">{t("sectionLabel")}</span>
          <h1 className="font-display text-7xl sm:text-8xl md:text-[8rem] uppercase tracking-normal text-black" style={{ lineHeight: "0.9" }}>
            {t("title")} <br /><span className="gold-text-gradient">{t("titleHighlight")}</span>
          </h1>
        </div>
        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-2 bg-black px-5 py-4 md:p-8 border-b-8 border-cesar-gold">
          <span className="text-zinc-500 font-extrabold text-[9px] md:text-[10px] uppercase tracking-widest">{t("feeLabel")}</span>
          <span className="text-3xl md:text-6xl font-display text-cesar-gold leading-none">€150.00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-16">
        <div className="order-1 lg:order-2 lg:col-span-8 p-5 md:p-12 card-shadow border-t-8 border-black">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">{t("teamNameLabel")}</label>
                <input
                  type="text"
                  required
                  placeholder="FK Cezars"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">{t("captainLabel")}</label>
                <input
                  type="text"
                  required
                  placeholder="Andris Vītols"
                  value={formData.captainName}
                  onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">{t("phoneLabel")}</label>
                <input
                  type="tel"
                  required
                  placeholder="+371 2000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">{t("emailLabel")}</label>
                <input
                  type="email"
                  required
                  placeholder="EMAIL@DOMAIN.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">{t("logoLabel")}</label>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
              {logoPreview ? (
                <div className="flex items-center gap-4 bg-stadium-gray p-4 border-b-4 border-zinc-200">
                  <img src={logoPreview ?? undefined} alt="Logo preview" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-black truncate">{logoFile?.name}</p>
                    <p className="text-[10px] text-zinc-400 font-bold">
                      {logoFile ? `${(logoFile.size / 1024 / 1024).toFixed(2)} MB` : null}
                    </p>
                  </div>
                  <button type="button" onClick={removeLogo} className="p-2 hover:bg-zinc-200 transition-colors rounded-sm">
                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-stadium-gray border-4 border-dashed border-zinc-200 p-6 md:p-8 flex flex-col items-center gap-3 hover:border-cesar-gold transition-all group cursor-pointer"
                >
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-zinc-300 group-hover:text-cesar-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] md:text-xs text-zinc-400 font-extrabold tracking-widest uppercase">{t("uploadButton")}</span>
                  <span className="text-[9px] text-zinc-300 font-bold tracking-wider">{t("uploadTypes")}</span>
                </button>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">{t("commentLabel")}</label>
              <textarea
                placeholder={t("commentPlaceholder")}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={3}
                className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
              />
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm font-bold">{error}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-cesar-gold font-display font-bold text-2xl md:text-6xl py-6 md:py-12 hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 md:gap-8 group rounded-sm border-b-8 border-cesar-gold disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? t("submitting") : t("submitButton")}
              <svg className="w-6 h-6 md:w-10 md:h-10 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </form>
        </div>

        <div className="order-2 lg:order-1 lg:col-span-4 space-y-4 md:space-y-8">
          <div className="bg-stadium-gray p-4 md:p-10 space-y-5 md:space-y-10 rounded-sm border-l-8 border-black">
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-3 md:pb-4">
              <svg className="w-5 h-5 text-cesar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-display text-2xl md:text-4xl uppercase tracking-wider">{t("rulesTitle")}</h3>
            </div>
            <ul className="text-zinc-500 text-[10px] md:text-[11px] font-extrabold space-y-3 md:space-y-6 uppercase tracking-widest">
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> {t("rulesMinAge")}</li>
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> {t("rulesFormat")}</li>
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> {t("rulesMaxPlayers")}</li>
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> {t("rulesGames")}</li>
            </ul>
            <Link
              href="/rules"
              className="flex items-center justify-center gap-2 w-full bg-black text-cesar-gold font-extrabold text-[10px] md:text-xs px-4 py-3 md:py-4 uppercase tracking-wide md:tracking-[0.2em] hover:bg-zinc-800 transition-all border-b-4 border-cesar-gold"
            >
              {t("rulesLink")}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="p-4 md:p-8 border-2 border-dashed border-cesar-gold bg-cesar-gold/5 flex gap-3">
            <svg className="w-5 h-5 text-cesar-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-zinc-600 text-[9px] md:text-[10px] font-bold leading-relaxed uppercase tracking-widest italic">
              {t("limitWarning")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/RegistrationForm.tsx
git commit -m "feat: translate RegistrationForm, add locale to submission"
```

---

## Task 12: Add `generateMetadata` to home, history, and sign-up pages

**Files:**
- Modify: `app/[locale]/page.tsx`
- Modify: `app/[locale]/tournament-history/page.tsx`
- Modify: `app/[locale]/sign-up/page.tsx`

Each page needs a `generateMetadata` export with locale-specific titles, canonical URLs, hreflang alternates, and OpenGraph locale. None of these use i18n translation files — metadata is hardcoded per locale for performance and reliability.

- [ ] **Step 1: Add `generateMetadata` to `app/[locale]/page.tsx`**

Replace the file content:

```tsx
import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HomeContent from '@/components/home/HomeContent';
import StructuredData from '@/components/StructuredData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const lvUrl = 'https://cezarakauss.lv';
  const enUrl = 'https://cezarakauss.lv/en';
  const canonical = isEn ? enUrl : lvUrl;

  return {
    title: isEn ? 'Cēzara Kauss 2026 | Football Tournament' : 'Cēzara kauss 2026 | Futbola Turnīrs',
    description: isEn
      ? 'Register your team for Cēzara Kauss 2026 — an amateur football tournament in Gulbene, Latvia. July 25, 2026.'
      : 'Piesakies amatieru futbola turnīram Cēzara kauss 2026. Reģistrē savu komandu un piedalies cīņā par trofeju!',
    keywords: isEn
      ? ['Cezara Kauss', 'football tournament Latvia', 'amateur football tournament', 'Gulbene football', 'team registration']
      : ['Cēzara kauss', 'futbola turnīrs', 'futbols Latvijā', 'futbola sacensības', 'komandu reģistrācija'],
    openGraph: {
      title: isEn ? 'Cēzara Kauss 2026 | Football Tournament' : 'Cēzara kauss 2026 | Futbola Turnīrs',
      description: isEn
        ? 'Register your team for Cēzara Kauss 2026 — amateur football in Gulbene, Latvia.'
        : 'Piesakies prestižajam futbola turnīram Cēzara kauss 2026. Reģistrē savu komandu!',
      url: canonical,
      siteName: 'Cēzara kauss',
      locale: isEn ? 'en_GB' : 'lv_LV',
      type: 'website',
      images: [{ url: '/images/hero_image.webp', width: 1200, height: 630, alt: 'Cēzara kauss futbola turnīrs' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Cēzara Kauss 2026 | Football Tournament' : 'Cēzara kauss 2026 | Futbola Turnīrs',
      images: ['/images/hero_image.webp'],
    },
    alternates: {
      canonical,
      languages: {
        lv: lvUrl,
        en: enUrl,
        'x-default': lvUrl,
      },
    },
  };
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
```

- [ ] **Step 2: Replace static metadata in `app/[locale]/tournament-history/page.tsx`**

Replace the `export const metadata: Metadata = { ... }` block and the function signature with:

```tsx
import type { Metadata } from 'next';
import { tournamentHistory } from '@/data/tournament-history';
import { getYearPhotos } from '@/data/get-year-photos';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import VestureHero from '@/components/vesture/VestureHero';
import YearSection from '@/components/vesture/YearSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const lvUrl = 'https://cezarakauss.lv/turnira-vesture';
  const enUrl = 'https://cezarakauss.lv/en/tournament-history';
  const canonical = isEn ? enUrl : lvUrl;

  return {
    title: isEn ? 'Tournament History | Cēzara Kauss' : 'Turnīra Vēsture | Cēzara Kauss',
    description: isEn
      ? 'Results, photo gallery and statistics from all Cēzara Kauss football tournaments.'
      : 'Cēzara Kauss futbola turnīra vēsture — rezultāti, foto galerija un statistika.',
    keywords: isEn
      ? ['Cezara Kauss history', 'football tournament results', 'Gulbene football archive']
      : ['Cēzara kauss vēsture', 'futbola turnīra rezultāti', 'futbola statistika'],
    openGraph: {
      title: isEn ? 'Tournament History | Cēzara Kauss' : 'Turnīra Vēsture | Cēzara Kauss',
      description: isEn
        ? 'Results, photo gallery and statistics from all Cēzara Kauss tournaments.'
        : 'Cēzara Kauss futbola turnīra vēsture — rezultāti, foto galerija un statistika.',
      url: canonical,
      siteName: 'Cēzara kauss',
      locale: isEn ? 'en_GB' : 'lv_LV',
      type: 'website',
    },
    alternates: {
      canonical,
      languages: {
        lv: lvUrl,
        en: enUrl,
        'x-default': lvUrl,
      },
    },
  };
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
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Add `generateMetadata` to `app/[locale]/sign-up/page.tsx`**

Replace the file content:

```tsx
import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import RegistrationForm from '@/components/RegistrationForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const lvUrl = 'https://cezarakauss.lv/registret-komandu';
  const enUrl = 'https://cezarakauss.lv/en/sign-up';
  const canonical = isEn ? enUrl : lvUrl;

  return {
    title: isEn ? 'Register Your Team | Cēzara Kauss' : 'Reģistrēt komandu | Cēzara Kauss',
    description: isEn
      ? 'Register your football team for Cēzara Kauss 2026. Entry fee €150 per team. July 25, Gulbene.'
      : 'Pieteikt komandu futbola turnīram Cēzara Kauss 2026. Dalības maksa €150 par komandu. 25. jūlijs, Gulbene.',
    keywords: isEn
      ? ['register football team', 'Cezara Kauss registration', 'football team sign up Latvia']
      : ['reģistrēt komandu', 'futbola turnīrs pieteikšanās', 'Cēzara kauss dalība'],
    openGraph: {
      title: isEn ? 'Register Your Team | Cēzara Kauss' : 'Reģistrēt komandu | Cēzara Kauss',
      description: isEn
        ? 'Register your football team for Cēzara Kauss 2026.'
        : 'Pieteikt komandu futbola turnīram Cēzara Kauss 2026.',
      url: canonical,
      siteName: 'Cēzara kauss',
      locale: isEn ? 'en_GB' : 'lv_LV',
      type: 'website',
    },
    alternates: {
      canonical,
      languages: {
        lv: lvUrl,
        en: enUrl,
        'x-default': lvUrl,
      },
    },
  };
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
```

- [ ] **Step 4: Commit**

```bash
git add app/\[locale\]/page.tsx app/\[locale\]/tournament-history/page.tsx app/\[locale\]/sign-up/page.tsx
git commit -m "feat: add locale-aware generateMetadata with hreflang to all pages"
```

---

## Task 13: Update sitemap

**Files:**
- Modify: `app/sitemap.ts`

Emit 8 entries: 4 pages × 2 locales. LV pages use their Latvian slugs; EN pages use the `/en/` prefix with English slugs.

- [ ] **Step 1: Rewrite `app/sitemap.ts`**

```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Latvian (default — no prefix)
    {
      url: 'https://cezarakauss.lv',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://cezarakauss.lv/registret-komandu',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cezarakauss.lv/turnira-vesture',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://cezarakauss.lv/reglaments',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // English (/en/ prefix)
    {
      url: 'https://cezarakauss.lv/en',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://cezarakauss.lv/en/sign-up',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://cezarakauss.lv/en/tournament-history',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://cezarakauss.lv/en/rules',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
```

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: update sitemap with 8 entries for LV and EN"
```

---

## Task 14: Locale-aware confirmation email in API route

**Files:**
- Modify: `app/api/register/route.ts`

Read `locale` from the form submission and send the confirmation email in the team's language. Admin notification stays in Latvian.

- [ ] **Step 1: Update `app/api/register/route.ts`**

Replace the `sendConfirmationEmail` function and the `POST` handler with the following. Everything else (imports, `getGoogleAuth`, `appendToSheet`, `sendAdminNotification`) stays unchanged.

```ts
async function sendConfirmationEmailLv(data: { teamName: string; captainName: string; email: string }) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "⚽ Pieteikums saņemts — Cēzara Kauss",
    html: `
      <div style="font-family:sans-serif;max-width:600px;color:#333;line-height:1.7;">
        <p>Paldies, ka reģistrējāt savu komandu turnīram <strong>Cēzara Kauss</strong>.</p>
        <p>Lūgums veikt apmaksu uz norādīto konta numuru, maksājuma mērķī norādot savas komandas nosaukumu un pilsētu no kuras pārstāvēta komanda, lai varam Jūs veiksmīgi apstiprināt turnīram:</p>
        <div style="background:#f7f7f7;padding:20px;margin:20px 0;border-left:4px solid #c9a227;">
          <p style="margin:0 0 4px;font-weight:bold;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;">Maksājuma detaļas:</p>
          <p style="margin:4px 0;"><strong>Biedrība "FUTBOLS GULBENĒ"</strong></p>
          <p style="margin:4px 0;">Reģ. nr. 40008347731</p>
          <p style="margin:4px 0;">LV42HABA0551061679039</p>
          <br/>
          <p style="margin:4px 0;"><strong>Dalības maksa — 150 EUR</strong></p>
        </div>
        <p>Komandas pēc pieteikuma nosūtīšanas saņem apstiprinājumu e-pastā un <strong>3 kalendāro dienu laikā</strong> veic dalības maksas pārskaitījumu. Ja pārskaitījums netiek veikts, komandas pieteikums tiek uzskatīts par atsauktu un tiek anulēts.</p>
        <p style="margin-top:24px;">Uz drīzu tikšanos,<br/><strong>Cēzara Kauss komanda!</strong></p>
      </div>
    `,
  });
}

async function sendConfirmationEmailEn(data: { teamName: string; captainName: string; email: string }) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "⚽ Application received — Cēzara Kauss",
    html: `
      <div style="font-family:sans-serif;max-width:600px;color:#333;line-height:1.7;">
        <p>Thank you for registering your team for <strong>Cēzara Kauss</strong>!</p>
        <p>Please make the entry fee payment to the bank account below. Include your team name and city in the payment reference so we can confirm your spot:</p>
        <div style="background:#f7f7f7;padding:20px;margin:20px 0;border-left:4px solid #c9a227;">
          <p style="margin:0 0 4px;font-weight:bold;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;">Payment details:</p>
          <p style="margin:4px 0;"><strong>Association "FUTBOLS GULBENĒ"</strong></p>
          <p style="margin:4px 0;">Reg. no. 40008347731</p>
          <p style="margin:4px 0;">LV42HABA0551061679039</p>
          <br/>
          <p style="margin:4px 0;"><strong>Entry fee — €150</strong></p>
        </div>
        <p>After submitting your application, you have <strong>3 calendar days</strong> to transfer the entry fee. If payment is not received within this period, your registration will be cancelled. Once payment is confirmed, your team will be added to the participants list (updated daily after 18:00).</p>
        <p style="margin-top:24px;">See you on the pitch,<br/><strong>The Cēzara Kauss team!</strong></p>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const teamName = formData.get("teamName") as string;
    const captainName = formData.get("captainName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const comment = (formData.get("comment") as string) || "";
    const locale = (formData.get("locale") as string) || "lv";
    const logo = formData.get("logo") as File | null;

    if (!teamName || !captainName || !email || !phone) {
      return NextResponse.json(
        { error: locale === "en" ? "All fields are required" : "Visi lauki ir obligāti" },
        { status: 400 }
      );
    }

    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    let logoBuffer: Buffer | null = null;
    let logoFilename: string | null = null;
    let logoType: string | null = null;

    if (logo && logo.size > 0) {
      if (!ALLOWED_TYPES.includes(logo.type)) {
        return NextResponse.json(
          { error: locale === "en" ? "Allowed formats: PNG, JPG, WEBP, SVG" : "Atļautie formāti: PNG, JPG, WEBP, SVG" },
          { status: 400 }
        );
      }
      if (logo.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: locale === "en" ? "Logo file must not exceed 5MB" : "Logo fails nedrīkst pārsniegt 5MB" },
          { status: 400 }
        );
      }
      logoBuffer = Buffer.from(await logo.arrayBuffer());
      logoFilename = logo.name;
      logoType = logo.type;
    }

    const confirmationEmail = locale === "en"
      ? sendConfirmationEmailEn({ teamName, captainName, email })
      : sendConfirmationEmailLv({ teamName, captainName, email });

    const results = await Promise.allSettled([
      appendToSheet({ teamName, captainName, email, phone, comment, hasLogo: !!logoBuffer }),
      sendAdminNotification({ teamName, captainName, email, phone, comment, logoBuffer, logoFilename, logoType }),
      confirmationEmail,
    ]);

    if (results[0].status === "rejected") console.error("Google Sheets error:", results[0].reason);
    if (results[1].status === "rejected") console.error("Admin email error:", results[1].reason);
    if (results[2].status === "rejected") console.error("Confirmation email error:", results[2].reason);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/api/register/route.ts
git commit -m "feat: locale-aware confirmation email in registration API"
```

---

## Task 15: Final verification

- [ ] **Step 1: Build check**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors. If there are type errors from `t.raw()`, add `as SomeType[]` casts where needed.

- [ ] **Step 2: Start dev server**

```bash
npm run dev
```

- [ ] **Step 3: Verify all LV routes load correctly**

Open in browser:
- `http://localhost:3000/` — home page, Latvian text, `lang="lv"`
- `http://localhost:3000/turnira-vesture` — history page in Latvian
- `http://localhost:3000/reglaments` — rules in Latvian (11 sections rendered)
- `http://localhost:3000/registret-komandu` — registration form in Latvian

- [ ] **Step 4: Verify all EN routes load correctly**

- `http://localhost:3000/en` — home page in English, `lang="en"`
- `http://localhost:3000/en/tournament-history` — history in English
- `http://localhost:3000/en/rules` — rules in English
- `http://localhost:3000/en/sign-up` — registration in English

- [ ] **Step 5: Verify language switcher**

On any page, click `EN` — should navigate to the English equivalent of the same page. Click `LV` — should navigate back to the Latvian equivalent. The active locale should appear gold.

- [ ] **Step 6: Verify locale detection**

In browser devtools, set `Accept-Language: et` (or `en`) and clear the `NEXT_LOCALE` cookie. Load `http://localhost:3000/` — should redirect to `http://localhost:3000/en`.

- [ ] **Step 7: Verify hreflang in page source**

View source of any page. Confirm `<link rel="alternate" hreflang="lv" ...>`, `<link rel="alternate" hreflang="en" ...>`, and `<link rel="alternate" hreflang="x-default" ...>` are present in `<head>`.

- [ ] **Step 8: Verify sitemap**

Open `http://localhost:3000/sitemap.xml` — should show 8 URLs (4 LV + 4 EN).

- [ ] **Step 9: Commit**

```bash
git add .
git commit -m "feat: complete i18n bilingual LV/EN implementation"
```
