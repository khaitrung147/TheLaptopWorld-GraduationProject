import { INFO_CUSTOMER, INFO_CUSTOMER_SUCCESS } from "../constants/customer";

const infoCustomerReducer = (state = [], action) => {
  switch (action.type) {
    case INFO_CUSTOMER:
      return {
        ...state,
        load: true,
      };
    case INFO_CUSTOMER_SUCCESS:
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

export default infoCustomerReducer;
