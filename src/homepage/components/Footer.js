import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SemiFooter from './SemiFooter';
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import useSmallScreen from './customcomponent/useSmallScreen';

const Footer = () => {
   const navigate = useNavigate();
  const isSmallScreen = useSmallScreen()
  const handleNavigation = (path, elementId) => {
    navigate(path, { state: { scrollTo: elementId } });
    // setShowNavBars(false);
  };
  return (
    <div className="bg-[#071013]">
      <div className="hidden sm:block">
        <SemiFooter />
      </div>
      <div className="container  ">
        <div className="pt-[69px]">
          <div className="sm:grid sm:grid-cols-4 max-sm:grid max-sm:grid-cols-1">
            <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "./images/White Logo 1.png"}
                />
              </div>
              <div className="max-sm:flex  max-sm:flex-wrap-reverse max-sm:items-center ">
                {isSmallScreen ? (
                  <div className="flex justify-between gap-8 mt-4 items-center">
                    <div>
                      <p className="text-2xl  max-sm:text-lg   pb-[24px]  font-manrope font-semibold text-[#fff]">
                        Follow Us
                      </p>
                      <div className="flex gap-[16px] max-sm:gap-[12px] items-center">
                        <NavLink className="hover:bg-blue-500  bg-white rounded-full max-sm:px-1 max-sm:py-1 px-2 py-2">
                          <FaLinkedinIn className=" text-black max-sm:text-sm text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                        <NavLink className="bg-white hover:bg-blue-500 rounded-full max-sm:px-1 max-sm:py-1 px-2 py-2">
                          <CgFacebook className=" text-black max-sm:text-sm text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                        <NavLink className="bg-white hover:bg-blue-500 rounded-full max-sm:px-1 max-sm:py-1 px-2 py-2">
                          <BsInstagram className="max-sm:text-sm text-black text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                        <NavLink className="bg-white hover:bg-blue-500 rounded-full max-sm:px-1 max-sm:py-1 px-2 py-2">
                          <BsTwitterX className="max-sm:text-sm text-black text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl  max-sm:text-lg   pb-[24px]  font-manrope font-semibold text-[#fff]">
                        Contact Us
                      </p>
                      <span className="text-[#fff] text-base max-sm:block  max-sm:text-sm  font-normal font-manrope">
                        support@PlayMaster11.com
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-2xl max-sm:text-lg  font-manrope font-semibold pt-[24px] max-sm:pt-0 pb-[16px] text-[#fff]">
                        Contact Us
                      </p>
                      <span className="text-[#fff] text-base max-sm:text-sm font-normal font-manrope">
                        support@PlayMaster11.com
                      </span>
                    </div>
                    <div>
                      <p className="text-2xl  max-sm:text-lg  pt-[38px] pb-[24px]  font-manrope font-semibold text-[#fff]">
                        Follow Us
                      </p>
                      <div className="flex gap-[16px] max-sm:gap-[12px] items-center">
                        <NavLink className="hover:bg-blue-500  bg-white rounded-full max-sm px-2 py-2">
                          <FaLinkedinIn className=" text-black max-sm:text-sm text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                        <NavLink className="bg-white hover:bg-blue-500 rounded-full px-2 py-2">
                          <CgFacebook className=" text-black max-sm:text-sm text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                        <NavLink className="bg-white hover:bg-blue-500 rounded-full px-2 py-2">
                          <BsInstagram className="max-sm:text-sm text-black text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                        <NavLink className="bg-white hover:bg-blue-500 rounded-full px-2 py-2">
                          <BsTwitterX className="max-sm:text-sm text-black text-xl hover:text-white hove:text-xl" />
                        </NavLink>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {isSmallScreen ? (
              <div className="flex justify-around  mt-[48px]">
                <div className="flex flex-col">
                  <p className="text-2xl max-sm:pb-[24px] pb-[36px] font-manrope font-semibold text-[#fff]">
                    About
                  </p>
                  <NavLink
                    to="/"
                    className="text-[#fff] hover:text-blue-500  pb-[16px] text-base font-normal font-manrope"
                  >
                    Home
                  </NavLink>
                  <div
                    onClick={() => handleNavigation("/about", "aboutus")}
                    className="text-[#fff] text-base hover:text-blue-500 pb-[16px] font-normal font-manrope"
                  >
                    About us
                  </div>
                  <NavLink className="text-[#fff] text-base pb-[16px] hover:text-blue-500 font-normal font-manrope">
                    Game
                  </NavLink>
                   <div
                    onClick={() =>
                      handleNavigation("/contact-us", "contactSection")
                    }
                    className="text-[#fff] text-base font-normal hover:text-blue-500 pb-[16px] font-manrope"
                  >
                    Contact us
                  </div>

                  <div
                    onClick={() =>
                      handleNavigation("/privacy-policy", "privacySection")
                    }
                    className="text-[#fff] text-base pb-[16px] hover:text-blue-500 font-normal font-manrope"
                  >
                    Privacy Policy
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl max-sm:pb-[24px]  pb-[36px] font-manrope font-semibold text-[#fff]">
                    Legal
                  </p>
                 <div
                    onClick={() =>
                      handleNavigation("/terms-conditions", "termsSection")
                    }
                    className="text-[#fff] hover:text-blue-500 pb-[16px] text-base font-normal font-manrope"
                  >
                    Terms & Conditions
                  </div>
                  <NavLink className="text-[#fff] hover:text-blue-500 pb-[16px] text-base font-normal font-manrope">
                    Fair Play Policuy
                  </NavLink>
                 <div
                    onClick={() =>
                      handleNavigation("/privacy-policy", "privacySection")
                    }
                    className="text-[#fff] hover:text-blue-500 pb-[16px] text-base font-normal font-manrope"
                  >
                    Privacy Policy
                  </div>
                 <div
                    onClick={() =>
                      handleNavigation("/refund-policy", "refundSection")
                    }
                    className="text-[#fff] hover:text-blue-500 pb-[16px] text-base font-normal font-manrope"
                  >
                    Cancellation / Refund
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col">
                  <p className="text-2xl pb-[36px] font-manrope font-semibold text-[#fff]">
                    About
                  </p>
                  <NavLink
                    to="/"
                    className="text-[#fff] text-base pb-[16px] hover:text-blue-500 font-normal font-manrope whitespace-nowrap"
                  >
                    Home
                  </NavLink>
                  <div
                    onClick={() => handleNavigation("/about", "aboutus")}
                    className="text-[#fff] cursor-pointer text-base hover:text-blue-500 pb-[16px] font-normal font-manrope social-link"
                  >
                    About us
                  </div>
                  <NavLink className="text-[#fff] text-base pb-[16px] hover:text-blue-500 font-normal font-manrope">
                    Game
                  </NavLink>
                  <div
                    onClick={() =>
                      handleNavigation("/contact-us", "contactSection")
                    }
                    className="text-[#fff] cursor-pointer text-base font-normal hover:text-blue-500 pb-[16px] font-manrope"
                  >
                    Contact us
                  </div>
                  <div
                    onClick={() =>
                      handleNavigation("/privacy-policy", "privacySection")
                    }
                  
                    className="text-[#fff] cursor-pointer text-base pb-[16px] hover:text-blue-500 font-normal font-manrope"
                  >
                    Privacy Policy
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl  pb-[36px] font-manrope font-semibold text-[#fff]">
                    Legal
                  </p>
                  <div
                    onClick={() =>
                      handleNavigation("/terms-conditions", "termsSection")
                    }
                  
                    className="text-[#fff] cursor-pointer hover:text-blue-500 pb-[16px] text-base font-normal font-manrope"
                  >
                    Terms & Conditions
                  </div>
                  <NavLink className="text-[#fff] hover:text-blue-500 pb-[16px] text-base font-normal font-manrope">
                    Fair Play Policy
                  </NavLink>
                  <div
                    onClick={() =>
                      handleNavigation("/privacy-policy", "privacySection")
                    }
                  
                    className="text-[#fff] cursor-pointer hover:text-blue-500 pb-[16px] text-base font-normal font-manrope"
                  >
                    Privacy Policy
                  </div>
                  <div
                    onClick={() =>
                      handleNavigation("/refund-policy", "refundSection")
                    }
                  
                  
                    className="text-[#fff] cursor-pointer hover:text-blue-500 pb-[16px] text-base font-normal font-manrope"
                  >
                    Cancellation / Refund
                  </div>
                </div>
              </>
            )}

            <div className="flex flex-col items-center   max-sm:pt-[48px]">
              <p className="text-2xl max-sm:text-lg max-sm:pb-[20px] max-sm:pl-4  pb-[36px] font-manrope font-semibold text-[#fff]">
                Payment Partner
              </p>
              <div className="max-sm:flex max-sm:items-center   max-sm:flex-col  ">
                <div className="flex  max-sm:justify-around gap-2 pb-[9px]">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-eight.png" : "payubiz.png"
                      }`
                    }
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />

                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-seven.png" : "phonepay.png"
                      }`
                    }
                    // className="object-cover"
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />
                </div>
                <div className="flex max-sm:justify-around gap-2  pb-[9px]">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-six.png" : "paypal.png"
                      }`
                    }
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-five.png" : "paytm.png"
                      }`
                    }
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />
                </div>
                <div className="flex max-sm:justify-around gap-2 pb-[9px]">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-four.png" : "cashfree.png"
                      }`
                    }
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-three.png" : "mobikwik.png"
                      }`
                    }
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />
                </div>
                <div className="flex max-sm:justify-around gap-2 pb-[9px]">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-two.png" : "justpay.png"
                      }`
                    }
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./images/${
                        isSmallScreen ? "payment-one.png" : "ease.png"
                      }`
                    }
                    className="max-sm:max-w-[169px] max-sm:h-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] max-sm-:w-[100%] max-sm:mx-auto pt-[56px] mx-auto">
            <p className="text-manrope font-normal max-sm:text-sm max-sm:text-center text-base text-white ">
              The game involves an element of financial risk and may be
              addictive. Please play responsibly and at your own risk. This game
              is applicable for users 18+ only.
            </p>
          </div>
          <div className="pt-[48px] pb-[64px]">
            <p className="text-center max-sm:text-sm font-manrope text-base text-white font-normal">
              Copyright © 2024
              <span className="font-semibold px-1">PlayMaster 11</span>All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
