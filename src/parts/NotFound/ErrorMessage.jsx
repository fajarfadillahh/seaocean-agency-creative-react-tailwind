import React from "react";

import Button from "../../components/Button";

export default function ErrorMessage() {
  return (
    <div className="error flex h-screen w-full items-center justify-center">
      <div className="error__container container">
        <div className="error__data text-center">
          <h1 className="error__title section-title text-[36px] sm:text-[42px] lg:text-[56px]">
            404 Not Found!
          </h1>
          <p className="error__text section-text">
            The page you're looking for was not found
          </p>
          <Button url="/" className="xs:inline-flex">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
