"use client";

import { useMemo, useState } from "react";
import ModelViewer from "@/components/ModelViewer";
import ModelGallery, { type GalleryItem } from "@/components/ModelGallery";
import { PageHero, Plate, Reveal, SectionHead, Stat } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { wildlife, wildRoles } from "@/lib/content";

const filters = ["all", "jumper", "breacher", "swooper", "ambient", "boss", "land"] as const;

export default function WildlifeView() {
  const { t } = useLang();
  const [f, setF] = useState<(typeof filters)[number]>("all");
  const goat = wildlife.find((w) => w.id === "scrap-goat")!;

  const items: GalleryItem[] = useMemo(
    () => wildlife.filter((w) => f === "all" || w.kind === f).map((w) => ({ ...w, badge: wildRoles[w.kind] })),
    [f],
  );

  return (
    <>
      <PageHero
        code="06"
        osd="SONAR ▸ CONTACT"
        title={t({ tr: "Vahşi Yaşam", en: "Wildlife" })}
        text={t({
          tr: "Hurda denizinin canlıları da hurda: cıvata ahtapotlar, somun sardalyalar, kazan balinalar. Gemi denize açılınca dalga dalga gelirler. Bir de keçi var.",
          en: "Even the scrap sea's creatures are scrap: bolt octopi, nut sardines, boiler whales. They come in waves once the ship leaves port. There's also a goat.",
        })}
      />

      {/* Keçi */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="overline">{t(goat.role)}</p>
            <h2 className="mt-3 font-display text-6xl font-extrabold uppercase leading-none text-bone-50 sm:text-8xl">{t(goat.name)}</h2>
            <p className="mt-5 text-lg leading-relaxed text-bone-200">{t(goat.text)}</p>
            <div className="mt-6 grid grid-cols-3 gap-5">
              {goat.stats!.map((s) => (
                <Stat key={s.k.en} k={t(s.k)} v={typeof s.v === "string" ? s.v : t(s.v)} />
              ))}
            </div>
            <p className="mt-6 font-mono text-sm tracking-[0.15em] text-danger">MEEEEEH!</p>
          </div>
          <Reveal>
            <Plate className="bg-iron-900">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_40%,#3a3027,#0d0b09_70%)] scanlines">
                <ModelViewer id={goat.id} alt={t(goat.name)} />
              </div>
            </Plate>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            overline={t({ tr: "Metal vahşi yaşam", en: "Metal wildlife" })}
            title={t({ tr: "Denizin hurda canlıları", en: "The sea's scrap creatures" })}
            text={t({
              tr: "Balık sürüleri sudan gemiye zıplar, köpekbalıkları bordadan sıçrar, kuşlar tepeden dalar. Öldürülen balıklar hurda bırakır; oltayla da tutabilirsin.",
              en: "Fish schools leap aboard, sharks breach the hull side, birds dive from above. Killed fish drop scrap — or catch them with a rod.",
            })}
          />
          <div role="tablist" className="flex flex-wrap gap-1 rounded-sm border border-iron-700 bg-iron-850 p-1">
            {filters.map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={f === k}
                onClick={() => setF(k)}
                className={`h-10 rounded-sm px-3 font-display text-sm font-bold uppercase tracking-wider ${f === k ? "bg-amber-400 text-iron-950" : "text-bone-400 hover:text-bone-50"}`}
              >
                {k === "all" ? t({ tr: "Hepsi", en: "All" }) : t(wildRoles[k])}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <ModelGallery items={items} cols={4} />
        </div>
      </section>
    </>
  );
}
