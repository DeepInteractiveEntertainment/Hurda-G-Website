"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LEGAL_EMAIL, LEGAL_UPDATED, type LegalSection } from "@/lib/legal";
import type { L } from "@/lib/i18n";

export default function LegalView({ doc, other }: { doc: { title: L; intro: L; sections: LegalSection[] }; other: { href: string; label: L } }) {
  const { t, lang } = useLang();
  const date = new Date(LEGAL_UPDATED).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <article className="container-x max-w-3xl pt-36 pb-16 sm:pt-44">
      <p className="overline">HURDA-G · Deep Interactive Entertainment</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none text-bone-50 sm:text-7xl">{t(doc.title)}</h1>
      <p className="mt-4 font-mono text-xs tracking-[0.18em] text-bone-600">
        {t({ tr: "Son güncelleme", en: "Last updated" })}: {date}
      </p>
      <p className="mt-8 text-lg leading-relaxed text-bone-200">{t(doc.intro)}</p>

      <div className="mt-10 space-y-10">
        {doc.sections.map((s) => (
          <section key={s.title.en}>
            <h2 className="font-display text-2xl font-bold uppercase text-amber-300 sm:text-3xl">{t(s.title)}</h2>
            <div className="mt-3 space-y-3">
              {s.body.map((p) => (
                <p key={p.en} className="leading-relaxed text-bone-200">{t(p)}</p>
              ))}
            </div>
          </section>
        ))}
        <section>
          <h2 className="font-display text-2xl font-bold uppercase text-amber-300 sm:text-3xl">{t({ tr: "İletişim", en: "Contact" })}</h2>
          <p className="mt-3 leading-relaxed text-bone-200">
            Deep Interactive Entertainment · İstanbul, Türkiye ·{" "}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-amber-300 underline underline-offset-4 hover:text-amber-400">{LEGAL_EMAIL}</a>
          </p>
        </section>
      </div>

      <p className="mt-14 border-t border-iron-700 pt-6 text-sm text-bone-400">
        <Link href={other.href} className="text-amber-300 underline underline-offset-4 hover:text-amber-400">{t(other.label)}</Link>
      </p>
    </article>
  );
}
