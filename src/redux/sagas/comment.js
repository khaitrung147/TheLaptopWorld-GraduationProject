import { call, put, delay, fork, all, takeLatest } from "redux-saga/effects";
import { getListComment, postComment } from "../../api/comment";
import { getListCommentSuccess, postCommentSuccess } from "../actions/comment";

function* getListCommentIdSaga(action) {
  try {
    const data = yield call(getListComment, action.payload.id);
    yield delay(200);
    yield put(getListCommentSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* postCommentSaga(action) {
  try {
    const data = yield call(postComment, action.payload);
    if (data.status === 200) {
      yield delay(200);
      yield put(postCommentSuccess(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* todoGet() {
  yield takeLatest("GET_LIST_COMMENTID", getListCommentIdSaga);
}

function* todoPost() {
  yield takeLatest("POST_COMMENT", postCommentSaga);
}

const rootSaga = [fork(todoGet), fork(todoPost)];

export default function* commentSaga() {
  yield all([...rootSaga]);
}
