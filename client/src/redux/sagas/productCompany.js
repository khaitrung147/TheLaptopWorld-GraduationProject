import { call, put, takeLatest } from "redux-saga/effects";
import { getList } from "../../api/productCompany";
import { getListProductCompanySuccess } from "../actions/productCompany";

function* getListProductCompanySaga(action) {
  try {
    const data = yield call(getList);
    yield put(getListProductCompanySuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* productCompanySaga() {
  yield takeLatest("GET_LIST_PRODUCT_COMPANY", getListProductCompanySaga);
}

export default productCompanySaga;
