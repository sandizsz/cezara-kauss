# Turnira Vesture (Tournament History) Page Design

## Overview

A single scrollable page at `/turnira-vesture` that serves as the tournament archive. Each year (newest first) gets a full section with results, stats, video highlights, participating teams, and a photo gallery with lightbox. Designed to grow year-over-year — adding a new year means adding a data entry and dropping photos in a folder.

## Page Structure

```
/turnira-vesture
├── Page hero banner (~40vh)
├── Quick tournament stats bar
├── Year 2025 section
│   ├── Results podium (1st, 2nd, 3rd)
│   ├── Stats row (teams, goals, MVP, etc.)
│   ├── Video highlight (YouTube embed)
│   ├── Participating teams grid
│   └── Photo gallery + lightbox
├── Gold divider
├── Year 2024 section
│   └── (same subsections)
└── Footer
```

## Architecture

### Route

- **Path:** `/turnira-vesture`
- **File:** `app/turnira-vesture/page.tsx`
- Server component with metadata export for SEO

### Data File

Create `data/tournament-history.ts` to keep data separate from components:

```ts
export type TournamentYear = {
  year: number
  winner: { name: string; score?: string }
  runnerUp: { name: string; score?: string }
  thirdPlace: { name: string; score?: string }
  teams: string[]
  stats: { label: string; value: string; icon?: string }[]
  photos: string[] // paths: "/images/vesture/2024/photo1.webp"
  videoUrl: string // YouTube URL
  videoTitle: string
}

export const tournamentHistory: TournamentYear[] = [
  { year: 2025, ... },
  { year: 2024, ... },
]
```

### Image Storage

- **Location:** `public/images/vesture/{year}/`
  - e.g. `public/images/vesture/2024/photo1.webp`
  - e.g. `public/images/vesture/2025/photo1.webp`
- **Optimization:** Next.js `<Image>` component handles:
  - Automatic WebP/AVIF conversion
  - Responsive srcset generation
  - Lazy loading by default
  - On-demand resizing at request time
- **No manual compression needed** — drop originals in the folder

### Components

All new components in `/components/`:

| Component | Type | Purpose |
|-----------|------|---------|
| `VestureHero.tsx` | Static | Page hero banner with title + quick stats bar |
| `YearSection.tsx` | Static | Full year block — orchestrates the 5 subsections |
| `ResultsPodium.tsx` | Static | Visual podium layout for top 3 teams |
| `YearStats.tsx` | Static | Horizontal row of stat cards |
| `YearVideo.tsx` | Client | YouTube embed with play button overlay |
| `TeamGrid.tsx` | Static | Grid of team name badges |
| `PhotoGallery.tsx` | Client | Photo grid + click to open lightbox |
| `Lightbox.tsx` | Client | Fullscreen overlay with prev/next navigation |

## Visual Design

### Page Hero (~40vh)

- Dark background with subtle gradient overlay (matching site aesthetic)
- "TURNIRA VESTURE" in Bebas Neue, large
- Gold subtitle: "Cezara Kauss kopsh 2024"
- Quick stat bar below: 3 pills showing "2 turniri", "X komandas", "X varti" (totals across all years)

### Year Sections

Each year block is full-width, separated by a gold horizontal divider.

**Background treatment:** The year number (e.g. "2025") rendered as a massive semi-transparent watermark behind the section content for visual depth.

#### 1. Results Podium

- Visual podium layout: 2nd place (left) | 1st place (center, taller) | 3rd place (right)
- Winner card: larger, gold border, trophy icon, gold background accent
- Runner-up: silver-toned border
- Third place: bronze-toned border
- Final score displayed if available

#### 2. Stats Row

- 4-5 cards in horizontal row (responsive: 2x2 on mobile)
- Same style as existing About.tsx info cards for consistency
- Stats: Total teams, Total goals, MVP, Best goalkeeper, etc.
- Gold accent on values, zinc text on labels

#### 3. Video Highlight

- Same approach as existing VideoSection.tsx
- YouTube thumbnail with centered play button overlay
- Click loads the YouTube iframe (performance: no iframe until interaction)
- Title below: e.g. "2025. gada turnira apskats"

#### 4. Participating Teams

- Grid of team name badges/chips
- 3-4 columns on desktop, 2 on mobile
- Subtle `bg-white/10` background with gold border-bottom on hover
- Winner team gets a small trophy icon or gold highlight

#### 5. Photo Gallery

- 3-column grid on desktop, 2 on mobile
- All photos use Next.js `<Image>` with `sizes` prop for responsive optimization
- Grayscale by default, full color on hover (CSS filter transition — matches existing PhotoCarousel pattern)
- Click opens lightbox

### Lightbox

- Fullscreen overlay: `bg-black/95` with `backdrop-blur`
- Centered image, max-width/max-height constrained to viewport
- Left/right arrow buttons on sides (semi-transparent, visible on hover)
- Close button (X) top-right
- Photo counter at bottom: "3 / 12"
- Keyboard support: ArrowLeft, ArrowRight, Escape
- Smooth CSS transitions between photos
- Built with React state — no external library

### Color & Typography

Follows existing site tokens:
- `--color-cesar-gold: #D4AF37` for accents
- `--color-pitch-dark: #000000` for backgrounds
- Bebas Neue for headings/year numbers
- Inter for body text/stats/team names
- Zinc scale for secondary text

## SEO

### Metadata

```ts
export const metadata: Metadata = {
  title: "Turnira Vesture | Cezara Kauss",
  description: "Cezara Kauss futbola turnira vesture — rezultati, foto galerija, statistika un komandas no visiem turniriem kopsh 2024. gada.",
  keywords: ["Cezara kauss vesture", "futbola turnirs rezultati", ...],
  openGraph: { ... },
}
```

### Sitemap

Add to existing `app/sitemap.ts`:
```ts
{ url: "https://cezarakauss.lv/turnira-vesture", priority: 0.7, changeFrequency: "yearly" }
```

### Structured Data

JSON-LD `SportsEvent` schema for each tournament year, enabling rich results for past events.

### Navigation

Add "Vesture" link to existing Navigation.tsx menu items.

## Adding a New Year (Annual Process)

When a new tournament concludes:

1. Create folder: `public/images/vesture/{year}/`
2. Drop tournament photos into the folder (any size — Next.js optimizes)
3. Add a new entry to the `tournamentHistory` array in `data/tournament-history.ts`
4. Deploy

No component changes needed.

## File Summary

### New files:
- `app/turnira-vesture/page.tsx` — Page route + metadata
- `data/tournament-history.ts` — Tournament data
- `components/VestureHero.tsx` — Page hero
- `components/YearSection.tsx` — Year block orchestrator
- `components/ResultsPodium.tsx` — Podium layout
- `components/YearStats.tsx` — Stats row
- `components/YearVideo.tsx` — YouTube embed
- `components/TeamGrid.tsx` — Team badges grid
- `components/PhotoGallery.tsx` — Photo grid
- `components/Lightbox.tsx` — Fullscreen image viewer
- `public/images/vesture/2024/` — 2024 photos directory
- `public/images/vesture/2025/` — 2025 photos directory

### Modified files:
- `app/sitemap.ts` — Add /turnira-vesture
- `components/Navigation.tsx` — Add "Vesture" nav link
