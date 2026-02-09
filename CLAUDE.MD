# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cēzara Kauss — a Latvian memorial football tournament website. All user-facing text is in **Latvian**. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint (next lint config)
```

No test framework is configured.

## Architecture

### Routing (App Router)

| Route | Purpose |
|---|---|
| `/` | Landing page — hero with countdown, about, sponsors, hall of fame |
| `/turnira-vesture` | Tournament history — year-by-year results, photo galleries, videos |
| `/registret-komandu` | Team registration form |
| `/reglaments` | Tournament rules/regulations |
| `/api/register` | POST endpoint — validates form, saves to Google Sheets, sends emails via Resend |

### Component Organization

- `components/home/` — Homepage sections (Hero, About, PrizePool, HallOfFame, Sponsors, etc.)
- `components/vesture/` — Tournament history sections (PhotoGallery with Lightbox, ResultsPodium, YearSection, etc.)
- `components/layout/` — Navigation (fixed header) and Footer
- `components/RegistrationForm.tsx` — Team registration form with file upload and validation
- `components/ScrollReveal.tsx` — Motion-based scroll animation wrapper
- `components/StructuredData.tsx` — JSON-LD schema markup for SEO

### Data Layer

- `data/tournament-history.ts` — Static tournament data (years, teams, results, stats)
- `data/get-year-photos.ts` — Maps year to photo file paths

### Backend Integrations

The `/api/register` endpoint chains two services:
1. **Google Sheets API** — Appends registration data (team name, players, contact info) to a spreadsheet via service account auth
2. **Resend** — Sends confirmation email to the team and notification to admin (`ADMIN_EMAIL`)

### Environment Variables

See `.env.example`. Required: `RESEND_API_KEY`, `GOOGLE_SHEETS_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`, `ADMIN_EMAIL`.

## Design System

### Brand Colors (defined as Tailwind theme in `globals.css`)

- `cesar-gold` (#D4AF37) — primary brand accent
- `cesar-gold-dark` (#996515) — gradient endpoint
- `cesar-gold-light` (#F5E6BE) — subtle backgrounds
- `pitch-dark` (#000000) — primary dark
- Zinc scale for neutral tones

### Typography

- **Display:** Bebas Neue (`font-display` / `--font-bebas`) — headings, hero text
- **Body:** Inter (`font-body` / `--font-inter`) — paragraphs, UI text
- Loaded via `next/font/google` in `app/layout.tsx`

### Key CSS Classes (in `globals.css`)

- `.section-label` — Gold uppercase text on black background pill
- `.hero-label` — Gold uppercase text without background
- `.gold-text-gradient` — Gold-to-dark gradient text effect
- `.hero-gradient` — Hero background with image overlay
- `.animate-reveal` / `.animate-fade-in` — CSS entry animations

### Animation Patterns

- CSS animations (`animate-reveal`, `animate-fade-in`) for initial page loads
- **Motion library** (`motion/react`) via `ScrollReveal` component for scroll-triggered reveals
- Staggered animation delays for sequential element reveals

## SEO — Critical Priority

SEO optimization is paramount in every change. Always keep this in mind:
- Every page must export proper `Metadata` (title, description, keywords, OpenGraph, Twitter cards, canonical URL)
- Use semantic HTML: proper heading hierarchy (single `h1` per page), `<main>`, `<section>`, `<article>`, `<nav>`
- All images must have descriptive `alt` text in Latvian and use Next.js `<Image>` with width/height for CLS prevention
- Include `StructuredData` (JSON-LD) on pages — use Schema.org types (SportsEvent, Organization, etc.)
- The project already generates `robots.ts` and `sitemap.ts` — keep these updated when adding new routes
- Metadata is centralized in `app/metadata.ts` with per-page overrides
- Prefer server components (SSR/SSG) over client components when possible for crawlability
- Ensure fast load times: optimize images (WebP), lazy-load below-fold content, minimize client-side JS

## Frontend Design Guidelines

Avoid generic "AI slop" aesthetics. Make distinctive, context-appropriate design choices:
- No overused fonts (Roboto, Arial, system defaults). The project uses Bebas Neue + Inter deliberately.
- No cliched color schemes (purple gradients, pastel everything). Stick to the gold/black brand identity.
- Commit to cohesive aesthetics — dominant colors with sharp accents over timid, evenly-distributed palettes.
- Use Motion library for React animations. Focus on high-impact moments (staggered page load reveals) over scattered micro-interactions.
- Create atmosphere with layered backgrounds and gradients rather than flat solid colors.

## Path Alias

`@/*` maps to project root (configured in `tsconfig.json`).

## Static Assets

Images stored in `public/images/`. Tournament photos organized by year: `public/images/vesture/{year}/`.
