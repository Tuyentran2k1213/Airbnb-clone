import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemLocation from "./ItemLocation/ItemLocation";
import { useDispatch, useSelector } from "react-redux";
import { roomAction } from "../../store";
export default function Detail() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomAction.getRoomAction());
  }, []);
  let { province } = useParams();
  let { dsPhong } = useSelector((state) => state.roomReducer);
  console.log(dsPhong);
  let dsPhongPhuHop = dsPhong?.filter(function (item) {
   return item?.locationId?.province === province;
  });
  useEffect(() => {
    console.log(dsPhongPhuHop);
  }, [dsPhongPhuHop]);
  return (
    <div className=" container mx-auto mt-36 flex flex-col">
      <h1 className="text-4xl">Các địa điểm hàng đầu tại {province}</h1>
      {dsPhongPhuHop.map((item)=>{
        return <ItemLocation data={item}/>
      })}
    </div>
  );
}
