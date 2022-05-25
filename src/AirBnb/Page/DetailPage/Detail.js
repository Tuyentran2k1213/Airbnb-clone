import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpLocationMana from "../../Service/http.service/http.locationMana";

export default function Detail() {
  let { id } = useParams();
  const [dataViTri, setDataViTri] = useState({});
  useEffect(() => {
    httpLocationMana
      .layThongTinChiTietViTri(id)
      .then((res) => {
        setDataViTri(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" container mx-auto mt-2 flex flex-col">
      <div className="">
        <h1 className=" text-4xl">{dataViTri.name}</h1>
        <h1 className=" text-lg underline">{dataViTri.province}</h1>
      </div>
      <div className=" w-3/4 mx-auto">
        <img className=" object-cover w-full" src={dataViTri.image} alt="" />
      </div>
    </div>
  );
}
