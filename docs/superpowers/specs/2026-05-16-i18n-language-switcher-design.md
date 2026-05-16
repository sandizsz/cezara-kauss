# i18n Language Switcher — Design Spec

**Date:** 2026-05-16  
**Status:** Approved  
**Goal:** Add English translation with LV/EN language switcher to engage Estonian teams, while maintaining full SEO integrity.

---

## 1. Overview

Implement bilingual Latvian/English support using `next-intl` on Next.js 16 App Router. Latvian remains the default language at the root domain. English is served under `/en/` prefix with English-friendly URL slugs. All existing Latvian URLs are preserved — no broken links, no SEO regression.

---

## 2. Architecture

### Folder restructure

All pages move under `app/[locale]/`. The API route and static assets stay outside this segment, untouched.

```
app/
  [locale]/
    layout.tsx              ← replaces app/layout.tsx; adds locale-aware <html lang>, next-intl provider
    page.tsx                ← home page
    tournament-history/
      page.tsx              ← replaces app/turnira-vesture/page.tsx
    rules/
      page.tsx              ← replaces app/reglaments/page.tsx
    sign-up/
      page.tsx              ← replaces app/registret-komandu/page.tsx
  api/
    register/
      route.ts              ← unchanged
  globals.css
  metadata.ts               ← updated for locale-aware base metadata
  sitemap.ts                ← updated to include EN URLs
  robots.ts                 ← unchanged
  favicon files             ← unchanged

i18n/
  routing.ts                ← locales array, pathname mappings, localePrefix config
  request.ts                ← next-intl server-side getRequestConfig

messages/
  lv.json                   ← all Latvian strings
  en.json                   ← all English strings

middleware.ts               ← next-intl middleware for locale detection and routing
```

### New dependencies

- `next-intl` (latest stable, currently v3.x)

---

## 3. Routing & URL Structure

### Locale config (`i18n/routing.ts`)

```ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['lv', 'en'],
  defaultLocale: 'lv',
  localePrefix: 'as-needed',   // LV has no prefix; EN has /en/ prefix
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

### Resulting URLs

| Internal path | Latvian URL (no prefix) | English URL |
|---|---|---|
| `/` | `cezarakauss.lv/` | `cezarakauss.lv/en/` |
| `/tournament-history` | `cezarakauss.lv/turnira-vesture` | `cezarakauss.lv/en/tournament-history` |
| `/rules` | `cezarakauss.lv/reglaments` | `cezarakauss.lv/en/rules` |
| `/sign-up` | `cezarakauss.lv/registret-komandu` | `cezarakauss.lv/en/sign-up` |

---

## 4. Middleware & Language Detection

`middleware.ts` at project root using next-intl's `createMiddleware(routing)`.

**Detection logic:**
1. On first visit, read `Accept-Language` header
2. If header contains `et` (Estonian) or `en`, redirect to `/en/`
3. Store choice in `NEXT_LOCALE` cookie — persists across sessions
4. Manual switcher in nav overwrites the cookie

**Matcher config:** Runs on all routes except `/_next/`, `/api/`, and static file extensions.

---

## 5. Translation Files

All user-visible strings are extracted from components into `messages/lv.json` and `messages/en.json`. Structure mirrors the component hierarchy.

### Top-level keys

```json
{
  "nav": {},
  "hero": {},
  "about": {},
  "prizePool": {},
  "hallOfFame": {},
  "sponsors": {},
  "teamSection": {},
  "matchDayExperience": {},
  "tournamentTimeline": {},
  "videoSection": {},
  "locationMap": {},
  "footer": {},
  "history": {},
  "rules": {},
  "registration": {}
}
```

### Usage in components

- **Server components** (page files, About, HallOfFame, etc.): `const t = await getTranslations('sectionName')`
- **Client components** (Hero, Navigation, RegistrationForm): `const t = useTranslations('sectionName')`
- Components that are currently server components should remain server components where possible

### What is NOT translated

- Tournament data in `data/tournament-history.ts` (team names, scores — proper nouns/numbers)
- Photo gallery content (images)
- Video embeds
- Sponsor names/logos

---

## 6. Language Switcher UI

Small `LV | EN` pill added to the Navigation component, between the nav links and the register CTA button.

```
[Logo]   SĀKUMS  Par turnīru  Vēsture  Reglaments   [LV | EN]   [Reģistrēt komandu →]
```

- Active locale: gold text (`cesar-gold`), no underline needed
- Inactive locale: zinc-400, hover to black
- Separator `|` in zinc-200
- On mobile: appears in the open menu drawer below nav links
- Clicking switches locale and navigates to the equivalent page in the new locale using next-intl's `useRouter().replace()` with `{ locale: newLocale }`

---

## 7. SEO

### hreflang alternates

Every page's metadata includes `alternates.languages`:

```ts
alternates: {
  canonical: locale === 'lv' 
    ? 'https://cezarakauss.lv/[lv-path]' 
    : 'https://cezarakauss.lv/en/[en-path]',
  languages: {
    'lv': 'https://cezarakauss.lv/[lv-path]',
    'en': 'https://cezarakauss.lv/en/[en-path]',
    'x-default': 'https://cezarakauss.lv/[lv-path]',
  },
}
```

`x-default` points to the Latvian version (primary audience).

### `<html lang>` attribute

Dynamic per locale: `lang="lv"` or `lang="en"`. Set in `app/[locale]/layout.tsx` from `params.locale`.

### OpenGraph locale

`openGraph.locale` set to `lv_LV` or `en_GB` per locale.

### Sitemap

`sitemap.ts` emits both LV and EN entries for all four pages (8 entries total).

### Structured data

`"inLanguage"` in JSON-LD becomes dynamic — `"lv"` or `"en"` based on locale. `SportsEvent` schema (event name, location) stays in Latvian as the event is physically in Latvia.

### English keywords (en.json metadata)

Suggested EN keywords for `metadata` section in en.json:
- `"Cezara Kauss"`, `"football tournament Latvia"`, `"amateur football tournament"`, `"Gulbene football"`, `"team registration"`

---

## 8. Registration API (`/api/register`)

The registration form adds a hidden `locale` field (`"lv"` or `"en"`) to the submission payload. The `/api/register` route uses this to:

- Send the confirmation email to the team in their language (two email templates: LV and EN)
- Admin notification email stays in Latvian regardless

Form field labels, placeholders, validation error messages, and success/error toast messages are all translated via the `registration` key in the translation files.

---

## 9. Implementation Order

1. Install `next-intl`
2. Create `i18n/routing.ts` and `i18n/request.ts`
3. Create `middleware.ts`
4. Restructure `app/` — create `[locale]` group, move/rename page folders
5. Update `app/[locale]/layout.tsx` with next-intl provider and dynamic `lang` attr
6. Extract all strings to `messages/lv.json` (copy from existing components)
7. Write `messages/en.json` (English translations)
8. Update each component to use `useTranslations()` / `getTranslations()`
9. Add LV/EN switcher to Navigation
10. Update metadata per page for hreflang and locale-specific titles/descriptions
11. Update `sitemap.ts`
12. Update RegistrationForm — add locale field, translate form text
13. Update `/api/register` — locale-aware email templates
14. Test: locale detection, manual switching, all page routes in both languages, SEO tags

---

## 10. Out of Scope

- Estonian (`et`) translation — auto-detection redirects Estonian browsers to EN, which is sufficient
- RTL language support
- Database-driven translations (static JSON files are sufficient for this site's scale)
- Separate subdomain deployment
