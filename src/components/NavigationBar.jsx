import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import logo from "../assets/Icon/logo.svg";
import navLinks from "../constant/Nav_links";

// Navigation Links

const NavigationBar = () => {
  // State to control mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between mx-auto py-5 lg:px-[17rem] items-center px-5">
        <div className="flex gap-2 items-center">
          <img
            src={logo}
            alt="Wizardz Logo"
            className="lg:w-8 text-brand-secondary w-5"
          />
          <h1 className="font-sans font-bold lg:text-4xl text-brand-secondary text-xl ">
            DigitalGrowthX
          </h1>
        </div>

        {/* Hamburger Menu Icon for small screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <SlMenu className="text-xl" />
          </button>
        </div>

        {/* Desktop Navigation Links for larger screens */}
        <div className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="text-bold text-gray-700 hover:text-brand-secondary transition"
            >
              {link.name}
            </a>
          ))}
          <a className="flex justify-center items-center border border-black py-3 px-5 rounded-xl hover:bg-black hover:text-white">
            <a href="#" className="w-full">
                Request a qoute
            </a>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full px-5 py-3">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="font-sans font-bold block text-gray-700 hover:text-brand-secondary transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
