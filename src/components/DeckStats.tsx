"use client";

import { useEffect, useState } from "react";
import { cardStats, dueCards } from "@/lib/progress";
import { useT } from "@/i18n/client";

export function DeckStats({ cardIds }: { cardIds: string[] }) {
  const t = useT();
  const [stats, setStats] = useState<{ unseen: number; learning: number; mastered: number; total: number; due: number } | null>(null);

  useEffect(() => {
    const s = cardStats(cardIds);
    const due = dueCards(cardIds).length;
    setStats({ ...s, due });
  }, [cardIds]);

  if (!stats) return <div className="mt-3 h-4" />;

  return (
    <div className="mt-3 space-y-2">
      <div className="flex gap-3 text-xs">
        <span className="text-ink-300">{t.common.unseen}: <span className="text-ink-100">{stats.unseen}</span></span>
        <span className="text-ink-300">{t.common.learning}: <span className="text-ink-100">{stats.learning}</span></span>
        <span className="text-ink-300">{t.common.mastered}: <span className="text-gold-300">{stats.mastered}</span></span>
      </div>
      {stats.due > 0 && (
        <div className="text-xs text-gold-300">⏰ {stats.due} {t.common.dueNow}</div>
      )}
      <div className="h-1.5 bg-ink-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold-400 transition-all"
          style={{ width: `${(stats.mastered / stats.total) * 100}%` }}
        />
      </div>
    </div>
  );
}
