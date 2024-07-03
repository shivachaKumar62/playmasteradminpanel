
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper/modules";
import useSmallScreen from "./customcomponent/useSmallScreen";


const UserSay = () => {
  const isSmallScreen = useSmallScreen();

  const userSayData = [
    {
      id: 1,
      image: "./images/Group 25.png",
      name: "Pallavi Singh",
      comment:
        "I appreciate the seamless experience of using this app, from quick winnings added to my wallet to the swift delivery of the grand prize - it truly exceeds expectations.",
    },
    {
      id: 2,
      image: "./images/Group 26.png",
      name: "Rahul Rathore",
      comment:
        "I love how effortless it is to use this app, with quick winnings credited to my wallet and fast delivery of the grand prize—truly beyond expectations.",
    },
    {
      id: 3,
      image: "./images/personone.png",
      name: "Shivam Pandey",
      comment:
        "Play Master 11 offers a seamless betting experience with user-friendly navigation and a variety of sports options.",
    },
    {
      id: 4,
      image: "./images/persontwo.png",
      name: "Rupesh Singh",
      comment:
        "With its sleek design and smooth performance, Play Master 11 makes online betting both enjoyable and efficient.",
    },
    {
      id: 5,
      image: "./images/personthree.png",
      name: "Ranjit Kumar",
      comment:
        "Play Master 11 excels in offering quick withdrawals and deposits, enhancing the overall user experience for bettors.",
    },
    {
      id: 6,
      image: "./images/personfour.png",
      name: "Amit Yadav",
      comment:
        "As a user, I appreciate Play Master 11's easy-to-navigate layout, making it simple to place bets quickly.",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] py-[96px] max-sm:py-[20px]">
      <div className="container">
        <div>
          <h2 className="text-center font-manrope font-semibold text-[32px] py-6 max-sm:py-3 text-[#071013]">
            What Our User Say
          </h2>
        </div>
        <Swiper
          cssMode={true}
          navigation={isSmallScreen?false:true}
          mousewheel={true}
          slidesPerView={isSmallScreen ? 1 : 2}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Autoplay, Keyboard]}
          className="mySwiper "
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {userSayData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt={item.name}
                    className="w-[244px] h-[244px]"
                  />
                </div>
                <div className="max-sm:w-[90%] sm:w-[70%] m-auto">
                  <p className="text-xl font-semibold font-manrope text-[#071013] text-center py-6">
                    {item.name}
                  </p>
                  <div className="flex gap-2 ">
                    <span className="mt-[-10px]">
                      <FaQuoteLeft className="text-2xl" />
                    </span>
                    <p className="font-normal font-manrope text-base text-[#373737]">
                      {item.comment}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserSay;
