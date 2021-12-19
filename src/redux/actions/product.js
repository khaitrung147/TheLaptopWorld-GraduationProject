import {
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_SUCCESS,
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  FILTER_PRODUCT,
  FILTER_PRODUCT_SUCCESS,
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

export const getDetailProduct = (key) => {
  return {
    type: GET_DETAIL_PRODUCT,
    payload: { key },
  };
};

export const getDetailProductSuccess = (payload) => {
  return {
    type: GET_DETAIL_PRODUCT_SUCCESS,
    payload,
  };
};

export const searchProduct = (key) => {
  return {
    type: SEARCH_PRODUCT,
    payload: { key },
  };
};

export const searchProductSuccess = (payload) => {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    payload,
  };
};

export const filterProduct = (key) => {
  return {
    type: FILTER_PRODUCT,
    payload: { key },
  };
};

export const filterProductSuccess = (payload) => {
  return {
    type: FILTER_PRODUCT_SUCCESS,
    payload,
  };
};
