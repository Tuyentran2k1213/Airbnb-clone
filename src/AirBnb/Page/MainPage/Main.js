import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocationAction } from "../../store/action/locationAction";
import { getProvinceAction2 } from "../../store/action/provineAction";
import Carousel1 from "./Carousel/Carousel1";
import List from "./ListPage/List";

export default function Main() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationAction());
  }, []);
  useEffect(() => {
    dispatch(getProvinceAction2());
  }, []);
  return (
    <div className="">
      <Carousel1 />
      <List />
    </div>
  );
}
