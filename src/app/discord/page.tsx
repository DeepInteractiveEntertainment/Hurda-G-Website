import type { Metadata } from "next";
import View from "./DiscordView";

export const metadata: Metadata = {
  title: "Discord",
  description: "Join a HURDA-G crew from Discord: open the game on your computer, or join the community server.",
};

export default function Page() {
  return <View />;
}
