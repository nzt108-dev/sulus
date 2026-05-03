import type { Metadata } from "next";
import { Inter, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["700","800","900"], variable: "--font-barlow", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Sulus — The Direct Way to Move Cars in California",
  description: "Auto transport marketplace where customers, carriers, flippers and dealers connect directly. No brokers. No fees. California only.",
  keywords: "auto transport California, car shipping CA, vehicle transport marketplace, car hauler California, Sulus",
  openGraph: {
    title: "Sulus — The Direct Way to Move Cars in California",
    description: "No brokers. Direct connections only. California's first direct auto transport marketplace.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
