import React from "react";
import useSmallScreen from "./useSmallScreen";

const BiggestBtn = ({ text, images }) => {
  const isSmallScreen = useSmallScreen()
  return (
    <div>
      <div className="flex max-sm:px-2 sm:px-0 items-center relative">
        {isSmallScreen ? (
          <div className="relative left-3">
            <img src={process.env.PUBLIC_URL + "./images/Ellipse 18.png"} />
          </div>
        ) : (
          <img src={process.env.PUBLIC_URL + "./images/Ellipse 18.png"} />
        )}
        <div
          className="max-sm:h-[60px] max-sm:w-[60px] sm:h-[80px] sm:w-[80px]  rounded-full max-sm:left-8 sm:left-3   absolute bg-blue-500 "
          style={{ zIndex: "1" }}
        ></div>
        <div
          className="sm:w-[95%]  max-sm:w-[98%]  ml-1 sm:h-[70px] max-sm:h-[50px] bg-blue-500 flex items-center justify-between pr-[24px] max-sm:mr-2"
          style={{ borderRadius: "0  15px 15px  0", zIndex: "2" }}
        >
          <span className="font-manrope font-semibold max-sm:text-base  sm:text-[32px] text-white">
            {text}
          </span>
          <img
            src={process.env.PUBLIC_URL + `./images/${images}.png`}
            className="object-contain max-sm:h-[30px] "
          />
        </div>
      </div>
    </div>
  );
};

export default BiggestBtn;
