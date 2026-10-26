"use client";

import { useEffect, useState } from "react";
import { SHOW_THIRD_PARTY_3D, ASSET_V } from "@/lib/site";

let loader: Promise<unknown> | null = null;
const loadModelViewer = () => (loader ??= import("@google/model-viewer"));

/** Oyundan dışa aktarılmış GLB'yi döndürülebilir 3B olarak gösterir.
 *  Hazır (mağaza lisanslı) modellerde yalnızca render görseli çıkar. */
export default function ModelViewer({
  id,
  alt,
  third = false,
  autoRotate = true,
  interactive = true,
  className = "",
  orbit,
}: {
  id: string;
  alt: string;
  third?: boolean;
  autoRotate?: boolean;
  interactive?: boolean;
  className?: string;
  orbit?: string;
}) {
  const [ready, setReady] = useState(false);
  const poster = `/posters/${id}.webp?v=${ASSET_V}`;
  const as3d = !third || SHOW_THIRD_PARTY_3D;

  useEffect(() => {
    if (!as3d) return;
    let alive = true;
    loadModelViewer().then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, [as3d]);

  if (!as3d || !ready) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={alt} className={`h-full w-full object-contain ${className}`} />;
  }

  return (
    <model-viewer
      src={`/models/${id}.glb?v=${ASSET_V}`}
      poster={poster}
      alt={alt}
      loading="lazy"
      camera-controls={interactive ? "" : undefined}
      disable-zoom={interactive ? undefined : ""}
      auto-rotate={autoRotate ? "" : undefined}
      auto-rotate-delay="0"
      rotation-per-second="18deg"
      interaction-prompt="none"
      shadow-intensity="1"
      shadow-softness="0.9"
      exposure="1.05"
      tone-mapping="neutral"
      camera-orbit={orbit ?? (id.startsWith("wpn-") ? "90deg 80deg auto" : "25deg 80deg auto")}
      autoplay={true}
      touch-action="pan-y"
      className={`block h-full w-full ${className}`}
      style={{ background: "transparent" }}
    />
  );
}
