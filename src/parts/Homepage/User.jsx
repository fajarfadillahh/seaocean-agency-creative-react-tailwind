import React from "react";

import UserImg from "../../assets/images/user-img.png";

export default function User() {
  return (
    <section className="user section">
      <div className="user__container container grid gap-12">
        <div className="user__data justify-self-center text-center">
          <h1 className="user__title section-title">
            More than thousand of user we have worldwide with happy feedback
          </h1>
          <p className="user__text section-text pb-0">
            Focus only on the meaning, we take care of the design. As soon as
            the meeting end you can export in one click into your preferred.
          </p>
        </div>

        <img
          src={UserImg}
          alt="user immg"
          className="user__img justify-self-center"
        />
      </div>
    </section>
  );
}
