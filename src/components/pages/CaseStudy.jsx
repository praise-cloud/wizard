import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const CaseStudy = () => {
  return (
    <>
      <div className="flex mx-auto justify-center items-center">
        <div className="flex flex-col mx-auto pb-5">
          <div className="flex bg-brand-primary mx-auto justify-center items-center">
            <h1 className="font-sans font-bold text-3xl px-2 rounded-md">
              Case Studies
            </h1>
          </div>

          <div className="flex mx-auto justify-center py-5">
            <p className="font-sans font-medium text-center">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies.
            </p>
          </div>

          <div className="flex mx-auto justify-center items-center">
            <div className="flex overflow-hidden mx-auto justify-center ga">
              <div className="flex bg-brand-secondary w-[350px] h-[252px] rounded-[40px]">
                <div className="flex flex-col mx-auto justify-center items-start">
                  <div className="px-12 justify-center">
                    <p className="font-sans text-white font-light">
                      For a local resturant, we implemented a targeted PPC
                      campaign that resulted in a 50% increase in website
                      traffic and a 25% increase in sales.
                    </p>
                  </div>
                  <div className="flex pt-5 items-center gap-2 px-12">
                    <p className="text-brand-primary font-sans font-light text-xl">
                      Learn more
                    </p>
                    <HiMiniArrowUpRight className="text-brand-primary text-4xl" />
                  </div>
                </div>
              </div>

              {/* <div className="flex bg-brand-secondary w-[350px] h-[252px] rounded-[40px]">

                            <div className="flex flex-col mx-auto justify-center items-start">
                                <div className="px-12 justify-center">
                                    <p className="font-sans text-white font-light">For a local resturant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25%  increase in sales.
                                    </p>
                                </div>
                                <div className="flex pt-5 items-center gap-2 px-12">
                                    <p className="text-brand-primary font-sans font-light text-xl">Learn more
                                    </p>
                                    <HiMiniArrowUpRight className="text-brand-primary text-4xl"/>
                                </div>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
