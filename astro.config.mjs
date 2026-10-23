// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: set the production domain once it is known (needed for canonical and hreflang URLs).
  // site: 'https://www.example.ca',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
