import React from "react";
import Slider from "react-slick";

let imgSrc = [
  "https://airbnb.cybersoft.edu.vn/public/temp/1651304740121_1636703505621_cantho.jpg",
  "https://airbnb.cybersoft.edu.vn/public/temp/1652953227313_a.jpg",
  "https://airbnb.cybersoft.edu.vn/public/temp/1636703654156_phuquoc.jpg",
];

export default function Carousel1() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" w-full container mx-auto ">
      <Slider {...settings}>
        {imgSrc.map((item, index) => {
          return (
            <img
              className="Carousel1item"
              src={item}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
}
