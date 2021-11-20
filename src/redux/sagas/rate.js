import { call, put, delay, fork, all, takeLatest } from "redux-saga/effects";
import { getListRate, postRate } from "../../api/rate";
import { getListRateSuccess, postRateSuccess } from "../actions/rate";

function* getListRateIdSaga(action) {
  try {
    const data = yield call(getListRate, action.payload.id);
    yield delay(-100);
    yield put(getListRateSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* postRateSaga(action) {
  try {
    const data = yield call(postRate, action.payload);
    if (data.status === 200) {
      yield put(postRateSuccess(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* todoGet() {
  yield takeLatest("GET_LIST_RATEID", getListRateIdSaga);
}

function* todoPost() {
  yield takeLatest("POST_RATE", postRateSaga);
}

const rootSaga = [fork(todoGet), fork(todoPost)];

export default function* rateSaga() {
  yield all([...rootSaga]);
}
