import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import {
  getListCustomer,
  loginCustomer,
  registerCustomer,
} from "../../api/customer";
import {
  getListCustomerSuccess,
  loginCustomerSuccess,
  registerCustomerSuccess,
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

function* registerCustomerSaga(action) {
  try {
    const data = yield call(registerCustomer, action.payload);

    if (data.status === 200) {
      yield put(registerCustomerSuccess(data));
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

function* todoRegister() {
  yield takeLatest("REGISTER_CUSTOMER", registerCustomerSaga);
}

const rootSaga = [fork(todoGet), fork(todoLogin), fork(todoRegister)];

export default function* customerSaga() {
  yield all([...rootSaga]);
}
