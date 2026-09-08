// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Update `site` before deploying — sitemap and canonical URLs depend on it.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', th: 'th' } } })],
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
