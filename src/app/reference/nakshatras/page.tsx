import { kb } from "@/lib/kb";
import { getDict, getLang } from "@/i18n/server";
import { pickName } from "@/i18n/dict";

export default function NakshatrasPage() {
  const t = getDict();
  const lang = getLang();
  const cycle = (kb.nakshatras as any).lord_cycle as string[];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.reference.nakshatrasTitle}</h1>
        <p className="text-ink-300 mt-1">{t.reference.nakshatrasDescription}</p>
      </header>

      <section className="card">
        <h2 className="font-serif text-lg text-gold-200 mb-2">{t.reference.vimshottariCycle}</h2>
        <p className="text-sm text-ink-300 mb-3">{t.reference.vimshottariDescription}</p>
        <div className="flex flex-wrap gap-2">
          {cycle.map((lord, i) => (
            <span key={i} className="chip-gold">{i + 1}. {pickName("grahas", lord, lang)}</span>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-3">
        {kb.nakshatras.nakshatras.map((n: any) => {
          const displayName = pickName("nakshatras", n.name, lang);
          const displayLord = pickName("grahas", n.lord, lang);
          return (
            <article key={n.num} className="card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="font-serif text-lg text-gold-200">
                    {n.num}. {displayName}
                  </h2>
                  {n.tamil && <div className="text-xs text-ink-300">{n.tamil}</div>}
                </div>
                <div className="text-right text-xs">
                  <div className="text-gold-300">{t.reference.lord}: {displayLord}</div>
                  <div className="text-ink-300">{n.start_deg?.toFixed(2)}° – {n.end_deg?.toFixed(2)}°</div>
                </div>
              </div>
              <table className="w-full text-xs">
                <thead className="text-ink-400">
                  <tr>
                    <th className="text-left py-1">{t.reference.pada}</th>
                    <th className="text-left py-1">{t.reference.rasi}</th>
                    <th className="text-left py-1">{t.reference.d9Lord}</th>
                    <th className="text-left py-1">{t.reference.purushartha}</th>
                  </tr>
                </thead>
                <tbody className="text-ink-200">
                  {n.padas.map((p: any, i: number) => (
                    <tr key={i} className="border-t border-ink-700">
                      <td className="py-1">{i + 1}</td>
                      <td className="py-1">{pickName("rasis", p.rasi, lang)}</td>
                      <td className="py-1">{pickName("grahas", p.navamsa_lord, lang)}</td>
                      <td className="py-1 text-gold-300">{p.purushartha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          );
        })}
      </div>
    </div>
  );
}
