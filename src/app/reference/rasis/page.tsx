import { kb } from "@/lib/kb";
import { getDict, getLang } from "@/i18n/server";
import { pickName } from "@/i18n/dict";

const elementColor: Record<string, string> = {
  fire: "text-orange-300 border-orange-400/30",
  earth: "text-amber-300 border-amber-400/30",
  air: "text-sky-300 border-sky-400/30",
  water: "text-cyan-300 border-cyan-400/30",
};

export default function RasisPage() {
  const t = getDict();
  const lang = getLang();
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.reference.rasisTitle}</h1>
        <p className="text-ink-300 mt-1">{t.reference.rasisDescription}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {kb.rasis.rasis.map((r: any) => {
          const displayName = pickName("rasis", r.name, lang);
          const displayLord = pickName("grahas", r.lord, lang);
          return (
            <article key={r.num} className="card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="font-serif text-xl text-gold-200">
                    {r.num}. {displayName} <span className="text-gold-400/70">{r.symbol}</span>
                  </h2>
                  <div className="text-xs text-ink-300">
                    {lang === "ta" ? r.name : r.sanskrit} · {r.tamil}
                  </div>
                </div>
                <div className="text-right text-xs text-ink-300">
                  <div>{r.start_deg}° – {r.end_deg}°</div>
                  <div className="text-gold-300">{t.reference.lord}: {displayLord}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={"chip border " + (elementColor[r.element] ?? "")}>{r.element}</span>
                <span className="chip">{r.modality}</span>
                <span className="chip">{r.purushartha}</span>
                <span className="chip">{r.gender}</span>
              </div>
              <p className="text-sm text-ink-200 mb-2">{r.description}</p>
              <div className="text-xs text-ink-300 space-y-0.5">
                <div><span className="text-ink-400">{t.reference.body}: </span>{r.kalapurusha_body}</div>
                <div><span className="text-ink-400">{t.reference.keywords}: </span>{r.key_words?.join(" · ")}</div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
