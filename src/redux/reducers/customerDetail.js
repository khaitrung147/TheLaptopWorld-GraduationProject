import { GET_CUSTOMER, GET_CUSTOMER_SUCCESS } from "../constants/customer";

const customerDetailReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...state,
        load: true,
      };
    case GET_CUSTOMER_SUCCESS:
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

export default customerDetailReducer;
