"use client";

import LegalView from "@/components/LegalView";
import { terms } from "@/lib/legal";

export default function TermsView() {
  return <LegalView doc={terms} other={{ href: "/privacy", label: { tr: "Gizlilik Politikası", en: "Privacy Policy" } }} />;
}
