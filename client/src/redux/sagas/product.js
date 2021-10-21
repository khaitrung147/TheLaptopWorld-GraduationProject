import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getListProduct, getDetailProduct } from "../../api/product";
import { getListProductSuccess, getDetailProductSuccess } from "../actions/product";

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

function* productSaga() {
  yield takeLatest("GET_LIST_PRODUCT", getListProductSaga);
  yield takeLatest("GET_DETAIL_PRODUCT", getDetailProductSaga);
}

export default productSaga;
