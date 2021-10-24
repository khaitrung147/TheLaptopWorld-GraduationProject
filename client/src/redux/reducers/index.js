import { combineReducers } from "redux";
import catalogReducer from "./catalog";
import productReducer from "./product";
import detailProductReducer from "./detailProduct";
import rateReducer from "./rate";
import customerReducer from "./customer";
const rootReducer = combineReducers({
  catalogs: catalogReducer,
  products: productReducer,
  detailProduct: detailProductReducer,
  rate: rateReducer,
  customer: customerReducer,
});

export default rootReducer;
