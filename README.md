# 🕊️ PICHÓN — Plataforma de Identificación y Contrainteligencia Humano-Ornitológica Nacional

> *Los pájaros no son reales.* Proyecto del anti-hackathon presencial de teorías conspirativas.

Dos piezas, un solo deploy:

| Ruta | Qué es |
|---|---|
| `/` | **Is This a Spy?** — editor/galería de 24 memes de ciberseguridad y espionaje (React + Vite). |
| `/juego.html` | **¿Espía o no espía?** — test de aptitud paranoica: mirá al sujeto, decidí ESPÍA / NO ESPÍA. Juego standalone (un solo HTML, cero dependencias). |

## Correr local

```bash
npm install
npm run dev        # http://localhost:3000  (app)
# el juego: http://localhost:3000/juego.html
```

## Build

```bash
npm run build      # genera dist/ (index.html = app, juego.html = juego, assets/)
npm run preview
```

Es **100% estático** — no usa API keys ni backend en runtime (la dependencia `@google/genai` viene
del template de AI Studio pero no se llama). Se deploya como sitio estático.

## Deploy (Vercel)

Framework autodetectado: **Vite**. Output: `dist/`. Sin variables de entorno necesarias.

```bash
vercel login       # una vez (OAuth)
vercel --prod
```

O importando el repo en vercel.com (autodetecta Vite → build `npm run build` → output `dist/`).

## Estructura

```
├── index.html            # entry de la app Vite
├── src/App.tsx           # la app de memes
├── public/juego.html     # el juego "¿Espía o no espía?"
├── deck/                 # presentación (pptx) + guión de 7 min
└── vite.config.ts
```

Los memes fuente crudos (variantes para intercalar en la presentación) viven aparte, fuera del repo.

---
*Anti-hackathon de teorías conspirativas — 2026. Este README fue redactado bajo vigilancia palomar.*
