import Link from "next/link";
import { notFound } from "next/navigation";
import { getLevel, content } from "@/lib/kb";
import { LessonToggle } from "@/components/LessonToggle";
import { getDict, getLang } from "@/i18n/server";
import { format } from "@/i18n/dict";

export function generateStaticParams() {
  return content.curriculum.levels.map((l) => ({ level: String(l.level) }));
}

export default function LevelPage({ params }: { params: { level: string } }) {
  const t = getDict();
  const lang = getLang();
  const levelNum = parseInt(params.level, 10);
  const lvl = getLevel(levelNum);
  if (!lvl) notFound();

  return (
    <div className="space-y-6">
      <header>
        <div className="flex items-center gap-2 mb-2">
          <Link href="/learn" className="text-ink-300 hover:text-gold-200 text-sm">← {t.learn.curriculum}</Link>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <span className="chip-gold">{t.common.level} {lvl.level}</span>
          <span className="text-xs text-ink-300">{t.common.source}: {lvl.source}</span>
        </div>
        <h1 className="font-serif text-3xl text-gold-200">{lvl.title}</h1>
        <p className="text-ink-300 mt-1">{lvl.subtitle}</p>
      </header>

      {lang === "ta" && (
        <div className="card border-gold-400/30 bg-gold-400/5 text-sm text-ink-200">
          {t.common.contentInEnglishNote}
        </div>
      )}

      <div className="grid gap-4">
        {lvl.lessons.map((lesson, idx) => (
          <article key={lesson.id} className="card prose-jyotish">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-ink-300 font-mono">{lesson.id}</div>
                <h2 className="font-serif text-xl text-gold-200 mt-0">{idx + 1}. {lesson.title}</h2>
              </div>
              <LessonToggle lessonId={lesson.id} />
            </div>
            <ul>
              {lesson.key_points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="flex gap-3 pt-4 flex-wrap">
        {(lvl as any).quiz_ref && (
          <Link href={`/quiz/${(lvl as any).quiz_ref}`} className="btn-gold">
            {format(t.learn.takeQuiz, { n: lvl.level })}
          </Link>
        )}
        {(lvl as any).flashcards_ref && (
          <Link href={`/flashcards/${(lvl as any).flashcards_ref}`} className="btn-ghost">
            {t.learn.reviewCards}
          </Link>
        )}
      </section>
    </div>
  );
}
