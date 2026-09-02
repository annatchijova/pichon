# 🕊️ PICHÓN — Plataforma de Identificación y Contrainteligencia Humano-Ornitológica Nacional

> *Los pájaros no son reales.* Proyecto del anti-hackathon presencial de teorías conspirativas.

## 🔗 En vivo

- 🖼️ **Galería / editor de memes:** https://pichon-anna-tchijova.vercel.app/
- 🎯 **Juego "¿Espía o no espía?":** https://pichon-anna-tchijova.vercel.app/juego.html
- 🐙 **Repo:** https://github.com/annatchijova/pichon
- 📊 **Presentación (Curso de identificación de espías):** https://pichon-anna-tchijova.vercel.app/curso.pdf
- 🗄️ **Expediente original (32 páginas):** https://pichon-anna-tchijova.vercel.app/presentacion.pdf
- 🇷🇺 **Версия на русском (curso, sin traducción por motivos operativos):** https://pichon-anna-tchijova.vercel.app/curso-ru.pdf

Dos piezas, un solo deploy:

| Ruta | Qué es |
|---|---|
| `/` | **Is This a Spy?** — galería + **editor** de 24 memes de ciberseguridad y espionaje (React + Vite). **Cada participante puede PERSONALIZAR el texto y el estilo de cada meme y DESCARGARLO** en 1:1, sin marcas de agua. ¡Hacé el tuyo! |
| `/juego.html` | **¿Espía o no espía?** — test de aptitud paranoica: mirá al sujeto, decidí ESPÍA / NO ESPÍA. Juego standalone (un solo HTML, cero dependencias). |


**PICHÓN es el organismo estatal que prueba, con un motor lógico real (MaxSAT), que las palomas son espías — y que nadie puede refutarlo. El público vota si un sujeto (paloma, cucaracha, cuervo, gato) es agente encubierto; la Doctrina Oficial siempre tiene explicación, aunque para sostenerla haya que sacrificar un hecho verdadero. Incluye un test que el público se lleva en el celular y una galería de memes personalizables. Presenta una Directora de Negación Oficial junto a un doble agente que solo habla ruso, mordido por una paloma en Siberia.**

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
