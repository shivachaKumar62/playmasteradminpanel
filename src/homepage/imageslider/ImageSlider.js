// import React, { useState, useEffect } from "react";
// import "../../App.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import imagedata from "./imagedata";
// import { NavLink } from "react-router-dom";
// import About from "../components/About";
// import Play from "../components/Play";
// import Features from "../components/Features";
// import UserSay from "../components/UserSay";
// import Footer from "../components/Footer";
// import Faq from "../components/Faq";
// import DownloadQR from "../components/DownloadQR";
// import Offer from "../components/Offer";
// import useSmallScreen from "../components/customcomponent/useSmallScreen";
// import { GiHamburgerMenu } from "react-icons/gi";
// function ImageSlider() {
//   const isSmallScreen = useSmallScreen()
//   const [isSticky, setIsSticky] = useState(false);
//   const [showNavbars,setShowNavBars] = useState(false)

//   const handleScroll = () => {
//     if (window.scrollY > 80) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
// const showNavbar = () => {
// setShowNavBars((data) => !data)
// }
//   return (
//     <div className="">
//       {/* {showNavbars && (
//         <div className="max-sm:absolute max-sm:bottom-[50px] max-sm:z-50 max-sm:left-0 max-sm:w-[300px]">
//         <div className=" w-[300px]  ">
//           <NavLink className="text-white  font-manrope font-semibold text-base">
//             Our Game
//           </NavLink>
//           <NavLink className="text-white  font-manrope font-semibold text-base">
//             Bonus & Vouches
//           </NavLink>
//           <NavLink className="text-white font-manrope font-semibold text-base">
//             More
//           </NavLink>
//           <NavLink className="text-white font-manrope font-semibold text-base">
//             Company
//           </NavLink>
//           <button className="bg-blue-500 rounded-lg w-[141px] h-[42px] text-white font-manrope font-semibold text-base">
//             Download App
//           </button>
//         </div>
//         </div>
//       )} */}
//       <Swiper
//         pagination={{ clickable: true }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper relative"

//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//       >
//         {imagedata.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//               style={{
//                 backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "100% 100%",
//                 height: isSmallScreen ? "480px" : "696px",
//                 objectFit: "cover",
//               }}
//             >
//               <div>
//                 <div className="bg-black bg-opacity-[74%]">
//                   <div className="container">
//                     <div className="flex justify-between items-center h-[80px]">
//                       <div className="max-sm:pl-4">
//                         <img
//                           src={process.env.PUBLIC_URL + `./images/logo.png`}
//                           alt="logo"
//                         />
//                       </div>
//                       {isSmallScreen ? (
//                         <>
//                           <div
//                             className="max-sm:pr-4"
//                             onClick={() => showNavbar()}
//                           >
//                             <GiHamburgerMenu className="text-white text-3xl" />
//                           </div>
//                           <div
//                             className={`absolute duration-1000 ease-out transition-all transform ${
//                               showNavbars
//                                 ? "translate-y-0 opacity-100"
//                                 : "translate-y-full opacity-0"
//                             } z-50 top-[80px] w-[100%] bg-white`}
//                           >
//                             <div className="flex   flex-col justify-center py-4 gap-4 items-center">
//                               <NavLink className="text-black  font-manrope font-semibold text-base">
//                                 Our Game
//                               </NavLink>
//                               <NavLink className="text-black  font-manrope font-semibold text-base">
//                                 Bonus & Vouches
//                               </NavLink>
//                               <NavLink className="text-black font-manrope font-semibold text-base">
//                                 More
//                               </NavLink>
//                               <NavLink className="text-black font-manrope font-semibold text-base">
//                                 Company
//                               </NavLink>
//                               <button className="bg-blue-500 rounded-lg w-[141px] h-[42px] text-white font-manrope font-semibold text-base">
//                                 Download App
//                               </button>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <div className="flex gap-x-6 items-center">
//                           <NavLink className="text-white  font-manrope font-semibold text-base">
//                             Our Game
//                           </NavLink>
//                           <NavLink className="text-white  font-manrope font-semibold text-base">
//                             Bonus & Vouches
//                           </NavLink>
//                           <NavLink className="text-white font-manrope font-semibold text-base">
//                             More
//                           </NavLink>
//                           <NavLink className="text-white font-manrope font-semibold text-base">
//                             Company
//                           </NavLink>
//                           <button className="bg-blue-500 rounded-lg w-[141px] h-[42px] text-white font-manrope font-semibold text-base">
//                             Download App
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container relative">
//                   <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
//                     <div className="max-sm:pb-[11px]">
//                       <div className="pt-24 max-sm:pt-10 ">
//                         <p className="max-sm:px-3 text-wrap font-manrope max-sm:text-center  font-semibold text-5xl max-sm:text-2xl text-white">
//                           {item?.title}
//                         </p>
//                         <p className="max-sm:px-3  text-wrap font-manrope  max-sm:text-center  font-semibold max-sm:text-base text-2xl my-10 max-sm:my-4 text-white">
//                           {item?.semiTitle}
//                         </p>
//                         <div className="flex gap-x-3 max-sm:flex-wrap max-sm:justify-center  gap-y-3 px-4  ">
//                           <div className="flex gap-x-2 ">
//                             <img
//                               src={
//                                 process.env.PUBLIC_URL + `./images/${item.logo}`
//                               }
//                               alt={item.alt}
//                               className=" object-cover z-0 max-sm:h-[32px] max-sm:w-[32px]"
//                             />
//                             <div className="flex flex-col  ">
//                               <p className="font-semibold font-manrope max-sm:text-base text-2xl text-white">
//                                 {item.peoples}
//                               </p>

//                               <p className="font-medium max-sm:text-xs  font-manrope text-base text-white ">
//                                 {item.registrations}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="border-r-2  "></div>
//                           <div className="flex gap-x-2">
//                             <img
//                               src={
//                                 process.env.PUBLIC_URL +
//                                 `./images/${item.logoone}`
//                               }
//                               alt={item.alt}
//                               className=" object-cover z-0 max-sm:h-[32px] max-sm:w-[32px]"
//                             />
//                             <div className="flex flex-col  ">
//                               <p className="font-semibold max-sm:text-base font-manrope text-2xl text-white">
//                                 {item.peoplesone}
//                               </p>

//                               <p className="font-medium max-sm:text-xs font-manrope text-base text-white ">
//                                 {item.registrationsone}
//                               </p>
//                             </div>
//                           </div>
//                           {!isSmallScreen && <div className="border-r-2"></div>}
//                           <div className="flex gap-x-2">
//                             <img
//                               src={
//                                 process.env.PUBLIC_URL +
//                                 `./images/${item.logotwo}`
//                               }
//                               alt={item.alt}
//                               className=" object-cover z-0 max-sm:h-[32px] max-sm:w-[32px]"
//                             />
//                             <div className="flex flex-col  ">
//                               <p className="font-semibold max-sm:text-base font-manrope text-2xl text-white">
//                                 {item.peoplestwo}
//                               </p>

//                               <p className="font-medium max-sm:text-xs font-manrope text-base text-white ">
//                                 {item.registrationstwo}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className={`pt-[${
//                         isSmallScreen ? "[11px]" : item?.paddingTops
//                       }] pb-[${
//                         isSmallScreen ? "0" : item?.paddingBottoms
//                       }] max-sm:flex max-sm:justify-center`}
//                     >
//                       <img
//                         src={
//                           process.env.PUBLIC_URL +
//                           `./images/${
//                             isSmallScreen ? item.srcsmall : item.srcone
//                           }`
//                         }
//                         className="object-cover h-full "
//                         alt="content"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div
//         className={` ${
//           isSticky ? "sticky-header" : "sticky_header_two"
//         } w-full `}
//       >
//         <div className="container">
//           <div className="flex sm:justify-center  max-sm:flex max-sm:justify-around items-center  h-[96px] ">
//             <div className="flex  max-sm:flex max-sm:justify-between  items-center gap-x-4 max-sm:mr-[0px] sm:mr-[32px] ">
//               <div
//                 className="flex justify-center items-center gap-2 z-50 bg-[#071013] sm:h-[56px] max-sm:h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg  "
//                 style={{ zIndex: 999 }}
//               >
//                 <img
//                   src={process.env.PUBLIC_URL + "./images/devicon_android.png"}
//                 />
//                 <div className="flex flex-col ">
//                   <span className="text-xs font-manrope font-normal text-white">
//                     Download Our
//                   </span>
//                   <span className=" font-semibold font-manrope text-white text-base">
//                     Android App
//                   </span>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center gap-2 z-50 bg-[#071013] sm:h-[56px] max-sm:h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg ">
//                 <img
//                   src={process.env.PUBLIC_URL + "./images/ic_round-apple.png"}
//                 />
//                 <div className="flex flex-col  ">
//                   <span className=" text-xs font-manrope font-normal text-white">
//                     Download on the
//                   </span>
//                   <span className=" font-semibold font-manrope text-white text-base">
//                     App Store
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex max-sm:hidden sm:inline-flex bg-white w-[286px]  items-center mr-[16px] rounded-lg h-[58px]">
//               <span className="text-[#071013] font-semibold font-manrope text-base px-4  ">
//                 +91
//               </span>
//               <input
//                 type="number"
//                 placeholder="Enter Your Number"
//                 className="focus:outline-none w-full font-medium font-manrope text-base text-[#989898]"
//               />
//             </div>
//             <button className="bg-blue-500 max-sm:hidden sm:block rounded-lg w-[183px] h-[58px] text-white font-semibold font-manrope text-base">
//               GET APP
//             </button>
//           </div>
//         </div>
//       </div>
//       <div>
//         <About />
//       </div>
//       <div>
//         <Play />
//       </div>
//       <div>
//         <Features />
//       </div>
//       <div>
//         <UserSay />
//       </div>
//       <div>
//         <Offer />
//       </div>
//       <div>
//         <DownloadQR />
//       </div>
//       <div>
//         <Faq />
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;








import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import imagedata from "./imagedata";
import { NavLink } from "react-router-dom";
import About from "../components/About";
import Play from "../components/Play";
import Features from "../components/Features";
import UserSay from "../components/UserSay";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import DownloadQR from "../components/DownloadQR";
import Offer from "../components/Offer";
import useSmallScreen from "../components/customcomponent/useSmallScreen";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../navbar/Navbar";
function ImageSlider() {
  const navigate =  useNavigate()
  const [mobileNumber,setMobileNumber] = useState('')
  const isSmallScreen = useSmallScreen();
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbars, setShowNavBars] = useState(false);
const handleChange = (event) => {
  const newValue = event.target.value;
  console.log(newValue,'kkkk')
  if (newValue === "" || (newValue.length <= 10)) {
   setMobileNumber(newValue);
  }
  
};
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
  const showNavbar = () => {
    setShowNavBars((data) => !data);
  };
  return (
    <div className="">
      
      <Navbar />
      <div>
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

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ImageSlider;








