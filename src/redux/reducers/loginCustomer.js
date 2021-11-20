import { LOGIN_CUSTOMER, LOGIN_CUSTOMER_SUCCESS } from "../constants/customer";

const loginCustomerReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_CUSTOMER:
      return {
        ...state,
        data: [],
        load: true,
      };

    case LOGIN_CUSTOMER_SUCCESS:
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

export default loginCustomerReducer;
