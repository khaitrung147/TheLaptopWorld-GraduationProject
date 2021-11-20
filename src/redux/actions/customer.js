import {
  GET_LIST_CUSTOMER,
  GET_LIST_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER,
  LOGIN_CUSTOMER_SUCCESS,
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

export const loginCustomer = (body) => {
  return {
    type: LOGIN_CUSTOMER,
    payload: body,
  };
};

export const loginCustomerSuccess = (payload) => {
  return {
    type: LOGIN_CUSTOMER_SUCCESS,
    payload,
  };
};
