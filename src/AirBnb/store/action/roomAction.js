import { httpServ } from "../../Service/Service";
import { LAY_CHI_TIET_PHONG, SET_DANH_SACH_PHONG } from "../constant/roomConstant";

export const getRoomAction = () => {
  return (dispatch) => {
    httpServ.httpRoomsMana
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
    httpServ.httpRoomsMana
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
