import AxiosServ from "../axios.service";

class HttpRequestService {
  constructor() {}
  taoPhongChoThue = (data) => {
    const uri = "/api/rooms";

    return AxiosServ.postMethod(uri, data);
  };
  layDanhSachPhong = () => {
    const uri = "/api/rooms";

    return AxiosServ.getMethod(uri);
  };
  layThongTinChiTietPhong = (id) => {
    const uri = `/api/rooms/${id}`;

    return AxiosServ.getMethod(uri);
  };
  capNhatThongTinPhong = (data, id) => {
    const uri = `/api/rooms/${id}`;

    return AxiosServ.putMethod(uri, data);
  };
  xoaPhongChoThue = (data, id) => {
    const uri = `/api/rooms/${id}`;

    return AxiosServ.deleteMothod(uri, data);
  };
  datPhongChoThue = (data) => {
    const uri = "/api/rooms/booking";

    return AxiosServ.postMethod(uri, data);
  };
  datPhongChoThue = (data, id) => {
    const uri = `/api/rooms/upload-image/${id}`;

    return AxiosServ.postMethod(uri, data);
  };
}

const httpRoomsMana = new HttpRequestService();

export default httpRoomsMana;
