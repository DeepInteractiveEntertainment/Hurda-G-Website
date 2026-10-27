"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Plate } from "@/components/ui";
import { useLang } from "@/lib/i18n";
import { DISCORD_URL } from "@/lib/site";

/* Discord "Derin Bağlantı URL'si": mobil Discord'da bir HURDA-G davetini kabul eden oyuncu buraya gelir. */
export default function DiscordView() {
  const { t } = useLang();
  const steps = [
    { tr: "HURDA-G'yi bilgisayarında aç.", en: "Open HURDA-G on your computer." },
    { tr: "Ana menüden JOIN GAME'e gir; arkadaşının lobisi listede görünür.", en: "Go to JOIN GAME from the main menu; your friend's lobby is in the list." },
    { tr: "Discord'da oyun durumu görünmüyorsa Discord → Kullanıcı Ayarları → Etkinlik Gizliliği'nden açık olduğunu kontrol et.", en: "If your game status doesn't show on Discord, check it's on in Discord → User Settings → Activity Privacy." },
  ];
  return (
    <section className="container-x max-w-3xl pt-36 pb-16 sm:pt-44">
      <p className="overline">HURDA-G × Discord</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none text-bone-50 sm:text-7xl">
        {t({ tr: "Ekibe katıl", en: "Join the crew" })}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-bone-200">
        {t({
          tr: "Bir HURDA-G davetini Discord'dan açtın. Oyun bilgisayarda oynanıyor; ekibe katılmak için oyunu açman gerekiyor.",
          en: "You opened a HURDA-G invite from Discord. The game is played on a computer; open it there to join the crew.",
        })}
      </p>
      <Plate className="mt-10 bg-iron-900">
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.en} className="flex gap-4">
              <span className="font-display text-3xl font-extrabold text-amber-400">{i + 1}</span>
              <p className="pt-1 leading-relaxed text-bone-200">{t(s)}</p>
            </li>
          ))}
        </ol>
      </Plate>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" lang="en" className="btn-plate is-amber">
          {t({ tr: "Discord sunucusu", en: "Discord server" })} <ArrowUpRight className="h-5 w-5" />
        </a>
        <Link href="/" className="btn-plate">HURDA-G</Link>
      </div>
    </section>
  );
}
