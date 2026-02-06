# Cēzara kauss Landing Page Design

## Overview

Landing page for the football tournament "Futbola Turnīrs 'Cēzara kauss'" (Caesar's Cup). A prestigious, professional tournament requiring equal emphasis on team registration and event information.

## Design Decisions

| Aspect | Decision |
|--------|----------|
| Colors | Gold, black, white |
| Vibe | Professional/prestigious |
| Language | Latvian only |
| Tech stack | Next.js 14+ (App Router), Tailwind CSS, TypeScript |
| Priority | SEO-first approach throughout |

## Page Structure (top to bottom)

1. Hero
2. About (Par turnīru)
3. Registration (Reģistrācija)
4. Photo Gallery (Galerija)
5. Video Section (Video)
6. Sponsors (Sponsori)
7. Facebook Feed
8. Footer

---

## Section Details

### 1. Hero

- Full-screen black background with gold gradient accent
- "CĒZARA KAUSS" in large gold typography (elegant serif or strong sans-serif)
- "Futbola Turnīrs" subtitle in white, smaller
- CTA button: "Reģistrē komandu" (gold) - scrolls to registration
- Tournament date and location displayed
- Optional: subtle particle animation or muted background video with dark overlay

**Navigation:**
- Sticky black nav bar with gold text
- Links: Par turnīru | Galerija | Video | Sponsori | Reģistrācija
- Logo/crest on left (if available)

### 2. About Section (Par turnīru)

- Black background, white text, gold heading accents
- Two-column layout:
  - Left: Tournament description (history, prestige, what makes it special)
  - Right: Gold-bordered card with key details:
    - Datums (Date)
    - Vieta (Location)
    - Komandu skaits (Number of teams)
    - Balvu fonds (Prize pool)

### 3. Registration Form (Reģistrācija)

- White background for contrast and conversion focus
- Form fields (black borders, gold focus states):
  - Komandas nosaukums (Team name)
  - Kapteiņa vārds (Captain name)
  - E-pasts (Email)
  - Tālrunis (Phone)
- Gold submit button: "Pieteikties"
- Note below about confirmation email and deadline

### 4. Photo Gallery (Galerija)

- Black background, gold heading
- Featured hero photo (full or 2/3 width)
- Inline carousel/slider below - scrollable row of photos
- Subtle gold border/hover effects
- No popup/lightbox - keeps users on page

### 5. Video Section (Video)

- Black background, gold heading
- Main featured YouTube/Vimeo embed (large, centered, responsive)
- Optional: 2-3 smaller video thumbnails below
- Gold play button overlay on thumbnails
- Subtle fade-up scroll animations

### 6. Sponsors Section (Sponsori)

- Black background, gold heading
- Flexible logo row/grid (same height, proportional width)
- Grayscale-to-color hover effect
- Scalable for any number of sponsors
- Optional tiered sizing for gold/silver/bronze levels
- SEO: linked logos with proper rel attributes and alt text

### 7. Facebook Feed

- Embedded Facebook Page Plugin
- Black background, feed in white card container
- Lazy-loaded for performance
- Crawlable heading and description above embed
- Direct link fallback to Facebook page

### 8. Footer

- Black background, gold accents
- Tournament name and year
- Quick nav links
- Social media icons (Facebook, Instagram, etc.)
- Contact email
- Copyright notice

---

## SEO Implementation

### Meta & Tags
- Page title: "Cēzara kauss 2025 | Futbola Turnīrs"
- Meta description: Latvian keywords (futbols, turnīrs, Cēzara kauss, reģistrācija)
- Open Graph and Twitter Cards with custom tournament image
- Latvian hreflang tags

### Structured Data (JSON-LD)
- SportsEvent schema with date, location, organizer

### Semantic HTML
- Proper landmark elements: `<header>`, `<main>`, `<section>`, `<footer>`
- Correct heading hierarchy: single `<h1>`, logical `<h2>`-`<h6>`

### Images
- Descriptive Latvian alt texts
- next/image optimization (WebP, lazy loading)

### Performance (Core Web Vitals)
- Static generation (SSG) where possible
- Lazy loading for images, videos, Facebook embed
- Minimal JavaScript bundle
- next/font optimization
- sitemap.xml and robots.txt

---

## Project Structure

```
/app
  page.tsx          # Landing page
  layout.tsx        # Metadata, fonts, global styles
/components
  Hero.tsx
  About.tsx
  RegistrationForm.tsx
  PhotoCarousel.tsx
  VideoSection.tsx
  Sponsors.tsx
  FacebookFeed.tsx
  Footer.tsx
  Navigation.tsx
/public
  /images           # Tournament images, sponsor logos
```

---

## Open Items

- [ ] Tournament date and location details
- [ ] Tournament description/history text
- [ ] Photos from previous years
- [ ] Video URLs (YouTube/Vimeo)
- [ ] Sponsor logos
- [ ] Facebook page URL
- [ ] Contact email
- [ ] Logo/crest (if available)
- [ ] Registration form backend (email, database, or third-party service)
