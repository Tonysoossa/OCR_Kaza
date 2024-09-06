import React, { useState } from "react";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 1) {
    return (
      <div className="slideshow">
        <img src={images[0]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="next" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <div className="counter">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

export default Slideshow;
