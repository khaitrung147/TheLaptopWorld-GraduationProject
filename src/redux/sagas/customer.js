import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import { getListCustomer, loginCustomer } from "../../api/customer";
import {
  getListCustomerSuccess,
  loginCustomerSuccess,
} from "../actions/customer";

function* getListCustomerSaga(action) {
  try {
    const data = yield call(getListCustomer);
    yield put(getListCustomerSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* loginCustomerSaga(action) {
  try {
    const data = yield call(loginCustomer, action.payload);
    if (data.status === 200) {
      yield put(loginCustomerSuccess(data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* todoGet() {
  yield takeLatest("GET_LIST_CUSTOMER", getListCustomerSaga);
}

function* todoLogin() {
  yield takeLatest("LOGIN_CUSTOMER", loginCustomerSaga);
}

const rootSaga = [fork(todoGet), fork(todoLogin)];

export default function* customerSaga() {
  yield all([...rootSaga]);
}
