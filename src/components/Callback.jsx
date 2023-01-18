import React from "react";

import Button from "./Button";

export default function Callback() {
  return (
    <section className="callback section">
      <div className="callback__container container grid gap-8 xs:max-w-sm sm:max-w-md lg:max-w-xl">
        <div className="callback__data justify-self-center text-center">
          <h1 className="callback__title section-title">
            Do you have any question? Feel free to contact us
          </h1>
          <p className="callback__text section-text pb-0">
            Focus only on the meaning, we take care of the design. As soon as
            the meeting end you can export in one click into your preferred.
          </p>
        </div>

        <Button url="/contact-us" className="lg:justify-self-center">
          Contact us
        </Button>
      </div>
    </section>
  );
}
