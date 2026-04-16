# Jyotish Ārambha — Web App

Next.js 14 + TailwindCSS learning app built on top of the Phase 1 knowledge base at `../app/`.

## Quick start

```bash
cd web
npm install
npm run dev
# → http://localhost:3000
```

Production build:

```bash
npm run build && npm run start
```

## Routes

| Route | What it shows |
|---|---|
| `/` | Dashboard with 7 level tiles and KB stat tiles |
| `/learn` | Curriculum overview with lock/unlock badges |
| `/learn/[1-7]` | Lesson viewer for each level (53 lessons total) with per-lesson completion toggle |
| `/flashcards` | 7 deck selector with Leitner-box progress |
| `/flashcards/[FC1-FC7]` | Flip-card player with spaced repetition |
| `/quiz` | Quiz bank selector with best scores |
| `/quiz/[Q1-Q7]` | Auto-graded MCQ + match + self-graded scenarios |
| `/glossary` | 114 canonical terms A–Z |
| `/fundamentals` | 20 core principles grouped by category |
| `/reference/grahas` | 9 planets with full detail |
| `/reference/rasis` | 12 signs with classifications |
| `/reference/bhavas` | 12 houses with Kendra/Trikona/Dusthana chips |
| `/reference/nakshatras` | 27 nakshatras with 108 pada→navamsa table |

## How it works

- **Data source** — `src/data/{kb,content}/*.json` are copies of the canonical KB at `../app/`. Run `npm run sync-data` to refresh.
- **Server components** render KB content statically at build time (fully SSG — 34 pages).
- **Client components** handle progress (flashcards, quizzes, lesson toggles, unlock badges). Progress lives in `localStorage` under key `jyotish-arambha:progress:v1`.
- **SRS** is Leitner-style with boxes 0–4 and intervals `[0, 1, 3, 7, 21]` days. Correct answers promote; wrong answers reset to box 0.
- **Quiz pass threshold** is 70%. Passing Level N unlocks Level N+1.

## Architecture

```
web/
├── src/
│   ├── app/              ← Next App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx      ← home
│   │   ├── learn/        ← curriculum + level pages
│   │   ├── flashcards/
│   │   ├── quiz/
│   │   ├── reference/    ← grahas / rasis / bhavas / nakshatras
│   │   ├── glossary/
│   │   └── fundamentals/
│   ├── components/       ← Nav, players, badges
│   ├── lib/
│   │   ├── kb.ts         ← typed imports of all JSON
│   │   └── progress.ts   ← localStorage + SRS
│   └── data/             ← copies of app/kb and app/content
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Theme

Dark ink background with gold-accented text and borders. Tailwind custom palette:
- `ink-{100..900}` for neutrals
- `gold-{50..700}` for accents

`.card`, `.btn-gold`, `.btn-ghost`, `.chip`, `.chip-gold` utility classes in `globals.css`.

## Security notes

`next@14.2.35` is pinned because Next 16 requires Node 20+ (this machine has Node 18.19). Remaining CVEs relate to production self-hosted deployments (image-optimizer DoS, rewrite smuggling) and don't affect local learning use. Upgrade Node + Next before any public deployment.

## Languages

The app ships with **English** and **தமிழ் (Tamil)** UI. Use the `EN | தமிழ்` switcher in the top-right of the nav bar. Selection is stored in a cookie (`jyotish-lang`, 1-year expiry).

**What's translated:**
- All UI chrome (nav, buttons, headings, labels, badges, flashcard/quiz player)
- Entity names on reference pages: 9 grahas, 12 rasis, 12 bhavas, 27 nakshatras render in Tamil script (மேஷம், சூரியன், தர்ம பாவம் etc.)
- Page descriptions and section headers

**Not yet translated (English fallback):**
- Lesson content (`key_points` from curriculum.json) — 53 lessons
- Flashcard front/back text — 124 cards
- Quiz question text — 71 MCQs + scenarios
- Glossary term definitions
- Fundamentals rule text

Tamil pages show a note at the top of each lesson explaining that course content is still in English and translation is coming. This lets the app ship usable Tamil navigation without waiting for a full content translation pass.

**Adding more Tamil translations:** Edit `src/i18n/dict.ts`. The `dict` object has `en` and `ta` branches with matching keys; add or edit strings as needed. The `names` map at the bottom of the file handles entity-name translation.

## What's next (Phase 3)

- **Chart engine** — Swiss Ephemeris integration for D1 + D9 chart generation from DOB/time/place
- **Chart renderers** — South-Indian (square with fixed signs) + North-Indian (diamond with fixed houses)
- **i18n** — The content is already key-structured for future Tamil translation
