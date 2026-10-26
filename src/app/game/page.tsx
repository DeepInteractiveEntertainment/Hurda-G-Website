import type { Metadata } from "next";
import View from "./GameView";

export const metadata: Metadata = { title: "Game", description: "The HURDA-G voyage loop: hub, ferry, VHS islands, cellars, extraction and the Scrap Master arena." };

export default function Page() {
  return <View />;
}
