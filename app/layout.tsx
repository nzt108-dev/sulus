import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sulus — The Direct Way to Move Cars in California",
  description:
    "Join the waitlist for Sulus — a new auto transport marketplace where customers, drivers, car flippers, and auto businesses connect directly within California.",
  keywords:
    "auto transport California, car shipping CA, vehicle transport marketplace, car hauler California, Sulus",
  openGraph: {
    title: "Sulus — The Direct Way to Move Cars in California",
    description:
      "A new information marketplace for vehicle transport connections within California. No brokers. Direct connections only.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
