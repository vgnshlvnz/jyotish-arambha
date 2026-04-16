"use client";

import { useMemo, useState } from "react";
import { saveQuizResult } from "@/lib/progress";
import { useT } from "@/i18n/client";

type MCQ = { q: string; choices: string[]; answer: number };
type MatchSet = { title: string; pairs: [string, string][] };
type Scenario = { q: string; answer: string };
type Bank = {
  level: number;
  pass_threshold: number;
  mcq?: MCQ[];
  match?: MatchSet[];
  scenario?: Scenario[];
};

export function QuizPlayer({ quizId, bank }: { quizId: string; bank: Bank }) {
  const t = useT();
  const mcq = bank.mcq ?? [];
  const match = bank.match ?? [];
  const scenarios = bank.scenario ?? [];

  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({});
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const matchPools = useMemo(() => {
    return match.map((m) => {
      const rights = m.pairs.map(([, r]) => r);
      return rights.slice().sort(() => Math.random() - 0.5);
    });
  }, [match]);

  const totalMcq = mcq.length;
  const totalMatch = match.reduce((a, m) => a + m.pairs.length, 0);
  const total = totalMcq + totalMatch;

  const scoreMcq = submitted
    ? mcq.reduce((acc, q, i) => acc + (mcqAnswers[i] === q.answer ? 1 : 0), 0)
    : 0;

  const scoreMatch = submitted
    ? match.reduce((acc, m, mi) => {
        return (
          acc +
          m.pairs.reduce((a, [left, right]) => {
            const picked = matchAnswers[`${mi}:${left}`];
            return a + (picked === right ? 1 : 0);
          }, 0)
        );
      }, 0)
    : 0;

  const totalScore = scoreMcq + scoreMatch;
  const fraction = total > 0 ? totalScore / total : 0;
  const passed = fraction >= (bank.pass_threshold ?? 0.7);

  const submit = () => {
    setSubmitted(true);
    const correct = scoreMcq + scoreMatch;
    saveQuizResult({
      quizId,
      score: total > 0 ? correct / total : 0,
      total,
      correct,
      takenAt: new Date().toISOString(),
    });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {submitted && (
        <div className={"card text-center " + (passed ? "border-green-500/50" : "border-red-500/50")}>
          <div className="text-4xl mb-2">{passed ? "✨" : "📚"}</div>
          <h2 className="font-serif text-2xl text-gold-200">
            {Math.round(fraction * 100)}%
          </h2>
          <p className="text-ink-200 mt-1">
            {totalScore} / {total} {t.quiz.correct} · {passed ? t.quiz.passed : t.quiz.needMore}
          </p>
        </div>
      )}

      {mcq.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-serif text-xl text-gold-200">{t.quiz.multipleChoice}</h2>
          {mcq.map((q, i) => (
            <div key={i} className="card">
              <p className="text-ink-100 mb-3">{i + 1}. {q.q}</p>
              <div className="grid gap-2">
                {q.choices.map((c, ci) => {
                  const picked = mcqAnswers[i] === ci;
                  const isCorrect = q.answer === ci;
                  const show = submitted;
                  const cls = !show
                    ? picked
                      ? "border-gold-400 bg-gold-400/10"
                      : "border-ink-500 bg-ink-700 hover:border-gold-400/50"
                    : isCorrect
                    ? "border-green-500 bg-green-500/10 text-green-200"
                    : picked
                    ? "border-red-500 bg-red-500/10 text-red-200"
                    : "border-ink-600 bg-ink-800 text-ink-300";
                  return (
                    <button
                      key={ci}
                      disabled={submitted}
                      onClick={() => setMcqAnswers((m) => ({ ...m, [i]: ci }))}
                      className={"text-left px-4 py-2 rounded-lg border transition-colors " + cls}
                    >
                      {String.fromCharCode(65 + ci)}. {c}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      )}

      {match.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-serif text-xl text-gold-200">{t.quiz.match}</h2>
          {match.map((m, mi) => (
            <div key={mi} className="card">
              <p className="text-ink-100 mb-3 font-semibold">{m.title}</p>
              <div className="space-y-2">
                {m.pairs.map(([left, right], pi) => {
                  const key = `${mi}:${left}`;
                  const picked = matchAnswers[key] ?? "";
                  const show = submitted;
                  const isCorrect = show && picked === right;
                  return (
                    <div key={pi} className="flex items-center gap-3">
                      <span className="flex-1 text-ink-200">{left}</span>
                      <span className="text-ink-400">→</span>
                      <select
                        value={picked}
                        disabled={submitted}
                        onChange={(e) => setMatchAnswers((m) => ({ ...m, [key]: e.target.value }))}
                        className={
                          "flex-1 bg-ink-700 border rounded-md px-2 py-1 text-ink-100 " +
                          (show
                            ? isCorrect
                              ? "border-green-500"
                              : "border-red-500"
                            : "border-ink-500")
                        }
                      >
                        <option value="">{t.quiz.selectOption}</option>
                        {matchPools[mi].map((opt, oi) => (
                          <option key={oi} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {show && !isCorrect && (
                        <span className="text-xs text-green-400 ml-2">({right})</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      )}

      {scenarios.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-serif text-xl text-gold-200">{t.quiz.scenarioPractice}</h2>
          <p className="text-xs text-ink-300">{t.quiz.scenarioNote}</p>
          {scenarios.map((s, si) => (
            <details key={si} className="card cursor-pointer">
              <summary className="text-ink-100 font-medium">{s.q}</summary>
              <p className="mt-3 text-ink-200">{s.answer}</p>
            </details>
          ))}
        </section>
      )}

      {!submitted && (
        <div className="flex justify-center">
          <button onClick={submit} className="btn-gold">{t.quiz.submitQuiz}</button>
        </div>
      )}

      {submitted && (
        <div className="flex justify-center gap-3">
          <button
            onClick={() => {
              setSubmitted(false);
              setMcqAnswers({});
              setMatchAnswers({});
            }}
            className="btn-ghost"
          >
            {t.quiz.retake}
          </button>
        </div>
      )}
    </div>
  );
}
