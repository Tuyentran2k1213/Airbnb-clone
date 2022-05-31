import { SET_DANH_SACH_PHONG } from "../constant/roomConstant";

let initialState = {
  dsPhong: [],
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHONG: { 
      return { ...state, dsPhong: action.payload };
    }
    default:
      return { ...state };
  }
};

export default roomReducer;
