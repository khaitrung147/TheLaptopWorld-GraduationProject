import { SEARCH_PRODUCT, SEARCH_PRODUCT_SUCCESS } from "../constants/product";

const searchProductReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return {
        ...state,
        load: true,
      };
    case SEARCH_PRODUCT_SUCCESS:
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

export default searchProductReducer;
