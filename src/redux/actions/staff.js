import {
  GET_LIST_STAFF,
  GET_LIST_STAFF_SUCCESS,
  LOGIN_STAFF,
  LOGIN_STAFF_SUCCESS,
  REGISTER_STAFF,
  REGISTER_STAFF_SUCCESS
} from "../constants/staff";

export const getListStaff = (payload) => {
  return {
    type: GET_LIST_STAFF,
    payload,
  };
};

export const getListStaffSuccess = (payload) => {
  return {
    type: GET_LIST_STAFF_SUCCESS,
    payload,
  };
};

export const loginStaff = (body) => {
  return {
    type: LOGIN_STAFF,
    payload: body,
  };
};

export const loginStaffSuccess = (payload) => {
  return {
    type: LOGIN_STAFF_SUCCESS,
    payload,
  };
};

export const registerStaff = (body) => {
  return {
    type: REGISTER_STAFF,
    payload: body,
  };
};

export const registerStaffSuccess = (payload) => {
  return {
    type: REGISTER_STAFF_SUCCESS,
    payload,
  };
};
