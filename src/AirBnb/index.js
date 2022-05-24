import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecureView } from "./HOC/HOC";
import Main from "./Page/MainPage/Main";
import { InnerPage } from "./Page/Page";

export default function Airbnb() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecureView Component={<Main/>}/>} />
          <Route path="/main" element={<SecureView Component={<InnerPage />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
