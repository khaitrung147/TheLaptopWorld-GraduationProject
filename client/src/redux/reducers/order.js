import {
  GET_LIST_ORDER,
  GET_LIST_ORDER_SUCCESS,
} from "../constants/order";

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_ORDER:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_ORDER_SUCCESS:
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

export default orderReducer;
