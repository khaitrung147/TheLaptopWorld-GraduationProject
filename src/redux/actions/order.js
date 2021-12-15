import {
  GET_LIST_ORDER,
  GET_LIST_ORDER_SUCCESS,
  GET_DETAIL_ORDER,
  GET_DETAIL_ORDER_SUCCESS,
  POST_ORDER, 
  POST_ORDER_SUCCESS,
  UPDATE_ORDER,
  UPDATE_ORDER_SUCCESS,
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

export const getDetailOrder = (id) => {
  return {
    type: GET_DETAIL_ORDER,
    payload: { id },
  };
};

export const getDetailOrderSuccess = (payload) => {
  return {
    type: GET_DETAIL_ORDER_SUCCESS,
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

export const updateOrder = (body) => {
  return {
    type: UPDATE_ORDER,
    payload: body,
  };
};

export const updateOrderSuccess = (payload) => {
  return {
    type: UPDATE_ORDER_SUCCESS,
    payload,
  };
};

