import AxiosServ from "../axios.service";

class HttpRequestService {
  constructor() {}
  taoViTri = (data) => {
    const uri = "/api/locations";

    return AxiosServ.postMethod(uri, data);
  };
  xoaViTri = (id) => {
    const uri = `/api/locations/${id}`;

    return AxiosServ.deleteMothod(uri);
  };
  layDanhSachViTri = () => {
    const uri = "/api/locations";

    return AxiosServ.getMethod(uri);
  };
  layThongTinChiTietViTri = (id) => {
    const uri = `/api/locations/${id}`;

    return AxiosServ.getMethod(uri);
  };
  capNhatThongTinViTri = (data, id) => {
    const uri = `/api/locations/${id}`;

    return AxiosServ.putMethod(uri, data);
  };
  capNhatAnhViTri = (data, id) => {
    const uri = `/api/locations/upload-images/${id}`;

    return AxiosServ.postMethod(uri, data);
  };
  layDanhSachViTriTheoDanhGia = (value) => {
    const uri = `/api/locations/by-valueate?valueate=${value}`;

    return AxiosServ.postMethod(uri);
  };
}
const httpLocationMana = new HttpRequestService();

export default httpLocationMana;
