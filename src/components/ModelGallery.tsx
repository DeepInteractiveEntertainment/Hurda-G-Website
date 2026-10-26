"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Rotate3d, X } from "lucide-react";
import ModelViewer from "./ModelViewer";
import { Reveal, Stat } from "./ui";
import { useLang, type L } from "@/lib/i18n";
import { SHOW_THIRD_PARTY_3D, ASSET_V } from "@/lib/site";

export type GalleryItem = {
  id: string;
  name: L;
  role: L;
  text: L;
  third?: boolean;
  badge?: L;
  stats?: { k: L; v: L | string }[];
  tags?: L[];
  details?: { k: L; v: L }[];
};

const ui = {
  open3d: { tr: "3B incele", en: "Inspect in 3D" },
  render: { tr: "Render", en: "Render" },
  drag: { tr: "Sürükle: döndür · Tekerlek: yakınlaştır", en: "Drag: rotate · Wheel: zoom" },
  close: { tr: "Kapat", en: "Close" },
  licensed: { tr: "Lisanslı hazır model — burada render olarak gösteriliyor.", en: "Licensed stock model — shown here as a render." },
};

export default function ModelGallery({ items, cols = 3 }: { items: GalleryItem[]; cols?: 2 | 3 | 4 }) {
  const { t } = useLang();
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  const is3d = (it: GalleryItem) => !it.third || SHOW_THIRD_PARTY_3D;

  return (
    <>
      <div className={`grid grid-cols-1 gap-5 ${grid}`}>
        {items.map((it, i) => (
          <Reveal key={it.id + i} delay={(i % 4) * 60}>
            <button
              type="button"
              onClick={() => setOpen(it)}
              className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border border-iron-700 bg-iron-850 text-left transition-colors hover:border-amber-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#2a231c,#0d0b09_70%)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/posters/${it.id}.webp?v=${ASSET_V}`}
                  alt={t(it.name)}
                  loading="lazy"
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-sm bg-iron-950/80 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-amber-300">
                  {is3d(it) ? <Rotate3d className="h-3 w-3" /> : <Box className="h-3 w-3" />}
                  {is3d(it) ? "3D" : t(ui.render)}
                </span>
                {it.badge && (
                  <span className="absolute right-3 top-3 rounded-sm bg-amber-400 px-2 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-iron-950">
                    {t(it.badge)}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber-400">{t(it.role)}</p>
                <h3 lang={it.name.tr === it.name.en ? "en" : undefined} className="mt-1 font-display text-2xl font-bold uppercase text-bone-50">{t(it.name)}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-bone-400">{t(it.text)}</p>
                <span className="mt-auto pt-4 font-display text-sm font-semibold uppercase tracking-wider text-bone-200 group-hover:text-amber-300">
                  {t(ui.open3d)} →
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <dialog
        ref={dlg}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dlg.current && setOpen(null)}
        className="m-auto w-[min(72rem,calc(100vw-1.5rem))] max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-transparent p-0 text-bone-200 backdrop:bg-iron-950/85 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="plate grid gap-6 bg-iron-900 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_40%,#3a3027,#0d0b09_72%)] scanlines">
              <ModelViewer id={open.id} alt={t(open.name)} third={open.third} />
              <p className="pointer-events-none absolute bottom-2 left-3 font-mono text-[0.65rem] uppercase tracking-widest text-bone-600">
                {is3d(open) ? t(ui.drag) : t(ui.licensed)}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">{t(open.role)}</p>
                  <h3 lang={open.name.tr === open.name.en ? "en" : undefined} className="mt-1 font-display text-4xl font-extrabold uppercase leading-none text-bone-50 sm:text-5xl">{t(open.name)}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  aria-label={t(ui.close)}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-iron-600 text-bone-200 hover:border-amber-400 hover:text-amber-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 leading-relaxed text-bone-200">{t(open.text)}</p>
              {open.details && (
                <dl className="mt-5 space-y-3">
                  {open.details.map((d) => (
                    <div key={d.k.en} className="rounded-sm border border-iron-700 bg-iron-850 p-3">
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber-400">{t(d.k)}</dt>
                      <dd className="mt-1 text-sm text-bone-200">{t(d.v)}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {open.stats && (
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {open.stats.map((s) => (
                    <Stat key={s.k.en} k={t(s.k)} v={typeof s.v === "string" ? s.v : t(s.v)} />
                  ))}
                </div>
              )}
              {open.tags && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {open.tags.map((g) => (
                    <li key={g.en} className="rounded-sm border border-iron-600 px-2.5 py-1 text-xs text-bone-200">
                      {t(g)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
