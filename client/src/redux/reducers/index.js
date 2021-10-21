import { combineReducers } from "redux";
import catalogReducer from "./catalog";
import productReducer from "./product";
import detailProductReducer from "./detailProduct";

const rootReducer = combineReducers({
  catalogs: catalogReducer,
  products: productReducer,
  detailProduct: detailProductReducer,
});

export default rootReducer;
