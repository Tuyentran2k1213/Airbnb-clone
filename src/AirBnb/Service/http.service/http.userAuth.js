import AxiosServ from "../axios.service";

class HttpRequestService {
  constructor() {}

  dangNhap = (data) => {
    const uri = "/api/auth/login";

    return AxiosServ.postMethod(uri, data);
  };
  dangKy = (data) => {
    const uri = "/api/auth/register";

    return AxiosServ.postMethod(uri, data);
  };
}
const httpUserAuth = new HttpRequestService();

export default httpUserAuth;
