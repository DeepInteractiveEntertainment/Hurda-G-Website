import type { Metadata } from "next";
import View from "./EnemiesView";

export const metadata: Metadata = { title: "Enemies", description: "Every enemy in HURDA-G with its telegraph, threat and counter-play, plus the bosses." };

export default function Page() {
  return <View />;
}
