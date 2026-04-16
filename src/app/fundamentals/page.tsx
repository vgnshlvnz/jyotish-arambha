import { kb } from "@/lib/kb";
import { getDict } from "@/i18n/server";

export default function FundamentalsPage() {
  const t = getDict();
  const principles = kb.fundamentals.principles;

  const groups = new Map<string, typeof principles>();
  for (const p of principles) {
    if (!groups.has(p.category)) groups.set(p.category, []);
    groups.get(p.category)!.push(p);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.fundamentals.title}</h1>
        <p className="text-ink-300 mt-1">{t.fundamentals.description}</p>
      </header>

      {[...groups.entries()].map(([cat, items]) => (
        <section key={cat}>
          <h2 className="font-serif text-xl text-gold-200 uppercase tracking-wide mb-3 mt-6">{cat}</h2>
          <div className="space-y-3">
            {items.map((p: any) => (
              <article key={p.id} className="card">
                <div className="flex items-start gap-3">
                  <span className="chip-gold shrink-0">{p.id}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink-100 mb-2">{p.title}</h3>
                    <p className="text-ink-200 mb-3">{p.rule}</p>
                    <div className="text-sm space-y-1">
                      <div><span className="text-gold-300">{t.fundamentals.whyItMatters} </span><span className="text-ink-300">{p.why_it_matters}</span></div>
                      {p.appears_in && (
                        <div className="text-xs text-ink-400">
                          {t.fundamentals.appearsIn} {p.appears_in.join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
