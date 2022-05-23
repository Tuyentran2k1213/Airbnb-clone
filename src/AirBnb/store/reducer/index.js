import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    userReducer,
    locationReducer
})

export default rootReducer;