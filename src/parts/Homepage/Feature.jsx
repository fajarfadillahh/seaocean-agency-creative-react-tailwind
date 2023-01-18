import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";

import FeatureImg from "../../assets/images/feature-img-(1).png";
import Button from "../../components/Button";

export default function Feature() {
  return (
    <section className="feature section">
      <div className="feature__container container grid gap-12 lg:grid-cols-2 lg:items-center xl:max-w-5xl">
        <div className="feature__data justify-self-center text-center xs:max-w-sm sm:max-w-md lg:order-2 lg:max-w-full lg:text-left">
          <h1 className="feature__title section-title">
            We help you to boost your business profitable with our talent
            marketer
          </h1>
          <p className="feature__text section-text">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          <ul className="feature__list flex flex-col gap-4 pb-8">
            <li className="feature__item inline-flex items-center gap-2 text-[15px] text-gray-600">
              <RiCheckboxCircleLine className="text-[1.3rem] text-red-600" />
              Unlimited design possibility
            </li>
            <li className="feature__item inline-flex items-center gap-2 text-[15px] text-gray-600">
              <RiCheckboxCircleLine className="text-[1.3rem] text-red-600" />
              Completely responsive features
            </li>
          </ul>
          <Button url="/feature" className="inline-flex">
            Explore details
          </Button>
        </div>

        <img
          src={FeatureImg}
          alt="feature img"
          className="feature__img justify-self-center xs:max-w-sm sm:max-w-md lg:max-w-full"
        />
      </div>
    </section>
  );
}
