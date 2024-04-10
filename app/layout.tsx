import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CurrentSectionContextProvider from "@/context/current-section";
import AppearanceToggle from "@/components/appearance-toggle";
import AppearanceProvider from "@/context/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kristoff | SWE Portfolio",
  description: "Kristoff is a software engineer based in NYC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <AppearanceProvider>
          <CurrentSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <AppearanceToggle />
            <AnimatedCursor
              color="255,255,255"
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={1}
              outerStyle={{
                mixBlendMode: "exclusion",
              }}
              innerStyle={{
                mixBlendMode: "exclusion",
              }}
            />
            <Toaster position="top-right" />
          </CurrentSectionContextProvider>
        </AppearanceProvider>
      </body>
    </html>
  );
}
