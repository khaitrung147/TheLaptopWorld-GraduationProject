import { combineReducers } from "redux";
import catalogReducer from "./catalog";

const rootReducer = combineReducers({
  catalogs: catalogReducer,
});

export default rootReducer;
