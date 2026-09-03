/**
 * Deterministic "Paloma" (pigeon) translator.
 *
 * Follows the partially declassified grammar in README.paloma.md:
 * - `coo` is the basic unit; `cooo…` lengthens with the source word's gravity.
 * - `coooooo` is bread. Always bread.
 * - Repetition implies plurals/urgency.
 * - All-caps regulation reads as COO.
 * - Proper nouns, acronyms, numbers, routes and commands stay: code is universal.
 */

const KEEP_WORDS = new Set([
  'anna',
  'dahgoth',
  'киберстранник',
  'pichón',
  'pichon',
  'sidequest',
  'berlín',
  'berlin',
  'siberia',
  'сибирь',
  'linkedin',
  'wall',
  'street',
  'google',
  'claude',
  'studio',
  'vercel',
  'github',
  'maxsat',
  'vhs',
  'impact',
  'anime',
  'meme',
  'png',
  'prompt',
  'kу',
  'ку',
]);

const BREAD_WORDS = new Set(['pan', 'bread', 'хлеб', 'migas', 'migajas']);

const WORD_RE = /[\p{L}\p{N}'’\-]+/gu;
const LEADING_NON_WORD_RE = /^[^\p{L}\p{N}'’\-]*/u;
const TRAILING_NON_WORD_RE = /[^\p{L}\p{N}'’\-]*$/u;

function hasLetter(token: string): boolean {
  return /[\p{L}]/u.test(token);
}

function tokenCasing(token: string): 'upper' | 'lower' | 'mixed' {
  if (/^[\p{Lu}]+$/u.test(token)) return 'upper';
  if (/^[\p{Ll}]+$/u.test(token)) return 'lower';
  return 'mixed';
}

function cooForLength(letters: number): string {
  if (letters <= 2) return 'coo';
  if (letters <= 4) return 'cooo';
  if (letters <= 7) return 'coooo';
  if (letters <= 12) return 'coooooo';
  return 'cooooooo';
}

function palomizeToken(token: string): string {
  if (!hasLetter(token)) return token;
  if (/\p{N}/u.test(token)) return token;

  const lower = token.toLowerCase();
  if (KEEP_WORDS.has(lower)) return token;

  const letters = token.match(/\p{L}/gu)?.join('') ?? '';
  if (!letters) return token;

  const casing = tokenCasing(letters);
  if (casing === 'upper' && letters.length <= 4) return token;
  if (casing === 'upper' && letters.length > 4) return 'COO';

  if (BREAD_WORDS.has(lower)) return 'coooooo';

  const core = cooForLength(letters.length);
  if (casing === 'upper') return core.toUpperCase();
  return core;
}

function sentenceStartAfter(text: string, index: number): boolean {
  for (let i = index - 1; i >= 0; i--) {
    const ch = text[i];
    if (ch === '\n' || ch === '·' || ch === '—' || ch === '–' || ch === ':' || ch === '…') {
      return true;
    }
    if (/[\p{L}\p{N}]/u.test(ch)) return false;
  }
  return true;
}

/**
 * Translates arbitrary Spanish/English/Russian text into pigeon.
 * Placeholders like {n} or {girlfriend} are preserved untouched.
 */
export function palomizeText(text: string): string {
  if (!text) return text;
  return text.split(/(\{\w+\})/g).map((part) => {
    if (/^\{\w+\}$/.test(part)) return part;
    return palomizeCore(part);
  }).join('');
}

function palomizeCore(text: string): string {
  let out = '';
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(WORD_RE.source, 'gu');
  while ((match = re.exec(text))) {
    const token = match[0];
    out += text.slice(last, match.index);
    const leading = token.match(LEADING_NON_WORD_RE)?.[0] ?? '';
    const trailing = token.match(TRAILING_NON_WORD_RE)?.[0] ?? '';
    const core = token.slice(leading.length, token.length - trailing.length || token.length);
    const replacement = palomizeToken(core);
    const isStart = sentenceStartAfter(text, match.index);
    const finalReplacement = isStart
      ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
      : replacement;
    out += leading + finalReplacement + trailing;
    last = re.lastIndex;
  }
  out += text.slice(last);
  return out;
}

export function palomizeTexts(texts: (string | undefined)[]): string[] {
  return texts.map((t) => (t === undefined ? '' : palomizeText(t)));
}

/** Maps an object of string values to pigeon strings, preserving keys. */
export function palomizeRecord<T extends object>(record: T): T {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(record)) {
    out[key] = palomizeText(String(value));
  }
  return out as T;
}