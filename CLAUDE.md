# Polaris website: project context for Claude

## What this is

The public marketing website for **Polaris**, a Canadian B2B research security due diligence (OSINT) platform by Reviewerly. Built with Astro as a static site, in English and French.

**Audiences:** Government of Canada organizations, university research security teams, and research funders.

## Working with Zara (product designer, owner of this repo)

- Plan first, then wait for explicit confirmation before making changes.
- Never use em dashes in responses. Use commas, periods, parentheses or colons.
- Keep explanations plain and practical.

## Source of truth for structure

FigJam board, frame "Selected sitemap: Concept A (v2)":
https://www.figma.com/board/j9X3QrsmZCZSeHR2lKYgbx/Polaris-Website-Sitemap-Concepts?node-id=14-886

- Top nav: Platform | Solutions | Data & Coverage | Resources | About | [Request a Demo]. Logo links home.
- Header utilities on every page: Sign in to Polaris, EN | FR switch.
- Footer on every page: Contact, Privacy policy, Terms of use, Accessibility, language switch.
- Trust & Security is not a menu. It is a short section on the homepage.
- Homepage sections, in order: 1 Hero, 2 Trusted by, 3 The problem, 4 How Polaris works, 5 Key features, 6 Product in action, 7 Data coverage, 8 Who it's for, 9 Trust and security (short), 10 Evidence of impact, 11 Resources, 12 Final call to action. The board lists what goes in each.

If the board changes, update `src/data/sitemap.ts` to match.

## Design rules

- Minimal style. Colors: white, gray and navy blue only. Tokens are in `src/styles/global.css`.
- **Homepage:** text only where it is critical and easy to read. No filler copy.
- **Other pages:** more detail is fine, since their purpose is to inform.
- The site does **not** use the Polaris app design system. It serves a different purpose.
- Font: Inter, self-hosted through `@fontsource-variable/inter` (no Google Fonts requests).
- Accessibility matters (audiences include government): semantic HTML, keyboard support, visible focus, sufficient contrast.

## Content rules

- `prototype/` holds a colleague's earlier static prototype. Reuse its copy where it fits, but it is reference only and is not part of the build.
- Where the prototype and the FigJam board disagree, **follow the board**:
  - Product names: **Polaris Core** (verified sources), **Polaris Loop** (open-web research, called "Loupe" in the prototype), **Atlas** (relationship graph). Final public names are still an open question.
  - Trust wording: zero data retention (searches and clicks never stored), closing a project permanently deletes its data, built in Canada and designed for data sovereignty, every fact traceable to its source, AI assists and the analyst decides, anonymous browsing via page screenshots and a secure in-app browser. Do **not** use the prototype's "hosted entirely in Canada" or "saves searches on the user's device".
  - Languages: the board says 7. The exact list is not confirmed yet.
- The prototype's "Conflict-of-interest investigation" and "Sensitive technology review" use cases are not separate pages. Fold them into Screening and Key features unless Zara decides otherwise.
- Never publish unconfirmed claims, partner logos, metrics, testimonials or results. "Trusted by" (beyond Government of Canada) and "Evidence of impact" need approval first.
- The prototype contained designer notes inside public copy (for example "The website should explain Polaris through..."). Never carry those over.
- French copy is a first draft until reviewed by a French speaker. Use Canadian French conventions (for example "Nous joindre", a space before colons).

## How the code is organized

| Path | Purpose |
|---|---|
| `src/data/sitemap.ts` | Every page: URL, EN/FR menu label, EN/FR title, `stub` flag. Menus, footer and stub pages are generated from it. |
| `src/i18n/ui.ts`, `src/i18n/utils.ts` | Shared EN/FR interface strings and URL helpers (`localize`, `basePath`). |
| `src/components/Header.astro` | Menus with dropdowns (hover and click on desktop, accordion on mobile), language switch, sign in, demo button. Mobile layout below 1240px (set by the longer French labels). |
| `src/components/Footer.astro`, `LanguageSwitch.astro`, `Logo.astro` | Shared chrome. The logo is a placeholder. |
| `src/components/Home.astro` | Homepage, shared by `/` and `/fr/`. |
| `src/components/StubPage.astro` | Placeholder page. Section overview stubs list their child pages. |
| `src/pages/[...slug].astro`, `src/pages/fr/[...slug].astro` | Generate all stub pages in both languages. |

**URLs:** English has no prefix (`/platform/atlas/`), French uses `/fr/` with the same slug. `trailingSlash: 'always'`, so internal links end with `/`.

**Turning a stub into a real page:** create `src/pages/<path>.astro` and `src/pages/fr/<path>.astro` (both rendering one shared component that takes `lang`), then set `stub: false` for that page in `sitemap.ts`.

**Commands:** `npm install`, `npm run dev` (http://localhost:4321), `npm run build`. Requires Node 22.23.4 or newer (`.nvmrc`).

Before finishing a change: run `npm run build`, make sure every internal link resolves in both languages, and check the header still fits in French at 1240px wide.

## Build plan and status

1. ~~Skeleton: Astro, EN/FR routing, header, footer, all pages as stubs, homepage wireframe~~ (done)
2. Homepage: all 12 sections with real content in EN and FR (next)
3. Platform, Solutions, Data & Coverage content pages, reusing prototype copy where it fits
4. Demo request form and thank-you page, About pages, legal pages
5. Visual polish pass

## Open items

- Real Polaris app sign-in URL (`SITE.signInUrl` in `src/config.ts`, currently `#`).
- Production domain (`site` in `astro.config.mjs`) for canonical and hreflang URLs.
- Final logo.
- Where demo form submissions go. Prefer a Canadian-hosted option to stay consistent with the sovereignty message.
- Hosting choice for the site.
- From the board: which partners and logos are approved for "Trusted by"; whether government buyers need a detailed Security and privacy page (could live in the footer); final public names for Core, Loop and Atlas; which features are live at launch vs coming soon.
- Text for Privacy policy, Terms of use and Accessibility pages must come from the company.
