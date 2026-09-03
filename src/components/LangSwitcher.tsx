import { LANG_LABELS, LANGS } from '../i18n/lang';
import { useI18n } from '../i18n/context';
import { Languages } from 'lucide-react';

export default function LangSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div
      className="flex items-center gap-1 rounded-xl border border-stone-800 bg-stone-950/80 p-1"
      role="group"
      aria-label="Language / Idioma / Язык"
    >
      <Languages className="w-3.5 h-3.5 text-stone-500 ml-1 hidden sm:block" />
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            title={LANG_LABELS[code]}
            className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all ${
              active
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {code === 'paloma' ? 'Coo' : code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
