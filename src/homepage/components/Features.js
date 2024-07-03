import React from "react";
import TitleBar from "./customcomponent/TitleBar";

const Features = () => {
  return (
    <div className="container py-[96px] max-sm:py-[30px]">
      <div className="grid grid-cols-12 gap-4">
        <div className="max-sm:col-span-12 sm:col-span-4 ">
          <div className="max-sm:mt-0 mt-4 mb-6 max-sm:px-2 sm:px-0 flex justify-center items-center">
            <img
              src={process.env.PUBLIC_URL + "/images/Group 0.png"}
              alt="Group 0"
            />
          </div>
          <TitleBar
            data="PlayMaster 11"
            colors="#fff"
            width="324px"
            height="64px"
          />
        </div>
        <div className="max-sm:col-span-12 sm:col-span-8">
          <div className="flex justify-start flex-col">
            <h2 className="font-semibold max-sm:px-2 sm:px-0 font-manrope text-[32px] text-[#071013]">
              Game Features
            </h2>
            <p className="font-medium font-manrope max-sm:px-2 sm:px-0  text-lg text-[#373737]">
              PlayMaster 11 files in its seamless integration of real-time
              cricket action with strategic gameplay, providing cricket
              enthusiasts with an immersive and engaging experience like never
              before.
            </p>
            <div className="max-sm:grid max-sm:grid-cols-1 max-sm:px-2 sm:0 sm:grid sm:grid-cols-2 sm:gap-4 gap pt-10">
              <div className="flex justify-start  ">
                <div className="w-[30%] ">
                  <img
                    src={process.env.PUBLIC_URL + "./images/Group 13.png"}
                    className="  object-cover"
                  />
                </div>
                <div className="flex flex-col  gap-4 pb-6">
                  <p className="pt-1 font-semibold font-manrope text-xl text-[#071013]">
                    Budget-friendly Leagues
                  </p>
                  <p className="font-normal leading-6 font-manrope  text-base text-[#373737]">
                    PlayMaster 11 opens up thrilling fantasy cricket gaming to
                    all, with contests starting at just Rs 1.
                  </p>
                </div>
              </div>
              <div className="flex justify-start   ">
                <div className="w-[30%] ">
                  <img
                    src={process.env.PUBLIC_URL + "./images/Group 13.png"}
                    className="  object-cover"
                  />
                </div>
                <div className="flex flex-col  gap-4 pb-6">
                  <p className="pt-1  font-semibold font-manrope text-xl text-[#071013]">
                    Live Fantasy
                  </p>
                  <p className="font-normal leading-6 font-manrope  text-base text-[#373737]">
                    Get in the game with PlayMaster 11 - create a 5-over block
                    and join the live cricket excitement!
                  </p>
                </div>
              </div>
              <div className="flex justify-start  ">
                <div className="w-[30%] ">
                  <img
                    src={process.env.PUBLIC_URL + "./images/Group 13.png"}
                    className="  object-cover"
                  />
                </div>
                <div className="flex flex-col  gap-4 pb-6">
                  <p className="pt-1  font-semibold font-manrope text-xl text-[#071013]">
                    Refer & Earn
                  </p>
                  <p className="font-normal leading-6 font-manrope  text-base text-[#373737]">
                    Invite friends to PlayMaster 11 with your exclusive code and
                    earn Rs.100 with each successful referral.
                  </p>
                </div>
              </div>
              <div className="flex justify-start  ">
                <div className="w-[30%] ">
                  <img
                    src={process.env.PUBLIC_URL + "./images/Group 13.png"}
                    className="  object-cover"
                  />
                </div>
                <div className="flex flex-col  gap-4 pb-6 max-sm:pb-0">
                  <p className="pt-1  font-semibold font-manrope text-xl text-[#071013]">
                    Instant Withdrawals
                  </p>
                  <p className="font-normal leading-6 font-manrope text-wrap  text-base text-[#373737]">
                    {/* Get in the game with PlayMaster 11 - create a 5-over block
                    and join the live cricket excitement! */}
                    Experience the convenience of instants cash withdrawals on
                    PlayMaster 11 followings a quick.

                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
