import React from "react";
import { SlMenu } from "react-icons/sl";
import logo from "../assets/Icon/logo.svg";
import navLinks from "../constant/Nav_links.js"

const NavigationBar = () => {
  return (
    <>
      <div className="w-full h-9 flex mx-auto justify-between py-10 items-center px-5">
        <div className="flex gap-2">
          <img
            src={logo}
            alt="Wizardz Logo"
            className="w-5 text-brand-secondary"
          />

          <h1 className="font-sans font-bold text-xl text-brand-secondary">
            WizardZ
          </h1>
        </div>

        <div className="flex items-center">
          <SlMenu className="text-xl" />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
