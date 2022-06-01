import httpRoomsMana from "../../Service/http.service/http.roomsMana";
import { SET_DANH_SACH_PHONG } from "../constant/roomConstant";

export const getRoomAction = () => {
  return (dispatch) => {
    httpRoomsMana
      .layDanhSachPhong()
      .then((res) => {
        dispatch({
          type: SET_DANH_SACH_PHONG,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
