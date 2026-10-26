"use client";

import ModelViewer from "@/components/ModelViewer";
import YouTube from "@/components/YouTube";
import { PageHero, Plate, Reveal, SectionHead } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { story, rings, weathers, weatherNotes, videos } from "@/lib/content";

export default function WorldView() {
  const { t, lang } = useLang();
  const islandVideo = videos.find((v) => v.tab === "world")!;

  return (
    <>
      <PageHero
        code="02"
        osd="REC 1987"
        title={t({ tr: "Dünya", en: "The World" })}
        text={t({
          tr: "Balkan-Anadolu korku-komedisi, 1987 VHS ruhuyla. Hub hep güneşli ve sıcak; deniz ve kasetler soğuk, parazitli.",
          en: "Balkan-Anatolian horror-comedy with a 1987 VHS soul. The hub is always sunny and warm; the sea and the tapes are cold and full of static.",
        })}
      />

      {/* Hikaye */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead overline={t({ tr: "Hikâye", en: "Story" })} title={t({ tr: "Kasette ne var?", en: "What's on the tape?" })} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {story.map((s, i) => (
            <Reveal key={s.title.en} delay={(i % 2) * 80}>
              <Plate className="h-full bg-iron-900">
                <p className="font-mono text-xs tracking-[0.2em] text-bone-600">CH.{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-3xl font-bold uppercase text-amber-300">{t(s.title)}</h3>
                <p className="mt-3 leading-relaxed text-bone-200">{t(s.text)}</p>
              </Plate>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deniz halkaları */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead
              overline={t({ tr: "Deniz = yayın alanı", en: "The sea = broadcast range" })}
              title={t({ tr: "Hub'dan uzaklaştıkça", en: "The farther from the hub" })}
              text={t({
                tr: "Denizdeki sis, fırtına ve hava aslında sinyal paraziti. Adalar geminin önünde doğar, arkada kaybolur; hub'dan uzaklaştıkça daha zengin ve daha tehlikeli olur. 6 km'yi geçersen girdap seni geri çağırır.",
                en: "The fog, storms and weather at sea are really signal interference. Islands spawn ahead of the ship and vanish behind it; the farther from the hub, the richer and deadlier. Pass 6 km and the vortex calls you home.",
              })}
            />
          </div>
          <Reveal>
            <div className="overflow-x-auto rounded-md border border-iron-700">
              <table className="w-full min-w-[30rem] text-left text-sm">
                <thead className="bg-iron-800 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber-400">
                  <tr>
                    <th className="px-4 py-3">{t({ tr: "Halka", en: "Ring" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Uzaklık", en: "Distance" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Ada", en: "Island" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Mahzen", en: "Cellar" })}</th>
                    <th className="px-4 py-3">{t({ tr: "Deniz", en: "Sea" })}</th>
                  </tr>
                </thead>
                <tbody>
                  {rings.map((r) => (
                    <tr key={r.ring} className="border-t border-iron-700 bg-iron-850">
                      <td className="px-4 py-3 font-display text-2xl font-bold text-bone-50">{r.ring}</td>
                      <td className="px-4 py-3 font-mono text-bone-200">{r.dist}</td>
                      <td className="px-4 py-3 text-bone-200">{t(r.island)}</td>
                      <td className="px-4 py-3 text-bone-200">{t(r.cellar)}</td>
                      <td className="px-4 py-3 text-bone-400">{t(r.sea)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ada üretimi */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              overline={t({ tr: "Prosedürel adalar", en: "Procedural islands" })}
              title={t({ tr: "Her kaset başka bir yer", en: "Every tape is a different place" })}
              text={t({
                tr: "Adalar bir seed'den üretilir: kıyı, kayalar, yollar, hurda yığınları ve kapının altındaki mahzen odaları. Aynı seed her oyuncuda aynı adayı kurar; geç katılan da yetişir. Tır adalarında tır güverteden iner, yükünü toplar.",
                en: "Islands are generated from a seed: shoreline, rocks, roads, scrap piles and cellar rooms below the hatch. The same seed builds the same island for every player, so late joiners catch up. On truck islands, the truck rolls off the deck to load up.",
              })}
            />
          </div>
          <Reveal>
            <Plate className="bg-iron-900">
              <YouTube id={islandVideo.id} title={t(islandVideo.title)} />
              <p className="mt-3 font-display text-lg font-bold uppercase text-bone-50">{t(islandVideo.title)}</p>
            </Plate>
          </Reveal>
        </div>
      </section>

      {/* Hava */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead
          overline={t({ tr: "Hava sistemi", en: "Weather system" })}
          title={t({ tr: "30 hava, hepsi oynanış", en: "30 weathers, all gameplay" })}
          text={t({
            tr: "Hava her seferde seed'le seçilir ve görüş, rüzgâr, kayganlık, can ve stamina üzerinde gerçek etkisi vardır. Kırmızı olanlar doğrudan tehlikeli.",
            en: "Weather is rolled per voyage from the seed and has real effects on visibility, wind, footing, health and stamina. The red ones are outright hazards.",
          })}
        />
        <Reveal className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {weathers.map((w) => (
              <li
                key={w.en}
                className={`rounded-sm border px-3 py-1.5 font-display text-base font-semibold uppercase tracking-wide ${
                  w.hazard ? "border-danger/60 bg-danger/10 text-[#ff8a74]" : "border-iron-600 bg-iron-850 text-bone-200"
                }`}
              >
                {lang === "tr" ? w.tr : w.en}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {weatherNotes.map((n, i) => (
            <Reveal key={n.title.en} delay={i * 60}>
              <div className="h-full rounded-md border border-iron-700 bg-iron-850 p-5">
                <h3 className="font-display text-2xl font-bold uppercase text-amber-300">{t(n.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-400">{t(n.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Derinlik */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Plate className="bg-iron-900">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-[linear-gradient(to_bottom,#123038,#05090a)] scanlines">
                <ModelViewer id="wild-vinc-ahtapot" alt="Vinç Ahtapot" />
              </div>
            </Plate>
          </Reveal>
          <SectionHead
            overline={t({ tr: "Derin deniz", en: "Deep sea" })}
            title={t({ tr: "Deniz de canlı", en: "The sea is alive too" })}
            text={t({
              tr: "Somun gövdeli sardalyalar, testere dişli piranhalar, zırhlı köpekbalıkları ve gemiye kollarını uzatan Vinç Ahtapot. Denizin kendi düşmanları var — ve bir de keçi.",
              en: "Nut-bodied sardines, saw-toothed piranhas, armored sharks and the Crane Octopus reaching over your deck. The sea has its own enemies — and also a goat.",
            })}
          />
        </div>
      </section>
    </>
  );
}
