import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import { notification } from "antd";
import { getListStaff, loginStaff, registerStaff } from "../../api/staff";
import {
  getListStaffSuccess,
  loginStaffSuccess,
  registerStaffSuccess,
} from "../actions/staff";

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

function* postStaffSaga(action) {
  try {
    const data = yield call(registerStaff, action.payload);
    if (data.status === 200) {
      notification["success"]({
        message: "Đăng kí thành công",
        description: "Đã đăng kí thành công tài khoản.",
      });
      yield put(registerStaffSuccess(data));
    }
  } catch (error) {
    notification["error"]({
      message: "Đăng kí thất bại",
      description: "Đã xảy ra vấn đề gì đó, vui lòng thử lại.",
    });
    console.log("error :>> ", error);
  }
}

function* todoGet() {
  yield takeLatest("GET_LIST_STAFF", getListStaffSaga);
}

function* todoLogin() {
  yield takeLatest("LOGIN_STAFF", loginStaffSaga);
}

function* todoRegister() {
  yield takeLatest("REGISTER_STAFF", postStaffSaga);
}

const rootSaga = [fork(todoGet), fork(todoLogin), fork(todoRegister)];

export default function* staffSaga() {
  yield all([...rootSaga]);
}
