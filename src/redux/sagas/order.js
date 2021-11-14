import { call, put, delay, fork, all, takeEvery } from "redux-saga/effects";
import { getListOrder } from "../../api/order";
import { getListOrderSuccess } from "../actions/order";

function* getListOrderIdSaga(action) {
  try {
    const data = yield call(getListOrder, action.payload.id);
    yield delay(-100);
    yield put(getListOrderSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* todoGet() {
  yield takeEvery("GET_LIST_ORDERID", getListOrderIdSaga);
}

const rootSaga = [fork(todoGet)];

export default function* orderSaga() {
  yield all([...rootSaga]);
}
