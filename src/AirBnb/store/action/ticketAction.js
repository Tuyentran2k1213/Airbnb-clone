import { httpServ } from "../../Service/Service";
import { SET_DANH_SACH_VE_THEO_NGUOI_DUNG } from "../constant/ticketConstant";

export const getTicketByUserAction = (id) => {
  return (dispatch) => {
    httpServ.httpTicketMana
      .layDanhSachVeTheoNguoiDung(id)
      .then((res) => {
        // console.log(res);
        dispatch({
            type: SET_DANH_SACH_VE_THEO_NGUOI_DUNG,
            payload: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
