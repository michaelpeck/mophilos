import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';


export default combineReducers({
  auth: authReducer,
  user: userReducer,
  errors: errorReducer
});
