import initialState from "./initialState";
import {
  GET_HOME_INIT,
  GET_HOME_SUCCESS,
  GET_HOME_FAILURE,
  RESET_HOME,
} from "../../actions/home/types";

export default function home(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_HOME:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case GET_HOME_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_HOME_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case GET_HOME_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 401,
      };

    default:
      return state;
  }
}
