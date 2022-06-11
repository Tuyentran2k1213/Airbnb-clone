import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./UserPage.scss";

export default function UserPage() {
  let { userInfor } = useSelector((state) => state.userReducer);
  useEffect(() => {
    console.log(userInfor);
  }, []);
  return (
    <div className="Userpage">
      <div className="container">
        <div className="UserInfor">
          <img className="avatar" src={userInfor?.avatar} alt="" />
          <a href=""><u><b> Cập nhật avatar </b></u></a>
          <ul>
            <li>
              <span className="name">Tên: {userInfor?.name}</span>
            </li>
            <li>
              <span className="email">Email: {userInfor?.email}</span>
            </li>
            <li>
              <span className="address">Địa chỉ: {userInfor?.address}</span>
            </li>
            <li>
              <span className="phone">Số điện thoại: {userInfor?.phone}</span>
            </li>
          </ul>
        <span className="xacminh">
        Xác thực danh tính của bạn để nhận huy hiệu xác minh danh tính
        </span>
        <button className="buttonxacminh">Xác Minh Danh Tính</button>
        </div>
        <div className="UserTicket">
          <h1 className="Usertickettitle">Danh sách vé đã đặt</h1>
        </div>
      </div>
    </div>
  );
}
