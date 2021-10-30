import {
  GET_LIST_PRODUCT_COMPANY,
  GET_LIST_PRODUCT_COMPANY_SUCCESS,
} from "../constants/productCompany";

export const getListProductCompany = (payload) => {
  return {
    type: GET_LIST_PRODUCT_COMPANY,
    payload,
  };
};

export const getListProductCompanySuccess = (payload) => {
  return {
    type: GET_LIST_PRODUCT_COMPANY_SUCCESS,
    payload,
  };
};
