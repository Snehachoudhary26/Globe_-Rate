import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300"}>
        <ThemeProvider>
          <SplashScreen />
          <CustomCursor />
          <FloatingParticles />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <NovaAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}