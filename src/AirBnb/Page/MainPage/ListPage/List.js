import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ItemLocation from "../ItemLocation/ItemLocation";
import Slider from "react-slick";

export default function List() {
  let { dsViTri } = useSelector((state) => state.locationReducer);
  // console.log(dsViTri);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" mt-20 mx-auto container items-center">
      <h1 className=" text-3xl text-center"> Các địa điểm được ưa thích gần đây</h1>
      <Slider {...settings}>
        {dsViTri.map((item) => {
          return (
            <div>
              <ItemLocation data={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
