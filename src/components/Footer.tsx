"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav, DEEP_URL, DEEP_HURDA_URL, DISCORD_URL, YOUTUBE_URL, X_URL, INSTAGRAM_URL } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const social = [
    { name: "Discord", href: DISCORD_URL },
    { name: "YouTube", href: YOUTUBE_URL },
    { name: "X", href: X_URL },
    { name: "Instagram", href: INSTAGRAM_URL },
  ];
  return (
    <footer className="relative mt-24 border-t border-iron-700/70 bg-iron-900">
      <div className="hazard h-2 w-full opacity-80" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.webp" alt="HURDA-G" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone-400">
            {t({
              tr: "HURDA-G, İstanbul'daki bağımsız stüdyo Deep Interactive Entertainment tarafından geliştiriliyor.",
              en: "HURDA-G is developed by Deep Interactive Entertainment, an independent studio in Istanbul.",
            })}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={DEEP_URL} target="_blank" rel="noopener noreferrer" lang="en" className="btn-plate text-base">
              Deep Interactive Entertainment <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={DEEP_HURDA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center gap-1 font-display text-sm font-bold uppercase tracking-wider text-amber-300 hover:text-amber-400">
              {t({ tr: "Stüdyo sayfasında HURDA-G", en: "HURDA-G on the studio site" })} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="overline">TAB</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-bone-400 hover:text-amber-300">
                  {t(n.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="overline">{t({ tr: "Takip et", en: "Follow" })}</p>
          <ul className="mt-4 space-y-2">
            {social.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-bone-400 hover:text-amber-300">
                  {s.name} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-iron-700/60">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5">
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-bone-600">
            HURDA-G // BUILD 1987 · © {new Date().getFullYear()} DEEP INTERACTIVE ENTERTAINMENT
          </p>
          <div className="flex gap-5 text-sm">
            <Link href="/terms" className="text-bone-400 hover:text-amber-300">{t({ tr: "Hizmet Koşulları", en: "Terms of Service" })}</Link>
            <Link href="/privacy" className="text-bone-400 hover:text-amber-300">{t({ tr: "Gizlilik Politikası", en: "Privacy Policy" })}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
