import {
  GET_LIST_CATALOG,
  GET_LIST_CATALOG_SUCCESS,
} from "../constants/catalog";

const catalogReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_CATALOG:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_CATALOG_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        catalogs: data,
        load: false,
      };
    default:
      return state;
  }
};

export default catalogReducer;
