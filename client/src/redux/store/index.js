import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import catalogSaga from "../sagas/catalog";
import productSaga from "../sagas/product";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(catalogSaga);
sagaMiddleware.run(productSaga);

export default store;
