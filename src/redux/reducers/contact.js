import {
  GET_LIST_CONTACT,
  GET_LIST_CONTACT_SUCCESS,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
} from "../constants/contact";

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_CONTACT_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        contact: data,
        load: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        updateload: true,
        status: false,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        updateload: false,
        status: true,
      };
    default:
      return state;
  }
};

export default contactReducer;
