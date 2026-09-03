import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { artworksForLang } from './art';
import type { ArtItem } from './artworks';
import { detectLang, htmlLangOf, persistLang, type Lang } from './lang';
import { fmt, UI, type UiStrings } from './ui';

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof UiStrings, vars?: Record<string, string | number>) => string;
  ui: UiStrings;
  artworks: ArtItem[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    persistLang(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLangOf(lang);
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => {
    const ui = UI[lang];
    return {
      lang,
      setLang,
      t: (key, vars) => fmt(ui[key], vars ?? {}),
      ui,
      artworks: artworksForLang(lang),
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside an <I18nProvider>');
  }
  return ctx;
}
