import React from "react";
import TitleBar from "./customcomponent/TitleBar";

const Play = () => {
  return (
    <div className="bg-[#F9F9F9] py-[96px] max-sm:py-[48px] ">
      <div className=" pb-[46px]">
        <TitleBar
          data="How to Play"
          colors="#F9F9F9"
          width="336px"
          height="76px"
        />
      </div>
      <div className="container">
        <p className="font-manrope font-semibold text-[#071013] text-[32px] text-center">
          It's easy to start playing on Playmaster 11
        </p>
        <div className="w-[70%] max-sm:w-[90%] max-sm:mx-auto m-auto pt-8 ">
          <p className="text-center font-manrope font-medium text-lg text-[#373737]} ">
            Get started on PlayMaster 11 effortlessly with its intuitive
            interface and user-friendly features, making it easy for anyone to
            jump into the excitment of fantasy sports.
          </p>
        </div>
        {/* <div className="flex justify-center items-center"> */}
        <div className="sm:grid  sm:grid-cols-3 max-sm:grid max-sm:grid-cols-1 mt-10  ">
          <div className="flex flex-col justify-center max-sm:mb-[40px]  items-center">
            <img src={process.env.PUBLIC_URL + "./images/Group 4.png"} />
            <p className="font-medium max-sm:m-auto font-manrope text-center max-sm:px-2  text-base text-[#071013] pt-10 ">
              Sign up effortlessly and dive into the action within minutes, all
              at no cost.
            </p>
          </div>

          <div className="flex sm:justify-between max-sm:justify-center max-sm:flex-col items-center">
            <img
              src={process.env.PUBLIC_URL + "./images/Group 10.png"}
              className="max-sm:transform max-sm:rotate-90"
            />

            <div className="flex flex-col justify-center max-sm:mt-[40px] max-sm:mb-[40px]   items-center ">
              <img src={process.env.PUBLIC_URL + "./images/Group 5.png"} />
              <p className="font-medium max-sm:m-auto font-manrope text-center max-sm:px-2  text-base text-[#071013] pt-10 ">
                Build your dream team by strategically choosing players within a
                set virtual credit limit.
              </p>
            </div>
          </div>
          <div className="flex sm:justify-between  max-sm:justify-center max-sm:flex-col items-center">
            <img
              src={process.env.PUBLIC_URL + "./images/Group 10.png"}
              className="max-sm:transform max-sm:rotate-90"
            />
            <div className="flex flex-col max-sm:mt-[40px] justify-center  items-center">
              <img src={process.env.PUBLIC_URL + "./images/Group 6.png"} />
              <p className="font-medium max-sm:m-auto font-manrope text-center max-sm:px-2  text-base text-[#071013] pt-10 ">
                Your fantasy sports journey today at absolutely no cost by
                signing up in few minutes.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Play;
