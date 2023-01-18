import React from "react";
import { Link } from "react-router-dom";

export default function Button({ url, children, className }) {
  return (
    <Link
      to={url}
      className={
        `flex h-[52px] items-center justify-center rounded-lg bg-red-600 py-4 px-8 font-sans text-[15px] font-semibold capitalize text-white`.concat(
          " "
        ) + className
      }
    >
      {children}
    </Link>
  );
}
