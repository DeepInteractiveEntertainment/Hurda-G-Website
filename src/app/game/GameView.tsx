"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ModelViewer from "@/components/ModelViewer";
import { PageHero, Plate, Reveal, SectionHead, Stat } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { loop, pillars, tapeRules, bosses } from "@/lib/content";

const coop = [
  { title: { tr: "İki elle taşı", en: "Two-hand carry" }, text: { tr: "Ağır hurda tek elle kalkmaz. Fizik tabanlı tutma ile birlikte taşı, birlikte düşür.", en: "Heavy scrap won't lift one-handed. Physics grab means you carry it together — and drop it together." } },
  { title: { tr: "Yere düş, dirilt", en: "Downed, revived" }, text: { tr: "Can sıfırlanınca önce yere düşersin; ikinci kez ölürsün. Kurtarma figürü düşen arkadaşı %30 canla kaldırır.", en: "Hit zero and you're downed first; the second time you die. A rescue effigy brings a fallen friend back at 30% health." } },
  { title: { tr: "Yakın sesli sohbet", en: "Proximity voice" }, text: { tr: "Fısıltıdan çığlığa; mesafeyle söner. El mikrofonu ve megafon sesini uzağa taşır, telsiz çifti menzili açar.", en: "From whisper to scream, fading with distance. A hand mic and megaphone carry your voice; a radio pair opens up the range." } },
  { title: { tr: "Fırlat, bağla, uçur", en: "Launch, chain, fly" }, text: { tr: "Karakter fırlatma topuna bin, zincirle iki eşyayı birbirine çek, balon silahıyla her şeyi havalandır.", en: "Ride the crew cannon, chain two objects together, float anything with the balloon gun." } },
  { title: { tr: "Ekip seviyesi", en: "Crew level" }, text: { tr: "Seviye kişiye değil kayıt slotuna aittir. Her başarılı sefer +1; adalar ve düşmanlar ekibinle birlikte büyür, tavan yok.", en: "Level belongs to the save slot, not a person. Every successful voyage is +1; islands and enemies grow with your crew, no cap." } },
  { title: { tr: "Platformlar arası", en: "Cross-platform" }, text: { tr: "Host ol ya da lobiye katıl. PC, Mac ve mobil aynı denizde; mobil için dokunmatik kontroller hazır.", en: "Host or join a lobby. PC, Mac and mobile on the same sea; touch controls built in for mobile." } },
];

export default function GameView() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        code="01"
        osd="▶ PLAY 18:42"
        title={t({ tr: "Oyun", en: "The Game" })}
        text={t({
          tr: "Hub'da hazırlan, feribotla açıl, VHS kasetinden doğan adaya çık, hurdayı kaset bitmeden gemiye taşı, eve dön. Sonra yine.",
          en: "Gear up at the hub, sail the ferry, land on an island born from a VHS tape, haul the scrap aboard before the tape ends, head home. Then again.",
        })}
      />

      {/* Döngü — dikey zaman çizelgesi */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead overline={t({ tr: "Sefer döngüsü", en: "Voyage loop" })} title={t({ tr: "Sekiz adımda bir sefer", en: "A voyage in eight beats" })} />
        <ol className="relative mt-12 space-y-6 border-l-2 border-iron-700 pl-6 sm:pl-10">
          {loop.map((s, i) => (
            <Reveal key={s.n} delay={i * 40}>
              <li className="relative">
                <span className="absolute -left-[2.05rem] top-1 flex h-7 w-7 items-center justify-center rounded-sm bg-amber-400 font-mono text-xs font-bold text-iron-950 sm:-left-[3.05rem]">
                  {s.n}
                </span>
                <div className="rounded-md border border-iron-700 bg-iron-850 p-5 sm:p-6">
                  <p className="font-mono text-xs tracking-[0.2em] text-amber-400">{s.osd}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold uppercase text-bone-50">{t(s.title)}</h3>
                  <p className="mt-2 max-w-3xl leading-relaxed text-bone-400">{t(s.text)}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Kaset kuralları */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead
            overline={t({ tr: "Kaset kuralları", en: "Tape rules" })}
            title={t({ tr: "Çıkarabildiğin senindir", en: "If you can get it out, it's yours" })}
            text={t({
              tr: "Adalar gerçek değil, kaset dönerken gerçek. Kuralları bilen hayatta kalır; bilmeyen mahzende kalır.",
              en: "The islands aren't real — they're real while the tape rolls. Know the rules and you survive; don't, and you stay in the cellar.",
            })}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {tapeRules.map((r, i) => (
              <Reveal key={r.title.en} delay={i * 60}>
                <Plate tight className="h-full bg-iron-900">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight text-amber-300">{t(r.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-200">{t(r.text)}</p>
                </Plate>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-md border border-iron-700 bg-iron-950 p-6 font-mono scanlines sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 text-bone-50">
              <span className="text-2xl tracking-[0.2em] sm:text-4xl">▶ PLAY 18:42</span>
              <span className="blink text-2xl tracking-[0.2em] text-danger sm:text-4xl">{t({ tr: "KASET BİTİYOR 00:42", en: "TAPE ENDING 00:42" })}</span>
              <span className="text-2xl tracking-[0.2em] text-bone-600 sm:text-4xl">■ STOP</span>
            </div>
            <p className="mt-4 text-xs tracking-[0.2em] text-bone-600">{t({ tr: "ADANIN YAKININDAYKEN KÖŞEDEKİ VİDEO OSD'Sİ", en: "THE CORNER VIDEO OSD WHILE NEAR AN ISLAND" })}</p>
          </div>
        </Reveal>
      </section>

      {/* Kota & arena */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Plate className="bg-iron-900">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_40%,#4a1f0c,#0d0b09_70%)] scanlines">
                <ModelViewer id="scrap-master" alt="Scrap Master" />
                <p className="pointer-events-none absolute left-3 top-3 font-mono text-[0.7rem] tracking-[0.18em] text-danger">ARENA · HEX</p>
              </div>
            </Plate>
          </Reveal>
          <div>
            <SectionHead
              overline={t({ tr: "Kota tutmazsa", en: "If you miss the quota" })}
              title={t({ tr: "Scrap Master'ın arenası", en: "Scrap Master's arena" })}
              text={t(bosses[1].text)}
            />
            <div className="mt-6 grid grid-cols-2 gap-5">
              <Stat k={t({ tr: "Saldırılar", en: "Attacks" })} v={t(bosses[1].stat)} />
              <Stat k={t({ tr: "Arena", en: "Arena" })} v={t({ tr: "Altıgen platform", en: "Hexagon platform" })} />
            </div>
            <Link href="/crew" className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-amber-300 hover:text-amber-400">
              {t({ tr: "Tayfayı tanı", en: "Meet the crew" })} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Co-op */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead overline={t({ tr: "Co-op", en: "Co-op" })} title={t({ tr: "Yalnız başaramazsın", en: "You can't do it alone" })} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coop.map((c, i) => (
            <Reveal key={c.title.en} delay={(i % 3) * 60}>
              <div className="h-full rounded-md border border-iron-700 bg-iron-850 p-5">
                <h3 className="font-display text-2xl font-bold uppercase text-bone-50">{t(c.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-400">{t(c.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sütunlar */}
      <section className="container-x py-16 sm:py-24">
        <SectionHead overline={t({ tr: "Tasarım sütunları", en: "Design pillars" })} title={t({ tr: "Neden HURDA-G", en: "Why HURDA-G" })} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 60}>
              <div className="flex gap-4 rounded-md border border-iron-700 bg-iron-850 p-5">
                <span className="font-display text-5xl font-extrabold text-amber-400/80">{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-bone-50">{t(p.title)}</h3>
                  <p className="mt-1 text-bone-400">{t(p.text)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
