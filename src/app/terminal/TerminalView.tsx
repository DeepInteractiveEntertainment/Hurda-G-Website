"use client";

import { useState } from "react";
import FaceEditor from "@/components/FaceEditor";
import ModelGallery from "@/components/ModelGallery";
import { PageHero, Plate, Reveal, SectionHead } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { terminalTabs, headVariants } from "@/lib/content";

export default function TerminalView() {
  const { t } = useLang();
  const [tab, setTab] = useState(terminalTabs[1].key);
  const cur = terminalTabs.find((x) => x.key === tab)!;

  return (
    <>
      <PageHero
        code="04"
        osd="TAB ▸ SAHA TERMİNALİ"
        title={t({ tr: "TAB Terminali", en: "TAB Terminal" })}
        text={t({
          tr: "TAB'a basınca robot elindeki taşınabilir tüplü TV'yi kaldırır: Saha Terminali. Oyun durmaz — haritaya bakarken arkandan bir şey gelebilir. Ekip arkadaşların da senin terminalini elinde görür.",
          en: "Press TAB and your robot lifts a portable tube TV: the Field Terminal. The game doesn't pause — something can sneak up while you read the map. Your crew sees the terminal in your hands too.",
        })}
      />

      {/* Terminal sekmeleri */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead
          overline={t({ tr: "Beş sekme", en: "Five tabs" })}
          title={t({ tr: "Harita · Karakter · Özellikler · Bot · Galeri", en: "Map · Character · Stats · Bot · Gallery" })}
        />
        <Reveal className="mt-10">
          <Plate className="bg-iron-900">
            <div className="relative overflow-hidden rounded-[18px] border-4 border-iron-950 bg-[#0b0d0b] p-4 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] scanlines sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-display text-3xl font-extrabold uppercase tracking-wide text-bone-200 sm:text-4xl">{t({ tr: "Saha terminali", en: "Field terminal" })}</p>
                <p className="font-mono text-xs tracking-[0.2em] text-amber-400">REC ● TAB</p>
              </div>
              <div role="tablist" className="mt-5 flex gap-1 overflow-x-auto [scrollbar-width:none]">
                {terminalTabs.map((x) => (
                  <button
                    key={x.key}
                    role="tab"
                    aria-selected={tab === x.key}
                    onClick={() => setTab(x.key)}
                    className={`min-h-11 shrink-0 rounded-sm px-4 font-display text-base font-bold uppercase tracking-wider ${
                      tab === x.key ? "bg-amber-400 text-iron-950" : "border border-iron-600 text-bone-400 hover:text-bone-50"
                    }`}
                  >
                    {t(x.name)}
                  </button>
                ))}
              </div>
              <div role="tabpanel" className="mt-6 grid gap-6 md:grid-cols-[1fr_1.2fr]">
                <p className="text-lg leading-relaxed text-bone-200">{t(cur.text)}</p>
                <ul className="space-y-2">
                  {cur.points.map((p) => (
                    <li key={p.en} className="flex gap-3 rounded-sm border border-iron-700 bg-iron-950/70 p-3 font-mono text-sm leading-relaxed text-[#9ff0b4]">
                      <span className="text-amber-400">▸</span>
                      <span>{t(p)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Plate>
        </Reveal>
      </section>

      {/* Yüz düzenleyici */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead
          overline={t({ tr: "Karakter › Yüz düzenle", en: "Character › Edit face" })}
          title={t({ tr: "Panel yüzü — dene", en: "Panel face — try it" })}
          text={t({
            tr: "Panelli kafada yüz, 64×64 piksellik CRT ekrana çizilir. Bu düzenleyici oyunun çizim kodunun birebir kopyası: yazdığın 4 karakter, hazır yüzler, döndürme, boyut, 7 renk ve sesine göre değişen otomatik ifadeler. Seçtiğin yüz soldaki 3B kafaya anında basılır.",
            en: "On a panel head the face is drawn on a 64×64 pixel CRT screen. This editor is a one-to-one copy of the game's drawing code: your 4 characters, preset faces, rotation, size, 7 colours and automatic expressions that follow your voice. Whatever you pick is painted live onto the 3D head on the left.",
          })}
        />
        <div className="mt-10">
          <FaceEditor />
        </div>
      </section>

      {/* Kafa tipleri */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead
          overline={t({ tr: "Karakter › Kafa tipi", en: "Character › Head type" })}
          title={t({ tr: "Üç kafa, tek robot", en: "Three heads, one robot" })}
        />
        <div className="mt-10">
          <ModelGallery items={headVariants} cols={3} />
        </div>
      </section>
    </>
  );
}
