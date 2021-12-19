import {
  GET_LIST_CONTACT,
  GET_LIST_CONTACT_SUCCESS,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
} from "../constants/contact";

export const getListContact = (payload) => {
  return {
    type: GET_LIST_CONTACT,
    payload,
  };
};

export const getListContactSuccess = (payload) => {
  return {
    type: GET_LIST_CONTACT_SUCCESS,
    payload,
  };
};

export const updateContact = (body) => {
  return {
    type: UPDATE_CONTACT,
    payload: body,
  };
};

export const updateContactSuccess = (payload) => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload,
  };
};
