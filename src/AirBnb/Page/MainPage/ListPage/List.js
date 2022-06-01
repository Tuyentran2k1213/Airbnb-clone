import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemProvince from "../ItemProvince/ItemProvince";
import { roomAction } from "../../../store";

export default function List() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomAction.getRoomAction());
  }, []);
  let { dsPhong } = useSelector((state) => state.roomReducer);
  let { dsTinh } = useSelector((state) => state.provinceReducer);
  let Phongs = dsPhong.map((item) => item.locationId?.province);
  const demViTri = (item) => {
    let conca = Phongs.filter(function (e) {
      return e === item;
    });
    return conca.length;
  };
  dsTinh.map((item) => {
    return (item.rental = demViTri(item.province));
  });
  return (
    <div className=" container mx-auto mt-20">
      <h1 className=" text-4xl">Các địa điểm yêu thích gần đây </h1>
      <div className="flex flex-wrap justify-center">
        {dsTinh.map((item) => {
          return <ItemProvince data={item} />;
        })}
      </div>
    </div>
  );
}
