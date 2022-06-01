import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import provinceReducer from "./provinceReducer";
import userReducer from "./userReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  userReducer,
  locationReducer,
  provinceReducer,
  roomReducer,
});

export default rootReducer;
