import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine, RiMoonFill } from "react-icons/ri";

import useColorMode from "../hooks/useColorMode";

import HeaderIcon from "../assets/images/icon.svg";
import Button from "./Button";

export default function Header() {
  // === header toggle ===
  const [menuOpen, setMenuOpen] = useState(false);

  const setHandleMenu = () => {
    setMenuOpen((even) => !even);
  };

  // === add header shadow when scrolling ===
  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    const addHeaderShadow = () => {
      window.scrollY >= 100 ? setHeaderShadow(true) : setHeaderShadow(false);
    };
    window.addEventListener("scroll", addHeaderShadow);

    return () => {
      window.removeEventListener("scroll", addHeaderShadow);
    };
  }, []);

  // === dark mode ===
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      className={`header fixed top-0 left-0 z-20 w-full bg-white transition-all duration-300 dark:bg-gray-900 ${
        headerShadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__link inline-flex items-center font-serif text-[20px] text-gray-900 dark:text-white"
        >
          <img
            src={HeaderIcon}
            alt="header icon"
            className="header__link-icon w-10"
          />
          SeaOcean.
        </Link>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-white py-8 px-16 text-center shadow-md transition-all duration-300 dark:bg-gray-900 md:static md:top-0 md:flex md:w-max md:scale-y-100 md:items-center md:gap-6 md:p-0 md:opacity-100 md:shadow-none lg:gap-8 ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col gap-6 md:mb-0 md:flex-row lg:gap-8">
            {[
              ["About Us", "/about-us"],
              ["Pricing", "/pricing"],
              ["Contact Us", "/contact-us"],
              ["Support", "/support"],
            ].map(([title, url]) => (
              <li key={url.toString()}>
                <Link
                  to={url}
                  className="header__link text-[15px] font-medium text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-red-600"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* themme toggle */}
          <div
            className="header__theme absolute right-12 top-4 inline-flex cursor-pointer text-[1.3rem] text-gray-900 dark:text-white md:static"
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            <RiMoonFill />
          </div>

          <Button url="/">get started</Button>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer text-[1.3rem] text-gray-900 dark:text-white md:hidden"
          onClick={setHandleMenu}
        >
          {!menuOpen ? <RiMenu3Line /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}
