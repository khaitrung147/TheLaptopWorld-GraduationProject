import {
  GET_LIST_ORDERID,
  GET_LIST_ORDERID_SUCCESS,
  POST_ORDER, 
  POST_ORDER_SUCCESS,
} from "../constants/order";

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_ORDERID:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_ORDERID_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
        load: false,
      };
    case POST_ORDER:
      return {
        ...state,
        postload: true,
        status: false,
      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        postload: false,
        status: true,
      };
    default:
      return state;
  }
};

export default orderReducer;
