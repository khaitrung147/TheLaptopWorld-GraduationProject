import { call, put, delay, fork, all, takeEvery, takeLatest } from "redux-saga/effects";
import { getListOrder, postOrder } from "../../api/order";
import { getListOrderSuccess, postOrderSuccess } from "../actions/order";

function* getListOrderIdSaga(action) {
  try {
    const data = yield call(getListOrder, action.payload.id);
    yield delay(-100);
    yield put(getListOrderSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* postOrderSaga(action) {
  try {
    const data = yield call(postOrder, action.payload);
    if (data.status === 200) {
      yield put(postOrderSuccess(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* todoGet() {
  yield takeEvery("GET_LIST_ORDERID", getListOrderIdSaga);
}

function* todoPost() {
  yield takeLatest("POST_COMMENT", postOrderSaga);
}

const rootSaga = [fork(todoGet), fork(todoPost)];

export default function* orderSaga() {
  yield all([...rootSaga]);
}
