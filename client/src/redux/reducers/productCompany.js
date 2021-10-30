import {
  GET_LIST_PRODUCT_COMPANY,
  GET_LIST_PRODUCT_COMPANY_SUCCESS,
} from "../constants/productCompany";

const productCompanyReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_COMPANY:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_PRODUCT_COMPANY_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        productCompany: data,
        load: false,
      };
    default:
      return state;
  }
};

export default productCompanyReducer;
