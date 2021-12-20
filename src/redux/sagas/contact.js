import { call, put, takeLatest } from "redux-saga/effects";
import { getList, updateContact } from "../../api/contact";
import { getListContactSuccess, updateContactSuccess } from "../actions/contact";

function* getListContactSaga(action) {
  try {
    const data = yield call(getList);
    yield put(getListContactSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* updateContactSaga(action) {
  try {
    const data = yield call(updateContact, action.payload);
    if (data.status === 200) {
      yield put(updateContactSuccess(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* contactSaga() {
  yield takeLatest("GET_LIST_CONTACT", getListContactSaga);
  yield takeLatest("UPDATE_CONTACT", updateContactSaga);
}

export default contactSaga;
