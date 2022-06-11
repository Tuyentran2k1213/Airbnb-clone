import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { localStorageServ } from "./Service/Service";
import "./assets/scss/style.scss";
import { userAction } from "./store";
import { SecureView } from "./HOC/HOC";
import Detail from "./Page/DetailPage/Detail";
import DetailRoom from "./Page/DetailPage/DetailRoom";

import Main from "./Page/MainPage/Main";
import { DetailLocation, InnerPage, LoginPage, SignupPage } from "./Page/Page";
import { Spin } from "antd";

export default function Airbnb() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userInf = localStorageServ.userInfor.get();
    if (userInf) {
      setLoading(true);
      if (userInf._id) {
        const firstLoading = async () => {
          return await dispatch(userAction.getDetailUser(userInf._id));
        };
        firstLoading().then((res) => {
          setLoading(res);
        });
      } else {
        alert("Vui lòng đăng nhập lại");
      }
    }
  }, []);

  return (
    loading ? <div className="w-screen h-screen flex justify-center items-center">
        <Spin size="large" tip="loading..."/>
      </div> : 
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<SecureView Component={<Main/>}/>} />
          <Route path="/main" element={<SecureView Component={<InnerPage />} />} />
          <Route path="/mobile">
          <Route path="login" element={<SecureView Component={<LoginPage />} />} />
          <Route path="signup" element={<SecureView Component={<SignupPage />} />} />
          {/* <Route path="/signup" element={<SecureView Component={<InnerPage />} />} /> */}
          </Route>
          <Route path="/detail">
            <Route path="province/:data"
            element={<SecureView Component={<Detail />} />}/>
            <Route path="room/:id"
            element={<SecureView Component={<DetailRoom/>}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </>   
  )
}
