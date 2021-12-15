import {
  GET_LIST_STAFF,
  GET_LIST_STAFF_SUCCESS,
  REGISTER_STAFF,
  REGISTER_STAFF_SUCCESS
} from "../constants/staff";

const staffReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_STAFF:
      return {
        ...state,
        load: true,
      };

    case GET_LIST_STAFF_SUCCESS:
      return {
        ...state,
        data: action.payload,
        load: false,
      };
    case REGISTER_STAFF:
      return {
        ...state,
        registerData: [],
        registerLoad: true,
      };

    case REGISTER_STAFF_SUCCESS:
      return {
        ...state,
        registerData: action.payload,
        registerLoad: false,
      };

    default:
      return state;
  }
};

export default staffReducer;
