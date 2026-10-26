"use client";

import { ArrowUpRight } from "lucide-react";
import YouTube from "@/components/YouTube";
import { PageHero, Plate, Reveal } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { videos } from "@/lib/content";
import { YOUTUBE_URL } from "@/lib/site";

export default function VideosView() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        code="09"
        osd="▶ PLAY"
        title={t({ tr: "Videolar", en: "Videos" })}
        text={t({
          tr: "Geliştirmeden güncel kayıtlar: ada üretimi, yapay zekâ ve robotun yeni hareketleri.",
          en: "Recent development footage: island generation, enemy AI and the robot's new movement.",
        })}
      >
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-plate is-amber mt-8">
          YouTube <ArrowUpRight className="h-5 w-5" />
        </a>
      </PageHero>
      <section className="container-x space-y-10 py-16 sm:py-24">
        {videos.map((v, i) => (
          <Reveal key={v.id}>
            <Plate className="bg-iron-900">
              <div className="grid items-center gap-6 lg:grid-cols-[1.6fr_1fr]">
                <YouTube id={v.id} title={t(v.title)} />
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-amber-400">TAPE {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 font-display text-4xl font-extrabold uppercase leading-none text-bone-50">{t(v.title)}</h2>
                  <p className="mt-3 text-bone-400">{t(v.text)}</p>
                </div>
              </div>
            </Plate>
          </Reveal>
        ))}
      </section>
    </>
  );
}
