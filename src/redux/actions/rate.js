import {
  GET_LIST_RATEID,
  GET_LIST_RATEID_SUCCESS,
  POST_RATE,
  POST_RATE_SUCCESS,
} from "../constants/rate";

export const getListRate = (id) => {
  return {
    type: GET_LIST_RATEID,
    payload: { id },
  };
};

export const getListRateSuccess = (payload) => {
  return {
    type: GET_LIST_RATEID_SUCCESS,
    payload,
  };
};

export const postRate = (body) => {
  return {
    type: POST_RATE,
    payload: body,
  };
};

export const postRateSuccess = (payload) => {
  return {
    type: POST_RATE_SUCCESS,
    payload,
  };
};
