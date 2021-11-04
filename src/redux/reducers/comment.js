import {
  GET_LIST_COMMENTID,
  GET_LIST_COMMENTID_SUCCESS,
  POST_COMMENT_SUCCESS,
  POST_COMMENT,
} from "../constants/comment";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case POST_COMMENT:
      return {
        ...state,
        postload: true,
        status: false,
      };
    case GET_LIST_COMMENTID:
      return {
        ...state,
        load: true,
      };

    case GET_LIST_COMMENTID_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data,
        load: false,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        postload: false,
        status: true,
      };

    default:
      return state;
  }
};

export default commentReducer;
