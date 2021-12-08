import { GET_LIST_ORDERID, GET_LIST_ORDERID_SUCCESS } from "../constants/order";

export const getListOrder = (id) => {
  return {
    type: GET_LIST_ORDERID,
    payload: { id },
  };
};

export const getListOrderSuccess = (payload) => {
  return {
    type: GET_LIST_ORDERID_SUCCESS,
    payload,
  };
};
