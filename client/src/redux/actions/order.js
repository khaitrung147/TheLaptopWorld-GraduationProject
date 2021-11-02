import {
  GET_LIST_ORDER,
  GET_LIST_ORDER_SUCCESS,
} from "../constants/order";

export const getListOrder = (payload) => {
  return {
    type: GET_LIST_ORDER,
    payload,
  };
};

export const getListOrderSuccess = (payload) => {
  return {
    type: GET_LIST_ORDER_SUCCESS,
    payload,
  };
};
