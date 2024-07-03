import React from 'react'

const StickyButton = ({ isSticky }) => {
  return (
    <div>
      <div
        className={` bg-[#071013] bg-opacity-20 backdrop-blur-[32px] ${
          isSticky ? "sticky-header" : "sticky_header_two"
        } w-full`}
      >
        <div className="container">
          <div className="flex justify-center items-center  h-[96px]">
            <div className="flex  items-center gap-x-4 mr-[32px]">
              <div className="flex justify-center items-center gap-2 bg-[#071013] h-[56px] w-[184px] rounded-lg">
                <img
                  src={process.env.PUBLIC_URL + "./images/devicon_android.png"}
                />
                <div className="flex flex-col ">
                  <span className=" text-xs font-manrope font-normal text-white">
                    Download Our
                  </span>
                  <span className=" font-semibold font-manrope text-white text-base">
                    Android App{" "}
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 bg-[#071013] h-[56px] w-[184px] px-6  rounded-lg">
                <img
                  src={process.env.PUBLIC_URL + "./images/ic_round-apple.png"}
                />
                <div className="flex flex-col ">
                  <span className=" text-xs font-manrope font-normal text-white">
                    Download on the
                  </span>
                  <span className=" font-semibold font-manrope text-white text-base">
                    App Store
                  </span>
                </div>
              </div>
            </div>
            <div className="flex bg-white w-[286px]  items-center mr-[16px] rounded-lg h-[58px]">
              <span className="text-[#071013] font-semibold font-manrope text-base px-4  ">
                +91
              </span>
              <input
                type="number"
                placeholder="Enter Your Number"
                className="focus:outline-none w-full font-medium font-manrope text-base text-[#989898]"
              />
            </div>
            <button className="bg-blue-500 rounded-lg w-[183px] h-[58px] text-white font-semibold font-manrope text-base">
              GET APP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyButton
