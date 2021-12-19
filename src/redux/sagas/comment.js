import { call, put, fork, all, takeLatest } from "redux-saga/effects";
import { getListComment, postComment, repComment } from "../../api/comment";
import {
  getListCommentSuccess,
  postCommentSuccess,
  repCommentSuccess,
} from "../actions/comment";

function* getListCommentIdSaga(action) {
  try {
    const data = yield call(getListComment, action.payload.id);
    yield put(getListCommentSuccess(data));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* postCommentSaga(action) {
  console.log(action.payload);
  try {
    const data = yield call(postComment, action.payload);
    if (data.status === 200) {
      yield put(postCommentSuccess(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

function* repCommentSaga(action) {
  try {
    const data = yield call(repComment, action.payload);
    if (data.status === 200) {
      yield put(repCommentSuccess(data));
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

function* todoRep() {
  yield takeLatest("REP_COMMENT", repCommentSaga);
}

const rootSaga = [fork(todoGet), fork(todoPost), fork(todoRep)];

export default function* commentSaga() {
  yield all([...rootSaga]);
}
