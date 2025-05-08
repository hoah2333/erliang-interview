"use client";

import clsx from "clsx";
import Link from "next/link";

import { useRef, useState } from "react";
import {
  BlinkistIcon,
  BlinkistSmallIcon,
  CloseIcon,
  DownArrowIcon,
  LeftBigArrowIcon,
  LoginIcon,
  SidebarIcon,
  StairIcon,
} from "/Icons";

import type { JSX, MouseEventHandler, ReactNode } from "react";

export const Navbar = (): JSX.Element => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [hoveringItem, setHoveringItem] = useState<number>(-1);

  const categoryRef = useRef<HTMLDivElement>(null);

  const mainCategories: string[] = [
    "Inspiration & Personal Growth",
    "Health & Meditation",
    "Career & Business",
    "Relationship & Family",
    "Science & Technology",
    "Culture & Humanity",
    "Money & Economics",
    "Fiction",
  ];

  /* 由于这只是一个 demo，所以此处所有 icon 都用同一个 icon 代替 */
  const subCategories: { icon: ReactNode; name: string; link: string }[][] = [
    [
      { icon: <StairIcon />, name: "Personal Development", link: "#" },
      { icon: <StairIcon />, name: "Productivity", link: "#" },
      { icon: <StairIcon />, name: "Motivation & Inspiration", link: "#" },
      { icon: <StairIcon />, name: "Communication Skills", link: "#" },
      { icon: <StairIcon />, name: "Biography & Memoir", link: "#" },
      { icon: <StairIcon />, name: "Religion & Spirituality", link: "#" },
      { icon: <StairIcon />, name: "Philosophy", link: "#" },
      { icon: <StairIcon />, name: "Creativity", link: "#" },
      { icon: <StairIcon />, name: "Education", link: "#" },
    ],
    [
      { icon: <StairIcon />, name: "Psychology", link: "#" },
      { icon: <StairIcon />, name: "Mindfulness & Happiness", link: "#" },
      { icon: <StairIcon />, name: "Health & Nutrition", link: "#" },
    ],
    [
      { icon: <StairIcon />, name: "Career & Success", link: "#" },
      { icon: <StairIcon />, name: "Management & Leadership", link: "#" },
      { icon: <StairIcon />, name: "Productivity", link: "#" },
      { icon: <StairIcon />, name: "Entrepreneurship", link: "#" },
      { icon: <StairIcon />, name: "Marketing & Sales", link: "#" },
      { icon: <StairIcon />, name: "Corporate Culture", link: "#" },
      { icon: <StairIcon />, name: "Education", link: "#" },
    ],
    [
      { icon: <StairIcon />, name: "Psychology", link: "#" },
      { icon: <StairIcon />, name: "Communication Skills", link: "#" },
      { icon: <StairIcon />, name: "Sex & Relationships", link: "#" },
      { icon: <StairIcon />, name: "Parenting", link: "#" },
    ],
    [
      { icon: <StairIcon />, name: "Science", link: "#" },
      { icon: <StairIcon />, name: "Technology & the Future", link: "#" },
      { icon: <StairIcon />, name: "Nature & the Environment", link: "#" },
    ],
    [
      { icon: <StairIcon />, name: "Society & Culture", link: "#" },
      { icon: <StairIcon />, name: "Biography & Memoir", link: "#" },
      { icon: <StairIcon />, name: "History", link: "#" },
      { icon: <StairIcon />, name: "Philosophy", link: "#" },
      { icon: <StairIcon />, name: "Religion & Spirituality", link: "#" },
      { icon: <StairIcon />, name: "Politics", link: "#" },
    ],
    [
      { icon: <StairIcon />, name: "Money & Investments", link: "#" },
      { icon: <StairIcon />, name: "Politics", link: "#" },
      { icon: <StairIcon />, name: "Economics", link: "#" },
    ],
    [
      { icon: <StairIcon />, name: "Book Types", link: "#" },
      { icon: <StairIcon />, name: "Fantasy", link: "#" },
      { icon: <StairIcon />, name: "Fiction", link: "#" },
      { icon: <StairIcon />, name: "Fiction Authors", link: "#" },
    ],
  ];

  const handleButtonClick = (): void => {
    if (transitioning) {
      return;
    } else {
      setIsCategoriesOpen(!isCategoriesOpen);
      setTransitioning(true);
      setTimeout((): void => {
        setTransitioning(false);
        if (categoryRef) {
          categoryRef.current?.focus();
        }
      }, 500);
    }
  };

  const handleOnBlur = (): void => {
    if (transitioning || !isCategoriesOpen) {
      return;
    } else {
      setIsCategoriesOpen(false);
      setTransitioning(true);
      setTimeout((): void => {
        setTransitioning(false);
        setHoveringItem(-1);
      }, 500);
    }
  };

  return (
    <>
      <div className="border-lightest-grey border-b sticky top-0 z-40 bg-white">
        <section className="flex items-center w-full h-18 pl-1 pr-4 l:gap-x-8 max-w-[80rem] mx-auto m:px-12">
          <nav className="flex items-center flex-1">
            <button className="p-3 mr-3 l:hidden" onClick={handleButtonClick}>
              <SidebarIcon className="w-6 h-6 text-midnight" />
            </button>
            <Link href="/">
              <BlinkistSmallIcon className="h-6 mr-auto l:hidden" />
            </Link>
            <Link href="/">
              <BlinkistIcon className="h-6 mr-8 hidden l:block" />
            </Link>
            <div className="relative hidden l:block">
              <button
                className={clsx(
                  "flex items-center font-medium text-midnight hover:text-blue focus:text-blue active:text-blue",
                  "text-caption",
                  { "text-blue": isCategoriesOpen },
                )}
                onClick={handleButtonClick}
              >
                Categories
                <DownArrowIcon
                  className={clsx("w-3 h-3 ml-2 mt-1 transition-all", { "-rotate-180": isCategoriesOpen })}
                />
              </button>
              <div
                ref={categoryRef}
                tabIndex={-1}
                className={clsx(
                  "flex bg-light-pale-mint-grey rounded-lg border border-light-grey z-50 absolute top-8 shadow-dark-grey",
                  "transition-opacity duration-300",
                  isCategoriesOpen ? "opacity-100 visible" : "opacity-0",
                  { invisible: !isCategoriesOpen && !transitioning },
                )}
                onFocus={() => console.log("focused!")}
                onBlur={handleOnBlur}
              >
                <ul className="w-80 m-6 bg-light-pale-mint-grey z-10">
                  {mainCategories.map(
                    (category: string, index: number): JSX.Element => (
                      <MainListItem
                        key={`mainCategory-${index}`}
                        isHovering={index === hoveringItem}
                        onMouseEnter={(): void => setHoveringItem(index)}
                      >
                        <div className="w-full flex items-center font-medium">{category}</div>
                        <div>
                          <DownArrowIcon className="w-6 h-6 p-1 -rotate-90 flex-shrink-0" />
                        </div>
                      </MainListItem>
                    ),
                  )}
                </ul>
                <div
                  className={clsx("w-[19rem] my-6 px-6 border-l border-l-light-grey -z-10", {
                    hidden: hoveringItem === -1,
                  })}
                >
                  <div className="flex flex-col">
                    {subCategories.map(
                      (subCategory: { icon: ReactNode; name: string; link: string }[], index: number): JSX.Element => (
                        <SubListItem
                          key={`subCategory-${index}`}
                          hidden={index !== hoveringItem}
                          listItems={subCategory}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav className="flex items-center flex-1 justify-end">
            <Link
              href="#"
              className="hidden l:block text-midnight hover:text-blue font-medium text-caption mr-8 whitespace-nowrap"
            >
              For Business
            </Link>
            <Link
              href="#"
              className="hidden l:block text-midnight hover:text-blue font-medium text-caption mr-8 whitespace-nowrap"
            >
              Coaching
            </Link>
            <Link
              href="#"
              className="hidden l:block text-midnight hover:text-blue font-medium text-caption mr-8 whitespace-nowrap"
            >
              <span className="flex whitespace-nowrap">
                <LoginIcon className="w-6 h-6 mr-1" />
                Login
              </span>
            </Link>
            <button
              className={clsx(
                "whitespace-nowrap rounded border-none font-cera-pro font-medium text-base leading-5 text-center",
                "items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer",
                "disabled:cursor-not-allowed px-4 bg-green text-midnight hover:bg-green-2 hover:text-midnight",
                "disabled:text-white py-3",
              )}
            >
              Get started
            </button>
          </nav>
        </section>
      </div>
      <div
        className={clsx(
          "bg-light-pale-mint-grey z-50 overflow-y-auto fixed top-0 w-full h-screen l:hidden transition-all duration-300",
          { "-translate-x-full": !isCategoriesOpen },
        )}
      >
        <div className="px-5 py-6 flex justify-between border-b border-b-lightest-grey">
          <BlinkistSmallIcon className="h-6" />
          <button aria-roledescription="Close navigation" onClick={handleOnBlur}>
            <CloseIcon className="w-6 h-6 text-midnight hover:text-blue cursor-pointer" />
          </button>
        </div>
        <div className="relative overflow-y-auto">
          <ul>
            <li className="flex my-2">
              <SidebarItem href="#" noArrow>
                <LoginIcon className="w-6 h-6 mr-1" />
                Login
              </SidebarItem>
            </li>
            <li>
              <hr className="border-light-grey mx-5 my-2" />
            </li>
            <li>
              <label className="mx-5 uppercase text-mid-grey font-bold text-caption h-8">Categories</label>
            </li>
            <li className="pr-4 overflow-y-auto">
              <ul>
                {mainCategories.map(
                  (category: string, index: number): JSX.Element => (
                    <li key={`category-${index}`} className="flex mb-2 last:mb-0">
                      <SidebarItem onClick={(): void => setHoveringItem(index)}>{category}</SidebarItem>
                    </li>
                  ),
                )}
              </ul>
            </li>
            <li>
              <hr className="border-light-grey mx-5 my-2" />
            </li>
            <li className="flex mb-3">
              <SidebarItem href="#" noArrow>
                For Business
              </SidebarItem>
            </li>
          </ul>
          <div
            className={clsx("absolute top-0 h-full w-full bg-light-pale-mint-grey transition-all duration-300", {
              "-translate-x-full": hoveringItem === -1,
            })}
          >
            <button
              className="mx-5 my-4"
              aria-label="Go back one level on the navigation"
              onClick={(): void => setHoveringItem(-1)}
            >
              <LeftBigArrowIcon className="w-6 h-6 text-midnight hover:text-blue" />
            </button>
            <div className="flex flex-col">
              {subCategories.map(
                (subCategory: { icon: ReactNode; name: string; link: string }[], index: number): JSX.Element => (
                  <ul
                    key={`subCategory-${index}`}
                    className={clsx("overflow-y-auto", { hidden: index !== hoveringItem })}
                  >
                    {subCategory.map(
                      (
                        { icon, name, link }: { icon: ReactNode; name: string; link: string },
                        index: number,
                      ): JSX.Element => (
                        <li key={`subItem-${index}`} className="flex mb-2 last:mb-0">
                          <SidebarItem href={link} noArrow>
                            {icon}
                            {name}
                          </SidebarItem>
                        </li>
                      ),
                    )}
                  </ul>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MainListItem = ({
  isHovering,
  children,
  onMouseEnter,
}: {
  isHovering: boolean;
  children: ReactNode;
  onMouseEnter: MouseEventHandler<HTMLLIElement>;
}): JSX.Element => (
  <li className="flex mb-2 last:mb-0" onMouseEnter={onMouseEnter}>
    <button
      className={clsx(
        "flex items-center h-12 l:h-10 w-full group cursor-pointer hover:text-blue active:text-blue",
        isHovering ? "text-blue" : "text-midnight",
      )}
    >
      {children}
    </button>
  </li>
);

const SubListItem = ({
  hidden,
  listItems,
}: {
  hidden: boolean;
  listItems: { icon: ReactNode; name: string; link: string }[];
}): JSX.Element => (
  <ul className={clsx("overflow-y-auto", { hidden })}>
    {listItems.map(
      ({ icon, name, link }: { icon: ReactNode; name: string; link: string }, index: number): JSX.Element => (
        <li key={`item-${index}`} className="flex mb-2 last:mb-0">
          <Link
            href={link}
            className="flex items-center h-12 l:h-10 w-full text-midnight group cursor-pointer hover:text-blue active:text-blue"
          >
            <div className="w-full flex items-center font-medium *:w-6 *:h-6 *:mr-2">
              {icon}
              {name}
            </div>
          </Link>
        </li>
      ),
    )}
  </ul>
);

const SidebarItem = ({
  href = "#",
  noArrow = false,
  onClick,
  children,
}: {
  href?: string;
  noArrow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
}): JSX.Element => {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center h-12 l:h-10 w-full text-midnight group cursor-pointer hover:text-blue",
        "active:text-blue",
      )}
      onClick={onClick}
    >
      <div className="w-1 h-full rounded flex-shrink-0 mr-4 group-hover:bg-blue group-active:bg-blue bg-transparent" />
      <div className="w-full flex items-center font-medium *:w-6 *:h-6 *:mr-2">{children}</div>
      <div className={clsx({ hidden: noArrow })}>
        <DownArrowIcon className="w-6 h-6 p-1 -rotate-90 flex-shrink-0" />
      </div>
    </Link>
  );
};
