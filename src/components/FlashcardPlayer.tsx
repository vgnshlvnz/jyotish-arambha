"use client";

import { useEffect, useMemo, useState } from "react";
import { dueCards, reviewCard, cardStats } from "@/lib/progress";
import { useT } from "@/i18n/client";
import { format } from "@/i18n/dict";

type Card = { id: string; front: string; back: string; tags?: string[] };

export function FlashcardPlayer({ deckId, cards }: { deckId: string; cards: Card[] }) {
  const t = useT();
  const [queue, setQueue] = useState<Card[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(false);
  const [correct, setCorrect] = useState(0);

  const ids = useMemo(() => cards.map((c) => c.id), [cards]);

  useEffect(() => {
    const dueIds = new Set(dueCards(ids));
    const dueCardsList = cards.filter((c) => dueIds.has(c.id));
    const session = dueCardsList.length > 0 ? dueCardsList : cards;
    setQueue(session);
    setIdx(0);
    setFlipped(false);
    setDone(false);
    setCorrect(0);
  }, [cards, ids, deckId]);

  if (!queue) return <div className="text-ink-300">{t.flashcards.loading}</div>;
  if (queue.length === 0) return <div className="card text-center text-ink-200">{t.flashcards.noCards}</div>;

  if (done) {
    const stats = cardStats(ids);
    return (
      <div className="card text-center space-y-4">
        <div className="text-gold-300 text-5xl">🎉</div>
        <h2 className="font-serif text-2xl text-gold-200">{t.flashcards.sessionComplete}</h2>
        <p className="text-ink-200">
          {correct} / {queue.length} {t.flashcards.correctOutOf}
        </p>
        <div className="text-xs text-ink-300">
          {format(t.flashcards.masteredOf, { n: stats.mastered, total: stats.total })}
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => {
              setQueue(cards);
              setIdx(0);
              setFlipped(false);
              setDone(false);
              setCorrect(0);
            }}
            className="btn-ghost"
          >
            {t.flashcards.reviewAllAgain}
          </button>
        </div>
      </div>
    );
  }

  const card = queue[idx];

  const answer = (gotIt: boolean) => {
    reviewCard(card.id, gotIt);
    if (gotIt) setCorrect((c) => c + 1);
    if (idx + 1 >= queue.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setFlipped(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-ink-300">
        <span>{format(t.flashcards.cardOf, { i: idx + 1, n: queue.length })}</span>
        <span>{correct} {t.flashcards.correct}</span>
      </div>
      <div className="h-1 bg-ink-700 rounded-full overflow-hidden">
        <div className="h-full bg-gold-400" style={{ width: `${(idx / queue.length) * 100}%` }} />
      </div>

      <div
        className={"flip " + (flipped ? "flipped" : "")}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="flip-inner min-h-[260px]">
          <div className="flip-face card flex items-center justify-center text-center p-8 cursor-pointer">
            <p className="font-serif text-xl md:text-2xl text-gold-200">{card.front}</p>
          </div>
          <div className="flip-face flip-back card bg-ink-700 flex items-center justify-center text-center p-8 cursor-pointer">
            <p className="text-ink-100 text-base md:text-lg">{card.back}</p>
          </div>
        </div>
      </div>

      {!flipped && (
        <p className="text-center text-xs text-ink-300">{t.flashcards.clickToFlip}</p>
      )}
      {flipped && (
        <div className="flex justify-center gap-3 flex-wrap">
          <button onClick={() => answer(false)} className="btn bg-red-600/80 text-white hover:bg-red-600">
            {t.flashcards.gotItWrong}
          </button>
          <button onClick={() => answer(true)} className="btn bg-emerald-600/80 text-white hover:bg-emerald-600">
            {t.flashcards.gotItRight}
          </button>
        </div>
      )}
    </div>
  );
}
