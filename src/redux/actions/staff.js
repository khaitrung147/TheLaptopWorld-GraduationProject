import { GET_LIST_STAFF, GET_LIST_STAFF_SUCCESS } from "../constants/staff";

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
