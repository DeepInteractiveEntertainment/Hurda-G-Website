import type { Metadata } from "next";
import View from "./ArsenalView";

export const metadata: Metadata = { title: "Arsenal", description: "All 105 items from Scrap Master's shop: weapons, melee, tools, gear, health and explosives." };

export default function Page() {
  return <View />;
}
