import Link from "next/link";
import { notFound } from "next/navigation";
import { content, getFlashcardDeck } from "@/lib/kb";
import { FlashcardPlayer } from "@/components/FlashcardPlayer";
import { getDict } from "@/i18n/server";

export function generateStaticParams() {
  return Object.keys(content.flashcards.decks).map((id) => ({ deck: id }));
}

export default function DeckPage({ params }: { params: { deck: string } }) {
  const t = getDict();
  const deck = getFlashcardDeck(params.deck);
  if (!deck) notFound();

  return (
    <div className="space-y-6">
      <header>
        <Link href="/flashcards" className="text-sm text-ink-300 hover:text-gold-200">← {t.flashcards.allDecks}</Link>
        <div className="flex items-center gap-3 mt-2 mb-1">
          <span className="chip-gold">{t.common.level} {deck.level}</span>
          <span className="text-xs text-ink-300">{deck.cards.length} {t.flashcards.cards}</span>
        </div>
        <h1 className="font-serif text-3xl text-gold-200">{deck.title}</h1>
      </header>

      <FlashcardPlayer deckId={params.deck} cards={deck.cards} />
    </div>
  );
}
