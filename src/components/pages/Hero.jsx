import HeroImage from "../../assets/Images/hero.svg";
import NavigationBar from "../NavigationBar";

const Hero = () => {
  return (
    <>
      <NavigationBar />

      <div className="flex flex-col lg:flex-row mx-auto justify-center items-center py-8 lg:py-12">
        <div className="flex flex-col mx-auto justify-center py-5 px-5 lg:w-full">
          <div className="flex flex-col gap-5 mx-auto">
            <h1 className="text-4xl font-sans font-bold lg:text-left lg:w-[35rem] lg:text-6xl lg:leading-[5rem]">
              Navigating the digital landscape for success
            </h1>

            <div className="flex flex-wrap w-full lg:w-[29rem]">
              <div className="w-full">
                <p className="text-wrap font-medium text-[16px] lg:text-left lg:text-lg">
                  Our digital marketing agency helps businesses grow and succeed
                  online through a range of services including SEO, PPC, social
                  media marketing, and content creation.
                </p>
              </div>
              <div className="flex py-8 justify-center lg:justify-start cursor-pointer">
                <div className="flex bg-brand-secondary py-5 px-16 rounded-xl">
                  <p className="font-sans text-white font-light text-xl">
                    Book a consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center lg:w-1/2">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-[20rem] h-auto lg:w-[40rem] lg:h-[40rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
