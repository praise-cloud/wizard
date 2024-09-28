import React, { useState } from "react";
import HeroImage from "../../assets/Images/hero.svg";

// Navigation Links
const navLinks = [
  { name: "About Us", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Use Cases", link: "#use-cases" },
  { name: "Pricing", link: "#pricing" },
  { name: "Blog", link: "#blog" },
];

const Hero = () => {
  // State to control mobile menu
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex mx-auto flex-wrap px-4 py-8 lg:px-8 lg:py-12">
        {/* Hero Text */}
        <div className="flex mx-auto py-5 px-5 lg:w-1/2">
          <div className="flex flex-col gap-5 mx-auto">
            <h1 className="w-[27rem] text-4xl font-sans font-bold text-left lg:w-[35rem] lg:text-6xl lg:leading-[5rem]">
              Navigating the digital landscape for success
            </h1>

                        {/* Subtext and CTA Button */}
                <div className="flex flex-wrap w-full lg:w-[29rem]">
                <div className="w-full">
                    <p className="text-wrap font-medium text-[16px] lg:text-lg">
                    Our digital marketing agency helps businesses grow and succeed
                    online through a range of services including SEO, PPC, social
                    media marketing, and content creation.
                    </p>
                </div>
                <div className="flex py-8 justify-center cursor-pointer">
                    <div className="flex bg-brand-secondary py-5 px-16 rounded-xl">
                    <p className="font-sans text-white font-light text-xl">
                        Book a consultation
                    </p>
                    </div>
                </div>
                </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-[40rem] h-[40rem]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
