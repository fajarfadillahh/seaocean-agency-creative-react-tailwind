import React from "react";

export default function Work() {
  return (
    <section className="work section transition-all duration-300 dark:bg-gray-900">
      <div className="work__wrapper bg-[#f9fafc] py-16 transition-all duration-300 dark:bg-gray-800">
        <div className="work__container container grid gap-12">
          <div className="work__data justify-self-center text-center xs:max-w-sm sm:max-w-md lg:max-w-xl">
            <h1 className="work__title section-title">
              Let's meet how its work
            </h1>
            <p className="work__text section-text pb-0">
              Focus only on the meaning, we take care of the design. As soon as
              the meeting end you can export in one click into your preferred
              format.
            </p>
          </div>

          <div className="work__group grid items-center gap-8 justify-self-center xs:max-w-sm sm:max-w-md lg:max-w-3xl lg:grid-cols-2 xl:max-w-5xl xl:grid-cols-3">
            <div className="work__content flex items-start gap-6">
              <h3 className="work__content-number font-serif text-[28px] text-gray-900 dark:text-white">
                01
              </h3>

              <div>
                <h3 className="work__content-title pb-4 font-serif text-[20px] text-gray-900 dark:text-white">
                  Connect with support
                </h3>
                <p className="work__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="work__content flex items-start gap-6">
              <h3 className="work__content-number font-serif text-[28px] text-gray-900 dark:text-white">
                02
              </h3>

              <div>
                <h3 className="work__content-title pb-4 font-serif text-[20px] text-gray-900 dark:text-white">
                  Explain your business idea
                </h3>
                <p className="work__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="work__content flex items-start gap-6">
              <h3 className="work__content-number font-serif text-[28px] text-gray-900 dark:text-white">
                03
              </h3>

              <div>
                <h3 className="work__content-title pb-4 font-serif text-[20px] text-gray-900 dark:text-white">
                  Be partner & earn money
                </h3>
                <p className="work__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
