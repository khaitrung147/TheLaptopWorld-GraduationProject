import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getProduct } from "../../api/product";
import { getListProductSuccess } from "../actions/product";

function* getListProductSaga(action) {
  try {
    const data = yield call(getProduct);
    yield put(getListProductSuccess(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
function* productSaga() {
  yield takeLatest("GET_LIST_PRODUCT", getListProductSaga);
}

export default productSaga;
