import { GET_LIST_CATALOG, GET_LIST_CATALOG_SUCCESS } from "../constants/catalog";

export const getListCatalog = (payload) => {
  return {
    type: GET_LIST_CATALOG,
    payload,
  };
};

export const getListCatalogSuccess = (payload) => {
  return {
    type: GET_LIST_CATALOG_SUCCESS,
    payload,
  };
};
