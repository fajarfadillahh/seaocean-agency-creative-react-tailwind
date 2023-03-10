import React from "react";

import Button from "../../components/Button";

import HeroImg from "../../assets/images/hero-img.png";
import HeroSponsored1 from "../../assets/images/hero-sponsored-(1).svg";
import HeroSponsored2 from "../../assets/images/hero-sponsored-(2).svg";
import HeroSponsored3 from "../../assets/images/hero-sponsored-(3).svg";

export default function Hero() {
  return (
    <section className="hero section transition-all duration-300 dark:bg-gray-900 xl:pt-40">
      <div className="hero__container container grid gap-12 lg:grid-cols-2 lg:items-center xl:max-w-5xl">
        <div className="hero__data grid gap-8 justify-self-center text-center xs:max-w-sm sm:max-w-md lg:max-w-full lg:text-left">
          <div>
            <h1 className="hero__title section-title xl:text-[56px]">
              A Creative way to grow your Exciting Business model
            </h1>
            <p className="hero__text section-text pb-0 xl:max-w-md">
              Get your blood tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
          </div>

          <form
            action=""
            className="hero__from flex flex-col gap-4 md:flex-row xl:max-w-md"
          >
            <input
              type="email"
              placeholder="Enter email address"
              className="hero__from-input h-[52px] w-full rounded-lg border border-gray-300 px-4 text-center font-semibold text-gray-900 outline-none transition-all duration-300 placeholder:text-[15px] placeholder:font-normal placeholder:text-gray-600 dark:border-none dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 md:text-left"
            />
            <Button url="/" className="hero__from-button">
              Subscibe
            </Button>
          </form>

          <div className="hero__sponsored inline-flex items-center justify-center gap-3 lg:justify-start">
            <p className="hero__sponsored-text text-[12px] text-gray-600 dark:text-white">
              Sponsored by:
            </p>

            <div className="hero__sponsored-list inline-flex items-center gap-2">
              <img
                src={HeroSponsored1}
                alt="hero sponsored"
                className="hero__sponsored-icon w-16"
              />
              <img
                src={HeroSponsored2}
                alt="hero sponsored"
                className="hero__sponsored-icon w-16"
              />
              <img
                src={HeroSponsored3}
                alt="hero sponsored"
                className="hero__sponsored-icon w-16"
              />
            </div>
          </div>
        </div>

        <img
          src={HeroImg}
          alt="hero img"
          className="hero__img justify-self-center xs:max-w-sm sm:max-w-md lg:max-w-full"
        />
      </div>
    </section>
  );
}
