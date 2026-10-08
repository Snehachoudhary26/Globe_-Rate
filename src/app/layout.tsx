import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import FloatingParticles from "@/components/animations/FloatingParticles";
import SplashScreen from "@/components/animations/SplashScreen";
import NovaAssistant from "@/components/chat/NovaAssistant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobeRate | Smart Travel Finance",
  description: "Detect ATM scams and track your global budget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SplashScreen />
        <CustomCursor />
        <FloatingParticles />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
        {/* Our new AI Chatbot sitting globally on top of the site! */}
        <NovaAssistant />
      </body>
    </html>
  );
}
