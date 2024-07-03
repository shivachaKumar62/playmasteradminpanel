import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../homepage/components/Footer";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import imagedata from "./imagedata";
import imagedata from "../homepage/imageslider/imagedata";
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import useSmallScreen from "../homepage/components/customcomponent/useSmallScreen";
import Navbar from "../homepage/navbar/Navbar";
import TitleBar from "../homepage/components/customcomponent/TitleBar";
const Refund = () => {
  const location = useLocation()
useEffect(() => {
  if (location.state?.scrollTo) {
    const element = document.getElementById(location.state.scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);
  return (
    <div>
      <Navbar />
      <div className="container" id="refundSection">
        <div className="py-[48px]">
          <TitleBar
            data="Refund Policy"
            colors="#ffffff"
            width="336px"
            height="76px"
          />
          {/* <h1 className="font-bold py-4 font-manrope text-xl text-black">
            Refund Policy
          </h1> */}
          <div className="mt-[36px]">
            <p>
              We refund your money within 24 hours when a contest is cancelled.
              This happens only if the match is called off or the contest does
              not gather the required number of contestants.
            </p>
            <p className="py-2">
              A match can be called off without a ball bowled or sometimes even
              after the start of play due to rain, dangerous pitch, among other
              reasons.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
