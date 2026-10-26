"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { nav, DISCORD_URL } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const strip = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aktif sekmeyi mobil şeritte görünür tut.
  useEffect(() => {
    strip.current?.querySelector<HTMLElement>("[aria-current='page']")?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-iron-950/92 backdrop-blur-md" : "bg-gradient-to-b from-iron-950/90 to-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between gap-3">
        <Link href="/" aria-label="HURDA-G" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.webp" alt="HURDA-G" className="h-9 w-auto sm:h-11" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-sm border border-iron-600 font-mono text-xs" role="group" aria-label="Language">
            {(["tr", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`h-9 w-10 uppercase tracking-widest transition-colors ${lang === l ? "bg-amber-400 text-iron-950" : "text-bone-400 hover:text-bone-50"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            lang="en"
            className="hidden h-9 items-center gap-1.5 rounded-sm border border-amber-400/50 px-3 font-display text-sm font-bold uppercase tracking-wider text-amber-300 transition-colors hover:bg-amber-400 hover:text-iron-950 sm:inline-flex"
          >
            Discord <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* TAB terminali — oyundaki sekmeli terminal gibi */}
      <nav aria-label="Sekmeler" className="border-y border-iron-700/70 bg-iron-900/80">
        <ul ref={strip} className="container-x flex gap-1 overflow-x-auto py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nav.map((n) => {
            const on = active(n.href);
            return (
              <li key={n.href} className="shrink-0">
                <Link
                  href={n.href}
                  aria-current={on ? "page" : undefined}
                  className={`flex h-10 items-center gap-2 rounded-sm px-3 font-display text-[0.95rem] font-bold uppercase tracking-wider transition-colors ${
                    on ? "bg-amber-400 text-iron-950" : "text-bone-400 hover:bg-iron-800 hover:text-bone-50"
                  }`}
                >
                  <span className={`font-mono text-[0.65rem] ${on ? "text-iron-950/70" : "text-bone-600"}`}>{n.code}</span>
                  {t(n.label)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
