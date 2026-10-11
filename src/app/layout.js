import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
        url: "/avatar.png",
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
    images: ["/avatar.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/avatar.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
