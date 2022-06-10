import httpRoomsMana from "../../Service/http.service/http.roomsMana";
import { LAY_CHI_TIET_PHONG, SET_DANH_SACH_PHONG } from "../constant/roomConstant";

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

export const getDetailRoom = id => {
  return dispatch => {
    httpRoomsMana
      .layThongTinChiTietPhong(id)
      .then(res => {
        dispatch({
          type: LAY_CHI_TIET_PHONG,
          payload: {...res.data}
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
