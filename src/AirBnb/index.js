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
<<<<<<< HEAD
          <Route path="/" element={<SecureView Component={<InnerPage />} />} />
          <Route path="/main" element={<SecureView Component={<Main />} />} />
          <Route
            path="/detail/:id"
            element={<SecureView Component={<Detail />} />}
          />
=======
          <Route path="/" element={<SecureView Component={<Main/>}/>} />
          <Route path="/main" element={<SecureView Component={<InnerPage />} />} />
>>>>>>> b3217ba0a59db450e4a002b73fbdd2fc5d083444
        </Routes>
      </BrowserRouter>
    </>
  );
}
