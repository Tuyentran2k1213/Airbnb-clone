import React from "react";
import { Card } from "antd";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> b3217ba0a59db450e4a002b73fbdd2fc5d083444
const { Meta } = Card;

export default function ItemLocation({ data }) {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> b3217ba0a59db450e4a002b73fbdd2fc5d083444
  );
}
