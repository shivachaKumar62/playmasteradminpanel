import React from "react";
import BiggestBtn from "../components/customcomponent/BiggestBtn";
import { FaCircleCheck } from "react-icons/fa6";
const Offer = () => {
  return (
    <div className="container">
      <div className="sm:grid sm:grid-cols-2 max-sm:grid max-sm:grid-cols-1 gap-6 sm:py-[96px] max-sm:pb-[30px] max-sm:pt-[30px]">
        <div>
          <BiggestBtn text="Biggest Offers & Rewards" images="Vector" />
          <div className="pt-[24px]  pl-8">
            <div className="flex flex-col items-center max-sm:pr-2 ">
              <div className="flex  gap-4 pb-[16px] ">
                <span>
                  <FaCircleCheck className="text-blue-500 text-2xl" />
                </span>
                <span className="leading-6 font-manrope font-normal text-[#373737] text-lg ">
                  Kickstart your journey with a generous welcome reward of Rs.
                  500 bonus.
                </span>
              </div>
              <div className="flex  gap-4 pb-[16px] ">
                <span>
                  <FaCircleCheck className="text-blue-500 text-2xl" />
                </span>
                <span className="leading-6  font-manrope font-normal text-[#373737] text-lg">
                  Unlock endless earning opportunities by referring your friends
                  to join the excitement.
                </span>
              </div>
              <div className="flex  gap-4 pb-[16px]">
                <span>
                  <FaCircleCheck className="text-blue-500 text-2xl" />
                </span>
                <span className="leading-6  font-manrope font-normal text-[#373737] text-lg">
                  Compete for cash prizes and exciting rewards in thrilling
                  Leaderboard Contests.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <BiggestBtn text="Biggest Offers & Rewards" images="Vecto" />
            <div className="pt-[24px] pl-8">
              <div className="flex flex-col items-center max-sm:pr-2">
                <div className="flex  gap-4 pb-[16px]">
                  <span>
                    <FaCircleCheck className="text-blue-500 text-2xl" />
                  </span>
                  <span className="leading-6 font-manrope font-normal text-[#373737] text-lg">
                    Explore diverse gaming beyond PlayMaster 11, all in one
                    convenient hub.
                  </span>
                </div>
                <div className="flex  gap-4 pb-[16px]">
                  <span>
                    <FaCircleCheck className="text-blue-500 text-2xl" />
                  </span>
                  <span className="leading-6  font-manrope font-normal text-[#373737] text-lg">
                    Compete in thrilling free cash tournaments for a chance to
                    win exciting prizes.
                  </span>
                </div>
                <div className="flex  gap-4 pb-[16px]">
                  <span>
                    <FaCircleCheck className="text-blue-500 text-2xl" />
                  </span>
                  <span className="leading-6  font-manrope font-normal text-[#373737] text-lg">
                    Enjoy practice games, free games, leagues, and more to level
                    up your gaming experience!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
