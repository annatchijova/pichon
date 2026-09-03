import type { Lang } from './lang';
import { palomizeRecord } from './paloma';

export interface UiStrings {
  metaTitle: string;
  metaDescription: string;

  h1Title: string;
  worksCount: string;
  headerSubtitle: string;
  tabGallery: string;
  tabExpanding: string;

  navPlay: string;
  navUniverse: string;
  navCert: string;
  navRepo: string;
  navDeck: string;
  navDossier: string;
  footerPlay: string;

  gallerySelect: string;
  imagesAvailable: string;
  newBadge: string;
  formatLabel: string;
  vhsLabel: string;
  vhsOn: string;
  vhsOff: string;
  expandTooltip: string;

  copyPrompt: string;
  copiedLabel: string;
  exportingLabel: string;
  downloadPng: string;
  downloadCollage: string;

  thoughtPanelTitle: string;
  thoughtBubbleMode: string;
  standardMode: string;
  thoughtField: string;
  thoughtPlaceholder: string;
  thoughtSuggestions: string;
  badgeThinking: string;

  boyfriendPanelTitle: string;
  trioTagsMode: string;
  situationLabel: string;
  situationPlaceholder: string;
  girlfriendSideLabel: string;
  boyfriendSideLabel: string;
  pigeonSideLabel: string;
  templateSuggestions: string;
  ignoringTemplate: string;
  badgeGirlfriend: string;
  badgeBoyfriend: string;
  badgePigeon: string;

  twoButtonsPanelTitle: string;
  tagsMode: string;
  leftButtonLabel: string;
  rightButtonLabel: string;
  dilemmaSuggestions: string;
  wornNewTemplate: string;
  badgeWorn: string;
  badgeNew: string;

  fallbackHabitual: string;
  fallbackSuspicious: string;
  fallbackGirlfriend: string;
  fallbackBoyfriend: string;
  fallbackPigeon: string;

  subtitleEditorTitle: string;
  visibleLabel: string;
  hiddenLabel: string;
  subtitlePlaceholder: string;
  fontStyleLabel: string;
  styleAnime: string;
  styleImpact: string;
  styleWhite: string;
  positionLabel: string;
  posTop: string;
  posCenter: string;
  posBottom: string;
  sizeLabel: string;
  quickPhrases: string;

  originalPrompt: string;

  expandingTitle: string;
  expandingSubtitle: string;
  layoutVertical: string;
  layoutGrid: string;
  levelLabel: string;

  footerTag1: string;
  footerTag2: string;
  footerTag3: string;
  footerRuCourse: string;
  footerOpNote: string;
}

const ES: UiStrings = {
  metaTitle: 'Is This a Spy? · PICHÓN',
  metaDescription:
    'Colección completa de 26 ilustraciones de memes de ciberseguridad y espionaje: Is this a spy, Muro de Conspiración, Dos Botones, Cara de Sorpresa, Novio Distraído, No saben en la fiesta, Cuervo en el Podio, Centro de Operaciones (SOC), Cucaracha Táctica, Datacenter Móvil, Paloma de la Guerra Fría, Expediente Desclasificado, Retrato Corporativo, Hormiga con Cable Ethernet, Avispa Firewall, Endpoint Cordyceps v2, Mordido en Siberia, Silueta del Doble Agente, Cartel Constructivista, Gráfico de Sospecha en Pizarra, La Mochila Invisible, Escalado a la IA y la saga Expanding Brain (4 paneles). Editor y descarga de PNG 1:1 sin marca de agua.',

  h1Title: 'Saga de Memes: Palomas & Conspiración',
  worksCount: '{n} Obras',
  headerSubtitle:
    'Personalizá el texto y el estilo de cada meme y descargalo — 1:1, sin marcas de agua. ¡Hacé el tuyo!',
  tabGallery: 'Galería de Memes',
  tabExpanding: 'Expanding Brain (4 Paneles)',

  navPlay: 'Jugá: ¿Espía o no espía?',
  navUniverse: 'Archivo cinematográfico',
  navCert: 'Certificado editable',
  navRepo: 'Repo',
  navDeck: 'Presentación',
  navDossier: 'Expediente original',
  footerPlay: '¿Espía o no espía?',

  gallerySelect: 'Seleccioná una ilustración para personalizar:',
  imagesAvailable: '{n} imágenes disponibles',
  newBadge: 'NUEVO',
  formatLabel: 'Formato 1:1 • Alta Definición Centrada',
  vhsLabel: 'Filtro VHS',
  vhsOn: 'Activado',
  vhsOff: 'Desactivado',
  expandTooltip: 'Vista ampliada',

  copyPrompt: 'Copiar Prompt',
  copiedLabel: 'Copiado',
  exportingLabel: 'Exportando...',
  downloadPng: 'Descargar PNG Centrado',
  downloadCollage: 'Descargar Collage PNG',

  thoughtPanelTitle: 'Meme "No saben..." (Fiesta)',
  thoughtBubbleMode: 'Nube de Pensamiento',
  standardMode: 'Subtítulo',
  thoughtField: 'Pensamiento de la Cucaracha:',
  thoughtPlaceholder: 'Ej: No saben que puedo sobrevivir a una explosión nuclear...',
  thoughtSuggestions: 'Pensamientos secretos sugeridos:',
  badgeThinking: 'Pensamiento de la Esquina',

  boyfriendPanelTitle: 'Meme Novio Distraído',
  trioTagsMode: '3 Etiquetas',
  situationLabel: 'Situación / Título',
  situationPlaceholder: 'Ej: Caminando por la ciudad...',
  girlfriendSideLabel: '💔 Novia Ofendida (Izquierda)',
  boyfriendSideLabel: '👀 Novio Distraído (Centro)',
  pigeonSideLabel: '🎒 Paloma con Mochila (Abajo Derecha)',
  templateSuggestions: 'Plantillas sugeridas:',
  ignoringTemplate: 'Ignorando: {girlfriend}',
  badgeGirlfriend: 'Novia Ofendida',
  badgeBoyfriend: 'Novio Distraído',
  badgePigeon: 'Paloma con Mochila',

  twoButtonsPanelTitle: 'Modo Meme Dos Botones',
  tagsMode: 'Etiquetas',
  leftButtonLabel: '🔴 Botón Izquierdo (Gastado)',
  rightButtonLabel: '🔴 Botón Derecho (Nuevo)',
  dilemmaSuggestions: 'Dilemas sugeridos:',
  wornNewTemplate: 'Gastado: {left} | Nuevo: {right}',
  badgeWorn: 'Botón Gastado (99%)',
  badgeNew: 'Botón Nuevo (1%)',

  fallbackHabitual: 'Opción habitual',
  fallbackSuspicious: 'Opción sospechosa',
  fallbackGirlfriend: 'Novia',
  fallbackBoyfriend: 'Novio',
  fallbackPigeon: 'Paloma con mochila',

  subtitleEditorTitle: 'Editor de Subtítulo Centrado',
  visibleLabel: 'Visible',
  hiddenLabel: 'Oculto',
  subtitlePlaceholder: 'Escribe el texto del meme...',
  fontStyleLabel: 'Estilo de Letra',
  styleAnime: 'Anime Amarillo',
  styleImpact: 'Impact Clásico',
  styleWhite: 'Blanco Fino',
  positionLabel: 'Posición',
  posTop: 'Arriba',
  posCenter: 'Centro',
  posBottom: 'Abajo',
  sizeLabel: 'Tamaño',
  quickPhrases: 'Frases rápidas:',

  originalPrompt: 'Prompt Original',

  expandingTitle: 'Expanding Brain Saga: Niveles 1 al 4 de la Paloma',
  expandingSubtitle:
    'La secuencia ascendente completa de conspiración aviar en un solo collage descargable',
  layoutVertical: 'Vertical Meme',
  layoutGrid: 'Cuadrícula 2x2',
  levelLabel: 'NIVEL',

  footerTag1: 'Saga de Memes & Conspiración',
  footerTag2: 'Generación de Imágenes Cuadradas 1:1',
  footerTag3: 'Textos con Auto-Centrado Inteligente',
  footerRuCourse: '🇷🇺 Версия на русском',
  footerOpNote: 'traducción no disponible por motivos operativos',
};

const EN: UiStrings = {
  metaTitle: 'Is This a Spy? · PICHÓN',
  metaDescription:
    'The full set of 26 cybersecurity & espionage meme illustrations: Is this a spy, Conspiracy Wall, Two Buttons, Shocked Face, Distracted Boyfriend, They don\'t know at the party, Crow at the Podium, Security Operations Center (SOC), Tactical Cockroach, Mobile Datacenter, Cold War Pigeon, Declassified File, Corporate Headshot, Ant with an Ethernet Cable, Wasp Firewall, Cordyceps v2 Endpoint, Bitten in Siberia, Double-Agent Silhouette, Constructivist Poster, Whiteboard Suspicion Chart, The Invisible Backpack, Escalated to the AI and the Expanding Brain saga (4 panels). 1:1 PNG editor and download with no watermark.',

  h1Title: 'Meme Saga: Pigeons & Conspiracy',
  worksCount: '{n} Works',
  headerSubtitle:
    'Customize the text and style of every meme and download it — 1:1, no watermarks. Make your own!',
  tabGallery: 'Meme Gallery',
  tabExpanding: 'Expanding Brain (4 Panels)',

  navPlay: 'Play: Spy or not spy?',
  navUniverse: 'Film archive',
  navCert: 'Editable certificate',
  navRepo: 'Repo',
  navDeck: 'Presentation',
  navDossier: 'Original case file',
  footerPlay: 'Spy or not spy?',

  gallerySelect: 'Select an illustration to customize:',
  imagesAvailable: '{n} images available',
  newBadge: 'NEW',
  formatLabel: 'Format 1:1 • Centered HD',
  vhsLabel: 'VHS Filter',
  vhsOn: 'On',
  vhsOff: 'Off',
  expandTooltip: 'Expanded view',

  copyPrompt: 'Copy Prompt',
  copiedLabel: 'Copied',
  exportingLabel: 'Exporting...',
  downloadPng: 'Download Centered PNG',
  downloadCollage: 'Download Collage PNG',

  thoughtPanelTitle: '"They don\'t know..." meme (Party)',
  thoughtBubbleMode: 'Thought Bubble',
  standardMode: 'Caption',
  thoughtField: 'Cockroach\'s thought:',
  thoughtPlaceholder: 'e.g. They don\'t know I can survive a nuclear explosion...',
  thoughtSuggestions: 'Suggested secret thoughts:',
  badgeThinking: 'Thought from the Corner',

  boyfriendPanelTitle: 'Distracted Boyfriend Meme',
  trioTagsMode: '3 Tags',
  situationLabel: 'Situation / Title',
  situationPlaceholder: 'e.g. Walking through the city...',
  girlfriendSideLabel: '💔 Offended Girlfriend (Left)',
  boyfriendSideLabel: '👀 Distracted Boyfriend (Center)',
  pigeonSideLabel: '🎒 Pigeon with Backpack (Bottom Right)',
  templateSuggestions: 'Suggested templates:',
  ignoringTemplate: 'Ignoring: {girlfriend}',
  badgeGirlfriend: 'Offended Girlfriend',
  badgeBoyfriend: 'Distracted Boyfriend',
  badgePigeon: 'Pigeon with Backpack',

  twoButtonsPanelTitle: 'Two Buttons Meme Mode',
  tagsMode: 'Tags',
  leftButtonLabel: '🔴 Left Button (Worn)',
  rightButtonLabel: '🔴 Right Button (New)',
  dilemmaSuggestions: 'Suggested dilemmas:',
  wornNewTemplate: 'Worn: {left} | New: {right}',
  badgeWorn: 'Worn Button (99%)',
  badgeNew: 'New Button (1%)',

  fallbackHabitual: 'Usual choice',
  fallbackSuspicious: 'Suspicious choice',
  fallbackGirlfriend: 'Girlfriend',
  fallbackBoyfriend: 'Boyfriend',
  fallbackPigeon: 'Pigeon with backpack',

  subtitleEditorTitle: 'Centered Caption Editor',
  visibleLabel: 'Visible',
  hiddenLabel: 'Hidden',
  subtitlePlaceholder: 'Type the meme text...',
  fontStyleLabel: 'Font Style',
  styleAnime: 'Anime Yellow',
  styleImpact: 'Classic Impact',
  styleWhite: 'Thin White',
  positionLabel: 'Position',
  posTop: 'Top',
  posCenter: 'Center',
  posBottom: 'Bottom',
  sizeLabel: 'Size',
  quickPhrases: 'Quick phrases:',

  originalPrompt: 'Original Prompt',

  expandingTitle: 'Expanding Brain Saga: Pigeon Levels 1 to 4',
  expandingSubtitle: 'The full ascending avian-conspiracy sequence in one downloadable collage',
  layoutVertical: 'Vertical Meme',
  layoutGrid: '2x2 Grid',
  levelLabel: 'LEVEL',

  footerTag1: 'Meme Saga & Conspiracy',
  footerTag2: '1:1 Square Image Generation',
  footerTag3: 'Smart Auto-Centered Text',
  footerRuCourse: '🇷🇺 Версия на русском',
  footerOpNote: 'translation unavailable for operational reasons',
};

const RU: UiStrings = {
  metaTitle: 'Is This a Spy? · PICHÓN',
  metaDescription:
    'Полная коллекция из 26 мем-иллюстраций о кибербезопасности и шпионаже: Is this a spy, Стена заговора, Две кнопки, Удивлённое лицо, Рассеянный парень, «Они не знают» на вечеринке, Ворон на трибуне, Центр управления (SOC), Тактический таракан, Мобильный дата-центр, Голубь холодной войны, Рассекреченное дело, Корпоративный портрет, Муравей с Ethernet-кабелем, Оса-файрвол, Endpoint Cordyceps v2, Укушен в Сибири, Силуэт двойного агента, Конструктивистский плакат, График подозрений на доске, Невидимый рюкзак, Передано ИИ и сага Expanding Brain (4 панели). Редактор и скачивание PNG 1:1 без водяных знаков.',

  h1Title: 'Сага мемов: голуби и заговор',
  worksCount: '{n} работ',
  headerSubtitle:
    'Меняйте текст и стиль любого мема и скачивайте его — 1:1, без водяных знаков. Сделайте свой!',
  tabGallery: 'Галерея мемов',
  tabExpanding: 'Expanding Brain (4 панели)',

  navPlay: 'Играть: шпион или не шпион?',
  navUniverse: 'Киноархив',
  navCert: 'Свидетельство (редактируемое)',
  navRepo: 'Репозиторий',
  navDeck: 'Презентация',
  navDossier: 'Первоначальное дело',
  footerPlay: 'Шпион или не шпион?',

  gallerySelect: 'Выберите иллюстрацию для редактирования:',
  imagesAvailable: 'доступно изображений: {n}',
  newBadge: 'НОВОЕ',
  formatLabel: 'Формат 1:1 • Центрированное HD',
  vhsLabel: 'Фильтр VHS',
  vhsOn: 'Вкл',
  vhsOff: 'Выкл',
  expandTooltip: 'Увеличенный вид',

  copyPrompt: 'Копировать промпт',
  copiedLabel: 'Скопировано',
  exportingLabel: 'Экспорт...',
  downloadPng: 'Скачать PNG (по центру)',
  downloadCollage: 'Скачать коллаж PNG',

  thoughtPanelTitle: 'Мем «Они не знают...» (Вечеринка)',
  thoughtBubbleMode: 'Облако мыслей',
  standardMode: 'Подпись',
  thoughtField: 'Мысль таракана:',
  thoughtPlaceholder: 'Напр.: Они не знают, что я переживу ядерный взрыв...',
  thoughtSuggestions: 'Секретные мысли для вдохновения:',
  badgeThinking: 'Мысль из угла',

  boyfriendPanelTitle: 'Мем «Рассеянный парень»',
  trioTagsMode: '3 подписи',
  situationLabel: 'Ситуация / Заголовок',
  situationPlaceholder: 'Напр.: Идёшь по городу...',
  girlfriendSideLabel: '💔 Обиженная девушка (слева)',
  boyfriendSideLabel: '👀 Рассеянный парень (в центре)',
  pigeonSideLabel: '🎒 Голубь с рюкзаком (справа внизу)',
  templateSuggestions: 'Готовые шаблоны:',
  ignoringTemplate: 'Игнорирует: {girlfriend}',
  badgeGirlfriend: 'Обиженная девушка',
  badgeBoyfriend: 'Рассеянный парень',
  badgePigeon: 'Голубь с рюкзаком',

  twoButtonsPanelTitle: 'Режим мема «Две кнопки»',
  tagsMode: 'Подписи',
  leftButtonLabel: '🔴 Левая кнопка (стёртая)',
  rightButtonLabel: '🔴 Правая кнопка (новая)',
  dilemmaSuggestions: 'Дилеммы для вдохновения:',
  wornNewTemplate: 'Стёртая: {left} | Новая: {right}',
  badgeWorn: 'Стёртая кнопка (99%)',
  badgeNew: 'Новая кнопка (1%)',

  fallbackHabitual: 'Привычный вариант',
  fallbackSuspicious: 'Подозрительный вариант',
  fallbackGirlfriend: 'Девушка',
  fallbackBoyfriend: 'Парень',
  fallbackPigeon: 'Голубь с рюкзаком',

  subtitleEditorTitle: 'Редактор центрированной подписи',
  visibleLabel: 'Видно',
  hiddenLabel: 'Скрыто',
  subtitlePlaceholder: 'Введите текст мема...',
  fontStyleLabel: 'Стиль шрифта',
  styleAnime: 'Аниме-жёлтый',
  styleImpact: 'Классический Impact',
  styleWhite: 'Тонкий белый',
  positionLabel: 'Положение',
  posTop: 'Сверху',
  posCenter: 'По центру',
  posBottom: 'Снизу',
  sizeLabel: 'Размер',
  quickPhrases: 'Быстрые фразы:',

  originalPrompt: 'Оригинальный промпт',

  expandingTitle: 'Сага Expanding Brain: уровни голубя с 1 по 4',
  expandingSubtitle:
    'Полная восходящая последовательность птичьего заговора в одном скачиваемом коллаже',
  layoutVertical: 'Вертикальный мем',
  layoutGrid: 'Сетка 2x2',
  levelLabel: 'УРОВЕНЬ',

  footerTag1: 'Сага мемов и заговор',
  footerTag2: 'Генерация квадратных изображений 1:1',
  footerTag3: 'Умное автоцентрирование текста',
  footerRuCourse: '🇷🇺 Версия на русском',
  footerOpNote: 'перевод обнаружен в личном деле Дагота; он всё это время говорил по-русски',
};

export const UI: Record<Lang, UiStrings> = {
  es: ES,
  en: EN,
  ru: RU,
  paloma: palomizeRecord(ES),
};

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (raw, name: string) =>
    name in vars ? String(vars[name]) : raw
  );
}
