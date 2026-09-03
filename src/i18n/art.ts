import type { ArtItem } from './artworks';
import { ARTWORKS_ES } from './artworks';
import { ART_EN, type ArtOverride } from './art.en';
import { ART_RU } from './art.ru';
import type { Lang } from './lang';
import { palomizeText } from './paloma';

function palomizeOptional(value: string | undefined): string | undefined {
  return value === undefined ? undefined : palomizeText(value);
}

function palomizeArtItem(art: ArtItem): ArtItem {
  return {
    ...art,
    title: palomizeText(art.title),
    subtitle: palomizeText(art.subtitle),
    levelBadge: palomizeOptional(art.levelBadge),
    defaultCaption: palomizeText(art.defaultCaption),
    buttonLeft: palomizeOptional(art.buttonLeft),
    buttonRight: palomizeOptional(art.buttonRight),
    tagBoyfriend: palomizeOptional(art.tagBoyfriend),
    tagGirlfriend: palomizeOptional(art.tagGirlfriend),
    tagPigeon: palomizeOptional(art.tagPigeon),
    description: palomizeText(art.description),
    presets: art.presets.map(palomizeText),
    dualButtonPresets: art.dualButtonPresets?.map((p) => ({
      left: palomizeText(p.left),
      right: palomizeText(p.right),
      caption: p.caption === undefined ? undefined : palomizeText(p.caption),
    })),
    trioPresets: art.trioPresets?.map((p) => ({
      boyfriend: palomizeText(p.boyfriend),
      girlfriend: palomizeText(p.girlfriend),
      pigeon: palomizeText(p.pigeon),
      caption: p.caption === undefined ? undefined : palomizeText(p.caption),
    })),
    collageDefault: palomizeOptional(art.collageDefault),
  };
}

const OVERRIDES: Record<Exclude<Lang, 'es' | 'paloma'>, Record<string, ArtOverride>> = {
  en: ART_EN,
  ru: ART_RU,
};

export function artworksForLang(lang: Lang): ArtItem[] {
  if (lang === 'es') return ARTWORKS_ES;
  if (lang === 'paloma') return ARTWORKS_ES.map(palomizeArtItem);
  const map = OVERRIDES[lang];
  return ARTWORKS_ES.map((art) => {
    const override = map[art.id];
    return override ? { ...art, ...override } : art;
  });
}
