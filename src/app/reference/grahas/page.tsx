import { kb } from "@/lib/kb";
import { getDict, getLang } from "@/i18n/server";
import { pickName, pickProp } from "@/i18n/dict";

export default function GrahasPage() {
  const t = getDict();
  const lang = getLang();
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.reference.grahasTitle}</h1>
        <p className="text-ink-300 mt-1">{t.reference.grahasDescription}</p>
      </header>

      <div className="grid gap-4">
        {kb.grahas.planets.map((p: any) => {
          const displayName = pickName("grahas", p.english.split(" ")[0], lang);
          return (
            <article key={p.id} className="card">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <h2 className="font-serif text-2xl text-gold-200">
                  {p.symbol} {displayName}
                  {lang === "ta" && <span className="ml-2 text-sm text-ink-400">({p.english})</span>}
                </h2>
                <div className="text-xs text-ink-300 flex flex-wrap gap-1">
                  <span className="chip">{pickProp("gender", p.gender, lang)}</span>
                  <span className="chip">{pickProp("guna", p.guna, lang)}</span>
                  {p.element && <span className="chip">{pickProp("element", p.element, lang)}</span>}
                  {p.varna && <span className="chip">{pickProp("varna", p.varna, lang)}</span>}
                </div>
              </div>
              <div className="text-sm text-ink-300 mb-3">
                {p.sanskrit?.join(", ")}{p.tamil ? ` · ${p.tamil}` : ""}
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-ink-400 text-xs uppercase mb-1">{t.reference.signLordship}</div>
                  <div className="text-ink-100">
                    {(p.owns ?? []).map((s: string) => pickName("rasis", s, lang)).join(", ")}
                  </div>
                  {p.exaltation && (
                    <div className="mt-2">
                      <span className="text-ink-400 text-xs uppercase">{t.reference.exaltation}: </span>
                      <span className="text-gold-300">{pickName("rasis", p.exaltation.sign, lang)} {p.exaltation.deep_deg}°</span>
                    </div>
                  )}
                  {p.debilitation && (
                    <div>
                      <span className="text-ink-400 text-xs uppercase">{t.reference.debilitation}: </span>
                      <span className="text-red-300">{pickName("rasis", p.debilitation.sign, lang)} {p.debilitation.deep_deg}°</span>
                    </div>
                  )}
                  {p.moolatrikona && (
                    <div>
                      <span className="text-ink-400 text-xs uppercase">{t.reference.moolatrikona}: </span>
                      <span className="text-ink-100">{pickName("rasis", p.moolatrikona.sign, lang)} {p.moolatrikona.range_deg?.join("–")}°</span>
                    </div>
                  )}
                  {p.dig_bala_house && (
                    <div>
                      <span className="text-ink-400 text-xs uppercase">{t.reference.digBala}: </span>
                      <span className="text-ink-100">{p.dig_bala_house}</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-ink-400 text-xs uppercase mb-1">{t.reference.karakatwas}</div>
                  <ul className="list-disc pl-5 text-ink-200 space-y-0.5">
                    {(p.karakatwas ?? []).slice(0, 6).map((k: string, i: number) => (
                      <li key={i}>{k}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
