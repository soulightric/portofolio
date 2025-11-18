import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Orbitron, Bruno_Ace, Bebas_Neue } from "next/font/google";

const display = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fikly $ujud — Calon Full Stack Dev Indonesia",
    template: "%s | Fikly $ujud",
  },
  description: "Portfolio Fikly $ujud (Soulightric) — Calon Full Stack Developer, CEO Wannabe, dan Night Owl Coder dari Indonesia. Power F is my fuel.",
  keywords: "fikly sujud, soulightric, full stack developer indonesia, next.js portfolio, web developer indonesia, frontend developer, power f",
  authors: [{ name: "Fikly $ujud", url: "https://fiklycujud.vercel.app" }],
  creator: "Fikri Sujud",
  publisher: "Fikri Sujud",
  metadataBase: new URL("https://fiklycujud.vercel.app"),
  
  openGraph: {
    title: "Fikri Sujud — Power F Activated",
    description: "Calon Full Stack Dev • CEO Enthusiast • Secret Identity dari Indonesia",
    url: "https://fiklycujud.vercel.app",
    siteName: "Fikri Sujud",
    images: [
      {
        url: "/Yui Hirasawa600x315.jpg",       // nanti kita buat gambar ini
        width: 600,
        height: 315,
        alt: "Fikly $ujud — Power F",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fikly $ujud",
    description: "Power F is my fuel.",
    images: ["/Yui Hirasawa600x315.jpg"],
    creator: "@soulightric",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://fiklycujud.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}