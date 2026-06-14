import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://infinityaestheticsajmer.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Infinity Aesthetics Ajmer | Luxury Skin, Dermatology & Aesthetic Clinic",
    template: "%s | Infinity Aesthetics Ajmer",
  },
  description:
    "Infinity Aesthetics Ajmer is a premium skin care, dermatology and cosmetic clinic in Ajmer Tower, Kutchery Road. Advanced aesthetic treatments delivered with luxury, safety and expertise. LGBTQ+ friendly.",
  keywords: [
    "skin clinic Ajmer",
    "dermatologist Ajmer",
    "aesthetic clinic Ajmer",
    "cosmetic treatments Ajmer",
    "laser hair removal Ajmer",
    "anti-ageing Ajmer",
    "Infinity Aesthetics Ajmer",
  ],
  authors: [{ name: "Infinity Aesthetics Ajmer" }],
  creator: "Infinity Aesthetics Ajmer",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Infinity Aesthetics Ajmer",
    title: "Infinity Aesthetics Ajmer | Luxury Skin & Aesthetic Clinic",
    description:
      "Premium skin care, dermatology and cosmetic treatments in the heart of Ajmer. Where science meets luxury.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Aesthetics Ajmer | Luxury Skin & Aesthetic Clinic",
    description:
      "Premium skin care, dermatology and cosmetic treatments in the heart of Ajmer.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Health & Beauty",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8ec" },
    { media: "(prefers-color-scheme: dark)", color: "#14160d" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Prevent flash of incorrect theme before hydration
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('ia-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
