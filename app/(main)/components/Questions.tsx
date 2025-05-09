"use client";

import clsx from "clsx";
import Link from "next/link";

import { useState } from "react";
import { DownArrowIcon } from "/Icons";

import type { JSX, MouseEventHandler, ReactNode } from "react";

const Detail = ({
  question,
  answer,
  expanding,
  onClick,
}: {
  question: string;
  answer: ReactNode;
  expanding: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}): JSX.Element => (
  <div className="border-light-grey m:py-8 border-b py-4">
    <div className="flex cursor-pointer list-none justify-between" onClick={onClick}>
      <h3 className="text-h4 font-bold">{question}</h3>
      <div className="self-center">
        <DownArrowIcon
          className={clsx("transition-700 linear ml-4 h-6 w-6 transition-transform", {
            "-scale-y-100 transform": expanding,
          })}
        />
      </div>
    </div>
    <div
      className={clsx(
        "text-dark-grey overflow-hidden transition-all",
        expanding ? "max-h-[100rem] opacity-100 m:mt-6 m:pr-10 mt-4" : "max-h-0 opacity-75",
      )}
    >
      {answer}
    </div>
  </div>
);

export const Questions = (): JSX.Element => {
  const [expanding, setExpanding] = useState<number>(-1);

  const qas: { question: string; answer: ReactNode }[] = [
    {
      question: "What can Blinkist do for me?",
      answer: `Blinkist is here to help you learn faster and smarter. It offers summaries from thousands of bestselling 
      non-fiction books to read or listen to in just 15 minutes. Whether you want to acquire new knowledge or fill up 
      your waiting times with insightful information, Blinkist is your perfect learning companion.`,
    },
    {
      question: "How can I use Blinkist?",
      answer: `You can access Blinkist on most devices. Either download our Blinkist app on your smartphone, available 
      on both iOS and Android devices, or use it on any desktop computer through our website. For on-the-go convenience, 
      listen to our audio versions while commuting, during your workouts, or while doing household chores.You also have 
      the option to read or listen offline by downloading the content. To make your journeys even more enlightening, you 
      can use Blinkist through CarPlay and Android Auto while you're driving.`,
    },
    {
      question: "What types of books does Blinkist cover? How many are there?",
      answer: `There are currently over 7,500 books in the Blinkist library and we constantly add more titles to our 
      collection. From the latest releases to timeless classics, Blinkist's library spans a diverse range of topics, 
      including but not limited to business, personal development, parenting, science, philosophy, psychology, politics, 
      and culture. Our goal is to provide key insights from globally acclaimed and impactful non-fiction books. Whether 
      you want to dive deep into a specific subject or explore various topics, you'll find the right content that suits 
      your needs and interests.`,
    },
    {
      question: "What's included in a plan?",
      answer: `With the Basic plan, you can only access one pre-selected book per day. The Premium plan gives you 
      unlimited access to our entire library of 7,500+ books, podcasts, and expert-led guides. The Premium plan enables 
      you to read or listen offline, save and organize your content, and get personalized recommendations to suit your 
      interests. On top of that, all Premium members get a second Premium account for free to share with someone of 
      their choice!`,
    },
    {
      question: "What makes Blinkist book summaries the best on the market?",
      answer: `Blinkist book summaries stand out for their commitment to quality. We work with experts, writers, and 
      editors who collaborate with the original authors whenever possible to ensure that the summaries contain the 
      essential insights and preserve the spirit of the entire book. Besides, Blinkist provides an audio version for 
      each summary, giving you the flexibility to learn however you want.`,
    },
    {
      question: "Can I cancel during my trial or subscription?",
      answer: `If you cancel your trial at any time before it ends, you won’t be charged. Although you won’t have full 
      access to the complete Blinkist library, you’ll still be able to learn and grow with 1 pre-selected book a day.`,
    },
    {
      question: "Have more questions? Contact our Customer Support!",
      answer: (
        <>
          You can reach them via{" "}
          <Link href="mailto:support@blinkist.com" className="underline">
            support@blinkist.com
          </Link>
        </>
      ),
    },
  ];

  return (
    <section className="m:mx-12 mx-4">
      <div className="text-midnight m:mx-auto m:max-w-2xl">
        <h2 className="text-h3 m:mb-4 m:text-h2 mb-8 flex flex-col text-center font-bold">
          Do you have any questions?
        </h2>
        {qas.map(
          ({ question, answer }: { question: string; answer: ReactNode }, index: number): JSX.Element => (
            <Detail
              key={`question-${index}`}
              question={question}
              answer={answer}
              expanding={expanding === index}
              onClick={(): void => {
                if (expanding !== index) {
                  setExpanding(index);
                } else {
                  setExpanding(-1);
                }
              }}
            />
          ),
        )}
      </div>
    </section>
  );
};
