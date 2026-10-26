import type { L } from "./i18n";

export const SITE_URL = "https://hurda-g.com";
export const DEEP_URL = "https://deepinteractiveentertainment.com";
export const DEEP_HURDA_URL = `${DEEP_URL}/games/hurda-g`;
export const DISCORD_URL = "https://discord.gg/ngc6KQcvk";
export const YOUTUBE_URL = "https://www.youtube.com/@DeepInteractiveEntertainment";
export const X_URL = "https://x.com/Deep_Int_Ent";
export const INSTAGRAM_URL = "https://www.instagram.com/deepinteractiveentertainment/";

/** Mağazadan alınan hazır modeller (PSX düşmanlar, ateşli silahlar) de 3B gösterilir — lisanslar kontrol edildi.
 *  false yapılırsa bu modellerin kartlarında yalnızca render görseli çıkar. */
/** Model/görsel güncellenince artır: tarayıcı önbelleğindeki eski dosyalar yerine yenisi indirilir. */
export const ASSET_V = "4";

export const SHOW_THIRD_PARTY_3D = true;

export type NavKey = "home" | "game" | "world" | "crew" | "terminal" | "enemies" | "wildlife" | "arsenal" | "ship" | "videos";

export const nav: { key: NavKey; href: string; label: L; code: string }[] = [
  { key: "home", href: "/", label: { tr: "Ana Sayfa", en: "Home" }, code: "00" },
  { key: "game", href: "/game", label: { tr: "Oyun", en: "Game" }, code: "01" },
  { key: "world", href: "/world", label: { tr: "Dünya", en: "World" }, code: "02" },
  { key: "crew", href: "/crew", label: { tr: "Tayfa", en: "Crew" }, code: "03" },
  { key: "terminal", href: "/terminal", label: { tr: "TAB Terminali", en: "TAB Terminal" }, code: "04" },
  { key: "enemies", href: "/enemies", label: { tr: "Düşmanlar", en: "Enemies" }, code: "05" },
  { key: "wildlife", href: "/wildlife", label: { tr: "Vahşi Yaşam", en: "Wildlife" }, code: "06" },
  { key: "arsenal", href: "/arsenal", label: { tr: "Cephanelik", en: "Arsenal" }, code: "07" },
  { key: "ship", href: "/ship", label: { tr: "Gemi", en: "Ship" }, code: "08" },
  { key: "videos", href: "/videos", label: { tr: "Videolar", en: "Videos" }, code: "09" },
];
