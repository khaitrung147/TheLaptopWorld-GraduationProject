import {
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER,
} from "../constants/customer";

const registerCustomerReducer = (state = [], action) => {
  switch (action.type) {
    case REGISTER_CUSTOMER:
      return {
        ...state,
        data: [],
        load: true,
      };

    case REGISTER_CUSTOMER_SUCCESS:
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

export default registerCustomerReducer;
