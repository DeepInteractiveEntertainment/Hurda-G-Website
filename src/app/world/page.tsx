import type { Metadata } from "next";
import View from "./WorldView";

export const metadata: Metadata = { title: "World", description: "1987, the Company, Scrap Master, Model G and the islands recorded on VHS tapes. Sea rings, cellars and 30 weather states." };

export default function Page() {
  return <View />;
}
