import {
  GET_HOME_INIT,
  GET_HOME_SUCCESS,
  GET_HOME_FAILURE,
  RESET_HOME,
} from "./types";
import API from "./api";

/* Actions Creators */

export function resetHome() {
  return {
    type: RESET_HOME,
  };
}

/* Get Home (Async) */

function getHomeSuccess(data) {
  return {
    type: GET_HOME_SUCCESS,
    payload: data,
  };
}

function getHomeFailure(error) {
  return {
    type: GET_HOME_FAILURE,
    payload: error,
  };
}

function getHomeInit() {
  return {
    type: GET_HOME_INIT,
  };
}

export function getHome(data) {
  return async (dispatch) => {
    dispatch(getHomeInit());
    try {
      const resp = await API.data.getHome(data);
      return dispatch(getHomeSuccess(resp));
    } catch (error) {
      return dispatch(getHomeFailure(error));
    }
  };
}
