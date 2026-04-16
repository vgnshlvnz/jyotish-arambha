import Link from "next/link";
import { content } from "@/lib/kb";
import { DeckStats } from "@/components/DeckStats";
import { getDict } from "@/i18n/server";

export default function FlashcardsIndex() {
  const t = getDict();
  const decks = content.flashcards.decks as Record<
    string,
    { level: number; title: string; cards: { id: string; front: string; back: string }[] }
  >;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl text-gold-200">{t.flashcards.title}</h1>
        <p className="text-ink-300 mt-1">{t.flashcards.description}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(decks).map(([id, deck]) => (
          <Link key={id} href={`/flashcards/${id}`} className="card block">
            <div className="flex items-center justify-between mb-2">
              <span className="chip-gold">{t.common.level} {deck.level}</span>
              <span className="text-xs text-ink-300">{deck.cards.length} {t.flashcards.cards}</span>
            </div>
            <h2 className="text-lg font-semibold text-ink-100">{deck.title}</h2>
            <DeckStats cardIds={deck.cards.map((c) => c.id)} />
          </Link>
        ))}
      </div>
    </div>
  );
}
