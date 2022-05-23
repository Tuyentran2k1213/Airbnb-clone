import AxiosServ from "../axios.service";

class HttpRequestService {
  constructor() {}
  taoDanhGia = (data, id) => {
    const uri = `/api/reviews?roomId=${id}`;

    return AxiosServ.postMethod(uri, data);
  };
  layDanhSachDanhGia = (id) => {
    const uri = `/api/reviews/byRoom?roomId=${id}`;

    return AxiosServ.getMethod(uri);
  };
  xoaDanhGia = (data, id) => {
    const uri = `/api/reviews/${id}`;

    return AxiosServ.deleteMothod(uri, data);
  };
  layThongTinChiTietDanhGia = (data, id) => {
    const uri = `/api/reviews/${id}`;

    return AxiosServ.getMethod(uri, data);
  };
  capNhatThongTinDanhGia = (id) => {
    const uri = `/api/reviews/${id}`;

    return AxiosServ.putMethod(uri);
  };
}

const httpRatingMana = new HttpRequestService();

export default httpRatingMana;
