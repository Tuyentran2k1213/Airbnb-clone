import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { localStorageServ } from './Service/Service';
import './assets/scss/style.scss';
import { userAction } from './store'
import { SecureView } from "./HOC/HOC";
import Detail from "./Page/DetailPage/Detail";
import Main from "./Page/MainPage/Main";
import { InnerPage, LoginPage, SignupPage } from "./Page/Page";

export default function Airbnb() {

  const dispatch = useDispatch();

  useEffect(() => {

    const userInf = localStorageServ.userInfor.get();

    if(userInf){
      dispatch(userAction.getDetailUser(userInf._id));
    }
  
    
  }, [])
  

  return (
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
          <Route
            path="/detail/:province"
            element={<SecureView Component={<Detail />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
