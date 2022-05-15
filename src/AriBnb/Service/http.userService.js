import AxiosServ from "./axios.service";

class HttpRequestService {
  constructor() {}

  layDanhSachPhim = () => {
    const uri = "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";

    return AxiosServ.getMethod(uri);
  };

  layThongTinNguoiDung = (data) => {
    const uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";

    return AxiosServ.postMethod(uri, data);
  };

  layDanhSachNguoiDung = () => {
    const uri = "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
    return AxiosServ.getMethod(uri);
  };
}

const httpServ = new HttpRequestService();

export default httpServ;
