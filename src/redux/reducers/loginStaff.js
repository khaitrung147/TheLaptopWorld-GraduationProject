import { LOGIN_STAFF, LOGIN_STAFF_SUCCESS } from "../constants/staff";

const loginStaffReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_STAFF:
      return {
        ...state,
        data: [],
        load: true,
      };

    case LOGIN_STAFF_SUCCESS:
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

export default loginStaffReducer;
