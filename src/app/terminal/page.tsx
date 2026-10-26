import type { Metadata } from "next";
import View from "./TerminalView";

export const metadata: Metadata = { title: "TAB Terminal", description: "The HURDA-G field terminal: map, character, panel face editor, stats, ferry autopilot and gallery." };

export default function Page() {
  return <View />;
}
