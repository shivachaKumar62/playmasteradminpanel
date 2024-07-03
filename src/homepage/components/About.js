import React,{useEffect} from "react";
// import "./App.css";
import TitleBar from "./customcomponent/TitleBar";
import { useLocation } from "react-router-dom";
const About = () => {
   const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="container " id="aboutus">
      <div className="py-[96px] max-sm:py-[40px]">
        <TitleBar data="About" colors="#ffffff" width="336px" height="76px" />
        <div className="flex flex-col justify-center items-center w-[90%] m-auto mt-[36px]">
          <p className="text-wrap mb-5  text-center font-medium text-[#373737] font-manrope  text-lg">
            Experience the thrill of crafting your dream team and competing
            against fellow cricket enthusiasts, all while enjoying the exixtment
            of live matches and the chance to win big priixes on PlayMaster 11,
            India's Top choice for online fantasy sports gaming.
          </p>
          <p className="text-wrap font-medium text-[#373737] font-manrope  text-lg  text-center">
            Our core mission is to offer a distinctive gaming platform that
            encourages users to apply their analytical prowess and strategic
            acumen to the sports they adore, transcending mere physical
            participation. With a deep appreciation for the fervor and
            dedication to sportsin our nation, we, the Founders, extend a warm
            invitation to experience the exhilarating universe of PlayMaster 11.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
