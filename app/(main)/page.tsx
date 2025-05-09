import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { BookRecommend, HomeVideo } from "./components";
import { DownloadIcon, SeedlingIcon, StarIcon } from "/Icons";

import type { JSX, ReactNode } from "react";

const Intro = (): JSX.Element => {
  const Animation = ({
    name,
    width,
    height,
    className,
  }: {
    name: string;
    width: number;
    height: number;
    className?: string;
  }): JSX.Element => (
    <video className={className} width={`${width}px`} height={`${height}px`} autoPlay loop muted playsInline>
      <source
        src={`https://static.blinkist.com/web-growth/homepage/animation/${name}.mov?c=365`}
        type="video/mp4; codecs=hvc1"
      />
      <source src={`https://static.blinkist.com/web-growth/homepage/animation/${name}.webm?c=365`} type="video/webm" />
    </video>
  );

  return (
    <section className="m:mx-12 mx-4">
      <div className="l:flex-row l:gap-7 mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-12 text-center">
        <div className="l:w-auto l:items-start relative flex w-full flex-col items-center">
          <h1 className="text-h15 l:mb-8 l:text-left l:text-h0 mb-6 flex flex-col text-center">
            <strong>Learn</strong>
            <span className="italic">something new</span>
            <strong>every day</strong>
          </h1>
          <p className="text-dark-grey m:text-xl l:text-left mb-8 text-center text-base leading-loose">
            Get the key ideas from the top. <br />
            <span className="px-3 py-1 rounded-full bg-blue-7 text-midnight">books</span>,
            <span className="px-3 py-1 rounded-full bg-background-yellow text-midnight">podcasts</span>, and
            <span className="px-3 py-1 rounded-full bg-background-purple text-midnight">experts</span>
            <br />
            in 15 minutes with the Blinkist app.
          </p>
          <Button href="#">Get started</Button>
        </div>
        <div className="relative">
          <Animation
            className="m:-top-7 m:left-0 m:w-24 absolute right-0 left-10 w-16 -rotate-3"
            name="ear"
            width={80}
            height={97}
          />
          <Animation
            className="m:bottom-0 m:right-10 m:w-20 absolute bottom-10 w-12"
            name="stars"
            width={85}
            height={85}
          />
          <Animation
            className="m:right-18 m:top-16 m:w-18 absolute right-0 bottom-0 w-14"
            name="glasses"
            width={75}
            height={75}
          />
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://static.blinkist.com/web-growth/homepage/hero_desktop.png"
              width={508}
              height={433}
            />
            <source srcSet="https://static.blinkist.com/web-growth/homepage/hero_mobile.png" width={300} height={289} />
            <Image
              src="https://static.blinkist.com/web-growth/homepage/hero_mobile.png"
              alt="Blinkist mobile app"
              width={300}
              height={289}
              priority
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

const GetToKnow = (): JSX.Element => {
  const Feature = ({
    name,
    alt,
    title,
    description,
  }: {
    name: string;
    alt: string;
    title: string;
    description: string;
  }): JSX.Element => (
    <div className="m:flex-col flex gap-4">
      <Image
        className="shrink-0"
        src={`https://static.blinkist.com/web-growth/homepage/${name}.png`}
        alt={alt}
        width={80}
        height={80}
      />
      <h3 className="text-h4 text-midnight m:text-h35 mb-2 font-bold">{title}</h3>
      <p className="text-dark-grey m:text-xl text-base">{description}</p>
    </div>
  );

  const Comment = ({ author, star, children }: { author: string; star: number; children: ReactNode }): JSX.Element => (
    <div className="mx-auto max-w-2xl">
      <p className="font-tisa-pro text-p1 text-midnight m:text-p0 mb-2 text-center italic">“{children}”</p>
      <div className="mb-1 flex w-full flex-row justify-center gap-1">
        {Array.from({ length: 5 }).map(
          (_: unknown, index: number): JSX.Element => (
            <div key={`star-${index}`} className="text-summer-yellow">
              <StarIcon
                className="w-4 h-4"
                bgColor="bg-summer-yellow"
                percent={
                  index <= star - 1 ? 100
                  : star - index > 0 ?
                    (star - index) * 100
                  : 0
                }
              />
            </div>
          ),
        )}
      </div>
      <p className="text-caption text-dark-grey mb-0 text-center">{author}</p>
    </div>
  );

  const Recommend = (): JSX.Element => {
    const Item = ({
      icon,
      title,
      description,
    }: {
      icon: ReactNode;
      title: string;
      description: string;
    }): JSX.Element => (
      <div className="flex flex-col items-center text-h2">
        {icon}
        <span className="mb-2 font-bold">{title}</span>
        <p className="text-p1 text-dark-grey">{description}</p>
      </div>
    );

    return (
      <div className="m:grid-cols-3 grid grid-cols-1 items-start gap-8 text-center">
        <Item
          icon={<DownloadIcon className="text-blue m:mb-4 mb-2 h-12 w-12" />}
          title="37 Million"
          description="Downloads on all platforms"
        />
        <Item
          icon={
            <div className="m:my-3 mb-2 flex flex-row gap-1 p-2.5">
              {Array.from({ length: 5 }).map(
                (_: unknown, index: number): JSX.Element => (
                  <div key={`star-${index}`} className="text-blue">
                    <StarIcon
                      className="w-5 h-5"
                      bgColor="bg-blue"
                      percent={
                        index <= 4.7 - 1 ? 100
                        : 4.7 - index > 0 ?
                          (4.7 - index) * 100
                        : 0
                      }
                    />
                  </div>
                ),
              )}
            </div>
          }
          title="4.7 Stars"
          description="Average ratings on iOS and Google Play"
        />
        <Item
          icon={<SeedlingIcon className="text-blue m:mb-4 mb-2 h-12 w-12" />}
          title="10+ years"
          description="Experience igniting personal growth"
        />
      </div>
    );
  };

  return (
    <div>
      <div className="m:gap-16 flex flex-col items-center gap-8 px-4 m:mx-12">
        <div>
          <div className="l:mb-6 relative mb-8">
            <h2 className="text-h2 text-midnight m:max-w-[32rem] m:text-h1 mx-auto mb-0 max-w-[22rem] text-center font-bold">
              Understand key ideas in 15 minutes
            </h2>
            <svg
              viewBox="0 0 134 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-summer-yellow absolute inset-x-1/2 -bottom-2 w-33.5 -translate-x-1/2"
            >
              <path
                d="M2.40222 8.15583C2.40222 8.15583 63.6588 -2.49569 131.676 6.30998"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="m:gap-12 flex w-full flex-row justify-center gap-8">
            <section className="container max-w-[25rem]">
              <div className="m:px-0 flex flex-col gap-8 m:gap-12 px-0">
                <Feature
                  name="headphones"
                  alt="Headphones"
                  title="Read & listen to key insights"
                  description="Boost your personal growth with bestsellers and podcasts' summaries."
                />
                <Feature
                  name="brain-reading"
                  alt="Reading"
                  title="Feed your curiosity"
                  description="Personal recommendations to dive into 7,500+ titles and hundreds of topics."
                />
                <Feature
                  name="person-finding-books"
                  alt="Expert selecting content"
                  title="An expert in your ear"
                  description="Learn from experts through step-by-step guides & exclusive insights."
                />
              </div>
            </section>
            <div className="l:flex hidden items-center">
              <HomeVideo />
            </div>
          </div>
        </div>
        <div className="m:gap-12 flex flex-col items-center gap-8">
          <Button href="#">Get started</Button>
          <Comment author="Renee D." star={5}>
            <span className="font-bold">Great app.</span> Addicting. Perfect for wait times, morning coffee, evening
            before bed. Extremely well written, thorough, easy to use.
          </Comment>
          <Recommend />
        </div>
      </div>
    </div>
  );
};

const Button = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}): JSX.Element => (
  <Link
    href={href}
    className={clsx(
      "cursor-pointer inline-flex whitespace-nowrap text-md font-medium ring-offset-white transition-colors",
      "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green hover:bg-green-2 text-midnight",
      "s:max-w-74 w-full items-center justify-center rounded-lg text-center",
      className,
    )}
  >
    {children}
  </Link>
);

const Page = (): JSX.Element => (
  <div className="m:mt-20 m:gap-20 mt-8 flex flex-col gap-16">
    <Intro />
    <GetToKnow />
    <section className="m:gap-12 flex flex-col gap-8">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-h2 text-midnight m:mb-6 m:text-h0 mb-4 text-center font-bold">
          A world of knowledge in your pocket
        </h2>
        <p className="text-p1 text-dark-grey m:text-p0 text-center">What are you interested in?</p>
      </div>
      <BookRecommend />
      <div className="flex justify-center px-4">
        <Button href="#">Get started</Button>
      </div>
    </section>
  </div>
);

export default Page;
