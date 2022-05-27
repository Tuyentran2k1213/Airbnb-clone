import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpLocationMana from "../../Service/http.service/http.locationMana";
import { Avatar, List, Space } from "antd";
import ItemLocation from "./ItemLocation/ItemLocation";
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Detail() {
  let { province } = useParams();
  const [dataViTri, setDataViTri] = useState([]);
  useEffect(() => {
    httpLocationMana
      .layDanhSachViTri()
      .then((res) => {
        setDataViTri(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let viTriPhuHop = dataViTri.filter(function (locate) {
    return locate.province === province;
  });

  return (
    <div className=" container mx-auto mt-36 flex flex-col">
      <h1 className="text-4xl">Các địa điểm hàng đầu tại {province}</h1>
      <div>
        {viTriPhuHop.map((item, index) => {
          return <ItemLocation key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
