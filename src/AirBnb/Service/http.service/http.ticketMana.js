import AxiosServ from "../axios.service";

class HttpRequestService {
  constructor() {}
  layDanhSachVe = (data) => {
    const uri = "/api/tickets";

    return AxiosServ.getMethod(uri, data);
  };
  layThongTinChiTietVe = (id) => {
    const uri = `/api/tickets/${id}`;

    return AxiosServ.getMethod(uri);
  };
  // từ đây trở xuống chưa test được :((
  capNhatThongTinVe = (data, id) => {
    const uri = `/api/tickets/${id}`;

    return AxiosServ.putMethod(uri, data);
  };
  xoaVe = (id) => {
    const uri = `/api/tickets/${id}`;

    return AxiosServ.deleteMothod(uri);
  };
  taoVe = (data) => {
    const uri = `/api/tickets`;

    return AxiosServ.deleteMothod(uri, data);
  };
  layDanhSachVeTheoNguoiDung = (id) => {
    const uri = `/api/tickets/by-user?userID=${id}`;
    return AxiosServ.getMethod(uri);
  };
  layDanhSachVeTheoPhong = (id) => {
    const uri = `/api/tickets/by-room?roomId=${id}`;
    return AxiosServ.getMethod(uri);
  };
}

const httpTicketMana = new HttpRequestService();

export default httpTicketMana;
