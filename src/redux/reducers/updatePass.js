import { PASS_CUSTOMER, PASS_CUSTOMER_SUCCESS } from "../constants/customer";

const passCustomerReducer = (state = [], action) => {
  switch (action.type) {
    case PASS_CUSTOMER:
      return {
        ...state,
        load: true,
      };
    case PASS_CUSTOMER_SUCCESS:
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

export default passCustomerReducer;
