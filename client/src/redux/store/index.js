import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import catalogSaga from "../sagas/catalog";
import customerSaga from "../sagas/customer";
import productSaga from "../sagas/product";
import rateSaga from "../sagas/rate";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(catalogSaga);
sagaMiddleware.run(productSaga);
sagaMiddleware.run(rateSaga);
sagaMiddleware.run(customerSaga);
export default store;
