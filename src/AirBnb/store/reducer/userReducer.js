import { USER_LOGIN } from "../constant/userConstant";

const initialState = {
    userInfor: null,
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case USER_LOGIN:
            return { ...state, userInfor: { ...action.payload } };
        default:
            return {...state};
    }
}

export default userReducer;