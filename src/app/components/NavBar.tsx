"use client";
import ButtonLink from "@components/ButtonLink";
import WordMark from "@components/WordMark";
import { asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { SettingsDocument } from "../../../prismicio-types";

type Props = {
  settings: SettingsDocument<string>;
};

const NavBar = ({ settings }: Props) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={closeMenu}>
            <WordMark />
            <span className="sr-only">Glisten.ai Home Page</span>
          </Link>

          <button
            type="button"
            className="cursor-pointer p-2 text-3xl text-white md:hidden"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <MdMenu />
            <span className="sr-only">
              {isOpen ? "Close Menu" : "Open Menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={useMemo(
            () =>
              clsx(
                "fixed top-0 right-0 bottom-0 left-0 z-40 flex flex-col items-end gap-4 bg-[#070815] pt-14 pr-4 transition-transform duration-300 motion-reduce:transition-none md:hidden",
                isOpen ? "translate-x-0" : "translate-x-[100%]",
              ),
            [isOpen],
          )}
        >
          <button
            type="button"
            className="fixed top-4 right-4 mb-4 cursor-pointer p-2 text-3xl text-white md:hidden"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <MdClose />
            <span className="sr-only">
              {isOpen ? "Close Menu" : "Open Menu"}
            </span>
          </button>
          <div className="grid justify-items-end gap-6">
            {settings.data.navigation.map((item) => {
              return item.cta_button ? (
                <ButtonLink
                  field={item.link}
                  className="w-full"
                  key={item.label}
                  onClick={closeMenu}
                >
                  {item.label}
                </ButtonLink>
              ) : (
                <PrismicNextLink
                  field={item.link}
                  className="block px-3 text-3xl first:mt-8"
                  onClick={closeMenu}
                  aria-current={
                    pathName.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                  key={item.label}
                >
                  {item.label}
                </PrismicNextLink>
              );
            })}
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden gap-6 md:flex">
          {settings.data.navigation.map((item) => {
            if (item.cta_button)
              return (
                <li key={item.label}>
                  <ButtonLink
                    field={item.link}
                    aria-current={
                      pathName.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                </li>
              );
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center"
                  aria-current={
                    pathName.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
