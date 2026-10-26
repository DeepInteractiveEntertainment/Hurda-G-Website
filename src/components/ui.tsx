"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Oyundaki paslı demir panel (main_panel_9slice). */
export function Plate({ children, className = "", tight = false }: { children: ReactNode; className?: string; tight?: boolean }) {
  return <div className={`plate ${tight ? "plate-tight" : ""} ${className}`}>{children}</div>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHead({ overline, title, text, className = "" }: { overline: string; title: string; text?: string; className?: string }) {
  return (
    <Reveal className={className}>
      <p className="overline">{overline}</p>
      <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-bone-50 sm:text-6xl">{title}</h2>
      {text && <p className="mt-4 max-w-2xl text-base leading-relaxed text-bone-400 sm:text-lg">{text}</p>}
    </Reveal>
  );
}

/** Sayfa başlığı — kaset etiketi + OSD satırı. */
export function PageHero({ code, osd, title, text, children }: { code: string; osd: string; title: string; text: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-iron-700/60 pt-36 pb-14 sm:pt-44 sm:pb-20">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,165,36,0.12),transparent_60%)]" />
      <div className="container-x relative">
        <p className="font-mono text-sm tracking-[0.2em] text-amber-400">
          <span className="text-danger">●</span> REC · TAB-{code} · <span className="blink">{osd}</span>
        </p>
        <h1 className="mt-4 font-display text-6xl font-extrabold uppercase leading-[0.9] tracking-tight text-bone-50 sm:text-8xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-bone-400 sm:text-xl">{text}</p>
        {children}
      </div>
    </section>
  );
}

export function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-l-2 border-amber-400/70 pl-3">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone-600">{k}</p>
      <p className="mt-1 font-display text-lg font-semibold text-bone-50">{v}</p>
    </div>
  );
}
