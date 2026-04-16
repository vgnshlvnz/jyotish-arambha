import { kb } from "@/lib/kb";
import { getDict, getLang } from "@/i18n/server";
import { pickName } from "@/i18n/dict";

export default function BhavasPage() {
  const t = getDict();
  const lang = getLang();
  const classifications = kb.bhavas.classifications as any;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.reference.bhavasTitle}</h1>
        <p className="text-ink-300 mt-1">{t.reference.bhavasDescription}</p>
      </header>

      <section className="card">
        <h2 className="font-serif text-lg text-gold-200 mb-2">{t.reference.houseClassifications}</h2>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {Object.entries(classifications).map(([key, v]: [string, any]) => (
            <div key={key} className="text-ink-200">
              <span className="text-gold-300 font-semibold">{v.name ?? key}: </span>
              <span className="text-ink-100">{(v.houses ?? []).join(", ")}</span>
              {v.rule && <div className="text-xs text-ink-300 mt-0.5">{v.rule}</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-3">
        {kb.bhavas.bhavas.map((b: any) => {
          const displayName = pickName("bhavas", String(b.num), lang);
          const signName = pickName("rasis", b.natural_sign, lang);
          const rulerName = pickName("grahas", b.natural_ruler, lang);
          return (
            <article key={b.num} className="card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="font-serif text-xl text-gold-200">
                    {b.num}. {displayName}
                  </h2>
                  <div className="text-sm text-ink-300">{b.english}</div>
                  <div className="text-xs text-ink-400">{b.tamil}</div>
                </div>
                <div className="text-right text-xs space-y-0.5">
                  {b.kendra && <div className="chip-gold inline-block">Kendra</div>}
                  {b.trikona && <div className="chip-gold inline-block ml-1">Trikona</div>}
                  {b.upachaya && <div className="chip inline-block ml-1">Upachaya</div>}
                  {b.dusthana && <div className="chip inline-block ml-1 border-red-500/30 text-red-200">Dusthana</div>}
                  {b.maraka && <div className="chip inline-block ml-1 border-red-500/30 text-red-200">Maraka</div>}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-xs uppercase text-ink-400">{t.reference.natural}</div>
                  <div className="text-ink-100">{signName} / {rulerName}</div>
                  <div className="text-xs text-ink-300">
                    {t.reference.naturalKaraka}: {Array.isArray(b.natural_karaka) ? b.natural_karaka.map((k: string) => pickName("grahas", k, lang)).join(" + ") : pickName("grahas", b.natural_karaka, lang)}
                  </div>
                  <div className="text-xs text-ink-300">{t.reference.purushartha}: {b.purushartha}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs uppercase text-ink-400 mb-1">{t.reference.significations}</div>
                  <ul className="list-disc pl-5 text-ink-200 text-sm space-y-0.5">
                    {(b.significations ?? []).map((s: string, i: number) => <li key={i}>{s}</li>)}
                  </ul>
                  {b.body_parts && (
                    <div className="mt-2 text-xs text-ink-400"><span className="text-ink-400">{t.reference.body}: </span>{b.body_parts}</div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
