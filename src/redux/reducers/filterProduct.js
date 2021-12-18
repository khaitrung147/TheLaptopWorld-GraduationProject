import { FILTER_PRODUCT, FILTER_PRODUCT_SUCCESS } from "../constants/product";

const filterProductReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_PRODUCT:
      return {
        ...state,
        load: true,
      };
    case FILTER_PRODUCT_SUCCESS:
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

export default filterProductReducer;
