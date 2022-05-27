import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ItemProvince from "../ItemProvince/ItemProvince";

export default function List() {
  let { dsViTri } = useSelector((state) => state.locationReducer);
  let { dsTinh } = useSelector((state) => state.provinceReducer);
  let viTris = dsViTri.map((item) => item.province);
  const demViTri = (item) => {
    let conca = viTris.filter(function (e) {
      return e === item;
    });
    return conca.length;
  };
  dsTinh.map((item) => {
    return (item.rental = demViTri(item.province));
  });
  return (
    <div className=" container mx-auto mt-20">
      <h1 className="text-4xl">Các địa điểm yêu thích gần đây </h1>
      <div className="flex flex-wrap justify-center">
        {dsTinh.map((item) => {
          return <ItemProvince data={item} />;
        })}
      </div>
    </div>
  );
}
