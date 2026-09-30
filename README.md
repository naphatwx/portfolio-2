# Portfolio

Static portfolio site. Swiss editorial minimalism, light by default, English with Thai
translation.

## Stack

- **Astro** — static output, no client-side framework
- **Tailwind CSS v4** — via `@tailwindcss/vite`, no config file
- **Astro native i18n** — `en` (default, unprefixed) and `th` (`/th/`)

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on `localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the built output |
| `npm run check` | Type and template check |

## Design rules

Near-achromatic. One accent, KMUTT red (from the portrait's gown), marks the primary
action and live state only: email buttons, the "current role" dot, focus rings, selection.
Everything else gets emphasis from type size, weight and hairline rules.

- Palette: light `#FFFFFF` / `#222222` / `#6E6E73` / `#E6E6E6`, accent `#C4291C`; dark
  inverted, accent `#FF7A66`
- Type: Inter (Latin) + Anuphan (Thai), weights 400 and 500, from Google Fonts
- Root font size is 20px; breakpoints are set in px in `@theme` so `lg` stays 1024px
- `.display`: the hero name, with a separate Thai size and tracking
- `.section-title`: every section `h2`
- `.label`: small tracked caps for metadata (dates, tags, key labels), untracked for Thai
- Light is the default state; `.dark` on `<html>` is the opt-in
- The OS `prefers-color-scheme` is deliberately ignored; only an explicit toggle choice
  (stored in `localStorage`) switches to dark
- Motion: one moment only, the deploy flow in Projects runs once when scrolled into view

## Layout

```
src/
  data/site.ts               All content — edit here, not in components
  i18n/ui.ts                 UI strings, both locales
  i18n/utils.ts              t(), locale detection, path helpers
  assets/portrait.png        Hero portrait, cut out and despilled
  assets/certificates/       Certificate scans, linked full-size by slug
  components/Hero.astro      Name, headline, current role, contact, portrait
  components/HomePage.astro  Shared page body for both locales
  layouts/Base.astro         head, meta/OG tags, theme boot
  pages/index.astro          English
  pages/th/index.astro       Thai
  pages/404.astro            Not-found page (bilingual)
raw-data.md                  Source CV content (not published)
```

## Content notes

- `src/data/site.ts` is the single source of content. Certificate entries are matched to
  images in `src/assets/certificates/` by `slug`; a matched title links to the full-size
  scan, an unmatched one renders as plain text.
- `person.cv`: set to a PDF in `public/` (e.g. `'/cv.pdf'`) to show the hero CV button.
- `project.href`: set a repo or demo URL to turn the project title into a link.
- The TOEIC entry deliberately has no thumbnail. The score report shows a date of birth
  and a registration ID, which should not go on a public page.
- Nothing on the page is invented. The hero role line is read from the first
  `experience` entry.

## Adding a locale

1. Add the code to `locales` in `astro.config.mjs` and to `languages` in `src/i18n/ui.ts`.
2. Add a matching key block to `ui` in `src/i18n/ui.ts`.
3. Create `src/pages/<code>/index.astro` rendering `HomePage`.
4. Add the locale to the `sitemap` config.

Missing keys fall back to English, so a partial translation still builds.

## Before deploying

- Set the real `site` URL in `astro.config.mjs` — canonical tags and the sitemap use it.
- `public/og.png` is the 1200×630 share image. Regenerate it if the name, headline or
  portrait changes.

## Testing narrow viewports

Headless Edge floors its layout viewport at ~477px and crops the screenshot to
`--window-size`, which looks exactly like a horizontal-overflow bug. To test a real phone
width, load the page in a fixed-width same-origin iframe and measure
`documentElement.scrollWidth` against `clientWidth` inside it.
