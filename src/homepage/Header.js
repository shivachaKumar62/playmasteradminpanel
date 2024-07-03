import React from "react";
import ImageSlider from "./imageslider/ImageSlider";
import imagesdata from "./imageslider/imagedata";

const Header = () => {
  return (
    <div>
      <div>
       
        <ImageSlider images={imagesdata} />
      </div>
    </div>
  );
};

export default Header;
