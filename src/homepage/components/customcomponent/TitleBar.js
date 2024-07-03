import React from "react";

const TitleBar = ({ data, colors,width }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`${
          data === "Terms Conditions"
            ? "max-sm:w-[300px] sm:w-[400px]"
            : "max-sm:w-[224px] sm:w-[340px]"
        }   max-sm:h-[45px] sm:h-[63px]  bg-blue-500 relative border-none border-[0px]`}
        style={{ borderRadius: "100px 100px 100px 100px " }}
      >
        <div className="max-sm:w-[40px] sm:w-[58px] max-sm:h-[40px] sm:h-[58px] rounded-full bg-[#8ACB88] absolute max-sm:left-[5px] sm:left-[8px] max-sm:top-[2px] sm:top-[3px] z-10"></div>

        <div
          className={`w-[70px] max-sm:w-[50px]  max-sm:h-[50px] h-[70px]   rounded-full bg-[${colors}] absolute top-[-3px] left-[-1px] z-0`}
        ></div>
        <span className="flex text-white font-semibold  font-manrope m-auto pl-6 max-sm:text-lg sm:text-[32px] justify-center items-center pt-2 text-center">
          {data}
        </span>
        <div className="w-[40px] max-sm:w-[30px] max-sm:h-[30px] h-[40px] rounded-full bg-[#9AD6FE] absolute right-[-5px] max-sm:top-[27px]  bottom-[-18px] "></div>
      </div>
    </div>
  );
};

export default TitleBar;
