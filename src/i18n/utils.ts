// The only file that knows how translation works. Swapping to i18next
// means rewriting useTranslations() here and nothing else.
import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

export function isLang(value: string): value is Lang {
  return Object.hasOwn(languages, value);
}

/** Reads the locale out of the pathname. Falls back to the default. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return segment && isLang(segment) ? segment : defaultLang;
}

/** t('hero.sub', { focus: 'x' }) — missing keys fall back to English, then the key. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    const raw = ui[lang][key] ?? ui[defaultLang][key] ?? key;
    if (!vars) return raw;
    return raw.replace(/\{(\w+)\}/g, (match, name) =>
      name in vars ? String(vars[name]) : match,
    );
  };
}

/** Prefixes a path with the locale. Default locale stays unprefixed. */
export function localizePath(path: string, lang: Lang): string {
  const clean = `/${path.replace(/^\/+/, '')}`.replace(/\/$/, '') || '/';
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Same page in every locale — for the language switcher and hreflang tags. */
export function getAlternates(url: URL): { lang: Lang; path: string }[] {
  const current = getLangFromUrl(url);
  const bare =
    current === defaultLang
      ? url.pathname
      : url.pathname.replace(new RegExp(`^/${current}`), '') || '/';
  return (Object.keys(languages) as Lang[]).map((lang) => ({
    lang,
    path: localizePath(bare, lang),
  }));
}
