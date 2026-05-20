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
