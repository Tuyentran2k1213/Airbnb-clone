import React from "react";
import { Card } from "antd";
import { size } from "lodash";
const { Meta } = Card;

export default function ItemLocation({ data }) {
  return (
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
  );
}
