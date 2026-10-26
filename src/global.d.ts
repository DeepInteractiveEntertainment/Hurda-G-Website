import type { DetailedHTMLProps, HTMLAttributes } from "react";

type ModelViewerProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  poster?: string;
  alt?: string;
  "camera-controls"?: boolean | "";
  "auto-rotate"?: boolean | "";
  "auto-rotate-delay"?: string | number;
  "rotation-per-second"?: string;
  "interaction-prompt"?: string;
  "shadow-intensity"?: string | number;
  "shadow-softness"?: string | number;
  exposure?: string | number;
  "environment-image"?: string;
  "camera-orbit"?: string;
  "camera-target"?: string;
  "field-of-view"?: string;
  autoplay?: boolean | "";
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "manual";
  "disable-zoom"?: boolean | "";
  "touch-action"?: string;
  "tone-mapping"?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerProps;
    }
  }
}
