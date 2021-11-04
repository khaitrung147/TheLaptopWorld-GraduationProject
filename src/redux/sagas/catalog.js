import { call, put, takeLatest } from "redux-saga/effects";
import { getList } from "../../api/catalog";
import { getListCatalogSuccess } from "../actions/catalog";

function* getListCatalogSaga(action) {
  try {
    const data = yield call(getList);
    yield put(getListCatalogSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* catalogSaga() {
  yield takeLatest("GET_LIST_CATALOG", getListCatalogSaga);
}

export default catalogSaga;
