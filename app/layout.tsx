import "./global.css";

import clsx from "clsx";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { BlinkistIcon } from "/Icons";

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

const tisaPro = localFont({
  src: [
    { path: "../public/fonts/Tisa-Sans-Pro-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Tisa-Sans-Pro-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/Tisa-Sans-Pro-Bold.ttf", weight: "700" },
    { path: "../public/fonts/Tisa-Sans-Pro-Bold-Italic.ttf", weight: "700", style: "italic" },
  ],
  display: "swap",
  preload: true,
  fallback: ["Consolas", "monospace"],
});
const inter = Inter({ subsets: ["latin"] });

const Footer = (): JSX.Element => {
  const discover: { title: string; contents: { name: string; link: string }[] }[][] = [
    [
      {
        title: "Popular titles",
        contents: [
          { name: "Atomic Habits", link: "#" },
          { name: "The 5 AM Club", link: "#" },
          { name: "The 7 Habits of Highly Effective People", link: "#" },
          { name: "Rich Dad, Poor Dad", link: "#" },
          { name: "12 Rules For Life", link: "#" },
          { name: "Thinking, Fast and Slow", link: "#" },
          { name: "Zero to One", link: "#" },
          { name: "13 Things Mentally Strong People Don't Do", link: "#" },
          { name: "Think and Grow Rich", link: "#" },
          { name: "The Subtle Art of Not Giving a F*ck", link: "#" },
        ],
      },
      {
        title: "Popular categories",
        contents: [
          { name: "Personal Development", link: "#" },
          { name: "Psychology", link: "#" },
          { name: "Productivity", link: "#" },
          { name: "Career & Success", link: "#" },
          { name: "Management & Leadership", link: "#" },
          { name: "Science", link: "#" },
          { name: "Motivation & Inspiration", link: "#" },
          { name: "Mindfulness & Happiness", link: "#" },
          { name: "Money & Investments", link: "#" },
          { name: "Communication Skills", link: "#" },
        ],
      },
      {
        title: "Popular topics",
        contents: [
          { name: "Best Christianity Books", link: "#" },
          { name: "Best Memoirs Books", link: "#" },
          { name: "Best Love Books", link: "#" },
          { name: "Best Self-Help Books", link: "#" },
          { name: "Best Leadership Books", link: "#" },
          { name: "Best Spirituality Books", link: "#" },
          { name: "Best Autobiographies Books", link: "#" },
          { name: "Best Biographies Books", link: "#" },
          { name: "Best Inspiration Books", link: "#" },
          { name: "Best Persuasion Books", link: "#" },
        ],
      },
    ],
    [
      {
        title: "Trending topics",
        contents: [
          { name: "Natural Sciences Books", link: "#" },
          { name: "Writing Books", link: "#" },
          { name: "Meditation Books", link: "#" },
          { name: "Mathematics Books", link: "#" },
          { name: "Stoicism Books", link: "#" },
          { name: "Education & Upbringing Books", link: "#" },
          { name: "Sports Books", link: "#" },
          { name: "Sex Books", link: "#" },
          { name: "Wars Books", link: "#" },
          { name: "Marketing Books", link: "#" },
        ],
      },
      {
        title: "Featured titles",
        contents: [
          { name: "A Court of Thorns and Roses", link: "#" },
          { name: "Just Mercy", link: "#" },
          { name: "Tuesdays with Morrie", link: "#" },
          { name: "Into the Wild", link: "#" },
          { name: "The Devil in the White City", link: "#" },
          { name: "Walden", link: "#" },
          { name: "The Souls of Black Folk", link: "#" },
          { name: "David and Goliath", link: "#" },
          { name: "The Myth of Sisyphus", link: "#" },
          { name: "Genesis", link: "#" },
        ],
      },
      {
        title: "Featured topics",
        contents: [
          { name: "Fantasy Romance Books", link: "#" },
          { name: "Survival Books", link: "#" },
          { name: "Drama Books", link: "#" },
          { name: "Civil War Books", link: "#" },
          { name: "Mystery Romance Books", link: "#" },
          { name: "US History Books", link: "#" },
          { name: "Sociology Books", link: "#" },
          { name: "Self-Esteem Books", link: "#" },
          { name: "Existentialism Books", link: "#" },
          { name: "Bipolar Books", link: "#" },
        ],
      },
    ],
  ];

  const extraDiscover: { title: string; contents: { name: string; link: string }[] }[] = [
    { title: "Editorial", contents: [{ name: "Book lists", link: "#" }] },
    {
      title: "Useful links",
      contents: [
        { name: "Pricing", link: "#" },
        { name: "Blinkist Business", link: "#" },
        { name: "Gift Cards", link: "#" },
        { name: "Contact & Help", link: "#" },
        { name: "Cancel Subscription", link: "#" },
      ],
    },
    {
      title: "Company",
      contents: [
        { name: "About", link: "#" },
        { name: "Careers", link: "#" },
        { name: "Partners", link: "#" },
        { name: "Code of Conduct", link: "#" },
        { name: "Press Room", link: "#" },
      ],
    },
  ];

  const socialMedias: { name: string; icon: string; link: string }[] = [
    { name: "Facebook", icon: "https://static.blinkist.com/web-growth/icons/social/facebook.png", link: "#" },
    { name: "Twitter", icon: "https://static.blinkist.com/web-growth/icons/social/twitter-x.png", link: "#" },
    { name: "Linkedin", icon: "https://static.blinkist.com/web-growth/icons/social/linkedin.png", link: "#" },
    { name: "Instagram", icon: "https://static.blinkist.com/web-growth/icons/social/instagram.png", link: "#" },
  ];

  const SplitBar = (): JSX.Element => <span className="mx-2 inline-block">|</span>;

  return (
    <footer className="bg-pale-mint-grey m:py-16 w-full py-12">
      <section className="m:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 gap-6">
        <h2 className="text-content-primary font-bold text-h35 m:text-h35 text-left">
          Discover the Blinkist catalogue
        </h2>
        {discover.map(
          (part: { title: string; contents: { name: string; link: string }[] }[], index: number): JSX.Element => (
            <div key={`part-${index}`} className="w-full overflow-hidden">
              <div className="m:gap-16 l:gap-32 -mb-8 flex gap-8 overflow-x-auto overflow-y-hidden pb-8">
                {part.map(
                  (
                    { title, contents }: { title: string; contents: { name: string; link: string }[] },
                    listIndex: number,
                  ): JSX.Element => (
                    <div key={`list-${listIndex}`} className="w-64 shrink-0">
                      <h4 className="text-h5 m:text-h4 text-content-primary font-bold mb-2">{title}</h4>
                      {contents.map(
                        ({ name, link }: { name: string; link: string }, contentIndex: number): JSX.Element => (
                          <ul key={`content-${contentIndex}`}>
                            <li>
                              <Link
                                className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal"
                                href={link}
                              >
                                {name}
                              </Link>
                            </li>
                          </ul>
                        ),
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          ),
        )}
        <div className="shrink-0 h-[1px] w-full" />
      </section>
      <section className="m:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 m:flex-row justify-between gap-6">
        <div className="flex flex-col justify-between">
          <div>
            <Link href="/" aria-label="Back to homepage" className="flex items-center pb-4">
              <BlinkistIcon className="m:h-6 h-5" />
            </Link>
            <h2 className="text-h4 text-blue mb-8 font-bold">
              Powerful ideas—
              <br />
              15 minutes at a time
            </h2>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Link to download the Blinkist app in the App Store">
              <Image
                src="https://static.blinkist.com/web-growth/icons/apple-app-store-badge.png"
                width={133}
                height={38}
                alt="Apple App Store Icon"
              />
            </Link>
            <Link href="#" aria-label="Link to download the Blinkist app in the Google Play Store">
              <Image
                src="https://static.blinkist.com/web-growth/icons/google-play-store-badge.png"
                width={133}
                height={38}
                alt="Google Play Store Icon"
              />
            </Link>
          </div>
        </div>
        <div className="m:w-3/6 m:flex-row flex flex-col flex-wrap justify-between gap-6">
          {extraDiscover.map(
            (
              { title, contents }: { title: string; contents: { name: string; link: string }[] },
              listIndex: number,
            ): JSX.Element => (
              <span key={`list-${listIndex}`} className="flex flex-col gap-6">
                <div className="shrink-0 h-[1px] w-full m:hidden" />
                <div>
                  <h5 className="text-h6 text-content-primary m:text-h5 font-bold m:mb-1 leading-9">{title}</h5>
                  {contents.map(
                    ({ name, link }: { name: string; link: string }, contentIndex: number): JSX.Element => (
                      <ul key={`content-${contentIndex}`}>
                        <li>
                          <Link
                            className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal"
                            href={link}
                          >
                            {name}
                          </Link>
                        </li>
                      </ul>
                    ),
                  )}
                </div>
              </span>
            ),
          )}
        </div>
      </section>
      <section
        className={clsx(
          "m:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 m:flex-row-reverse m:items-end flex-wrap justify-between",
          "gap-6",
        )}
      >
        <ul className="flex gap-2">
          {socialMedias.map(
            ({ name, icon, link }: { name: string; icon: string; link: string }, index: number): JSX.Element => (
              <li key={`icon-${index}`}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Blinkist on ${name.toLowerCase()}`}
                >
                  <Image src={icon} width={24} height={24} alt="Linkedin Logo" />
                </Link>
              </li>
            ),
          )}
        </ul>
        <ul className="text-dark-grey flex flex-wrap text-sm">
          <li className="hover:text-blue-2">
            © Blinkist 2025
            <SplitBar />
          </li>
          <li>
            <Link href="#" className="hover:text-blue-2">
              Sitemap
            </Link>
            <SplitBar />
          </li>
          <li>
            <Link href="#" className="hover:text-blue-2">
              Legal Notice
            </Link>
            <SplitBar />
          </li>
          <li>
            <Link href="#" className="hover:text-blue-2">
              Terms of Service
            </Link>
            <SplitBar />
          </li>
          <li>
            <Link href="#" className="hover:text-blue-2">
              Privacy Policy
            </Link>
            <SplitBar />
          </li>
          <li>
            <Link href="#" className="hover:text-blue-2">
              Cookie Consent
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

const Layout = ({ children }: { children: ReactNode }): JSX.Element => (
  <html>
    <body className={tisaPro.className + inter.className}>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default Layout;
