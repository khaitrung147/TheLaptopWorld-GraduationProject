import { GET_LIST_RATEID, GET_LIST_RATEID_SUCCESS } from "../constants/rate";

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
