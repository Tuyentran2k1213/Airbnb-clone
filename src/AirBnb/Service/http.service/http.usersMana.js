import AxiosServ from "../axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  // layDanhSachPhim = () => {
  //   const uri = "/api/QuanLyPhim/LayDanhSachPhim";
  //   return AxiosServ.getMethod(uri, false);
  // };

  // dangNhap = (data) => {
  //   const uri = "/api/QuanLyNguoiDung/DangNhap";
  //   return AxiosServ.postMethod(uri, data);
  // };
  taoNguoiDung = (data) => {
    const uri = '/api/users';

    return AxiosServ.postMethod(uri, data);
  }
  layThongTinChiTietNguoiDung = (id) => {
    const uri = `/api/users/${id}`;

    return AxiosServ.getMethod(uri);
  }

  layDanhSachNguoiDung = () => {
    const uri = '/api/users/pagination';

    return AxiosServ.getMethod(uri);
  }

  xoaNguoiDung = (id) => {
    const uri = `/api/users/${id}`;

    return AxiosServ.deleteMothod(uri);
  }

  capNhatNguoiDung = (id, data) => {
    const uri = `/api/users/${id}`;
    
    return AxiosServ.putMethod(uri, data);
  }

  capNhatAvatar = (id, data) => {
    const uri = `/api/users/upload-avatar/${id}`;

    return AxiosServ.postMethod(uri, data);
  };
}

const httpUserMana = new HttpRequestService();

export default httpUserMana;
