import { ui, type Lang, type UIKey } from './ui';

export type { Lang };

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}

/** Turn a language-neutral path like "/platform/atlas/" into the URL for a language. */
export function localize(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  return path === '/' ? '/fr/' : `/fr${path}`;
}

/** Strip the language prefix from a URL path. */
export function basePath(pathname: string): string {
  const stripped = pathname.replace(/^\/fr(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

export function langFromPath(pathname: string): Lang {
  return /^\/fr(\/|$)/.test(pathname) ? 'fr' : 'en';
}
