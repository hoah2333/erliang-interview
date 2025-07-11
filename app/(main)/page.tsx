import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { BookRecommend, HomeVideo, LearningWays, Questions } from "./components";
import { DownloadIcon, QuoteIcon, SeedlingIcon, StarIcon } from "/Icons";

import type { JSX, ReactNode } from "react";

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

const CustomerComments = (): JSX.Element => {
  const CommentBlock = ({
    image,
    name,
    color,
    className,
    children,
  }: {
    image: string;
    name: string;
    color: { bg: string; text: string };
    className?: string;
    children: ReactNode;
  }): JSX.Element => (
    <div className={clsx("flex flex-col gap-4 m:flex-row", className)}>
      <div className="m:flex-col-reverse m:items-center m:justify-end m:gap-2 flex shrink-0 flex-row items-end gap-4">
        <picture>
          <source media="(min-width: 768px)" srcSet={image} width={160} height={196} />
          <source srcSet={image} width={112} height={138} />
          <Image src={image} width={112} height={138} alt="A Blinkist user" />
        </picture>
        <div>
          <h3 className={clsx("-ml-8 rounded-lg px-2 py-1 text-center font-medium text-dark-grey m:ml-0", color.bg)}>
            {name}
          </h3>
          <span className="m:hidden">
            <QuoteIcon className={clsx("w-16", color.text)} />
          </span>
        </div>
      </div>
      <div>
        <span className="m:block mb-5 hidden">
          <QuoteIcon className={clsx("w-16", color.text)} />
        </span>
        <div className="mb-2 flex flex-row gap-1">
          {Array.from({ length: 5 }).map(
            (_: unknown, index: number): JSX.Element => (
              <div key={`star-${index}`} className="text-summer-yellow">
                <StarIcon className="w-4 h-4" bgColor="bg-summer-yellow" percent={100} />
              </div>
            ),
          )}
        </div>
        <p className="font-tisa-pro text-p1">{children}</p>
      </div>
    </div>
  );

  return (
    <section className="m:gap-12 flex max-w-[80rem] flex-col items-center gap-8 m:px-8 mx-auto px-4">
      <h3 className="text-h2 text-midnight m:text-h0 mx-auto max-w-3xl text-center font-bold">
        Join 31+ million people growing with Blinkist
        <button className="ml-2 inline-block align-text-top outline-hidden group">
          <span className="text-base">ⓘ</span>
          <div
            className={clsx(
              "absolute -translate-x-1/2 -bottom-10 opacity-0 transition-opacity group-hover:opacity-100",
              "w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-hidden",
              "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 max-w-sm text-sm",
            )}
          >
            The following reviews are sourced from the Apple App Store or the Google Play Store, and as such Blinkist
            has no possibility of its own to technically verify them. Both Apple and Google state that they ensure that
            only users who have actually downloaded the app can submit a review. Please refer to the respective
            guidelines of the two providers for more information.
          </div>
        </button>
      </h3>
      <div className="m:grid m:grid-cols-2 m:gap-16 l:grid-cols-3 flex flex-col gap-8">
        <CommentBlock
          image="https://static.blinkist.com/web-growth/homepage/social_upskillers.png"
          name="Upskillers"
          color={{ bg: "bg-background-red", text: "text-background-red" }}
        >
          Life changing. The concept of being able to{" "}
          <span className="font-bold">grasp a book&#39;s main point in such a short time</span> truly opens multiple
          opportunities to grow every area of your life at a faster rate.
        </CommentBlock>
        <CommentBlock
          className="m:order-first m:mt-16"
          image="https://static.blinkist.com/web-growth/homepage/social_leaders.png"
          name="Leaders"
          color={{ bg: "bg-background-blue", text: "text-background-blue" }}
        >
          Most CEOs read a book a week. Many use programs like this to acquire key concepts that{" "}
          <span className="font-bold">
            help them keep a fresh perspective helping hone vision, strategy and action.
          </span>
        </CommentBlock>
        <CommentBlock
          className="m:hidden l:mt-16 l:flex"
          image="https://static.blinkist.com/web-growth/homepage/social_learners.png"
          name="Lifelong learners"
          color={{ bg: "bg-background-purple", text: "text-background-purple" }}
        >
          <span className="font-bold">This is simply the coolest app that exists.</span> Deserved full credit. It&#39;s
          much nicer to spend your time learning new knowledge, rather than spending hours browsing social media.
        </CommentBlock>
      </div>
      <div>
        <div className="m:mb-8 m:grid-cols-3 mb-4 grid grid-cols-1 gap-8 text-center">
          <div>
            <span className="font-tisa-pro text-h1 text-midnight mb-2 font-bold">95%</span>
            <p className="text-p0 text-dark-grey">of Blinkist members read significantly more than before*</p>
          </div>
          <div>
            <span className="font-tisa-pro text-h1 text-midnight mb-2 font-bold">91%</span>
            <p className="text-p0 text-dark-grey">of Blinkist members create better habits*</p>
          </div>
          <div>
            <span className="font-tisa-pro text-h1 text-midnight mb-2 font-bold">87%</span>
            <p className="text-p0 text-dark-grey">have made positive changes in their lives thanks to Blinkist*</p>
          </div>
        </div>
        <p className="text-caption text-mid-grey text-center">
          * Based on internal study using survey data from general Blinkist customers
        </p>
      </div>
    </section>
  );
};

const Brands = (): JSX.Element => (
  <section className="bg-background-blue text-midnight flex flex-col py-12 m:px-12 px-4">
    <h2 className="text-h5 mb-8 text-center font-bold">Trusted by the world&#39;s leading brands</h2>
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet="https://static.blinkist.com/web-growth/homepage/brands/brands-desktop.png"
        width={1110}
        height={29}
      />
      <source
        srcSet="https://static.blinkist.com/web-growth/homepage/brands/brands-mobile.png"
        width={335}
        height={125}
      />
      <Image
        src="https://static.blinkist.com/web-growth/homepage/brands/brands-mobile.png"
        className="mx-auto"
        width={335}
        height={125}
        alt="brands"
      />
    </picture>
  </section>
);

const Places = (): JSX.Element => {
  const Picture = ({
    bgColor,
    title,
    image,
    extra = false,
    className,
  }: {
    bgColor: string;
    title: string;
    image: { desktop: string; mobile: string; alt: string };
    extra?: boolean;
    className?: string;
  }): JSX.Element => (
    <div className={clsx("flex max-w-none snap-start flex-col items-center", className)}>
      <h3 className={clsx("text-p1 text-dark-grey z-20 -mb-4 rounded-lg px-2 py-1 font-medium", bgColor)}>{title}</h3>
      <picture>
        <source media="(min-width: 768px)" srcSet={image.desktop} width={277} height={343} />
        <source srcSet={image.mobile} width={222} height={281} />
        <Image src={image.mobile} className="max-w-none" width={222} height={281} alt={image.alt} />
      </picture>
      {extra && (
        <picture className="pt-3">
          <source media="(min-width: 768px)" width={185} height={90} />
          <source
            srcSet="https://static.blinkist.com/web-growth/homepage/use-cases/car-play.png"
            width={185}
            height={90}
          />
          <Image
            className="max-w-none"
            src="https://static.blinkist.com/web-growth/homepage/use-cases/car-play.png"
            width={185}
            height={90}
            alt="logos"
          />
        </picture>
      )}
    </div>
  );

  return (
    <section>
      <div className="mx-4">
        <h2 className="text-h2 text-midnight m:text-h0 mb-4 text-center font-bold">Grow wherever you are</h2>
        <p className="text-p1 text-dark-grey m:text-p0 mx-auto mb-12 max-w-3xl text-center">
          Forget carving out time. Slip in a little learning in the car, waiting in line, over lunch, before bed, or
          whenever you&#39;ve got a moment.
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="l:justify-center -mb-8 flex snap-x scroll-px-4 flex-row gap-6 overflow-auto px-4 pb-8">
          <Picture
            title="Driving"
            bgColor="bg-background-red"
            image={{
              desktop: "https://static.blinkist.com/web-growth/homepage/use-cases/driving_desktop.png",
              mobile: "https://static.blinkist.com/web-growth/homepage/use-cases/driving_mobile.png",
              alt: "A person driving a car whilst listening to blinks on Blinkist",
            }}
            extra
          />
          <Picture
            className="m:order-first m:mt-12"
            title="Doing chores"
            bgColor="bg-background-purple"
            image={{
              desktop: "https://static.blinkist.com/web-growth/homepage/use-cases/chores.png",
              mobile: "https://static.blinkist.com/web-growth/homepage/use-cases/chores.png",
              alt: "A person cleaning their kitchen whilst listening to blinks on Blinkist",
            }}
          />
          <Picture
            className="m:mt-12"
            title="Commuting"
            bgColor="bg-background-purple"
            image={{
              desktop: "https://static.blinkist.com/web-growth/homepage/use-cases/commuting_desktop.png",
              mobile: "https://static.blinkist.com/web-growth/homepage/use-cases/commuting_mobile.png",
              alt: "A person commuting whilst listening to blinks on Blinkist",
            }}
          />
          <Picture
            title="Training"
            bgColor="bg-background-pale-mint-grey"
            image={{
              desktop: "https://static.blinkist.com/web-growth/homepage/use-cases/training.png",
              mobile: "https://static.blinkist.com/web-growth/homepage/use-cases/training.png",
              alt: "A person doing yoga whilst listening to blinks on Blinkist",
            }}
          />
        </div>
      </div>
    </section>
  );
};

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
    <section>
      <h2 className="text-h2 text-midnight m:mb-8 m:text-h0 mb-4 text-center font-bold">How will you level up?</h2>
      <p className="text-p1 text-dark-grey m:mb-12 m:text-p0 mx-4 mb-8 text-center">
        Listen, read, or get interactive—however you like to learn, you&#39;ll find it here!
      </p>
      <LearningWays />
    </section>
    <CustomerComments />
    <Brands />
    <Places />
    <Questions />
  </div>
);

export default Page;
