import { httpServ } from "../../Service/Service";
import { SET_DANH_SACH_VI_TRI } from "../constant/locationConstant";


export const getLocationAction = () => {
  return (dispatch) => {
    httpServ.httpLocationMana
      .layDanhSachViTri()
      .then((res) => {
        // console.log(res);
        dispatch({
          type: SET_DANH_SACH_VI_TRI,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
