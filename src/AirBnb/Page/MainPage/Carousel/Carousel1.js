import React from "react";
import { Carousel } from "antd";
import Search from "./Search/Search";

let Src = [
  {
    img: "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/282186833_1258246941376954_7383438385089430387_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=swZ2fh4qJH8AX8-W2q2&_nc_ht=scontent.fhan3-5.fna&oh=03_AVIat92eXXsNQbAFBmW-RnAS5418B_Or-dVS_mYgnTtPQw&oe=62B7F19A",
    description: "Chào mừng bạn đã đến với AirBnb",
  },
  {
    img: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/279581390_692251225396832_3493962711956352609_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pE2DV_ylm30AX-Wr_4C&tn=SMSemKZzun5TguyT&_nc_ht=scontent.fhan4-1.fna&oh=03_AVKcy_IZHPZO1HqezmfhFO2GlpR9B3htNlwhkJ5gExutGg&oe=62B5E8E7",
    description: "",
  },
  {
    img: "https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/280349465_5154952791259278_5623715350850615292_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=an0JCVdJQBMAX_pQc4q&_nc_ht=scontent.fhan4-3.fna&oh=03_AVLdTPnzmiG7T5EusnAf5sHu2bc2e6kRYbq4JcusWc-xZw&oe=62B7CD80",
    description: "",
  },
];

export default function Carousel1() {
  return (
    <div className="carousel">
      <Carousel autoplay dots={false}>
        {Src.map((item) => {
          return (
            <div>
              <img
                style={{
                  width: "100%"
                }}
                src={item.img}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "black",
                  top: "0",
                  opacity: "0.2",
                }}
              ></div>
            </div>
          );
        })}
      </Carousel>
      <div className="maintitle">
      </div>
      <div className="search">
        <Search />
      </div>
    </div>
  );
}
