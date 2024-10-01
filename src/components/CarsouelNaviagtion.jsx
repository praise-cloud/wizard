import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const CarsouelNaviagtion = ({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
}) => {
  return (
    <div className="flex justify-between mx-auto gap-20 items-center py-5 overflow-hidden">
      <div className="flex">
        <button
          className="text-white p-2 rounded-full text-3xl"
          onClick={prevSlide}
        >
          <IoArrowBackOutline />
        </button>
      </div>

      {/* Dots to indicate the current slide */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-brand-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between w-full px-10v">
        <button
          className="text-white p-2 rounded-full text-3xl"
          onClick={nextSlide}
        >
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default CarsouelNaviagtion;
