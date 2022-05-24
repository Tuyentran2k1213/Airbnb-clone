import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ItemLocation({ data }) {
  return (
    <NavLink
      to={`/detail/${data._id}`}
      className="block shadow cursor-pointer"
    >
      <Card
        hoverable
        style={{
          width: 300,
          margin: 10,
        }}
        cover={
          <img className=" h-52 rounded-full" alt="example" src={data.image} />
        }
      >
        <Meta title={data.name} description={data.province} className="" />
      </Card>
    </NavLink>
  );
}
