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
      <div className="flex flex-wrap mx-auto px-5 justify-center items-center my-6 gap-5">
        <div className="flex">
          <img src={Amazon} alt="Amazon logo" />
        </div>
        <div className="flex">
          <img src={Dribble} alt="Dribble logo" />
        </div>
        <div className="flex">
          <img src={Hubspot} alt="Hubspot logo" />
        </div>
        <div className="flex">
          <img src={Netflix} alt="Netflix logo" />
        </div>
        <div className="flex">
          <img src={Notion} alt="Notion logo" />
        </div>
        <div className="flex">
          <img src={Zoom} alt="Zoom's logo" />
        </div>
      </div>
    </>
  );
};

export default FlickerLogos;
