import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['lv', 'en'],
  defaultLocale: 'lv',
  localePrefix: 'as-needed',
  // Always default to Latvian; never auto-detect from the browser's
  // Accept-Language header. Visitors can still switch manually (/en).
  localeDetection: false,
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
