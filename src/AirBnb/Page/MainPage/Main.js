import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocationAction } from "../../store/action/locationAction";
import Carousel1 from "./Carousel/Carousel1";
import List from "./ListPage/List";

export default function Main() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationAction());
  }, []);
  return (
    <div className="mt-[7rem]">
      <Carousel1 />
      <List />
    </div>
  );
}
