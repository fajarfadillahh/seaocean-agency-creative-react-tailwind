import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      window.scrollY >= 600 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-6 inline-flex cursor-pointer items-center justify-center rounded-lg bg-red-600 p-3 text-[1.3rem] text-white transition-all duration-300 xl:right-16 ${
        visible ? "bottom-16" : "-bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
}
