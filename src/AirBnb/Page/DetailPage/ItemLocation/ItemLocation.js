import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function ItemLocation({ data }) {
  return (
    <Link to={`/detail/room/${data._id}`}>
    <Card
      hoverable
      style={{
        width: "100%",
        display: "flex",
      }}
      cover={
        <img
          style={{
            width: "60%",
          }}
          alt="example"
          src={data.image}
        />
      }
    >
      <Meta
        style={{
            
        }}
        title={data.name}
        description="www.instagram.com"
      />
    </Card>
    </Link>
  );
}
