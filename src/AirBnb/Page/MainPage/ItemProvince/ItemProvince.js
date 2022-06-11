import React from "react";
import { Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
const { Meta } = Card;

export default function ItemProvince({ data }) {
  return (
    <NavLink target={"_blank"} to={`/detail/${data.province}`}>
      <Card
        hoverable
        style={{
          width: 300,
          margin: 10,
          borderRadius: "10px",
        }}
        cover={
          <img
            className=" h-52"
            style={{
              borderRadius: "10px",
            }}
            alt="example"
            src={data.image}
          />
        }
      >
        <Meta
          title={data.name}
          description={data.rental + " rental"}
          className=""
        />
      </Card>
    </NavLink>
  );
}
