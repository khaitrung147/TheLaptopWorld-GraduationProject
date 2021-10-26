import { call, put, takeLatest } from "redux-saga/effects";
import { getListRate } from "../../api/rate";
import { getListRateSuccess } from "../actions/rate";

function* getListRateIdSaga(action) {
  try {
    const data = yield call(getListRate, action.payload.id);
    yield put(getListRateSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* rateSaga() {
  yield takeLatest("GET_LIST_RATEID", getListRateIdSaga);
}

export default rateSaga;
