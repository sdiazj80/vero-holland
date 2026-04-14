import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://veroholland.com"),
  title: {
    default: "Vero Holland — Coaching, Events & Lifestyle",
    template: "%s · Vero Holland",
  },
  description:
    "Premium women's fitness coaching with Vero Holland. Transform your body, elevate your confidence, and join the Booty Brunch & Bubbly community.",
  keywords: [
    "Vero Holland", "Vero Fitness", "women's fitness coaching",
    "Booty Brunch & Bubbly", "online coaching", "transformation coach",
  ],
  openGraph: {
    title: "Vero Holland — Coaching, Events & Lifestyle",
    description: "Premium women's fitness coaching, events, and community.",
    url: "https://veroholland.com",
    siteName: "Vero Holland",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Vero Holland" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
