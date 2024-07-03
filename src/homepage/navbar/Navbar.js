import React, { useState, useEffect,useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import imagedata from "../../homepage/imageslider/imagedata";
import { NavLink, useNavigate } from "react-router-dom";
import useSmallScreen from "../../homepage/components/customcomponent/useSmallScreen";
import useNavigateAndScroll from "../../ScrollTop";
const Navbar = () => {
  const navigate = useNavigate();
  const ourGameRef = useRef(null);
  const bonusRef = useRef(null);
  const companyRef = useRef(null);
  const navigateAndScroll = useNavigateAndScroll();
  const isSmallScreen = useSmallScreen();
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbars, setShowNavBars] = useState(false);
const [value, setValue] = useState("");

const handleInputChange = (event) => {
  const { value } = event.target;
  // Allow only digits and ensure the length doesn't exceed 10
  if (/^\d*$/.test(value) && value.length <= 10) {
    setValue(value);
  }
};
  const handleScroll = () => {
    if (window.scrollY >= 60) {
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
  const showNavbar = () => {
    setShowNavBars((data) => !data);
  };
const handleNavigation = (path, elementId) => {
  navigate(path, { state: { scrollTo: elementId } });
  setShowNavBars(false); 
};



  return (
    <div>
      <div className="bg-custom">
        <div className="container relative">
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
            {isSmallScreen ? (
              <>
                <div className="max-sm:pr-4" onClick={showNavbar}>
                  <GiHamburgerMenu className="text-white text-3xl" />
                </div>
                <div
                  className={`absolute left-0 duration-1000 ease-out transition-all transform ${
                    showNavbars
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }  top-[80px] w-[100%] bg-white shadow-md`}
                  style={{ zIndex: "99999999" }}
                >
                  <div className="flex flex-col justify-center py-4 gap-4 items-center">
                    <div
                      className="text-black font-manrope font-semibold text-base"
                      onClick={() =>
                        handleNavigation("/ourgame", "ourgameSection")
                      }
                    >
                      Our Game
                    </div>
                    <div
                      className="text-black font-manrope font-semibold text-base cursor-pointer"
                      onClick={() => handleNavigation("/bonus", "bonusSection")}
                    >
                      Bonus & Voucher
                    </div>
                    {/* <NavLink className="text-black font-manrope font-semibold text-base">
                      More
                    </NavLink> */}
                    <div
                      className="text-black font-manrope font-semibold text-base cursor-pointer"
                      onClick={() =>
                        handleNavigation("/contact-us", "contactSection")
                      }
                    >
                      Contact Us
                    </div>
                    <button className="bg-blue-500 rounded-lg w-[141px] h-[42px] text-white font-manrope font-semibold text-base">
                      <a
                        href={"https://playmaster11.com/Playmaster11.apk"}
                        download
                      >
                        Download App
                      </a>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex gap-x-6 items-center">
                <div
                  className="text-white font-manrope font-semibold text-base cursor-pointer"
                  //   to="/ourgame"
                  //   onClick={() => ScrollTop("/ourgame")}
                  onClick={() => handleNavigation("/ourgame", "ourgameSection")}
                >
                  Our Game
                </div>
                <div
                  className="text-white font-manrope font-semibold text-base cursor-pointer"
                  onClick={() => handleNavigation("/bonus", "bonusSection")}
                >
                  Bonus & Voucher
                </div>
                {/* <NavLink className="text-white font-manrope font-semibold text-base">
                  More
                </NavLink> */}
                <div
                  className="text-white font-manrope font-semibold text-base cursor-pointer"
                  onClick={() =>
                    handleNavigation("/contact-us", "contactSection")
                  }
                >
                  Contact Us
                </div>
                <button className="bg-blue-500 rounded-lg w-[141px] h-[42px] text-white font-manrope font-semibold text-base">
                  <a
                    href={"https://playmaster11.com/Playmaster11.apk"}
                    download
                  >
                    Download App
                  </a>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper relative"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {imagedata.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.src})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                height: isSmallScreen ? "480px" : "696px",
                objectFit: "cover",
              }}
            >
              <div>
                <div className="container ">
                  <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                    <div className="max-sm:pb-[11px]">
                      <div className="pt-24 max-sm:pt-10 ">
                        <p className="max-sm:px-3 text-wrap font-manrope max-sm:text-center  font-semibold text-5xl max-sm:text-2xl text-white">
                          {item?.title}
                        </p>
                        <p className="max-sm:px-3  text-wrap font-manrope  max-sm:text-center  font-semibold max-sm:text-base text-2xl my-10 max-sm:my-4 text-white">
                          {item?.semiTitle}
                        </p>
                        <div className="flex gap-x-3 max-sm:flex-wrap max-sm:justify-center  gap-y-3 px-4  ">
                          <div className="flex  gap-x-2 ">
                            <img
                              src={
                                process.env.PUBLIC_URL + `./images/${item.logo}`
                              }
                              alt={item.alt}
                              className=" object-cover z-0 max-sm:h-[32px] sm:w-[48px] sm:h-[48px] max-sm:w-[32px]"
                            />
                            <div className="flex flex-col  ">
                              <p className="font-semibold font-manrope max-sm:text-base text-2xl text-white">
                                {item.peoples}
                              </p>

                              <p className="font-medium max-sm:text-xs  font-manrope text-base text-white ">
                                {item.registrations}
                              </p>
                            </div>
                          </div>
                          <div className="border-r-2  "></div>
                          <div className="flex gap-x-2">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                `./images/${item.logoone}`
                              }
                              alt={item.alt}
                              className=" object-cover z-0 max-sm:h-[32px] sm:w-[43px] sm:h-[45px] max-sm:w-[32px]"
                            />
                            <div className="flex flex-col  ">
                              <p className="font-semibold max-sm:text-base font-manrope text-2xl text-white">
                                {item.peoplesone}
                              </p>

                              <p className="font-medium max-sm:text-xs font-manrope text-base text-white ">
                                {item.registrationsone}
                              </p>
                            </div>
                          </div>
                          {!isSmallScreen && <div className="border-r-2"></div>}
                          <div className="flex gap-x-2">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                `./images/${item.logotwo}`
                              }
                              alt={item.alt}
                              className=" object-cover z-0 max-sm:h-[32px] sm:w-[48px] sm:h-[48px] max-sm:w-[32px]"
                            />
                            <div className="flex flex-col  ">
                              <p className="font-semibold max-sm:text-base font-manrope text-2xl text-white">
                                {item.peoplestwo}
                              </p>

                              <p className="font-medium max-sm:text-xs font-manrope text-base text-white ">
                                {item.registrationstwo}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`pt-[${
                        isSmallScreen ? "[11px]" : item?.paddingTops
                      }] pb-[${
                        isSmallScreen ? "0" : item?.paddingBottoms
                      }] max-sm:flex max-sm:justify-center`}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `./images/${
                            isSmallScreen ? item.srcsmall : item.srcone
                          }`
                        }
                        className="object-cover h-full "
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
        className={` ${
          isSticky ? "sticky-header" : ""
        } w-full mt-[-100px]`}
      >
        <div className="container">
          <div className="flex sm:justify-center  max-sm:flex max-sm:justify-around items-center  h-[96px] ">
            <div className="flex  max-sm:flex max-sm:justify-between  items-center gap-x-4 max-sm:mr-[0px] sm:mr-[32px] ">
              <a href={"https://playmaster11.com/Playmaster11.apk"} download>
                <div
                  className="flex justify-center items-center gap-2 z-50 bg-[#071013] sm:h-[56px] max-sm:h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg  "
                  style={{ zIndex: 999 }}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "./images/devicon_android.png"
                    }
                  />
                  <div className="flex flex-col ">
                    <span className="text-xs font-manrope font-normal text-white">
                      Download Our
                    </span>
                    <span className=" font-semibold font-manrope text-white text-base">
                      Android App
                    </span>
                  </div>
                </div>
              </a>
              <a href={"https://playmaster11.com/Playmaster11.apk"} download>
                <div className="flex justify-center items-center gap-2 z-50 bg-[#071013] sm:h-[56px] max-sm:h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg ">
                  <img
                    src={process.env.PUBLIC_URL + "./images/ic_round-apple.png"}
                  />
                  <div className="flex flex-col  ">
                    <span className=" text-xs font-manrope font-normal text-white">
                      Download on the
                    </span>
                    <span className=" font-semibold font-manrope text-white text-base">
                      App Store
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex max-sm:hidden sm:inline-flex bg-white w-[286px]  items-center mr-[16px] rounded-lg h-[58px]">
              <span className="text-[#071013] font-semibold font-manrope text-base px-4  ">
                +91
              </span>
              <input
                type="number"
                value={value}
                placeholder="Enter Your Number"
                onChange={handleInputChange}
                maxLength="10"
                className="focus:outline-none w-full font-medium font-manrope text-base text-[#989898]"
              />
            </div>
            <button className="bg-blue-500 max-sm:hidden sm:block rounded-lg w-[183px] h-[58px] text-white font-semibold font-manrope text-base">
              GET APP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
