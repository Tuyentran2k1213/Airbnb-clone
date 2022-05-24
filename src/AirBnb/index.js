import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecureView } from "./HOC/HOC";
import Detail from "./Page/DetailPage/Detail";
import Main from "./Page/MainPage/Main";
import { InnerPage } from "./Page/Page";

export default function Airbnb() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecureView Component={<InnerPage />} />} />
          <Route path="/main" element={<SecureView Component={<Main />} />} />
          <Route
            path="/detail/:id"
            element={<SecureView Component={<Detail />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
