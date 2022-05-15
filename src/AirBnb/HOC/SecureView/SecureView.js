import React from "react";
import localStorageServ from "../../Service/locaStorage.service";

export default function SecureView({ Component }) {
  // let userInfor = localStorageServ.userInfor.get();

  return (
    // userInfor?.accessToken && userInfor?.maLoaiNguoiDung === "QuanTri"
    // ? Component
    // : window.location.assign("/login");
    Component
  )
}
