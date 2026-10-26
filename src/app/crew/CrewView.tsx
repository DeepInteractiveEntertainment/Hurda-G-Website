"use client";

import ModelViewer from "@/components/ModelViewer";
import ModelGallery from "@/components/ModelGallery";
import YouTube from "@/components/YouTube";
import { PageHero, Plate, Reveal, SectionHead, Stat } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { crew, videos, headVariants } from "@/lib/content";

const cosmetics = [
  { tr: "Kafa lambası", en: "Headlamp" }, { tr: "Peruk", en: "Wig" }, { tr: "Nine yeleği", en: "Granny vest" },
  { tr: "Smokin", en: "Tuxedo" }, { tr: "Lastik ördek simidi", en: "Rubber-duck ring" }, { tr: "Sırt kanatları", en: "Back wings" },
  { tr: "Çamaşır ipi", en: "Laundry line" }, { tr: "Sırtta duvar saati", en: "Wall clock backpack" }, { tr: "Omuz mantarları", en: "Shoulder mushrooms" },
  { tr: "Omuz çay bardakları", en: "Shoulder teacups" },
];

export default function CrewView() {
  const { t } = useLang();
  const robot = crew[0];
  const loco = videos.find((v) => v.tab === "crew")!;

  return (
    <>
      <PageHero
        code="03"
        osd="MODEL G ▸ ONLINE"
        title={t({ tr: "Tayfa", en: "The Crew" })}
        text={t({
          tr: "Hurdadan yapılmış robotlar, onları yapan usta ve yanlarından ayrılmayan iki makine. Hepsi oyunun güncel modelleriyle, 3B.",
          en: "Robots made of scrap, the master who made them and two machines that never leave their side. All in 3D, straight from the game's current models.",
        })}
      />

      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Plate className="bg-iron-900">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_38%,#3a3027,#0d0b09_70%)] scanlines">
                <ModelViewer id={robot.id} alt={t(robot.name)} />
                <div className="pointer-events-none absolute inset-x-3 top-3 flex justify-between font-mono text-[0.7rem] tracking-[0.18em]">
                  <span className="text-bone-200">PLAYER_01</span>
                  <span className="text-signal">LVL 01</span>
                </div>
              </div>
            </Plate>
          </Reveal>
          <div>
            <p className="overline">{t(robot.role)}</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none text-bone-50 sm:text-7xl">{t(robot.name)}</h2>
            <p className="mt-5 text-lg leading-relaxed text-bone-200">{t(robot.text)}</p>
            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {robot.stats!.map((s) => (
                <Stat key={s.k.en} k={t(s.k)} v={typeof s.v === "string" ? s.v : t(s.v)} />
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {robot.tags!.map((g) => (
                <li key={g.en} className="rounded-sm border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-display text-base font-semibold uppercase tracking-wide text-amber-300">
                  {t(g)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              overline={t({ tr: "Kozmetik", en: "Cosmetics" })}
              title={t({ tr: "Hurdadan şıklık", en: "Scrap couture" })}
              text={t({
                tr: "Kafaya, gövdeye, omuza ve sırta takılan kozmetikler. Kafa yüzü oyuncu rengine boyanır ve göz kırpar.",
                en: "Cosmetics for head, body, shoulders and back. Your face panel takes your player colour — and blinks.",
              })}
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {cosmetics.map((c) => (
                <li key={c.en} className="rounded-sm border border-iron-600 bg-iron-850 px-3 py-1.5 text-sm text-bone-200">
                  {t(c)}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <Plate className="bg-iron-900">
              <YouTube id={loco.id} title={t(loco.title)} />
              <p className="mt-3 font-display text-lg font-bold uppercase text-bone-50">{t(loco.title)}</p>
              <p className="text-sm text-bone-400">{t(loco.text)}</p>
            </Plate>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHead
          overline={t({ tr: "Kafa tipleri", en: "Head types" })}
          title={t({ tr: "Üç kafa, tek robot", en: "Three heads, one robot" })}
          text={t({
            tr: "TAB terminalinin Karakter sekmesinden seçilir: yuvarlak hurda kafa ya da ekranlı panelli kafa (yuvarlak / kare). Panelli kafalarda yüz ekrana çizilir.",
            en: "Picked in the TAB terminal's Character tab: the round scrap head or a screen panel head (round / square). On panel heads the face is drawn on the screen.",
          })}
        />
        <div className="mt-10">
          <ModelGallery items={headVariants} cols={3} />
        </div>
        <Link href="/terminal" className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-amber-300 hover:text-amber-400">
          {t({ tr: "Yüz düzenleyiciyi dene", en: "Try the face editor" })} <ArrowRight className="h-5 w-5" />
        </Link>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHead overline={t({ tr: "Kadro", en: "Roster" })} title={t({ tr: "Usta ve makineler", en: "The master and the machines" })} />
        <div className="mt-10">
          <ModelGallery items={crew.slice(1)} cols={3} />
        </div>
      </section>
    </>
  );
}
