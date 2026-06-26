import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chillindk.vercel.app";
const siteDescription = "Brunch, lunch, burgers, pancakes et boissons maison chez Chill'in, café chaleureux au 14 rue Thiers au cœur de Dunkerque.";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chill'in DK | Brunch, Café & Lunch à Dunkerque",
    template: "%s | Chill'in DK",
  },
  description: siteDescription,
  applicationName: "Chill'in DK",
  keywords: ["brunch Dunkerque", "café Dunkerque", "restaurant Dunkerque", "lunch Dunkerque", "Chill'in DK", "salon de thé Dunkerque", "brunch Nord"],
  creator: "Chill'in DK",
  publisher: "Chill'in DK",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Chill'in DK",
    title: "Chill'in DK | Brunch, Café & Lunch à Dunkerque",
    description: siteDescription,
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Le café Chill'in à Dunkerque avec son canapé et son fauteuil" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chill'in DK | Brunch, Café & Lunch à Dunkerque",
    description: siteDescription,
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "CafeOrCoffeeShop"],
  "@id": `${siteUrl}/#restaurant`,
  name: "Chill'in DK",
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: [`${siteUrl}/opengraph-image.jpg`, `${siteUrl}/media/DSC02123.jpg`],
  menu: `${siteUrl}/carte`,
  priceRange: "€€",
  servesCuisine: ["Brunch", "Cuisine française", "Burgers", "Pâtisseries", "Café"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 rue Thiers",
    postalCode: "59140",
    addressLocality: "Dunkerque",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  sameAs: [
    "https://www.instagram.com/chillin_dk/",
    "https://www.facebook.com/profile.php?id=61584187581630",
    "https://www.snapchat.com/@chillin_dk",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable}`}>
      <body><ThemeProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} /><ScrollProgress />{children}<ScrollToTop /></ThemeProvider></body>
    </html>
  );
}
