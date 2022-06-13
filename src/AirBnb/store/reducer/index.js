import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import provinceReducer from "./provinceReducer";
import userReducer from "./userReducer";
import roomReducer from "./roomReducer";
import ticketByUserReducer from "./ticketReducer";

const rootReducer = combineReducers({
  userReducer,
  locationReducer,
  provinceReducer,
  roomReducer,
  ticketByUserReducer,
});

export default rootReducer;
