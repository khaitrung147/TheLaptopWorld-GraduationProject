import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  getListProduct,
  getDetailProduct,
  searchProduct,
  filterProduct,
} from "../../api/product";
import {
  getListProductSuccess,
  getDetailProductSuccess,
  searchProductSuccess,
  filterProductSuccess,
} from "../actions/product";

function* getListProductSaga(action) {
  try {
    const data = yield call(getListProduct);

    yield put(getListProductSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* getDetailProductSaga(action) {
  try {
    const data = yield call(getDetailProduct, action.payload.key);
    yield put(getDetailProductSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* searchProductSaga(action) {
  try {
    const data = yield call(searchProduct, action.payload.key);
    yield put(searchProductSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* filterProductSaga(action) {
  try {
    const data = yield call(filterProduct, action.payload.key);
    yield put(filterProductSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* productSaga() {
  yield takeLatest("GET_LIST_PRODUCT", getListProductSaga);
  yield takeLatest("GET_DETAIL_PRODUCT", getDetailProductSaga);
  yield takeLatest("SEARCH_PRODUCT", searchProductSaga);
  yield takeLatest("FILTER_PRODUCT", filterProductSaga);
}

export default productSaga;
