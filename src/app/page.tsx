import Link from "next/link";
import { manifest, content } from "@/lib/kb";
import { getDict, getLang } from "@/i18n/server";
import { pickLevelTitle, pickLevelSubtitle } from "@/i18n/dict";

export default function HomePage() {
  const t = getDict();
  const lang = getLang();
  const counts = (manifest as any).entity_counts;

  return (
    <div className="space-y-12">
      <header className="text-center py-12">
        <h1 className="font-serif text-5xl md:text-6xl text-gold-200 mb-4">{t.home.title}</h1>
        <p className="text-ink-300 text-lg">{t.home.tagline}</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link href="/learn" className="btn-gold">{t.home.startLearning}</Link>
          <Link href="/flashcards" className="btn-ghost">{t.home.reviewFlashcards}</Link>
        </div>
      </header>

      <section>
        <h2 className="font-serif text-2xl text-gold-200 mb-4">{t.home.whatYouWillLearn}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {content.curriculum.levels.map((lvl) => (
            <Link key={lvl.level} href={`/learn/${lvl.level}`} className="card group">
              <div className="flex items-center justify-between mb-2">
                <span className="chip-gold">{t.common.level} {lvl.level}</span>
                <span className="text-xs text-ink-300">{lvl.estimated_minutes} {t.common.min}</span>
              </div>
              <h3 className="text-lg font-semibold text-ink-100 group-hover:text-gold-200 transition-colors">
                {pickLevelTitle(lvl.level, lang)}
              </h3>
              <p className="text-sm text-ink-300 mt-1">{pickLevelSubtitle(lvl.level, lang)}</p>
              <div className="mt-3 text-xs text-ink-300">
                {lvl.lessons.length} {t.common.lessons}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-gold-200 mb-4">{t.home.knowledgeBase}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label={t.home.grahas} value={counts.grahas} href="/reference/grahas" />
          <Stat label={t.home.rasis} value={counts.rasis} href="/reference/rasis" />
          <Stat label={t.home.bhavas} value={counts.bhavas} href="/reference/bhavas" />
          <Stat label={t.home.nakshatras} value={counts.nakshatras} href="/reference/nakshatras" />
          <Stat label={t.home.principles} value={counts.fundamental_principles} href="/fundamentals" />
          <Stat label={t.home.glossaryCount} value={counts.glossary_terms} href="/glossary" />
          <Stat label={t.home.flashcardsCount} value={counts.flashcards} href="/flashcards" />
          <Stat label={t.home.quizItems} value={counts.quiz_mcq + counts.quiz_scenario} href="/quiz" />
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, href }: { label: string; value: number | string; href: string }) {
  return (
    <Link href={href} className="card text-center">
      <div className="text-2xl font-serif text-gold-300">{value}</div>
      <div className="text-xs uppercase tracking-wider text-ink-300 mt-1">{label}</div>
    </Link>
  );
}
