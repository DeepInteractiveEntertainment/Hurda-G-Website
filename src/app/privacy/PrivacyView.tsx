"use client";

import LegalView from "@/components/LegalView";
import { privacy } from "@/lib/legal";

export default function PrivacyView() {
  return <LegalView doc={privacy} other={{ href: "/terms", label: { tr: "Hizmet Koşulları", en: "Terms of Service" } }} />;
}
