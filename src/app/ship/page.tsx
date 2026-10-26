import type { Metadata } from "next";
import View from "./ShipView";

export const metadata: Metadata = { title: "Ship", description: "The scrap ferry, the truck carrier, scrap raiders, tsunamis and the vortex home." };

export default function Page() {
  return <View />;
}
