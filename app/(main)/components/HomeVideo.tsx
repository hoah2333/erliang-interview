"use client";

import clsx from "clsx";

import { useRef, useState } from "react";
import { PlayIcon, SoundIcon } from "/Icons";

import type { JSX } from "react";

export const HomeVideo = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = (): void => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative mx-auto aspect-video w-full max-w-3xl">
      <button
        className={clsx(
          "bg-opacity-40 absolute top-0 right-0 left-0 z-10 flex aspect-video cursor-pointer items-center",
          "justify-center rounded-2xl bg-black/50 transition-opacity duration-500",
          isPlaying ? "pointer-events-none opacity-0" : "opacity-100",
        )}
        aria-label="Play video"
        onClick={handleClick}
      >
        <PlayIcon className="bg-midnight h-16 w-16 rounded-full text-white" />
        <div
          className={clsx(
            "text-midnight absolute top-0 right-0 z-10 m-2 h-8 w-8 rounded-full bg-white p-1 transition-opacity",
            "duration-500",
            isPlaying ? "pointer-events-none opacity-0" : "opacity-100",
          )}
          aria-hidden="true"
        >
          <SoundIcon className="w-full h-full" />
        </div>
      </button>
      <video
        ref={videoRef}
        className="lazy z-20 w-full rounded-2xl entered loaded"
        autoPlay
        muted={!isPlaying}
        loop
        playsInline
        width="768"
        height="432"
        poster="https://static.blinkist.com/web-growth/homepage/video-poster.png?c=365"
        controls={isPlaying}
      >
        <source
          data-src="https://static.blinkist.com/web-growth/homepage/video-en.webm?c=365"
          type="video/webm"
          src="https://static.blinkist.com/web-growth/homepage/video-en.webm?c=365"
        />
        <source
          data-src="https://static.blinkist.com/web-growth/homepage/video-en.c.mp4?c=365"
          type="video/mp4"
          src="https://static.blinkist.com/web-growth/homepage/video-en.c.mp4?c=365"
        />
      </video>
    </div>
  );
};


