import { kb } from "@/lib/kb";
import { getDict } from "@/i18n/server";
import { format } from "@/i18n/dict";

export default function GlossaryPage() {
  const t = getDict();
  const terms = [...kb.glossary.terms].sort((a, b) => a.term.localeCompare(b.term));

  const groups = new Map<string, typeof terms>();
  for (const term of terms) {
    const letter = term.term[0].toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(term);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.glossary.title}</h1>
        <p className="text-ink-300 mt-1">{format(t.glossary.description, { n: terms.length })}</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {[...groups.keys()].map((l) => (
          <a key={l} href={`#letter-${l}`} className="chip hover:border-gold-400/50">{l}</a>
        ))}
      </div>

      {[...groups.entries()].map(([letter, items]) => (
        <section key={letter} id={`letter-${letter}`}>
          <h2 className="font-serif text-2xl text-gold-200 mb-3 mt-6">{letter}</h2>
          <div className="space-y-2">
            {items.map((term: any, i) => (
              <div key={i} className="card">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="font-semibold text-ink-100">{term.term}</h3>
                  {term.sanskrit && <span className="text-sm text-gold-300 font-serif">{term.sanskrit}</span>}
                  <span className="chip text-[10px]">{term.category}</span>
                </div>
                <p className="text-ink-300 text-sm mt-1">{term.meaning}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
