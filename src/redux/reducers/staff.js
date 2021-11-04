import { GET_LIST_STAFF, GET_LIST_STAFF_SUCCESS } from "../constants/staff";

const staffReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_STAFF:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_STAFF_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
        load: false,
      };
    default:
      return state;
  }
};

export default staffReducer;
