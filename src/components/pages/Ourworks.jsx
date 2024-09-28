import React from "react";
import plusIcon from "../../assets/Icon/plusIcon.svg";

const Ourworks = () => {
  return (
    <>
      <div className="flex flex-col mx-auto justify-center items-center py-5">
        <div className="flex flex-col mx-auto justify-center items-center text-center">
          <div className="text-center">
            <h1 className="font-sans font-bold text-3xl px-2 py-1 rounded-md bg-brand-primary">
              Our Working
            </h1>
            <h1 className="font-sans font-bold text-3xl rounded-md bg-brand-primary">
              Process
            </h1>
          </div>
          <div className="flex">
            <p className="items-center font-sans font-medium py-5 px-5">
              Step-by-Step Giuide to Achieveing Your Business Goals
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mx-auto gap-5">
          <div className="flex justify-between gap-5 items-center border border-black border-b-4 bg-brand-light rounded-full w-[392px] h-[98px] px-5">
            <div className="flex items-center gap-5">
              <h1 className="font-sans font-bold text-3xl">01</h1>
              <p className="font-sans font-bold ">Consultation</p>
            </div>

            <div className="flex">
              <img src={plusIcon} alt="Plus icon" />
            </div>
          </div>

          {/* card 2 */}
          <div className="flex justify-between gap-5 items-center border border-black border-b-4 bg-brand-light rounded-full w-[392px] h-[98px] px-5">
            <div className="flex items-center gap-5">
              <h1 className="font-sans font-bold text-3xl">02</h1>
              <p className="font-sans font-bold ">Reseracing and Strategy</p>
            </div>

            <div className="flex">
              <img src={plusIcon} alt="Plus icon" />
            </div>
          </div>

          {/* card 3 */}
          <div className="flex justify-between gap-5 items-center border border-black border-b-4 bg-brand-light rounded-full w-[392px] h-[98px] px-5">
            <div className="flex items-center gap-5">
              <h1 className="font-sans font-bold text-3xl">03</h1>
              <p className="font-sans font-bold ">Implementation</p>
            </div>

            <div className="flex">
              <img src={plusIcon} alt="Plus icon" />
            </div>
          </div>

          {/* card 4 */}
          <div className="flex justify-between gap-5 items-center border border-black border-b-4 bg-brand-light rounded-full w-[392px] h-[98px] px-5">
            <div className="flex items-center gap-5">
              <h1 className="font-sans font-bold text-3xl">04</h1>
              <p className="font-sans font-bold w-[120px]">
                Monitoring and Optimizing
              </p>
            </div>

            <div className="flex">
              <img src={plusIcon} alt="Plus icon" />
            </div>
          </div>

          {/* card 5 */}
          <div className="flex justify-between gap-5 items-center border border-black border-b-4 bg-brand-light rounded-full w-[392px] h-[98px] px-5">
            <div className="flex items-center gap-5">
              <h1 className="font-sans font-bold text-3xl">05</h1>
              <p className="font-sans font-bold w-[120px]">
                Reporting and Communication
              </p>
            </div>

            <div className="flex">
              <img src={plusIcon} alt="Plus icon" />
            </div>
          </div>

          {/* card 6 */}
          <div className="flex justify-between gap-5 items-center border border-black border-b-4 bg-brand-light rounded-full w-[392px] h-[98px] px-5">
            <div className="flex items-center gap-5">
              <h1 className="font-sans font-bold text-3xl">06</h1>
              <p className="font-sans font-bold ">Continual Improvement</p>
            </div>

            <div className="flex">
              <img src={plusIcon} alt="Plus icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ourworks;
