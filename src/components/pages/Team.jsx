import React from "react";
import team1 from "../../assets/Images/team1.svg";
import team2 from "../../assets/Images/team2.svg";
import team3 from "../../assets/Images/team3.svg";
import team4 from "../../assets/Images/team4.svg";
import linkedin from "../../assets/Icon/linkedin.svg";

const Team = () => {
  return (
    <>
      <div className="flex flex-col mx-auto justify-center items-center">
        <div className="flex flex-col mx-auto py-5 text-center items-center gap-5">
          <h1 className="font-sans font-bold text-3xl bg-brand-primary px-1 rounded-md">
            Team
          </h1>
          <p className="font-sans font-medium">
            Meet the skilled and experienced team behind our suuccessful digital
            marketing strategies
          </p>
        </div>

        <div className="flex flex-col mx-auto justify-center items-center gap-5">
          <div className="flex flex-col w-[390px] h-[295px] bg-brand-light border border-black border-b-4 rounded-[50px] justify-center items-center">
            <div className="flex mx-auto items-center gap-5 justify-center">
              <img src={team1} alt="team images john smith" className="w-28" />

              <div className="flex flex-col w-[162px]">
                <div className="flex justify-end pb-6">
                  <img
                    src={linkedin}
                    alt="LinkedIn Logo"
                    className="items-start"
                  />
                </div>

                <div className="text-left">
                  <h3 className="font-sans font-bold">John Smith</h3>
                  <p className="font-sans font-medium">CEO and Founder</p>
                </div>
              </div>
            </div>

            <div className="flex w-[290px] h-[1px] mx-auto justify-center items-center bg-black my-2"></div>

            <div className="flex mx-auto justify-center items-center text-left py-2">
              <p className="font-sans font-medium wrap px-12">
                10+ years of experience in digtal marketing. Expertises in SEO,
                PC, and content strategy
              </p>
            </div>
          </div>

          {/* team 2 */}
          <div className="flex flex-col w-[390px] h-[295px] bg-brand-light border border-black border-b-4 rounded-[50px] justify-center items-center">
            <div className="flex mx-auto items-center gap-5 justify-center">
              <img src={team2} alt="team images john smith" className="w-28" />
              <div className="flex flex-col w-[162px]">
                <div className="flex justify-end pb-6">
                  <img
                    src={linkedin}
                    alt="LinkedIn Logo"
                    className="items-start"
                  />
                </div>

                <div className="text-left">
                  <h3 className="font-sans font-bold">Jane Doe</h3>
                  <p className="font-sans font-medium">
                    Director of Operations
                  </p>
                </div>
              </div>
            </div>

            {/* seperator */}
            <div className="flex w-[290px] h-[1px] mx-auto justify-center items-center bg-black my-2"></div>

            <div className="flex mx-auto justify-center items-center text-left py-2">
              <p className="font-sans font-medium wrap px-12">
                7+ years of experience in project management and team
                leadership. Strong orgainsational and communication skills
              </p>
            </div>
          </div>

          {/* team 3 */}
          <div className="flex flex-col w-[390px] h-[295px] bg-brand-light border border-black border-b-4 rounded-[50px] justify-center items-center">
            <div className="flex mx-auto items-center gap-5 justify-center">
              <img src={team3} alt="team images john smith" className="w-28" />
              <div className="flex flex-col w-[162px]">
                <div className="flex justify-end pb-6">
                  <img
                    src={linkedin}
                    alt="LinkedIn Logo"
                    className="items-start"
                  />
                </div>

                <div className="text-left">
                  <h3 className="font-sans font-bold">Micheal Brown</h3>
                  <p className="font-sans font-medium w-[172px]">
                    Senior SEO Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* seperator */}
            <div className="flex w-[290px] h-[1px] mx-auto justify-center items-center bg-black my-2"></div>

            <div className="flex mx-auto justify-center items-center text-left py-2">
              <p className="font-sans font-medium wrap px-12">
                5+ years of experience in content creation. Proficent in keyword
                search and on-page optimizatioN
              </p>
            </div>
          </div>

          {/* team 4 */}
          <div className="flex flex-col w-[390px] h-[295px] bg-brand-light border border-black border-b-4 rounded-[50px] justify-center items-center">
            <div className="flex mx-auto items-center gap-5 justify-center">
              <img src={team4} alt="team images john smith" className="w-28" />
              <div className="flex flex-col w-[162px]">
                <div className="flex justify-end pb-6">
                  <img
                    src={linkedin}
                    alt="LinkedIn Logo"
                    className="items-start"
                  />
                </div>

                <div className="text-left">
                  <h3 className="font-sans font-bold">Emily Johnson</h3>
                  <p className="font-sans font-medium">PPC Manager</p>
                </div>
              </div>
            </div>

            {/* seperator */}
            <div className="flex w-[290px] h-[1px] mx-auto justify-center items-center bg-black my-2"></div>

            <div className="flex mx-auto justify-center items-center text-left py-2">
              <p className="font-sans font-medium wrap px-12">
                3+ years of experience in paid search advertising. Skilled in
                campaign management and performace analysis
              </p>
            </div>
          </div>

          <div className="flex bg-brand-secondary py-5 px-28 rounded-xl items-center  mx-auto my-5">
            <p className="font-sans font-light text-white text-xl">
              See all team
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
