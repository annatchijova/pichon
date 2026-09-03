# 🕊️ PICHÓN

**Plataforma de Identificación y Contrainteligencia Humano-Ornitológica Nacional**

> No decimos que todas las palomas sean espías.
> Decimos que, si una sola lo fuera, ustedes no tendrían forma de demostrar que las demás no lo son.

[Español](README.md) · [English](README.en.md) · [Русский](README.ru.md) · [Paloma](README.paloma.md)

Proyecto presentado en **SideQuest — Conspiracy Edition**, el anti-hackathon de teorías conspirativas (Buenos Aires, 2026). La consigna pedía imaginar un mundo donde las conspiraciones ya son reales y construir la tecnología que ese mundo necesitaría. Elegimos el mundo más simple: uno donde las palomas ya son espías. Ahí no falta la sospecha. Falta la infraestructura.

---

## En vivo

- **Archivo cinematográfico y reglas del universo** — https://pichon-anna-tchijova.vercel.app/universo.html
- **Juego «¿Espía o no espía?»** — https://pichon-anna-tchijova.vercel.app/juego.html
- **Certificado de aprobación** (editable, descargable en PNG) — https://pichon-anna-tchijova.vercel.app/certificado.html
- **Galería y editor de memes** — https://pichon-anna-tchijova.vercel.app/
- **Curso de Identificación de Espías** (PDF, 27 páginas) — https://pichon-anna-tchijova.vercel.app/curso.pdf
- **Курс по выявлению шпионов** — versión rusa, sin traducción por motivos operativos — https://pichon-anna-tchijova.vercel.app/curso-ru.pdf
- **Expediente original** — la presentación de PICHÓN, 32 páginas — https://pichon-anna-tchijova.vercel.app/presentacion.pdf

Todo es estático. No hay backend, ni cuentas, ni API keys en runtime. Se abre en cualquier teléfono.

---

## Qué es esto

PICHÓN es un organismo ficticio con un problema real: tiene que demostrar que las palomas son espías y no puede fallar.

Lo resuelve con un motor lógico de verdad: un **MaxSAT ponderado exacto**. El público pesa las creencias a mano alzada, el corpus contiene hechos y doctrina, y el motor devuelve el conjunto consistente de peso máximo. Cuando un hecho verdadero contradice una creencia, el hecho se descarta con una justificación oficial y suma uno al contador de **hechos neutralizados**. La teoría siempre sale consistente.

Ese es el chiste, y también el punto: una teoría irrefutable no es fuerte, es tramposa. Sobrevive tirando la realidad a la basura pedazo por pedazo, y el sistema te muestra en vivo cada pedazo que tira.

El universo tiene, por ahora, dos capítulos:

| Capítulo | Formato | Qué pasa |
|---|---|---|
| **Incidente PICHÓN** | Presentación de 32 páginas, juego y galería de memes | Se funda el organismo. Una paloma cruza el perímetro, come pan en dos lugares, visita tres antenas, defeca sobre un auto oficial y escala a la IA. Puntaje: 171. Umbral: 100. Aprobación humana: no. |
| **Curso de Identificación de Espías** | Clase magistral de 27 páginas, en español y en ruso | El organismo forma civiles. Reglamento interno, doctrina, clasificación por color de pantalón, panteón de amenazas, canal interceptado, examen final. Todos aprueban. Es más barato. |

---

## Las piezas

| Ruta | Qué es | Stack |
|---|---|---|
| `/` | **Is This a Spy?** — galería y editor de 26 memes de espionaje aviar. Cada persona personaliza el subtítulo, la tipografía, la posición y el tamaño, y descarga su PNG en 1:1, sin marca de agua. | React + Vite |
| `/universo.html` | **Archivo cinematográfico** — el canon de películas del universo y las reglas de la doctrina, en cuatro idiomas. Estética de expediente desclasificado. | HTML + JS local, cero dependencias externas |
| `/juego.html` | **¿Espía o no espía?** — test de aptitud paranoica. Ocho sujetos, evidencia observada, votás. La Doctrina Oficial dicta el veredicto. | HTML + JS local, cero dependencias externas |
| `/certificado.html` | **Certificado de aprobación** — generador editable: nombre, color de pantalón (nivel de acceso), especialidad. Descarga en PNG 1:1. | HTML + Canvas, cero dependencias externas |
| `/curso.pdf` | La clase, con notas de escena en el `.pptx` de `deck/` | pptxgenjs |
| `/presentacion.pdf` | El expediente original, con los memes intercalados | pptxgenjs |
| `/curso-ru.pdf` | La clase en ruso, para agentes de habla rusa | pptxgenjs |

### El juego

Ocho casos: la paloma frente al banco, la cucaracha sin mochila visible, el cuervo que te sigue tres cuadras, el gato que duerme dieciséis horas, el gorrión que entra y sale de un edificio gubernamental, el perro que persigue su cola, el humano con notebook y la paloma con la antena a la vista.

Ningún resultado posible te deja fuera de sospecha. Ocho de ocho: *sospechosamente correcto, nadie acierta todo por casualidad, se abre expediente*. Cero de ocho: *usted es la paloma*. En el medio, o sos oficial de contrainteligencia o un civil cuya inocencia es estadísticamente improbable.

Para presentarlo: `E` espía, `N` no espía, `Espacio` siguiente, y el botón **Proyector** agranda todo.

### La galería

Veintiséis piezas generadas con Google AI Studio a partir de prompts propios, montadas en un editor que permite cambiar texto, estilo (Anime amarillo, Impact clásico, Blanco fino), posición y tamaño, y descargar el resultado. Incluye la serie *Expanding Brain* en cuatro paneles, el origen de Dahgoth en Siberia, la cucaracha con gorrito en la fiesta y la sala de situación con la silla vacía.

---

## La doctrina, resumida para civiles

**Reglamento interno — Resolución 001/26**

- §1. Está prohibido mirar a las palomas sin autorización.
- §2. El pan es material clasificado.
- §3. En caso de contacto, no corra: la paloma es más rápida.
- §4. La duda es una forma de contacto.
- §5. Todo reglamento posterior deroga al anterior, incluso si nadie lo redactó todavía.

**Principios**

- La doctrina no se deriva. Se elige. Siempre gana el mismo candidato.
- Empates: prevalece la creencia.
- Sin gravitsappa no hay veredicto. Nadie sabe qué hace. Nadie la apaga.
- El nivel de acceso se determina por el color del pantalón del agente: gris, azul, amarillo, frambuesa. Nadie explica el mapeo. Si tiene que preguntar de qué color es su pantalón, es gris.
- Saludo oficial: КУ. La respuesta correcta al saludo es КУ.
- Escala PALOMA-CON, de 5 (las palomas comen) a 1 (las palomas saben). Situación actual: 2, el pan ha sido localizado.

**Panteón de amenazas**

Paloma, diosa de la vigilancia urbana. Cuervo, dios de la auditoría; audita a la paloma. Gorrión, mensajero; no responde. Cucaracha, guardiana de los datos; la mochila es invisible. Avispa, firewall; error 403 y aparece una avispa. Cordyceps v2.0, brazo ejecutor de la IA; no pide rescate en cripto, pide azúcar.

---

## Lo que es verdad

La pendiente arranca en hechos verificables. Todo lo que sigue después es sátira.

- Existen cucarachas cyborg con electrónica montada al dorso, controladas a distancia, en varios proyectos de investigación reales.
- Existieron programas reales de palomas en inteligencia: el *Project Pigeon* de B. F. Skinner en los años cuarenta y programas de la CIA con cámaras montadas en palomas.
- Los cuervos reconocen rostros humanos y guardan rencor durante años. Está documentado.
- El *Ophiocordyceps unilateralis* controla el comportamiento de las hormigas. La versión 2.0 coordinada por IA, no.

Ninguna paloma real fue acusada. Ninguna persona real es el objetivo. El proyecto se ríe de cómo funcionan las teorías conspirativas, no de quienes las creen.

---

## El equipo, dentro del universo

- **Anna** — Directora de Negación Oficial. Diseñó el motor que decide quién es espía y ya no puede apagarlo. Pantalón: confidencial (amarillo).
- **Dahgoth · КИБЕРСТРАННИК** — Activo comprometido, División Cuervos. Mordido por una paloma en Siberia; desde entonces solo habla ruso. Reclutado por las palomas, responde a los cuervos. Doble agente. Pantalón: cósmico (frambuesa). Traducción simultánea no disponible por motivos operativos.

## El equipo, afuera del universo

- [annatchijova](https://github.com/annatchijova) — concepto, motor de doctrina, juego, presentaciones, memes.
- [Dahgoth](https://github.com/Dahgoth) — lore, mitología del universo, la vena del cine absurdista soviético y del Runet de los 2000, el canal ruso.

Hecho con Google AI Studio (imágenes y editor de memes), Claude (guiones, presentaciones y juego) y pptxgenjs. Los memes fuente crudos viven fuera del repo.

---

## Correr local

```bash
npm install
npm run dev        # http://localhost:3000  (galería)
# el juego: http://localhost:3000/juego.html
```

## Build

```bash
npm run build      # genera dist/ (index.html = galería, juego.html = juego, assets/, *.pdf)
npm run preview
```

Es 100 % estático, sin servidor ni variables de entorno: `npm run build` produce `dist/` y Vercel sirve archivos. Ninguna dependencia se ejecuta en runtime.

## Deploy (Vercel)

Framework autodetectado: Vite. Output: `dist/`. Sin variables de entorno.

```bash
vercel login       # una vez
vercel --prod
```

## Estructura

```
├── index.html               # entry de la galería (Vite)
├── src/App.tsx              # editor de memes
├── public/
│   ├── juego.html           # el juego (HTML)
│   ├── juego.js              # el juego (lógica, local)
│   ├── curso.pdf            # Curso de Identificación de Espías
│   ├── curso-ru.pdf         # la clase en ruso
│   └── presentacion.pdf     # el expediente original
├── deck/                    # .pptx de ambos capítulos + guiones con tiempos
└── vite.config.ts
```

---

## Próximo nivel

- **Nivel 2: Expediente felino.** Clasificado. Los gatos ya ganaron.
- Un mundo en 3D. Motivos operativos impiden decir más.

## Licencia

Ver `LICENSE`.

---

*Redactado bajo vigilancia palomar. Si este documento llegó a usted, está siendo vigilado.*
