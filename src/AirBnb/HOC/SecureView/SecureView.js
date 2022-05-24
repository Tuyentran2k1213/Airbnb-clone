import React from "react";
import { NavHeader } from "../../Component/Component";
// import localStorageServ from "../../Service/locaStorage.service";

export default function SecureView({ Component }) {
  // let userInfor = localStorageServ.userInfor.get();

  return (
    // userInfor?.accessToken && userInfor?.maLoaiNguoiDung === "QuanTri"
    // ? Component
    // : window.location.assign("/login");
    <>
      <NavHeader />
      {Component}
    </>
  );
}
