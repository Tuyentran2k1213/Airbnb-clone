import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import provinceReducer from "./provinceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userReducer,
  locationReducer,
  provinceReducer,
});

export default rootReducer;
