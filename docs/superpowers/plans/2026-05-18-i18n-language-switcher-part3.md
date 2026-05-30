# i18n Language Switcher — Implementation Plan (Part 3)

## Task 5: Update Navigation (language switcher + translations)

**Files:** Modify `components/layout/Navigation.tsx`

- [ ] **Step 1: Replace `components/layout/Navigation.tsx` entirely**

```tsx
"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/lib/navigation";

const LOGO_URL = "/images/2026cezara_logo.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/#par-turniru", label: t("about") },
    { href: "/tournament-history", label: t("history") },
    { href: "/rules", label: t("rules") },
  ];

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-100 h-14 md:h-16 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src={LOGO_URL}
              alt="Cēzara Kauss Logo"
              className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl leading-none text-black tracking-tight uppercase">
              CĒZARA KAUSS
            </span>
            <span className="text-[8px] md:text-[10px] text-cesar-gold font-bold uppercase tracking-widest leading-tight mt-0.5">
              ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-extrabold uppercase tracking-widest transition-all py-2 border-b-2 border-transparent text-zinc-400 hover:text-black hover:border-cesar-gold"
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => switchLocale("lv")}
              className={`text-[11px] font-extrabold tracking-widest px-2 py-1 transition-all ${
                locale === "lv" ? "text-cesar-gold" : "text-zinc-400 hover:text-black"
              }`}
            >
              LV
            </button>
            <span className="text-zinc-200 text-xs">|</span>
            <button
              onClick={() => switchLocale("en")}
              className={`text-[11px] font-extrabold tracking-widest px-2 py-1 transition-all ${
                locale === "en" ? "text-cesar-gold" : "text-zinc-400 hover:text-black"
              }`}
            >
              EN
            </button>
          </div>

          <div className="h-8 w-px bg-zinc-100 mx-4"></div>
          <Link
            href="/sign-up"
            className="flex items-center gap-2.5 bg-black text-cesar-gold font-extrabold text-[11px] px-8 py-3 uppercase hover:bg-zinc-800 transition-all tracking-widest rounded-sm border-b-2 border-cesar-gold shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            {t("register")}
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white p-8 flex flex-col gap-6 shadow-2xl md:hidden animate-fade-in border-b border-zinc-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-left font-display text-4xl uppercase tracking-tighter text-zinc-300 hover:text-cesar-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile language switcher */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => { switchLocale("lv"); setIsOpen(false); }}
              className={`font-display text-2xl uppercase tracking-tighter px-2 ${locale === "lv" ? "text-cesar-gold" : "text-zinc-300"}`}
            >LV</button>
            <span className="text-zinc-300 text-xl">|</span>
            <button
              onClick={() => { switchLocale("en"); setIsOpen(false); }}
              className={`font-display text-2xl uppercase tracking-tighter px-2 ${locale === "en" ? "text-cesar-gold" : "text-zinc-300"}`}
            >EN</button>
          </div>
          <Link
            href="/sign-up"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-5 bg-black text-cesar-gold font-display text-3xl uppercase rounded-sm border-b-4 border-cesar-gold"
          >
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            {t("mobileRegister")}
          </Link>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Verify nav renders correctly and language switcher works on dev server**

```bash
npm run dev
```

Visit `http://localhost:3000` — click EN, verify URL changes to `/en/`, click LV, verify returns to `/`.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Navigation.tsx
git commit -m "feat: add language switcher and translations to Navigation"
```

---

## Task 6: Update Footer

**Files:** Modify `components/layout/Footer.tsx`

- [ ] **Step 1: Replace `components/layout/Footer.tsx`**

```tsx
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

const LOGO_URL = "/images/2026cezara_logo.svg";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-black text-white py-16 md:py-24 border-t-8 border-cesar-gold">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
        <div className="flex items-center gap-4">
          <img src={LOGO_URL} alt="Cēzara Kauss Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          <div>
            <h4 className="font-display text-2xl md:text-3xl text-white leading-none uppercase tracking-tight">
              CĒZARA<span className="text-cesar-gold">KAUSS</span>
            </h4>
            <p className="text-zinc-500 text-[10px] md:text-xs mt-1 uppercase tracking-[0.3em] font-bold">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h5 className="font-display text-xl md:text-2xl text-cesar-gold uppercase tracking-widest">{t("navTitle")}</h5>
          <div className="flex flex-col gap-3 md:gap-4 text-zinc-400 font-extrabold text-xs uppercase tracking-[0.3em]">
            <Link href="/" className="hover:text-cesar-gold transition-colors text-left">{t("navHome")}</Link>
            <Link href="/#par-turniru" className="hover:text-cesar-gold transition-colors text-left">{t("navAbout")}</Link>
            <Link href="/tournament-history" className="hover:text-cesar-gold transition-colors text-left">{t("navHistory")}</Link>
            <Link href="/rules" className="hover:text-cesar-gold transition-colors text-left">{t("navRules")}</Link>
            <Link href="/sign-up" className="hover:text-cesar-gold transition-colors text-left">{t("navRegister")}</Link>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h5 className="font-display text-xl md:text-2xl text-cesar-gold uppercase tracking-widest">{t("followTitle")}</h5>
          <div className="flex gap-4">
            <a href="https://instagram.com/cezarakauss" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 hover:bg-cesar-gold flex items-center justify-center transition-colors group">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="https://tiktok.com/@cezarakauss" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 hover:bg-cesar-gold flex items-center justify-center transition-colors group">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="https://facebook.com/cezarakauss" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 hover:bg-cesar-gold flex items-center justify-center transition-colors group">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          <a href="mailto:cezarakauss@gmail.com" className="text-zinc-600 hover:text-cesar-gold transition-colors text-xs md:text-sm font-bold uppercase tracking-widest">
            cezarakauss@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-20 pt-8 md:pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-700 text-xs uppercase font-bold tracking-[0.3em]">
          © {new Date().getFullYear()} Cēzara Kauss.
        </p>
        <p className="text-zinc-700 text-xs uppercase font-bold tracking-[0.3em]">Est. 2024 Gulbene</p>
      </div>
    </footer>
  );
}
```

**Note:** Footer is a server component — `useTranslations` works here via next-intl's server integration. No `"use client"` needed.

- [ ] **Step 2: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: translate Footer component"
```

---

## Task 7: Update home page server components

**Files:** About.tsx, PrizePool.tsx, MatchDayExperience.tsx, TournamentTimeline.tsx, TeamSection.tsx, LocationMap.tsx

All these are server components (no `"use client"`). Use `getTranslations` from `next-intl/server`.

- [ ] **Step 1: Update `components/home/About.tsx`**

```tsx
import { getTranslations } from "next-intl/server";
import { CalendarDays, MapPin, Users, Trophy, type LucideIcon } from "lucide-react";

export default async function About() {
  const t = await getTranslations("about");

  const cards: { icon: LucideIcon; title: string; detail: string; sub: string }[] = [
    { icon: CalendarDays, title: t("dateLabel"), detail: t("dateValue"), sub: t("dateSub") },
    { icon: MapPin, title: t("locationLabel"), detail: t("locationValue"), sub: t("locationSub") },
    { icon: Users, title: t("formatLabel"), detail: t("formatValue"), sub: t("formatSub") },
    { icon: Trophy, title: t("feeLabel"), detail: t("feeValue"), sub: t("feeSub") },
  ];

  return (
    <section id="par-turniru" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
          <div>
            <span className="section-label mb-4">{t("sectionLabel")}</span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-normal text-black mb-[-10px]" style={{ lineHeight: "0.9" }}>
              {t("title")}
              <br /><span className="gold-text-gradient">{t("titleHighlight")}</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-black p-4 md:p-10 border-b-8 border-cesar-gold card-shadow relative overflow-hidden min-h-[120px]">
                <div className="text-cesar-gold mb-4 md:mb-8">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <span className="text-[12px] md:text-[14px] text-zinc-500 font-extrabold tracking-widest mb-1 md:mb-2 block">{card.title}</span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-white">{card.detail}</h3>
                <p className="text-cesar-gold font-bold text-[14px] md:text-[16px] uppercase tracking-widest">{card.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `components/home/PrizePool.tsx`**

```tsx
import { getTranslations } from "next-intl/server";

export default async function PrizePool() {
  const t = await getTranslations("prizePool");

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label mb-3 md:mb-6 bg-cesar-gold! text-black!">{t("sectionLabel")}</span>
          <h2 className="font-display text-7xl sm:text-8xl uppercase tracking-normal text-white" style={{ lineHeight: "0.9" }}>
            {t("title")} <span className="gold-text-gradient">{t("titleHighlight")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-zinc-900/80 p-6 md:p-12 border-t-4 border-zinc-500 text-center flex flex-col items-center order-2 md:order-1">
            <span className="text-4xl md:text-6xl mb-4 md:mb-6">🥈</span>
            <span className="text-[14px] font-black text-zinc-500 tracking-[0.4em] uppercase mb-2">{t("secondLabel")}</span>
            <h3 className="font-display text-3xl md:text-5xl text-white mb-2 md:mb-4">{t("secondTitle")}</h3>
            <p className="text-zinc-500 text-[14px] md:text-xs font-bold uppercase tracking-widest">{t("secondSub")}</p>
          </div>
          <div className="bg-zinc-900 p-8 md:p-16 border-t-8 border-cesar-gold text-center flex flex-col items-center md:scale-105 shadow-[0_0_50px_rgba(212,175,55,0.2)] relative order-1 md:order-2">
            <div className="absolute -top-6 bg-cesar-gold text-black px-4 md:px-6 py-1 font-black text-[10px] uppercase tracking-widest">{t("firstTag")}</div>
            <span className="text-6xl md:text-8xl mb-4 md:mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">🏆</span>
            <span className="text-[14px] font-black text-cesar-gold tracking-[0.4em] uppercase mb-2">{t("firstLabel")}</span>
            <h3 className="font-display text-6xl md:text-8xl text-white mb-2 md:mb-4 leading-none">€1000</h3>
            <p className="text-cesar-gold font-bold uppercase tracking-widest text-[14px] md:text-xs">{t("firstSub")}</p>
          </div>
          <div className="bg-zinc-900/80 p-6 md:p-12 border-t-4 border-zinc-500 text-center flex flex-col items-center order-3">
            <span className="text-4xl md:text-6xl mb-4 md:mb-6">🥉</span>
            <span className="text-[14px] font-black text-zinc-500 tracking-[0.4em] uppercase mb-2">{t("thirdLabel")}</span>
            <h3 className="font-display text-3xl md:text-5xl text-white mb-2 md:mb-4">{t("thirdTitle")}</h3>
            <p className="text-zinc-500 text-[14px] md:text-xs font-bold uppercase tracking-widest">{t("thirdSub")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update `components/home/MatchDayExperience.tsx`**

```tsx
import { getTranslations } from "next-intl/server";
import { Music, FerrisWheel, Trophy, UtensilsCrossed } from "lucide-react";

export default async function MatchDayExperience() {
  const t = await getTranslations("matchDay");
  const features = t.raw("features") as { title: string; desc: string }[];
  const icons = [Music, FerrisWheel, Trophy, UtensilsCrossed];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
          <div>
            <span className="section-label mb-4 bg-cesar-gold! text-black!">{t("sectionLabel")}</span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-normal text-white mb-[-10px]" style={{ lineHeight: "0.9" }}>
              {t("title")}
              <br /><span className="gold-text-gradient">{t("titleHighlight")}</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-medium leading-relaxed whitespace-pre-line">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {features.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-zinc-900 p-4 pb-6 md:p-10 border-b-8 border-cesar-gold card-shadow relative overflow-hidden min-h-[120px]">
                <div className="text-cesar-gold mb-4 md:mb-8">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-1">{item.title}</h3>
                <p className="text-zinc-400 font-medium text-[16px] md:text-base leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Update `components/home/TournamentTimeline.tsx`**

```tsx
import { getTranslations } from "next-intl/server";

export default async function TournamentTimeline() {
  const t = await getTranslations("timeline");
  const events = t.raw("events") as { time: string; event: string; desc: string }[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-20">
          <span className="section-label mb-3 md:mb-6">{t("sectionLabel")}</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl uppercase tracking-normal" style={{ lineHeight: "0.9" }}>
            {t("title")} <span className="gold-text-gradient">{t("titleHighlight")}</span>
          </h2>
        </div>
        <div className="space-y-1">
          {events.map((e, i) => (
            <div key={i} className="flex group border-b border-zinc-100 last:border-0 hover:bg-stadium-gray transition-colors">
              <div className="w-20 md:w-32 py-4 md:py-8 font-display text-2xl md:text-4xl text-cesar-gold border-r border-zinc-100 flex items-center justify-center bg-black group-hover:bg-cesar-gold group-hover:text-black transition-colors shrink-0">
                {e.time}
              </div>
              <div className="p-4 md:p-8">
                <h4 className="font-display text-lg md:text-3xl uppercase mb-1 tracking-tight">{e.event}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-widest">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Update `components/home/TeamSection.tsx`**

```tsx
import { getTranslations } from "next-intl/server";
import { Crown } from "lucide-react";

const teamMembers = [
  { name: "Artūrs Deksnis", roleKey: "founder", image: "/images/team/artursdeksnis.webp", founder: true },
  { name: "Ričards Deksnis", roleKey: "technical", image: "/images/team/ricards.webp" },
  { name: "Arita Klesmane", roleKey: "pr", image: "/images/team/aritav2.webp" },
  { name: "Sandis Sirmais", roleKey: "marketing", image: "/images/team/sandis.webp" },
  { name: "Jānis Stībelis", roleKey: "dj", image: "/images/team/JanisStibelis.webp" },
  { name: "Artēmijs Semjonovs", roleKey: "referee", image: "/images/team/sems.webp" },
];

export default async function TeamSection() {
  const t = await getTranslations("teamSection");

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center mb-10 md:mb-20">
          <span className="section-label mb-4">{t("sectionLabel")}</span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-[8rem] uppercase tracking-normal text-black" style={{ lineHeight: "0.9" }}>
            {t("title")} <span className="gold-text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 md:mt-8 text-zinc-500 font-medium leading-relaxed md:mx-auto max-w-4xl whitespace-pre-line">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="group">
              <div className={`relative aspect-square overflow-hidden ${member.founder ? "border-2 border-cesar-gold" : ""}`}>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                  {member.founder && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Crown className="w-3.5 h-3.5 text-cesar-gold" strokeWidth={1.5} />
                      <span className="text-[8px] md:text-[9px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase">
                        {t("alwaysWithUs")}
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-lg md:text-2xl text-white uppercase leading-tight">{member.name}</h3>
                  <span className="text-[8px] md:text-[9px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase block mt-1">
                    {t(`roles.${member.roleKey}`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Update `components/home/LocationMap.tsx`**

```tsx
import { getTranslations } from "next-intl/server";

export default async function LocationMap() {
  const t = await getTranslations("location");

  return (
    <section className="py-16 md:py-24 bg-stadium-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
        <div className="lg:col-span-5 space-y-6 md:space-y-10">
          <div>
            <span className="section-label mb-2 md:mb-4">{t("sectionLabel")}</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-normal text-black" style={{ lineHeight: "0.9" }}>
              {t("title")} <br /><span className="gold-text-gradient">{t("titleHighlight")}</span>
            </h2>
            <p className="mt-4 md:mt-8 text-zinc-500 font-medium leading-relaxed mx-auto max-w-4xl">
              {t("description")}
              <br /><br />
              {t("description2")}
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-4 md:p-8 border-l-8 border-black card-shadow">
              <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">{t("addressLabel")}</p>
              <p className="text-lg md:text-2xl font-bold">{t("addressValue")}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="bg-white p-4 md:p-5 border-t-4 border-cesar-gold shadow-sm">
                <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">{t("surfaceLabel")}</p>
                <p className="font-bold uppercase text-sm md:text-base whitespace-nowrap">{t("surfaceValue")}</p>
              </div>
              <div className="bg-white p-4 md:p-5 border-t-4 border-cesar-gold shadow-sm">
                <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">{t("parkingLabel")}</p>
                <p className="font-bold uppercase text-sm md:text-base">{t("parkingValue")}</p>
              </div>
            </div>
          </div>
          <a href="https://visitgulbene.lv" target="_blank" rel="noopener noreferrer"
            className="w-full py-4 md:py-6 bg-black text-cesar-gold font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 border-b-4 border-cesar-gold">
            VISITGULBENE.LV
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-3 md:gap-4">
          <div className="relative group rounded-sm overflow-hidden card-shadow border-4 border-white">
            <img src="/images/gulbenes_stadions.jpg" alt="Gulbenes pilsētas stadions — turnīra norises vieta"
              className="w-full h-[200px] md:h-[300px] lg:h-[370px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          </div>
          <div className="relative group rounded-sm overflow-hidden card-shadow border-4 border-white">
            <img src="/images/gulbenes_stadions2.jpeg" alt="Cēzara Kauss turnīra spēle Gulbenes stadionā"
              className="w-full h-[200px] md:h-[300px] lg:h-[370px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add components/home/About.tsx components/home/PrizePool.tsx components/home/MatchDayExperience.tsx components/home/TournamentTimeline.tsx components/home/TeamSection.tsx components/home/LocationMap.tsx
git commit -m "feat: translate home server components"
```

---

## Task 8: Update home page client components

**Files:** Hero.tsx, HallOfFame.tsx, VideoSection.tsx, Sponsors.tsx

These have `"use client"` — use `useTranslations` hook (works via NextIntlClientProvider in layout).

- [ ] **Step 1: Update `components/home/Hero.tsx`**

Add `useTranslations` import and replace all hardcoded strings:

```tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export default function Hero() {
  const t = useTranslations("hero");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-07-20T10:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownUnits = [
    { label: t("days"), value: timeLeft.days },
    { label: t("hours"), value: timeLeft.hours },
    { label: t("minutes"), value: timeLeft.minutes },
    { label: t("seconds"), value: timeLeft.seconds },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center hero-gradient pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
          <span className="hero-label mb-4 md:mb-8 bg-transparent text-cesar-gold px-4 md:px-8 text-[10px] md:text-xs">
            {t("tagline")}
          </span>
          <h1 className="text-7xl sm:text-8xl md:text-[8rem] font-display font-bold uppercase tracking-normal mb-4 md:mb-6" style={{ lineHeight: "0.9" }}>
            CĒZARA<span className="gold-text-gradient ml-[10px]"> KAUSS</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-base md:text-2xl mb-8 md:mb-12 font-medium tracking-tight px-2">
            {t("subtitle1")} <br />
            {t("subtitle2")} <span className="text-cesar-gold font-bold">{t("subtitleHighlight")}</span>
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center mb-10 md:mb-20">
            <Link href="/sign-up"
              className="w-full md:w-auto bg-cesar-gold text-black font-extrabold text-xs md:text-sm px-8 md:px-16 py-4 md:py-6 uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-2xl border-b-4 border-black/20">
              {t("ctaRegister")}
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/tournament-history"
              className="w-full md:w-auto bg-black/50 backdrop-blur-md border-2 border-cesar-gold text-cesar-gold font-extrabold text-xs md:text-sm px-8 md:px-16 py-4 md:py-6 uppercase tracking-[0.2em] hover:bg-cesar-gold hover:text-black transition-all text-center">
              {t("ctaHistory")}
            </Link>
          </div>
        </div>
        <div className="animate-reveal" style={{ animationDelay: "0.3s" }}>
          <p className="text-[10px] md:text-xs text-zinc-400 font-extrabold tracking-[0.2em] uppercase mb-4">
            {t("countdownLabel")}
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-4 gap-2 md:gap-4">
            {countdownUnits.map((unit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md py-4 md:py-8 px-2 md:px-4 border-b-4 border-cesar-gold relative group">
                <span className="block font-display text-3xl md:text-6xl text-white transition-transform group-hover:scale-110">
                  {unit.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[8px] md:text-[10px] text-cesar-gold font-extrabold tracking-[0.2em] md:tracking-[0.3em] uppercase">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Update `components/home/HallOfFame.tsx`**

Add `useTranslations("hallOfFame")` and replace `"FINĀLA REZULTĀTS"`, `"Slavas"`, `"Zāle"`, `"PEN:"`, section label, title strings with `t(...)` calls. The winners data (team names, scores) stays hardcoded — it's historical data, not UI text.

Key changes:
```tsx
const t = useTranslations("hallOfFame");
// Replace:
"FINĀLA REZULTĀTS" → t("finalResult")
"PEN:" → t("pen")
"Slavas" → t("title")
"Zāle" → t("titleHighlight")
"Cēzara Kauss" (section label) → t("sectionLabel")
```

- [ ] **Step 3: Update `components/home/VideoSection.tsx`**

```tsx
"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const t = useTranslations("video");

  return (
    <section id="video" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display text-7xl sm:text-8xl md:text-[10rem] uppercase tracking-normal text-black" style={{ lineHeight: "0.9" }}>
            {t("title")} <span className="gold-text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 md:mt-8 text-zinc-500 font-medium leading-relaxed mx-auto">
            {t("subtitle").split(t("subtitleLinkText"))[0]}
            <Link href="/sign-up" className="text-cesar-gold font-bold hover:underline">{t("subtitleLinkText")}</Link>
            {t("subtitle").split(t("subtitleLinkText"))[1]}
          </p>
        </div>
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute inset-0 border-2 border-cesar-gold/20 -m-2 pointer-events-none hidden md:block"></div>
          <div className="relative aspect-video bg-zinc-900 border-2 md:border-4 border-white overflow-hidden">
            {playing ? (
              <iframe className="w-full h-full"
                src="https://www.youtube.com/embed/wOZpFlpIMco?si=k5Rq-j8S3-v1V6eF&autoplay=1"
                title="Cēzara Kauss 2025 video atskats"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            ) : (
              <button onClick={() => setPlaying(true)} className="w-full h-full relative cursor-pointer">
                <img src="https://img.youtube.com/vi/wOZpFlpIMco/maxresdefault.jpg"
                  alt="Cēzara Kauss 2025 video atskats thumbnail"
                  className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-cesar-gold/90 rounded-full flex items-center justify-center border-2 md:border-4 border-black group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 md:w-10 md:h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Update `components/home/Sponsors.tsx`**

Add `useTranslations("sponsors")` and replace section label, title, titleHighlight, subtitle strings. The sponsor names array stays unchanged.

- [ ] **Step 5: Commit**

```bash
git add components/home/Hero.tsx components/home/HallOfFame.tsx components/home/VideoSection.tsx components/home/Sponsors.tsx
git commit -m "feat: translate home client components"
```

---

## Task 9: Update tournament history components

**Files:** VestureHero.tsx, YearSection.tsx, ResultsPodium.tsx, YearStats.tsx, TeamGrid.tsx, YearVideo.tsx

`YearSection` is a client component. It passes translated labels as props to its children.

- [ ] **Step 1: Update `components/vesture/VestureHero.tsx`** (server component)

```tsx
import { getTranslations } from "next-intl/server";

export default async function VestureHero() {
  const t = await getTranslations("history");

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/balvi_winners.webp')" }} />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
          <span className="hero-label mb-4 md:mb-6 text-cesar-gold text-[10px] md:text-xs">{t("pageTagline")}</span>
          <h1 className="text-7xl sm:text-8xl md:text-[8rem] font-bold font-display uppercase tracking-normal mb-4 md:mb-6" style={{ lineHeight: "0.9" }}>
            {t("title")}<span className="gold-text-gradient ml-[10px]"> {t("titleHighlight")}</span>
          </h1>
          <p className="max-w-lg mx-auto text-zinc-400 text-sm md:text-lg mb-10 md:mb-14 font-medium tracking-tight">
            {t("subtitle")}
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-[0.3em]">{t("scrollLabel")}</span>
        <svg className="w-5 h-5 text-cesar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `components/vesture/YearSection.tsx`** — add translations and pass as props

```tsx
"use client";

import { useTranslations } from "next-intl";
import { TournamentYear } from "@/data/tournament-history";
import ResultsPodium from "./ResultsPodium";
import YearStats from "./YearStats";
import YearVideo from "./YearVideo";
import TeamGrid from "./TeamGrid";
import PhotoGallery from "./PhotoGallery";
import ScrollReveal from "@/components/ScrollReveal";

type YearSectionProps = { data: TournamentYear; photos: string[] };

export default function YearSection({ data, photos }: YearSectionProps) {
  const t = useTranslations("history");

  const translatedStats = data.stats.map((s) => ({
    label: (t.raw("statLabels") as Record<string, string>)[s.label] ?? s.label,
    value: s.value,
  }));

  return (
    <section id={`gads-${data.year}`} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[20rem] md:text-[30rem] text-white/3 leading-none">{data.year}</span>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="section-label mb-4 md:mb-6">{t("yearLabel")}</span>
            <h2 className="font-display text-7xl sm:text-8xl md:text-[10rem] uppercase tracking-normal text-white" style={{ lineHeight: "0.9" }}>
              <span className="gold-text-gradient">{data.year}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ResultsPodium
            winner={data.winner}
            runnerUp={data.runnerUp}
            thirdPlace={data.thirdPlace}
            finalScore={data.finalScore}
            penalties={data.penalties}
            labels={{
              results: t("results"),
              champions: t("champions"),
              firstPlace: t("firstPlace"),
              secondPlace: t("secondPlace"),
              thirdPlace: t("thirdPlace"),
              pen: t("pen"),
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-10 md:mb-16 text-center">
            <a href={data.scoresUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cesar-gold text-black font-extrabold text-xs md:text-sm px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.2em] hover:bg-white transition-all border-b-4 border-black/20">
              {t("viewAllResults")}
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-[9px] md:text-[10px] text-zinc-600 font-bold tracking-widest uppercase mt-3">{t("resultsSubtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <YearStats stats={translatedStats} sectionLabel={t("stats")} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <YearVideo videoUrl={data.videoUrl} videoTitle={data.videoTitle} sectionLabel={t("videoLabel")} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <TeamGrid teams={data.teams} winnerName={data.winner.name} sectionLabel={t("participants")} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <PhotoGallery photos={photos} year={data.year} />
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update `components/vesture/ResultsPodium.tsx`** — accept `labels` prop

```tsx
import { TeamResult } from "@/data/tournament-history";

type Labels = {
  results: string;
  champions: string;
  firstPlace: string;
  secondPlace: string;
  thirdPlace: string;
  pen: string;
};

type ResultsPodiumProps = {
  winner: TeamResult;
  runnerUp: TeamResult;
  thirdPlace: TeamResult;
  finalScore: string;
  penalties?: string;
  labels: Labels;
};

export default function ResultsPodium({ winner, runnerUp, thirdPlace, finalScore, penalties, labels }: ResultsPodiumProps) {
  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        {labels.results}
      </h3>
      <div className="flex items-end justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
        <div className="flex-1 max-w-[180px]">
          <div className="bg-zinc-900 border border-zinc-800 p-4 md:p-6 text-center h-[140px] md:h-[180px] flex flex-col justify-end">
            <span className="text-2xl md:text-3xl mb-2">🥈</span>
            <span className="text-[9px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase">{labels.secondPlace}</span>
            <p className="font-display text-sm md:text-lg text-white mt-1 leading-tight">{runnerUp.name}</p>
          </div>
        </div>
        <div className="flex-1 max-w-[200px]">
          <div className="bg-zinc-900 border-2 border-cesar-gold p-4 md:p-6 text-center h-[240px] md:h-[300px] flex flex-col justify-end relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cesar-gold text-black text-[8px] font-black tracking-widest uppercase px-3 py-1">
              {labels.champions}
            </div>
            <span className="text-3xl md:text-4xl mb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">🏆</span>
            <span className="text-[9px] md:text-[10px] text-cesar-gold font-extrabold tracking-widest uppercase">{labels.firstPlace}</span>
            <p className="font-display text-lg md:text-2xl text-white mt-1 leading-tight">{winner.name}</p>
            <div className="mt-2 pt-2 border-t border-cesar-gold/30">
              <span className="font-display text-xl md:text-2xl text-cesar-gold">{finalScore}</span>
              {penalties && (
                <p className="text-[8px] md:text-[9px] text-zinc-500 font-bold tracking-widest uppercase mt-0.5">
                  {labels.pen} {penalties}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[180px]">
          <div className="bg-zinc-900 border border-zinc-800 p-4 md:p-6 text-center h-[120px] md:h-[150px] flex flex-col justify-end">
            <span className="text-2xl md:text-3xl mb-2">🥉</span>
            <span className="text-[9px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase">{labels.thirdPlace}</span>
            <p className="font-display text-sm md:text-lg text-white mt-1 leading-tight">{thirdPlace.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Update `components/vesture/YearStats.tsx`** — accept `sectionLabel` prop

```tsx
type YearStatsProps = {
  stats: { label: string; value: string }[];
  sectionLabel: string;
};

export default function YearStats({ stats, sectionLabel }: YearStatsProps) {
  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        {sectionLabel}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900 border-b-4 border-cesar-gold p-4 md:p-6 text-center flex flex-col items-center justify-center min-h-[96px] md:min-h-[120px]">
            <span className="block font-display text-3xl md:text-5xl text-white">{stat.value}</span>
            <span className="text-[8px] md:text-[10px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase mt-1 block">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Update `components/vesture/TeamGrid.tsx`** — accept `sectionLabel` prop

```tsx
type TeamGridProps = { teams: string[]; winnerName: string; sectionLabel: string };

export default function TeamGrid({ teams, winnerName, sectionLabel }: TeamGridProps) {
  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        {sectionLabel}
      </h3>
      {/* rest of component unchanged */}
```

- [ ] **Step 6: Update `components/vesture/YearVideo.tsx`** — accept `sectionLabel` prop

```tsx
type YearVideoProps = { videoUrl: string; videoTitle: string; sectionLabel: string };

export default function YearVideo({ videoUrl, videoTitle, sectionLabel }: YearVideoProps) {
  // Replace hardcoded "Video" heading with {sectionLabel}
```

- [ ] **Step 7: Commit**

```bash
git add components/vesture/
git commit -m "feat: translate tournament history components"
```
