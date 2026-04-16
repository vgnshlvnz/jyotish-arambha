"use client";

// Lightweight localStorage progress tracker.
// Stores per-level completion, per-quiz best score, and flashcard SRS state.

const KEY = "jyotish-arambha:progress:v1";

export type QuizResult = {
  quizId: string;
  score: number; // 0..1
  total: number;
  correct: number;
  takenAt: string; // ISO
};

export type CardState = {
  // Simple Leitner-style box (0-4). 0 = unseen, 4 = mastered.
  box: number;
  nextReview: string; // ISO
  lapses: number;
};

export type Progress = {
  lessonsCompleted: Record<string, boolean>; // lesson id → true
  quizResults: Record<string, QuizResult>;
  cards: Record<string, CardState>; // card id → state
  lastVisited?: string;
};

const empty: Progress = {
  lessonsCompleted: {},
  quizResults: {},
  cards: {},
};

function read(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

function write(p: Progress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(p));
}

export function getProgress(): Progress {
  return read();
}

export function markLesson(lessonId: string, done = true) {
  const p = read();
  p.lessonsCompleted[lessonId] = done;
  write(p);
}

export function saveQuizResult(r: QuizResult) {
  const p = read();
  const prev = p.quizResults[r.quizId];
  if (!prev || r.score > prev.score) p.quizResults[r.quizId] = r;
  write(p);
}

export function isLevelUnlocked(levelNum: number): boolean {
  if (levelNum === 1) return true;
  const p = read();
  // To unlock level N, need ≥ 0.7 on quiz of level N-1
  const prev = p.quizResults[`Q${levelNum - 1}`];
  return !!prev && prev.score >= 0.7;
}

export function levelProgress(levelNum: number, lessonIds: string[]): number {
  const p = read();
  if (lessonIds.length === 0) return 0;
  const done = lessonIds.filter((id) => p.lessonsCompleted[id]).length;
  return done / lessonIds.length;
}

// --- SRS (Leitner) ---
// Box 0: review immediately
// Box 1: +1 day
// Box 2: +3 days
// Box 3: +7 days
// Box 4: +21 days (mastered)
const BOX_INTERVALS_DAYS = [0, 1, 3, 7, 21];

export function reviewCard(cardId: string, correct: boolean) {
  const p = read();
  const now = Date.now();
  const prev = p.cards[cardId] ?? { box: 0, nextReview: new Date(now).toISOString(), lapses: 0 };
  const nextBox = correct ? Math.min(prev.box + 1, 4) : 0;
  const lapses = correct ? prev.lapses : prev.lapses + 1;
  const nextReview = new Date(now + BOX_INTERVALS_DAYS[nextBox] * 86400_000).toISOString();
  p.cards[cardId] = { box: nextBox, nextReview, lapses };
  write(p);
}

export function dueCards(cardIds: string[]): string[] {
  const p = read();
  const now = Date.now();
  return cardIds.filter((id) => {
    const s = p.cards[id];
    if (!s) return true; // unseen = due
    return new Date(s.nextReview).getTime() <= now;
  });
}

export function cardStats(cardIds: string[]) {
  const p = read();
  let unseen = 0, learning = 0, mastered = 0;
  for (const id of cardIds) {
    const s = p.cards[id];
    if (!s) unseen++;
    else if (s.box >= 4) mastered++;
    else learning++;
  }
  return { unseen, learning, mastered, total: cardIds.length };
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
