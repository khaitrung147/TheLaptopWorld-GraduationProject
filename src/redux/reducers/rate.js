import {
  GET_LIST_RATEID,
  GET_LIST_RATEID_SUCCESS,
  POST_RATE,
  POST_RATE_SUCCESS,
} from "../constants/rate";

const rateReducer = (state = [], action) => {
  switch (action.type) {
    case POST_RATE:
      return {
        ...state,
        postload: true,
        status: false,
      };
    case GET_LIST_RATEID:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_RATEID_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
        load: false,
      };
    case POST_RATE_SUCCESS:
      return {
        ...state,
        postload: false,
        status: true,
      };
    default:
      return state;
  }
};

export default rateReducer;
