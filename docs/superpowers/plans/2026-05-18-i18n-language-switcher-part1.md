# i18n Language Switcher — Implementation Plan (Part 1)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add bilingual LV/EN support using next-intl, preserving all existing Latvian URLs and SEO.

**Architecture:** next-intl v3 with `localePrefix: 'as-needed'` (LV at root, EN under `/en/`), pathname localization for English-friendly slugs, middleware for auto-detection.

**Tech Stack:** Next.js 16 App Router, next-intl v3, TypeScript, Tailwind CSS 4

---

## File Map

| Action | Path |
|---|---|
| Create | `i18n/routing.ts` |
| Create | `i18n/request.ts` |
| Create | `middleware.ts` |
| Create | `lib/navigation.ts` |
| Modify | `next.config.ts` |
| Create | `app/[locale]/layout.tsx` |
| Modify → becomes thin | `app/layout.tsx` |
| Move | `app/page.tsx` → `app/[locale]/page.tsx` |
| Move | `app/turnira-vesture/page.tsx` → `app/[locale]/tournament-history/page.tsx` |
| Move | `app/reglaments/page.tsx` → `app/[locale]/rules/page.tsx` |
| Move | `app/registret-komandu/page.tsx` → `app/[locale]/sign-up/page.tsx` |
| Create | `messages/lv.json` |
| Create | `messages/en.json` |
| Modify | `components/layout/Navigation.tsx` |
| Modify | `components/layout/Footer.tsx` |
| Modify | `components/home/Hero.tsx` |
| Modify | `components/home/About.tsx` |
| Modify | `components/home/PrizePool.tsx` |
| Modify | `components/home/HallOfFame.tsx` |
| Modify | `components/home/MatchDayExperience.tsx` |
| Modify | `components/home/TournamentTimeline.tsx` |
| Modify | `components/home/TeamSection.tsx` |
| Modify | `components/home/VideoSection.tsx` |
| Modify | `components/home/Sponsors.tsx` |
| Modify | `components/home/LocationMap.tsx` |
| Modify | `components/vesture/VestureHero.tsx` |
| Modify | `components/vesture/YearSection.tsx` |
| Modify | `components/vesture/ResultsPodium.tsx` |
| Modify | `components/vesture/YearStats.tsx` |
| Modify | `components/vesture/TeamGrid.tsx` |
| Modify | `components/vesture/YearVideo.tsx` |
| Modify | `components/RegistrationForm.tsx` |
| Modify | `data/tournament-history.ts` |
| Modify | `app/sitemap.ts` |
| Modify | `app/api/register/route.ts` |

---

## Task 1: Install next-intl and create infrastructure

**Files:**
- Create: `i18n/routing.ts`
- Create: `i18n/request.ts`
- Create: `middleware.ts`
- Create: `lib/navigation.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Install next-intl**

```bash
npm install next-intl
```

Expected: next-intl added to `dependencies` in package.json.

- [ ] **Step 2: Create `i18n/routing.ts`**

```ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['lv', 'en'],
  defaultLocale: 'lv',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/tournament-history': {
      lv: '/turnira-vesture',
      en: '/tournament-history',
    },
    '/rules': {
      lv: '/reglaments',
      en: '/rules',
    },
    '/sign-up': {
      lv: '/registret-komandu',
      en: '/sign-up',
    },
  },
});
```

- [ ] **Step 3: Create `i18n/request.ts`**

```ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'lv' | 'en')) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 4: Create `middleware.ts`**

```ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon|.*\\..*).*)'],
};
```

- [ ] **Step 5: Create `lib/navigation.ts`**

```ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from '@/i18n/routing';

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
```

- [ ] **Step 6: Update `next.config.ts`**

```ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

- [ ] **Step 7: Verify build compiles**

```bash
npm run build
```

Expected: Build succeeds (may warn about missing messages files — that's OK at this stage).

- [ ] **Step 8: Commit**

```bash
git add i18n/routing.ts i18n/request.ts middleware.ts lib/navigation.ts next.config.ts package.json package-lock.json
git commit -m "feat: install next-intl and create i18n infrastructure"
```

---

## Task 2: Restructure app/ folder

**Files:**
- Create: `app/[locale]/layout.tsx`
- Modify: `app/layout.tsx` (thin wrapper)
- Create: `app/[locale]/page.tsx`
- Create: `app/[locale]/tournament-history/page.tsx`
- Create: `app/[locale]/rules/page.tsx`
- Create: `app/[locale]/sign-up/page.tsx`
- Delete: `app/turnira-vesture/page.tsx`
- Delete: `app/reglaments/page.tsx`
- Delete: `app/registret-komandu/page.tsx`

- [ ] **Step 1: Replace `app/layout.tsx` with a thin pass-through**

The root layout becomes minimal — the locale layout provides `<html>` and `<body>`.

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 2: Create `app/[locale]/layout.tsx`**

```tsx
import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';
import '../globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang={locale} className={`${bebasNeue.variable} ${inter.variable}`}>
      {gtmId && (
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}
      <body>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Create `app/[locale]/page.tsx`** (same as old `app/page.tsx` for now)

```tsx
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HomeContent from '@/components/home/HomeContent';
import StructuredData from '@/components/StructuredData';

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

- [ ] **Step 4: Create `app/[locale]/tournament-history/page.tsx`** (copy of old turnira-vesture/page.tsx)

```tsx
import { Metadata } from 'next';
import { tournamentHistory } from '@/data/tournament-history';
import { getYearPhotos } from '@/data/get-year-photos';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import VestureHero from '@/components/vesture/VestureHero';
import YearSection from '@/components/vesture/YearSection';

export const metadata: Metadata = {
  title: 'Turnīra Vēsture | Cēzara Kauss',
  description: 'Cēzara Kauss futbola turnīra vēsture — rezultāti, foto galerija un statistika.',
};

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

- [ ] **Step 5: Create `app/[locale]/rules/page.tsx`** (copy of old reglaments/page.tsx — keep same content for now, will update in Task 10)

Copy the entire content of `app/reglaments/page.tsx` into `app/[locale]/rules/page.tsx` verbatim.

- [ ] **Step 6: Create `app/[locale]/sign-up/page.tsx`** (copy of old registret-komandu/page.tsx)

```tsx
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import RegistrationForm from '@/components/RegistrationForm';

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

- [ ] **Step 7: Delete old page folders**

```bash
rm -rf app/turnira-vesture app/reglaments app/registret-komandu
```

- [ ] **Step 8: Verify dev server runs and all 4 pages load**

```bash
npm run dev
```

Check:
- `http://localhost:3000/` — home loads
- `http://localhost:3000/turnira-vesture` — history loads
- `http://localhost:3000/reglaments` — rules loads
- `http://localhost:3000/registret-komandu` — sign-up loads
- `http://localhost:3000/en/` — English home loads
- `http://localhost:3000/en/tournament-history` — English history loads

- [ ] **Step 9: Commit**

```bash
git add app/
git commit -m "feat: restructure app/ under [locale] route group"
```
