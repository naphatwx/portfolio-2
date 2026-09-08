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

Achromatic on purpose — there is no accent hue. Emphasis comes from type size, weight,
hairline rules and underlines. Adding a brand colour breaks the style.

- Palette: light `#FFFFFF` / `#222222` / `#6E6E73` / `#E6E6E6`, dark inverted
- Type: General Sans (Latin, Fontshare) + Anuphan (Thai, Google Fonts)
- `.display` — the oversized hero headline, with a separate Thai size and tracking
- `.label` — small tracked caps; `.gutter-text` — rotated vertical microtext
- Light is the default state; `.dark` on `<html>` is the opt-in
- The OS `prefers-color-scheme` is deliberately ignored — light is the design, and only
  an explicit toggle choice (stored in `localStorage`) switches to dark

## Layout

```
src/
  data/site.ts               All content — edit here, not in components
  i18n/ui.ts                 UI strings, both locales
  i18n/utils.ts              t(), locale detection, path helpers
  assets/portrait.png        Hero portrait, pre-greyscaled
  assets/certificates/       Certificate thumbnails, matched by slug
  components/Hero.astro      Headline, gutter text, stats, portrait
  components/HomePage.astro  Shared page body for both locales
  layouts/Base.astro         head, theme boot, scroll reveal
  pages/index.astro          English
  pages/th/index.astro       Thai
raw-data.md                  Source CV content (not published)
```

## Content notes

- `src/data/site.ts` is the single source of content. Certificate entries are matched to
  images in `src/assets/certificates/` by `slug`; an entry with no matching image renders
  a type-only tile using its `short` wordmark.
- The TOEIC entry deliberately has no thumbnail. The score report shows a date of birth
  and a registration ID, which should not go on a public page.
- The phone number from `raw-data.md` is deliberately not published. Scrapers harvest
  them off public pages. Add it to `person` in `src/data/site.ts` if you want it shown.
- Hero stats are years of experience and certificate count — both derived from real data.
  Nothing on the page is invented.

## Adding a locale

1. Add the code to `locales` in `astro.config.mjs` and to `languages` in `src/i18n/ui.ts`.
2. Add a matching key block to `ui` in `src/i18n/ui.ts`.
3. Create `src/pages/<code>/index.astro` rendering `HomePage`.
4. Add the locale to the `sitemap` config.

Missing keys fall back to English, so a partial translation still builds.

## Before deploying

- Set the real `site` URL in `astro.config.mjs` — canonical tags and the sitemap use it.
- Fill in the LinkedIn URL in `person` (`src/data/site.ts`); it is currently `#`.
- Check the surname spelling. `raw-data.md` says *Wattanarattnakul*; the certificate
  images read *Wattanarattanakul*. The site uses the former.
- Replace `public/favicon.svg` if you want something other than the default mark.

## Testing narrow viewports

Headless Edge floors its layout viewport at ~477px and crops the screenshot to
`--window-size`, which looks exactly like a horizontal-overflow bug. To test a real phone
width, load the page in a fixed-width same-origin iframe and measure
`documentElement.scrollWidth` against `clientWidth` inside it.
