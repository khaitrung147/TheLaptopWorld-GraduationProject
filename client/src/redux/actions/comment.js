import {
  GET_LIST_COMMENTID,
  GET_LIST_COMMENTID_SUCCESS,
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
