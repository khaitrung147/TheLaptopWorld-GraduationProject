import {
  GET_LIST_ORDER,
  GET_LIST_ORDER_SUCCESS,
  GET_DETAIL_ORDER,
  GET_DETAIL_ORDER_SUCCESS,
  POST_ORDER, 
  POST_ORDER_SUCCESS,
} from "../constants/order";

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_ORDER:
      return {
        ...state,
        loadOrderList: true,
      };
    case GET_LIST_ORDER_SUCCESS:
      return {
        ...state,
        OrderList: action.payload,
        loadOrderList: false,
      };
    case GET_DETAIL_ORDER:
      return {
        ...state,
        load: true,
      };
    case GET_DETAIL_ORDER_SUCCESS:
      return {
        ...state,
        data: action.payload,
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
