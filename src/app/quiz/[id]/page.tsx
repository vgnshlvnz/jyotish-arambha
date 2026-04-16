import Link from "next/link";
import { notFound } from "next/navigation";
import { content, getQuizBank } from "@/lib/kb";
import { getQuizOverlay } from "@/lib/translations";
import { QuizPlayer } from "@/components/QuizPlayer";
import { getDict, getLang } from "@/i18n/server";
import { format } from "@/i18n/dict";

export function generateStaticParams() {
  return Object.keys(content.quiz)
    .filter((k) => k.startsWith("Q"))
    .map((id) => ({ id }));
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const t = getDict();
  const lang = getLang();
  const bank = getQuizBank(params.id);
  if (!bank) notFound();

  const translatedBank = getQuizOverlay(params.id, bank, lang);

  return (
    <div className="space-y-6">
      <header>
        <Link href="/quiz" className="text-sm text-ink-300 hover:text-gold-200">← {t.quiz.allQuizzes}</Link>
        <div className="flex items-center gap-3 mt-2 mb-1">
          <span className="chip-gold">{format(t.quiz.levelQuiz, { n: bank.level })}</span>
        </div>
        <h1 className="font-serif text-3xl text-gold-200">{params.id}</h1>
      </header>

      <QuizPlayer quizId={params.id} bank={translatedBank} />
    </div>
  );
}
