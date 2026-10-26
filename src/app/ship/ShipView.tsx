"use client";

import ModelViewer from "@/components/ModelViewer";
import ModelGallery from "@/components/ModelGallery";
import { PageHero, Plate, Reveal, SectionHead, Stat } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { ship, seaEvents, menuShowcase } from "@/lib/content";

const controls = [
  { key: "W / S", text: { tr: "Gaz kolu — bıraktığın yerde kalır", en: "Throttle — stays where you leave it" } },
  { key: "A / D", text: { tr: "İticiler — dururken bile yerinde döner", en: "Thrusters — turns in place, even at rest" } },
  { key: "X", text: { tr: "Kaptan köşkü kamerası", en: "Wheelhouse camera" } },
  { key: "CROUCH", text: { tr: "Pruva rampasını aç / kapa", en: "Lower / raise the bow ramp" } },
];

export default function ShipView() {
  const { t } = useLang();
  const ferry = ship[0];

  return (
    <>
      <PageHero
        code="08"
        osd="⚓ 10 m/s"
        title={t({ tr: "Gemi", en: "The Ship" })}
        text={t({
          tr: "Paslı ama dürüst bir feribot. Ekibin evi, tırın taşıyıcısı, korsanların hedefi ve girdabın tek yolcusu.",
          en: "Rusty but honest. The crew's home, the truck's carrier, the raiders' target and the vortex's only passenger.",
        })}
      />

      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Plate className="bg-iron-900">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[linear-gradient(to_bottom,#1d2a2e,#0b1416)] scanlines">
                <ModelViewer id={ferry.id} alt={t(ferry.name)} orbit="55deg 70deg auto" />
              </div>
            </Plate>
          </Reveal>
          <div>
            <p className="overline">{t(ferry.role)}</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none text-bone-50 sm:text-7xl">{t(ferry.name)}</h2>
            <p className="mt-5 text-lg leading-relaxed text-bone-200">{t(ferry.text)}</p>
            <div className="mt-6 grid grid-cols-3 gap-5">
              {ferry.stats!.map((s) => (
                <Stat key={s.k.en} k={t(s.k)} v={typeof s.v === "string" ? s.v : t(s.v)} />
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {controls.map((c) => (
                <li key={c.key} className="flex items-center gap-3">
                  <kbd className="min-w-[5.5rem] rounded-sm border border-amber-400/50 bg-iron-850 px-2 py-1 text-center font-mono text-xs text-amber-300">{c.key}</kbd>
                  <span className="text-sm text-bone-200">{t(c.text)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHead
          overline={t({ tr: "Denizde olanlar", en: "Things that happen at sea" })}
          title={t({ tr: "Deniz sakin kalmaz", en: "The sea won't stay calm" })}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {seaEvents.map((e, i) => (
            <Reveal key={e.title.en} delay={(i % 2) * 70}>
              <div className="h-full rounded-md border border-iron-700 bg-iron-850 p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl font-bold uppercase text-bone-50">{t(e.title)}</h3>
                  <span className="font-mono text-xs tracking-[0.15em] text-amber-400">{t(e.stat)}</span>
                </div>
                <p className="mt-2 leading-relaxed text-bone-400">{t(e.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHead overline={t({ tr: "Ana menü vitrini", en: "Main menu showcase" })} title={t({ tr: "Güvertede kim ne yapıyor", en: "Who's doing what on deck" })} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menuShowcase.map((m, i) => (
            <Reveal key={m.title.en} delay={i * 60}>
              <Plate tight className="h-full bg-iron-900">
                <h3 className="font-display text-2xl font-bold uppercase text-amber-300">{t(m.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-200">{t(m.text)}</p>
              </Plate>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHead overline={t({ tr: "Taşıtlar", en: "Vehicles" })} title={t({ tr: "Tır, korsan, pres", en: "Truck, raider, press" })} />
        <div className="mt-10">
          <ModelGallery items={ship.slice(1)} cols={4} />
        </div>
      </section>
    </>
  );
}
