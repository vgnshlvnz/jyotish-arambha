import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { getLang, getDict } from "@/i18n/server";
import { LangProvider } from "@/i18n/client";

export const metadata: Metadata = {
  title: "Jyotish Ārambha — Beginner to Navamsa",
  description: "Learn Vedic astrology from zero to Navamsa. Structured knowledge, flashcards, and quizzes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = getLang();
  const t = getDict();
  return (
    <html lang={lang}>
      <body className={"font-sans " + (lang === "ta" ? "lang-ta" : "")}>
        <LangProvider lang={lang}>
          <Nav />
          <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        </LangProvider>
      </body>
    </html>
  );
}
