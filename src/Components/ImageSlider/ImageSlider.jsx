import React, { useEffect, useState, useCallback } from "react";

const ImageSlider = ({ slides, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      toNext();
    }, interval);

    return () => clearInterval(autoSlide); // Clean up the interval on component unmount
  }, [toNext, interval]);

  const slidesStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "all ease 2s"
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "2rem",
    zIndex: 1,
    cursor: "pointer"
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "2rem",
    zIndex: 1,
    cursor: "pointer"
  };

  const toPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <div style={leftArrowStyles} onClick={toPrev}>❮</div>
      <div style={rightArrowStyles} onClick={toNext}>❯</div>
      <div style={slidesStyles}></div>
    </div>
  );
};

export default ImageSlider;
