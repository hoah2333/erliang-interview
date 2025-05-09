"use client";

import clsx from "clsx";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { DownArrowIcon, PauseIcon, PlayIcon, StairIcon } from "/Icons";

import type { JSX, MouseEvent, ReactNode } from "react";

export const BookRecommend = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [currentBookPage, setCurrentBookPage] = useState<number>(1);
  const [hoveringBook, setHoveringBook] = useState<number>(0);

  /* 由于这只是一个 demo，所以此处所有 icon 都用同一个 icon 代替 */
  const bookCategories: { icon: ReactNode; name: string }[] = [
    { icon: <StairIcon />, name: "Popular" },
    { icon: <StairIcon />, name: "Entrepreneurship" },
    { icon: <StairIcon />, name: "Politics" },
    { icon: <StairIcon />, name: "Marketing & Sales" },
    { icon: <StairIcon />, name: "Science" },
    { icon: <StairIcon />, name: "Health & Nutrition" },
    { icon: <StairIcon />, name: "Personal Development" },
    { icon: <StairIcon />, name: "Economics" },
    { icon: <StairIcon />, name: "Corporate Culture" },
    { icon: <StairIcon />, name: "Management & Leadership" },
    { icon: <StairIcon />, name: "Motivation & Inspiration" },
    { icon: <StairIcon />, name: "Money & Investments" },
    { icon: <StairIcon />, name: "Psychology" },
    { icon: <StairIcon />, name: "Productivity" },
    { icon: <StairIcon />, name: "Sex & Relationships" },
    { icon: <StairIcon />, name: "Society & Culture" },
    { icon: <StairIcon />, name: "Nature & the Environment" },
    { icon: <StairIcon />, name: "Career & Success" },
    { icon: <StairIcon />, name: "Education" },
    { icon: <StairIcon />, name: "Religion & Spirituality" },
    { icon: <StairIcon />, name: "Creativity" },
    { icon: <StairIcon />, name: "Philosophy" },
  ];
  const splitedLength: number = Math.ceil(bookCategories.length / 3);
  const splitedCategories: { icon: ReactNode; name: string }[][] = Array.from(
    { length: 3 },
    (_: unknown, index: number): { icon: ReactNode; name: string }[] =>
      bookCategories.slice(index * splitedLength, (index + 1) * splitedLength),
  );

  /* 由于这只是一个 demo，所以此处每页书籍都用同一本代替，每一个分类都是相同的书籍 */
  const books: { name: string; image: string; audio: string; color: string }[][] = Array.from(
    { length: bookCategories.length },
    (): { name: string; image: string; audio: string; color: string }[] => [
      {
        name: "Stillness Is the Key",
        image: "https://images.blinkist.io/images/books/5d9054c96cee070008710ee8/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/stillness-is-the-key-en.m4a",
        color: "rgb(255, 227, 184)",
      },
      {
        name: "Stillness Is the Key",
        image: "https://images.blinkist.io/images/books/5d9054c96cee070008710ee8/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/stillness-is-the-key-en.m4a",
        color: "rgb(255, 227, 184)",
      },
      {
        name: "Stillness Is the Key",
        image: "https://images.blinkist.io/images/books/5d9054c96cee070008710ee8/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/stillness-is-the-key-en.m4a",
        color: "rgb(255, 227, 184)",
      },
      {
        name: "Stillness Is the Key",
        image: "https://images.blinkist.io/images/books/5d9054c96cee070008710ee8/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/stillness-is-the-key-en.m4a",
        color: "rgb(255, 227, 184)",
      },
      {
        name: "Stillness Is the Key",
        image: "https://images.blinkist.io/images/books/5d9054c96cee070008710ee8/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/stillness-is-the-key-en.m4a",
        color: "rgb(255, 227, 184)",
      },
      {
        name: "Super Human",
        image: "https://images.blinkist.io/images/books/5ddd524d6cee0700085f3207/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/super-human-en.m4a",
        color: "rgb(253, 207, 185)",
      },
      {
        name: "Super Human",
        image: "https://images.blinkist.io/images/books/5ddd524d6cee0700085f3207/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/super-human-en.m4a",
        color: "rgb(253, 207, 185)",
      },
      {
        name: "Super Human",
        image: "https://images.blinkist.io/images/books/5ddd524d6cee0700085f3207/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/super-human-en.m4a",
        color: "rgb(253, 207, 185)",
      },
      {
        name: "Super Human",
        image: "https://images.blinkist.io/images/books/5ddd524d6cee0700085f3207/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/super-human-en.m4a",
        color: "rgb(253, 207, 185)",
      },
      {
        name: "Super Human",
        image: "https://images.blinkist.io/images/books/5ddd524d6cee0700085f3207/1_1/1080.jpg",
        audio: "https://static.blinkist.com/content-pages/homepage/audio/super-human-en.m4a",
        color: "rgb(253, 207, 185)",
      },
      {
        name: "13 Things Mentally Strong People Don't Do",
        image: "https://images.blinkist.io/images/books/55f69a1429161a0009000001/1_1/1080.jpg",
        audio:
          "https://static.blinkist.com/content-pages/homepage/audio/13-things-mentally-strong-people-dont-do-en.m4a",
        color: "rgb(254, 191, 185)",
      },
      {
        name: "13 Things Mentally Strong People Don't Do",
        image: "https://images.blinkist.io/images/books/55f69a1429161a0009000001/1_1/1080.jpg",
        audio:
          "https://static.blinkist.com/content-pages/homepage/audio/13-things-mentally-strong-people-dont-do-en.m4a",
        color: "rgb(254, 191, 185)",
      },
      {
        name: "13 Things Mentally Strong People Don't Do",
        image: "https://images.blinkist.io/images/books/55f69a1429161a0009000001/1_1/1080.jpg",
        audio:
          "https://static.blinkist.com/content-pages/homepage/audio/13-things-mentally-strong-people-dont-do-en.m4a",
        color: "rgb(254, 191, 185)",
      },
      {
        name: "13 Things Mentally Strong People Don't Do",
        image: "https://images.blinkist.io/images/books/55f69a1429161a0009000001/1_1/1080.jpg",
        audio:
          "https://static.blinkist.com/content-pages/homepage/audio/13-things-mentally-strong-people-dont-do-en.m4a",
        color: "rgb(254, 191, 185)",
      },
      {
        name: "13 Things Mentally Strong People Don't Do",
        image: "https://images.blinkist.io/images/books/55f69a1429161a0009000001/1_1/1080.jpg",
        audio:
          "https://static.blinkist.com/content-pages/homepage/audio/13-things-mentally-strong-people-dont-do-en.m4a",
        color: "rgb(254, 191, 185)",
      },
    ],
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect((): (() => void) => {
    setIsPlaying(false);
    setAudioProgress(0);
    setAudioDuration(0);
    const audio = audioRef.current;
    if (!audio) return (): void => {};

    const handleUpdateTime = (): void => setAudioProgress(audio.currentTime);
    const handleUpdateDuration = (): void => setAudioDuration(audio.duration);
    audio.addEventListener("loadedmetadata", handleUpdateDuration);
    audio.addEventListener("timeupdate", handleUpdateTime);
    return (): void => {
      audio.removeEventListener("timeupdate", handleUpdateTime);
      audio.removeEventListener("loadedmetadata", handleUpdateDuration);
    };
  }, [hoveringBook]);

  return (
    <>
      <div className="scrollbar-none flex flex-col items-start gap-4 overflow-auto l:pl-[16%]">
        {splitedCategories.map(
          (categories: { icon: ReactNode; name: string }[], index: number): JSX.Element => (
            <div key={`line-${index}`} className="flex flex-row gap-4 px-4">
              {categories.map(
                ({ icon, name }: { icon: ReactNode; name: string }, innerIndex: number): JSX.Element => (
                  <button
                    key={`category-${index}-${innerIndex}`}
                    className={clsx(
                      "text-midnight flex flex-row items-center gap-2 rounded-lg px-6 py-3 cursor-pointer",
                      index * splitedLength + innerIndex === selectedCategory ?
                        "bg-background-yellow"
                      : "bg-pale-mint-grey",
                    )}
                    aria-pressed={index * splitedLength + innerIndex === selectedCategory}
                    onClick={(): void => {
                      setSelectedCategory(index * splitedLength + innerIndex);
                      setCurrentBookPage(1);
                    }}
                  >
                    <div className="*:h-6 *:w-6">{icon}</div>
                    <div className="font-medium whitespace-nowrap">{name}</div>
                  </button>
                ),
              )}
            </div>
          ),
        )}
      </div>
      <div className="flex flex-row items-center justify-center px-4">
        <button
          aria-label="Previous book list"
          className="focus:outline-hidden"
          disabled={currentBookPage === 1}
          onClick={(): void => setCurrentBookPage((currentBookPage: number): number => currentBookPage - 1)}
        >
          <DownArrowIcon className={clsx("h-6 w-6 rotate-90", currentBookPage === 1 ? "text-grey" : "text-blue")} />
        </button>
        <div className="scrollbar-hidden overflow-x-hidden! w-[1088px]">
          <div className="flex flex-row items-center px-8 gap-8">
            {books[selectedCategory].slice((currentBookPage - 1) * 5, currentBookPage * 5).map(
              (
                { name, image, audio, color }: { name: string; image: string; audio: string; color: string },
                index: number,
              ): JSX.Element => (
                <div
                  key={`book-${index}`}
                  onMouseEnter={(): void => setHoveringBook(index)}
                  tabIndex={0}
                  className={clsx(
                    "group flex cursor-pointer flex-col justify-center rounded-2xl h-[22.5rem] outline-hidden",
                    "transition-[width] duration-500 visible",
                    index === hoveringBook ? "w-64" : "w-40",
                  )}
                  role="button"
                  aria-label={`Book card: ${name}`}
                >
                  <button
                    className="w-full rounded-t-2xl px-2 py-6 text-left rounded-b-none"
                    aria-label={`View ${name}`}
                    style={{ backgroundColor: color }}
                  >
                    <Image src={image} alt={name} width={232} height={232} />
                  </button>
                  {index === hoveringBook && (
                    <div className="bg-midnight m:p-4 rounded-t-none rounded-b-2xl p-2">
                      <figure className="flex flex-row items-center gap-4 text-white w-full">
                        <audio ref={audioRef} src={audio}>
                          <track kind="captions" />
                        </audio>
                        <button
                          className="hover:text-green text-white"
                          aria-label={isPlaying ? "Pause" : "Play"}
                          onClick={(): void => {
                            if (isPlaying) {
                              audioRef.current?.pause();
                            } else {
                              audioRef.current?.play();
                            }
                            setIsPlaying((isPlaying: boolean): boolean => !isPlaying);
                          }}
                        >
                          {isPlaying ?
                            <PauseIcon className="h-12 w-12" />
                          : <PlayIcon className="h-12 w-12" />}
                        </button>
                        <div className="flex min-w-0 grow flex-col">
                          <span className="truncate text-sm font-medium text-white">Listen</span>
                          <div className="flex flex-row items-center gap-4">
                            <button
                              className="w-full cursor-pointer border-0 bg-transparent p-0 py-2"
                              aria-label={`Seek audio, current progress: ${audioProgress.toFixed(0)}%`}
                              onClick={(event: MouseEvent): void => {
                                const audio = audioRef.current;
                                const rect = event.currentTarget.getBoundingClientRect();
                                if (audio && audio.duration) {
                                  audio.currentTime = ((event.clientX - rect.left) / rect.width) * audio.duration;
                                }
                              }}
                            >
                              <div className="relative h-1 w-full rounded-full bg-lightest-grey">
                                <div
                                  className="pointer-events-none absolute h-1 rounded-l-full bg-green"
                                  style={{ width: `${audioProgress}%` }}
                                />
                              </div>
                            </button>
                            <span>
                              {String(Math.floor(audioDuration / 60))}:
                              {String(Math.floor(audioDuration % 60)).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </figure>
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
        <button
          aria-label="Next book list"
          className="focus:outline-hidden"
          disabled={currentBookPage === 3}
          onClick={(): void => setCurrentBookPage((currentBookPage: number): number => currentBookPage + 1)}
        >
          <DownArrowIcon className={clsx("h-6 w-6 -rotate-90", currentBookPage === 3 ? "text-grey" : "text-blue")} />
        </button>
      </div>
    </>
  );
};
