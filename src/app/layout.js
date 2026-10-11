import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BASE_PATH, withBase } from "../lib/withBase";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://saiphh-dev.github.io/myportofolio"),
  title: "Saiphh — Roblox Studio Builder | Portfolio",
  description: "Roblox Studio Builder with 5+ years of experience specializing in Studs-style builds, custom atmospheric environments, and client-focused projects.",
  keywords: [
    "Roblox Studio",
    "Roblox Builder",
    "Saiphh",
    "Studs Style",
    "Roblox Maps",
    "Roblox Architecture",
    "Portfolio"
  ],
  authors: [{ name: "Saiphh" }],
  openGraph: {
    title: "Saiphh — Roblox Studio Builder",
    description: "5+ Years of Experience specializing in Studs-style builds and atmospheric environments.",
    url: "https://saiphh-dev.github.io/myportofolio",
    siteName: "Saiphh Portfolio",
    images: [
      {
        url: withBase("/avatar.png"),
        width: 1024,
        height: 1024,
        alt: "Saiphh Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saiphh — Roblox Studio Builder",
    description: "Roblox Studio Builder with 5+ years of experience specializing in Studs-style builds.",
    images: [withBase("/avatar.png")],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href={withBase("/avatar.png")} />
        {/* Override the CSS studs background with the correct basePath.
            globals.css keeps url('/studs-pattern.svg') as local-dev fallback. */}
        <style>{`body{background-image:url('${BASE_PATH}/studs-pattern.svg'),radial-gradient(circle at 50% 0%,rgba(147,51,234,0.22) 0%,transparent 55%),radial-gradient(circle at 100% 80%,rgba(88,28,200,0.12) 0%,transparent 40%)}`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
