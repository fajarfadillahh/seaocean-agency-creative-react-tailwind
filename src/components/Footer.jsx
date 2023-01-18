import React from "react";
import { Link } from "react-router-dom";

import FooterIcon from "../assets/images/icon.svg";

export default function Footer() {
  return (
    <footer className="footer pt-32 pb-8">
      <div className="footer__container container grid gap-24">
        <div className="footer__group grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 xl:grid-cols-[1fr,repeat(3,0.5fr)]">
          <div className="footer__content">
            <Link
              to="/"
              className="footer__content-link inline-flex items-center pb-4 font-serif text-[20px] text-gray-900"
            >
              <img
                src={FooterIcon}
                alt="header icon"
                className="footer__content-link-icon w-10"
              />
              SeaOcean.
            </Link>
            <p className="footer__content-text section-text pb-0 lg:max-w-[320px]">
              Get your blood tests delivered at let home collect sample from the
              victory.
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-6 font-serif text-[20px] text-gray-900">
              About Us
            </h3>

            <ul className="footer__content-list flex flex-col gap-3">
              {[
                ["Support Center", "/support-center"],
                ["Customer Support", "/customer-support"],
                ["About Us", "/about-us"],
                ["Copyrights", "/copyrights"],
              ].map(([title, url]) => (
                <li key={url.toString()}>
                  <Link
                    to={url}
                    className="footer__link text-[15px] text-gray-600 hover:text-red-600"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-6 font-serif text-[20px] text-gray-900">
              Our Information
            </h3>

            <ul className="footer__content-list flex flex-col gap-3">
              {[
                ["Return Policy", "/return-policy"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Cons", "/terms-cons"],
                ["Site Map", "/site-map"],
              ].map(([title, url]) => (
                <li key={url.toString()}>
                  <Link
                    to={url}
                    className="footer__link text-[15px] text-gray-600 hover:text-red-600"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-6 font-serif text-[20px] text-gray-900">
              My Account
            </h3>

            <ul className="footer__content-list flex flex-col gap-3">
              {[
                ["Press Inquires", "/press-inquires"],
                ["Social Media", "/social-media"],
                ["Directories", "/directories"],
                ["Images & Roll", "/images-roll"],
              ].map(([title, url]) => (
                <li key={url.toString()}>
                  <Link
                    to={url}
                    className="footer__link text-[15px] text-gray-600 hover:text-red-600"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer__copy border-t border-gray-300 pt-8 text-center text-[15px] text-gray-600">
          © Copyrights 2022, all rights reserved - Develop by Fajar Fadillah A
          ❤️
        </p>
      </div>
    </footer>
  );
}
