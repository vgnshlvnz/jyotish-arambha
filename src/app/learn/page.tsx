import Link from "next/link";
import { content } from "@/lib/kb";
import { LevelUnlockBadge } from "@/components/LevelUnlockBadge";
import { getDict } from "@/i18n/server";

export default function LearnIndex() {
  const t = getDict();
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.learn.title}</h1>
        <p className="text-ink-300 mt-1">{t.learn.description}</p>
      </header>

      <ol className="space-y-3">
        {content.curriculum.levels.map((lvl) => (
          <li key={lvl.level}>
            <Link href={`/learn/${lvl.level}`} className="card block">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="chip-gold">{t.common.level} {lvl.level}</span>
                    <LevelUnlockBadge levelNum={lvl.level} />
                  </div>
                  <h2 className="text-xl font-semibold text-ink-100">{lvl.title}</h2>
                  <p className="text-sm text-ink-300 mt-0.5">{lvl.subtitle}</p>
                </div>
                <div className="text-right text-xs text-ink-300 shrink-0">
                  <div>{lvl.lessons.length} {t.common.lessons}</div>
                  <div>≈ {lvl.estimated_minutes} {t.common.min}</div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {lvl.lessons.slice(0, 3).map((lesson) => (
                  <span key={lesson.id} className="chip">{lesson.title}</span>
                ))}
                {lvl.lessons.length > 3 && (
                  <span className="chip">+{lvl.lessons.length - 3} {t.common.more}</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ol>

      <section className="card bg-ink-700/40 border-gold-400/20">
        <h2 className="font-serif text-xl text-gold-200 mb-2">{t.learn.sevenDayCrash}</h2>
        <p className="text-sm text-ink-300 mb-3">{t.learn.sevenDayDescription}</p>
        <ol className="space-y-1 text-sm">
          {content.curriculum.crash_course_7_day.days.map((d: any) => (
            <li key={d.day} className="flex justify-between text-ink-200">
              <span>{t.learn.day} {d.day}: {d.focus}</span>
              <span className="text-ink-300">{d.time_minutes} {t.common.min}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
