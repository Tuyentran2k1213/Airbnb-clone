import { Action } from "history";
import { SET_DANH_SACH_TINH } from "../constant/provinceConstant";

export const getProvinceAction = () => {
  return (dispatch) => {
    dispatch({
      type: SET_DANH_SACH_TINH,
      payload,
    });
  };
};
