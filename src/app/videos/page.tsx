import type { Metadata } from "next";
import View from "./VideosView";

export const metadata: Metadata = { title: "Videos", description: "Development footage of HURDA-G." };

export default function Page() {
  return <View />;
}
