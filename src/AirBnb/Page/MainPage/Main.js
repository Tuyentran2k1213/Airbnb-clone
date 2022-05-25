import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocationAction } from "../../store/action/locationAction";
import List from "./ListPage/List";

export default function Main() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationAction());
  }, []);
  return (
    <div className="mt-[7rem]">
      <Carousel />
      <List />
    </div>
  );
}
