"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ModelViewer from "@/components/ModelViewer";
import YouTube from "@/components/YouTube";
import { Plate, Reveal, SectionHead, Stat } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { DISCORD_URL, DEEP_HURDA_URL, ASSET_V } from "@/lib/site";
import { tagline, pitch, acronym, facts, loop, pillars, menuShowcase, videos } from "@/lib/content";

const tiles = [
  { href: "/crew", id: "robot-hurda-g", code: "03", title: { tr: "Tayfa", en: "Crew" }, text: { tr: "Model G, Scrap Master, Cıvata, HAMAL", en: "Model G, Scrap Master, Cıvata, HAMAL" } },
  { href: "/enemies", id: "enemy-bloommaw", code: "05", title: { tr: "Düşmanlar", en: "Enemies" }, text: { tr: "12 Kayıttaki + 2 boss", en: "12 of the Recorded + 2 bosses" } },
  { href: "/wildlife", id: "scrap-goat", code: "06", title: { tr: "Vahşi Yaşam", en: "Wildlife" }, text: { tr: "Metal balıklar, kuşlar, keçi", en: "Metal fish, birds, a goat" } },
  { href: "/arsenal", id: "eq-crewcannon", code: "07", title: { tr: "Cephanelik", en: "Arsenal" }, text: { tr: "105 ürün, 8 kategori", en: "105 items, 8 categories" } },
  { href: "/ship", id: "hurda-ferry", code: "08", title: { tr: "Gemi", en: "Ship" }, text: { tr: "Feribot, tır, korsanlar", en: "Ferry, truck, raiders" } },
  { href: "/terminal", id: "robot-panel-square", code: "04", title: { tr: "TAB Terminali", en: "TAB Terminal" }, text: { tr: "Harita, karakter, yüz ekranı, bot", en: "Map, character, face screen, bot" } },
];

const ticker = {
  tr: "CO-OP EXTRACTION ★ KASET BİTMEDEN GEMİYE DÖN ▶ MAHZENE İN ★ HURDAYI TAŞI ▶ KEÇİDEN UZAK DUR ★ PAPAĞANA İNANMA ▶ KOTA TUTMAZSA ARENA ★ SCRAP MASTER: MOTOR RÖLANTİDE ▶ ",
  en: "CO-OP EXTRACTION ★ GET ABOARD BEFORE THE TAPE ENDS ▶ GO DOWN THE CELLAR ★ HAUL THE SCRAP ▶ AVOID THE GOAT ★ DON'T TRUST THE PARROT ▶ MISS QUOTA, MEET THE ARENA ★ SCRAP MASTER: ENGINE IDLING ▶ ",
};

export default function HomeView() {
  const { t } = useLang();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 sm:pt-36">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(245,165,36,0.16),transparent_55%),radial-gradient(ellipse_at_10%_80%,rgba(232,102,28,0.10),transparent_50%)]" />
        <div className="container-x relative grid items-center gap-10 pb-16 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-amber-400">
              <span className="blink text-danger">●</span> REC · ▶ PLAY 18:42 · 26.10.1987
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.webp" alt="HURDA-G" className="mt-6 w-full max-w-[34rem]" />
            <p className="mt-3 font-mono text-xs tracking-[0.18em] text-bone-600">{t(acronym)}</p>
            <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] text-bone-50 sm:text-6xl">{t(tagline)}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone-400">{t(pitch)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/game" className="btn-plate is-amber">
                {t({ tr: "Oyunu keşfet", en: "Explore the game" })} <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-plate">
                {t({ tr: "Discord'a katıl", en: "Join Discord" })} <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Reveal>
            <Plate className="relative bg-iron-900">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_38%,#3a3027,#0d0b09_70%)] scanlines sm:aspect-square">
                <ModelViewer id="robot-hurda-g" alt="HURDA-G Model G" />
                <div className="pointer-events-none absolute inset-x-3 top-3 flex justify-between font-mono text-[0.7rem] tracking-[0.18em] text-bone-200">
                  <span>MODEL G</span>
                  <span className="text-ok">STATUS: CONNECTED</span>
                </div>
                <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[0.7rem] tracking-[0.18em] text-amber-300">
                  {t({ tr: "SÜRÜKLE · DÖNDÜR", en: "DRAG · ROTATE" })}
                </div>
              </div>
            </Plate>
          </Reveal>
        </div>

        <div className="relative overflow-hidden border-y border-iron-700 bg-amber-400 py-2.5">
          <div className="ticker flex w-max whitespace-nowrap font-display text-lg font-bold uppercase tracking-wider text-iron-950">
            <span>{t(ticker)}</span>
            <span>{t(ticker)}</span>
          </div>
        </div>
      </section>

      {/* ── HIZLI BİLGİ ── */}
      <section className="container-x py-14">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {facts.map((f) => (
            <Stat key={f.k.en} k={t(f.k)} v={t(f.v)} />
          ))}
        </div>
      </section>

      {/* ── DÖNGÜ ── */}
      <section className="container-x py-12 sm:py-20">
        <SectionHead
          overline={t({ tr: "01 · Bir sefer", en: "01 · One voyage" })}
          title={t({ tr: "Faks gelir. Kaset döner. Ada puf olur.", en: "The fax arrives. The tape rolls. The island goes poof." })}
          text={t({ tr: "Her sefer aynı ritimde ilerler ama hiçbir sefer aynı geçmez.", en: "Every voyage follows the same beat, and no two play out the same." })}
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loop.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 70}>
              <li className="h-full rounded-md border border-iron-700 bg-iron-850 p-5">
                <div className="flex items-center justify-between font-mono text-xs tracking-[0.18em]">
                  <span className="text-bone-600">{s.n}</span>
                  <span className="text-amber-400">{s.osd}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-bone-50">{t(s.title)}</h3>
                <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-bone-400">{t(s.text)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Link href="/game" className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-amber-300 hover:text-amber-400">
          {t({ tr: "Döngünün tamamı", en: "The full loop" })} <ArrowRight className="h-5 w-5" />
        </Link>
      </section>

      {/* ── SEKMELER ── */}
      <section className="container-x py-12 sm:py-20">
        <SectionHead
          overline={t({ tr: "TAB terminali", en: "TAB terminal" })}
          title={t({ tr: "Her şey sahada, her model 3B", en: "Everything in the field, every model in 3D" })}
          text={t({
            tr: "Kartlardaki görseller oyunun Unity projesinden çıkarılan güncel modellerden alındı. Sekmeye gir, modeli aç, çevir.",
            en: "Every image here comes from the current models exported straight out of the game's Unity project. Open a tab, open a model, spin it.",
          })}
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((x, i) => (
            <Reveal key={x.href} delay={(i % 3) * 70}>
              <Link href={x.href} className="group relative block overflow-hidden rounded-md border border-iron-700 bg-iron-850 transition-colors hover:border-amber-400/60">
                <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_50%_45%,#2a231c,#0d0b09_70%)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/posters/${x.id}.webp?v=${ASSET_V}`} alt="" loading="lazy" className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-[1.07]" />
                </div>
                <div className="flex items-end justify-between gap-3 border-t border-iron-700 p-4">
                  <div>
                    <p className="font-mono text-[0.7rem] tracking-[0.2em] text-bone-600">TAB-{x.code}</p>
                    <h3 className="font-display text-3xl font-extrabold uppercase text-bone-50">{t(x.title)}</h3>
                    <p className="text-sm text-bone-400">{t(x.text)}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 shrink-0 text-amber-400 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SÜTUNLAR ── */}
      <section className="container-x py-12 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 70}>
              <Plate tight className="h-full bg-iron-900">
                <p className="font-mono text-xs tracking-[0.2em] text-amber-400">P{i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase text-bone-50">{t(p.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-400">{t(p.text)}</p>
              </Plate>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ANA MENÜ VİTRİNİ ── */}
      <section className="container-x py-12 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Plate className="bg-iron-900">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[linear-gradient(to_bottom,#1d2a2e,#0b1416)] scanlines">
                <ModelViewer id="hurda-ferry" alt="Hurda Feribot" orbit="55deg 72deg auto" />
                <p className="pointer-events-none absolute left-3 top-3 font-mono text-[0.7rem] tracking-[0.18em] text-bone-200">MAIN MENU · LOOP</p>
              </div>
            </Plate>
          </Reveal>
          <div>
            <SectionHead
              overline={t({ tr: "Ana menü", en: "Main menu" })}
              title={t({ tr: "Menüde bile gemi yolda", en: "Even the menu is at sea" })}
              text={t({
                tr: "Ana menünün arkasında feribot açık denizde hiç bitmeyen geniş bir çember çizerek sağa sola kıvrılır. Dalgada yalpalar, kıçında köpük izi bırakır, kamera rotayı gecikmeyle izler. Güvertede Scrap Master'ın tırı ve iş başındaki tayfa var:",
                en: "Behind the main menu, the ferry sails an endless wide circle on open sea, weaving left and right. It rolls on the swell, leaves a foam wake, and the camera follows the heading with a lag. On deck: Scrap Master's truck and a crew hard at work:",
              })}
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {menuShowcase.map((m) => (
                <li key={m.title.en} className="rounded-sm border border-iron-700 bg-iron-850 p-4">
                  <p className="font-display text-xl font-bold uppercase text-amber-300">{t(m.title)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-bone-400">{t(m.text)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VİDEOLAR ── */}
      <section className="container-x py-12 sm:py-20">
        <SectionHead overline={t({ tr: "Geliştirme", en: "Development" })} title={t({ tr: "Kayıttan görüntüler", en: "Footage from the tape" })} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <Reveal key={v.id}>
              <YouTube id={v.id} title={t(v.title)} />
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-bone-50">{t(v.title)}</h3>
              <p className="text-sm text-bone-400">{t(v.text)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-x py-12 sm:py-20">
        <Plate className="bg-iron-900 text-center">
          <div className="px-2 py-8 sm:py-12">
            <p className="overline">{t({ tr: "Scrap Master'dan not", en: "A note from Scrap Master" })}</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-none text-bone-50 sm:text-6xl">
              {t({ tr: "“Seferi seç. Motoru ben hallederim.”", en: "“Pick the voyage. I'll handle the engine.”" })}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-plate is-amber">
                {t({ tr: "Discord'a katıl", en: "Join Discord" })} <ArrowUpRight className="h-5 w-5" />
              </a>
              <a href={DEEP_HURDA_URL} target="_blank" rel="noopener noreferrer" lang="en" className="btn-plate">
                Deep Interactive Entertainment <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Plate>
      </section>
    </>
  );
}
