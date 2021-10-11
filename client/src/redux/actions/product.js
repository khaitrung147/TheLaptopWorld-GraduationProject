import {
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_SUCCESS,
} from "../constants/product";

export const getListProduct = (payload) => {
  return {
    type: GET_LIST_PRODUCT,
    payload,
  };
};

export const getListProductSuccess = (payload) => {
  return {
    type: GET_LIST_PRODUCT_SUCCESS,
    payload,
  };
};
