import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 500) {
        setVisible(true);
      } else if (scrolled <= 500) {
        setVisible(false);
      }
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
      className="fixed right-6 bottom-16 inline-flex cursor-pointer items-center justify-center rounded-lg bg-red-600 p-3 text-[1.3rem] text-white xl:right-16"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <RiArrowUpLine />
    </div>
  );
}
