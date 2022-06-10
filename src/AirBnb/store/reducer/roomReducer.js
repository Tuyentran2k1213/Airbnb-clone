import { SET_DANH_SACH_PHONG, LAY_CHI_TIET_PHONG } from "../constant/roomConstant";

let initialState = {
  dsPhong: [],
  chitietPhong: null,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHONG: { 
      return { ...state, dsPhong: action.payload };
    }
    case LAY_CHI_TIET_PHONG: {
      return { ...state, chitietPhong: action.payload };
    }
    default:
      return { ...state };
  }
};

export default roomReducer;
