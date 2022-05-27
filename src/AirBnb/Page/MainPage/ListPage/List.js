import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ItemLocation from "../ItemLocation/ItemLocation";

export default function List() {
  let { dsViTri } = useSelector((state) => state.locationReducer);
  return (
    <div className=" container mx-auto mt-0 md:mt-5">
      <div className=" flex flex-wrap justify-center">
        {dsViTri.map((item) => {
          return <ItemLocation data={item} />;
        })}
      </div>
    </div>
  );
}
