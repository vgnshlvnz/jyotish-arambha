"use client";

import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress";
import { useT } from "@/i18n/client";

export function QuizScoreBadge({ quizId }: { quizId: string }) {
  const t = useT();
  const [score, setScore] = useState<number | null>(null);
  useEffect(() => {
    const r = getProgress().quizResults[quizId];
    setScore(r ? r.score : null);
  }, [quizId]);

  if (score === null) return <span className="chip">{t.common.notTaken}</span>;
  const passed = score >= 0.7;
  return (
    <span className={"chip " + (passed ? "text-green-300 border-green-500/30" : "text-ink-200")}>
      {t.common.best}: {Math.round(score * 100)}%
    </span>
  );
}
