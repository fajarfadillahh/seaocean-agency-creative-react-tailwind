import React from "react";

export default function Work() {
  return (
    <section className="work section">
      <div className="work__wrapper bg-[#f9fafc] py-16">
        <div className="work__container container grid gap-12">
          <div className="work__data justify-self-center text-center">
            <h1 className="work__title section-title">
              Let's meet how its work
            </h1>
            <p className="work__text section-text pb-0">
              Focus only on the meaning, we take care of the design. As soon as
              the meeting end you can export in one click into your preferred
              format.
            </p>
          </div>

          <div className="work__group grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-8">
            <div className="work__content flex items-start gap-6">
              <h3 className="work__number font-serif text-[28px] text-gray-900">
                01
              </h3>

              <div>
                <h3 className="work__content-title pb-4 font-serif text-[20px] text-gray-900">
                  Connect with support
                </h3>
                <p className="work__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="work__content flex items-start gap-6">
              <h3 className="work__number font-serif text-[28px] text-gray-900">
                02
              </h3>

              <div>
                <h3 className="work__content-title pb-4 font-serif text-[20px] text-gray-900">
                  Explain your business idea
                </h3>
                <p className="work__content-text section-text pb-0">
                  Our homes are designed to be move-in ready. Think furnished
                  common areas, super fast wifi, and flexible leases.
                </p>
              </div>
            </div>

            <div className="work__content flex items-start gap-6">
              <h3 className="work__number font-serif text-[28px] text-gray-900">
                03
              </h3>

              <div>
                <h3 className="work__content-title pb-4 font-serif text-[20px] text-gray-900">
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
