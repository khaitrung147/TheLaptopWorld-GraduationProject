import { call, put, takeLatest } from "redux-saga/effects";
import { getListCustomer } from "../../api/customer";
import { getListCustomerSuccess } from "../actions/customer";

function* getListCustomerSaga(action) {
  try {
    const data = yield call(getListCustomer);
    yield put(getListCustomerSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* customerSaga() {
  yield takeLatest("GET_LIST_CUSTOMER", getListCustomerSaga);
}

export default customerSaga;
