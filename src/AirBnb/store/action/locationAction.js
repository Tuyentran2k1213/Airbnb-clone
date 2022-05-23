import { useDispatch } from "react-redux";
import httpLocationMana from "../../Service/http.service/http.locationMana";
import { SET_DANH_SACH_VI_TRI } from "../constant/locationConstant";


export const getLocationAction = () => {
  return (dispatch) => {
    httpLocationMana
      .layDanhSachViTri()
      .then((res) => {
        dispatch({
          type: SET_DANH_SACH_VI_TRI,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
