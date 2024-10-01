import React, { useState } from "react";
import speechBubble from "../../assets/Images/speechBubble.svg";
import CarsouelNaviagtion from "../CarsouelNaviagtion";
import client_testimonials from "../../constant/clients_Testimonials.js";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === client_testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Go to previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? client_testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      <div className="flex flex-col gap-5 mx-auto justify-center items-center py-5 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col mx-auto justify-center items-center gap-5">
          <h1 className="bg-brand-primary p-2 font-sans font-bold text-3xl">
            Testimonial
          </h1>
          <p className="flex font-sans font-medium text-center mx-auto justify-center items-center px-10">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            About Our Digital Marketing Services.
          </p>
        </div>

        {/* Testimonial bubble */}
        <div className="flex flex-col bg-brand-secondary w-[390px] h-[552px] rounded-[50px] justify-center">
          <div className="relative flex mx-auto">
            <img
              src={speechBubble}
              alt="speech bubble containing what the client said"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
              <p className="text-center text-white font-sans">
                {client_testimonials[currentIndex].quote}
              </p>
            </div>
          </div>

          {/* Client info */}
          <div className="flex flex-col px-24 py-2 w-[459px]">
            <h3 className="text-brand-primary">
              {client_testimonials[currentIndex].name}
            </h3>
            <p className="text-white font-light">
              {client_testimonials[currentIndex].title}
            </p>
          </div>

          {/* Carousel Navigation */}
          <CarsouelNaviagtion
            currentSlide={currentIndex}
            totalSlides={client_testimonials.length}
            nextSlide={nextTestimonial}
            prevSlide={prevTestimonial}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
