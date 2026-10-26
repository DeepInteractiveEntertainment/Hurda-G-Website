import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { SITE_URL, DEEP_URL } from "@/lib/site";

const barlow = Barlow({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"], variable: "--font-barlow", display: "swap" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin", "latin-ext"], weight: ["600", "700", "800"], variable: "--font-barlow-condensed", display: "swap" });
const shareTech = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-share-tech", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "HURDA-G — Co-op Horror-Comedy Extraction", template: "%s | HURDA-G" },
  description:
    "HURDA-G: 1–4 player co-op horror-comedy extraction game by Deep Interactive Entertainment. Sail a scrap ferry, raid cursed VHS islands, haul scrap back before the tape runs out.",
  keywords: ["HURDA-G", "Hurda G", "co-op", "extraction", "horror comedy", "Deep Interactive Entertainment", "indie game", "Unity"],
  authors: [{ name: "Deep Interactive Entertainment", url: DEEP_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "HURDA-G",
    title: "HURDA-G — Co-op Horror-Comedy Extraction",
    description: "Sail a scrap ferry, raid cursed VHS islands, haul the scrap back before the tape runs out.",
    images: [{ url: "/brand/og.jpg", width: 1200, height: 675, alt: "HURDA-G" }],
  },
  twitter: { card: "summary_large_image", site: "@Deep_Int_Ent", images: ["/brand/og.jpg"] },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#070605", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${shareTech.variable}`}>
      <body className="grain">
        <div aria-hidden className="tracking-line" />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
