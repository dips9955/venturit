import React from "react";
import { Carousel, Image } from "antd";

 const CustomCarousel = () => {
  

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
  };

  return (
    <div>
      <Carousel autoplay>
        <div style={contentStyle}>
          <Image  preview={false}   src={require("../../assets/2.png").default}/>
        </div>
        <div style={contentStyle}>
          <Image  preview={false}   src={require("../../assets/Group.png").default}/>
        </div>
       
      </Carousel>
    </div>
  );
};

export default CustomCarousel;