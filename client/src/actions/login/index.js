import {
  GET_LOGIN_INIT,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  RESET_LOGIN,
} from "./types";
import API from "./api";

/* Clean login Sync */

export function resetLogin() {
  return {
    type: RESET_LOGIN,
  };
}

/* Get Login (Async) */

function getLoginSuccess(data) {
  return {
    type: GET_LOGIN_SUCCESS,
    payload: data,
  };
}

function getLoginFailure(error) {
  return {
    type: GET_LOGIN_FAILURE,
    payload: error,
  };
}

function getLoginInit() {
  return {
    type: GET_LOGIN_INIT,
  };
}

export function getLogin(data) {
  return async (dispatch) => {
    dispatch(getLoginInit());
    try {
      const resp = await API.data.getLogin(data);
      return dispatch(getLoginSuccess(resp));
    } catch (error) {
      return dispatch(getLoginFailure(error));
    }
  };
}
