import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Chill'in DK | Café & Brunch à Dunkerque",
  description: "Brunch généreux, café de caractère et douceurs maison au cœur de Dunkerque.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable}`}>
      <body><ScrollProgress />{children}</body>
    </html>
  );
}
