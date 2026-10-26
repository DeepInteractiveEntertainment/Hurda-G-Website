import type { Metadata } from "next";
import View from "./WildlifeView";

export const metadata: Metadata = { title: "Wildlife", description: "The metal wildlife of the scrap sea and the headbutting Scrap Goat — in 3D." };

export default function Page() {
  return <View />;
}
