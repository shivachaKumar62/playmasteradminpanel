import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import About from "./homepage/components/About";
import Footer from "./homepage/components/Footer";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import imagedata from "./imagedata";
import imagedata from "./homepage/imageslider/imagedata";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useSmallScreen from "./homepage/components/customcomponent/useSmallScreen";
import Navbar from "./homepage/navbar/Navbar";
import TitleBar from "./homepage/components/customcomponent/TitleBar";
const Aboutus = () => {
    
  const navigate = useNavigate()
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

 

   
  
  return (
    <div>
      <Navbar />

      <About />
      

      <Footer />
    </div>
  );
};

export default Aboutus;
