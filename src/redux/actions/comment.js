import {
  GET_LIST_COMMENTID,
  GET_LIST_COMMENTID_SUCCESS,
  POST_COMMENT,
  POST_COMMENT_SUCCESS,
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

export const postComment = (body) => {
  return {
    type: POST_COMMENT,
    payload: body,
  };
};

export const postCommentSuccess = (payload) => {
  return {
    type: POST_COMMENT_SUCCESS,
    payload,
  };
};
