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
import loginStaffReducer from "./loginStaff";
import loginCustomerReducer from "./loginCustomer";
import registerCustomerReducer from "./registerCustomer";
import searchProductReducer from "./searchProduct";
import filterProductReducer from "./filterProduct";
import customerDetailReducer from "./customerDetail";
import infoCustomerReducer from "./updateInfo";
import passCustomerReducer from "./updatePass";
import contactReducer from "./contact";
const rootReducer = combineReducers({
  catalogs: catalogReducer,
  products: productReducer,
  detailProduct: detailProductReducer,
  rate: rateReducer,
  customer: customerReducer,
  customerDetail: customerDetailReducer,
  updateInfo: infoCustomerReducer,
  updatePass: passCustomerReducer,
  comment: commentReducer,
  staff: staffReducer,
  productCompany: productCompanyReducer,
  order: orderReducer,
  loginStaff: loginStaffReducer,
  loginCustomer: loginCustomerReducer,
  registerCustomer: registerCustomerReducer,
  searchProduct: searchProductReducer,
  filterProduct: filterProductReducer,
  contact: contactReducer,
});

export default rootReducer;
