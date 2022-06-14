import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./ItemLocation.scss";
import { GiBathtub, GiFireplace, GiHeatHaze } from "react-icons/gi";
import { TbElevator, TbToolsKitchen } from "react-icons/tb";
import { FaSwimmingPool } from "react-icons/fa";
import { MdCable, MdOutlineLocalLaundryService } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { AiOutlineWifi } from "react-icons/ai";

const { Meta } = Card;

export default function ItemLocation({ data }) {
  return (
    <Link to={`/detail/room/${data._id}`}>
      <Card
        className="itemlocation"
        hoverable
        cover={<img alt="example" src={data.image} />}
      >
        <Meta
          style={{}}
          title={<div className="title text-2xl">{data.name}</div>}
          description={
            <div className="description">
              <ul>
                <li>
                  <span>Mô tả: {data.description}</span>
                </li>
                <li>
                  <span>Giá: {data.price} vnđ</span>
                </li>
                <li>
                  <span className="tienich">
                    Tiện ích:
                    <div>{data.hotTub ? <GiBathtub /> : <></>}</div>
                    <div>{data.elevator ? <TbElevator /> : <></>}</div>
                    <div>{data.pool ? <FaSwimmingPool /> : <></>}</div>
                    <div>{data.indoorFireplace ? <GiFireplace /> : <></>}</div>
                    <div>
                      {data.dryer ? <MdOutlineLocalLaundryService /> : <></>}
                    </div>
                    <div>{data.gym ? <CgGym /> : <></>}</div>
                    <div>{data.kitchen ? <TbToolsKitchen /> : <></>}</div>
                    <div>{data.wifi ? <AiOutlineWifi /> : <></>}</div>
                    <div>{data.heating ? <GiHeatHaze /> : <></>}</div>
                    <div>{data.cableTV ? <MdCable /> : <></>}</div>
                  </span>
                </li>
              </ul>
            </div>
          }
        />
      </Card>
    </Link>
  );
}
