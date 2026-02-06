# Cēzara kauss Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an SEO-optimized, prestigious landing page for the "Cēzara kauss" football tournament with registration, gallery, video, sponsors, and social integration.

**Architecture:** Next.js 14 App Router with static generation for SEO. Server components by default, client components only where interactivity required (form, carousel). Tailwind CSS for styling with custom gold/black/white theme. TypeScript throughout.

**Tech Stack:** Next.js 14.x, React 18, TypeScript, Tailwind CSS 3.x, Embla Carousel (lightweight), next/font (Playfair Display + Inter)

---

## Task 1: Project Initialization

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `next.config.js`
- Create: `postcss.config.js`
- Create: `.gitignore`

**Step 1: Initialize Next.js project**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

When prompted, accept defaults. This creates the base Next.js 14 project with TypeScript and Tailwind.

**Step 2: Verify installation**

Run:
```bash
npm run dev
```

Expected: Dev server starts at http://localhost:3000

**Step 3: Stop dev server and commit**

Run:
```bash
git init
git add .
git commit -m "chore: initialize Next.js 14 project with TypeScript and Tailwind"
```

---

## Task 2: Configure Custom Theme

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

**Step 1: Update Tailwind config with custom colors and fonts**

Replace `tailwind.config.ts` content:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#D4AF37",
          600: "#B8960C",
          700: "#92750A",
          800: "#6B5508",
          900: "#453706",
        },
        black: {
          DEFAULT: "#0A0A0A",
          50: "#1A1A1A",
          100: "#141414",
          200: "#0F0F0F",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 2: Update global styles**

Replace `app/globals.css` content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-black text-white font-body antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  .btn-gold {
    @apply bg-gold-500 text-black font-semibold px-8 py-3 rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25;
  }

  .section-heading {
    @apply text-4xl md:text-5xl font-display text-gold-500 mb-8;
  }

  .gold-border {
    @apply border border-gold-500/30;
  }
}

@layer utilities {
  .text-gradient-gold {
    @apply bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent;
  }
}
```

**Step 3: Commit**

Run:
```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure custom gold/black/white theme"
```

---

## Task 3: Setup Fonts and Layout

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/metadata.ts`

**Step 1: Create metadata configuration**

Create `app/metadata.ts`:

```typescript
import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Cēzara kauss 2025 | Futbola Turnīrs",
  description:
    "Piesakies prestižajam futbola turnīram Cēzara kauss 2025. Reģistrē savu komandu un piedalies cīņā par trofeju!",
  keywords: [
    "Cēzara kauss",
    "futbola turnīrs",
    "futbols Latvijā",
    "futbola sacensības",
    "komandu reģistrācija",
  ],
  authors: [{ name: "Cēzara kauss" }],
  openGraph: {
    title: "Cēzara kauss 2025 | Futbola Turnīrs",
    description:
      "Piesakies prestižajam futbola turnīram Cēzara kauss 2025. Reģistrē savu komandu!",
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
    description: "Piesakies prestižajam futbola turnīram Cēzara kauss 2025.",
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
};
```

**Step 2: Update layout with fonts and metadata**

Replace `app/layout.tsx` content:

```typescript
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./metadata";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Step 3: Verify fonts load**

Run:
```bash
npm run dev
```

Check browser dev tools - fonts should load from Google Fonts.

**Step 4: Commit**

Run:
```bash
git add app/layout.tsx app/metadata.ts
git commit -m "feat: setup fonts (Playfair Display + Inter) and SEO metadata"
```

---

## Task 4: Create Navigation Component

**Files:**
- Create: `components/Navigation.tsx`

**Step 1: Create Navigation component**

Create `components/Navigation.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#par-turniru", label: "Par turnīru" },
  { href: "#galerija", label: "Galerija" },
  { href: "#video", label: "Video" },
  { href: "#sponsori", label: "Sponsori" },
  { href: "#registracija", label: "Reģistrācija" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-gold-500 font-display text-xl md:text-2xl font-bold">
              CĒZARA KAUSS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold-500 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Atvērt izvēlni"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white hover:text-gold-500 transition-colors duration-200 text-sm uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/Navigation.tsx
git commit -m "feat: add sticky Navigation component with mobile menu"
```

---

## Task 5: Create Hero Component

**Files:**
- Create: `components/Hero.tsx`

**Step 1: Create Hero component**

Create `components/Hero.tsx`:

```typescript
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black-50 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-white/80 text-lg md:text-xl uppercase tracking-[0.3em] mb-4">
          Futbola Turnīrs
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
          <span className="text-gradient-gold">CĒZARA</span>
          <br />
          <span className="text-white">KAUSS</span>
        </h1>
        <p className="text-gold-500 text-xl md:text-2xl font-display mb-4">
          2025
        </p>
        <p className="text-white/70 text-lg md:text-xl mb-8">
          15. jūnijs | Rīga, Latvija
        </p>
        <Link href="#registracija" className="btn-gold inline-block text-lg">
          Reģistrē komandu
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold-500/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with gold gradient and CTA"
```

---

## Task 6: Create About Component

**Files:**
- Create: `components/About.tsx`

**Step 1: Create About component**

Create `components/About.tsx`:

```typescript
export default function About() {
  return (
    <section id="par-turniru" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Par turnīru</h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              <span className="text-gold-500 font-display text-2xl">
                Cēzara kauss
              </span>{" "}
              ir prestižs futbola turnīrs, kas pulcē labākās amatieru komandas
              no visas Latvijas. Kopš 2018. gada mēs esam radījuši tradīciju,
              kas apvieno sporta azartu ar draudzīgu atmosfēru.
            </p>
            <p className="text-white/70 leading-relaxed">
              Turnīrs piedāvā augsta līmeņa sacensības, profesionālu
              organizāciju un neaizmirstamu pieredzi katram dalībniekam. Pievienojies
              cīņai par trofeju un kļūsti par daļu no Cēzara kauss vēstures!
            </p>
          </div>

          {/* Info Card */}
          <div className="gold-border rounded-lg p-8 bg-black-50/50">
            <h3 className="text-gold-500 font-display text-2xl mb-6">
              Turnīra informācija
            </h3>
            <dl className="space-y-4">
              <div className="flex justify-between items-center border-b border-gold-500/20 pb-4">
                <dt className="text-white/60">Datums</dt>
                <dd className="text-white font-semibold">15. jūnijs, 2025</dd>
              </div>
              <div className="flex justify-between items-center border-b border-gold-500/20 pb-4">
                <dt className="text-white/60">Vieta</dt>
                <dd className="text-white font-semibold">Rīga, Latvija</dd>
              </div>
              <div className="flex justify-between items-center border-b border-gold-500/20 pb-4">
                <dt className="text-white/60">Komandu skaits</dt>
                <dd className="text-white font-semibold">16 komandas</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-white/60">Balvu fonds</dt>
                <dd className="text-gold-500 font-semibold text-lg">€2,000</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/About.tsx
git commit -m "feat: add About section with tournament info card"
```

---

## Task 7: Create Registration Form Component

**Files:**
- Create: `components/RegistrationForm.tsx`

**Step 1: Create RegistrationForm component**

Create `components/RegistrationForm.tsx`:

```typescript
"use client";

import { useState, FormEvent } from "react";

interface FormData {
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="registracija" className="py-20 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-gold-500 mb-6">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-black mb-4">
            Paldies par reģistrāciju!
          </h2>
          <p className="text-black/70">
            Mēs nosūtīsim apstiprinājumu uz jūsu e-pastu.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="registracija" className="py-20 md:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display text-black text-center mb-4">
          Reģistrācija
        </h2>
        <p className="text-black/60 text-center mb-12">
          Piesakiet savu komandu turnīram līdz 1. jūnijam
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="teamName"
              className="block text-sm font-medium text-black mb-2"
            >
              Komandas nosaukums
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              required
              value={formData.teamName}
              onChange={(e) =>
                setFormData({ ...formData, teamName: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:border-gold-500 focus:outline-none transition-colors text-black"
              placeholder="Ievadiet komandas nosaukumu"
            />
          </div>

          <div>
            <label
              htmlFor="captainName"
              className="block text-sm font-medium text-black mb-2"
            >
              Kapteiņa vārds
            </label>
            <input
              type="text"
              id="captainName"
              name="captainName"
              required
              value={formData.captainName}
              onChange={(e) =>
                setFormData({ ...formData, captainName: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:border-gold-500 focus:outline-none transition-colors text-black"
              placeholder="Ievadiet kapteiņa vārdu"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-2"
            >
              E-pasts
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:border-gold-500 focus:outline-none transition-colors text-black"
              placeholder="komanda@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black mb-2"
            >
              Tālrunis
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:border-gold-500 focus:outline-none transition-colors text-black"
              placeholder="+371 20000000"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-gold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Nosūta..." : "Pieteikties"}
          </button>

          <p className="text-sm text-black/50 text-center">
            Reģistrējoties jūs piekrītat turnīra noteikumiem
          </p>
        </form>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/RegistrationForm.tsx
git commit -m "feat: add Registration form with validation and success state"
```

---

## Task 8: Install and Setup Photo Carousel

**Files:**
- Modify: `package.json` (via npm)
- Create: `components/PhotoCarousel.tsx`

**Step 1: Install Embla Carousel**

Run:
```bash
npm install embla-carousel-react embla-carousel-autoplay
```

**Step 2: Create PhotoCarousel component**

Create `components/PhotoCarousel.tsx`:

```typescript
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Cēzara kauss 2024 - finālspēle" },
  { src: "/images/gallery-2.jpg", alt: "Cēzara kauss 2024 - komandas" },
  { src: "/images/gallery-3.jpg", alt: "Cēzara kauss 2024 - apbalvošana" },
  { src: "/images/gallery-4.jpg", alt: "Cēzara kauss 2024 - spēles moments" },
  { src: "/images/gallery-5.jpg", alt: "Cēzara kauss 2024 - fani" },
  { src: "/images/gallery-6.jpg", alt: "Cēzara kauss 2024 - trofeja" },
];

export default function PhotoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="galerija" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Galerija</h2>

        {/* Featured Image */}
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden gold-border">
          <Image
            src="/images/featured.jpg"
            alt="Cēzara kauss 2024 - labākie momenti"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-none w-72 md:w-80 lg:w-96 aspect-[4/3] relative rounded-lg overflow-hidden gold-border group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center hover:bg-gold-400 transition-colors"
            aria-label="Iepriekšējais attēls"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center hover:bg-gold-400 transition-colors"
            aria-label="Nākamais attēls"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Commit**

Run:
```bash
git add package.json package-lock.json components/PhotoCarousel.tsx
git commit -m "feat: add PhotoCarousel with Embla and featured image"
```

---

## Task 9: Create Video Section Component

**Files:**
- Create: `components/VideoSection.tsx`

**Step 1: Create VideoSection component**

Create `components/VideoSection.tsx`:

```typescript
interface Video {
  id: string;
  title: string;
  thumbnail?: string;
}

const mainVideo: Video = {
  id: "dQw4w9WgXcQ", // Replace with actual video ID
  title: "Cēzara kauss 2024 - Turnīra apskats",
};

const additionalVideos: Video[] = [
  { id: "VIDEO_ID_1", title: "Finālspēles momenti" },
  { id: "VIDEO_ID_2", title: "Intervijas ar spēlētājiem" },
];

export default function VideoSection() {
  return (
    <section id="video" className="py-20 md:py-32 bg-black-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Video</h2>

        {/* Main Video */}
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden gold-border">
          <iframe
            src={`https://www.youtube.com/embed/${mainVideo.id}`}
            title={mainVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Additional Videos */}
        {additionalVideos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalVideos.map((video) => (
              <div
                key={video.id}
                className="relative aspect-video rounded-lg overflow-hidden gold-border group"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/VideoSection.tsx
git commit -m "feat: add VideoSection with YouTube embeds"
```

---

## Task 10: Create Sponsors Component

**Files:**
- Create: `components/Sponsors.tsx`

**Step 1: Create Sponsors component**

Create `components/Sponsors.tsx`:

```typescript
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

const sponsors: Sponsor[] = [
  { name: "Sponsor 1", logo: "/images/sponsors/sponsor-1.png", url: "https://sponsor1.com" },
  { name: "Sponsor 2", logo: "/images/sponsors/sponsor-2.png", url: "https://sponsor2.com" },
  { name: "Sponsor 3", logo: "/images/sponsors/sponsor-3.png", url: "https://sponsor3.com" },
  { name: "Sponsor 4", logo: "/images/sponsors/sponsor-4.png", url: "https://sponsor4.com" },
];

export default function Sponsors() {
  if (sponsors.length === 0) return null;

  return (
    <section id="sponsori" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Sponsori</h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-16 md:h-20 w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} - Cēzara kauss sponsors`}
                fill
                className="object-contain"
              />
            </a>
          ))}
        </div>

        <p className="text-center text-white/40 mt-12 text-sm">
          Interesē sponsorēšanas iespējas?{" "}
          <a
            href="mailto:sponsors@cezarakauss.lv"
            className="text-gold-500 hover:underline"
          >
            Sazinieties ar mums
          </a>
        </p>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/Sponsors.tsx
git commit -m "feat: add Sponsors section with grayscale hover effect"
```

---

## Task 11: Create Facebook Feed Component

**Files:**
- Create: `components/FacebookFeed.tsx`

**Step 1: Create FacebookFeed component**

Create `components/FacebookFeed.tsx`:

```typescript
"use client";

import { useEffect } from "react";
import Script from "next/script";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/cezarakauss"; // Replace with actual URL

export default function FacebookFeed() {
  useEffect(() => {
    // Re-render Facebook widget when component mounts
    if (typeof window !== "undefined" && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="py-20 md:py-32 bg-black-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Sekojiet mums</h2>
        <p className="text-white/60 text-center mb-12">
          Jaunākās ziņas un atjauninājumi no mūsu Facebook lapas
        </p>

        {/* Facebook SDK */}
        <Script
          src="https://connect.facebook.net/lv_LV/sdk.js#xfbml=1&version=v18.0"
          strategy="lazyOnload"
          nonce="facebook-sdk"
        />

        {/* Facebook Page Plugin */}
        <div className="bg-white rounded-lg p-4 max-w-lg mx-auto">
          <div
            className="fb-page"
            data-href={FACEBOOK_PAGE_URL}
            data-tabs="timeline"
            data-width="500"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
              <a href={FACEBOOK_PAGE_URL}>Cēzara kauss</a>
            </blockquote>
          </div>
        </div>

        {/* Fallback link */}
        <p className="text-center mt-8">
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500 hover:underline inline-flex items-center gap-2"
          >
            Apmeklēt Facebook lapu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/FacebookFeed.tsx
git commit -m "feat: add FacebookFeed with lazy-loaded SDK"
```

---

## Task 12: Create Footer Component

**Files:**
- Create: `components/Footer.tsx`

**Step 1: Create Footer component**

Create `components/Footer.tsx`:

```typescript
import Link from "next/link";

const navLinks = [
  { href: "#par-turniru", label: "Par turnīru" },
  { href: "#galerija", label: "Galerija" },
  { href: "#video", label: "Video" },
  { href: "#sponsori", label: "Sponsori" },
  { href: "#registracija", label: "Reģistrācija" },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/cezarakauss",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/cezarakauss",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-gold-500 font-display text-2xl font-bold mb-4">
              CĒZARA KAUSS
            </h3>
            <p className="text-white/60 text-sm">
              Prestižs futbola turnīrs kopš 2018. gada
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigācija</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakti</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@cezarakauss.lv"
                  className="text-white/60 hover:text-gold-500 transition-colors"
                >
                  info@cezarakauss.lv
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-gold-500 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold-500/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Cēzara kauss. Visas tiesības aizsargātas.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/Footer.tsx
git commit -m "feat: add Footer with navigation, contact info, and social links"
```

---

## Task 13: Create JSON-LD Structured Data

**Files:**
- Create: `components/StructuredData.tsx`

**Step 1: Create StructuredData component**

Create `components/StructuredData.tsx`:

```typescript
export default function StructuredData() {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Cēzara kauss 2025",
    description:
      "Prestižs futbola turnīrs Latvijā. Piesakiet savu komandu un cīnieties par trofeju!",
    startDate: "2025-06-15T09:00:00+03:00",
    endDate: "2025-06-15T20:00:00+03:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Futbola stadions",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rīga",
        addressCountry: "LV",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Cēzara kauss",
      url: "https://cezarakauss.lv",
    },
    offers: {
      "@type": "Offer",
      url: "https://cezarakauss.lv#registracija",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
    },
    sport: "Football",
    inLanguage: "lv",
    image: "https://cezarakauss.lv/og-image.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  );
}
```

**Step 2: Commit**

Run:
```bash
git add components/StructuredData.tsx
git commit -m "feat: add JSON-LD structured data for SportsEvent SEO"
```

---

## Task 14: Assemble Main Page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Update main page with all components**

Replace `app/page.tsx` content:

```typescript
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RegistrationForm from "@/components/RegistrationForm";
import PhotoCarousel from "@/components/PhotoCarousel";
import VideoSection from "@/components/VideoSection";
import Sponsors from "@/components/Sponsors";
import FacebookFeed from "@/components/FacebookFeed";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main>
        <Hero />
        <About />
        <RegistrationForm />
        <PhotoCarousel />
        <VideoSection />
        <Sponsors />
        <FacebookFeed />
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Verify page loads**

Run:
```bash
npm run dev
```

Open http://localhost:3000 and verify all sections render (images will be broken - expected).

**Step 3: Commit**

Run:
```bash
git add app/page.tsx
git commit -m "feat: assemble landing page with all components"
```

---

## Task 15: Add Placeholder Images

**Files:**
- Create: `public/images/` directory and placeholder images

**Step 1: Create image directories**

Run:
```bash
mkdir -p public/images/sponsors
```

**Step 2: Create placeholder images**

Create `public/images/.gitkeep`:
```
# Placeholder for tournament images
# Replace with actual images:
# - featured.jpg (1920x1080) - main gallery hero
# - gallery-1.jpg through gallery-6.jpg (800x600) - carousel photos
# - og-image.jpg (1200x630) - social sharing image
```

Create `public/images/sponsors/.gitkeep`:
```
# Placeholder for sponsor logos
# Add sponsor logos as PNG files (transparent background recommended)
# Recommended size: 200x80px
```

**Step 3: Commit**

Run:
```bash
git add public/images/
git commit -m "chore: add placeholder directories for images"
```

---

## Task 16: Add SEO Files

**Files:**
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`

**Step 1: Create robots.ts**

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cezarakauss.lv/sitemap.xml",
  };
}
```

**Step 2: Create sitemap.ts**

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cezarakauss.lv",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
```

**Step 3: Commit**

Run:
```bash
git add app/robots.ts app/sitemap.ts
git commit -m "feat: add robots.txt and sitemap.xml for SEO"
```

---

## Task 17: Final Build Verification

**Step 1: Run production build**

Run:
```bash
npm run build
```

Expected: Build completes successfully with no errors.

**Step 2: Test production build locally**

Run:
```bash
npm run start
```

Open http://localhost:3000 and verify:
- [ ] All sections render correctly
- [ ] Navigation scroll works
- [ ] Mobile menu opens/closes
- [ ] Form validation works
- [ ] Carousel scrolls

**Step 3: Final commit**

Run:
```bash
git add .
git commit -m "chore: verify production build"
```

---

## Summary

**17 tasks total** covering:
1. Project initialization
2. Custom theme configuration
3. Fonts and layout setup
4. Navigation component
5. Hero section
6. About section
7. Registration form
8. Photo carousel
9. Video section
10. Sponsors section
11. Facebook feed
12. Footer
13. JSON-LD structured data
14. Main page assembly
15. Placeholder images
16. SEO files (robots.txt, sitemap.xml)
17. Final build verification

**SEO Features Implemented:**
- Server-side rendering (Next.js App Router)
- Semantic HTML with proper heading hierarchy
- Meta tags, Open Graph, Twitter Cards
- JSON-LD SportsEvent structured data
- robots.txt and sitemap.xml
- next/image optimization
- next/font optimization
- Latvian language meta tags
- Lazy loading for videos and Facebook embed

**To complete the page, replace:**
- Placeholder images in `/public/images/`
- YouTube video IDs in `VideoSection.tsx`
- Facebook page URL in `FacebookFeed.tsx`
- Social media URLs in `Footer.tsx`
- Contact email addresses
- Tournament details (date, location, etc.)
