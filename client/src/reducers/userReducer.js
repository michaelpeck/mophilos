import { GET_PROFILE, UPDATE_PROFILE } from '../actions/types';

const isEmpty = require("is-empty");

const initialState = {
  demographic: {},
  education: {},
  employment: {},
  background: {},
  interests: {},
  goals: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
