# Polaris website

Marketing website for Polaris, built with [Astro](https://astro.build). English and French.

## Run it locally

Requires Node.js 22.23.4 or newer (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Structure

The site map follows **Selected sitemap: Concept A (v2)** in FigJam.

| Path | What it is |
|---|---|
| `src/data/sitemap.ts` | Every page, its URL, and its English and French menu label and title. Menus, footer and stub pages are generated from this file. |
| `src/i18n/ui.ts` | Shared interface text (buttons, labels) in English and French. |
| `src/components/Header.astro` | Logo, menus with dropdowns, language switch, sign in, Request a demo. |
| `src/components/Footer.astro` | Footer links and language switch. |
| `src/components/Home.astro` | Homepage (shared by `/` and `/fr/`). |
| `src/components/StubPage.astro` | Placeholder layout for pages without content yet. |
| `src/pages/[...slug].astro`, `src/pages/fr/[...slug].astro` | Generate every stub page in both languages. |
| `src/styles/global.css` | Design tokens (white, gray, navy), type and buttons. |
| `prototype/` | The original static prototype, kept for reference. Not part of the build. |

### URLs

English pages have no prefix (`/platform/atlas/`). French pages use `/fr/` with the same slug (`/fr/platform/atlas/`).

### Turning a stub into a real page

1. Create the page, for example `src/pages/platform/atlas.astro` and `src/pages/fr/platform/atlas.astro` (both can render one shared component).
2. In `src/data/sitemap.ts`, set `stub: false` for that page so the stub generator skips it.

## Still to set

- `SITE.signInUrl` in `src/config.ts`: the Polaris app sign-in URL.
- `site` in `astro.config.mjs`: the production domain, for canonical and hreflang URLs.
- Final logo (the current star wordmark is a placeholder).
