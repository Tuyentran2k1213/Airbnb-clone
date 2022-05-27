import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export default function ItemProvince({ data }) {
  let navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/detail/${data.province}`);
      }}
      hoverable
      style={{
        width: 300,
        margin: 10,
      }}
      cover={
        <img className=" h-52 rounded-full" alt="example" src={data.image} />
      }
    >
      <Meta
        title={data.name}
        description={data.rental + " rental"}
        className=""
      />
    </Card>
  );
}
