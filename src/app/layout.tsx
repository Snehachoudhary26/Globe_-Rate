import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import FloatingParticles from "@/components/animations/FloatingParticles";
import SplashScreen from "@/components/animations/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobeRate - Travel Smarter",
  description: "The intelligent travel finance platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SplashScreen />
        <CustomCursor />
        <FloatingParticles />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
