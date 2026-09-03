/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Copy,
  Check,
  Type,
  Maximize2,
  Minimize2,
  Sparkles,
  Palette,
  Eye,
  Sliders,
  Tv,
  Grid,
  Columns,
  Layers,
  Brain,
  ToggleLeft,
  Users,
  Tag,
  MessageCircle,
} from 'lucide-react';
import { useI18n } from './i18n/context';
import type { ArtItem } from './i18n/artworks';
import LangSwitcher from './components/LangSwitcher';

/**
 * Función robusta para envolver texto en múltiples líneas centradas sin desbordamiento
 */
function wrapCenteredText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.length > 0 ? lines : [text];
}

export default function App() {
  const { t, ui, artworks, lang, setLang } = useI18n();
  const [activeTab, setActiveTab] = useState<'individual' | 'expanding-collage'>('individual');
  const [selectedArtId, setSelectedArtId] = useState<string>('escalated-to-ai');

  // Individual Art State
  const currentArt = artworks.find((a) => a.id === selectedArtId) || artworks[0];
  const expandingPanels = artworks.filter((a) => a.category === 'expanding-panel');
  const [subtitleText, setSubtitleText] = useState(currentArt.defaultCaption);
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [subtitleStyle, setSubtitleStyle] = useState<'retro-yellow' | 'clean-white' | 'meme-impact'>('retro-yellow');
  const [showVhsEffect, setShowVhsEffect] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [subtitleSize, setSubtitleSize] = useState<number>(24);
  const [subtitlePos, setSubtitlePos] = useState<'bottom' | 'top' | 'center'>('bottom');

  // Two Buttons Specific State
  const [buttonLeftText, setButtonLeftText] = useState(currentArt.buttonLeft ?? '');
  const [buttonRightText, setButtonRightText] = useState(currentArt.buttonRight ?? '');
  const [buttonOverlayMode, setButtonOverlayMode] = useState<'dual-tags' | 'standard'>('dual-tags');

  // Distracted Boyfriend Specific State
  const [tagBoyfriendText, setTagBoyfriendText] = useState(currentArt.tagBoyfriend ?? '');
  const [tagGirlfriendText, setTagGirlfriendText] = useState(currentArt.tagGirlfriend ?? '');
  const [tagPigeonText, setTagPigeonText] = useState(currentArt.tagPigeon ?? '');
  const [boyfriendOverlayMode, setBoyfriendOverlayMode] = useState<'trio-tags' | 'standard'>('trio-tags');

  // Thought Meme ("They Don't Know") Specific State
  const [thoughtOverlayMode, setThoughtOverlayMode] = useState<'thought-bubble' | 'standard'>('thought-bubble');

  // Expanding Brain Collage State
  const [collageCaptions, setCollageCaptions] = useState<string[]>(() =>
    expandingPanels.map((p) => p.collageDefault ?? p.defaultCaption)
  );
  const [collageLayout, setCollageLayout] = useState<'vertical' | 'grid'>('vertical');
  const [showCollageCaptions, setShowCollageCaptions] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Keep document metadata in sync with the active language.
  useEffect(() => {
    document.title = ui.metaTitle;
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (el) el.setAttribute('content', content);
    };
    setMeta('name', 'description', ui.metaDescription);
    setMeta('property', 'og:title', ui.metaTitle);
    setMeta('property', 'og:description', ui.metaDescription);
  }, [ui]);

  // When the language changes, reset the editable texts to the localized defaults.
  useEffect(() => {
    const art = artworks.find((a) => a.id === selectedArtId) || artworks[0];
    setSubtitleText(art.defaultCaption);
    if (art.buttonLeft) setButtonLeftText(art.buttonLeft);
    if (art.buttonRight) setButtonRightText(art.buttonRight);
    if (art.tagBoyfriend) setTagBoyfriendText(art.tagBoyfriend);
    if (art.tagGirlfriend) setTagGirlfriendText(art.tagGirlfriend);
    if (art.tagPigeon) setTagPigeonText(art.tagPigeon);
    setCollageCaptions(
      artworks.filter((a) => a.category === 'expanding-panel').map((p) => p.collageDefault ?? p.defaultCaption)
    );
  }, [lang]);

  const handleSelectArt = (art: ArtItem) => {
    setSelectedArtId(art.id);
    setSubtitleText(art.defaultCaption);
    if (art.buttonLeft && art.buttonRight) {
      setButtonLeftText(art.buttonLeft);
      setButtonRightText(art.buttonRight);
    }
    if (art.tagBoyfriend && art.tagGirlfriend && art.tagPigeon) {
      setTagBoyfriendText(art.tagBoyfriend);
      setTagGirlfriendText(art.tagGirlfriend);
      setTagPigeonText(art.tagPigeon);
    }
  };

  const handleCopyPrompt = (textToCopy?: string) => {
    navigator.clipboard.writeText(textToCopy || currentArt.prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownloadSingle = async () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = currentArt.image;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      canvas.width = img.naturalWidth || 1024;
      canvas.height = img.naturalHeight || 1024;

      // Dibujar imagen base
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Efecto VHS opcional
      if (showVhsEffect) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        for (let i = 0; i < canvas.height; i += 4) {
          ctx.fillRect(0, i, canvas.width, 2);
        }
      }

      const scaleFactor = canvas.width / 600;

      // 1. MODO ESPECIAL: Cucaracha en la Fiesta ("They Don't Know") - Burbuja de Pensamiento
      if (currentArt.id === 'they-dont-know-cockroach' && thoughtOverlayMode === 'thought-bubble') {
        if (subtitleText.trim()) {
          const fontSize = Math.round(18 * scaleFactor);
          ctx.font = `italic bold ${fontSize}px system-ui, -apple-system, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const maxBoxWidth = canvas.width * 0.55;
          const lines = wrapCenteredText(ctx, subtitleText, maxBoxWidth - 30 * scaleFactor);
          const lineHeight = fontSize * 1.35;
          const paddingX = 22 * scaleFactor;
          const paddingY = 16 * scaleFactor;

          let longestLineWidth = 0;
          lines.forEach((l) => {
            const w = ctx.measureText(l).width;
            if (w > longestLineWidth) longestLineWidth = w;
          });

          const boxWidth = Math.min(canvas.width * 0.65, longestLineWidth + paddingX * 2);
          const boxHeight = lines.length * lineHeight + paddingY * 2 + 20 * scaleFactor;
          // Posición en la esquina superior derecha o izquierda (donde destaca el pensamiento)
          const boxX = 35 * scaleFactor;
          const boxY = 40 * scaleFactor;

          // Sombra suave
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 16 * scaleFactor;

          // Fondo de la nube de pensamiento
          ctx.fillStyle = 'rgba(15, 12, 10, 0.94)';
          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 16 * scaleFactor);
          ctx.fill();

          // Reset sombra
          ctx.shadowBlur = 0;

          // Borde ámbar brillante
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2.5 * scaleFactor;
          ctx.stroke();

          // Insignia superior
          ctx.font = `bold ${Math.round(10 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = '#fbbf24';
          ctx.textAlign = 'left';
          ctx.fillText(`💭 ${t('badgeThinking').toUpperCase()}`, boxX + 16 * scaleFactor, boxY + 16 * scaleFactor);

          // Texto de pensamiento
          ctx.font = `italic bold ${fontSize}px system-ui, sans-serif`;
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';

          const textCenterY = boxY + 28 * scaleFactor + (boxHeight - 28 * scaleFactor) / 2;
          const totalTextHeight = (lines.length - 1) * lineHeight;

          lines.forEach((line, idx) => {
            const y = textCenterY - totalTextHeight / 2 + idx * lineHeight;
            ctx.fillText(line, boxX + boxWidth / 2, y);
          });
        }

      // 2. MODO ESPECIAL: Novio Distraído (3 Etiquetas)
      } else if (currentArt.id === 'distracted-boyfriend-pigeon' && boyfriendOverlayMode === 'trio-tags') {
        if (subtitleText.trim()) {
          const fontSize = Math.round(20 * scaleFactor);
          ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const maxTitleWidth = canvas.width * 0.85;
          const lines = wrapCenteredText(ctx, subtitleText, maxTitleWidth);
          const lineHeight = fontSize * 1.35;
          const paddingX = 20 * scaleFactor;
          const paddingY = 12 * scaleFactor;

          let longestLineWidth = 0;
          lines.forEach((l) => {
            const w = ctx.measureText(l).width;
            if (w > longestLineWidth) longestLineWidth = w;
          });

          const bannerWidth = Math.min(canvas.width * 0.9, longestLineWidth + paddingX * 2);
          const bannerHeight = lines.length * lineHeight + paddingY * 2;
          const bannerX = (canvas.width - bannerWidth) / 2;
          const bannerY = 25 * scaleFactor;

          ctx.fillStyle = 'rgba(15, 12, 10, 0.88)';
          ctx.beginPath();
          ctx.roundRect(bannerX, bannerY, bannerWidth, bannerHeight, 10 * scaleFactor);
          ctx.fill();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2 * scaleFactor;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          lines.forEach((line, idx) => {
            const y = bannerY + paddingY + (idx + 0.5) * lineHeight;
            ctx.fillText(line, canvas.width / 2, y);
          });
        }

        const drawTagPill = (
          text: string,
          centerX: number,
          centerY: number,
          accentColor: string,
          badgeText: string
        ) => {
          const cardWidth = 190 * scaleFactor;
          const paddingX = 14 * scaleFactor;
          const paddingY = 10 * scaleFactor;
          const maxTextWidth = cardWidth - paddingX * 2;

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          const lines = wrapCenteredText(ctx, text, maxTextWidth);
          const lineHeight = 16 * scaleFactor;
          const cardHeight = Math.max(65 * scaleFactor, 30 * scaleFactor + lines.length * lineHeight + paddingY);

          const cardX = centerX - cardWidth / 2;
          const cardY = centerY - cardHeight / 2;

          ctx.fillStyle = 'rgba(15, 18, 25, 0.92)';
          ctx.beginPath();
          ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 10 * scaleFactor);
          ctx.fill();

          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 2.5 * scaleFactor;
          ctx.stroke();

          ctx.font = `bold ${Math.round(10 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = accentColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(badgeText, centerX, cardY + 6 * scaleFactor);

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = '#ffffff';
          ctx.textBaseline = 'middle';

          const textBlockStartY = cardY + 24 * scaleFactor + (cardHeight - 24 * scaleFactor) / 2;
          const totalTextBlockHeight = (lines.length - 1) * lineHeight;

          lines.forEach((line, idx) => {
            const lineY = textBlockStartY - totalTextBlockHeight / 2 + idx * lineHeight;
            ctx.fillText(line, centerX, lineY);
          });
        };

        drawTagPill(tagGirlfriendText, canvas.width * 0.22, canvas.height * 0.48, '#f43f5e', t('badgeGirlfriend').toUpperCase());
        drawTagPill(tagBoyfriendText, canvas.width * 0.56, canvas.height * 0.44, '#38bdf8', t('badgeBoyfriend').toUpperCase());
        drawTagPill(tagPigeonText, canvas.width * 0.76, canvas.height * 0.82, '#eab308', t('badgePigeon').toUpperCase());

      // 3. MODO ESPECIAL: Dos Botones (2 Etiquetas)
      } else if (currentArt.id === 'two-buttons-sweating' && buttonOverlayMode === 'dual-tags') {
        if (subtitleText.trim()) {
          const fontSize = Math.round(20 * scaleFactor);
          ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const maxTitleWidth = canvas.width * 0.85;
          const lines = wrapCenteredText(ctx, subtitleText, maxTitleWidth);
          const lineHeight = fontSize * 1.35;
          const paddingX = 20 * scaleFactor;
          const paddingY = 12 * scaleFactor;

          let longestLineWidth = 0;
          lines.forEach((l) => {
            const w = ctx.measureText(l).width;
            if (w > longestLineWidth) longestLineWidth = w;
          });

          const bannerWidth = Math.min(canvas.width * 0.9, longestLineWidth + paddingX * 2);
          const bannerHeight = lines.length * lineHeight + paddingY * 2;
          const bannerX = (canvas.width - bannerWidth) / 2;
          const bannerY = 25 * scaleFactor;

          ctx.fillStyle = 'rgba(15, 12, 10, 0.88)';
          ctx.beginPath();
          ctx.roundRect(bannerX, bannerY, bannerWidth, bannerHeight, 10 * scaleFactor);
          ctx.fill();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2 * scaleFactor;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          lines.forEach((line, idx) => {
            const y = bannerY + paddingY + (idx + 0.5) * lineHeight;
            ctx.fillText(line, canvas.width / 2, y);
          });
        }

        const drawButtonCard = (text: string, x: number, y: number, isWorn: boolean) => {
          const cardWidth = 230 * scaleFactor;
          const paddingX = 14 * scaleFactor;
          const paddingY = 10 * scaleFactor;
          const maxTextWidth = cardWidth - paddingX * 2;

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          const lines = wrapCenteredText(ctx, text, maxTextWidth);
          const lineHeight = 16 * scaleFactor;
          const cardHeight = Math.max(75 * scaleFactor, 30 * scaleFactor + lines.length * lineHeight + paddingY);

          const cardX = x - cardWidth / 2;
          const cardY = y - cardHeight / 2;

          ctx.fillStyle = isWorn ? 'rgba(30, 20, 10, 0.92)' : 'rgba(20, 25, 35, 0.92)';
          ctx.beginPath();
          ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 12 * scaleFactor);
          ctx.fill();

          ctx.strokeStyle = isWorn ? '#eab308' : '#38bdf8';
          ctx.lineWidth = 3 * scaleFactor;
          ctx.stroke();

          ctx.font = `bold ${Math.round(11 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = isWorn ? '#fbbf24' : '#7dd3fc';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(isWorn ? t('badgeWorn').toUpperCase() : t('badgeNew').toUpperCase(), x, cardY + 8 * scaleFactor);

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = '#ffffff';
          ctx.textBaseline = 'middle';

          const textBlockStartY = cardY + 24 * scaleFactor + (cardHeight - 24 * scaleFactor) / 2;
          const totalTextBlockHeight = (lines.length - 1) * lineHeight;

          lines.forEach((line, idx) => {
            const lineY = textBlockStartY - totalTextBlockHeight / 2 + idx * lineHeight;
            ctx.fillText(line, x, lineY);
          });
        };

        drawButtonCard(buttonLeftText, canvas.width * 0.3, canvas.height * 0.76, true);
        drawButtonCard(buttonRightText, canvas.width * 0.7, canvas.height * 0.76, false);

      // 4. SUBTÍTULO ESTÁNDAR (Con auto-wrap centrado para que NUNCA se corte)
      } else if (showSubtitle && subtitleText.trim()) {
        const fontSize = Math.round(subtitleSize * scaleFactor);
        let fontFace = 'sans-serif';
        if (subtitleStyle === 'meme-impact') {
          fontFace = 'Impact, sans-serif';
        } else if (subtitleStyle === 'retro-yellow') {
          fontFace = '"MS Gothic", "Hiragino Sans", "Segoe UI", sans-serif';
        } else {
          fontFace = 'system-ui, -apple-system, sans-serif';
        }

        ctx.font = `bold ${fontSize}px ${fontFace}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Margen seguro del 85% del ancho del canvas
        const maxTextWidth = canvas.width * 0.85;
        const rawText = subtitleStyle === 'meme-impact' ? subtitleText.toUpperCase() : subtitleText;
        const lines = wrapCenteredText(ctx, rawText, maxTextWidth);

        const lineHeight = fontSize * 1.25;
        const totalHeight = lines.length * lineHeight;

        let baseY = canvas.height * 0.88;
        if (subtitlePos === 'top') baseY = canvas.height * 0.12;
        if (subtitlePos === 'center') baseY = canvas.height * 0.5;

        const startY = baseY - totalHeight / 2 + lineHeight / 2;
        const xPos = canvas.width / 2;

        lines.forEach((line, index) => {
          const currentY = startY + index * lineHeight;

          if (subtitleStyle === 'retro-yellow') {
            ctx.lineWidth = Math.max(4, Math.round(6 * scaleFactor));
            ctx.strokeStyle = '#050505';
            ctx.strokeText(line, xPos, currentY);
            ctx.fillStyle = '#ffea38';
            ctx.fillText(line, xPos, currentY);
          } else if (subtitleStyle === 'meme-impact') {
            ctx.lineWidth = Math.max(5, Math.round(8 * scaleFactor));
            ctx.strokeStyle = '#000000';
            ctx.strokeText(line, xPos, currentY);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(line, xPos, currentY);
          } else {
            ctx.lineWidth = Math.max(3, Math.round(4 * scaleFactor));
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.85)';
            ctx.strokeText(line, xPos, currentY);
            ctx.fillStyle = '#f8fafc';
            ctx.fillText(line, xPos, currentY);
          }
        });
      }

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${currentArt.id}-meme.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error al descargar:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadCollage = async () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const loadedImages: HTMLImageElement[] = [];
      for (const panel of expandingPanels) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = panel.image;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        loadedImages.push(img);
      }

      const panelSize = 600;

      if (collageLayout === 'vertical') {
        const textColWidth = 500;
        canvas.width = panelSize + textColWidth;
        canvas.height = panelSize * 4;

        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 4; i++) {
          const y = i * panelSize;
          ctx.drawImage(loadedImages[i], 0, y, panelSize, panelSize);

          ctx.fillStyle = i % 2 === 0 ? '#292524' : '#1f1d1b';
          ctx.fillRect(panelSize, y, textColWidth, panelSize);

          ctx.strokeStyle = '#44403c';
          ctx.lineWidth = 3;
          ctx.strokeRect(0, y, canvas.width, panelSize);

          if (showCollageCaptions) {
            ctx.font = 'bold 22px system-ui, sans-serif';
            ctx.fillStyle = '#f59e0b';
            ctx.textAlign = 'left';
            ctx.fillText(`${t('levelLabel')} ${i + 1}`, panelSize + 36, y + 60);

            ctx.font = 'bold 28px system-ui, sans-serif';
            ctx.fillStyle = '#f5f5f4';

            const text = collageCaptions[i] || '';
            const lines = wrapCenteredText(ctx, text, textColWidth - 72);
            lines.forEach((l, lIdx) => {
              ctx.fillText(l, panelSize + 36, y + 120 + lIdx * 38);
            });
          }
        }
      } else {
        canvas.width = panelSize * 2;
        canvas.height = panelSize * 2;

        for (let i = 0; i < 4; i++) {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = col * panelSize;
          const y = row * panelSize;

          ctx.drawImage(loadedImages[i], x, y, panelSize, panelSize);

          if (showCollageCaptions && collageCaptions[i]) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(x, y + panelSize - 90, panelSize, 90);

            ctx.font = 'bold 20px "MS Gothic", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const lines = wrapCenteredText(ctx, collageCaptions[i], panelSize - 40);
            const lineH = 26;
            const startLineY = y + panelSize - 45 - ((lines.length - 1) * lineH) / 2;

            lines.forEach((l, lIdx) => {
              const ly = startLineY + lIdx * lineH;
              ctx.strokeStyle = '#000000';
              ctx.lineWidth = 4;
              ctx.strokeText(l, x + panelSize / 2, ly);
              ctx.fillStyle = '#ffea38';
              ctx.fillText(l, x + panelSize / 2, ly);
            });
          }
        }
      }

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `expanding-brain-palomas-${collageLayout}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error al exportar collage:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 font-sans selection:bg-amber-400 selection:text-stone-900">
      {/* Fondo con brillo ambiental */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.15),transparent_60%)]" />

      {/* Barra de cabecera */}
      <header className="w-full max-w-5xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-stone-800 pb-4 mb-6 z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold shadow-inner">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-stone-100 flex items-center gap-2">
              {t('h1Title')}
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {t('worksCount', { n: artworks.length })}
              </span>
            </h1>
            <p className="text-xs text-stone-400">{t('headerSubtitle')}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:justify-end">
          {/* Pestañas de Vista */}
          <div className="flex items-center gap-2 bg-stone-950/80 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setActiveTab('individual')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'individual'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t('tabGallery')}</span>
            </button>
            <button
              onClick={() => setActiveTab('expanding-collage')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'expanding-collage'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>{t('tabExpanding')}</span>
            </button>
          </div>
          <LangSwitcher />
        </div>
      </header>

      {/* Barra de enlaces destacada (arriba, grande) */}
      <nav className="w-full max-w-5xl z-10 -mt-2 mb-6 flex flex-col sm:flex-row items-stretch gap-3 flex-wrap">
        <a href="/universo.html" className="flex-1 text-center bg-orange-500 text-stone-950 font-extrabold text-lg px-6 py-4 rounded-2xl hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/25">
          🎬 {t('navUniverse')}
        </a>
        <a href={`/juego.html?lang=${lang}`} className="flex-1 text-center bg-amber-500 text-stone-950 font-extrabold text-lg px-6 py-4 rounded-2xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25">
          🎯 {t('navPlay')}
        </a>
        <a href="/certificado.html" className="flex-1 text-center bg-yellow-400 text-stone-950 font-extrabold text-lg px-6 py-4 rounded-2xl hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/25">
          📜 {t('navCert')}
        </a>
        <a href="https://github.com/annatchijova/pichon" target="_blank" rel="noopener noreferrer" className="text-center bg-stone-800 text-stone-100 font-bold text-base px-6 py-4 rounded-2xl border border-stone-700 hover:border-amber-500/60 hover:text-amber-300 transition-all">
          🐙 {t('navRepo')}
        </a>
        {/* Dos presentaciones. Nadie explica por qué hay dos. */}
        <a href="/curso.pdf" target="_blank" rel="noopener noreferrer" title={t('navDeck')} className="text-center bg-stone-800 text-stone-100 font-bold text-base px-6 py-4 rounded-2xl border border-stone-700 hover:border-amber-500/60 hover:text-amber-300 transition-all">
          📊 {t('navDeck')}
        </a>
        <a href="/presentacion.pdf" target="_blank" rel="noopener noreferrer" title={t('navDossier')} className="text-center bg-stone-800 text-stone-100 font-bold text-base px-6 py-4 rounded-2xl border border-stone-700 hover:border-amber-500/60 hover:text-amber-300 transition-all">
          🗄️ {t('navDossier')}
        </a>
      </nav>

      {/* VISTA 1: Galería Individual y Editor de Memes */}
      {activeTab === 'individual' && (
        <div className="w-full max-w-5xl flex flex-col gap-6 z-10">
          {/* Navegación por las Obras */}
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-400 px-1">
              <span className="font-medium text-stone-300">{t('gallerySelect')}</span>
              <span>{t('imagesAvailable', { n: artworks.length })}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {artworks.map((art) => {
                const isSelected = art.id === currentArt.id;
                return (
                  <button
                    key={art.id}
                    id={`select-art-${art.id}`}
                    onClick={() => handleSelectArt(art)}
                    className={`flex flex-col items-center p-2 rounded-xl border text-center transition-all group ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500/70 shadow-lg ring-1 ring-amber-400/40'
                        : 'bg-stone-950/70 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60'
                    }`}
                  >
                    <div className="w-full aspect-square rounded-lg overflow-hidden border border-stone-800 shrink-0 bg-stone-900 relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {art.id === 'escalated-to-ai' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-500 text-white animate-pulse">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'invisible-backpack-cockroach' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-lime-400 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'pigeon-suspicion-chart' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-emerald-400 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'constructivist-pigeon-poster' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-600 text-white">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'double-agent-silhouette' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-zinc-200 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'bitten-in-siberia-origin' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-sky-400 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'cordyceps-v2-endpoint' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-cyan-400 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'wasp-firewall' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-rose-500 text-white">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'ant-ethernet-cable' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-amber-400 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'corporate-pigeon-headshot' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-blue-500 text-white">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'declassified-dossier' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-500 text-white">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'cold-war-pigeon' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-slate-300 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'cockroach-datacenter-isometric' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-emerald-400 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'cockroach-tactical-backpack' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-lime-400 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'security-ops-pigeon' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-cyan-500 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'crow-nobody-believes' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-violet-500 text-white">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'they-dont-know-cockroach' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-amber-500 text-stone-950">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'distracted-boyfriend-pigeon' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-emerald-500/90 text-white">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.id === 'two-buttons-sweating' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-500/90 text-white">
                          {t('newBadge')}
                        </span>
                      )}
                      {art.levelBadge && (
                        <span className="absolute bottom-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-black/80 text-amber-300">
                          {art.levelBadge.split('•')[0]}
                        </span>
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold truncate w-full mt-1.5 ${isSelected ? 'text-amber-300' : 'text-stone-300'}`}>
                      {art.title.split(':')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cuadrícula Principal de Presentación */}
          <main className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start my-auto">
            {/* Izquierda: Lienzo de la Ilustración */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center">
              <div
                ref={containerRef}
                className="relative w-full max-w-[560px] aspect-square rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl group select-none"
              >
                {/* Imagen Generada */}
                <img
                  ref={imageRef}
                  src={currentArt.image}
                  alt={currentArt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Efecto Opcional de Filtro VHS / Scanlines */}
                {showVhsEffect && (
                  <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.18),rgba(0,0,0,0.18)_2px,transparent_2px,transparent_4px)] mix-blend-overlay" />
                )}

                {/* MODO ESPECIAL: Cucaracha en la Fiesta ("They Don't Know") */}
                {currentArt.id === 'they-dont-know-cockroach' && thoughtOverlayMode === 'thought-bubble' ? (
                  <div className="absolute inset-0 p-5 pointer-events-none">
                    {subtitleText.trim() && (
                      <div className="absolute top-4 left-4 max-w-[65%] p-3.5 rounded-2xl bg-stone-950/92 border-2 border-amber-500 shadow-2xl backdrop-blur-md">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-amber-400 block mb-1 flex items-center gap-1">
                          💭 {t('badgeThinking')}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold italic text-stone-100 leading-snug break-words">
                          "{subtitleText}"
                        </p>
                      </div>
                    )}
                  </div>
                ) : currentArt.id === 'distracted-boyfriend-pigeon' && boyfriendOverlayMode === 'trio-tags' ? (
                  /* MODO ESPECIAL: Novio Distraído (3 Etiquetas) */
                  <div className="absolute inset-0 p-4 pointer-events-none flex flex-col justify-between">
                    {/* Título arriba centrado */}
                    {subtitleText.trim() && (
                      <div className="flex justify-center mt-1">
                        <div className="px-3.5 py-1.5 rounded-xl bg-stone-950/90 border border-amber-500/60 shadow-xl backdrop-blur-md max-w-[85%] text-center">
                          <p className="text-xs sm:text-sm font-bold text-stone-100 leading-tight">{subtitleText}</p>
                        </div>
                      </div>
                    )}

                    {/* Las 3 etiquetas flotantes sobre los personajes */}
                    <div className="relative w-full h-full">
                      {/* Novia ofendida (Izquierda) */}
                      <div className="absolute top-[38%] left-[2%] max-w-[34%] p-2 rounded-xl bg-stone-950/92 border-2 border-rose-500 shadow-2xl backdrop-blur-md text-center">
                        <span className="text-[8px] uppercase font-bold tracking-wider text-rose-300 block mb-0.5">
                          💔 {t('badgeGirlfriend')}
                        </span>
                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight break-words">
                          {tagGirlfriendText || t('fallbackGirlfriend')}
                        </p>
                      </div>

                      {/* Novio distraído (Centro) */}
                      <div className="absolute top-[34%] left-[42%] max-w-[34%] p-2 rounded-xl bg-stone-950/92 border-2 border-sky-400 shadow-2xl backdrop-blur-md text-center">
                        <span className="text-[8px] uppercase font-bold tracking-wider text-sky-300 block mb-0.5">
                          👀 {t('badgeBoyfriend')}
                        </span>
                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight break-words">
                          {tagBoyfriendText || t('fallbackBoyfriend')}
                        </p>
                      </div>

                      {/* Paloma con mochila (Abajo Derecha) */}
                      <div className="absolute bottom-[4%] right-[2%] max-w-[42%] p-2 rounded-xl bg-stone-950/92 border-2 border-amber-400 shadow-2xl backdrop-blur-md text-center">
                        <span className="text-[8px] uppercase font-bold tracking-wider text-amber-300 block mb-0.5">
                          🎒 {t('badgePigeon')}
                        </span>
                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight break-words">
                          {tagPigeonText || t('fallbackPigeon')}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : currentArt.id === 'two-buttons-sweating' && buttonOverlayMode === 'dual-tags' ? (
                  /* MODO ESPECIAL: Dos Botones (2 Etiquetas) */
                  <div className="absolute inset-0 p-4 pointer-events-none flex flex-col justify-between">
                    {/* Banner superior de situación */}
                    {subtitleText.trim() && (
                      <div className="flex justify-center mt-1">
                        <div className="px-4 py-1.5 rounded-xl bg-stone-950/90 border border-amber-500/60 shadow-xl backdrop-blur-md max-w-[85%] text-center">
                          <p className="text-xs sm:text-sm font-bold text-stone-100 leading-tight">{subtitleText}</p>
                        </div>
                      </div>
                    )}

                    {/* Las dos cajas de texto sobre los botones rojo gastado y rojo nuevo */}
                    <div className="grid grid-cols-2 gap-3 mb-6 px-3">
                      {/* Botón Izquierdo (Gastado) */}
                      <div className="p-2.5 rounded-xl bg-stone-950/92 border-2 border-amber-400 shadow-2xl backdrop-blur-md flex flex-col justify-between text-center">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-amber-300 block mb-0.5">
                          🔴 {t('badgeWorn')}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-tight break-words">
                          {buttonLeftText || t('fallbackHabitual')}
                        </p>
                      </div>

                      {/* Botón Derecho (Nuevo) */}
                      <div className="p-2.5 rounded-xl bg-stone-950/92 border-2 border-sky-400 shadow-2xl backdrop-blur-md flex flex-col justify-between text-center">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-sky-300 block mb-0.5">
                          🔴 {t('badgeNew')}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-tight break-words">
                          {buttonRightText || t('fallbackSuspicious')}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Subtítulo Estándar Dinámico */
                  showSubtitle &&
                  subtitleText.trim() && (
                    <div
                      className={`absolute inset-x-0 px-8 flex justify-center pointer-events-none transition-all duration-200 ${
                        subtitlePos === 'top'
                          ? 'top-8'
                          : subtitlePos === 'center'
                          ? 'top-1/2 -translate-y-1/2'
                          : 'bottom-8'
                      }`}
                    >
                      <div className="max-w-[85%]">
                        <p
                          style={{ fontSize: `${subtitleSize}px` }}
                          className={`text-center tracking-wide leading-tight select-none transition-all break-words ${
                            subtitleStyle === 'retro-yellow'
                              ? 'font-bold text-[#ffea38] [text-shadow:_0_0_8px_#000,_0_2px_4px_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]'
                              : subtitleStyle === 'meme-impact'
                              ? 'font-black uppercase tracking-wider text-white [font-family:Impact,sans-serif] [text-shadow:_0_0_10px_#000,_-3px_-3px_0_#000,_3px_-3px_0_#000,_-3px_3px_0_#000,_3px_3px_0_#000]'
                              : 'font-semibold text-stone-50 [text-shadow:_0_2px_6px_rgba(0,0,0,0.9),_0_0_2px_#000]'
                          }`}
                        >
                          {subtitleStyle === 'meme-impact' ? subtitleText.toUpperCase() : subtitleText}
                        </p>
                      </div>
                    </div>
                  )
                )}

                {/* Botón para Ampliar / Pantalla Completa */}
                <button
                  id="expand-view-btn"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all border border-stone-700/60 shadow-lg"
                  title={t('expandTooltip')}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full max-w-[560px] flex items-center justify-between text-xs text-stone-400 mt-3 px-1">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-stone-500" />
                  {t('formatLabel')}
                </span>
                <button
                  onClick={() => setShowVhsEffect(!showVhsEffect)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors border ${
                    showVhsEffect
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-medium'
                      : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-300'
                  }`}
                >
                  <Tv className="w-3 h-3" />
                  <span>{t('vhsLabel')} {showVhsEffect ? t('vhsOn') : t('vhsOff')}</span>
                </button>
              </div>
            </div>

            {/* Derecha: Barra Lateral de Personalización */}
            <div className="lg:col-span-4 w-full flex flex-col gap-4">
              {/* Acciones Rápidas */}
              <div className="flex gap-2">
                <button
                  id="copy-prompt-btn"
                  onClick={() => handleCopyPrompt()}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t('copiedLabel')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t('copyPrompt')}</span>
                    </>
                  )}
                </button>
                <button
                  id="download-artwork-btn"
                  onClick={handleDownloadSingle}
                  disabled={isExporting}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all shadow-sm active:scale-95 disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isExporting ? t('exportingLabel') : t('downloadPng')}</span>
                </button>
              </div>

              {/* Panel de edición para "They Don't Know" (Cucaracha) */}
              {currentArt.id === 'they-dont-know-cockroach' && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                      <MessageCircle className="w-4 h-4" />
                      {t('thoughtPanelTitle')}
                    </h3>
                    <div className="flex bg-stone-900 p-0.5 rounded-lg border border-stone-700">
                      <button
                        onClick={() => setThoughtOverlayMode('thought-bubble')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          thoughtOverlayMode === 'thought-bubble'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        {t('thoughtBubbleMode')}
                      </button>
                      <button
                        onClick={() => setThoughtOverlayMode('standard')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          thoughtOverlayMode === 'standard'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        {t('standardMode')}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] text-stone-400 block mb-1">{t('thoughtField')}</label>
                    <textarea
                      value={subtitleText}
                      onChange={(e) => setSubtitleText(e.target.value)}
                      rows={2}
                      placeholder={t('thoughtPlaceholder')}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-stone-900 border border-amber-500/50 text-stone-100 outline-none resize-none"
                    />
                  </div>

                  {/* Presets sugeridos */}
                  <div className="pt-2 border-t border-stone-800">
                    <label className="text-[10px] text-stone-400 block mb-1.5 font-medium">
                      {t('thoughtSuggestions')}
                    </label>
                    <div className="space-y-1">
                      {currentArt.presets.map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSubtitleText(preset)}
                          className="w-full text-left p-1.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-[11px] text-stone-300 transition-colors"
                        >
                          "{preset}"
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Panel de edición para "Novio Distraído" */}
              {currentArt.id === 'distracted-boyfriend-pigeon' && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                      <Users className="w-4 h-4" />
                      {t('boyfriendPanelTitle')}
                    </h3>
                    <div className="flex bg-stone-900 p-0.5 rounded-lg border border-stone-700">
                      <button
                        onClick={() => setBoyfriendOverlayMode('trio-tags')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          boyfriendOverlayMode === 'trio-tags'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        {t('trioTagsMode')}
                      </button>
                      <button
                        onClick={() => setBoyfriendOverlayMode('standard')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          boyfriendOverlayMode === 'standard'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        {t('standardMode')}
                      </button>
                    </div>
                  </div>

                  {boyfriendOverlayMode === 'trio-tags' && (
                    <div className="space-y-2.5 pt-1">
                      <div>
                        <label className="text-[11px] text-stone-400 block mb-1">{t('situationLabel')}</label>
                        <input
                          type="text"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                          placeholder={t('situationPlaceholder')}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <div>
                          <label className="text-[10px] text-rose-400 font-semibold block mb-0.5">
                            {t('girlfriendSideLabel')}
                          </label>
                          <input
                            type="text"
                            value={tagGirlfriendText}
                            onChange={(e) => setTagGirlfriendText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-rose-500/50 text-stone-100 outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-sky-400 font-semibold block mb-0.5">
                            {t('boyfriendSideLabel')}
                          </label>
                          <input
                            type="text"
                            value={tagBoyfriendText}
                            onChange={(e) => setTagBoyfriendText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-sky-500/50 text-stone-100 outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-amber-400 font-semibold block mb-0.5">
                            {t('pigeonSideLabel')}
                          </label>
                          <input
                            type="text"
                            value={tagPigeonText}
                            onChange={(e) => setTagPigeonText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-amber-500/50 text-stone-100 outline-none"
                          />
                        </div>
                      </div>

                      {/* Presets de Novio Distraído */}
                      <div className="pt-2 border-t border-stone-800">
                        <label className="text-[10px] text-stone-400 block mb-1.5 font-medium">
                          {t('templateSuggestions')}
                        </label>
                        <div className="space-y-1">
                          {currentArt.trioPresets?.map((p, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setTagBoyfriendText(p.boyfriend);
                                setTagGirlfriendText(p.girlfriend);
                                setTagPigeonText(p.pigeon);
                                if (p.caption) setSubtitleText(p.caption);
                              }}
                              className="w-full text-left p-1.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-[11px] text-stone-300 transition-colors"
                            >
                              <span className="text-amber-400 font-bold block">{p.caption}</span>
                              <span className="text-stone-400 text-[10px]">
                                {p.boyfriend} ➔ {p.pigeon} ({t('ignoringTemplate', { girlfriend: p.girlfriend })})
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Panel de edición específico para "Dos Botones" */}
              {currentArt.id === 'two-buttons-sweating' && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                      <ToggleLeft className="w-4 h-4" />
                      {t('twoButtonsPanelTitle')}
                    </h3>
                    <div className="flex bg-stone-900 p-0.5 rounded-lg border border-stone-700">
                      <button
                        onClick={() => setButtonOverlayMode('dual-tags')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          buttonOverlayMode === 'dual-tags'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        {t('tagsMode')}
                      </button>
                      <button
                        onClick={() => setButtonOverlayMode('standard')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          buttonOverlayMode === 'standard'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        {t('standardMode')}
                      </button>
                    </div>
                  </div>

                  {buttonOverlayMode === 'dual-tags' && (
                    <div className="space-y-2.5 pt-1">
                      <div>
                        <label className="text-[11px] text-stone-400 block mb-1">{t('situationLabel')}</label>
                        <input
                          type="text"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                          placeholder={t('situationPlaceholder')}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-amber-400 font-semibold block mb-1">
                            {t('leftButtonLabel')}
                          </label>
                          <input
                            type="text"
                            value={buttonLeftText}
                            onChange={(e) => setButtonLeftText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-amber-500/50 text-stone-100 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-sky-400 font-semibold block mb-1">
                            {t('rightButtonLabel')}
                          </label>
                          <input
                            type="text"
                            value={buttonRightText}
                            onChange={(e) => setButtonRightText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-sky-500/50 text-stone-100 outline-none"
                          />
                        </div>
                      </div>

                      {/* Presets de Dos Botones */}
                      <div className="pt-2 border-t border-stone-800">
                        <label className="text-[10px] text-stone-400 block mb-1.5 font-medium">
                          {t('dilemmaSuggestions')}
                        </label>
                        <div className="space-y-1">
                          {currentArt.dualButtonPresets?.map((p, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setButtonLeftText(p.left);
                                setButtonRightText(p.right);
                                if (p.caption) setSubtitleText(p.caption);
                              }}
                              className="w-full text-left p-1.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-[11px] text-stone-300 transition-colors"
                            >
                              <span className="text-amber-400 font-bold block">{p.caption}</span>
                              <span className="text-stone-400 text-[10px]">
                                {t('wornNewTemplate', { left: p.left, right: p.right })}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Subtítulos Estándar (cuando no está en modo especial o en modo estándar) */}
              {(currentArt.category === 'single' ||
                currentArt.category === 'expanding-panel' ||
                (currentArt.id === 'two-buttons-sweating' && buttonOverlayMode === 'standard') ||
                (currentArt.id === 'distracted-boyfriend-pigeon' && boyfriendOverlayMode === 'standard') ||
                (currentArt.id === 'they-dont-know-cockroach' && thoughtOverlayMode === 'standard')) && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-stone-200 flex items-center gap-1.5 uppercase tracking-wide">
                      <Type className="w-4 h-4 text-amber-400" />
                      {t('subtitleEditorTitle')}
                    </h3>
                    <button
                      onClick={() => setShowSubtitle(!showSubtitle)}
                      className={`text-[11px] px-2 py-0.5 rounded font-medium transition-colors ${
                        showSubtitle
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      {showSubtitle ? t('visibleLabel') : t('hiddenLabel')}
                    </button>
                  </div>

                  {showSubtitle && (
                    <div className="space-y-3">
                      <div>
                        <input
                          id="subtitle-input"
                          type="text"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                          placeholder={t('subtitlePlaceholder')}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-stone-100 outline-none transition-all"
                        />
                      </div>

                      {/* Estilo tipográfico */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] text-stone-400 flex items-center gap-1">
                          <Palette className="w-3 h-3 text-stone-400" />
                          {t('fontStyleLabel')}
                        </label>
                        <div className="grid grid-cols-3 gap-1.5">
                          <button
                            onClick={() => setSubtitleStyle('retro-yellow')}
                            className={`px-2 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                              subtitleStyle === 'retro-yellow'
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            {t('styleAnime')}
                          </button>
                          <button
                            onClick={() => setSubtitleStyle('meme-impact')}
                            className={`px-2 py-1.5 text-[11px] font-bold uppercase rounded-lg border transition-all ${
                              subtitleStyle === 'meme-impact'
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            {t('styleImpact')}
                          </button>
                          <button
                            onClick={() => setSubtitleStyle('clean-white')}
                            className={`px-2 py-1.5 text-[11px] font-semibold rounded-lg border transition-all ${
                              subtitleStyle === 'clean-white'
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            {t('styleWhite')}
                          </button>
                        </div>
                      </div>

                      {/* Posición y Tamaño */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <label className="text-[10px] text-stone-400 block mb-1">{t('positionLabel')}</label>
                          <div className="grid grid-cols-3 gap-1 bg-stone-900 p-1 rounded-lg border border-stone-800">
                            {(['top', 'center', 'bottom'] as const).map((pos) => (
                              <button
                                key={pos}
                                onClick={() => setSubtitlePos(pos)}
                                className={`text-[10px] py-0.5 rounded capitalize ${
                                  subtitlePos === pos
                                    ? 'bg-amber-500 text-stone-950 font-bold'
                                    : 'text-stone-400 hover:text-stone-200'
                                }`}
                              >
                                {pos === 'top' ? t('posTop') : pos === 'center' ? t('posCenter') : t('posBottom')}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] text-stone-400 flex justify-between mb-1">
                            <span>{t('sizeLabel')}</span>
                            <span className="text-amber-400">{subtitleSize}px</span>
                          </label>
                          <input
                            type="range"
                            min="14"
                            max="36"
                            value={subtitleSize}
                            onChange={(e) => setSubtitleSize(Number(e.target.value))}
                            className="w-full accent-amber-500 bg-stone-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Presets Sugeridos */}
                      <div className="pt-2 border-t border-stone-800">
                        <label className="text-[10px] text-stone-400 block mb-1 font-medium">{t('quickPhrases')}</label>
                        <div className="flex flex-wrap gap-1">
                          {currentArt.presets.map((preset, index) => (
                            <button
                              key={index}
                              onClick={() => setSubtitleText(preset)}
                              className="text-[11px] px-2 py-1 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-stone-100 transition-colors truncate max-w-full text-left"
                            >
                              {preset}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Ficha Técnica y Prompt */}
              <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-300">{currentArt.title}</h3>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {t('originalPrompt')}
                  </span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed font-mono bg-stone-900/90 p-2.5 rounded-xl border border-stone-800/80">
                  {currentArt.prompt}
                </p>
                <p className="text-[11px] text-stone-400 pt-1 leading-snug">
                  {currentArt.description}
                </p>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* VISTA 2: Expanding Brain Collage Completo */}
      {activeTab === 'expanding-collage' && (
        <div className="w-full max-w-5xl flex flex-col gap-6 z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-stone-950/80 p-4 rounded-2xl border border-stone-800">
            <div>
              <h2 className="text-base font-bold text-stone-100 flex items-center gap-2">
                <Brain className="w-4 h-4 text-amber-400" />
                {t('expandingTitle')}
              </h2>
              <p className="text-xs text-stone-400">
                {t('expandingSubtitle')}
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <div className="flex bg-stone-900 p-1 rounded-xl border border-stone-800">
                <button
                  onClick={() => setCollageLayout('vertical')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium ${
                    collageLayout === 'vertical'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>{t('layoutVertical')}</span>
                </button>
                <button
                  onClick={() => setCollageLayout('grid')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium ${
                    collageLayout === 'grid'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>{t('layoutGrid')}</span>
                </button>
              </div>

              <button
                onClick={handleDownloadCollage}
                disabled={isExporting}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm transition-all active:scale-95 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isExporting ? t('exportingLabel') : t('downloadCollage')}</span>
              </button>
            </div>
          </div>

          {/* Renderizado de Previsualización del Collage */}
          {collageLayout === 'vertical' ? (
            <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-stone-700 bg-stone-950 shadow-2xl divide-y divide-stone-800">
              {expandingPanels.map((panel, idx) => (
                <div key={panel.id} className="grid grid-cols-1 md:grid-cols-12 items-center">
                  <div className="md:col-span-5 aspect-square bg-stone-900 relative">
                    <img
                      src={panel.image}
                      alt={panel.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-amber-400 border border-amber-500/30">
                      {t('levelLabel')} {idx + 1}
                    </span>
                  </div>
                  <div className="md:col-span-7 p-6 space-y-2 bg-stone-950">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {panel.levelBadge}
                    </span>
                    <input
                      type="text"
                      value={collageCaptions[idx]}
                      onChange={(e) => {
                        const next = [...collageCaptions];
                        next[idx] = e.target.value;
                        setCollageCaptions(next);
                      }}
                      className="w-full text-base font-bold text-stone-100 bg-stone-900/80 px-3 py-2 rounded-xl border border-stone-700 focus:border-amber-500 outline-none"
                    />
                    <p className="text-xs text-stone-400">{panel.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-2 p-2 rounded-2xl bg-stone-950 border border-stone-800 shadow-2xl">
              {expandingPanels.map((panel, idx) => (
                <div key={panel.id} className="relative aspect-square rounded-xl overflow-hidden group bg-stone-900">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-black/80 backdrop-blur-sm border-t border-stone-800 text-center">
                    <span className="text-[10px] text-amber-400 font-bold block">{panel.levelBadge}</span>
                    <p className="text-xs font-bold text-stone-100 truncate">{collageCaptions[idx]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal Lightbox para Vista Ampliada */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full aspect-square max-h-[90vh] rounded-2xl overflow-hidden border border-stone-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentArt.image}
                alt={currentArt.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-stone-950"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pie de página */}
      <footer className="w-full max-w-5xl text-center text-xs text-stone-400 pt-6 mt-6 border-t border-stone-800/80">
        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-3">
          <a href="https://github.com/annatchijova/pichon" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-medium hover:underline">🐙 {t('navRepo')}</a>
          <a href="/curso.pdf" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-medium hover:underline">📊 {t('navDeck')}</a>
          <a href="/presentacion.pdf" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-medium hover:underline">🗄️ {t('navDossier')}</a>
          <a href={`/juego.html?lang=${lang}`} className="text-amber-400 font-medium hover:underline">🎯 {t('footerPlay')}</a>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-2">
          <span>{t('footerTag1')}</span>
          <span>•</span>
          <span>{t('footerTag2')}</span>
          <span>•</span>
          <span className="text-amber-400 font-medium">{t('footerTag3')}</span>
        </p>
        <p className="mt-3 text-[10px] text-stone-600">
          <a href="/curso-ru.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 hover:underline">{t('footerRuCourse')}</a>
          <span className="mx-2 opacity-50">·</span>
          <span>{t('footerOpNote')}</span>
        </p>
      </footer>
    </div>
  );
}
