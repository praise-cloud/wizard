import React from "react";
import SearchEngine from "../../assets/Images/SearchEngine.svg";
import PayPer from "../../assets/Images/payPer.svg";
import SocialMedia from "../../assets/Images/socialMedia.svg";
import EmailMarketing from "../../assets/Images/emailMarket.svg";
import ContentCreation from "../../assets/Images/contentCreation.svg";
import AnalyticsImage from "../../assets/Images/analytics.svg";
import ArrowGreen from "../../assets/Icon/arrowGreen.svg";
import ArrowWhite from "../../assets/Icon/arrowWhite.svg";

const Services = () => {
  return (
    <>
      <div className="flex py-8">
        <div className="flex flex-wrap mx-auto justify-center items-center">
          <div className="flex flex-wrap">
            <div className="flex mx-auto bg-brand-primary px-2 py-1 rounded-md">
              <h1 className="font-sans font-bold text-3xl">Services</h1>
            </div>
            <div className="flex flex-wrap mx-auto justify-center px-5 py-6">
              <p className="font-sans font-medium text-center">
                At our digitak marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 mx-auto justify-center items-center py-5">
            <div className="flex flex-col border border-black border-b-4 rounded-[50px] w-[390px] h-[322px] bg-brand-light">
              <div className="flex flex-col pt-14 px-16">
                <h3 className="font-sans font-bold text-2xl bg-brand-primary px-1 rounded-md w-[11.5rem] ">
                  Search engine
                </h3>
                <h3 className="font-sans font-bold text-2xl bg-brand-primary px-1 rounded-md w-[10rem]">
                  optimization
                </h3>
              </div>
              <div className="flex mx-auto gap-20 py-5">
                <div className="flex items-end">
                  <img src={ArrowGreen} alt="Arrow" />
                </div>
                <div className="flex items-end">
                  <img src={SearchEngine} alt="Search Engine Image" />
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col border border-black border-b-4 rounded-[50px] w-[390px] h-[322px] bg-brand-primary">
              <div className="flex flex-col pt-14 px-16">
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[11.5rem] ">
                  Pay-per-click
                </h3>
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[9rem]">
                  adversiting
                </h3>
              </div>
              <div className="flex mx-auto gap-20 py-5">
                <div className="flex items-end">
                  <img src={ArrowGreen} alt="Arrow" />
                </div>
                <div className="flex items-end">
                  <img src={PayPer} alt="Search Engine Image" />
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col border border-black border-b-4 rounded-[50px] w-[390px] h-[322px] bg-brand-secondary">
              <div className="flex flex-col pt-14 px-16">
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[10rem] ">
                  Social Media
                </h3>
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[8rem]">
                  Marketing
                </h3>
              </div>
              <div className="flex mx-auto gap-20 py-5">
                <div className="flex items-end">
                  <img src={ArrowWhite} alt="" />
                </div>
                <div className="flex items-end">
                  <img src={SocialMedia} alt="Social Media Image" />
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="flex flex-col border border-black border-b-4 rounded-[50px] w-[390px] h-[322px] bg-brand-light">
              <div className="flex flex-col pt-14 px-16">
                <h3 className="font-sans font-bold text-2xl bg-brand-primary px-1 rounded-md w-[4.5rem] ">
                  Email
                </h3>
                <h3 className="font-sans font-bold text-2xl bg-brand-primary px-1 rounded-md w-[8rem]">
                  Marketing
                </h3>
              </div>
              <div className="flex mx-auto gap-20 py-5">
                <div className="flex items-end">
                  <img src={ArrowGreen} alt="" />
                </div>
                <div className="flex items-end">
                  <img
                    src={EmailMarketing}
                    alt="Email Marketing Image"
                    className="transform scale-x-[-1]"
                  />
                </div>
              </div>
            </div>

            {/* card 5 */}
            <div className="flex flex-col border border-black border-b-4 rounded-[50px] w-[390px] h-[322px] bg-brand-primary">
              <div className="flex flex-col pt-14 px-16">
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[7rem] ">
                  Content
                </h3>
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[7rem]">
                  Creation
                </h3>
              </div>
              <div className="flex mx-auto gap-20 py-5">
                <div className="flex items-end">
                  <img src={ArrowGreen} alt="" />
                </div>
                <div className="flex items-end">
                  <img src={ContentCreation} alt="Search Engine Image" />
                </div>
              </div>
            </div>

            {/* card 6 */}
            <div className="flex flex-col border border-black border-b-4 rounded-[50px] w-[390px] h-[322px] bg-brand-secondary">
              <div className="flex flex-col pt-14 px-16">
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[10.5rem] ">
                  Analytics and
                </h3>
                <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[7rem]">
                  Tracking
                </h3>
              </div>
              <div className="flex mx-auto gap-20 py-5">
                <div className="flex items-end">
                  <img src={ArrowWhite} alt="" />
                </div>
                <div className="flex items-end">
                  <img src={AnalyticsImage} alt="Search Engine Image" />
                </div>
              </div>
            </div>
          </div>

          {/* Let's make card */}
          <div className="flex flex-col rounded-[50px] w-[390px] h-[370px] bg-brand-light my-9  items-center">
            <div className="flex flex-col pt-14 px-12">
              <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[15] ">
                Let's make things happen
              </h3>
              {/* <h3 className="font-sans font-bold text-2xl bg-brand-light px-1 rounded-md w-[7rem]">Tracking</h3> */}
            </div>
            <div className="flex mx-auto py-5">
              <p className="flex mx-auto px-12 font-medium">
                Contnact us today to llearn more about how our digital marketing
                services can help your business grow and succeed online
              </p>
            </div>
            <div className="flex mx-auto py-5 bg-brand-secondary rounded-xl cursor-pointer">
              <p className="flex mx-auto px-16 font-light text-white text-xl">
                Get your proposal
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
