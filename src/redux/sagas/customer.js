import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import {
  getListCustomer,
  loginCustomer,
  registerCustomer,
  getCustomer,
  updateInfoCustomer,
  updatePassCustomer,
} from "../../api/customer";
import {
  getListCustomerSuccess,
  loginCustomerSuccess,
  registerCustomerSuccess,
  getCustomerSuccess,
  infoCustomerSuccess,
  passCustomerSuccess,
} from "../actions/customer";

function* getListCustomerSaga(action) {
  try {
    const data = yield call(getListCustomer);
    yield put(getListCustomerSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* getCustomerSaga(action) {
  try {
    const data = yield call(getCustomer, action.payload);
    yield put(getCustomerSuccess(data));
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

function* infoCustomerSaga(action) {
  try {
    const data = yield call(updateInfoCustomer, action.payload);

    if (data.status === 200) {
      yield put(infoCustomerSuccess(data));
    }
  } catch (error) {
    console.log(error);
  }
}
function* passCustomerSaga(action) {
  try {
    const data = yield call(updatePassCustomer, action.payload);

    if (data.status === 200) {
      yield put(passCustomerSuccess(data));
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

function* todoGetOne() {
  yield takeLatest("GET_CUSTOMER", getCustomerSaga);
}
function* todoInfo() {
  yield takeLatest("INFO_CUSTOMER", infoCustomerSaga);
}
function* todoPass() {
  yield takeLatest("PASS_CUSTOMER", passCustomerSaga);
}

const rootSaga = [
  fork(todoGet),
  fork(todoLogin),
  fork(todoRegister),
  fork(todoGetOne),
  fork(todoInfo),
  fork(todoPass),
];

export default function* customerSaga() {
  yield all([...rootSaga]);
}
