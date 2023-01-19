import React from "react";

export default function Services() {
  return (
    <section className="services section transition-all duration-300 dark:bg-gray-900">
      <div className="services__wrapper bg-[#f9fafc] py-16 transition-all duration-300 dark:bg-gray-800">
        <div className="services__container container grid gap-12">
          <div className="services__data justify-self-center text-center xs:max-w-sm sm:max-w-md lg:max-w-xl">
            <h1 className="services__title section-title">
              Go Beyond unlimited features
            </h1>
            <p className="services__text section-text pb-0">
              Focus only on the meaning, we take care of the design. As soon as
              the meeting end you can export in one click into your preferred
              format.
            </p>
          </div>

          <div className="services__group grid items-center gap-8 justify-self-center xs:max-w-sm sm:max-w-md lg:max-w-3xl lg:grid-cols-2 xl:max-w-5xl xl:grid-cols-3">
            <div className="services__content flex items-start gap-6">
              <h3 className="services__content-number font-serif text-[28px] text-gray-900 dark:text-white">
                01
              </h3>

              <div>
                <h3 className="services__content-title pb-4 font-serif text-[20px] text-gray-900 dark:text-white">
                  Trusted marketplace
                </h3>
                <p className="services__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="services__content flex items-start gap-6">
              <h3 className="services__content-number font-serif text-[28px] text-gray-900 dark:text-white">
                02
              </h3>

              <div>
                <h3 className="services__content-title pb-4 font-serif text-[20px] text-gray-900 dark:text-white">
                  Customer Gift vouchers
                </h3>
                <p className="services__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="services__content flex items-start gap-6">
              <h3 className="services__content-number font-serif text-[28px] text-gray-900 dark:text-white">
                03
              </h3>

              <div>
                <h3 className="services__content-title pb-4 font-serif text-[20px] text-gray-900 dark:text-white">
                  Multiple Awards wins
                </h3>
                <p className="services__content-text section-text pb-0">
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
