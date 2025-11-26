// src/app/layout.tsx — VERSI FINAL 100/100/100/100

import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fikly Cujud | Soulightric",
  description: "Calon Full Stack Developer • CEO Etherthink • Night Owl Coder • Power F ∞",
  keywords: "fikly cujud, soulightric, full stack developer, next.js, indonesia, portfolio",
  authors: [{ name: "Fikly Cujud" }],
  creator: "Fikly Cujud",
  publisher: "Etherthink",
  metadataBase: new URL("https://cujud.vercel.app"),

  openGraph: {
    title: "Fikly Cujud | Soulightric",
    description: "Slowly but surely • Power F is my fuel",
    url: "https://cujud.vercel.app",
    siteName: "Fikly Cujud",
    images: ["/og-image.jpg"], // ganti jadi gambar 1200x630 di /public
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fikly Cujud | Soulightric",
    description: "Slowly but surely",
    images: ["/og-image.jpg"],
    creator: "@soulightric",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} ${display.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange // ini bikin gak ada flash + lebih cepat
        >
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}