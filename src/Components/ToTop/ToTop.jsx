import React, { useEffect, useState } from "react";
import "./ToTop.scss";

const ToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <div>
    {
        backToTopButton && (
            <button className="topBtn" onClick={scrollUp}>🠕</button>
        )
    }
  </div>;
};

export default ToTop;
