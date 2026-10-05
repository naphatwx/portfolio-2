// Renders the one-page CV (scripts/cv) to public/cv.pdf and public/cv-th.pdf.
// Content comes from src/data/site.ts, so the CV never drifts from the site.
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';
import * as data from '../src/data/site.ts';
import { renderCv } from './cv/template.mjs';

const OUT = { en: 'public/cv.pdf', th: 'public/cv-th.pdf' };
const css = await readFile(new URL('./cv/cv.css', import.meta.url), 'utf8');

// Uses the installed Google Chrome, so no Playwright browser download is needed.
const browser = await chromium.launch({ channel: 'chrome' });
let failed = false;
try {
  const page = await browser.newPage();
  for (const [lang, path] of Object.entries(OUT)) {
    await page.setContent(renderCv(lang, data, css), { waitUntil: 'networkidle' });
    // Each sheet only downloads the faces its text uses (unicode-range subsets).
    const faces = lang === 'th' ? ['400 10pt Anuphan', '500 10pt Inter'] : ['400 10pt Inter', '500 10pt Inter'];
    const problems = await page.evaluate(async (faces) => {
      await document.fonts.ready;
      const out = [];
      // Fonts come from Google Fonts; an offline build would silently ship fallbacks.
      for (const face of faces) {
        if (!document.fonts.check(face)) out.push(`font not loaded: ${face}`);
      }
      // The sheet is a fixed A4 box that clips, so overflow either way must fail loudly.
      const sheet = document.querySelector('.sheet');
      const over = sheet.scrollHeight - sheet.clientHeight;
      if (over > 0) out.push(`content overflows one A4 page by ${over}px`);
      const right = sheet.getBoundingClientRect().right - parseFloat(getComputedStyle(sheet).paddingRight);
      const wide = [...sheet.querySelectorAll('.body *, .contact *')].filter((el) => el.getBoundingClientRect().right > right + 0.5);
      if (wide.length) out.push(`text runs into the right margin: "${wide[0].textContent.trim().slice(0, 40)}"`);
      return out;
    }, faces);
    if (problems.length) {
      process.stderr.write(`${path}: ${problems.join('; ')}. Trim src/data/site.ts.\n`);
      failed = true;
      continue;
    }
    await page.pdf({ path, preferCSSPageSize: true, printBackground: true });
    process.stdout.write(`Wrote ${path}\n`);
  }
} finally {
  await browser.close();
}
process.exit(failed ? 1 : 0);
