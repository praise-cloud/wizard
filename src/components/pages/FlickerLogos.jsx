import React from "react";
import Amazon from "../../assets/Images/amazon.svg";
import Dribble from "../../assets/Images/dibble.svg";
import Hubspot from "../../assets/Images/hubspot.svg";
import Netflix from "../../assets/Images/netflix.svg";
import Notion from "../../assets/Images/notion.svg";
import Zoom from "../../assets/Images/zoom.svg";

const FlickerLogos = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 mx-auto px-5 my-6">
        <div className="flex justify-center w-1/3 sm:w-1/4 lg:w-1/6">
          <img src={Amazon} alt="Amazon logo" className="h-10 w-auto" />
        </div>
        <div className="flex justify-center w-1/3 sm:w-1/4 lg:w-1/6">
          <img src={Dribble} alt="Dribble logo" className="h-10 w-auto" />
        </div>
        <div className="flex justify-center w-1/3 sm:w-1/4 lg:w-1/6">
          <img src={Hubspot} alt="Hubspot logo" className="h-10 w-auto" />
        </div>
        <div className="flex justify-center w-1/3 sm:w-1/4 lg:w-1/6">
          <img src={Netflix} alt="Netflix logo" className="h-10 w-auto" />
        </div>
        <div className="flex justify-center w-1/3 sm:w-1/4 lg:w-1/6">
          <img src={Notion} alt="Notion logo" className="h-10 w-auto" />
        </div>
        <div className="flex justify-center w-1/3 sm:w-1/4 lg:w-1/6">
          <img src={Zoom} alt="Zoom logo" className="h-10 w-auto" />
        </div>
      </div>
    </>
  );
};

export default FlickerLogos;
