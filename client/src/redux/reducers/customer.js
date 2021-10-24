import {
  GET_LIST_CUSTOMER,
  GET_LIST_CUSTOMER_SUCCESS,
} from "../constants/customer";

const customerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_CUSTOMER:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_CUSTOMER_SUCCESS:
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

export default customerReducer;
