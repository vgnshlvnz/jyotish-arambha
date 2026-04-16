import type { Lang } from "@/i18n/dict";

import flashcardsTa from "@/data/translations/ta/flashcards.json";
import lessonsTa from "@/data/translations/ta/lessons.json";
import quizTa from "@/data/translations/ta/quiz.json";
import glossaryTa from "@/data/translations/ta/glossary.json";
import fundamentalsTa from "@/data/translations/ta/fundamentals.json";

type FlashcardOverlay = Record<string, { front: string; back: string }>;
type LessonsOverlay = Record<string, string[]>;
type GlossaryOverlay = Record<string, string>;
type FundamentalsOverlay = Record<string, { title: string; rule: string; why_it_matters: string }>;

export function getFlashcardText(
  cardId: string,
  original: { front: string; back: string },
  lang: Lang,
): { front: string; back: string } {
  if (lang !== "ta") return original;
  const t = (flashcardsTa as FlashcardOverlay)[cardId];
  return t ?? original;
}

export function getLessonKeyPoints(
  lessonId: string,
  original: string[],
  lang: Lang,
): string[] {
  if (lang !== "ta") return original;
  const t = (lessonsTa as LessonsOverlay)[lessonId];
  return t && t.length > 0 ? t : original;
}

export function getQuizOverlay(quizId: string, original: any, lang: Lang): any {
  if (lang !== "ta") return original;
  const t = (quizTa as Record<string, any>)[quizId];
  if (!t) return original;
  return {
    ...original,
    mcq: t.mcq ?? original.mcq,
    match: t.match ?? original.match,
    scenario: t.scenario ?? original.scenario,
  };
}

export function getGlossaryMeaning(term: string, original: string, lang: Lang): string {
  if (lang !== "ta") return original;
  return (glossaryTa as GlossaryOverlay)[term] ?? original;
}

export function getFundamental(
  id: string,
  original: { title: string; rule: string; why_it_matters: string },
  lang: Lang,
): { title: string; rule: string; why_it_matters: string } {
  if (lang !== "ta") return original;
  const t = (fundamentalsTa as FundamentalsOverlay)[id];
  return t ?? original;
}
