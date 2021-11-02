import { call, put, takeLatest } from "redux-saga/effects";
import { getList } from "../../api/order";
import { getListOrderSuccess } from "../actions/order";

function* getListOrderSaga(action) {
  try {
    const data = yield call(getList);
    yield put(getListOrderSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* orderSaga() {
  yield takeLatest("GET_LIST_ORDER", getListOrderSaga);
}

export default orderSaga;
