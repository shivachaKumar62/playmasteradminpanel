import React from "react";
import "./semifooter.css";
const SemiFooter = () => {
  return (
    // <div className="semifooter_bg flex justify-between items-center h-[96px] bg-[#D9D9D9] blur-2xl bg-white opacity-100 bg-white opacity-20">
    <div className="  semifooter_bg flex justify-between items-center h-[96px] bg-white bg-opacity-20 backdrop-blur-[35px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 items-center">
            <div
              className="w-[32px] h-[32px] rounded-md z-0 flex items-center justify-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.20)",
                boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/customer.png"}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="Exciting Offers"
              />
            </div>
            <span className="font-manrope font-medium text-lg text-[#fff]">
              100% Legal & Secure
            </span>
          </div>
          <div className="flex gap-x-3 items-center">
            <div
              className="w-[32px] h-[32px] rounded-md z-0 flex items-center justify-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.20)",
                boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/caller.png"}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="Exciting Offers"
              />
            </div>
            <span className="font-manrope font-medium text-lg text-[#fff]">
              24*7 Customer Support
            </span>
          </div>
          <div className="flex gap-x-3 items-center">
            <div
              className="w-[32px] h-[32px] rounded-md z-0 flex items-center justify-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.20)",
                boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/user.png"}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="Exciting Offers"
              />
            </div>
            <span className="font-manrope font-medium text-lg text-[#fff]">
              User Friendly
            </span>
          </div>
          <div className="flex gap-x-3 items-center">
            <div
              className="w-[32px] h-[32px] rounded-md z-0 flex items-center justify-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.20)",
                boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/rupees.png"}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="Exciting Offers"
              />
            </div>
            <span className="font-manrope font-medium text-lg text-[#fff]">
              Instant Withdrawals
            </span>
          </div>
          <div className="flex gap-x-3 items-center">
            <div
              className="w-[32px] h-[32px] rounded-md z-0 flex items-center justify-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.20)",
                boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/exciting.png"}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="Exciting Offers"
              />
            </div>
            <span className="font-manrope font-medium text-lg text-[#fff]">
              Exciting Offers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiFooter;
