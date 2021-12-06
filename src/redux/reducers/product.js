import {
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_SUCCESS,
} from "../constants/product";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        data: [],
        load: true,
      };
    case GET_LIST_PRODUCT_SUCCESS:
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

export default productReducer;
