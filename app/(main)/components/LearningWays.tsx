"use client";

import clsx from "clsx";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { DownArrowIcon } from "/Icons";

import type { JSX, ReactNode } from "react";

export const LearningWays = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);

  // 是否暂停显示进度条
  const [isStopped, setIsStopped] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      intervalRef.current = setInterval((): void => {
        if (currentPage < 2) {
          container.scrollBy({ left: container.querySelector("div")?.clientWidth || 0, behavior: "smooth" });
          setCurrentPage((prevPage: number): number => prevPage + 1);
        } else {
          container.scrollBy({ left: -(container.querySelector("div")?.clientWidth || 0) * 3, behavior: "smooth" });
          setCurrentPage(0);
        }
      }, 5000);
    }

    return (): void => {
      clearInterval(intervalRef.current);
    };
  }, [currentPage]);

  const handleScrollToPrev = (): void => {
    const container = containerRef.current;
    if (container) {
      clearInterval(intervalRef.current);
      setIsStopped(true);
      if (currentPage > 0) {
        container.scrollBy({ left: -(container.querySelector("div")?.clientWidth || 0), behavior: "smooth" });
        setCurrentPage((prevPage: number): number => prevPage - 1);
      } else {
        container.scrollBy({ left: (container.querySelector("div")?.clientWidth || 0) * 3, behavior: "smooth" });
        setCurrentPage(2);
      }
    }
  };

  const handleScrollToNext = (): void => {
    const container = containerRef.current;
    if (container) {
      clearInterval(intervalRef.current);
      setIsStopped(true);
      if (currentPage < 2) {
        container.scrollBy({ left: container.querySelector("div")?.clientWidth || 0, behavior: "smooth" });
        setCurrentPage((prevPage: number): number => prevPage + 1);
      } else {
        container.scrollBy({ left: -(container.querySelector("div")?.clientWidth || 0) * 3, behavior: "smooth" });
        setCurrentPage(0);
      }
    }
  };

  return (
    <>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className={clsx(
            "m:scroll-px-12 m:gap-10 m:px-12 -mb-8 flex snap-x snap-mandatory scroll-px-4 flex-row gap-4 overflow-x-auto",
            "scroll-smooth px-4 pb-8",
          )}
        >
          <Card
            className="bg-background-blue"
            title={
              <>
                <span className="font-bold text-blue">Bite-sized bestsellers</span> with book summaries
              </>
            }
            description="Get powerful ideas in minutes—not hours or days with our summaries of today's most transformative books."
            image={{
              desktop: "https://static.blinkist.com/web-growth/homepage/book-summaries_desktop.png",
              mobile: "https://static.blinkist.com/web-growth/homepage/book-summaries_mobile.png",
              alt: "A screen shot of the Blinkist app open at a blink",
            }}
          />
          <Card
            className="bg-background-purple"
            title={
              <>
                <span className="font-bold text-orchid-violet">An expert in your ear</span> with Guides
              </>
            }
            description="Let a pro lead you through today's must-know topics and apply what you learn right away with interactive tools and activities."
            image={{
              desktop: "https://static.blinkist.com/web-growth/homepage/guides_desktop.png",
              mobile: "https://static.blinkist.com/web-growth/homepage/guides_mobile.png",
              alt: "A collection of images representing Blinkist's expert guides format",
            }}
          />
          <Card
            className="bg-background-yellow"
            title={
              <>
                <span className="font-bold text-summer-yellow">Learning, but social</span> with Spaces
              </>
            }
            description="Make a learning playlist for yourself, share with others (you can finally start that book club!), or follow thought leaders' Spaces to get inspired."
            image={{
              desktop: "https://static.blinkist.com/web-growth/homepage/spaces_desktop.png",
              mobile: "https://static.blinkist.com/web-growth/homepage/spaces_mobile.png",
              alt: "A screenshot of the Blinkist app showing a Blinkist space: a user created, shareable playlist of content",
            }}
          />
        </div>
      </div>
      <div className="m:px-16 relative mt-6 flex items-center">
        <div className="mx-auto flex flex-row justify-center gap-2">
          {Array.from({ length: 3 }).map(
            (_: unknown, index: number): JSX.Element => (
              <div key={`progress-${index}`} className="bg-light-grey relative h-1 w-24 rounded-full">
                <div
                  className={clsx("bg-dark-grey absolute h-1 w-0 rounded-sm", {
                    "w-24": currentPage >= index,
                    "transition-all duration-5000 ease-linear": !isStopped && currentPage >= index,
                  })}
                />
              </div>
            ),
          )}
        </div>
        <div className="l:flex absolute right-[15%] hidden">
          <button aria-label="Previous slide" onClick={(): void => handleScrollToPrev()}>
            <DownArrowIcon className="text-grey hover:text-dark-grey h-6 w-6 rotate-90" />
          </button>
          <button aria-label="Next slide" onClick={(): void => handleScrollToNext()}>
            <DownArrowIcon className="text-grey hover:text-dark-grey h-6 w-6 -rotate-90" />
          </button>
        </div>
      </div>
    </>
  );
};

const Card = ({
  title,
  description,
  image,
  className,
}: {
  title: ReactNode;
  description: string;
  image: { desktop: string; mobile: string; alt: string };
  className?: string;
}): JSX.Element => (
  <div
    className={clsx(
      "m:grid-cols-2 m:gap-8 m:rounded-[40px] m:py-12 m:pl-12 m:pr-6 grid w-[80vw] shrink-0 snap-start items-center",
      "gap-4 rounded-[20px] px-6 py-6",
      className,
    )}
  >
    <div>
      <h3 className="font-tisa-pro text-h3 text-midnight m:text-h15 mb-4">{title}</h3>
      <p className="text-p1 text-dark-grey m:text-p0">{description}</p>
    </div>
    <div className="flex flex-col items-center">
      <picture>
        <source media="(min-width: 768px)" srcSet={image.desktop} width={490} height={400} />
        <source srcSet={image.mobile} width={280} height={280} />
        <Image src={image.mobile} alt={image.alt} width={280} height={280} priority />
      </picture>
    </div>
  </div>
);
