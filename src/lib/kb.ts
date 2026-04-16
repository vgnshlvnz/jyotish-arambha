// Static imports from the ingested JSON knowledge base.
// These files live in src/data/ and are copied from ../app/kb and ../app/content.
// Run `npm run sync-data` to refresh from the canonical KB.

import grahas from "@/data/kb/grahas.json";
import rasis from "@/data/kb/rasis.json";
import bhavas from "@/data/kb/bhavas.json";
import nakshatras from "@/data/kb/nakshatras.json";
import d9 from "@/data/kb/d9_navamsa.json";
import fundamentals from "@/data/kb/fundamentals.json";
import glossary from "@/data/kb/glossary.json";
import validation from "@/data/kb/validation.json";

import curriculum from "@/data/content/curriculum.json";
import flashcards from "@/data/content/flashcards.json";
import quiz from "@/data/content/quiz.json";
import exercises from "@/data/content/exercises.json";

import manifest from "@/data/manifest.json";

export const kb = {
  grahas,
  rasis,
  bhavas,
  nakshatras,
  d9,
  fundamentals,
  glossary,
  validation,
};

export const content = {
  curriculum,
  flashcards,
  quiz,
  exercises,
};

export { manifest };

export type CurriculumLevel = (typeof curriculum)["levels"][number];
export type Lesson = CurriculumLevel["lessons"][number];
export type Principle = (typeof fundamentals)["principles"][number];
export type GlossaryTerm = (typeof glossary)["terms"][number];

export function getLevel(levelNum: number): CurriculumLevel | undefined {
  return curriculum.levels.find((l) => l.level === levelNum);
}

export function getFlashcardDeck(deckId: string) {
  return (flashcards.decks as Record<string, { level: number; title: string; cards: { id: string; front: string; back: string; tags?: string[] }[] }>)[deckId];
}

export function getQuizBank(quizId: string) {
  return (quiz as Record<string, any>)[quizId];
}
