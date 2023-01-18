import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import HeaderIcon from "../assets/images/icon.svg";
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const setHandleMenu = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <header className="header fixed top-0 left-0 z-20 w-full bg-white">
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__link inline-flex items-center font-serif text-[20px] text-gray-900"
        >
          <img
            src={HeaderIcon}
            alt="header icon"
            className="header__link-icon w-10"
          />
          SeaOcean.
        </Link>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-white py-8 px-16 text-center shadow-lg transition-all duration-300 ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col gap-6">
            {[
              ["About Us", "/about-us"],
              ["Pricing", "/pricing"],
              ["Contact Us", "/contact-us"],
              ["Support", "/support"],
            ].map(([title, url]) => (
              <li key={url.toString()}>
                <Link
                  to={url}
                  className="header__link text-[15px] font-medium text-gray-900 hover:text-red-600"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Button url="/">get started</Button>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer text-[1.3rem] text-gray-900"
          onClick={setHandleMenu}
        >
          {!menuOpen ? <RiMenu3Line /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}