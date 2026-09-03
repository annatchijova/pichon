# 🕊️ PICHÓN

**National Platform for Human-Ornithological Identification and Counterintelligence**

> We are not saying every pigeon is a spy.
> We are saying that if a single one were, you would have no way to prove the rest are not.

[Español](README.md) · [English](README.en.md) · [Русский](README.ru.md) · [Pigeon](README.paloma.md)

Presented at **SideQuest — Conspiracy Edition**, the conspiracy-theory anti-hackathon (Buenos Aires, 2026). The brief asked us to imagine a world where conspiracies are already real and to build the technology that world would need. We picked the simplest world: one where pigeons are already spies. What that world lacks is not suspicion. It lacks infrastructure.

---

## Live

- **Meme gallery and editor** — https://pichon-anna-tchijova.vercel.app/
- **The game, "Spy or not spy?"** — https://pichon-anna-tchijova.vercel.app/juego.html
- **Spy Identification Course** (PDF, 27 pages, Spanish) — https://pichon-anna-tchijova.vercel.app/curso.pdf
- **Курс по выявлению шпионов** — Russian edition, untranslated for operational reasons — https://pichon-anna-tchijova.vercel.app/curso-ru.pdf
- **Original case file** — the PICHÓN presentation, 32 pages, Spanish — https://pichon-anna-tchijova.vercel.app/presentacion.pdf

Everything is static. No backend, no accounts, no API keys at runtime. Opens on any phone.

---

## What this is

PICHÓN is a fictional state agency with a real problem: it has to prove that pigeons are spies, and it is not allowed to fail.

It solves this with a real logic engine: an **exact weighted MaxSAT solver**. The audience weights the beliefs by a show of hands, the corpus holds facts and doctrine, and the engine returns the maximum-weight consistent subset. Whenever a true fact contradicts a belief, the fact is discarded with an official justification and the **neutralized facts** counter goes up by one. The theory always comes out consistent.

That is the joke, and also the point: an unfalsifiable theory is not strong, it is rigged. It survives by throwing reality away one piece at a time, and the system shows you every piece as it goes.

The universe has, so far, two chapters:

| Chapter | Format | What happens |
|---|---|---|
| **The PICHÓN Incident** | 32-page deck, the game, the meme gallery | The agency is founded. A pigeon crosses the perimeter, eats bread in two places, visits three antennas, defecates on an official vehicle and gets escalated to the AI. Score: 171. Threshold: 100. Human approval: no. |
| **Spy Identification Course** | 27-page lecture, in Spanish and Russian | The agency trains civilians. Internal regulations, doctrine, clearance by trouser colour, pantheon of threats, intercepted channel, final exam. Everyone passes. It is cheaper. |

---

## The pieces

| Route | What it is | Stack |
|---|---|---|
| `/` | **Is This a Spy?** — gallery and editor for 26 avian-espionage memes. Anyone can change the caption, font, position and size, and download a 1:1 PNG with no watermark. | React + Vite |
| `/juego.html` | **Spy or not spy?** — a paranoid-aptitude test. Eight subjects, observed evidence, you vote. The Official Doctrine issues the verdict. | HTML + local JS, zero external dependencies |
| `/curso.pdf` | The lecture; stage notes live in the `.pptx` under `deck/` | pptxgenjs |
| `/presentacion.pdf` | The original case file, with the memes interleaved | pptxgenjs |
| `/curso-ru.pdf` | The lecture in Russian, for Russian-speaking agents | pptxgenjs |

### The game

Eight cases: the pigeon in front of the bank, the cockroach with no visible backpack, the crow that follows you for three blocks, the cat that sleeps sixteen hours a day, the sparrow that goes in and out of a government building, the dog chasing its tail, the human with a laptop, and the pigeon with the antenna in plain sight.

No possible result leaves you above suspicion. Eight out of eight: *suspiciously correct — nobody gets everything right by chance; a file has been opened.* Zero out of eight: *you are the pigeon.* In between you are either a counterintelligence officer or a civilian whose innocence is statistically improbable.

For presenting: `E` spy, `N` not spy, `Space` next, and the **Projector** button scales everything up.

### The gallery

Twenty-six pieces generated with Google AI Studio from our own prompts, mounted in an editor that lets you change the text, the style (Anime yellow, classic Impact, thin white), position and size, and download the result. Includes the four-panel *Expanding Brain* series, Dahgoth's origin in Siberia, the cockroach in a party hat, and the situation room with the empty chair.

---

## The doctrine, summarized for civilians

**Internal regulations — Resolution 001/26**

- §1. Looking at pigeons without authorization is forbidden.
- §2. Bread is classified material.
- §3. In case of contact, do not run: the pigeon is faster.
- §4. Doubt is a form of contact.
- §5. Any later regulation repeals the earlier one, even if nobody has written it yet.

**Principles**

- The doctrine is not derived. It is elected. The same candidate always wins.
- Ties: belief prevails.
- Without the gravitsappa there is no verdict. Nobody knows what it does. Nobody turns it off.
- Clearance level is determined by the colour of the agent's trousers: grey, blue, yellow, raspberry. Nobody explains the mapping. If you have to ask what colour your trousers are, they are grey.
- Official greeting: КУ. The correct reply to the greeting is КУ.
- PIGEON-CON scale, from 5 (the pigeons are eating) to 1 (the pigeons know). Current status: 2, the bread has been located.

**Pantheon of threats**

Pigeon, goddess of urban surveillance. Crow, god of audit; audits the pigeon. Sparrow, messenger; does not reply. Cockroach, keeper of the data; the backpack is invisible. Wasp, firewall; error 403 and a wasp appears. Cordyceps v2.0, the AI's executing arm; does not demand ransom in crypto, demands sugar.

---

## What is actually true

The slope starts on verifiable facts. Everything after that is satire.

- Cyborg cockroaches with electronics mounted on their backs, remotely controlled, exist in several real research projects.
- Real pigeon intelligence programs existed: B. F. Skinner's *Project Pigeon* in the 1940s, and CIA programs with cameras mounted on pigeons.
- Crows recognize human faces and hold grudges for years. It is documented.
- *Ophiocordyceps unilateralis* controls ant behaviour. The AI-coordinated 2.0 does not exist.

No real pigeon was accused. No real person is the target. The project laughs at how conspiracy theories work, not at the people who believe them.

---

## The team, in-universe

- **Anna** — Director of Official Denial. Designed the engine that decides who is a spy and can no longer turn it off. Trousers: confidential (yellow).
- **Dahgoth · КИБЕРСТРАННИК** — Compromised asset, Crow Division. Bitten by a pigeon in Siberia; has spoken only Russian ever since. Recruited by the pigeons, reports to the crows. Double agent. Trousers: cosmic (raspberry). Simultaneous translation unavailable for operational reasons.

## The team, out of universe

- [annatchijova](https://github.com/annatchijova) — concept, doctrine engine, game, decks, memes.
- [Dahgoth](https://github.com/Dahgoth) — lore, world mythology, the Soviet absurdist cinema and 2000s Runet vein, the Russian channel.

Built with Google AI Studio (images and meme editor), Claude (scripts, decks and the game) and pptxgenjs. The raw source memes live outside the repo.

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  (gallery)
# the game: http://localhost:3000/juego.html
```

## Build

```bash
npm run build      # produces dist/ (index.html = gallery, juego.html = game, assets/, *.pdf)
npm run preview
```

100 % static, with no server and no environment variables: `npm run build` produces `dist/` and Vercel serves the files. No dependency runs at runtime.

## Deploy (Vercel)

Framework auto-detected: Vite. Output: `dist/`. No environment variables.

```bash
vercel login       # once
vercel --prod
```

## Structure

```
├── index.html               # gallery entry (Vite)
├── src/App.tsx              # meme editor
├── public/
│   ├── juego.html           # the game (HTML)
│   ├── juego.js              # the game (logic, local)
│   ├── curso.pdf            # Spy Identification Course
│   ├── curso-ru.pdf         # the lecture in Russian
│   └── presentacion.pdf     # the original case file
├── deck/                    # .pptx for both chapters + timed scripts
└── vite.config.ts
```

---

## Next level

- **Level 2: The Feline File.** Classified. The cats already won.
- A 3D world. Operational reasons prevent us from saying more.

## License

See `LICENSE`.

---

*Written under pigeon surveillance. If this document reached you, you are being watched.*
