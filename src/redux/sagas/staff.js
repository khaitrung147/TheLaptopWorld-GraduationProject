import { call, put, takeLatest } from "redux-saga/effects";
import { getListStaff } from "../../api/staff";
import { getListStaffSuccess } from "../actions/staff";

function* getListStaffSaga(action) {
  try {
    const data = yield call(getListStaff);
    yield put(getListStaffSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* staffSaga() {
  yield takeLatest("GET_LIST_STAFF", getListStaffSaga);
}

export default staffSaga;
