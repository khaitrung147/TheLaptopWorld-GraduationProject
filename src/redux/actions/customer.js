import {
  GET_LIST_CUSTOMER,
  GET_LIST_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER,
  LOGIN_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER,
  GET_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
  INFO_CUSTOMER,
  INFO_CUSTOMER_SUCCESS,
  PASS_CUSTOMER,
  PASS_CUSTOMER_SUCCESS,
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

export const getCustomer = (id) => {
  return {
    type: GET_CUSTOMER,
    payload: id,
  };
};

export const getCustomerSuccess = (payload) => {
  return {
    type: GET_CUSTOMER_SUCCESS,
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

export const registerCustomer = (body) => {
  return {
    type: REGISTER_CUSTOMER,
    payload: body,
  };
};

export const registerCustomerSuccess = (payload) => {
  return {
    type: REGISTER_CUSTOMER_SUCCESS,
    payload,
  };
};

export const infoCustomer = (body) => {
  return {
    type: INFO_CUSTOMER,
    payload: body,
  };
};

export const infoCustomerSuccess = (payload) => {
  return {
    type: INFO_CUSTOMER_SUCCESS,
    payload,
  };
};

export const passCustomer = (body) => {
  return {
    type: PASS_CUSTOMER,
    payload: body,
  };
};

export const passCustomerSuccess = (payload) => {
  return {
    type: PASS_CUSTOMER_SUCCESS,
    payload,
  };
};
