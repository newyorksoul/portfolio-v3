import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CurrentSectionContextProvider from "@/context/current-section";
import AppearanceToggle from "@/components/appearance-toggle";
import AppearanceProvider from "@/context/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    <html lang="en">
      <body className={inter.className}>
        <AppearanceProvider>
          <CurrentSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <AppearanceToggle />
          </CurrentSectionContextProvider>
        </AppearanceProvider>
      </body>
    </html>
  );
}
