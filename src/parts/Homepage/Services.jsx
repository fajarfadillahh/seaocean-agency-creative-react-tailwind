import React from "react";

import ServicesIcon1 from "../../assets/images/service-icon-(1).svg";
import ServicesIcon2 from "../../assets/images/service-icon-(2).svg";
import ServicesIcon3 from "../../assets/images/service-icon-(3).svg";

export default function Services() {
  return (
    <section className="services section">
      <div className="services__wrapper bg-[#f9fafc] py-16">
        <div className="services__container container grid gap-12">
          <div className="services__data justify-self-center text-center">
            <h1 className="services__title section-title">
              Go Beyond unlimited features
            </h1>
            <p className="services__text section-text pb-0">
              Focus only on the meaning, we take care of the design. As soon as
              the meeting end you can export in one click into your preferred
              format.
            </p>
          </div>

          <div className="services__group grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-8">
            <div className="services__content flex items-start gap-6">
              <img
                src={ServicesIcon1}
                alt="service icon"
                className="services__content-icon w-10"
              />

              <div>
                <h3 className="services__content-title pb-4 font-serif text-[20px] text-gray-900">
                  Trusted marketplace
                </h3>
                <p className="services__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="services__content flex items-start gap-6">
              <img
                src={ServicesIcon2}
                alt="service icon"
                className="services__content-icon w-10"
              />

              <div>
                <h3 className="services__content-title pb-4 font-serif text-[20px] text-gray-900">
                  Customer Gift vouchers
                </h3>
                <p className="services__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="services__content flex items-start gap-6">
              <img
                src={ServicesIcon3}
                alt="service icon"
                className="services__content-icon w-10"
              />

              <div>
                <h3 className="services__content-title pb-4 font-serif text-[20px] text-gray-900">
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
