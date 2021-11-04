import {
  GET_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_SUCCESS,
} from "../constants/product";

const detailProductReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        load: true,
      };
    case GET_DETAIL_PRODUCT_SUCCESS:
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

export default detailProductReducer;
