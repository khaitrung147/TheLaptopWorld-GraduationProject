import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import { getListStaff, loginStaff } from "../../api/staff";
import { getListStaffSuccess, loginStaffSuccess } from "../actions/staff";

function* getListStaffSaga(action) {
  try {
    const data = yield call(getListStaff);
    yield put(getListStaffSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* loginStaffSaga(action) {
  try {
    const data = yield call(loginStaff, action.payload);
    if (data.status === 200) {
      yield put(loginStaffSuccess(data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* todoGet() {
  yield takeLatest("GET_LIST_STAFF", getListStaffSaga);
}

function* todoLogin() {
  yield takeLatest("LOGIN_STAFF", loginStaffSaga);
}

const rootSaga = [fork(todoGet), fork(todoLogin)];

export default function* staffSaga() {
  yield all([...rootSaga]);
}
