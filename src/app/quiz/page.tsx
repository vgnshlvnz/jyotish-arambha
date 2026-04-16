import Link from "next/link";
import { content } from "@/lib/kb";
import { QuizScoreBadge } from "@/components/QuizScoreBadge";
import { getDict } from "@/i18n/server";
import { format } from "@/i18n/dict";

export default function QuizIndex() {
  const t = getDict();
  const quizEntries = Object.entries(content.quiz as Record<string, any>)
    .filter(([k]) => k.startsWith("Q"))
    .sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.quiz.title}</h1>
        <p className="text-ink-300 mt-1">{t.quiz.description}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {quizEntries.map(([id, q]) => {
          const level = q.level;
          const mcqCount = q.mcq?.length ?? 0;
          const matchCount = q.match?.length ?? 0;
          const scenarioCount = q.scenario?.length ?? 0;
          const lvl = content.curriculum.levels.find((l) => l.level === level);
          return (
            <Link key={id} href={`/quiz/${id}`} className="card block">
              <div className="flex items-center justify-between mb-2">
                <span className="chip-gold">{format(t.quiz.levelQuiz, { n: level })}</span>
                <QuizScoreBadge quizId={id} />
              </div>
              <h2 className="text-lg font-semibold text-ink-100">{lvl?.title}</h2>
              <p className="text-xs text-ink-300 mt-1">
                {mcqCount} {t.quiz.mcq} · {matchCount} {t.quiz.matchSet} · {scenarioCount} {t.quiz.scenario}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
