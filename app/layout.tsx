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
  title: "Kristoff Borrell | SWE Portfolio",
  description: "Kristoff is a software engineer based in NYC.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.png',
        href: '/images/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-dark.png',
        href: '/images/icon-dark.png',
      },
    ],
  }
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
