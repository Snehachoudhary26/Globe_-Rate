import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobeRate | Travel Money Intelligence",
  description: "Protect your money, avoid scams, and track travel budgets globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We add selection:bg-purple-magenta so highlighting text looks premium and matches our theme */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-purple-magenta selection:text-white min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
