import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../homepage/components/Footer";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import imagedata from "./imagedata";
import imagedata from "../homepage/imageslider/imagedata";
import { NavLink, useLocation } from "react-router-dom";
import useSmallScreen from "../homepage/components/customcomponent/useSmallScreen";
import Navbar from "../homepage/navbar/Navbar";
import TitleBar from "../homepage/components/customcomponent/TitleBar";
const Contact = () => {
   const location = useLocation();
  
  const isSmallScreen = useSmallScreen();
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbars, setShowNavBars] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
 

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

      <div className="container mx-auto p-4" id="contactSection">
        {/* <h1 className="font-bold py-4 font-manrope text-xl mt-[40px] text-center text-black">
          Contact Us
        </h1> */}
        <div className="mt-[44px] ">
          <TitleBar
            data="Contact Us"
            colors="#ffffff"
            width="336px"
            height="76px"
          />
        </div>
        <p className="text-gray-600 text-center pt-[40px] font-semibold text-xl">
          support@PlayMaster11.com
        </p>
        <div className=" flex justify-center w-full   mt-[46px] mb-[40px]  gap-4">
          {/* <div className="col-span-1 my-auto ">
            <p className="text-gray-600 font-semibold text-xl">
              support@PlayMaster11.com
            </p>

          </div> */}

          <div className="col-span-1 border shadow-lg px-10 py-8 rounded-md">
            <form id="contactForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-sm text-gray-600 font-semibold"
                    >
                      First Name
                    </label>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-sm text-gray-600 font-semibold"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-sm font-semibold text-gray-600"
                    >
                      Registered Email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="name"
                    name="name"
                    placeholder="Registered Mobile Number"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-sm text-gray-600 font-semibold"
                  >
                    Registered Mobile Number
                  </label>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="subject"
                      className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-sm text-gray-600 font-semibold"
                    >
                      Subject
                    </label>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Leave a message here"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ height: "150px" }}
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute top-0 font-semibold left-2 -translate-y-1/2 bg-white px-1 text-sm text-gray-600"
                    >
                      Message
                    </label>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <div id="responseMessage"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
