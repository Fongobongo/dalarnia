import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";

import { AppFooter } from "@/components/layout/AppFooter";
import { MainNavbar } from "@/components/layout/MainNavbar";

import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Dalarnia Legends Hub",
  description: "Фанатский портал про Dalarnia Legends: статьи, гайды, колоды, трейдинг и общение.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable}`}>
        <div className="app-container">
          <MainNavbar />
          <main className="main-content">{children}</main>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
