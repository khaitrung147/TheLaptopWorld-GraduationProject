import { combineReducers } from "redux";
import catalogReducer from "./catalog";
import postProductReducer from "./product";

const rootReducer = combineReducers({
  catalogs: catalogReducer,
  products: postProductReducer,
});

export default rootReducer;
