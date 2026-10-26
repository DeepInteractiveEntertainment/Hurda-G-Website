"use client";

import { ASSET_V } from "@/lib/site";
import { useEffect, useRef, useState } from "react";
import { RotateCw, Eraser } from "lucide-react";
import { useLang, type L } from "@/lib/i18n";
import { PanelFace, FACE_COLORS, FACE_PRESETS, MAX_CHARS, TEX, normalizeChar, type Expression, type FaceState, type MouthItem } from "@/lib/panelFace";

/* TAB → KARAKTER → YÜZ DÜZENLE ekranının web kopyası. Yüz, oyundaki PanelFaceScreen kurallarıyla çizilir ve
   3B panel kafanın "screen_face" materyaline doku olarak basılır. */

let loader: Promise<unknown> | null = null;
const loadModelViewer = () => (loader ??= import("@google/model-viewer"));

type MVTexture = unknown;
type MVMaterial = {
  name: string;
  pbrMetallicRoughness: { baseColorTexture: { setTexture: (t: MVTexture) => void } };
  emissiveTexture: { setTexture: (t: MVTexture) => void };
  setEmissiveFactor: (c: [number, number, number]) => void;
};
type MVElement = HTMLElement & {
  model?: { materials: MVMaterial[] };
  createTexture: (uri: string) => Promise<MVTexture>;
  loaded?: boolean;
};

const expressions: { key: Expression; label: L }[] = [
  { key: "normal", label: { tr: "NORMAL", en: "NORMAL" } },
  { key: "talking", label: { tr: "KONUŞUYOR", en: "TALKING" } },
  { key: "scared", label: { tr: "KORKMUŞ", en: "SCARED" } },
  { key: "angry", label: { tr: "KIZGIN", en: "ANGRY" } },
  { key: "happy", label: { tr: "MUTLU", en: "HAPPY" } },
  { key: "sleepy", label: { tr: "UYUKLUYOR", en: "SLEEPY" } },
];
const items: { key: MouthItem; label: L }[] = [
  { key: "none", label: { tr: "YOK", en: "NONE" } },
  { key: "cigarette", label: { tr: "SİGARA", en: "CIGARETTE" } },
  { key: "bottle", label: { tr: "ŞİŞE", en: "BOTTLE" } },
];

function Choice({ on, onClick, children, lang }: { on: boolean; onClick: () => void; children: React.ReactNode; lang?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      lang={lang}
      className={`min-h-11 rounded-sm px-3 font-display text-sm font-bold uppercase tracking-wider transition-colors ${
        on ? "bg-amber-400 text-iron-950" : "border border-iron-600 bg-iron-850 text-bone-200 hover:border-amber-400/60"
      }`}
    >
      {children}
    </button>
  );
}

export default function FaceEditor({ modelBase = "/models" }: { modelBase?: string }) {
  const { t, lang } = useLang();
  const [state, setState] = useState<FaceState>({
    mode: "auto", text: ":)", color: 0, rotation: 0, size: 2, expression: "normal", item: "none", round: false,
  });
  const [cycle, setCycle] = useState(true);
  const [ready, setReady] = useState(false);
  const stateRef = useRef(state);
  stateRef.current = state;
  const canvas = useRef<HTMLCanvasElement>(null);
  const mv = useRef<MVElement | null>(null);

  useEffect(() => {
    let alive = true;
    loadModelViewer().then(() => alive && setReady(true));
    return () => { alive = false; };
  }, []);

  // Otomatik modda ifadeleri sırayla göster (oyunda sesle değişir).
  useEffect(() => {
    if (!cycle || state.mode !== "auto") return;
    const id = window.setInterval(() => {
      setState((s) => {
        const i = expressions.findIndex((e) => e.key === s.expression);
        return { ...s, expression: expressions[(i + 1) % expressions.length].key };
      });
    }, 2600);
    return () => window.clearInterval(id);
  }, [cycle, state.mode]);

  // Çizim döngüsü: 20 fps tuval, ~6 fps 3B doku.
  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const face = new PanelFace();
    const img = ctx.createImageData(TEX, TEX);
    let raf = 0, last = performance.now(), acc = 0, texAcc = 0, pushing = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const push = async () => {
      const el = mv.current;
      const mat = el?.model?.materials.find((m) => m.name === "screen_face");
      if (!el || !mat || pushing) return;
      pushing = true;
      try {
        const tex = await el.createTexture(cv.toDataURL());
        mat.pbrMetallicRoughness.baseColorTexture.setTexture(tex);
        mat.emissiveTexture.setTexture(tex);
        mat.setEmissiveFactor([1, 1, 1]);
      } catch {
        /* model henüz yüklenmedi */
      }
      pushing = false;
    };

    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      acc += dt; texAcc += dt;
      if (acc >= 1 / 20) {
        face.render(stateRef.current, reduce ? 0 : acc, img.data);
        ctx.putImageData(img, 0, 0);
        acc = 0;
      }
      if (texAcc >= 1 / 6) { texAcc = 0; void push(); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const set = (p: Partial<FaceState>) => setState((s) => ({ ...s, ...p }));
  const typeText = (v: string) => set({ text: [...v].map(normalizeChar).slice(0, MAX_CHARS).join("") });
  const model = state.round ? "robot-panel-round" : "robot-panel-square";

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-sm border border-iron-700 bg-[radial-gradient(circle_at_50%_35%,#3a3027,#0d0b09_70%)]">
          {ready ? (
            <model-viewer
              key={model}
              ref={(el: HTMLElement | null) => { mv.current = el as MVElement | null; }}
              src={`${modelBase}/${model}.glb?v=${ASSET_V}`}
              alt={t({ tr: "Panelli hurda kafa", en: "Panel scrap head" })}
              camera-controls=""
              camera-orbit="0deg 82deg auto"
              camera-target="auto auto auto"
              interaction-prompt="none"
              shadow-intensity="1"
              exposure="1.05"
              tone-mapping="neutral"
              touch-action="pan-y"
              className="block h-full w-full"
              style={{ background: "transparent" }}
            />
          ) : null}
          <p className="pointer-events-none absolute left-3 top-3 font-mono text-[0.65rem] tracking-[0.18em] text-bone-200">3D · {state.round ? "ROUND" : "SQUARE"} PANEL</p>
        </div>
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-iron-700 bg-black p-4">
          <canvas
            ref={canvas}
            width={TEX}
            height={TEX}
            aria-label={t({ tr: "Panel yüz ekranı", en: "Panel face screen" })}
            className={`h-full w-full [image-rendering:pixelated] ${state.round ? "rounded-full" : "rounded-md"}`}
          />
          <p className="pointer-events-none absolute left-3 top-3 font-mono text-[0.65rem] tracking-[0.18em] text-bone-400">64×64 · CRT</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-600">{t({ tr: "Panel şekli", en: "Panel shape" })}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Choice on={!state.round} onClick={() => set({ round: false })}>{t({ tr: "Kare panel", en: "Square panel" })}</Choice>
            <Choice on={state.round} onClick={() => set({ round: true })}>{t({ tr: "Yuvarlak panel", en: "Round panel" })}</Choice>
          </div>
        </div>

        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-600">{t({ tr: "Panel yüzü", en: "Panel face" })}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Choice on={state.mode === "custom"} onClick={() => set({ mode: "custom" })}>{t({ tr: "Kendi yüzüm", en: "My own face" })}</Choice>
            <Choice on={state.mode === "auto"} onClick={() => set({ mode: "auto" })}>{t({ tr: "Otomatik yüz", en: "Auto face" })}</Choice>
          </div>
        </div>

        {state.mode === "custom" ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <input
                value={state.text}
                onChange={(e) => typeText(e.target.value)}
                maxLength={MAX_CHARS * 2}
                aria-label={t({ tr: "En fazla 4 karakter", en: "Up to 4 characters" })}
                className="h-11 w-32 rounded-sm border border-iron-600 bg-iron-950 px-3 text-center font-mono text-xl tracking-[0.3em] text-amber-300 focus:border-amber-400 focus:outline-none"
              />
              <button type="button" onClick={() => set({ rotation: (state.rotation + 1) % 4 })} className="inline-flex min-h-11 items-center gap-1.5 rounded-sm border border-iron-600 px-3 font-display text-sm font-bold uppercase tracking-wider text-bone-200 hover:border-amber-400/60">
                <RotateCw className="h-4 w-4" /> {t({ tr: "Döndür", en: "Rotate" })}
              </button>
              <button type="button" onClick={() => set({ text: "" })} className="inline-flex min-h-11 items-center gap-1.5 rounded-sm border border-iron-600 px-3 font-display text-sm font-bold uppercase tracking-wider text-bone-200 hover:border-amber-400/60">
                <Eraser className="h-4 w-4" /> {t({ tr: "Temizle", en: "Clear" })}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {FACE_PRESETS.map((p) => (
                <Choice key={p} on={state.text === p} onClick={() => set({ text: p })}>
                  <span className="font-mono normal-case">{p}</span>
                </Choice>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-600">{t({ tr: "Boyut", en: "Size" })}</span>
              {[1, 2, 3].map((n) => (
                <Choice key={n} on={state.size === n} onClick={() => set({ size: n })}>{n}</Choice>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {expressions.map((e) => (
                <Choice key={e.key} on={state.expression === e.key} onClick={() => { setCycle(false); set({ expression: e.key }); }}>
                  {t(e.label)}
                </Choice>
              ))}
            </div>
            <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm text-bone-200">
              <input type="checkbox" checked={cycle} onChange={(e) => setCycle(e.target.checked)} className="accent-amber-400" />
              {t({ tr: "İfadeleri sırayla oynat (oyunda sesine göre değişir)", en: "Cycle expressions (in game they follow your voice)" })}
            </label>
          </div>
        )}

        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-600">{t({ tr: "Ağızdaki eşya (emote)", en: "Mouth item (emote)" })}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {items.map((i) => (
              <Choice key={i.key} on={state.item === i.key} onClick={() => set({ item: i.key })}>{t(i.label)}</Choice>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-600">{t({ tr: "Ekran rengi", en: "Screen colour" })}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {FACE_COLORS.map((c, i) => (
              <button
                key={c.en}
                type="button"
                onClick={() => set({ color: i })}
                aria-pressed={state.color === i}
                className={`inline-flex min-h-11 items-center gap-2 rounded-sm border px-3 font-mono text-xs tracking-widest ${
                  state.color === i ? "border-amber-400 bg-iron-800 text-bone-50" : "border-iron-600 bg-iron-850 text-bone-400"
                }`}
              >
                <span className="h-4 w-4 rounded-sm" style={{ background: `rgb(${c.rgb.map((v) => Math.round(v * 255)).join(",")})` }} />
                {lang === "tr" ? c.tr : c.en}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
