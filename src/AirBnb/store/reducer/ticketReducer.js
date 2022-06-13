import { SET_DANH_SACH_VE_THEO_NGUOI_DUNG } from "../constant/ticketConstant";

let innitialState = {
  dsVeTheoUser: [],
};

const ticketByUserReducer = (state = innitialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_VE_THEO_NGUOI_DUNG: {
      return { ...state, dsVeTheoUser: action.payload };
    }
    default:
      return { ...state };
  }
};

export default ticketByUserReducer;
