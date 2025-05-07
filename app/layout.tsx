import "./global.css";

import { Inter } from "next/font/google";

import type { Metadata, Viewport } from "next";
import type { JSX, ReactNode } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  const description: string =
    "Blinkist offers the key insights from top nonfiction in a made-for-mobile format. " +
    "Get up to 65% off audiobooks, too. Learn anytime, anywhere!";
  const title: Metadata["title"] = {
    template: "%s - Backroomer",
    default: "Blinkist: Best Book Summaries & Audio Book Guides",
  };
  const baseUrl: URL = new URL(process.env.NEXT_PUBLIC_API_BASE_URL || "https://www.blinkist.com");
  const icon: string = "https://static.blinkist.com/web-growth/favicon.ico?c=365";
  return {
    title,
    description,
    metadataBase: baseUrl,
    icons: { icon, shortcut: icon },
    authors: { name: "hoah2333", url: "https://github.com/hoah2333" },
    openGraph: { title, description, url: baseUrl, siteName: "Blinkist", locale: "zh_CN", type: "website" },
    twitter: { title, description, card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
};

export const viewport: Viewport = { width: "device-width", initialScale: 1.0 };

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: ReactNode }): JSX.Element => (
  <html>
    <body className={inter.className}>{children}</body>
  </html>
);

export default Layout;
