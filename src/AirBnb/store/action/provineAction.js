import _ from "lodash";
import { httpServ } from "../../Service/Service";
import {
  SET_DANH_SACH_TINH,
  SET_DANH_SACH_TINH_2,
} from "../constant/provinceConstant";

export const getProvinceAction = () => {
  return (dispatch) => {
    dispatch({
      type: SET_DANH_SACH_TINH,
      payload: [],
    });
  };
};

export const getProvinceAction2 = () => {
  return (dispatch) => {
    httpServ.httpLocationMana
      .layDanhSachViTri()
      .then((res) => {
        // console.log(res);
        let dsTinh = res.data.map((item) => {
          return item.province;
        });
        let dsTinh2 = _.uniq(dsTinh);
        dispatch({
          type: SET_DANH_SACH_TINH_2,
          payload: dsTinh2,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
