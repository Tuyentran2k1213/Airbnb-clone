import React from "react";
import { GiBathtub } from "react-icons/gi";
import { TbElevator, TbToolsKitchen } from "react-icons/tb";
import { FaSwimmingPool } from "react-icons/fa";
import { GiFireplace, GiHeatHaze } from "react-icons/gi";
import { MdOutlineLocalLaundryService, MdCable } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { AiOutlineWifi } from "react-icons/ai";

export default function TicketItem({ data }) {
  return (
    <div className="ticketitem">
      <img src={data.roomId?.image} alt="" />
      <div className="ticketitem_infor">
        <ul>
          <li>
            <span className="name">Tên khách sạn: {data.roomId?.name}</span>
          </li>
          <li>
            <span className="description">
              Mô tả: {data.roomId?.description}
            </span>
          </li>
          <li>
            <span className="price">Giá: {data.roomId?.price} vnđ</span>
          </li>
          <li>
            <span className="tienich">
              Tiện ích:
              <div>{data.roomId?.hotTub ? <GiBathtub /> : <></>}</div>
              <div>{data.roomId?.elevator ? <TbElevator /> : <></>}</div>
              <div>{data.roomId?.pool ? <FaSwimmingPool /> : <></>}</div>
              <div>
                {data.roomId?.indoorFireplace ? <GiFireplace /> : <></>}
              </div>
              <div>
                {data.roomId?.dryer ? <MdOutlineLocalLaundryService /> : <></>}
              </div>
              <div>{data.roomId?.gym ? <CgGym /> : <></>}</div>
              <div>{data.roomId?.kitchen ? <TbToolsKitchen /> : <></>}</div>
              <div>{data.roomId?.wifi ? <AiOutlineWifi /> : <></>}</div>
              <div>{data.roomId?.heating ? <GiHeatHaze /> : <></>}</div>
              <div>{data.roomId?.cableTV ? <MdCable /> : <></>}</div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
