/* Oyundaki panel kafa yüz ekranının (PanelFaceScreen.cs + PanelFaceFont.cs) birebir TypeScript kopyası.
   64×64 tuval, sol-alt orijin; çıktı 128×128 CRT dokusu (tarama çizgisi, titreme, korkuda kayma). */

export const CANVAS = 64;
export const TEX = 128;

export const FACE_COLORS: { rgb: [number, number, number]; tr: string; en: string }[] = [
  { rgb: [0.35, 1, 0.45], tr: "YEŞİL", en: "GREEN" },
  { rgb: [1, 0.7, 0.15], tr: "AMBER", en: "AMBER" },
  { rgb: [0.3, 0.9, 1], tr: "CAMGÖBEĞİ", en: "CYAN" },
  { rgb: [0.92, 0.95, 1], tr: "BEYAZ", en: "WHITE" },
  { rgb: [1, 0.3, 0.25], tr: "KIRMIZI", en: "RED" },
  { rgb: [1, 0.45, 0.85], tr: "PEMBE", en: "PINK" },
  { rgb: [1, 0.95, 0.3], tr: "SARI", en: "YELLOW" },
];

export const FACE_PRESETS = [":)", ":D", ">:(", "T_T", "OWO", "^_^", "X_X", "♥♥"];
export const MAX_CHARS = 4;

export type Expression = "normal" | "talking" | "scared" | "angry" | "happy" | "sleepy";
export type MouthItem = "none" | "cigarette" | "bottle";

export type FaceState = {
  mode: "custom" | "auto";
  text: string;
  color: number;
  rotation: number; // 0..3
  size: number; // 1..3
  expression: Expression;
  item: MouthItem;
  round: boolean; // yuvarlak panel: köşeler karartılır
};

// Config varsayılanları (PanelFaceConfig.cs)
const SCAN_DARK = 0.45, FLICKER = 0.08, BG_GLOW = 0.07, PUPIL_X = 4, PUPIL_Y = 2;

/* ── Yazı tipi: 5×9 (5×7 gövde + Türkçe işaret satırları) ── */
const W = 5, H = 9;
const BASE: Record<string, string> = {
  " ": "...................................", A: ".###.#...##...#######...##...##...#",
  B: "####.#...##...#####.#...##...#####.", C: ".###.#...##....#....#....#...#.###.",
  D: "###..#..#.#...##...##...##..#.###..", E: "######....#....####.#....#....#####",
  F: "######....#....####.#....#....#....", G: ".###.#...##....#.####...##...#.####",
  H: "#...##...##...#######...##...##...#", I: ".###...#....#....#....#....#...###.",
  J: "..###...#....#....#....#.#..#..##..", K: "#...##..#.#.#..##...#.#..#..#.#...#",
  L: "#....#....#....#....#....#....#####", M: "#...###.###.#.##.#.##...##...##...#",
  N: "#...##...###..##.#.##..###...##...#", O: ".###.#...##...##...##...##...#.###.",
  P: "####.#...##...#####.#....#....#....", Q: ".###.#...##...##...##.#.##..#..##.#",
  R: "####.#...##...#####.#.#..#..#.#...#", S: ".#####....#.....###.....#....#####.",
  T: "#####..#....#....#....#....#....#..", U: "#...##...##...##...##...##...#.###.",
  V: "#...##...##...##...##...#.#.#...#..", W: "#...##...##...##.#.##.#.##.#.#.#.#.",
  X: "#...##...#.#.#...#...#.#.#...##...#", Y: "#...##...#.#.#...#....#....#....#..",
  Z: "#####....#...#...#...#...#....#####", "0": ".###.#...##..###.#.###..##...#.###.",
  "1": "..#...##....#....#....#....#...###.", "2": ".###.#...#....#...#...#...#...#####",
  "3": "#####...#...#.....#.....##...#.###.", "4": "...#...##..#.#.#..#.#####...#....#.",
  "5": "######....####.....#....##...#.###.", "6": "..##..#...#....####.#...##...#.###.",
  "7": "#####....#...#...#...#....#....#...", "8": ".###.#...##...#.###.#...##...#.###.",
  "9": ".###.#...##...#.####....#...#..##..", "!": "..#....#....#....#....#.........#..",
  "?": ".###.#...#....#...#...#.........#..", ".": "..........................##...##..",
  ",": ".....................##....#...#...", ":": "......##...##........##...##.......",
  ";": "......##...##........##....#...#...", "'": "..#....#...#.......................",
  '"': ".#.#..#.#..........................", "(": "...#...#...#....#....#.....#.....#.",
  ")": ".#.....#.....#....#....#...#...#...", "[": ".###..#....#....#....#....#....###.",
  "]": ".###....#....#....#....#....#..###.", "<": "...#...#...#...#.....#.....#.....#.",
  ">": ".#.....#.....#.....#...#...#...#...", "/": ".........#...#...#...#...#.........",
  "\\": ".....#.....#.....#.....#.....#.....", "|": "..#....#....#....#....#....#....#..",
  "-": "...............#####...............", _: "..............................#####",
  "=": "..........#####.....#####..........", "+": ".......#....#..#####..#....#.......",
  "*": ".......#..#.#.#.###.#.#.#..#.......", "^": "..#...#.#.#...#....................",
  "~": "...........#...#.#.#...#...........", "#": ".#.#..#.#.#####.#.#.#####.#.#..#.#.",
  "@": ".###.#...#....#.##.##.#.##.#.#.###.", $: "..#...#####.#...###...#.#####...#..",
  "%": "##...##..#...#...#...#...#..##...##", "&": ".##..#..#.#.#...#...#.#.##..#..##.#",
  "♥": ".#.#.###############.###...#.......",
};
const MARKED: Record<string, [string, string | null, string | null]> = {
  Ç: ["C", null, "..#.."], Ş: ["S", null, "..#.."], Ğ: ["G", ".###.", null],
  İ: ["I", "..#..", null], Ö: ["O", ".#.#.", null], Ü: ["U", ".#.#.", null],
};

export function normalizeChar(c: string): string {
  const map: Record<string, string> = { ı: "I", i: "İ", ç: "Ç", ğ: "Ğ", ö: "Ö", ş: "Ş", ü: "Ü" };
  return map[c] ?? c.toUpperCase();
}

function glyph(ch: string): boolean[][] {
  let c = normalizeChar(ch);
  const grid = Array.from({ length: W }, () => Array<boolean>(H).fill(false));
  let above: string | null = null, below: string | null = null;
  if (MARKED[c]) [c, above, below] = MARKED[c];
  const rows = BASE[c] ?? BASE["?"];
  for (let y = 0; y < 7; y++) for (let x = 0; x < W; x++) grid[x][y + 1] = rows[y * W + x] === "#";
  if (above) for (let x = 0; x < W; x++) grid[x][0] = above[x] === "#";
  if (below) for (let x = 0; x < W; x++) grid[x][8] = below[x] === "#";
  return grid;
}

/* ── Çizici ── */
type RGB = [number, number, number];

export class PanelFace {
  readonly canvas = new Float32Array(CANVAS * CANVAS * 3);
  time = 0;
  level = 0; // ses seviyesi 0..1 (sitede sentetik)
  private nextBlink = 2;
  private blinkUntil = 0;
  private look: [number, number] = [0, 0];

  private c: RGB = [0.35, 1, 0.45];

  private plot(x: number, y: number, c: RGB = this.c) {
    if (x < 0 || y < 0 || x >= CANVAS || y >= CANVAS) return;
    const i = (y * CANVAS + x) * 3;
    this.canvas[i] = c[0]; this.canvas[i + 1] = c[1]; this.canvas[i + 2] = c[2];
  }
  private fill(x: number, y: number, w: number, h: number, c: RGB = this.c) {
    for (let yy = y; yy < y + h; yy++) for (let xx = x; xx < x + w; xx++) this.plot(xx, yy, c);
  }
  private rectOutline(x: number, y: number, w: number, h: number) {
    this.fill(x, y, w, 1); this.fill(x, y + h - 1, w, 1); this.fill(x, y, 1, h); this.fill(x + w - 1, y, 1, h);
  }
  private line(x0: number, y0: number, x1: number, y1: number, c: RGB = this.c) {
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    for (let g = 0; g < 256; g++) {
      this.plot(x0, y0, c); this.plot(x0, y0 + 1, c);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  }
  private ring(cx: number, cy: number, r: number) {
    for (let y = -r - 1; y <= r + 1; y++)
      for (let x = -r - 1; x <= r + 1; x++) {
        const d = Math.sqrt(x * x + y * y);
        if (d > r - 1.5 && d <= r + 0.5) this.plot(cx + x, cy + y);
      }
  }
  private ellipse(cx: number, cy: number, rx: number, ry: number) {
    for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) if ((x * x) / (rx * rx) + (y * y) / (ry * ry) <= 1) this.plot(cx + x, cy + y);
  }
  private arc(cx: number, cy: number, rx: number, ry: number) {
    for (let x = -rx; x <= rx; x++) {
      const t = x / rx;
      const y = Math.round(Math.sqrt(Math.max(0, 1 - t * t)) * ry);
      this.plot(cx + x, cy - y); this.plot(cx + x, cy - y + 1);
    }
  }
  private eye(cx: number, cy: number, px: number, py: number, lidTop = 0) {
    const r = 6, travel = r - 2;
    const lidY = lidTop > 0 ? cy + 1 : Infinity;
    for (let y = -r - 1; y <= r + 1; y++)
      for (let x = -r - 1; x <= r + 1; x++) {
        if (cy + y > lidY) continue;
        const d = Math.sqrt(x * x + y * y);
        if (d > r - 1.5 && d <= r + 0.5) this.plot(cx + x, cy + y);
      }
    const bx = Math.max(-travel, Math.min(travel, px)), by = Math.max(-travel + 2, Math.min(travel - 2, py));
    for (let y = -1; y <= 1; y++)
      for (let x = 0; x <= 1; x++) {
        if (cy + by + y > lidY) continue;
        this.plot(cx + bx + x - (bx > 0 ? 1 : 0), cy + by + y);
      }
    if (lidTop > 0) this.fill(cx - r, lidY, 2 * r + 1, 2);
  }
  private drawGlyph(ch: string, x: number, y: number, scale: number) {
    const g = glyph(ch);
    for (let gy = 0; gy < H; gy++) for (let gx = 0; gx < W; gx++) if (g[gx][gy]) this.fill(x + gx * scale, y + (H - 1 - gy) * scale, scale, scale);
  }

  private drawText(s: FaceState) {
    const text = [...s.text].slice(0, MAX_CHARS);
    if (!text.length) return;
    const n = text.length, w = n * (W + 1) - 1, h = H;
    const scale = Math.max(1, Math.min(s.size + 1, Math.min(Math.floor(60 / w), Math.floor(60 / h))));
    const rot = ((s.rotation % 4) + 4) % 4, vertical = rot % 2 === 1;
    const totalW = (vertical ? h : w) * scale, totalH = (vertical ? w : h) * scale;
    const ox = Math.floor((CANVAS - totalW) / 2), oy = Math.floor((CANVAS - totalH) / 2);
    text.forEach((ch, i) => {
      const g = glyph(ch);
      for (let gy = 0; gy < H; gy++)
        for (let gx = 0; gx < W; gx++) {
          if (!g[gx][gy]) continue;
          const tx = i * (W + 1) + gx, ty = gy;
          let px: number, py: number;
          switch (rot) {
            case 1: px = h - 1 - ty; py = w - 1 - tx; break;
            case 2: px = w - 1 - tx; py = ty; break;
            case 3: px = ty; py = tx; break;
            default: px = tx; py = h - 1 - ty;
          }
          this.fill(ox + px * scale, oy + py * scale, scale, scale);
        }
    });
  }

  private drawAuto(e: Expression) {
    const lv = this.level, t = this.time;
    const blink = t < this.blinkUntil;
    const shake = e === "scared" ? Math.round(Math.sin(t * 60) * 1.4) : 0;
    const bob = e === "talking" ? Math.round(lv * 2) : 0;
    const lx = 21, rx = 43, ey = 38, my = 19;
    const px = -Math.round(this.look[0] * PUPIL_X), py = Math.round(this.look[1] * PUPIL_Y);
    switch (e) {
      case "scared":
        this.ring(lx + shake, ey, 8); this.ring(rx + shake, ey, 8);
        this.fill(lx + shake - 1 + px, ey - 1 + py, 2, 2); this.fill(rx + shake - 1 + px, ey - 1 + py, 2, 2);
        this.line(lx - 8 + shake, ey + 12, lx + 5 + shake, ey + 15); this.line(rx - 5 + shake, ey + 15, rx + 8 + shake, ey + 12);
        this.ring(32 + shake, my, 5 + Math.round(lv * 4));
        break;
      case "angry": {
        this.eye(lx, ey, px, py, 1); this.eye(rx, ey, px, py, 1);
        this.line(lx - 7, ey + 9, lx + 6, ey + 4); this.line(rx - 6, ey + 4, rx + 7, ey + 9);
        const h = 5 + Math.round(lv * 6);
        this.rectOutline(20, my - Math.floor(h / 2), 25, h);
        for (let x = 22; x < 44; x += 4) this.line(x, my - Math.floor(h / 2), x + 2, my + Math.floor(h / 2));
        break;
      }
      case "happy":
        this.line(lx - 5, ey - 2, lx, ey + 3); this.line(lx, ey + 3, lx + 5, ey - 2);
        this.line(rx - 5, ey - 2, rx, ey + 3); this.line(rx, ey + 3, rx + 5, ey - 2);
        this.arc(32, my + 6, 12, 8);
        break;
      case "sleepy": {
        this.fill(lx - 5, ey - 1, 11, 2); this.fill(rx - 5, ey - 1, 11, 2);
        this.ring(32, my, 2);
        const zy = 50 + Math.round(((t * 4) % 8 + 8) % 8);
        this.drawGlyph("Z", 50, zy, 1);
        break;
      }
      default: {
        if (blink) { this.fill(lx - 6, ey + bob, 13, 2); this.fill(rx - 6, ey + bob, 13, 2); }
        else { this.eye(lx, ey + bob, px, py); this.eye(rx, ey + bob, px, py); }
        const brow = Math.round(lv * 4);
        this.fill(lx - 5, ey + 9 + brow, 11, 2); this.fill(rx - 5, ey + 9 + brow, 11, 2);
        if (e === "talking") {
          const mh = 2 + Math.round(lv * 13), mw = 14 + Math.round(lv * 8);
          this.ellipse(32, my, Math.floor(mw / 2), Math.max(1, Math.floor(mh / 2)));
        } else this.fill(25, my, 15, 2);
      }
    }
  }

  private drawItem(item: MouthItem, custom: boolean, e: Expression) {
    const talk = Math.min(1, this.level * 1.6), t = this.time;
    const wob = Math.sin(t * 23) * talk;
    const mx = 38;
    let my = custom ? 8 : 19;
    if (!custom && e === "talking") my += Math.round(wob * 2);
    const c = this.c;
    const bright: RGB = [c[0] + (1 - c[0]) * 0.65, c[1] + (1 - c[1]) * 0.65, c[2] + (1 - c[2]) * 0.65];
    const inhale = (Math.sin(t * 0.9) + 1) / 2 > 0.8 ? 1 : 0.2;
    if (item === "cigarette") {
      const ang = ((12 + wob * 28 + Math.sin(t * 1.7) * 4) * Math.PI) / 180;
      const len = 15;
      const ex = mx + Math.round(Math.cos(ang) * len), ey = my + Math.round(Math.sin(ang) * len);
      this.line(mx, my, ex, ey, bright);
      this.fill(mx - 1, my - 1, 3, 3, [c[0] * 0.55, c[1] * 0.55, c[2] * 0.55]);
      const glow = (0.55 + (1.35 - 0.55) * inhale) * (1 + Math.sin(t * 19) * 0.08);
      this.fill(ex - 1, ey - 1, 3, 3, [1 * glow, 0.35 * glow, 0.08 * glow]);
      for (let i = 0; i < 5; i++) {
        const k = (((t * 0.55 + i * 0.2) % 1) + 1) % 1;
        const sx = ex + Math.round(Math.sin(k * 9 + i) * (2 + k * 4));
        const sy = ey + 2 + Math.round(k * (64 - ey));
        const g = BG_GLOW;
        const s: RGB = [bright[0] + (c[0] * g - bright[0]) * k, bright[1] + (c[1] * g - bright[1]) * k, bright[2] + (c[2] * g - bright[2]) * k];
        this.fill(sx, sy, k > 0.5 ? 2 : 1, k > 0.5 ? 2 : 1, s);
      }
    } else if (item === "bottle") {
      const ang = (-35 + 73 * inhale + wob * 22) * (Math.PI / 180);
      const dir: [number, number] = [Math.cos(ang), Math.sin(ang)];
      const lip: [number, number] = [mx - 4, my];
      const cell = (x: number, y: number): 0 | 1 | 2 => {
        const dx = x - lip[0], dy = y - lip[1];
        const along = dx * dir[0] + dy * dir[1], perp = Math.abs(dx * dir[1] - dy * dir[0]);
        if (along < 0 || along > 19) return 0;
        const neck = along <= 6 && perp <= 1.6, body = along > 6 && perp <= 4.4;
        if (!neck && !body) return 0;
        const edge = (neck ? perp > 0.8 : perp > 3.4 || along > 18) || along < 1.2;
        return edge ? 2 : 1;
      };
      let minY = CANVAS, maxY = -1;
      for (let y = 0; y < CANVAS; y++) for (let x = 0; x < CANVAS; x++) if (cell(x, y) === 1) { minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
      const surface = minY + (maxY - minY + 1) * 0.6;
      const slosh = wob * 2.2 + Math.sin(t * 3.1) * 0.6 + inhale * 1.5;
      const liquid: RGB = [c[0] * 0.9, c[1] * 0.9, c[2] * 0.9], empty: RGB = [c[0] * 0.22, c[1] * 0.22, c[2] * 0.22];
      for (let y = 0; y < CANVAS; y++)
        for (let x = 0; x < CANVAS; x++) {
          const k = cell(x, y);
          if (!k) continue;
          if (k === 2) { this.plot(x, y, bright); continue; }
          const s = surface + slosh * ((x - mx) / 8) + Math.sin(x * 0.9 + t * 9) * 0.5;
          const wet = y < s, top = wet && y >= s - 1;
          this.plot(x, y, top ? bright : wet ? liquid : empty);
        }
    }
  }

  /** dt saniye ilerlet, yüzü çiz ve 128×128 RGBA CRT çıktısını yaz. */
  render(s: FaceState, dt: number, out: Uint8ClampedArray) {
    this.time += dt;
    const t = this.time;
    // Sentetik ses ve bakış: konuşurken hece hızında dalgalanır.
    this.level = s.expression === "talking" || s.expression === "angry" || s.expression === "scared"
      ? Math.max(0, 0.45 + 0.35 * Math.sin(t * 9) * Math.sin(t * 2.3)) : 0;
    this.look = [Math.sin(t * 0.7) * 0.8, Math.sin(t * 0.43) * 0.6];
    if (t > this.nextBlink) { this.blinkUntil = t + 0.12; this.nextBlink = t + 2.5 + Math.random() * 3; }

    this.c = FACE_COLORS[s.color]?.rgb ?? FACE_COLORS[0].rgb;
    const bg: RGB = [this.c[0] * BG_GLOW, this.c[1] * BG_GLOW, this.c[2] * BG_GLOW];
    for (let i = 0; i < CANVAS * CANVAS; i++) { this.canvas[i * 3] = bg[0]; this.canvas[i * 3 + 1] = bg[1]; this.canvas[i * 3 + 2] = bg[2]; }
    if (s.mode === "custom") this.drawText(s);
    else this.drawAuto(s.expression);
    if (s.item !== "none") this.drawItem(s.item, s.mode === "custom", s.expression);

    // CRT: titreme, kayan tarama çizgileri, korkuda satır kayması, yuvarlak panelde köşe maskesi
    const flick = 1 - Math.random() * FLICKER;
    const roll = Math.floor(((t * 10) % 4 + 4) % 4);
    const glitch = s.mode === "auto" && s.expression === "scared" && Math.random() < 0.35;
    const glitchRow = Math.floor(Math.random() * CANVAS);
    const k = TEX / CANVAS;
    for (let ty = 0; ty < TEX; ty++) {
      const cy = Math.floor((TEX - 1 - ty) / k); // görüntü satırı yukarıdan; tuval sol-alttan
      const dark = (((TEX - 1 - ty) + roll) & 3) < 2 ? 1 - SCAN_DARK : 1;
      for (let tx = 0; tx < TEX; tx++) {
        const o = (ty * TEX + tx) * 4;
        if (s.round && Math.hypot(tx + 0.5 - TEX / 2, ty + 0.5 - TEX / 2) > TEX / 2) {
          out[o] = out[o + 1] = out[o + 2] = 0; out[o + 3] = 255; continue;
        }
        let cx = Math.floor(tx / k);
        if (glitch && Math.abs(cy - glitchRow) < 3) cx = (cx + 3) % CANVAS;
        const i = (cy * CANVAS + cx) * 3;
        const m = flick * dark * 255;
        out[o] = Math.min(255, this.canvas[i] * m);
        out[o + 1] = Math.min(255, this.canvas[i + 1] * m);
        out[o + 2] = Math.min(255, this.canvas[i + 2] * m);
        out[o + 3] = 255;
      }
    }
  }
}
