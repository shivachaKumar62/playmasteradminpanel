import React, { useState, useEffect } from "react";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import imagedata from "./imagedata";
import { NavLink,useNavigate } from "react-router-dom";
import About from "../components/About";
import Play from "../components/Play";
import Features from "../components/Features";
import UserSay from "../components/UserSay";
import SemiFooter from "../components/SemiFooter";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import DownloadQR from "../components/DownloadQR";
import Offer from "../components/Offer";

function ImageSlider() {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate()

  const handleScroll = () => {
    if (window.scrollY > 200) {
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

  return (
    <div>
      <div className="relative">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          // autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {imagedata.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  height: "696px",
                }}
              >
                <div>
                  <div className="bg-black bg-opacity-[74%]">
                    <div className="container">
                      <div className="flex justify-between items-center h-[80px]">
                        <div
                          className="max-sm:pl-4 cursor-pointer"
                          onClick={() => navigate("/")}
                        >
                          <img
                            src={process.env.PUBLIC_URL + `./images/logo.png`}
                            alt="logo"
                          />
                        </div>
                        <div className="flex gap-x-6 items-center">
                          <NavLink className="text-white  font-manrope font-semibold text-base">
                            Our Game
                          </NavLink>
                          <NavLink className="text-white  font-manrope font-semibold text-base">
                            Bonus & Voucher
                          </NavLink>
                          <NavLink className="text-white font-manrope font-semibold text-base">
                            More
                          </NavLink>
                          <NavLink className="text-white font-manrope font-semibold text-base">
                            Company
                          </NavLink>
                          <button className="bg-blue-500 rounded-lg w-[141px] h-[42px] text-white font-manrope font-semibold text-base">
                            Download App
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="grid grid-cols-2">
                      <div>
                        <div className="pt-24  ">
                          <p className=" text-wrap font-manrope  font-semibold text-5xl text-white">
                            {item?.title}
                          </p>
                          <p className=" text-wrap font-manrope  font-semibold text-2xl my-10 text-white">
                            {item?.semiTitle}
                          </p>
                          <div className="flex">
                            <div className="flex">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `./images/${item.logo}`
                                }
                                alt={item.alt}
                                className=" object-cover z-0"
                              />
                              <div className="flex flex-col border-r-2 pl-1 pr-4">
                                <p className="font-semibold font-manrope text-2xl text-white">
                                  {item.peoples}
                                </p>

                                <p className="font-medium  font-manrope text-base text-white ">
                                  {item.registrations}
                                </p>
                              </div>
                            </div>
                            <div className="flex  ml-4">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `./images/${item.logoone}`
                                }
                                alt={item.alt}
                                className=" object-cover z-0"
                              />
                              <div className="flex flex-col border-r-2 pl-1 pr-4">
                                <p className="font-semibold font-manrope text-2xl text-white">
                                  {item.peoplesone}
                                </p>

                                <p className="font-medium font-manrope text-base text-white ">
                                  {item.registrationsone}
                                </p>
                              </div>
                            </div>
                            <div className="flex  ml-2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `./images/${item.logotwo}`
                                }
                                alt={item.alt}
                                className=" object-cover z-0"
                              />
                              <div className="flex flex-col  pl-1 pr-4">
                                <p className="font-semibold font-manrope text-2xl text-white">
                                  {item.peoplestwo}
                                </p>

                                <p className="font-medium font-manrope text-base text-white ">
                                  {item.registrationstwo}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`pt-[${item?.paddingTops}] pb-[${item?.paddingBottoms}]`}
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + `./images/${item.srcone}`
                          }
                          className="object-contain h-[579px]"
                          alt="content"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`bg-gradient-to-r   from-white via-black to-blue-500 bg-opacity-100 bg-blur-md ${
            isSticky ? "sticky-header" : "sticky_header_two"
          } w-full`}
        >
          <div className="container">
            <div className="flex justify-center items-center  h-[96px]">
              <div className="flex  items-center gap-x-4 mr-[32px]">
                <div className="flex justify-center items-center gap-2 bg-[#071013] h-[56px] w-[184px] rounded-lg">
                  <img
                    src={
                      process.env.PUBLIC_URL + "./images/devicon_android.png"
                    }
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
      <div className=" my-[96px]">
        <About />
      </div>
      <div>
        <Play />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <UserSay />
      </div>
      <div>
        <Offer />
      </div>
      <div>
        <DownloadQR />
      </div>
      <div>
        <Faq />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default ImageSlider;
