import {
  GET_LIST_COMMENTID,
  GET_LIST_COMMENTID_SUCCESS,
  POST_COMMENT,
  POST_COMMENT_SUCCESS,
  REP_COMMENT,
  REP_COMMENT_SUCCESS,
} from "../constants/comment";

export const getListComment = (id) => {
  return {
    type: GET_LIST_COMMENTID,
    payload: { id },
  };
};

export const getListCommentSuccess = (payload) => {
  return {
    type: GET_LIST_COMMENTID_SUCCESS,
    payload,
  };
};

export const postComment = (bodyPost) => {
  return {
    type: POST_COMMENT,
    payload: bodyPost,
  };
};

export const postCommentSuccess = (payload) => {
  return {
    type: POST_COMMENT_SUCCESS,
    payload,
  };
};

export const repComment = (body) => {
  return {
    type: REP_COMMENT,
    payload: body,
  };
};

export const repCommentSuccess = (payload) => {
  return {
    type: REP_COMMENT_SUCCESS,
    payload,
  };
};
