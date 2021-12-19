import { call, put, delay, fork, all, takeEvery, takeLatest } from "redux-saga/effects";
import { getDetailOrder, postOrder, getListOrder, patchOrder } from "../../api/order";
import { getDetailOrderSuccess, postOrderSuccess, getListOrderSuccess, updateOrderSuccess } from "../actions/order";

function* getListOrderSaga(action) {
  try {
    const data = yield call(getListOrder);
    yield put(getListOrderSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* getDetailOrderSaga(action) {
  try {
    const data = yield call(getDetailOrder, action.payload.id);
    yield delay(-100);
    yield put(getDetailOrderSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* postOrderSaga(action) {
  try {
    const data = yield call(postOrder, action.payload);
    if (data.status === 200) {
      localStorage.removeItem('cart');
      yield put(postOrderSuccess(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* patchOrderSaga(action) {
  try {
    const data = yield call(patchOrder, action.payload);
    if (data.status === 200) {
      yield put(updateOrderSuccess(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* todoGet() {
  yield takeEvery("GET_LIST_ORDER", getListOrderSaga);
  yield takeEvery("GET_DETAIL_ORDER", getDetailOrderSaga);
}

function* todoPost() {
  yield takeLatest("POST_ORDER", postOrderSaga);
  yield takeLatest("UPDATE_ORDER", patchOrderSaga);
}

const rootSaga = [fork(todoGet), fork(todoPost)];

export default function* orderSaga() {
  yield all([...rootSaga]);
}
