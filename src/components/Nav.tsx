import Link from "next/link";
import { getDict } from "@/i18n/server";
import { LangSwitcher } from "@/i18n/client";

export function Nav() {
  const t = getDict();
  const links = [
    { href: "/", label: t.nav.home },
    { href: "/learn", label: t.nav.learn },
    { href: "/flashcards", label: t.nav.flashcards },
    { href: "/quiz", label: t.nav.quiz },
    { href: "/fundamentals", label: t.nav.fundamentals },
    { href: "/glossary", label: t.nav.glossary },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-ink-900/80 backdrop-blur border-b border-ink-600">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg">
          <span className="text-gold-300">🔱</span>
          <span className="text-gold-200">{t.home.title}</span>
        </Link>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-1.5 rounded-md text-ink-200 hover:text-gold-200 hover:bg-ink-700 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <LangSwitcher />
      </div>
    </nav>
  );
}
