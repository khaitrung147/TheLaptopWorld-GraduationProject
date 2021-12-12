import {
  GET_LIST_ORDERID,
  GET_LIST_ORDERID_SUCCESS,
  POST_ORDER, 
  POST_ORDER_SUCCESS,
} from "../constants/order";

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

export const postOrder = (body) => {
  return {
    type: POST_ORDER,
    payload: body,
  };
};

export const postOrderSuccess = (payload) => {
  return {
    type: POST_ORDER_SUCCESS,
    payload,
  };
};
