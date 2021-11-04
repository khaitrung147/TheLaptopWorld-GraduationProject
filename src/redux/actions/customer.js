import {
  GET_LIST_CUSTOMER,
  GET_LIST_CUSTOMER_SUCCESS,
} from "../constants/customer";

export const getListCustomer = (payload) => {
  return {
    type: GET_LIST_CUSTOMER,
    payload,
  };
};

export const getListCustomerSuccess = (payload) => {
  return {
    type: GET_LIST_CUSTOMER_SUCCESS,
    payload,
  };
};
