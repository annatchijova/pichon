export type Lang = 'es' | 'en' | 'ru' | 'paloma';

export const LANGS: readonly Lang[] = ['es', 'en', 'ru', 'paloma'];

export const LANG_LABELS: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  ru: 'Русский',
  paloma: 'Paloma',
};

const STORAGE_KEY = 'pichon-lang';

export function isLang(value: string | null): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

export function htmlLangOf(lang: Lang): string {
  return lang === 'paloma' ? 'es' : lang;
}

function detectFromNavigator(): Lang {
  if (typeof navigator === 'undefined') return 'es';
  const raw = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
  const nav = raw.toLowerCase();
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('en')) return 'en';
  if (nav.startsWith('es')) return 'es';
  return 'es';
}

export function detectLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  try {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (isLang(param)) return param;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* storage unavailable — fall through to browser language */
  }
  return detectFromNavigator();
}

export function persistLang(lang: Lang): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore storage failures */
  }
  try {
    const url = new URL(window.location.href);
    if (lang === 'es') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState(null, '', url.toString());
  } catch {
    /* ignore history failures */
  }
  document.documentElement.lang = htmlLangOf(lang);
}
