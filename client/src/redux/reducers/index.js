import { combineReducers } from "redux";
import catalogReducer from "./catalog";
import productReducer from "./product";
import detailProductReducer from "./detailProduct";
import rateReducer from "./rate";
import customerReducer from "./customer";
import commentReducer from "./comment";
import staffReducer from "./staff";
import productCompanyReducer from "./productCompany";
import orderReducer from "./order";
const rootReducer = combineReducers({
  catalogs: catalogReducer,
  products: productReducer,
  detailProduct: detailProductReducer,
  rate: rateReducer,
  customer: customerReducer,
  comment: commentReducer,
  staff: staffReducer,
  productCompany: productCompanyReducer,
  order: orderReducer,
});

export default rootReducer;
