"use client";

import { useMemo, useState } from "react";
import ModelViewer from "@/components/ModelViewer";
import ModelGallery, { type GalleryItem } from "@/components/ModelGallery";
import YouTube from "@/components/YouTube";
import { PageHero, Plate, Reveal, SectionHead, Stat } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { enemies, bosses, videos } from "@/lib/content";

const tierLabel = (n: number) => ({ tr: `KADEME ${n}`, en: `TIER ${n}` });

export default function EnemiesView() {
  const { t } = useLang();
  const [tier, setTier] = useState<0 | 1 | 2 | 3>(0);
  const ai = videos.find((v) => v.tab === "enemies")!;

  const items: GalleryItem[] = useMemo(
    () =>
      enemies
        .filter((e) => tier === 0 || e.tier === tier)
        .map((e) => ({
          ...e,
          badge: tierLabel(e.tier),
          details: [
            { k: { tr: "① Uyarı", en: "① Telegraph" }, v: e.telegraph },
            { k: { tr: "② Tehdit", en: "② Threat" }, v: e.threat },
            { k: { tr: "③ Karşı hamle", en: "③ Counter" }, v: e.counter },
          ],
        })),
    [tier],
  );

  return (
    <>
      <PageHero
        code="05"
        osd="REC ● THE RECORDED"
        title={t({ tr: "Düşmanlar", en: "Enemies" })}
        text={t({
          tr: "Kayıttakiler: kasete kaydedilen yerlerde ne varsa onlar da kasete girdi. Her düşman önce uyarır, sonra saldırır ve her birinin bir karşı hamlesi var.",
          en: "The Recorded: whatever lived in the taped places got taped too. Every enemy telegraphs, then strikes — and every one of them has a counter.",
        })}
      />

      <section className="container-x py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead overline={t({ tr: "Saha kadrosu", en: "Field roster" })} title={t({ tr: "Uyarı → tehdit → karşı hamle", en: "Telegraph → threat → counter" })} />
          <div role="tablist" className="flex flex-wrap gap-1 rounded-sm border border-iron-700 bg-iron-850 p-1">
            {([0, 1, 2, 3] as const).map((n) => (
              <button
                key={n}
                role="tab"
                aria-selected={tier === n}
                onClick={() => setTier(n)}
                className={`h-10 rounded-sm px-4 font-display text-sm font-bold uppercase tracking-wider ${tier === n ? "bg-amber-400 text-iron-950" : "text-bone-400 hover:text-bone-50"}`}
              >
                {n === 0 ? t({ tr: "Hepsi", en: "All" }) : t(tierLabel(n))}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <ModelGallery items={items} cols={3} />
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHead overline="BOSS" title={t({ tr: "Bossla tanış", en: "Meet the bosses" })} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {bosses.map((b) => (
            <Reveal key={b.id}>
              <Plate className="h-full bg-iron-900">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_40%,#4a1f0c,#0d0b09_72%)] scanlines">
                  <ModelViewer id={b.id} alt={t(b.name)} />
                </div>
                <h3 className="mt-4 font-display text-4xl font-extrabold uppercase text-bone-50">{t(b.name)}</h3>
                <p className="mt-2 leading-relaxed text-bone-200">{t(b.text)}</p>
                <div className="mt-4">
                  <Stat k={t({ tr: "Profil", en: "Profile" })} v={t(b.stat)} />
                </div>
              </Plate>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHead
            overline={t({ tr: "Yapay zekâ", en: "AI" })}
            title={t({ tr: "Seni nasıl buluyorlar", en: "How they find you" })}
            text={t({
              tr: "Düşmanlar görüş ve sesle algılar, davranış ağaçlarıyla karar verir. Suda yüzerek, havada dalarak, yerin altından fışkırarak kovalarlar. Sefer seviyesi arttıkça canları ve hasarları da artar.",
              en: "Enemies perceive by sight and sound and decide with behaviour trees. They chase by swimming, diving from the air or bursting out of the ground. Their health and damage scale with the voyage level.",
            })}
          />
          <Reveal>
            <Plate className="bg-iron-900">
              <YouTube id={ai.id} title={t(ai.title)} />
              <p className="mt-3 font-display text-lg font-bold uppercase text-bone-50">{t(ai.title)}</p>
            </Plate>
          </Reveal>
        </div>
      </section>
    </>
  );
}
