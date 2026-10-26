"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Backpack, Bomb, Crosshair, Dog, Flame, HeartPulse, Rotate3d, Search, Sword, Wrench, X, type LucideIcon } from "lucide-react";
import ModelViewer from "@/components/ModelViewer";
import { PageHero, Reveal, SectionHead, Stat } from "@/components/ui";
import { useLang, type L } from "@/lib/i18n";
import { SHOW_THIRD_PARTY_3D, ASSET_V } from "@/lib/site";
import data from "@/lib/data/arsenal.json";

type Item = { id: string; name: L; desc: L; price: number; cat: string; model: string | null; img?: string };
const items = data as Item[];

const cats: { key: string; label: L; icon: LucideIcon }[] = [
  { key: "weapons", label: { tr: "Silahlar", en: "Weapons" }, icon: Crosshair },
  { key: "melee", label: { tr: "Yakın dövüş", en: "Melee" }, icon: Sword },
  { key: "tools", label: { tr: "Aletler", en: "Tools" }, icon: Wrench },
  { key: "gear", label: { tr: "Ekipman", en: "Gear" }, icon: Backpack },
  { key: "health", label: { tr: "Sağlık", en: "Health" }, icon: HeartPulse },
  { key: "explosives", label: { tr: "Patlayıcılar", en: "Explosives" }, icon: Bomb },
  { key: "consumables", label: { tr: "Sarf", en: "Consumables" }, icon: Flame },
  { key: "companion", label: { tr: "Yol dostu", en: "Companion" }, icon: Dog },
];
const catOf = (k: string) => cats.find((c) => c.key === k)!;
// Ateşli silah ve hazır bıçak/bomba modelleri mağaza lisanslı
const isThird = (m: string | null) => !!m && m.startsWith("wpn-");

export default function ArsenalView() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState<string>("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Item | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const list = useMemo(() => {
    const s = q.trim().toLocaleLowerCase(lang);
    return items
      .filter((i) => cat === "all" || i.cat === cat)
      .filter((i) => !s || t(i.name).toLocaleLowerCase(lang).includes(s) || t(i.desc).toLocaleLowerCase(lang).includes(s))
      .sort((a, b) => Number(!!b.model) - Number(!!a.model) || a.price - b.price);
  }, [cat, q, lang, t]);

  const counts = useMemo(() => Object.fromEntries(cats.map((c) => [c.key, items.filter((i) => i.cat === c.key).length])), []);
  const featured = ["equipment-v2-crewcannon", "equipment-v2-grapplepistol", "equipment-v2-gravityorb"];

  return (
    <>
      <PageHero
        code="07"
        osd="SHOP ▸ OPEN"
        title={t({ tr: "Cephanelik", en: "Arsenal" })}
        text={t({
          tr: "Scrap Master'ın dükkânındaki her şey. Sipariş ver, hazırlasın, masasına bıraksın. Kancalı ip, yerçekimsiz küre, karakter fırlatma topu ve bir dolu balta.",
          en: "Everything in Scrap Master's shop. Order it, he preps it and leaves it on his table. Grappling rope, zero-gravity orb, a crew cannon and a whole lot of axes.",
        })}
      >
        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          <Stat k={t({ tr: "Ürün", en: "Items" })} v={String(items.length)} />
          <Stat k={t({ tr: "Kategori", en: "Categories" })} v={String(cats.length)} />
          <Stat k={t({ tr: "3B model", en: "3D models" })} v={String(items.filter((i) => i.model).length)} />
          <Stat k={t({ tr: "En pahalı", en: "Priciest" })} v={`${Math.max(...items.map((i) => i.price)).toLocaleString(lang)}`} />
        </div>
      </PageHero>

      {/* Öne çıkanlar */}
      <section className="container-x py-16 sm:py-20">
        <SectionHead overline={t({ tr: "Öne çıkanlar", en: "Highlights" })} title={t({ tr: "Fizik oyuncakları", en: "Physics toys" })} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((pid, i) => {
            const it = items.find((x) => x.id === pid)!;
            const m = it.model!;
            return (
              <Reveal key={pid} delay={i * 70}>
                <button type="button" onClick={() => setOpen(it)} className="group block h-full w-full overflow-hidden rounded-md border border-iron-700 bg-iron-850 text-left hover:border-amber-400/60">
                  <div className="aspect-square bg-[radial-gradient(circle_at_50%_40%,#2a231c,#0d0b09_70%)]">
                    <ModelViewer id={m} alt={t(it.name)} interactive={false} />
                  </div>
                  <div className="border-t border-iron-700 p-4">
                    <h3 className="font-display text-2xl font-bold uppercase text-bone-50">{t(it.name)}</h3>
                    <p className="mt-1 line-clamp-3 text-sm text-bone-400">{t(it.desc)}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Katalog */}
      <section className="container-x py-16 sm:py-20">
        <SectionHead overline={t({ tr: "Katalog", en: "Catalogue" })} title={t({ tr: "Dükkânın tamamı", en: "The whole shop" })} />
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setCat("all")}
              className={`h-10 rounded-sm px-3 font-display text-sm font-bold uppercase tracking-wider ${cat === "all" ? "bg-amber-400 text-iron-950" : "border border-iron-700 text-bone-400 hover:text-bone-50"}`}
            >
              {t({ tr: "Hepsi", en: "All" })} · {items.length}
            </button>
            {cats.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setCat(key)}
                className={`inline-flex h-10 items-center gap-1.5 rounded-sm px-3 font-display text-sm font-bold uppercase tracking-wider ${cat === key ? "bg-amber-400 text-iron-950" : "border border-iron-700 text-bone-400 hover:text-bone-50"}`}
              >
                <Icon className="h-4 w-4" /> {t(label)} · {counts[key]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="relative flex-1 min-w-[14rem]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bone-600" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t({ tr: "Ara: balta, ip, roket…", en: "Search: axe, rope, rocket…" })}
                className="h-11 w-full rounded-sm border border-iron-700 bg-iron-850 pl-9 pr-3 text-bone-50 placeholder:text-bone-600 focus:border-amber-400 focus:outline-none"
              />
            </label>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {list.map((it) => {
            const C = catOf(it.cat);
            const Icon = C.icon;
            return (
              <li key={it.id}>
                <button
                  type="button"
                  onClick={() => setOpen(it)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-md border border-iron-700 bg-iron-850 text-left transition-colors hover:border-amber-400/60"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#2a231c,#0d0b09_72%)]">
                    {it.model || it.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={`/posters/${it.model ?? it.img}.webp?v=${ASSET_V}`} alt={t(it.name)} loading="lazy" className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.07]" />
                    ) : (
                      <Icon className="h-12 w-12 text-iron-600" strokeWidth={1.4} />
                    )}
                    {it.model && (!isThird(it.model) || SHOW_THIRD_PARTY_3D) && (
                      <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-sm bg-iron-950/80 px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-amber-300">
                        <Rotate3d className="h-3 w-3" /> 3D
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-3">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-bone-600">{t(C.label)}</p>
                    <h3 lang={it.name.tr === it.name.en ? "en" : undefined} className="mt-0.5 font-display text-lg font-bold uppercase leading-tight text-bone-50">{t(it.name)}</h3>
                    <p className="mt-auto pt-2 font-mono text-sm text-amber-300">{it.price.toLocaleString(lang)}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
        {list.length === 0 && <p className="mt-8 text-bone-400">{t({ tr: "Bu aramaya uyan ürün yok.", en: "No items match that search." })}</p>}
      </section>

      <dialog
        ref={dlg}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dlg.current && setOpen(null)}
        className="m-auto w-[min(60rem,calc(100vw-1.5rem))] max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-transparent p-0 text-bone-200 backdrop:bg-iron-950/85 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="plate grid gap-6 bg-iron-900 md:grid-cols-2">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_40%,#3a3027,#0d0b09_72%)] scanlines">
              {open.model ? (
                <ModelViewer id={open.model} alt={t(open.name)} third={isThird(open.model)} />
              ) : open.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={`/posters/${open.img}.webp?v=${ASSET_V}`} alt={t(open.name)} className="h-full w-full object-contain p-8" />
              ) : (
                (() => {
                  const Icon = catOf(open.cat).icon;
                  return <Icon className="h-24 w-24 text-iron-600" strokeWidth={1.2} />;
                })()
              )}
            </div>
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">{t(catOf(open.cat).label)}</p>
                  <h3 className="mt-1 font-display text-4xl font-extrabold uppercase leading-none text-bone-50">{t(open.name)}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  aria-label={t({ tr: "Kapat", en: "Close" })}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-iron-600 hover:border-amber-400 hover:text-amber-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 leading-relaxed text-bone-200">{t(open.desc)}</p>
              <div className="mt-6">
                <Stat k={t({ tr: "Fiyat", en: "Price" })} v={open.price.toLocaleString(lang)} />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
