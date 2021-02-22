import initialState from "./initialState";
import {
  GET_LOGIN_INIT,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  RESET_LOGIN,
} from "../../actions/login/types";

export default function login(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LOGIN:
      localStorage.clear();
      return {
        ...state,
        data: false,
        loading: false,
        status: 0,
      };
    case GET_LOGIN_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGIN_SUCCESS:
      const auth = action.payload.status === 200 ? true : false;
      if (auth) {
        localStorage.setItem("auth", auth);
        localStorage.setItem("names", action.payload.data.names);
      }
      return {
        ...state,
        data: auth,
        loading: false,
        status: action.payload.status,
      };
    case GET_LOGIN_FAILURE:
      return {
        ...state,
        data: true,
        loading: false,
        status: 501,
      };

    default:
      return state;
  }
}
