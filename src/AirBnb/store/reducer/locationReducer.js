import { SET_DANH_SACH_VI_TRI } from "../constant/locationConstant";

let innitialState = {
  dsViTri: [],
};

const locationReducer = (state = innitialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_VI_TRI: {
      return { ...state, dsViTri: action.payload };
    }
    default:
      return { ...state };
  }
};

export default locationReducer;
