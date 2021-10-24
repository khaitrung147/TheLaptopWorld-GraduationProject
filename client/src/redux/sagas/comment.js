import { call, put, takeLatest } from "redux-saga/effects";
import { getListComment } from "../../api/comment";
import { getListCommentSuccess } from "../actions/comment";

function* getListCommentIdSaga(action) {
  try {
    const data = yield call(getListComment, action.payload.id);
    yield put(getListCommentSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* commentSaga() {
  yield takeLatest("GET_LIST_RATEID", getListCommentIdSaga);
}

export default commentSaga;
